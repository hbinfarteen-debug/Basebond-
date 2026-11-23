export interface ServiceInclude {
  title: string;
  body: string;
}

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  name: string;
  short: string;
  icon: string;
  featured?: boolean;
  lede: string;
  intro: string[];
  includes: ServiceInclude[];
  audience: string;
  outcomes: string[];
  faqs: ServiceFaq[];
}

export const services: Service[] = [
  {
    slug: 'medical-billing',
    name: 'Medical Billing',
    short:
      'Medical aid claims, ICD-10 checks, rejection follow-ups and patient statements.',
    icon: 'stethoscope',
    featured: true,
    lede: 'A dedicated billing desk for private practices that would rather see patients than chase claims.',
    intro: [
      'Medical billing is where most private practices quietly lose money. Claims go out late, codes get rejected, short payments go unnoticed, and patient debt ages past the point of recovery.',
      'We run billing as a managed monthly function: claims are validated before submission, every rejection is worked to resolution, and remittances are reconciled against what was actually paid. You get a clear view of what is outstanding at any point in the month.',
    ],
    includes: [
      {
        title: 'Claim preparation and submission',
        body: 'Claims are checked against ICD-10 diagnosis codes and the relevant tariff structure before they leave the practice, so avoidable rejections never reach the medical aid.',
      },
      {
        title: 'Rejection and short-payment follow-up',
        body: 'Every rejection and underpayment is logged, queried with the scheme and tracked until it is paid, reversed or written off with a reason.',
      },
      {
        title: 'Remittance reconciliation',
        body: 'Payments received are matched back to individual claims so you can see exactly which services were paid, short-paid or declined.',
      },
      {
        title: 'Patient accounts and statements',
        body: 'Private portions are invoiced, statemented and followed up on a consistent cycle, with clear records of every communication.',
      },
      {
        title: 'Ageing and collections reporting',
        body: 'A monthly view of outstanding claims and patient debt by age, so nothing drifts silently into the 120-day bucket.',
      },
      {
        title: 'POPIA-compliant handling',
        body: 'Patient information is handled under a confidentiality discipline aligned to POPIA, with access limited to the practitioners assigned to your account.',
      },
    ],
    audience:
      'General practitioners, dentists, physiotherapists, optometrists, psychologists and specialist clinics.',
    outcomes: [
      'Fewer claims rejected on submission',
      'A clear monthly picture of outstanding money',
      'Billing backlogs worked down to a stable cycle',
      'Practice owners free to focus on patient care',
    ],
    faqs: [
      {
        q: 'Which practice management systems do you work with?',
        a: 'We work from your existing practice management or billing system rather than forcing a migration. If you are evaluating systems, we can advise on what suits your discipline and claim volume.',
      },
      {
        q: 'Can you take over an existing backlog?',
        a: 'Yes. Backlogs are assessed first so we can quote the catch-up work separately from the ongoing monthly service. We will tell you honestly which claims are still recoverable and which are not.',
      },
      {
        q: 'How is patient information protected?',
        a: 'Access is limited to the practitioners assigned to your account, records are handled under a written confidentiality undertaking, and our processes are designed around POPIA requirements for special personal information.',
      },
    ],
  },
  {
    slug: 'tax',
    name: 'Tax Services',
    short:
      'VAT201, provisional tax, income tax returns and SARS compliance reviews.',
    icon: 'receipt',
    lede: 'Returns prepared properly, submitted on time, and defended when SARS asks questions.',
    intro: [
      'Tax administration in South Africa is not difficult because the rules are complex. It is difficult because the deadlines are relentless and SARS queries arrive when you least expect them.',
      'We take ownership of the filing calendar: VAT201, provisional tax, annual income tax returns and the correspondence that follows. Where a return depends on your books being current, we close that loop rather than filing blind.',
    ],
    includes: [
      {
        title: 'VAT201 returns and reconciliations',
        body: 'Output and input VAT reconciled to your ledger before submission, with supporting schedules retained for audit purposes.',
      },
      {
        title: 'Provisional tax (IRP6)',
        body: 'First and second provisional estimates prepared from actual results rather than guesswork, with the cash-flow impact flagged in advance.',
      },
      {
        title: 'Annual income tax returns',
        body: 'Company and individual returns prepared, reviewed and submitted, with the supporting computation documented.',
      },
      {
        title: 'SARS queries and verifications',
        body: 'We respond to requests for information, manage verifications and represent you in correspondence, so you are not drafting letters to SARS alone.',
      },
      {
        title: 'Tax clearance and compliance status',
        body: 'We monitor your compliance status and resolve the underlying issues that block a valid tax clearance certificate.',
      },
      {
        title: 'Compliance reviews',
        body: 'A structured review of your filings and registrations to find gaps before SARS does.',
      },
    ],
    audience:
      'Businesses registered for VAT, companies with a year-end approaching, and owners who have fallen behind on filings.',
    outcomes: [
      'A filing calendar you can plan around',
      'Fewer penalties and interest charges',
      'Queries handled without disrupting your business',
      'A compliance status that holds up when you need it',
    ],
    faqs: [
      {
        q: 'Can you help if we are already behind on returns?',
        a: 'Yes. We regularly bring overdue VAT201, provisional tax, income tax and CIPC filings up to date, then put a schedule in place so the backlog does not rebuild.',
      },
      {
        q: 'Do you handle SARS audits?',
        a: 'We prepare and manage the response to audits and verifications, including reconstructing supporting records where documentation is incomplete. Complex disputes may require a specialist tax attorney, and we will tell you when that is the right call.',
      },
      {
        q: 'Will you file our return if the books are not up to date?',
        a: 'Not without telling you the risk. If the numbers are unreliable we will say so and recommend closing the bookkeeping gap first, rather than submitting a return that creates a bigger problem later.',
      },
    ],
  },
  {
    slug: 'payroll',
    name: 'Payroll',
    short:
      'Monthly payslips, PAYE, UIF, SDL, EMP201, EMP501 and IRP5 certificates.',
    icon: 'payments',
    lede: 'Payroll that runs on the same date every month, with the statutory returns filed behind it.',
    intro: [
      'Payroll errors are expensive in a way that other admin errors are not. Employees notice immediately, and the statutory returns compound the problem if the underlying calculations were wrong.',
      'We run payroll as a fixed monthly cycle: inputs collected by an agreed cut-off, payslips issued, PAYE, UIF and SDL calculated and the EMP201 submitted on time. At year end the EMP501 reconciliation and IRP5 certificates follow without a scramble.',
    ],
    includes: [
      {
        title: 'Monthly payslips',
        body: 'Payslips issued electronically each month with earnings, deductions, company contributions and year-to-date figures clearly shown.',
      },
      {
        title: 'PAYE, UIF and SDL',
        body: 'Statutory deductions calculated and reconciled, with the employer contributions correctly applied.',
      },
      {
        title: 'EMP201 submissions',
        body: 'Monthly declarations submitted to SARS by the seventh, with the payment reference and amount confirmed to you in advance.',
      },
      {
        title: 'EMP501 reconciliation',
        body: 'The annual employer reconciliation prepared and submitted, with discrepancies investigated rather than estimated away.',
      },
      {
        title: 'IRP5 and IT3(a) certificates',
        body: 'Employee tax certificates issued and distributed after a successful reconciliation.',
      },
      {
        title: 'Leave, overtime and records',
        body: 'Leave balances, overtime and deduction records maintained so that payroll inputs are traceable rather than reconstructed.',
      },
    ],
    audience:
      'Employers from one employee to mid-sized teams, including practices with commission and locum arrangements.',
    outcomes: [
      'A payroll date you can rely on',
      'Statutory returns filed without last-minute pressure',
      'Employee queries answered with a clear record',
      'A clean EMP501 at year end',
    ],
    faqs: [
      {
        q: 'What is the cut-off for monthly payroll changes?',
        a: 'We agree a cut-off with you during onboarding, typically three to five business days before pay date, so there is time to review and correct before payslips are issued.',
      },
      {
        q: 'Can you take over mid-year?',
        a: 'Yes. We collect the year-to-date payroll history and reconcile it before the first live run, so the EMP501 remains accurate at year end.',
      },
      {
        q: 'Do you handle UIF and SDL registrations?',
        a: 'Yes. We can register the employer for PAYE, UIF and SDL, and we review existing registrations for mismatches during onboarding.',
      },
    ],
  },
  {
    slug: 'bookkeeping',
    name: 'Bookkeeping',
    short:
      'Daily capture, bank reconciliations, debtors, creditors and general ledger.',
    icon: 'book',
    lede: 'Clean books, reconciled every month, so the numbers you look at are the numbers that are true.',
    intro: [
      'Bookkeeping is the foundation everything else stands on. Tax returns, management accounts and funding applications are only as reliable as the ledger underneath them.',
      'We keep the ledger current rather than catching up at year end: transactions captured and categorised, bank and card accounts reconciled, debtors and creditors maintained. When a return or a report is due, the work is already done.',
    ],
    includes: [
      {
        title: 'Transaction capture and coding',
        body: 'Income and expenses captured and coded consistently to your chart of accounts, with a documented treatment for anything ambiguous.',
      },
      {
        title: 'Bank and credit card reconciliations',
        body: 'Every account reconciled monthly, with unreconciled items investigated rather than carried forward.',
      },
      {
        title: 'Debtors and creditors',
        body: 'Customer and supplier ledgers maintained, with ageing reviewed so collection and payment decisions are informed.',
      },
      {
        title: 'General ledger and trial balance',
        body: 'A trial balance you can rely on each month, with suspense and clearing accounts kept empty.',
      },
      {
        title: 'Document management',
        body: 'A structured, cloud-based record of source documents so nothing depends on a shoebox or a single person\u2019s inbox.',
      },
      {
        title: 'Monthly close',
        body: 'A defined close process with a checklist, so the month is closed consistently and on schedule.',
      },
    ],
    audience:
      'Businesses whose books have fallen behind, and owners who want a monthly close instead of an annual scramble.',
    outcomes: [
      'Books that are current, not historical',
      'Reconciliations that survive scrutiny',
      'A clean handover to tax and reporting',
      'Visibility of where the money actually goes',
    ],
    faqs: [
      {
        q: 'We are a year behind. Can you catch up?',
        a: 'Yes. Catch-up work is scoped and quoted separately from the monthly service, with a realistic timeline and a clear list of what we need from you.',
      },
      {
        q: 'Which accounting software do you use?',
        a: 'We work in Sage, Xero and QuickBooks, and we can set up a new file or clean up an existing one. If you have no system yet, we will recommend one based on your volume and how you invoice.',
      },
      {
        q: 'How much do you need from us each month?',
        a: 'Bank statements and supporting documents, plus answers to the occasional query. The less structured your document flow, the more we will help you build a process around it.',
      },
    ],
  },
  {
    slug: 'company-registration',
    name: 'Company Registration',
    short:
      'CIPC registrations, annual returns, beneficial ownership and SARS setups.',
    icon: 'building',
    lede: 'From registering the entity to keeping it in good standing with CIPC and SARS.',
    intro: [
      'Registering a company is the easy part. Keeping it compliant is where most small businesses lose time — annual returns get missed, beneficial ownership records go stale, and the company quietly falls into deregistration territory.',
      'We handle the full lifecycle: registration, the annual return, the beneficial ownership register, director and address changes, and the SARS registrations that follow.',
    ],
    includes: [
      {
        title: 'New company registration',
        body: 'Name reservation, MOI, incorporation and the initial director and shareholder records, submitted through CIPC.',
      },
      {
        title: 'CIPC annual returns',
        body: 'Annual returns filed before the anniversary date, with turnover-based filing fees calculated correctly.',
      },
      {
        title: 'Beneficial ownership register',
        body: 'The beneficial ownership record maintained and filed as required, which is a common cause of rejected annual returns.',
      },
      {
        title: 'Director and address changes',
        body: 'Changes to directors, members, addresses and auditors submitted and recorded correctly.',
      },
      {
        title: 'MOI amendments',
        body: 'Memorandum of Incorporation amendments prepared and filed where the standard MOI no longer fits.',
      },
      {
        title: 'SARS registrations',
        body: 'Income tax, VAT, PAYE and customs registrations set up so the company can trade and invoice correctly.',
      },
    ],
    audience:
      'New entities, businesses restructuring ownership, and companies that have received a CIPC compliance notice.',
    outcomes: [
      'An entity that is registered and in good standing',
      'Annual returns that never slip past the anniversary date',
      'A beneficial ownership record that satisfies CIPC',
      'SARS registrations aligned with how you actually trade',
    ],
    faqs: [
      {
        q: 'How long does registration take?',
        a: 'Typically a few business days once the name is approved and all director information is complete. Delays usually come from name objections or incomplete identity verification, which we flag upfront.',
      },
      {
        q: 'Our annual return was rejected. Why?',
        a: 'The most common causes are a missing or outdated beneficial ownership register, incorrect turnover figures and address details that no longer match CIPC records. We diagnose the specific rejection reason before resubmitting.',
      },
      {
        q: 'Can you fix a company that is in deregistration?',
        a: 'Often, yes. Reinstatement is possible in many cases, but it depends on how far the process has progressed. We will assess the status and tell you honestly whether reinstatement or a fresh registration is the better route.',
      },
    ],
  },
  {
    slug: 'management-accounts',
    name: 'Management Accounts',
    short:
      'Monthly P&L, balance sheet, cash flow, budget tracking and KPI reporting.',
    icon: 'chart',
    lede: 'The monthly pack that tells you what is actually happening in the business.',
    intro: [
      'A bank balance is not a business result. Most owners only discover how the month went when the accountant files the annual return, months after the decisions were made.',
      'We produce a monthly management pack from your closed books: profit and loss, balance sheet, cash flow, and a short written commentary on what moved and why. Enough detail to act on, not so much that it goes unread.',
    ],
    includes: [
      {
        title: 'Profit and loss',
        body: 'Monthly and year-to-date results with comparatives, so trends are visible rather than isolated months.',
      },
      {
        title: 'Balance sheet',
        body: 'Assets, liabilities and equity reconciled to the ledger, with unusual balances explained.',
      },
      {
        title: 'Cash flow statement',
        body: 'Operating, investing and financing flows, plus a forward view of expected cash movement.',
      },
      {
        title: 'Budget versus actual',
        body: 'Performance against the agreed budget, with variances flagged and explained.',
      },
      {
        title: 'KPI dashboard',
        body: 'The handful of numbers that matter for your sector — gross margin, debtor days, labour cost ratio — tracked month on month.',
      },
      {
        title: 'Written commentary and review call',
        body: 'A short narrative on what changed, plus a scheduled call to discuss decisions rather than just numbers.',
      },
    ],
    audience:
      'Owners and directors who make decisions monthly and need reporting that keeps up.',
    outcomes: [
      'Decisions based on current numbers',
      'Early warning on margin and cash pressure',
      'A reporting pack lenders and investors can read',
      'A monthly rhythm of review rather than annual surprise',
    ],
    faqs: [
      {
        q: 'When do we receive the pack?',
        a: 'We target a fixed date each month, agreed during onboarding — commonly the fifth to tenth business day after month end, depending on how quickly bank and supplier documents arrive.',
      },
      {
        q: 'Can you report on multiple entities?',
        a: 'Yes. We can report per entity and consolidated, with intercompany balances reconciled so the consolidated view is meaningful.',
      },
      {
        q: 'Is this the same as audited financial statements?',
        a: 'No. Management accounts are internal reporting prepared for decision-making. Audited or independently reviewed financial statements are a separate statutory engagement.',
      },
    ],
  },
  {
    slug: 'business-support',
    name: 'Business Support',
    short:
      'Sage, Xero and QuickBooks setup, file clean-ups and process design.',
    icon: 'headset',
    lede: 'Fix the system behind the numbers, not just the numbers.',
    intro: [
      'A lot of bookkeeping problems are really system problems. The chart of accounts does not match how the business earns money, invoices are raised in three different places, and nobody can say who approved a payment.',
      'We set up and clean up the accounting stack, then document the processes around it so the same gaps do not reopen six months later.',
    ],
    includes: [
      {
        title: 'Accounting software setup',
        body: 'Sage, Xero or QuickBooks configured for your entity structure, VAT status and reporting needs.',
      },
      {
        title: 'Chart of accounts design',
        body: 'An account structure that reflects your actual revenue lines and cost drivers, so reports are useful by default.',
      },
      {
        title: 'Historical clean-up',
        body: 'Duplicate transactions, misallocations and unreconciled balances cleared, with a documented opening position.',
      },
      {
        title: 'Process and approval design',
        body: 'Invoice-to-payment and document-capture workflows defined, with approval thresholds that suit the size of the business.',
      },
      {
        title: 'Team training',
        body: 'Practical training for the people who capture and approve, so the system stays clean between our reviews.',
      },
      {
        title: 'System and integration review',
        body: 'A review of how your banking, invoicing, payroll and accounting tools connect, and where manual rework is costing time.',
      },
    ],
    audience:
      'Businesses outgrowing a spreadsheet, switching systems, or inheriting a file that nobody trusts.',
    outcomes: [
      'A chart of accounts that produces useful reports',
      'Fewer manual re-entries and duplicate captures',
      'Documented processes instead of tribal knowledge',
      'A file that is ready for tax and reporting',
    ],
    faqs: [
      {
        q: 'Do we have to change accounting software?',
        a: 'No. We will only recommend a migration if the current system genuinely cannot support your reporting or compliance needs. Most problems are configuration, not software.',
      },
      {
        q: 'Can you work with our internal bookkeeper?',
        a: 'Yes. Many clients keep an internal capture function and use us for review, reporting and compliance. We will define the handover points clearly.',
      },
      {
        q: 'How long does a clean-up take?',
        a: 'It depends on the volume and how far back the issues go. We scope it after reviewing the file and give you a fixed quote before starting.',
      },
    ],
  },
  {
    slug: 'year-end',
    name: 'Year-End & Reporting',
    short:
      'Year-end files, audit preparation, asset registers and financial statements.',
    icon: 'folder',
    lede: 'A year-end that closes once, cleanly, instead of reopening the same questions every year.',
    intro: [
      'Year end is where a year of small inconsistencies arrive at once. Balances do not agree, fixed assets have never been registered, and the auditor or reviewer asks for documents nobody kept.',
      'We prepare the year-end file properly: supporting schedules, asset registers, reconciliations and the draft statements that the review or audit engagement needs.',
    ],
    includes: [
      {
        title: 'Year-end management file',
        body: 'A complete, indexed file of schedules and supporting documents for the financial year.',
      },
      {
        title: 'Audit and review preparation',
        body: 'Draft financial statements and the working papers a reviewer or auditor will ask for, prepared before they ask.',
      },
      {
        title: 'Fixed asset registers',
        body: 'Assets recorded, capitalised and depreciated on a consistent basis, with additions and disposals documented.',
      },
      {
        title: 'Financial statement preparation',
        body: 'Statements prepared on the appropriate reporting framework for the entity.',
      },
      {
        title: 'Reconciliations and cut-off review',
        body: 'Accruals, provisions and cut-off reviewed so the year reflects the right period.',
      },
      {
        title: 'Prior-year comparatives',
        body: 'Comparatives aligned and any restatements explained rather than quietly absorbed.',
      },
    ],
    audience:
      'Companies with a financial year end approaching, and entities preparing for an independent review or audit.',
    outcomes: [
      'A year-end that closes on schedule',
      'Fewer queries from the reviewer or auditor',
      'An asset register that is actually maintained',
      'Statements that reflect the business accurately',
    ],
    faqs: [
      {
        q: 'Do you perform audits?',
        a: 'No. We prepare the file and the draft statements that support an independent review or audit engagement. Independence requirements mean the same firm should not prepare and audit the same set of statements.',
      },
      {
        q: 'When should we start the year-end process?',
        a: 'Ideally six to eight weeks before year end, so that outstanding reconciliations and asset records can be resolved while there is still time to act.',
      },
      {
        q: 'Can you take over a year-end that is already late?',
        a: 'Yes. We will assess what exists, identify the gaps, and work to a realistic date rather than promising a deadline the records cannot support.',
      },
    ],
  },
];

export const serviceBySlug = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);

/** Homepage grid order: the highest-intent services first. */
export const homeServiceOrder = [
  'medical-billing',
  'tax',
  'payroll',
  'bookkeeping',
  'company-registration',
  'management-accounts',
  'business-support',
  'year-end',
];

export const homeServices: Service[] = homeServiceOrder
  .map((slug) => serviceBySlug(slug))
  .filter((s): s is Service => Boolean(s));
