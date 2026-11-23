export interface Industry {
  name: string;
  icon: string;
  line: string;
  detail: string;
  services: string[];
}

export const industries: Industry[] = [
  {
    name: 'Medical Practices',
    icon: 'stethoscope',
    line: 'Claims, coding and patient accounts under control.',
    detail:
      'General practitioners, dentists, physiotherapists, optometrists and specialist clinics. Billing is the pressure point, so claims and collections are managed as a dedicated monthly function.',
    services: ['medical-billing', 'payroll', 'tax'],
  },
  {
    name: 'Retail & E-Commerce',
    icon: 'store',
    line: 'Stock, margins and VAT across channels.',
    detail:
      'Multiple sales channels, stock movement and high transaction volumes make reconciliations the hard part. We keep the ledger current so margin and VAT are visible monthly, not annually.',
    services: ['bookkeeping', 'tax', 'management-accounts'],
  },
  {
    name: 'Construction',
    icon: 'hardhat',
    line: 'Contract accounting and subcontractor compliance.',
    detail:
      'Progress payments, retention, subcontractor declarations and CIS deductions. Reporting is structured around contracts so each project\u2019s margin is visible.',
    services: ['bookkeeping', 'payroll', 'management-accounts'],
  },
  {
    name: 'Trades & Contractors',
    icon: 'wrench',
    line: 'Simple books for people who work with their hands.',
    detail:
      'Plumbers, electricians, builders and maintenance businesses. We keep the admin minimal and the compliance current, so quotes and invoicing are the only things you think about.',
    services: ['bookkeeping', 'tax', 'payroll'],
  },
  {
    name: 'Consultants & Professionals',
    icon: 'briefcase',
    line: 'Clean reporting for fee-based businesses.',
    detail:
      'Consultancies, agencies and professional practices. Revenue recognition, project profitability and provisional tax planning are the recurring issues we resolve.',
    services: ['management-accounts', 'tax', 'company-registration'],
  },
  {
    name: 'Hospitality',
    icon: 'utensils',
    line: 'Cash handling, tips, stock and seasonal VAT.',
    detail:
      'Restaurants, cafés, guesthouses and event businesses. Daily cash and card reconciliation, tip and staff structuring, stock controls and seasonal VAT cycles.',
    services: ['bookkeeping', 'payroll', 'tax'],
  },
  {
    name: 'Transport & Logistics',
    icon: 'truck',
    line: 'Fuel, maintenance and asset-heavy reporting.',
    detail:
      'Fleet operators and courier businesses. Fuel and maintenance tracking, vehicle asset registers, depreciation and driver payroll are structured for how the operation actually runs.',
    services: ['bookkeeping', 'management-accounts', 'year-end'],
  },
  {
    name: 'Start-ups',
    icon: 'sparkles',
    line: 'The right foundation from the first invoice.',
    detail:
      'New entities that need registration, a chart of accounts and a compliance calendar set up properly the first time, rather than rebuilt in year two.',
    services: ['company-registration', 'bookkeeping', 'tax'],
  },
];
