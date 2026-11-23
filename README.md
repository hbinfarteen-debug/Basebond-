# Basebond Solutions — website

Astro + Tailwind v4, deployed to Vercel. Static pages, one serverless function for the
contact form.

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # astro check + build
npm run preview    # serve the production build
```

## Project shape

```
src/
  data/          ← ALL copy and content lives here
    site.ts        contact details, credentials, nav, trust markers
    services.ts    8 services + their detail-page content
    faqs.ts        general FAQs
    pricing.ts     3 packages
    industries.ts  8 sectors
    pains.ts       3 problem/solution cards
    values.ts      brand values + onboarding steps
    testimonials.ts  (empty at launch — see below)
    articles.ts    3 resource articles
  components/    reusable UI (Header, Footer, forms, cards…)
  layouts/       BaseLayout (head, meta, schema, chrome)
  pages/         routes
  styles/        global.css (design tokens)
```

Nothing in `components/` or `pages/` hard-codes business copy. Change content in
`src/data/` and every page updates.

---

## Pre-launch checklist

### 1. Credentials — `src/data/site.ts`

Credentials are gated behind `credentials.verified`. While it is `false` the site
publishes a neutral "details available on request" line instead of unverified
registration numbers.

Fill in and set `verified: true`:

```ts
credentials: {
  verified: true,
  body: 'SAIBA',              // professional body
  bodyNumber: '…',            // membership number
  taxPractitioner: '…',       // SARS tax practitioner number
  companyReg: '2024/123456/07',
  vat: '…',
  vatRegistered: true,
}
```

Also replace `location.street` with the registered business address.

### 2. Contact form — environment variables

Add these in **Vercel → Settings → Environment Variables**:

| Variable | Value |
|---|---|
| `RESEND_API_KEY` | from resend.com |
| `CONTACT_TO` | where enquiries should land |
| `CONTACT_FROM` | verified sender, e.g. `Basebond Solutions <website@basebondsolutions.co.za>` |

Without `RESEND_API_KEY` the endpoint returns an error rather than silently dropping
enquiries. The sending domain must be verified in Resend (DNS records).

### 3. Domain & DNS

- Point `basebondsolutions.co.za` at Vercel.
- Add a `www` → apex redirect in Vercel.
- Verify the same domain in Resend for email sending.
- Update `site.url` in `src/data/site.ts` if the domain changes (it feeds canonical
  URLs, OG tags, sitemap and schema).

### 4. Images

- `public/og.svg` is a placeholder social card. **Convert it to `og.png` at 1200×630**
  before launch — most platforms do not render SVG for `og:image`. Then change the
  `image` default in `BaseLayout.astro` to `/og.png`.
- Real photography, when available, should be compressed to AVIF/WebP and given explicit
  `width`/`height`.

### 5. Proof

`src/data/testimonials.ts` is intentionally empty. The testimonials section renders
nothing while it is empty — no placeholder quotes. When adding a testimonial, confirm
written client consent and that the claim is accurate.

### 6. Legal

`/privacy`, `/paia`, `/terms` and `/cookies` are working drafts. **Have a South African
attorney review them**, and register an Information Officer with the Information
Regulator before launch.

### 7. Search

- Verify the site in Google Search Console and Bing Webmaster Tools.
- Submit `https://basebondsolutions.co.za/sitemap.xml`.
- Create/claim the Google Business Profile (needs the real registered address).

---

## Deploying to Vercel

1. Push this repository to GitHub.
2. Import it in Vercel — the Astro preset is detected automatically.
3. Add the environment variables above.
4. Deploy. `src/pages/api/contact.ts` becomes a single serverless function; every other
   route is prerendered to static HTML.

---

## Notes

- `code.html` is the original design prototype, kept for reference only. It is not part
  of the build and can be deleted once the new site is live.
- Tailwind runs at build time (not the CDN), fonts are self-hosted and subset to Latin,
  and icons are inline SVG — there is no third-party font or icon request at runtime.
