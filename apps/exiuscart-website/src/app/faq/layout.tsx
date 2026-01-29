import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | Frequently Asked Questions | ExiusCart',
  description: 'Common questions about ExiusCart answered. Learn about pricing, features, setup, VAT invoicing, WhatsApp orders, and more. Get help with your business needs.',
  openGraph: {
    title: 'FAQ | ExiusCart Help Center',
    description: 'Common questions about ExiusCart answered. Pricing, features, setup and more.',
    url: 'https://exiuscart.com/faq',
    siteName: 'ExiusCart',
    type: 'website',
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
