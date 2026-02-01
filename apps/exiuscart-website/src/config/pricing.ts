export type CurrencyCode = 'AED' | 'LKR' | 'USD';

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  name: string;
  country: string;
  flag: string;
  showProPlus: boolean;
  showMonthly: boolean;
}

export interface PlanPricing {
  oneTime: number;
  originalOneTime: number;
  monthly?: number;
  originalMonthly?: number;
}

export interface Plan {
  id: string;
  name: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
  bonusFeatures?: string[];
}

// Currency configurations - Only AED, LKR, USD
export const currencies: Record<CurrencyCode, CurrencyConfig> = {
  AED: {
    code: 'AED',
    symbol: 'AED',
    name: 'UAE Dirham',
    country: 'United Arab Emirates',
    flag: '🇦🇪',
    showProPlus: true,
    showMonthly: true,
  },
  LKR: {
    code: 'LKR',
    symbol: 'Rs.',
    name: 'Sri Lankan Rupee',
    country: 'Sri Lanka',
    flag: '🇱🇰',
    showProPlus: false,
    showMonthly: false,
  },
  USD: {
    code: 'USD',
    symbol: '$',
    name: 'US Dollar',
    country: 'International',
    flag: '🌍',
    showProPlus: false,
    showMonthly: false,
  },
};

// Plan details (features are the same across all currencies)
export const plans: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for small shops getting started',
    features: [
      '25 Products',
      '1 User Access',
      'Basic POS',
      'Invoice Generation',
      'Customer Management',
      'Sales Reports',
      'Email Support',
    ],
  },
  {
    id: 'business',
    name: 'Business',
    description: 'For growing shops needing more capacity',
    features: [
      '50 Products',
      '1 User Access',
      'Full POS System',
      'Invoice Generation',
      'Customer Management',
      'Advanced Reports',
      'PDF & Excel Export',
      'Priority Support',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'Complete solution with WhatsApp & Inventory',
    highlighted: true,
    badge: 'Most Popular',
    features: [
      '100 Products',
      '2 User Access',
      'Full POS System',
      'WhatsApp Orders',
      'Inventory Management',
      'Low Stock Alerts',
      'Advanced Analytics',
      'Priority Support',
    ],
  },
  {
    id: 'proplus',
    name: 'Pro+',
    description: 'Everything + Free Thermal Printer',
    badge: 'Best Value',
    bonusFeatures: [
      'Free Thermal Printer',
      'Unlimited Products',
      'Multiple Staff',
      'WhatsApp Orders',
      'Full Inventory System',
      'Premium Support',
    ],
    features: [
      'Everything in Pro',
      'Unlimited Products',
      'Multiple Staff Accounts',
      'Free Thermal Printer',
      'Premium 24/7 Support',
      'Custom Branding',
    ],
  },
];

// Pricing by currency (one-time payments)
export const pricing: Record<CurrencyCode, Record<string, PlanPricing>> = {
  AED: {
    starter: { oneTime: 499, originalOneTime: 599 },
    business: { oneTime: 699, originalOneTime: 799 },
    pro: { oneTime: 999, originalOneTime: 1199 },
    proplus: { oneTime: 1299, originalOneTime: 1499 },
  },
  LKR: {
    starter: { oneTime: 6999, originalOneTime: 8999 },
    business: { oneTime: 8999, originalOneTime: 10999 },
    pro: { oneTime: 12999, originalOneTime: 15999 },
    proplus: { oneTime: 0, originalOneTime: 0 }, // Not available
  },
  USD: {
    starter: { oneTime: 49, originalOneTime: 69 },
    business: { oneTime: 119, originalOneTime: 149 },
    pro: { oneTime: 299, originalOneTime: 399 },
    proplus: { oneTime: 0, originalOneTime: 0 }, // Not available
  },
};

// Monthly pricing (only for AED)
export const monthlyPricing: Record<CurrencyCode, Record<string, PlanPricing> | null> = {
  AED: {
    starter: { oneTime: 499, originalOneTime: 599, monthly: 49, originalMonthly: 59 },
    business: { oneTime: 699, originalOneTime: 799, monthly: 79, originalMonthly: 99 },
    pro: { oneTime: 999, originalOneTime: 1199, monthly: 129, originalMonthly: 159 },
    proplus: { oneTime: 1299, originalOneTime: 1499, monthly: 179, originalMonthly: 199 },
  },
  LKR: null, // Coming soon
  USD: null, // Coming soon
};

// Country to currency mapping
// UAE -> AED, Sri Lanka -> LKR, Everyone else -> USD
export const countryToCurrency: Record<string, CurrencyCode> = {
  // UAE
  AE: 'AED',
  // Sri Lanka
  LK: 'LKR',
  // All other countries will use defaultCurrency (USD)
};

// Default currency for unknown countries (everyone except UAE and Sri Lanka)
export const defaultCurrency: CurrencyCode = 'USD';

// Helper function to format price
export function formatPrice(amount: number, currency: CurrencyCode): string {
  const config = currencies[currency];

  if (currency === 'LKR') {
    return `${config.symbol}${amount.toLocaleString()}`;
  }

  if (currency === 'USD') {
    return `${config.symbol}${amount}`;
  }

  return `${amount.toLocaleString()} ${config.symbol}`;
}

// Helper to get savings amount
export function getSavings(planId: string, currency: CurrencyCode): number {
  const planPricing = pricing[currency][planId];
  if (!planPricing) return 0;
  return planPricing.originalOneTime - planPricing.oneTime;
}
