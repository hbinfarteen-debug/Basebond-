export interface Value {
  icon: string;
  title: string;
  body: string;
}

export const values: Value[] = [
  {
    icon: 'check-circle',
    title: 'Accurate',
    body: 'Every reconciliation, VAT return and payslip is checked before it leaves the desk. If the numbers do not agree, we find out why rather than adjusting the difference away.',
  },
  {
    icon: 'shield',
    title: 'Reliable',
    body: 'Deadlines are met ahead of the date, not on it. Your practitioner is reachable on WhatsApp and email during business hours, and you know who is working on your file.',
  },
  {
    icon: 'award',
    title: 'Professional',
    body: 'Registered practitioners working under a documented confidentiality discipline, with reporting that stands up to a reviewer, a lender or SARS.',
  },
];

export interface Step {
  number: string;
  title: string;
  body: string;
}

export const steps: Step[] = [
  {
    number: '01',
    title: 'Book a free review',
    body: 'A 20-minute call to understand your entity, your current setup and where the pressure actually is.',
  },
  {
    number: '02',
    title: 'We assess the position',
    body: 'We review your SARS and CIPC standing, your books and your reporting, then send a written scope and fixed quote.',
  },
  {
    number: '03',
    title: 'We take over the admin',
    body: 'Onboarding, handover and the first live cycle: filings, payroll, reconciliations and billing run on a fixed schedule.',
  },
  {
    number: '04',
    title: 'You run the business',
    body: 'Monthly reporting on a set date, deadlines handled ahead of time, and a practitioner who answers when you ask.',
  },
];
