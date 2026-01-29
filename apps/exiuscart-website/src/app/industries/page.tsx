import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, ShoppingBasket, Smartphone, Shirt, Wrench, Coffee, Pill } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Industries | POS Solutions for Every Business Type | ExiusCart',
  description: 'ExiusCart POS solutions for grocery stores, electronics shops, fashion boutiques, and more. Industry-specific features for UAE small businesses.',
  openGraph: {
    title: 'Industries | ExiusCart POS Solutions',
    description: 'POS solutions for grocery, electronics, fashion, and more UAE businesses.',
    url: 'https://exiuscart.com/industries',
    siteName: 'ExiusCart',
    type: 'website',
  },
};

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-[#0B1121]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#F5A623] font-medium mb-4">Industries</p>
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] mb-6">
            Built for Your
            <span className="block text-[#F5A623]">Type of Business</span>
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            ExiusCart adapts to your industry. Whether you run a grocery store,
            electronics shop, or fashion boutique — we have features designed
            specifically for your business.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <IndustryCard
              icon={ShoppingBasket}
              title="Grocery Stores"
              description="Barcode scanning, weight-based pricing, expiry tracking, and supplier management for supermarkets and mini marts."
              href="/industries/grocery"
              color="green"
            />
            <IndustryCard
              icon={Smartphone}
              title="Electronics Shops"
              description="IMEI/serial tracking, warranty management, repair tracking, and variant management for mobile and computer stores."
              href="/industries/electronics"
              color="blue"
            />
            <IndustryCard
              icon={Shirt}
              title="Fashion Boutiques"
              description="Size and color variants, loyalty programs, gift cards, and customer preferences for clothing stores."
              href="/industries/boutique"
              color="pink"
            />
            <IndustryCard
              icon={Wrench}
              title="Hardware Stores"
              description="Bulk pricing, contractor accounts, project tracking, and specialized inventory for hardware and building materials."
              href="/contact"
              color="orange"
              comingSoon
            />
            <IndustryCard
              icon={Coffee}
              title="Cafes & Restaurants"
              description="Table management, kitchen orders, menu customization, and tip tracking for food service businesses."
              href="/contact"
              color="amber"
              comingSoon
            />
            <IndustryCard
              icon={Pill}
              title="Pharmacies"
              description="Prescription tracking, expiry management, batch numbers, and controlled substance tracking."
              href="/contact"
              color="cyan"
              comingSoon
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-[#0D1526]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Don&apos;t see your industry?
          </h2>
          <p className="text-gray-400 mb-10">
            ExiusCart works for most retail businesses. Contact us to discuss your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 bg-[#F5A623] hover:bg-[#E09612] text-black font-semibold px-8 py-4 rounded-lg transition-all"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-white font-semibold px-8 py-4 rounded-lg transition-all border border-gray-700"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function IndustryCard({
  icon: Icon,
  title,
  description,
  href,
  color,
  comingSoon = false
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  href: string;
  color: 'green' | 'blue' | 'pink' | 'orange' | 'amber' | 'cyan';
  comingSoon?: boolean;
}) {
  const colorClasses = {
    green: { bg: 'bg-green-500/10', text: 'text-green-400', hover: 'hover:border-green-500/50' },
    blue: { bg: 'bg-blue-500/10', text: 'text-blue-400', hover: 'hover:border-blue-500/50' },
    pink: { bg: 'bg-pink-500/10', text: 'text-pink-400', hover: 'hover:border-pink-500/50' },
    orange: { bg: 'bg-orange-500/10', text: 'text-orange-400', hover: 'hover:border-orange-500/50' },
    amber: { bg: 'bg-amber-500/10', text: 'text-amber-400', hover: 'hover:border-amber-500/50' },
    cyan: { bg: 'bg-cyan-500/10', text: 'text-cyan-400', hover: 'hover:border-cyan-500/50' },
  };

  const classes = colorClasses[color];

  return (
    <Link
      href={href}
      className={`group bg-[#151F32] rounded-2xl border border-gray-800 p-8 transition-all ${classes.hover}`}
    >
      <div className={`w-14 h-14 ${classes.bg} rounded-xl flex items-center justify-center mb-6`}>
        <Icon className={`w-7 h-7 ${classes.text}`} />
      </div>
      <div className="flex items-center gap-3 mb-3">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        {comingSoon && (
          <span className="bg-gray-700 text-gray-300 text-xs font-medium px-2 py-1 rounded">
            Coming Soon
          </span>
        )}
      </div>
      <p className="text-gray-400 text-sm leading-relaxed mb-4">{description}</p>
      <span className={`inline-flex items-center gap-1 ${classes.text} text-sm font-medium group-hover:gap-2 transition-all`}>
        {comingSoon ? 'Contact Us' : 'Learn More'}
        <ArrowRight className="w-4 h-4" />
      </span>
    </Link>
  );
}
