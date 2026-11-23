export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: 'How quickly can you take over our monthly books?',
    a: 'Most SMEs are onboarded within five business days of the initial consultation and a complete document handover. If there is a backlog to work through, we scope that separately so you know what the catch-up will take before anything starts.',
  },
  {
    q: 'Do you work with businesses outside Johannesburg and Cape Town?',
    a: 'Yes. We operate remote-first across all nine provinces, using cloud accounting and secure document sharing. Where an in-person meeting is genuinely useful, we will arrange one rather than pretend a video call is the same thing.',
  },
  {
    q: 'Which accounting software do you support?',
    a: 'Sage, Xero and QuickBooks. We can set up a new file, clean up an existing one, or advise on which suits your volume and how you invoice. We will not push a migration you do not need.',
  },
  {
    q: 'Can you catch up overdue SARS and CIPC filings?',
    a: 'Yes. We regularly bring overdue VAT201, EMP201, provisional tax, income tax and CIPC annual returns up to date, then put a schedule in place so the backlog does not rebuild.',
  },
  {
    q: 'How does medical billing work for a private practice?',
    a: 'We work from your existing practice management system: claims are validated against ICD-10 and tariff codes before submission, every rejection and short payment is followed up, remittances are reconciled, and patient accounts are managed on a consistent cycle.',
  },
  {
    q: 'How are fees structured?',
    a: 'Monthly services are charged on a fixed retainer based on transaction volume, payroll headcount and the services included. Once-off work such as registrations, catch-up bookkeeping or clean-ups is quoted separately and fixed before we start.',
  },
  {
    q: 'How do you handle our confidential information?',
    a: 'Access is limited to the practitioners assigned to your account, documents are stored in access-controlled cloud folders, and our processes are designed around POPIA. We are happy to sign your own confidentiality undertaking where required.',
  },
  {
    q: 'What happens if we want to leave?',
    a: 'You own your data and your accounting file. On termination we hand over the file, the supporting records and a written summary of the position, with no exit fee.',
  },
];
