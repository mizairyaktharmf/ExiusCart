import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ArrowRight,
  Check,
  ShoppingCart,
  CreditCard,
  Receipt,
  Calculator,
  Percent,
  Clock,
  Users,
  Smartphone,
  Printer,
  FileText,
} from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'POS & Invoicing | VAT Compliant Billing System | ExiusCart',
  description: 'Fast point of sale with UAE VAT compliant invoicing. Multiple payment methods, thermal printer support, Arabic/English receipts. Professional billing for small shops.',
  openGraph: {
    title: 'POS & Invoicing | VAT Compliant | ExiusCart',
    description: 'Fast POS with UAE VAT compliant invoicing. Multiple payments, thermal printing & more.',
    url: 'https://exiuscart.com/features/pos',
    siteName: 'ExiusCart',
    type: 'website',
  },
};

const posFeatures = [
  {
    icon: ShoppingCart,
    title: 'Smart Cart Management',
    description: 'Add products quickly with search, barcode scanning, or category browsing. Modify quantities and apply discounts on the fly.',
  },
  {
    icon: CreditCard,
    title: 'Multiple Payment Methods',
    description: 'Accept cash, card, bank transfer, or split payments. Track all payment types with detailed breakdowns.',
  },
  {
    icon: Receipt,
    title: 'Instant Receipts',
    description: 'Generate professional receipts instantly. Print, share via WhatsApp, or email directly to customers.',
  },
  {
    icon: Calculator,
    title: 'Automatic VAT Calculation',
    description: 'UAE 5% VAT calculated automatically. Compliant invoices generated for every transaction.',
  },
  {
    icon: Percent,
    title: 'Flexible Discounts',
    description: 'Apply percentage or fixed discounts per item or entire cart. Create promo codes for marketing campaigns.',
  },
  {
    icon: Clock,
    title: 'Quick Checkout',
    description: 'Complete sales in seconds with optimized workflow. Serve more customers with less waiting time.',
  },
];

const benefits = [
  'Process sales 3x faster than manual methods',
  'Zero calculation errors with automatic totals',
  'Professional receipts that build trust',
  'Track every transaction in real-time',
  'Works offline - sync when connected',
  'Full Arabic and English support',
];

