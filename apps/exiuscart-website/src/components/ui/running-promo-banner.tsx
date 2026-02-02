'use client';

import { useState } from 'react';
import { Gift, Sparkles, Copy, Check } from 'lucide-react';
import { seasonalOffer } from '@/config/pricing';

export function RunningPromoBanner() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  if (!seasonalOffer.isActive) return null;

  return (
    <div className="mt-10 overflow-hidden">
      {/* Running/Marquee Banner */}
      <div className="relative bg-gradient-to-r from-[#F5A623]/10 via-[#F5A623]/5 to-[#F5A623]/10 border border-[#F5A623]/30 rounded-xl py-4 px-4">
        {/* Animated gradient border effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F5A623]/10 to-transparent animate-pulse rounded-xl" />

        <div className="relative flex items-center justify-center gap-2 flex-wrap">
          {/* Festival Icon */}
          <div className="flex items-center gap-2 text-[#F5A623]">
            <Sparkles className="w-5 h-5" />
            <span className="font-bold text-white">{seasonalOffer.name} Special!</span>
          </div>

          <span className="text-gray-500 hidden sm:inline">|</span>

          {/* One-time Offer */}
          <div className="flex items-center gap-2">
            <Gift className="w-4 h-4 text-[#F5A623]" />
            <span className="text-gray-300 text-sm">
              <span className="text-[#F5A623] font-bold">{seasonalOffer.oneTime.discount}% OFF</span>
              {' '}One-time:
            </span>
            <button
              onClick={() => copyCode(seasonalOffer.oneTime.code)}
              className="inline-flex items-center gap-1 bg-[#F5A623]/20 hover:bg-[#F5A623]/30 text-[#F5A623] font-mono font-bold px-2 py-0.5 rounded text-sm transition-all"
            >
              {seasonalOffer.oneTime.code}
              {copiedCode === seasonalOffer.oneTime.code ? (
                <Check className="w-3 h-3" />
              ) : (
                <Copy className="w-3 h-3" />
              )}
            </button>
          </div>

          <span className="text-gray-500 hidden sm:inline">|</span>

          {/* Monthly Offer */}
          <div className="flex items-center gap-2">
            <span className="text-gray-300 text-sm">
              <span className="text-emerald-400 font-bold">{seasonalOffer.monthly.discount}% OFF</span>
              {' '}Monthly:
            </span>
            <button
              onClick={() => copyCode(seasonalOffer.monthly.code)}
              className="inline-flex items-center gap-1 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 font-mono font-bold px-2 py-0.5 rounded text-sm transition-all"
            >
              {seasonalOffer.monthly.code}
              {copiedCode === seasonalOffer.monthly.code ? (
                <Check className="w-3 h-3" />
              ) : (
                <Copy className="w-3 h-3" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
