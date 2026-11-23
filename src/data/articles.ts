export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  category: string;
  body: string;
}

export const articles: Article[] = [
  {
    slug: 'sars-key-dates-for-smes',
    title: 'SARS key dates: the recurring deadlines that catch SMEs out',
    description:
      'A practical map of the recurring SARS and CIPC deadlines South African small businesses run into, and how to build a calendar that keeps you ahead of them.',
    date: '2026-11-10',
    readingTime: '6 min read',
    category: 'Compliance',
    body: `
      <p>Most penalties we see are not the result of a business trying to avoid tax. They come from a deadline that nobody had written down, in a month when everyone was busy doing the actual work.</p>
      <p>This is the recurring pattern of South African compliance deadlines, and the practical way to stop missing them. Always confirm the current date on SARS eFiling or CIPC before you rely on it — SARS occasionally shifts dates, and public holidays move the effective deadline to the preceding business day.</p>

      <h2>The monthly cycle</h2>
      <h3>EMP201 — by the 7th</h3>
      <p>If you employ anyone, the EMP201 declaration and payment for PAYE, UIF and SDL is due by the seventh of the following month. This is the deadline most often missed by small employers, because it arrives faster than it feels like it should.</p>
      <p>The declaration must reconcile to the payroll that was actually run. If you are paying employees and not submitting an EMP201, the liability is accruing with penalties and interest whether or not SARS has contacted you yet.</p>

      <h3>VAT201 — the 25th, every second month</h3>
      <p>VAT-registered businesses submit a VAT201 for each two-month tax period, due by the 25th of the month after the period ends. Where the 25th falls on a weekend or public holiday, the deadline moves to the last business day before it.</p>
      <p>The return is only as good as the ledger behind it. If your bank feeds are not reconciled, you are effectively estimating your VAT position — and the input VAT you claim has to be supported by valid tax invoices.</p>

      <h2>The annual cycle</h2>
      <h3>Provisional tax — end of August and end of February</h3>
      <p>Companies and provisional taxpayers make two provisional payments a year: the first by the last day of August, the second by the last day of February. The second payment is where the estimate matters most, because it is based on actual year-to-date results.</p>
      <p>Underestimating deliberately to improve cash flow is a false economy. SARS can impose a penalty of up to 20% on the shortfall where the estimate is unreasonable.</p>

      <h3>Income tax returns</h3>
      <p>Company returns (ITR14) are generally due within twelve months of the financial year end. Individual returns (ITR12) follow the annual filing season dates published by SARS each year, with different deadlines for provisional and non-provisional taxpayers.</p>

      <h3>EMP501 — twice a year</h3>
      <p>The employer reconciliation runs twice: the interim reconciliation covering March to August, and the annual reconciliation covering September to February. The annual reconciliation produces the IRP5 and IT3(a) certificates your employees need.</p>

      <h3>CIPC annual return — on your anniversary</h3>
      <p>Every company must file an annual return within 30 business days of the anniversary of its incorporation. Miss it repeatedly and the company can be flagged for deregistration.</p>

      <h2>How to stop missing them</h2>
      <ul>
        <li><strong>Write the dates down once.</strong> Build a single calendar with every deadline, including the payroll cut-off that has to happen before it.</li>
        <li><strong>Work backwards from the deadline.</strong> A VAT201 due on the 25th needs the ledger closed by roughly the 15th.</li>
        <li><strong>Do not file on the numbers you wish you had.</strong> If the books are not current, fix that first — a late accurate return is cheaper than an on-time wrong one.</li>
        <li><strong>Check your compliance status.</strong> A valid tax clearance certificate depends on a clean filing history, and it is requested at exactly the moments you cannot afford a delay: tenders, finance applications, property leases.</li>
      </ul>

      <h2>If you are already behind</h2>
      <p>Overdue returns are fixable. What matters is that the backlog is worked through in the right order — registrations and outstanding returns first, then the reconciliation, then the compliance status — rather than filing randomly and hoping the status clears.</p>
      <p>If you would rather not manage this calendar yourself, that is precisely the work we take over.</p>
    `,
  },
  {
    slug: 'cipc-annual-return-rejected',
    title: 'Why your CIPC annual return keeps getting rejected',
    description:
      'The four reasons most CIPC annual returns fail, how to fix each one, and how to tell whether your company is already heading for deregistration.',
    date: '2026-10-22',
    readingTime: '5 min read',
    category: 'Company compliance',
    body: `
      <p>A rejected CIPC annual return is usually not a system problem. It is almost always one of four data problems, and each has a specific fix.</p>

      <h2>1. The beneficial ownership register is missing or stale</h2>
      <p>This is the most common cause of rejection, and the one most business owners have never heard of. CIPC requires companies to record and file beneficial ownership information — the natural persons who ultimately own or control the company, even where shares are held through another entity or a trust.</p>
      <p>If the register was never filed, or it names a company or trust as the beneficial owner instead of the natural person behind it, the annual return will not go through.</p>
      <p><strong>Fix:</strong> reconstruct the ownership chain to the natural persons, record their identity numbers, ownership percentage and the basis of control, then file the register before resubmitting the return.</p>

      <h2>2. The turnover figures do not make sense</h2>
      <p>CIPC calculates the annual return fee on turnover bands. Returns get rejected or flagged when the declared turnover is inconsistent with the company\u2019s financial history, or when a figure has been entered in the wrong field entirely.</p>
      <p><strong>Fix:</strong> use the turnover from the financial statements for the relevant year, not an estimate, and check which band it falls into before submitting.</p>

      <h2>3. The registered address no longer matches</h2>
      <p>If the company moved and the registered address was never updated, CIPC records and your submission disagree. This also affects where legal notices are served, which is a real risk beyond the rejection itself.</p>
      <p><strong>Fix:</strong> update the registered address on the CIPC record first, then submit the return.</p>

      <h2>4. There are outstanding returns from prior years</h2>
      <p>CIPC expects returns for every year since incorporation. A single missed year blocks the current one, and the problem compounds quietly until the company is flagged for deregistration.</p>
      <p><strong>Fix:</strong> file the outstanding years in sequence. There is no shortcut around the backlog.</p>

      <h2>How close are you to deregistration?</h2>
      <p>CIPC begins the deregistration process after repeated non-filing, usually with a notice to the registered address — which is exactly the address that is often out of date. Companies frequently discover the problem only when a bank or a tender requires a valid CIPC disclosure certificate.</p>
      <p>Reinstatement is possible in many cases, but it is slower and more expensive than simply filing. If you are unsure of your standing, the company search on the CIPC website shows the filing history and current status.</p>

      <h2>The annual rhythm that prevents all of this</h2>
      <ul>
        <li>Note the incorporation anniversary date — the return is due within 30 business days of it.</li>
        <li>Keep the beneficial ownership register current whenever shareholding or control changes, not just at filing time.</li>
        <li>Update the registered address the moment the business moves.</li>
        <li>File every year, even a nil or dormant return, so the sequence never breaks.</li>
      </ul>
      <p>If the company is already behind, the order matters: fix the records, file the backlog, then confirm the status. Doing it in the wrong order is how a two-week problem becomes a two-month one.</p>
    `,
  },
  {
    slug: 'sme-year-end-checklist',
    title: 'The SME year-end checklist: eight weeks out',
    description:
      'What to have ready before your financial year end so the close happens once, cleanly, instead of reopening the same questions every year.',
    date: '2026-09-15',
    readingTime: '6 min read',
    category: 'Year end',
    body: `
      <p>Year end is not a date. It is a process that either starts eight weeks before the date or starts late and costs everyone a fortnight of firefighting.</p>
      <p>This is the checklist we work through with clients, in the order that matters.</p>

      <h2>Eight weeks out: reconcile everything</h2>
      <ul>
        <li><strong>Bank and credit card accounts</strong> — every account reconciled to the statement, with unreconciled items investigated rather than carried forward.</li>
        <li><strong>Debtors</strong> — ageing reviewed, doubtful balances identified, and any write-offs discussed before they become a year-end surprise.</li>
        <li><strong>Creditors</strong> — supplier statements matched to your ledger, with disputes resolved while the supplier is still responsive.</li>
        <li><strong>Loan accounts</strong> — director and shareholder loans reconciled, with the tax implications of any debit balance flagged early.</li>
      </ul>

      <h2>Six weeks out: fixed assets</h2>
      <p>Most small businesses have never maintained an asset register. Year end is when that becomes a problem, because depreciation has to be calculated on something.</p>
      <ul>
        <li>List every asset the business owns, with purchase date and cost.</li>
        <li>Record disposals and scrapping, with the date and reason.</li>
        <li>Apply a consistent depreciation policy and check it against prior years.</li>
        <li>Confirm the tax allowances claimed agree to the accounting treatment, or document why they differ.</li>
      </ul>

      <h2>Four weeks out: accruals and cut-off</h2>
      <p>The single most common reason a year-end file gets reopened is cut-off. An invoice dated the 28th but relating to the next year, or a December expense captured in January, changes two years of numbers at once.</p>
      <ul>
        <li>Review the last two weeks of the year for expenses relating to the prior period.</li>
        <li>Confirm accrued expenses that have been incurred but not invoiced.</li>
        <li>Check provisions — leave pay, bonuses, doubtful debts — are reasonable and supported.</li>
        <li>For stock-holding businesses, perform a physical count close to year end and value it consistently.</li>
      </ul>

      <h2>Two weeks out: the file</h2>
      <p>Build one indexed folder. A reviewer or auditor should be able to find any figure without asking you a question.</p>
      <ul>
        <li>Trial balance and general ledger for the year.</li>
        <li>All reconciliations, signed and dated.</li>
        <li>Asset register and depreciation schedule.</li>
        <li>Debtors and creditors ageing.</li>
        <li>Loan account statements and agreements.</li>
        <li>Contracts, leases and any significant agreements entered into during the year.</li>
        <li>Prior-year signed statements for comparatives.</li>
      </ul>

      <h2>The questions that always come up</h2>
      <p>If any of these cannot be answered from the file, the year end is not ready:</p>
      <ul>
        <li>Does the balance sheet actually balance, and does every balance have a supporting schedule?</li>
        <li>Do the comparatives agree to last year\u2019s signed statements, or is there a restatement to explain?</li>
        <li>Is every VAT and PAYE submission for the year reflected in the ledger?</li>
        <li>Are there any unrecorded liabilities — a settlement, a legal matter, a supplier dispute?</li>
      </ul>

      <h2>What "clean" actually buys you</h2>
      <p>A clean year end is not an administrative achievement. It is what makes the financial statements usable: for a lender assessing a facility, for a buyer doing diligence, for a tender requiring three years of statements, and for you deciding whether the business is actually profitable.</p>
      <p>The eight-week version costs a few hours a week. The late version costs the same hours compressed into two weeks, plus whatever the reviewer charges to reconstruct what was missing.</p>
    `,
  },
];

export const articleBySlug = (slug: string): Article | undefined =>
  articles.find((a) => a.slug === slug);
