'use client';

import { useState } from 'react';
import { Copy, X, Sparkles } from 'lucide-react';
import { seasonalOffer } from '@/config/pricing';

export function PromoBanner() {
  const [copied, setCopied] = useState<string | null>(null);
  const [dismissed, setDismissed] = useState(false);

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(code);
    setTimeout(() => setCopied(null), 2000);
  };

  if (dismissed || !seasonalOffer.isActive) return null;

  return (
    <div className="bg-gradient-to-r from-[#F5A623] to-[#E09612] py-2 md:py-3 px-4 relative">
      {/* Desktop View */}
      <div className="hidden md:flex max-w-7xl mx-auto items-center justify-center gap-3">
        <Sparkles className="w-5 h-5 text-black" />
        <span className="text-black font-bold">{seasonalOffer.name} Sale!</span>
        <span className="text-black/80">|</span>
        <span className="text-black font-medium">
          One-time: <span className="font-bold">{seasonalOffer.oneTime.discount}% OFF</span> with
        </span>
        <button
          onClick={() => copyCode(seasonalOffer.oneTime.code)}
          className="inline-flex items-center gap-1.5 bg-black/20 hover:bg-black/30 text-black font-semibold px-3 py-1 rounded-md text-sm transition-all"
        >
          <Copy className="w-4 h-4" />
          {copied === seasonalOffer.oneTime.code ? 'Copied!' : seasonalOffer.oneTime.code}
        </button>
        <span className="text-black/80">|</span>
        <span className="text-black font-medium">
          Monthly: <span className="font-bold">{seasonalOffer.monthly.discount}% OFF</span> with
        </span>
        <button
          onClick={() => copyCode(seasonalOffer.monthly.code)}
          className="inline-flex items-center gap-1.5 bg-black/20 hover:bg-black/30 text-black font-semibold px-3 py-1 rounded-md text-sm transition-all"
        >
          <Copy className="w-4 h-4" />
          {copied === seasonalOffer.monthly.code ? 'Copied!' : seasonalOffer.monthly.code}
        </button>
      </div>

      {/* Mobile & Tablet View */}
      <div className="md:hidden flex items-center justify-center gap-2 pr-8">
        <Sparkles className="w-4 h-4 text-black flex-shrink-0" />
        <span className="text-black font-bold text-sm">{seasonalOffer.name}!</span>
        <span className="text-black/80">|</span>
        <span className="text-black text-sm">
          <span className="font-bold">{seasonalOffer.oneTime.discount}% OFF</span>
        </span>
        <button
          onClick={() => copyCode(seasonalOffer.oneTime.code)}
          className="inline-flex items-center gap-1 bg-black/20 hover:bg-black/30 text-black font-semibold px-2 py-0.5 rounded text-xs transition-all"
        >
          <Copy className="w-3 h-3" />
          {copied === seasonalOffer.oneTime.code ? 'Copied!' : seasonalOffer.oneTime.code}
        </button>
      </div>

      <button
        onClick={() => setDismissed(true)}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-black/60 hover:text-black transition-colors"
        aria-label="Dismiss"
      >
        <X className="w-4 h-4 md:w-5 md:h-5" />
      </button>
    </div>
  );
}
