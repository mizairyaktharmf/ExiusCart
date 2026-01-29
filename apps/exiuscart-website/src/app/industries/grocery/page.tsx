import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Check, ShoppingBasket, Barcode, Scale, Clock, Truck, Receipt, Package, Bell, Users, TrendingUp } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'POS for Grocery Stores & Supermarkets | ExiusCart UAE',
  description: 'Best POS system for grocery stores in UAE. Barcode scanning, weight-based pricing, expiry tracking, supplier management. Affordable pricing for small groceries.',
  openGraph: {
    title: 'Grocery Store POS System | ExiusCart UAE',
    description: 'Best POS for grocery stores. Barcode scanning, weight pricing, expiry tracking.',
    url: 'https://exiuscart.com/industries/grocery',
    siteName: 'ExiusCart',
    type: 'website',
  },
};

export default function GroceryPage() {
  return (
    <div className="min-h-screen bg-[#0B1121]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
                <ShoppingBasket className="w-4 h-4" />
                For Grocery Stores
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-[1.1] mb-6">
                The Perfect POS for
                <span className="block text-green-400">Grocery Stores</span>
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                Manage your grocery store, supermarket, or mini mart with ease.
                Fast checkout, barcode scanning, weight-based pricing, and
                inventory tracking designed for grocery businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg transition-all"
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
              <h3 className="text-xl font-bold text-white mb-6">Built for Grocery Stores</h3>
              <div className="space-y-4">
                <FeatureItem icon={Barcode} text="Barcode scanning for quick checkout" />
                <FeatureItem icon={Scale} text="Weight-based pricing (per kg/gram)" />
                <FeatureItem icon={Clock} text="Expiry date tracking & alerts" />
                <FeatureItem icon={Package} text="Real-time stock management" />
                <FeatureItem icon={Bell} text="Low stock alerts" />
                <FeatureItem icon={Truck} text="Supplier order management" />
                <FeatureItem icon={Receipt} text="VAT-compliant receipts" />
                <FeatureItem icon={Users} text="Customer credit accounts" />
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
              Common Grocery Store Challenges
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We understand the unique challenges grocery store owners face daily
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <PainPointCard
              problem="Slow checkout during rush hours"
              solution="Fast barcode scanning and quick product search keeps lines moving"
            />
            <PainPointCard
              problem="Products expiring on shelves"
              solution="Expiry tracking alerts you before products go bad"
            />
            <PainPointCard
              problem="Running out of popular items"
              solution="Low stock alerts and auto-reorder suggestions keep shelves stocked"
            />
            <PainPointCard
              problem="Managing loose items (fruits, vegetables)"
              solution="Weight-based pricing calculates totals automatically"
            />
            <PainPointCard
              problem="Tracking customer credit"
              solution="Built-in credit accounts with payment history"
            />
            <PainPointCard
              problem="Complex VAT calculations"
              solution="Automatic 5% VAT calculation on every sale"
            />
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-8 md:p-12 text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <TrendingUp key={i} className="w-5 h-5 text-green-400" />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl text-white font-medium mb-6 leading-relaxed">
              &quot;ExiusCart helped us reduce checkout time by 60%. The barcode
              scanning is so fast, and customers love getting WhatsApp receipts.&quot;
            </blockquote>
            <div>
              <p className="text-white font-semibold">Hassan Al Mahmoud</p>
              <p className="text-gray-500 text-sm">Fresh Mart Grocery, Dubai</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-[#0D1526]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to modernize your grocery store?
          </h2>
          <p className="text-gray-400 mb-10">
            Join grocery stores across UAE using ExiusCart. Start your 7-day free trial today.
          </p>
          <Link
            href="/register"
            className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-10 py-4 rounded-lg transition-all text-lg"
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
      <div className="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
        <Icon className="w-4 h-4 text-green-400" />
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
        <Check className="w-4 h-4 text-green-400" />
        <p className="text-green-400 text-sm font-medium">Solution</p>
      </div>
      <p className="text-gray-400 text-sm">{solution}</p>
    </div>
  );
}
