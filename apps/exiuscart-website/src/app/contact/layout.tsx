import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Get Support & Sales Help | ExiusCart',
  description: 'Contact ExiusCart team for support, sales inquiries, or partnership opportunities. Reach us via WhatsApp, email, or contact form. We respond within 24 hours.',
  openGraph: {
    title: 'Contact ExiusCart | Support & Sales',
    description: 'Contact ExiusCart for support, sales or partnerships. WhatsApp, email or form.',
    url: 'https://exiuscart.com/contact',
    siteName: 'ExiusCart',
    type: 'website',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
