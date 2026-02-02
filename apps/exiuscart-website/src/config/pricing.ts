export type CurrencyCode = 'AED' | 'LKR' | 'USD';

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  name: string;
  country: string;
  flag: string;
  showMonthly: boolean;
}

export interface PlanPricing {
  oneTime: number;
  monthly: number;
}

export interface Plan {
  id: string;
  name: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
}

// Promo code configuration
export const promoCode = {
  code: 'RAMZAN1447',
  discount: 20, // 20% off
  description: 'Get 20% off on checkout',
};

// Currency configurations - Only AED, LKR, USD
export const currencies: Record<CurrencyCode, CurrencyConfig> = {
  AED: {
    code: 'AED',
    symbol: 'AED',
    name: 'UAE Dirham',
    country: 'United Arab Emirates',
    flag: '🇦🇪',
    showMonthly: true,
  },
  LKR: {
    code: 'LKR',
    symbol: 'Rs.',
    name: 'Sri Lankan Rupee',
    country: 'Sri Lanka',
    flag: '🇱🇰',
    showMonthly: true,
  },
  USD: {
    code: 'USD',
    symbol: '$',
    name: 'US Dollar',
    country: 'International',
    flag: '🌍',
    showMonthly: true,
  },
};

// Plan details (features are the same across all currencies)
// Only 3 plans: Starter, Business, Pro
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
];

// Pricing by currency (one-time and monthly)
export const pricing: Record<CurrencyCode, Record<string, PlanPricing>> = {
  AED: {
    starter: { oneTime: 599, monthly: 29 },
    business: { oneTime: 699, monthly: 49 },
    pro: { oneTime: 999, monthly: 59 },
  },
  LKR: {
    starter: { oneTime: 6999, monthly: 999 },
    business: { oneTime: 8999, monthly: 1399 },
    pro: { oneTime: 12999, monthly: 2999 },
  },
  USD: {
    starter: { oneTime: 49, monthly: 4.99 },
    business: { oneTime: 119, monthly: 6.99 },
    pro: { oneTime: 299, monthly: 12.99 },
  },
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

// Helper to calculate discounted price
export function getDiscountedPrice(amount: number, discountPercent: number): number {
  return amount * (1 - discountPercent / 100);
}
