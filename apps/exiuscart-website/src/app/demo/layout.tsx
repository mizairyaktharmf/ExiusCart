import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo | See ExiusCart in Action | Interactive Product Tour',
  description: 'Try ExiusCart demo. Interactive tour of POS, inventory, invoicing, and WhatsApp orders features. See how ExiusCart can transform your small business.',
  openGraph: {
    title: 'ExiusCart Demo | Interactive Product Tour',
    description: 'Try ExiusCart demo. See POS, inventory, invoicing and WhatsApp orders in action.',
    url: 'https://exiuscart.com/demo',
    siteName: 'ExiusCart',
    type: 'website',
  },
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
