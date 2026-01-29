import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login | Access Your Dashboard | ExiusCart',
  description: 'Login to your ExiusCart account. Access your POS, inventory, invoices, and business reports. Secure login for UAE small business owners.',
  openGraph: {
    title: 'Login | ExiusCart Dashboard',
    description: 'Login to your ExiusCart account. Access POS, inventory, invoices and reports.',
    url: 'https://exiuscart.com/login',
    siteName: 'ExiusCart',
    type: 'website',
  },
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
