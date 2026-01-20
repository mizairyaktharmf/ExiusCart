import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-[#0B1121]">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            All the tools you need
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            ExiusCart combines invoicing, inventory management, and order tracking
            in one simple platform designed for small businesses.
          </p>
        </div>
      </section>

      {/* Feature 1: POS & Invoicing */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#F5A623] text-sm font-medium mb-4 block">
                POS & INVOICING
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Create professional invoices in seconds
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Generate VAT-compliant invoices with your business branding.
                Track payments, manage due dates, and send receipts to customers
                instantly.
              </p>
              <ul className="space-y-4">
                <FeatureItem text="VAT-compliant invoicing (5% UAE)" />
                <FeatureItem text="Custom invoice templates" />
                <FeatureItem text="Multiple payment methods tracking" />
                <FeatureItem text="Automatic receipt generation" />
                <FeatureItem text="PDF & Excel export" />
                <FeatureItem text="Daily sales summary" />
              </ul>
            </div>
            <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-8 h-80">
              <div className="h-full bg-[#1A2540] rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: Inventory */}
      <section className="py-20 px-4 bg-[#0D1526]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 bg-[#151F32] rounded-2xl border border-gray-800 p-8 h-80">
              <div className="h-full bg-[#1A2540] rounded-xl"></div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-[#F5A623] text-sm font-medium mb-4 block">
                INVENTORY MANAGEMENT
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Know your stock at all times
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Track every product in real-time. Get alerts when stock runs low.
                Never miss a sale because you didn&apos;t know you were out of stock.
              </p>
              <ul className="space-y-4">
                <FeatureItem text="Real-time stock tracking" />
                <FeatureItem text="Low stock alerts" />
                <FeatureItem text="Stock movement history" />
                <FeatureItem text="Product categories" />
                <FeatureItem text="Barcode support" />
                <FeatureItem text="Bulk import/export" />
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: WhatsApp Orders */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#F5A623] text-sm font-medium mb-4 block">
                WHATSAPP ORDERS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Turn WhatsApp into a sales channel
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Share your product catalog link. Customers browse and order via
                WhatsApp. You manage everything from one dashboard — no more
                lost messages.
              </p>
              <ul className="space-y-4">
                <FeatureItem text="Shareable product catalog" />
                <FeatureItem text="Order via WhatsApp" />
                <FeatureItem text="Order status tracking" />
                <FeatureItem text="Customer notifications" />
                <FeatureItem text="Order history" />
                <FeatureItem text="Delivery management" />
              </ul>
            </div>
            <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-8 h-80">
              <div className="h-full bg-[#1A2540] rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 4: Customer Management */}
      <section className="py-20 px-4 bg-[#0D1526]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 bg-[#151F32] rounded-2xl border border-gray-800 p-8 h-80">
              <div className="h-full bg-[#1A2540] rounded-xl"></div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-[#F5A623] text-sm font-medium mb-4 block">
                CUSTOMER MANAGEMENT
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Build lasting relationships
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Keep track of every customer. See their purchase history, total
                spending, and contact details. Serve them better and keep them
                coming back.
              </p>
              <ul className="space-y-4">
                <FeatureItem text="Customer database" />
                <FeatureItem text="Purchase history" />
                <FeatureItem text="Spending analytics" />
                <FeatureItem text="Contact management" />
                <FeatureItem text="Notes & preferences" />
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 5: Reports */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#F5A623] text-sm font-medium mb-4 block">
                REPORTS & ANALYTICS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Understand your business
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Get insights into your sales, profits, and trends. Make better
                decisions with data, not guesswork.
              </p>
              <ul className="space-y-4">
                <FeatureItem text="Sales reports" />
                <FeatureItem text="Profit tracking" />
                <FeatureItem text="Product performance" />
                <FeatureItem text="Payment breakdown" />
                <FeatureItem text="Export to PDF & Excel" />
                <FeatureItem text="Date range filtering" />
              </ul>
            </div>
            <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-8 h-80">
              <div className="h-full bg-[#1A2540] rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* More Features Grid */}
      <section className="py-20 px-4 bg-[#0D1526]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              And much more
            </h2>
            <p className="text-gray-400">
              Everything designed to make your work easier
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <MoreFeature
              title="Multi-language"
              desc="Full Arabic and English support. Switch instantly."
            />
            <MoreFeature
              title="Works Offline"
              desc="No internet? No problem. Sync when you're back online."
            />
            <MoreFeature
              title="Mobile Friendly"
              desc="Access your dashboard from any device, anywhere."
            />
            <MoreFeature
              title="Secure Data"
              desc="Your business data is encrypted and backed up."
            />
            <MoreFeature
              title="Free Updates"
              desc="Get new features automatically, no extra cost."
            />
            <MoreFeature
              title="Support"
              desc="Help when you need it via chat and email."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-gray-400 mb-10">
            Try ExiusCart free for 14 days. No credit card required.
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
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-white font-semibold px-8 py-4 rounded-lg transition-all border border-gray-700"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3">
      <Check className="w-5 h-5 text-[#F5A623] flex-shrink-0" />
      <span className="text-gray-300">{text}</span>
    </li>
  );
}

function MoreFeature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-[#151F32] border border-gray-800 rounded-xl p-6">
      <h3 className="text-white font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{desc}</p>
    </div>
  );
}
