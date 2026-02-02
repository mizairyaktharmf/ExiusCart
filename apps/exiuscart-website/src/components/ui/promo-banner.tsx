'use client';

import { useState } from 'react';
import { Tag, Copy, X } from 'lucide-react';
import { promoCode } from '@/config/pricing';

export function PromoBanner() {
  const [copied, setCopied] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const copyPromoCode = () => {
    navigator.clipboard.writeText(promoCode.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (dismissed) return null;

  return (
    <div className="bg-gradient-to-r from-[#F5A623] to-[#E09612] py-3 px-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 flex-wrap">
        <Tag className="w-5 h-5 text-black" />
        <span className="text-black font-medium">
          Use code <span className="font-bold">{promoCode.code}</span> at checkout for {promoCode.discount}% off!
        </span>
        <button
          onClick={copyPromoCode}
          className="inline-flex items-center gap-1.5 bg-black/20 hover:bg-black/30 text-black font-semibold px-3 py-1 rounded-md text-sm transition-all"
        >
          <Copy className="w-4 h-4" />
          {copied ? 'Copied!' : 'Copy Code'}
        </button>
      </div>
      <button
        onClick={() => setDismissed(true)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-black/60 hover:text-black transition-colors"
        aria-label="Dismiss"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
}
