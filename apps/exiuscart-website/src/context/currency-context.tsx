'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import {
  CurrencyCode,
  currencies,
  countryToCurrency,
  defaultCurrency,
  CurrencyConfig,
} from '@/config/pricing';

interface CurrencyContextType {
  currency: CurrencyCode;
  currencyConfig: CurrencyConfig;
  setCurrency: (currency: CurrencyCode) => void;
  isLoading: boolean;
  detectedCountry: string | null;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

const STORAGE_KEY = 'exiuscart_currency';

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyCode>(defaultCurrency);
  const [isLoading, setIsLoading] = useState(true);
  const [detectedCountry, setDetectedCountry] = useState<string | null>(null);

  useEffect(() => {
    const initCurrency = async () => {
      // First check localStorage for saved preference
      const savedCurrency = localStorage.getItem(STORAGE_KEY) as CurrencyCode | null;

      if (savedCurrency && currencies[savedCurrency]) {
        setCurrencyState(savedCurrency);
        setIsLoading(false);
        return;
      }

      // Try to detect country via IP
      try {
        const response = await fetch('https://ipapi.co/json/', {
          signal: AbortSignal.timeout(3000), // 3 second timeout
        });

        if (response.ok) {
          const data = await response.json();
          const countryCode = data.country_code;
          setDetectedCountry(countryCode);

          const detectedCurrency = countryToCurrency[countryCode] || defaultCurrency;
          setCurrencyState(detectedCurrency);
          localStorage.setItem(STORAGE_KEY, detectedCurrency);
        }
      } catch (error) {
        // If geo-detection fails, use default
        console.log('Geo-detection failed, using default currency');
      }

      setIsLoading(false);
    };

    initCurrency();
  }, []);

  const setCurrency = (newCurrency: CurrencyCode) => {
    setCurrencyState(newCurrency);
    localStorage.setItem(STORAGE_KEY, newCurrency);
  };

  const value: CurrencyContextType = {
    currency,
    currencyConfig: currencies[currency],
    setCurrency,
    isLoading,
    detectedCountry,
  };

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
}
