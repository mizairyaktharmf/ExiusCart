'use client';

import { useCurrency } from '@/context/currency-context';

// Currency display component - shows the auto-detected currency based on user location
// This is a read-only display, users cannot change their currency
export function CurrencyDisplay() {
  const { currency, currencyConfig, isLoading } = useCurrency();

  if (isLoading) {
    return (
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#151F32] border border-gray-700 text-sm">
        <span className="text-gray-400">Loading...</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#151F32] border border-gray-700 text-sm">
      <span className="text-base">{currencyConfig.flag}</span>
      <span className="text-white font-medium">{currency}</span>
    </div>
  );
}

// Compact version for footer - shows current currency
export function CurrencyDisplayCompact() {
  const { currency, currencyConfig } = useCurrency();

  return (
    <div className="flex items-center gap-1.5 text-gray-400 text-sm">
      <span>{currencyConfig.flag}</span>
      <span>{currency}</span>
    </div>
  );
}
