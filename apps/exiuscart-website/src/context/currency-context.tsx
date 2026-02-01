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
const validCurrencies: CurrencyCode[] = ['AED', 'LKR', 'USD'];

// Multiple IP detection APIs for fallback
async function detectCountryFromIP(): Promise<string | null> {
  // Try multiple APIs in order of reliability
  const apis = [
    {
      url: 'https://ip-api.com/json/?fields=countryCode',
      getCountry: (data: { countryCode?: string }) => data.countryCode,
    },
    {
      url: 'https://ipapi.co/json/',
      getCountry: (data: { country_code?: string }) => data.country_code,
    },
    {
      url: 'https://ipwho.is/',
      getCountry: (data: { country_code?: string }) => data.country_code,
    },
  ];

  for (const api of apis) {
    try {
      const response = await fetch(api.url, {
        signal: AbortSignal.timeout(5000), // 5 second timeout
      });

      if (response.ok) {
        const data = await response.json();
        const countryCode = api.getCountry(data);

        if (countryCode) {
          console.log(`[ExiusCart] IP detected country: ${countryCode} (via ${api.url})`);
          return countryCode;
        }
      }
    } catch (error) {
      console.log(`[ExiusCart] API ${api.url} failed, trying next...`);
      continue;
    }
  }

  console.log('[ExiusCart] All IP detection APIs failed');
  return null;
}

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<CurrencyCode>(defaultCurrency);
  const [isLoading, setIsLoading] = useState(true);
  const [detectedCountry, setDetectedCountry] = useState<string | null>(null);

  useEffect(() => {
    const initCurrency = async () => {
      // Check for test/preview currency in URL (for development only)
      // Usage: ?preview_currency=LKR or ?preview_currency=AED
      const urlParams = new URLSearchParams(window.location.search);
      const previewCurrency = urlParams.get('preview_currency') as CurrencyCode | null;

      if (previewCurrency && validCurrencies.includes(previewCurrency)) {
        // Use preview currency for testing (doesn't affect actual payments)
        setCurrency(previewCurrency);
        setDetectedCountry('PREVIEW');
        setIsLoading(false);
        console.log(`[ExiusCart] Using preview currency: ${previewCurrency}`);
        return;
      }

      // Detect country via IP - currency is automatically set based on location
      const countryCode = await detectCountryFromIP();

      if (countryCode) {
        setDetectedCountry(countryCode);

        // Set currency based on IP location
        // UAE (AE) -> AED, Sri Lanka (LK) -> LKR, everyone else -> USD
        const detectedCurrency = countryToCurrency[countryCode] || defaultCurrency;
        setCurrency(detectedCurrency);

        console.log(`[ExiusCart] Country: ${countryCode} -> Currency: ${detectedCurrency}`);

        // Store for server-side verification during payment
        sessionStorage.setItem(CURRENCY_LOCK_KEY, JSON.stringify({
          currency: detectedCurrency,
          country: countryCode,
          timestamp: Date.now(),
        }));
      } else {
        // If geo-detection fails, use default currency (USD)
        console.log(`[ExiusCart] Using default currency: ${defaultCurrency}`);
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
