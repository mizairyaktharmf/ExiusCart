'use client';

import { useState } from 'react';
import { Gift, Sparkles, Copy, Check } from 'lucide-react';
import { seasonalOffer } from '@/config/pricing';

export function RunningPromoBanner() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyCode = (code: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  if (!seasonalOffer.isActive) return null;

  // Content that will scroll - repeated for seamless loop
  const PromoContent = () => (
    <div className="flex items-center gap-6 whitespace-nowrap px-4">
      <span className="flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-[#F5A623]" />
        <span className="font-bold text-white">{seasonalOffer.name} Special!</span>
      </span>

      <span className="text-gray-500">|</span>

      <span className="flex items-center gap-2">
        <Gift className="w-4 h-4 text-[#F5A623]" />
        <span className="text-gray-300 text-sm">
          <span className="text-[#F5A623] font-bold">{seasonalOffer.oneTime.discount}% OFF</span> One-time:
        </span>
        <button
          onClick={(e) => copyCode(seasonalOffer.oneTime.code, e)}
          className="inline-flex items-center gap-1 bg-[#F5A623]/20 hover:bg-[#F5A623]/30 text-[#F5A623] font-mono font-bold px-2 py-0.5 rounded text-sm transition-all"
        >
          {seasonalOffer.oneTime.code}
          {copiedCode === seasonalOffer.oneTime.code ? (
            <Check className="w-3 h-3" />
          ) : (
            <Copy className="w-3 h-3" />
          )}
        </button>
      </span>

      <span className="text-gray-500">|</span>

      <span className="flex items-center gap-2">
        <span className="text-gray-300 text-sm">
          <span className="text-emerald-400 font-bold">{seasonalOffer.monthly.discount}% OFF</span> Monthly:
        </span>
        <button
          onClick={(e) => copyCode(seasonalOffer.monthly.code, e)}
          className="inline-flex items-center gap-1 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 font-mono font-bold px-2 py-0.5 rounded text-sm transition-all"
        >
          {seasonalOffer.monthly.code}
          {copiedCode === seasonalOffer.monthly.code ? (
            <Check className="w-3 h-3" />
          ) : (
            <Copy className="w-3 h-3" />
          )}
        </button>
      </span>

      <span className="text-gray-500">|</span>
    </div>
  );

  return (
    <div className="mt-8 max-w-3xl mx-auto overflow-hidden group">
      <div className="relative bg-gradient-to-r from-[#151F32] via-[#1A2540] to-[#151F32] border border-[#F5A623]/20 rounded-lg py-3">
        {/* Marquee wrapper */}
        <div
          className="flex group-hover:[animation-play-state:paused]"
          style={{
            animation: 'marquee 25s linear infinite',
          }}
        >
          {/* Repeat content multiple times for seamless loop */}
          <PromoContent />
          <PromoContent />
          <PromoContent />
          <PromoContent />
        </div>
      </div>

      {/* Global styles for marquee animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
