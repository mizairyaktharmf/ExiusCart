'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { useCurrency } from '@/context/currency-context';
import { currencies, CurrencyCode } from '@/config/pricing';

const currencyOptions: CurrencyCode[] = ['AED', 'SAR', 'LKR', 'INR', 'USD'];

export function CurrencySwitcher() {
  const { currency, setCurrency, currencyConfig } = useCurrency();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#151F32] border border-gray-700 hover:border-gray-600 transition text-sm"
      >
        <span className="text-base">{currencyConfig.flag}</span>
        <span className="text-white font-medium">{currency}</span>
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-[#151F32] border border-gray-700 rounded-xl shadow-xl z-50 overflow-hidden">
          <div className="p-2">
            <p className="text-gray-500 text-xs px-3 py-2">Select Currency</p>
            {currencyOptions.map((code) => {
              const config = currencies[code];
              const isSelected = code === currency;

              return (
                <button
                  key={code}
                  type="button"
                  onClick={() => {
                    setCurrency(code);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition ${
                    isSelected
                      ? 'bg-[#F5A623]/10 text-[#F5A623]'
                      : 'hover:bg-[#1A2540] text-white'
                  }`}
                >
                  <span className="text-lg">{config.flag}</span>
                  <div className="flex-1 text-left">
                    <p className="font-medium text-sm">{config.code}</p>
                    <p className="text-gray-500 text-xs">{config.country}</p>
                  </div>
                  {isSelected && <Check className="w-4 h-4 text-[#F5A623]" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// Compact version for footer
export function CurrencySwitcherCompact() {
  const { currency, setCurrency, currencyConfig } = useCurrency();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 text-gray-400 hover:text-white text-sm transition"
      >
        <span>{currencyConfig.flag}</span>
        <span>{currency}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute bottom-full mb-2 left-0 w-48 bg-[#151F32] border border-gray-700 rounded-lg shadow-xl z-50 overflow-hidden">
          {currencyOptions.map((code) => {
            const config = currencies[code];
            const isSelected = code === currency;

            return (
              <button
                key={code}
                type="button"
                onClick={() => {
                  setCurrency(code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-2 px-3 py-2 text-sm transition ${
                  isSelected
                    ? 'bg-[#F5A623]/10 text-[#F5A623]'
                    : 'hover:bg-[#1A2540] text-white'
                }`}
              >
                <span>{config.flag}</span>
                <span className="flex-1 text-left">{config.code} - {config.country}</span>
                {isSelected && <Check className="w-3 h-3" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
