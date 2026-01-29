import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Check, Smartphone, Barcode, Shield, FileText, Users, Package, Wrench, Clock, CreditCard, TrendingUp } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'POS for Mobile & Electronics Shops | ExiusCart UAE',
  description: 'Best POS system for mobile phone shops and electronics stores in UAE. Serial number tracking, warranty management, repair tracking. Perfect for phone shops.',
  openGraph: {
    title: 'Electronics Shop POS System | ExiusCart UAE',
    description: 'Best POS for mobile and electronics shops. Serial tracking, warranty management.',
    url: 'https://exiuscart.com/industries/electronics',
    siteName: 'ExiusCart',
    type: 'website',
  },
};

export default function ElectronicsPage() {
  return (
    <div className="min-h-screen bg-[#0B1121]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
                <Smartphone className="w-4 h-4" />
                For Electronics Shops
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-[1.1] mb-6">
                Built for Mobile &
                <span className="block text-blue-400">Electronics Shops</span>
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                The perfect POS for mobile phone shops, computer stores, and
                electronics retailers. Track serial numbers, manage warranties,
                and handle repairs — all from one dashboard.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg transition-all"
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
              <h3 className="text-xl font-bold text-white mb-6">Built for Electronics Retail</h3>
              <div className="space-y-4">
                <FeatureItem icon={Barcode} text="IMEI & serial number tracking" />
                <FeatureItem icon={Shield} text="Warranty management & tracking" />
                <FeatureItem icon={Wrench} text="Repair job tracking" />
                <FeatureItem icon={Package} text="Multi-variant products (colors, storage)" />
                <FeatureItem icon={FileText} text="Professional VAT invoices" />
                <FeatureItem icon={Users} text="Customer purchase history" />
                <FeatureItem icon={CreditCard} text="Installment payment tracking" />
                <FeatureItem icon={Clock} text="Service reminder notifications" />
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
              Challenges Electronics Shops Face
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We built ExiusCart to solve the real problems mobile and electronics shop owners deal with
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <PainPointCard
              problem="Tracking IMEI/serial numbers manually"
              solution="Automatic serial number tracking linked to every sale"
            />
            <PainPointCard
              problem="Warranty disputes with customers"
              solution="Clear warranty records with purchase date and coverage period"
            />
            <PainPointCard
              problem="Managing repair jobs and spare parts"
              solution="Built-in repair tracking with status updates and part usage"
            />
            <PainPointCard
              problem="Products with multiple variants"
              solution="Easy management of colors, storage sizes, and configurations"
            />
            <PainPointCard
              problem="Customers asking for installment plans"
              solution="Track installment payments and send reminders automatically"
            />
            <PainPointCard
              problem="Creating professional invoices"
              solution="VAT-compliant invoices with product details and serial numbers"
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
            <UseCaseCard title="Mobile Phone Shops" description="iPhone, Samsung, and other smartphone retailers" />
            <UseCaseCard title="Computer Stores" description="Laptop, desktop, and PC component shops" />
            <UseCaseCard title="Accessories Shops" description="Cases, chargers, and gadget retailers" />
            <UseCaseCard title="Repair Centers" description="Phone and computer repair services" />
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-4 bg-[#0D1526]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-8 md:p-12 text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <TrendingUp key={i} className="w-5 h-5 text-blue-400" />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl text-white font-medium mb-6 leading-relaxed">
              &quot;The IMEI tracking feature alone saved me from warranty disputes.
              Now I can instantly show customers their purchase history with serial numbers.&quot;
            </blockquote>
            <div>
              <p className="text-white font-semibold">Ahmed Al Rashid</p>
              <p className="text-gray-500 text-sm">Mobile Zone Electronics, Dubai</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to upgrade your electronics shop?
          </h2>
          <p className="text-gray-400 mb-10">
            Join electronics retailers across UAE using ExiusCart. Start your 7-day free trial today.
          </p>
          <Link
            href="/register"
            className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-10 py-4 rounded-lg transition-all text-lg"
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
      <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
        <Icon className="w-4 h-4 text-blue-400" />
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
        <Check className="w-4 h-4 text-blue-400" />
        <p className="text-blue-400 text-sm font-medium">Solution</p>
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
