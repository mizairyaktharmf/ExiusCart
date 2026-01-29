import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing | Affordable Plans from AED 499 | ExiusCart',
  description: 'ExiusCart pricing plans for UAE small businesses. One-time payment from AED 499 or monthly subscriptions. 7-day free trial, no credit card required.',
  openGraph: {
    title: 'ExiusCart Pricing | Plans from AED 499',
    description: 'Affordable pricing for UAE small businesses. One-time or monthly plans. 7-day free trial.',
    url: 'https://exiuscart.com/pricing',
    siteName: 'ExiusCart',
    type: 'website',
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
