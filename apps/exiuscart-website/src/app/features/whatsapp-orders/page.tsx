import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ArrowRight,
  Check,
  MessageCircle,
  Share2,
  ShoppingBag,
  Bell,
  Clock,
  Truck,
  QrCode,
  Smartphone,
  Users,
  TrendingUp,
} from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'WhatsApp Orders | Receive Orders via WhatsApp | ExiusCart',
  description: 'Let customers order through WhatsApp. Share your product catalog, receive orders, send confirmations automatically. Boost sales with WhatsApp ordering.',
  openGraph: {
    title: 'WhatsApp Orders | ExiusCart',
    description: 'Let customers order through WhatsApp. Product catalog, orders, auto-confirmations.',
    url: 'https://exiuscart.com/features/whatsapp-orders',
    siteName: 'ExiusCart',
    type: 'website',
  },
};

const whatsappFeatures = [
  {
    icon: Share2,
    title: 'Shareable Catalog Link',
    description: 'Get a unique link to your product catalog. Share it on social media, business cards, or directly with customers.',
  },
  {
    icon: ShoppingBag,
    title: 'Easy Product Browsing',
    description: 'Customers browse your products with images, prices, and descriptions. No app download required.',
  },
  {
    icon: MessageCircle,
    title: 'Order via WhatsApp',
    description: 'Customers tap to order and message goes directly to your WhatsApp with all order details.',
  },
  {
    icon: Bell,
    title: 'Instant Notifications',
    description: 'Get notified immediately when new orders come in. Never miss a sale opportunity.',
  },
  {
    icon: Clock,
    title: 'Order Status Updates',
    description: 'Keep customers informed with status updates: Pending, Confirmed, Preparing, Out for Delivery, Delivered.',
  },
  {
    icon: Truck,
    title: 'Delivery Management',
    description: 'Track deliveries, assign drivers, and manage delivery zones all from one dashboard.',
  },
];

const howItWorks = [
  {
    step: 1,
    title: 'Share Your Link',
    description: 'Share your catalog link on Instagram, Facebook, or send directly to customers via WhatsApp.',
  },
  {
    step: 2,
    title: 'Customer Browses & Orders',
    description: 'Customer views your products, adds to cart, and taps "Order via WhatsApp".',
  },
  {
    step: 3,
    title: 'You Receive the Order',
    description: 'Order details arrive in your WhatsApp. Confirm, process, and deliver.',
  },
  {
    step: 4,
    title: 'Track & Manage',
    description: 'All orders sync to your dashboard. Track status, manage inventory, generate invoices.',
  },
];

const benefits = [
  'No commission fees on orders',
  'Customers don\'t need to download any app',
  'Works with your existing WhatsApp Business',
  'Automatic inventory sync',
  'Order history for repeat customers',
  'Analytics on popular products',
];

