import Link from 'next/link';
import { ArrowRight, Check, Star, Quote } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0B1121]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1]">
                Manage Your
                <span className="block text-[#F5A623]">Small Business</span>
                <span className="block">With Ease</span>
              </h1>
              <p className="mt-6 text-lg text-gray-400 leading-relaxed">
                All-in-one business solution for UAE shops. Create invoices,
                track inventory, receive WhatsApp orders — affordable pricing
                designed for small businesses.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center gap-2 bg-[#F5A623] hover:bg-[#E09612] text-black font-semibold px-8 py-4 rounded-lg transition-all"
                >
                  Get Started
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

            {/* Right - Product Preview */}
            <div className="relative hidden lg:block">
              <div className="relative">
                {/* Desktop Dashboard */}
                <div className="bg-[#151F32] rounded-xl border border-gray-800 shadow-2xl overflow-hidden">
                  <div className="bg-[#1A2540] px-4 py-3 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27CA40]"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex gap-4 mb-4">
                      <div className="w-1/4 h-24 bg-[#1A2540] rounded-lg"></div>
                      <div className="w-1/4 h-24 bg-[#1A2540] rounded-lg"></div>
                      <div className="w-1/4 h-24 bg-[#1A2540] rounded-lg"></div>
                      <div className="w-1/4 h-24 bg-[#1A2540] rounded-lg"></div>
                    </div>
                    <div className="h-40 bg-[#1A2540] rounded-lg mb-4"></div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-20 bg-[#1A2540] rounded-lg"></div>
                      <div className="h-20 bg-[#1A2540] rounded-lg"></div>
                    </div>
                  </div>
                </div>

                {/* Mobile Preview */}
                <div className="absolute -right-8 bottom-8 w-36 bg-[#151F32] rounded-2xl border border-gray-800 shadow-xl overflow-hidden">
                  <div className="bg-[#1A2540] px-3 py-2">
                    <div className="w-12 h-1 bg-gray-700 rounded mx-auto"></div>
                  </div>
                  <div className="p-3 space-y-2">
                    <div className="h-6 bg-[#1A2540] rounded"></div>
                    <div className="h-16 bg-[#1A2540] rounded"></div>
                    <div className="h-6 bg-[#1A2540] rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-10 px-4 border-y border-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <TrustItem title="Easy Setup" desc="Start in minutes" />
            <TrustItem title="Support" desc="Help when you need" />
            <TrustItem title="Integrations" desc="WhatsApp & more" />
            <TrustItem title="Updates" desc="Always improving" />
          </div>
        </div>
      </section>

      {/* What We Solve */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stop juggling spreadsheets and paper invoices
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Running a small business is hard enough. ExiusCart brings everything
              together — invoicing, inventory, customer orders — so you can focus
              on what matters: growing your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <FeatureCard
              title="Smart Invoicing"
              desc="Create professional VAT-compliant invoices in seconds. Track payments, send receipts, export reports."
            />
            <FeatureCard
              title="Inventory Control"
              desc="Know your stock levels in real-time. Get alerts before you run out. Track every item movement."
            />
            <FeatureCard
              title="WhatsApp Orders"
              desc="Let customers order through WhatsApp. Manage everything from one dashboard. No more missed messages."
            />
          </div>

          <div className="mt-12">
            <Link
              href="/features"
              className="inline-flex items-center gap-2 text-[#F5A623] hover:text-[#FFB84D] font-medium transition"
            >
              See all features
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why ExiusCart */}
      <section className="py-20 px-4 bg-[#0D1526]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Built for UAE small businesses
              </h2>
              <p className="text-gray-400 mb-10">
                We understand local business needs. ExiusCart is designed with
                UAE regulations, Arabic support, and affordable pricing in mind.
              </p>

              <div className="space-y-4">
                <BenefitRow text="VAT compliant invoicing (5%)" />
                <BenefitRow text="Arabic & English interface" />
                <BenefitRow text="Works offline" />
                <BenefitRow text="One-time payment option" />
                <BenefitRow text="WhatsApp integration" />
                <BenefitRow text="Free updates included" />
              </div>
            </div>

            {/* Pricing Preview */}
            <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-8">
              <p className="text-gray-400 text-sm mb-2">Starting from</p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold text-white">699</span>
                <span className="text-gray-400">AED</span>
              </div>
              <p className="text-gray-500 text-sm mb-8">One-time payment, lifetime access</p>

              <div className="space-y-3 mb-8">
                <PricingFeature text="POS & Invoicing" />
                <PricingFeature text="Product Management" />
                <PricingFeature text="Customer Database" />
                <PricingFeature text="Sales Reports" />
                <PricingFeature text="PDF & Excel Export" />
              </div>

              <Link
                href="/pricing"
                className="block text-center bg-[#F5A623] hover:bg-[#E09612] text-black font-semibold py-4 rounded-lg transition-all"
              >
                View All Plans
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by UAE Business Owners
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              See what shop owners across UAE are saying about ExiusCart
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Ahmed Al Rashid"
              business="Mobile Zone Electronics"
              location="Dubai"
              rating={5}
              text="ExiusCart transformed how I manage my mobile shop. The POS is so fast, and my customers love getting WhatsApp receipts. Best investment for my business!"
            />
            <TestimonialCard
              name="Fatima Hassan"
              business="Fashion Corner Boutique"
              location="Abu Dhabi"
              rating={5}
              text="Finally, a system that understands UAE business needs! VAT invoicing is automatic, inventory tracking saves me hours every week. Highly recommend!"
            />
            <TestimonialCard
              name="Mohammed Khalid"
              business="Tech Hub Accessories"
              location="Sharjah"
              rating={5}
              text="The WhatsApp ordering feature is a game-changer. My customers can browse and order anytime. Sales increased by 40% in the first month!"
            />
          </div>

          {/* Trust Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-gray-800">
            <StatItem value="50+" label="Active Shops" />
            <StatItem value="10,000+" label="Invoices Created" />
            <StatItem value="99%" label="Uptime" />
            <StatItem value="4.9/5" label="Customer Rating" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#0D1526]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to simplify your business?
          </h2>
          <p className="text-gray-400 mb-10">
            Join UAE businesses using ExiusCart to manage their daily operations.
          </p>
          <Link
            href="/register"
            className="inline-flex items-center justify-center gap-2 bg-[#F5A623] hover:bg-[#E09612] text-black font-semibold px-10 py-4 rounded-lg transition-all text-lg"
          >
            Start Free Trial
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-gray-600 text-sm mt-4">
            14-day free trial · No credit card required
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function TrustItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex items-center gap-3">
      <Check className="w-5 h-5 text-[#F5A623] flex-shrink-0" />
      <div>
        <span className="text-white font-medium">{title}</span>
        <span className="text-gray-500 text-sm ml-2">{desc}</span>
      </div>
    </div>
  );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="group">
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{desc}</p>
    </div>
  );
}

function BenefitRow({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <Check className="w-5 h-5 text-[#F5A623] flex-shrink-0" />
      <span className="text-gray-300">{text}</span>
    </div>
  );
}

function PricingFeature({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2">
      <Check className="w-4 h-4 text-[#F5A623]" />
      <span className="text-gray-300 text-sm">{text}</span>
    </div>
  );
}

function TestimonialCard({
  name,
  business,
  location,
  rating,
  text,
}: {
  name: string;
  business: string;
  location: string;
  rating: number;
  text: string;
}) {
  return (
    <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-6 relative">
      <Quote className="absolute top-6 right-6 w-8 h-8 text-[#F5A623]/20" />

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-[#F5A623] text-[#F5A623]" />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-gray-300 leading-relaxed mb-6">{text}</p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#F5A623]/20 flex items-center justify-center">
          <span className="text-[#F5A623] font-semibold text-sm">
            {name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div>
          <p className="text-white font-medium text-sm">{name}</p>
          <p className="text-gray-500 text-xs">{business} • {location}</p>
        </div>
      </div>
    </div>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="text-3xl md:text-4xl font-bold text-[#F5A623] mb-1">{value}</p>
      <p className="text-gray-400 text-sm">{label}</p>
    </div>
  );
}