export default function POSFeaturePage() {
  return (
    <div className="min-h-screen bg-[#0B1121]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#F5A623]/10 border border-[#F5A623]/30 rounded-full px-4 py-2 mb-6">
                <ShoppingCart className="w-4 h-4 text-[#F5A623]" />
                <span className="text-[#F5A623] text-sm font-medium">Point of Sale</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Fast, Simple Point of Sale for Your Business
              </h1>
              <p className="text-gray-400 text-lg mb-8">
                Ring up sales in seconds, not minutes. Our intuitive POS system helps you serve customers faster while keeping accurate records of every transaction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center gap-2 bg-[#F5A623] hover:bg-[#E09612] text-black font-semibold px-8 py-4 rounded-lg transition-all"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-white font-semibold px-8 py-4 rounded-lg transition-all border border-gray-700"
                >
                  Watch Demo
                </Link>
              </div>
            </div>

            {/* POS Preview */}
            <div className="relative">
              <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-6">
                {/* POS Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-white font-semibold">Point of Sale</h3>
                  <span className="text-gray-500 text-sm">Today&apos;s Sales: 2,450 AED</span>
                </div>

                {/* Cart Items */}
                <div className="space-y-3 mb-6">
                  {[
                    { name: 'iPhone 15 Case', qty: 2, price: 89 },
                    { name: 'USB-C Cable', qty: 3, price: 25 },
                    { name: 'Screen Protector', qty: 1, price: 45 },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between bg-[#1A2540] rounded-lg p-3">
                      <div>
                        <p className="text-white text-sm">{item.name}</p>
                        <p className="text-gray-500 text-xs">Qty: {item.qty}</p>
                      </div>
                      <p className="text-[#F5A623] font-medium">{item.price * item.qty} AED</p>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="border-t border-gray-700 pt-4 space-y-2">
                  <div className="flex justify-between text-gray-400 text-sm">
                    <span>Subtotal</span>
                    <span>298 AED</span>
                  </div>
                  <div className="flex justify-between text-gray-400 text-sm">
                    <span>VAT (5%)</span>
                    <span>14.90 AED</span>
                  </div>
                  <div className="flex justify-between text-white font-bold text-lg pt-2">
                    <span>Total</span>
                    <span className="text-[#F5A623]">312.90 AED</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3 mt-6">
                  <button className="bg-[#1A2540] hover:bg-[#1A2540]/80 text-white py-3 rounded-lg text-sm font-medium transition">
                    Hold Order
                  </button>
                  <button className="bg-[#F5A623] hover:bg-[#E09612] text-black py-3 rounded-lg text-sm font-semibold transition">
                    Checkout
                  </button>
                </div>
              </div>

              {/* Decorative */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#F5A623]/5 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-[#0D1526]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Everything You Need at Checkout
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A complete point of sale solution designed for speed and simplicity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="bg-[#151F32] rounded-2xl border border-gray-800 p-6 hover:border-[#F5A623]/30 transition">
                  <div className="w-12 h-12 bg-[#F5A623]/20 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#F5A623]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple 3-Step Checkout
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From product selection to payment in under 30 seconds.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F5A623] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-black">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Add Products</h3>
              <p className="text-gray-400">
                Search, scan barcode, or browse categories. Add items to cart with one tap.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F5A623] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-black">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Apply Discounts</h3>
              <p className="text-gray-400">
                Add promo codes, percentage discounts, or fixed amounts. VAT calculates automatically.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F5A623] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-black">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Complete Sale</h3>
              <p className="text-gray-400">
                Choose payment method, generate receipt, and send to customer via print or WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-[#0D1526]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Businesses Choose Our POS
              </h2>
              <p className="text-gray-400 mb-8">
                Built specifically for UAE small businesses. No complicated features you&apos;ll never use — just the tools you need to sell faster.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#F5A623] flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#151F32] rounded-xl border border-gray-800 p-6 text-center">
                <Users className="w-8 h-8 text-[#F5A623] mx-auto mb-3" />
                <p className="text-2xl font-bold text-white mb-1">50+</p>
                <p className="text-gray-400 text-sm">Businesses Using</p>
              </div>
              <div className="bg-[#151F32] rounded-xl border border-gray-800 p-6 text-center">
                <Receipt className="w-8 h-8 text-[#F5A623] mx-auto mb-3" />
                <p className="text-2xl font-bold text-white mb-1">10K+</p>
                <p className="text-gray-400 text-sm">Invoices Generated</p>
              </div>
              <div className="bg-[#151F32] rounded-xl border border-gray-800 p-6 text-center">
                <Smartphone className="w-8 h-8 text-[#F5A623] mx-auto mb-3" />
                <p className="text-2xl font-bold text-white mb-1">100%</p>
                <p className="text-gray-400 text-sm">Mobile Friendly</p>
              </div>
              <div className="bg-[#151F32] rounded-xl border border-gray-800 p-6 text-center">
                <Printer className="w-8 h-8 text-[#F5A623] mx-auto mb-3" />
                <p className="text-2xl font-bold text-white mb-1">Instant</p>
                <p className="text-gray-400 text-sm">Receipt Printing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Start Selling Smarter Today
          </h2>
          <p className="text-gray-400 mb-10">
            Try our POS system free for 7 days. No credit card required. See how much time you can save.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 bg-[#F5A623] hover:bg-[#E09612] text-black font-semibold px-10 py-4 rounded-lg transition-all text-lg"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/features"
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-white font-semibold px-10 py-4 rounded-lg transition-all border border-gray-700"
            >
              View All Features
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
