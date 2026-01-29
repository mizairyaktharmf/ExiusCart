import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Register | Start Your 7-Day Free Trial | ExiusCart',
  description: 'Create your ExiusCart account. Start a 7-day free trial with full access to all features. No credit card required. Set up your shop in minutes.',
  openGraph: {
    title: 'Register | Start Free Trial | ExiusCart',
    description: 'Create your ExiusCart account. 7-day free trial, no credit card required.',
    url: 'https://exiuscart.com/register',
    siteName: 'ExiusCart',
    type: 'website',
  },
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
