export interface Pain {
  icon: string;
  title: string;
  problem: string;
  solutionTitle: string;
  solution: string;
}

export const pains: Pain[] = [
  {
    icon: 'alert',
    title: 'SARS and eFiling stress',
    problem:
      'Unexpected penalties, confusing verifications, and hours lost trying to decode VAT201 and provisional tax queries.',
    solutionTitle: 'Returns prepared, submitted and defended',
    solution:
      'We prepare and reconcile every return before submission, respond to SARS correspondence directly, and keep your compliance status in good standing.',
  },
  {
    icon: 'receipt',
    title: 'Messy, outdated books',
    problem:
      'Unreconciled bank feeds, a folder of slips, and no clear view of whether you actually made a profit this month.',
    solutionTitle: 'A monthly close you can trust',
    solution:
      'Transactions captured and reconciled monthly, with a P&L and cash flow report delivered on a fixed date so the numbers are current when you need them.',
  },
  {
    icon: 'clock',
    title: 'Missed deadlines and admin',
    problem:
      'Late CIPC annual returns, delayed payroll runs, and uncollected medical aid claims quietly draining your cash flow.',
    solutionTitle: 'One calendar, nothing slipping',
    solution:
      'Every statutory deadline, payroll run and claims cycle is tracked in a single schedule, with work completed ahead of the date rather than on it.',
  },
];
