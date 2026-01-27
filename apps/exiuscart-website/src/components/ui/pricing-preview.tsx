'use client';

import Link from 'next/link';
import { Check } from 'lucide-react';
import { useCurrency } from '@/context/currency-context';
import { pricing, formatPrice } from '@/config/pricing';

export function PricingPreview() {
  const { currency, currencyConfig, isLoading } = useCurrency();
  const prices = pricing[currency];

  // Get the starter price (lowest)
  const starterPrice = prices.starter.oneTime;

  if (isLoading) {
    return (
      <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-8 animate-pulse">
        <div className="h-4 bg-gray-700 rounded w-24 mb-4"></div>
        <div className="h-12 bg-gray-700 rounded w-32 mb-2"></div>
        <div className="h-4 bg-gray-700 rounded w-48 mb-8"></div>
        <div className="space-y-3 mb-8">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-4 bg-gray-700 rounded w-36"></div>
          ))}
        </div>
        <div className="h-12 bg-gray-700 rounded"></div>
      </div>
    );
  }

  return (
    <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-8">
      <p className="text-gray-400 text-sm mb-2">Starting from</p>
      <div className="flex items-baseline gap-2 mb-2">
        <span className="text-5xl font-bold text-white">{starterPrice.toLocaleString()}</span>
        <span className="text-gray-400">{currency}</span>
      </div>
      <p className="text-gray-500 text-sm mb-8">One-time payment, lifetime access</p>

      <div className="space-y-3 mb-8">
        <PricingFeature text="POS & Invoicing" />
        <PricingFeature text="Product Management" />
        <PricingFeature text="Customer Database" />
        <PricingFeature text="Sales Reports" />
        <PricingFeature text="PDF & Excel Export" />
      </div>

      <Link
        href="/pricing"
        className="block text-center bg-[#F5A623] hover:bg-[#E09612] text-black font-semibold py-4 rounded-lg transition-all"
      >
        View All Plans
      </Link>

      {/* Region indicator */}
      <p className="text-center text-gray-600 text-xs mt-4">
        {currencyConfig.flag} Prices for {currencyConfig.country}
      </p>
    </div>
  );
}

function PricingFeature({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2">
      <Check className="w-4 h-4 text-[#F5A623]" />
      <span className="text-gray-300 text-sm">{text}</span>
    </div>
  );
}
