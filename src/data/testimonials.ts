export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  /** Optional path to a real, permissioned photo in /public. */
  photo?: string;
}

/**
 * Intentionally empty at launch.
 *
 * Add real, written-consented client quotes here as they are collected.
 * The testimonials section renders nothing while this array is empty —
 * no placeholder quotes, no invented names.
 *
 * Before publishing any entry, confirm:
 *  - the client gave written permission to be quoted and named
 *  - the claim in the quote is accurate and defensible
 *  - POPIA consent covers the name, role and any photo
 */
export const testimonials: Testimonial[] = [];
