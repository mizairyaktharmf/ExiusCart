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

// ============================================
// SEASONAL OFFER CONFIGURATION
// Easy to update for different seasons/festivals
// ============================================
export const seasonalOffer = {
  // Current season/festival name
  name: 'Ramzan',
  isActive: true, // Set to false to disable seasonal offers

  // One-time payment offer
  oneTime: {
    code: 'RAMZAN1447',
    discount: 35, // 35% off
    description: 'Ramzan Special - 35% off on one-time payment',
  },

  // Monthly subscription offer
  monthly: {
    code: 'WELCOME10',
    discount: 10, // 10% off
    description: '10% off on monthly subscription',
  },
};

// Legacy single promo code (for backwards compatibility)
export const promoCode = seasonalOffer.oneTime;

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
      '45 Products',
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
      '100 Products',
      '2 User Access',
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
      '3 User Access',
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
    starter: { oneTime: 399, monthly: 29 },
    business: { oneTime: 499, monthly: 49 },
    pro: { oneTime: 699, monthly: 59 },
  },
  LKR: {
    starter: { oneTime: 12999, monthly: 799 },
    business: { oneTime: 19999, monthly: 1299 },
    pro: { oneTime: 29999, monthly: 2499 },
  },
  USD: {
    starter: { oneTime: 99, monthly: 4.99 },
    business: { oneTime: 139, monthly: 6.99 },
    pro: { oneTime: 199, monthly: 11.99 },
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
