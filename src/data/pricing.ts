export interface PricingTier {
  name: string;
  for: string;
  price: string;
  cadence: string;
  features: string[];
  cta: string;
  featured?: boolean;
}

export const pricing: PricingTier[] = [
  {
    name: 'Starter',
    for: 'Solo founders and early-stage SMEs',
    price: 'R1 850',
    cadence: 'per month',
    features: [
      'Monthly bookkeeping and bank reconciliations',
      'Annual income tax return and provisional tax',
      'CIPC annual return and compliance check',
      'Quarterly check-in with your practitioner',
    ],
    cta: 'Start with Starter',
  },
  {
    name: 'Growth',
    for: 'Established SMEs with staff and VAT',
    price: 'R3 950',
    cadence: 'per month',
    features: [
      'Everything in Starter',
      'VAT201 preparation and submission',
      'Monthly payroll for up to 10 employees',
      'Monthly management accounts and commentary',
      'Dedicated practitioner on WhatsApp',
    ],
    cta: 'Choose Growth',
    featured: true,
  },
  {
    name: 'Premium',
    for: 'Scaling firms and multi-entity groups',
    price: 'R6 800',
    cadence: 'per month',
    features: [
      'Everything in Growth',
      'Payroll beyond 10 employees',
      'Cash-flow forecasting and budget reviews',
      'Year-end file, asset register and statements',
      'Consolidated reporting across entities',
    ],
    cta: 'Request a Premium quote',
  },
];

export const pricingNote =
  'Indicative pricing. Your final retainer is confirmed after a free review of your transaction volume, payroll headcount and current compliance position — before any work begins.';