export default function WhatsAppOrdersPage() {
  return (
    <div className="min-h-screen bg-[#0B1121]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#25D366]/10 border border-[#25D366]/30 rounded-full px-4 py-2 mb-6">
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span className="text-[#25D366] text-sm font-medium">WhatsApp Orders</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Turn WhatsApp Into Your Sales Channel
              </h1>
              <p className="text-gray-400 text-lg mb-8">
                Share a link, customers browse your products, and orders come straight to your WhatsApp. No app needed. No complicated setup. Start selling in minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold px-8 py-4 rounded-lg transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  Start Free Trial
                </Link>
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-white font-semibold px-8 py-4 rounded-lg transition-all border border-gray-700"
                >
                  See How It Works
                </Link>
              </div>
            </div>

            {/* WhatsApp Preview */}
            <div className="relative">
              <div className="bg-[#151F32] rounded-3xl border border-gray-800 p-4 max-w-sm mx-auto">
                {/* Phone Frame */}
                <div className="bg-[#0B1121] rounded-2xl overflow-hidden">
                  {/* WhatsApp Header */}
                  <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">EC</span>
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">ExiusCart Store</p>
                      <p className="text-white/70 text-xs">online</p>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="p-4 space-y-3 min-h-[300px]">
                    {/* Incoming Order */}
                    <div className="bg-[#DCF8C6] rounded-lg p-3 max-w-[80%]">
                      <p className="text-black text-sm font-medium mb-2">New Order!</p>
                      <div className="text-black/80 text-xs space-y-1">
                        <p>iPhone 15 Case x2 - 178 AED</p>
                        <p>USB-C Cable x1 - 25 AED</p>
                        <p className="font-medium pt-1 border-t border-black/10">Total: 203 AED</p>
                      </div>
                      <p className="text-black/50 text-xs mt-2">Customer: Ahmed +971 50 XXX XXXX</p>
                    </div>

                    {/* Reply */}
                    <div className="bg-[#1A2540] rounded-lg p-3 max-w-[80%] ml-auto">
                      <p className="text-white text-sm">Order confirmed! Will be ready in 30 minutes.</p>
                      <p className="text-white/50 text-xs mt-1 text-right">10:32 AM</p>
                    </div>

                    {/* Status Update */}
                    <div className="bg-[#DCF8C6] rounded-lg p-3 max-w-[80%]">
                      <p className="text-black text-sm">Thank you! I&apos;ll come pick it up.</p>
                      <p className="text-black/50 text-xs mt-1">10:33 AM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#25D366]/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-[#0D1526]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Everything You Need for WhatsApp Commerce
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A complete solution to sell products through WhatsApp without any technical setup.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatsappFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="bg-[#151F32] rounded-2xl border border-gray-800 p-6 hover:border-[#25D366]/30 transition">
                  <div className="w-12 h-12 bg-[#25D366]/20 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#25D366]" />
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
              How WhatsApp Orders Work
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From sharing your link to delivering the order — it&apos;s that simple.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, i) => (
              <div key={i} className="relative">
                <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-6 h-full">
                  <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
                {i < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-gray-700" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Preview */}
      <section className="py-20 px-4 bg-[#0D1526]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Catalog Preview */}
            <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white font-semibold">Your Online Catalog</h3>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <QrCode className="w-4 h-4" />
                  <span>Scan to view</span>
                </div>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'iPhone 15 Case', price: 89 },
                  { name: 'USB-C Hub', price: 149 },
                  { name: 'Wireless Charger', price: 79 },
                  { name: 'AirPods Case', price: 45 },
                ].map((product, i) => (
                  <div key={i} className="bg-[#1A2540] rounded-xl p-4">
                    <div className="w-full h-24 bg-[#0B1121] rounded-lg mb-3 flex items-center justify-center">
                      <ShoppingBag className="w-8 h-8 text-gray-600" />
                    </div>
                    <p className="text-white text-sm font-medium">{product.name}</p>
                    <p className="text-[#25D366] font-bold">{product.price} AED</p>
                  </div>
                ))}
              </div>

              {/* Order Button */}
              <button type="button" className="w-full mt-6 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition">
                <MessageCircle className="w-5 h-5" />
                Order via WhatsApp
              </button>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Beautiful Catalog, Zero Effort
              </h2>
              <p className="text-gray-400 mb-8">
                Your products automatically appear in a mobile-friendly catalog. Customers can browse, add to cart, and order — all without leaving WhatsApp.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#25D366] flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-[#151F32] rounded-xl border border-gray-800 p-6 text-center">
              <MessageCircle className="w-8 h-8 text-[#25D366] mx-auto mb-3" />
              <p className="text-2xl font-bold text-white mb-1">2B+</p>
              <p className="text-gray-400 text-sm">WhatsApp Users Worldwide</p>
            </div>
            <div className="bg-[#151F32] rounded-xl border border-gray-800 p-6 text-center">
              <Smartphone className="w-8 h-8 text-[#25D366] mx-auto mb-3" />
              <p className="text-2xl font-bold text-white mb-1">90%</p>
              <p className="text-gray-400 text-sm">UAE Uses WhatsApp</p>
            </div>
            <div className="bg-[#151F32] rounded-xl border border-gray-800 p-6 text-center">
              <Users className="w-8 h-8 text-[#25D366] mx-auto mb-3" />
              <p className="text-2xl font-bold text-white mb-1">0%</p>
              <p className="text-gray-400 text-sm">Commission Fees</p>
            </div>
            <div className="bg-[#151F32] rounded-xl border border-gray-800 p-6 text-center">
              <TrendingUp className="w-8 h-8 text-[#25D366] mx-auto mb-3" />
              <p className="text-2xl font-bold text-white mb-1">3x</p>
              <p className="text-gray-400 text-sm">More Customer Engagement</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#0D1526]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 bg-[#25D366] rounded-2xl flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Start Selling on WhatsApp Today
          </h2>
          <p className="text-gray-400 mb-10">
            Join businesses already using WhatsApp to reach more customers. Setup takes less than 5 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold px-10 py-4 rounded-lg transition-all text-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Start Free Trial
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-white font-semibold px-10 py-4 rounded-lg transition-all border border-gray-700"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
