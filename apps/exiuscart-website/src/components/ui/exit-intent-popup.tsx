'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { seasonalOffer } from '@/config/pricing';

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if popup was already shown in this session
    const alreadyShown = sessionStorage.getItem('exitIntentShown');
    if (alreadyShown) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger when mouse leaves from the top of the page
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    };

    // Add delay before enabling exit intent detection
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 5000); // Wait 5 seconds before enabling

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible || !seasonalOffer.isActive) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={handleClose}
      />

      {/* Popup */}
      <div className="relative w-full max-w-lg bg-[#0B1121] rounded-2xl border border-gray-800 overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Gradient Header */}
        <div className="bg-gradient-to-r from-[#F5A623] to-[#FF6B35] p-6 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            {seasonalOffer.name} Special Offer!
          </h2>
          <p className="text-white/90">
            Don&apos;t miss our biggest sale of the year
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Two Offer Boxes */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {/* One-time Offer */}
            <div className="bg-[#151F32] rounded-xl p-4 text-center border border-[#F5A623]/30">
              <p className="text-gray-400 text-xs mb-1">ONE-TIME</p>
              <div className="text-3xl font-bold text-[#F5A623] mb-1">
                {seasonalOffer.oneTime.discount}% OFF
              </div>
              <div className="bg-[#0B1121] rounded py-2 px-3 border border-dashed border-[#F5A623]">
                <span className="text-[#F5A623] font-mono text-sm font-bold">
                  {seasonalOffer.oneTime.code}
                </span>
              </div>
            </div>

            {/* Monthly Offer */}
            <div className="bg-[#151F32] rounded-xl p-4 text-center border border-emerald-500/30">
              <p className="text-gray-400 text-xs mb-1">MONTHLY</p>
              <div className="text-3xl font-bold text-emerald-400 mb-1">
                {seasonalOffer.monthly.discount}% OFF
              </div>
              <div className="bg-[#0B1121] rounded py-2 px-3 border border-dashed border-emerald-500">
                <span className="text-emerald-400 font-mono text-sm font-bold">
                  {seasonalOffer.monthly.code}
                </span>
              </div>
            </div>
          </div>

          {/* Timer */}
          <div className="flex items-center justify-center gap-2 mb-6 text-gray-400 text-sm">
            <Clock className="w-4 h-4" />
            <span>Limited time offer</span>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-3 gap-4 mb-6 text-center">
            <div>
              <p className="text-white font-semibold">7 Days</p>
              <p className="text-gray-500 text-xs">Free Trial</p>
            </div>
            <div>
              <p className="text-white font-semibold">No Card</p>
              <p className="text-gray-500 text-xs">Required</p>
            </div>
            <div>
              <p className="text-white font-semibold">Cancel</p>
              <p className="text-gray-500 text-xs">Anytime</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <Link
              href="/register"
              onClick={handleClose}
              className="flex items-center justify-center gap-2 w-full bg-[#F5A623] hover:bg-[#E09612] text-black font-semibold py-4 rounded-lg transition"
            >
              Claim Your Discount
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button
              type="button"
              onClick={handleClose}
              className="w-full text-gray-400 hover:text-white text-sm py-2 transition"
            >
              No thanks, I&apos;ll pay full price
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
