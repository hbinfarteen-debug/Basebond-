/**
 * Central site configuration.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * BEFORE GOING LIVE, replace every value marked TODO.
 * See README.md → "Pre-launch checklist".
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const site = {
  name: 'Basebond Solutions',
  legalName: 'Basebond Solutions',
  tagline: 'Numbers in order. Business on track.',
  description:
    'Registered accountants and tax practitioners serving South African SMEs and private medical practices. Bookkeeping, tax, payroll, CIPC and medical billing — remote-first, nationwide.',

  url: 'https://basebondsolutions.co.za',
  email: 'basebondsolutions@basebondsolutions.co.za',
  phoneDisplay: '+27 69 506 8509',
  phoneHref: '+27695068509',
  whatsapp: '27695068509',
  defaultWhatsAppMessage:
    'Hi Basebond Solutions, I would like to book a free consultation.',

  location: {
    // TODO: replace with the registered business address before launch.
    street: 'Registered address to be confirmed',
    city: 'Johannesburg',
    province: 'Gauteng',
    country: 'South Africa',
  },

  hours: 'Mon – Fri, 08:00 – 17:00 SAST',
  responsePromise: 'We reply within one business day.',

  /**
   * Credentials are gated behind `verified`.
   *
   * While `verified` is false the site renders a neutral line
   * ("Registration details available on request") instead of publishing
   * unverified registration numbers. Fill in the values, set
   * `verified: true`, and the real details appear in the footer and on
   * the About page — no other code changes needed.
   */
  credentials: {
    verified: false,
    body: '', // TODO: e.g. 'SAIBA' | 'SAIPA' | 'SAICA' | 'CIMA'
    bodyNumber: '', // TODO: membership number
    taxPractitioner: '', // TODO: SARS tax practitioner number
    companyReg: '', // TODO: CIPC registration, e.g. '2024/123456/07'
    vat: '', // TODO: VAT number, or leave blank if not registered
    vatRegistered: false, // TODO: set true once VAT registered
  },

  social: {
    // TODO: add profiles when available — they also feed the footer and schema.
    linkedin: '',
    facebook: '',
    instagram: '',
  },
} as const;

/** Build a WhatsApp deep link with an optional pre-filled message. */
export function whatsappLink(message: string = site.defaultWhatsAppMessage): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

/** One-line trust markers used instead of unverified statistics. */
export const trustMarkers = [
  { icon: 'shield', label: 'SARS-registered tax practitioners' },
  { icon: 'building', label: 'CIPC & beneficial ownership filings' },
  { icon: 'stethoscope', label: 'Medical billing for private practices' },
  { icon: 'globe', label: 'Remote-first across all nine provinces' },
] as const;

export const credibilityLine =
  'Registered accountants and tax practitioners working with South African SMEs and private medical practices nationwide.';
