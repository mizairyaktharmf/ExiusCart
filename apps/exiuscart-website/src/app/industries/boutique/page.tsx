import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Check, Shirt, Tags, Camera, Users, Gift, Percent, Package, Layers, Sparkles, TrendingUp } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'POS for Fashion Boutiques & Clothing Stores | ExiusCart UAE',
  description: 'Best POS system for fashion boutiques and clothing stores in UAE. Size/color variants, loyalty programs, gift cards. Perfect for abayas, fashion, and apparel shops.',
  openGraph: {
    title: 'Boutique & Fashion Store POS | ExiusCart UAE',
    description: 'Best POS for boutiques. Size/color variants, loyalty programs, gift cards.',
    url: 'https://exiuscart.com/industries/boutique',
    siteName: 'ExiusCart',
    type: 'website',
  },
};

export default function BoutiquePage() {
  return (
    <div className="min-h-screen bg-[#0B1121]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-pink-500/10 text-pink-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
                <Shirt className="w-4 h-4" />
                For Fashion Boutiques
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-[1.1] mb-6">
                Made for Fashion
                <span className="block text-pink-400">Boutiques & Apparel</span>
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                The perfect POS for clothing stores, fashion boutiques, and
                apparel retailers. Manage sizes, colors, loyalty programs, and
                create a premium shopping experience for your customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-4 rounded-lg transition-all"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-white font-semibold px-8 py-4 rounded-lg transition-all border border-gray-700"
                >
                  See Demo
                </Link>
              </div>
            </div>

            {/* Feature Highlights */}
            <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-8">
              <h3 className="text-xl font-bold text-white mb-6">Built for Fashion Retail</h3>
              <div className="space-y-4">
                <FeatureItem icon={Layers} text="Size & color variant management" />
                <FeatureItem icon={Tags} text="Seasonal collections & categories" />
                <FeatureItem icon={Users} text="Customer profiles & preferences" />
                <FeatureItem icon={Gift} text="Gift cards & store credit" />
                <FeatureItem icon={Percent} text="Promotions & discount codes" />
                <FeatureItem icon={Camera} text="Product photos in catalog" />
                <FeatureItem icon={Package} text="Stock tracking by variant" />
                <FeatureItem icon={Sparkles} text="VIP customer tiers" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 px-4 bg-[#0D1526]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Fashion Retail Challenges Solved
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We understand the unique needs of boutique and fashion store owners
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <PainPointCard
              problem="Tracking sizes and colors is complex"
              solution="Easy variant management — track S/M/L/XL in every color"
            />
            <PainPointCard
              problem="Customers want to try items without buying"
              solution="Save customer preferences and follow up via WhatsApp"
            />
            <PainPointCard
              problem="Managing seasonal sales and promotions"
              solution="Built-in discount codes and promotional pricing"
            />
            <PainPointCard
              problem="Building customer loyalty"
              solution="Loyalty points, VIP tiers, and birthday rewards"
            />
            <PainPointCard
              problem="Exchanging or returning items"
              solution="Easy returns and exchanges with full history"
            />
            <PainPointCard
              problem="Knowing what styles are selling"
              solution="Sales reports by category, size, and color trends"
            />
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Perfect For
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <UseCaseCard title="Fashion Boutiques" description="Ladies, gents, and kids clothing stores" />
            <UseCaseCard title="Abaya & Modest Fashion" description="Traditional and modern modest wear shops" />
            <UseCaseCard title="Shoe Stores" description="Footwear and accessories retailers" />
            <UseCaseCard title="Jewelry & Accessories" description="Fashion jewelry and accessory shops" />
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-4 bg-[#0D1526]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-8 md:p-12 text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <TrendingUp key={i} className="w-5 h-5 text-pink-400" />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl text-white font-medium mb-6 leading-relaxed">
              &quot;Finally, a system that understands fashion retail! Managing sizes
              and colors used to be a nightmare. Now my team can check stock instantly.&quot;
            </blockquote>
            <div>
              <p className="text-white font-semibold">Fatima Hassan</p>
              <p className="text-gray-500 text-sm">Fashion Corner Boutique, Abu Dhabi</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to elevate your boutique?
          </h2>
          <p className="text-gray-400 mb-10">
            Join fashion retailers across UAE using ExiusCart. Start your 7-day free trial today.
          </p>
          <Link
            href="/register"
            className="inline-flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold px-10 py-4 rounded-lg transition-all text-lg"
          >
            Start Free Trial
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-gray-600 text-sm mt-4">
            No credit card required
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function FeatureItem({ icon: Icon, text }: { icon: React.ComponentType<{ className?: string }>; text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 bg-pink-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
        <Icon className="w-4 h-4 text-pink-400" />
      </div>
      <span className="text-gray-300 text-sm">{text}</span>
    </div>
  );
}

function PainPointCard({ problem, solution }: { problem: string; solution: string }) {
  return (
    <div className="bg-[#151F32] rounded-xl border border-gray-800 p-6">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2 h-2 rounded-full bg-red-500"></div>
        <p className="text-red-400 text-sm font-medium">Problem</p>
      </div>
      <p className="text-white font-medium mb-4">{problem}</p>
      <div className="flex items-center gap-2 mb-3">
        <Check className="w-4 h-4 text-pink-400" />
        <p className="text-pink-400 text-sm font-medium">Solution</p>
      </div>
      <p className="text-gray-400 text-sm">{solution}</p>
    </div>
  );
}

function UseCaseCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-[#151F32] rounded-xl border border-gray-800 p-6 text-center">
      <h3 className="text-white font-semibold mb-2">{title}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  );
}
