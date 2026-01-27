'use client';

import { CurrencyProvider } from '@/context/currency-context';

export function Providers({ children }: { children: React.ReactNode }) {
  return <CurrencyProvider>{children}</CurrencyProvider>;
}
