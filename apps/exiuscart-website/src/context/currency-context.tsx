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
  isLoading: boolean;
  detectedCountry: string | null;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

const CURRENCY_LOCK_KEY = 'exiuscart_currency_lock';

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<CurrencyCode>(defaultCurrency);
  const [isLoading, setIsLoading] = useState(true);
  const [detectedCountry, setDetectedCountry] = useState<string | null>(null);

  useEffect(() => {
    const initCurrency = async () => {
      // Detect country via IP - currency is automatically set based on location
      try {
        const response = await fetch('https://ipapi.co/json/', {
          signal: AbortSignal.timeout(3000), // 3 second timeout
        });

        if (response.ok) {
          const data = await response.json();
          const countryCode = data.country_code;
          setDetectedCountry(countryCode);

          // Set currency based on IP location - users cannot change this
          const detectedCurrency = countryToCurrency[countryCode] || defaultCurrency;
          setCurrency(detectedCurrency);

          // Store for server-side verification during payment
          sessionStorage.setItem(CURRENCY_LOCK_KEY, JSON.stringify({
            currency: detectedCurrency,
            country: countryCode,
            timestamp: Date.now(),
          }));
        }
      } catch (error) {
        // If geo-detection fails, use default currency
        console.log('Geo-detection failed, using default currency');
        setCurrency(defaultCurrency);
      }

      setIsLoading(false);
    };

    initCurrency();
  }, []);

  const value: CurrencyContextType = {
    currency,
    currencyConfig: currencies[currency],
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
