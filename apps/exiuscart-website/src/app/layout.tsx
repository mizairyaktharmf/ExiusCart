import type { Metadata } from 'next';
import { Inter, Cairo } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/providers';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
});

export const metadata: Metadata = {
  title: 'ExiusCart - Smart Multi-Shop Business System',
  description:
    'UAE-focused POS + WhatsApp Orders + Inventory Management Platform',
  keywords: ['POS', 'Point of Sale', 'UAE', 'WhatsApp Orders', 'Inventory'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${cairo.variable} font-sans`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
