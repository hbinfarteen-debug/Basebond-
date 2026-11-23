import type { APIRoute } from 'astro';
import { site } from '../../data/site';

export const prerender = false;

const RESEND_ENDPOINT = 'https://api.resend.com/emails';

const json = (body: Record<string, unknown>, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

/** Best-effort in-memory throttle. Serverless instances are short-lived, but
 *  this still stops naive repeat submissions from a single client. */
const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;

function rateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 500) hits.clear();
  return recent.length > MAX_HITS;
}

const escape = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

async function sendEmail(payload: {
  to: string | string[];
  subject: string;
  html: string;
  replyTo?: string;
}): Promise<boolean> {
  const apiKey = import.meta.env.RESEND_API_KEY ?? process.env.RESEND_API_KEY;
  const from =
    import.meta.env.CONTACT_FROM ??
    process.env.CONTACT_FROM ??
    'Basebond Solutions <website@basebondsolutions.co.za>';

  if (!apiKey) {
    if (import.meta.env.DEV) {
      console.info('[contact] RESEND_API_KEY not set — email not sent (dev).', {
        to: payload.to,
        subject: payload.subject,
      });
      return true;
    }
    console.error('[contact] RESEND_API_KEY is not configured. Enquiry was NOT delivered.');
    return false;
  }

  const response = await fetch(RESEND_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: Array.isArray(payload.to) ? payload.to : [payload.to],
      subject: payload.subject,
      html: payload.html,
      ...(payload.replyTo ? { reply_to: payload.replyTo } : {}),
    }),
  });

  if (!response.ok) {
    console.error('[contact] Resend rejected the message', response.status, await response.text());
    return false;
  }
  return true;
}

const shell = (heading: string, rows: string, intro = '') => `
  <div style="background:#faf8f3;padding:32px 16px;font-family:Manrope,Arial,sans-serif;color:#0b0b0c">
    <div style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e5e0d5;border-radius:16px;overflow:hidden">
      <div style="background:#0b0b0c;padding:20px 28px">
        <span style="color:#f5b800;font-size:12px;letter-spacing:2px;font-weight:700">BASEBOND SOLUTIONS</span>
      </div>
      <div style="padding:28px">
        <h1 style="margin:0 0 12px;font-size:20px;line-height:1.3">${heading}</h1>
        ${intro ? `<p style="margin:0 0 20px;color:#59595e;font-size:14px;line-height:1.6">${intro}</p>` : ''}
        <table style="width:100%;border-collapse:collapse;font-size:14px">${rows}</table>
      </div>
      <div style="padding:16px 28px;border-top:1px solid #e5e0d5;color:#59595e;font-size:12px">
        Sent from basebondsolutions.co.za
      </div>
    </div>
  </div>
`;

const row = (label: string, value: string) => `
  <tr>
    <td style="padding:8px 0;color:#59595e;width:150px;vertical-align:top">${escape(label)}</td>
    <td style="padding:8px 0;font-weight:600;vertical-align:top">${escape(value).replace(/\n/g, '<br>')}</td>
  </tr>
`;

export const POST: APIRoute = async ({ request, clientAddress }) => {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return json({ ok: false, error: 'Invalid request.' }, 400);
  }

  const ip = clientAddress ?? 'unknown';
  if (rateLimited(ip)) {
    return json({ ok: false, error: 'Too many requests. Please try again shortly.' }, 429);
  }

  // Bot traps: a filled honeypot or a sub-2.5s submission.
  if (String(data.website ?? '').trim() !== '') {
    return json({ ok: true });
  }
  const startedAt = Number(data.startedAt ?? 0);
  if (startedAt && Date.now() - startedAt < 2500) {
    return json({ ok: true });
  }

  const kind = String(data.kind ?? 'enquiry');
  const email = String(data.email ?? '').trim();

  if (!isEmail(email)) {
    return json({ ok: false, error: 'A valid email address is required.' }, 400);
  }

  const to = import.meta.env.CONTACT_TO ?? process.env.CONTACT_TO ?? site.email;

  if (kind === 'newsletter') {
    const ok = await sendEmail({
      to,
      subject: 'Newsletter signup',
      html: shell(
        'New newsletter subscriber',
        row('Email', email) + row('Source', 'Website footer'),
      ),
      replyTo: email,
    });
    return ok ? json({ ok: true }) : json({ ok: false, error: 'Could not subscribe.' }, 502);
  }

  const name = String(data.name ?? '').trim();
  const business = String(data.business ?? '').trim();
  const phone = String(data.phone ?? '').trim();
  const service = String(data.service ?? '').trim();
  const message = String(data.message ?? '').trim();
  const consent = data.consent === true;

  const errors: string[] = [];
  if (name.length < 2) errors.push('name');
  if (phone.replace(/\D/g, '').length < 9) errors.push('phone');
  if (!service) errors.push('service');
  if (message.length < 10) errors.push('message');
  if (!consent) errors.push('consent');

  if (errors.length) {
    return json({ ok: false, error: 'Please check the highlighted fields.', fields: errors }, 422);
  }

  const rows =
    row('Name', name) +
    row('Business', business || '—') +
    row('Email', email) +
    row('Phone', phone) +
    row('Service', service) +
    row('Message', message) +
    row('POPIA consent', 'Yes') +
    row('Received', new Date().toLocaleString('en-ZA', { timeZone: 'Africa/Johannesburg' }));

  const delivered = await sendEmail({
    to,
    subject: `New enquiry — ${service} — ${name}`,
    html: shell('New website enquiry', rows),
    replyTo: email,
  });

  if (!delivered) {
    return json(
      { ok: false, error: 'We could not send that just now. Please email us directly.' },
      502,
    );
  }

  // Confirmation to the enquirer. Non-blocking: a failure here must not
  // make the enquiry look unsent.
  await sendEmail({
    to: email,
    subject: 'We have your enquiry — Basebond Solutions',
    html: shell(
      `Thank you, ${escape(name)}`,
      row('Service', service) +
        row('Your message', message) +
        row('Reply time', 'Within one business day'),
      'Your enquiry has reached our team. A practitioner will review it and reply within one business day.',
    ),
  }).catch((error) => console.error('[contact] confirmation failed', error));

  return json({ ok: true });
};
