import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, MessageCircle, FileText, Printer, BarChart3, CreditCard, Globe, Smartphone, Mail, Package, ShoppingCart, Receipt } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Integrations | WhatsApp, Printers, Payment Gateways & More | ExiusCart',
  description: 'Connect ExiusCart with WhatsApp Business, thermal printers, payment gateways, and more. Seamless integrations to streamline your small business operations.',
  openGraph: {
    title: 'ExiusCart Integrations | WhatsApp, Printers & More',
    description: 'Connect ExiusCart with WhatsApp, thermal printers, payment gateways and more tools.',
    url: 'https://exiuscart.com/integrations',
    siteName: 'ExiusCart',
    type: 'website',
  },
};

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-[#0B1121]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#F5A623] font-medium mb-4">Integrations</p>
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] mb-6">
            Connect With the Tools
            <span className="block text-[#F5A623]">Your Business Uses</span>
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            ExiusCart integrates with popular platforms and services to streamline
            your business operations — from WhatsApp to thermal printers.
          </p>
        </div>
      </section>

      {/* Featured Integration — WhatsApp */}
      <section className="py-20 px-4 bg-[#0D1526]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#25D366]/10 text-[#25D366] text-sm font-medium px-4 py-2 rounded-full mb-6">
                <MessageCircle className="w-4 h-4" />
                Featured Integration
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                WhatsApp Business Integration
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Your customers already use WhatsApp. Now they can browse your products,
                place orders, and receive receipts — all through the app they use every day.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#25D366]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ShoppingCart className="w-4 h-4 text-[#25D366]" />
                  </div>
                  <span className="text-gray-300">Receive customer orders via WhatsApp</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#25D366]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Receipt className="w-4 h-4 text-[#25D366]" />
                  </div>
                  <span className="text-gray-300">Send digital receipts and invoices</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#25D366]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Package className="w-4 h-4 text-[#25D366]" />
                  </div>
                  <span className="text-gray-300">Share product catalog with customers</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#25D366]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  </div>
                  <span className="text-gray-300">Automated order confirmation messages</span>
                </div>
              </div>
            </div>

            <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-8">
              <div className="bg-[#1A2540] rounded-xl p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-[#0D1526] rounded-xl rounded-tl-none p-4 flex-1">
                    <p className="text-gray-300 text-sm">Hi! I&apos;d like to order iPhone 15 Pro case</p>
                    <p className="text-gray-600 text-xs mt-1">10:30 AM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 flex-row-reverse">
                  <div className="w-10 h-10 bg-[#F5A623] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-bold text-xs">EC</span>
                  </div>
                  <div className="bg-[#F5A623]/10 rounded-xl rounded-tr-none p-4 flex-1">
                    <p className="text-gray-300 text-sm">Order #1234 confirmed! iPhone 15 Pro Case - AED 45. Your order is being prepared.</p>
                    <p className="text-gray-600 text-xs mt-1">10:31 AM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 flex-row-reverse">
                  <div className="w-10 h-10 bg-[#F5A623] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-bold text-xs">EC</span>
                  </div>
                  <div className="bg-[#F5A623]/10 rounded-xl rounded-tr-none p-4 flex-1">
                    <p className="text-gray-300 text-sm">Here&apos;s your receipt: Invoice #INV-1234.pdf</p>
                    <p className="text-gray-600 text-xs mt-1">10:31 AM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Integrations Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              All Integrations
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Everything you need to run your business, connected in one platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* WhatsApp */}
            <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-6 hover:border-[#25D366]/30 transition">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#25D366]/10 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-[#25D366]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">WhatsApp</h3>
                  <span className="text-green-400 text-xs font-medium">Available</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Receive orders, send receipts, and manage customer communication via WhatsApp.
              </p>
            </div>

            {/* Thermal Printers */}
            <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-6 hover:border-[#F5A623]/30 transition">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#F5A623]/10 rounded-xl flex items-center justify-center">
                  <Printer className="w-6 h-6 text-[#F5A623]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Thermal Printers</h3>
                  <span className="text-green-400 text-xs font-medium">Available</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Print receipts and invoices directly from ExiusCart to any thermal printer.
              </p>
            </div>

            {/* PDF Export */}
            <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-6 hover:border-[#F5A623]/30 transition">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#F5A623]/10 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-[#F5A623]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">PDF &amp; Excel Export</h3>
                  <span className="text-green-400 text-xs font-medium">Available</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Export invoices, reports, and inventory data as PDF or Excel files.
              </p>
            </div>

            {/* Analytics */}
            <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-6 hover:border-[#F5A623]/30 transition">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#F5A623]/10 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-[#F5A623]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Sales Analytics</h3>
                  <span className="text-green-400 text-xs font-medium">Available</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Built-in dashboards and reports to track sales, revenue, and business performance.
              </p>
            </div>

            {/* Multi-Currency */}
            <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-6 hover:border-[#F5A623]/30 transition">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#F5A623]/10 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-[#F5A623]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Multi-Currency</h3>
                  <span className="text-green-400 text-xs font-medium">Available</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Support for AED, LKR, and USD with automatic region detection.
              </p>
            </div>

            {/* Email Notifications */}
            <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-6 hover:border-[#F5A623]/30 transition">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#F5A623]/10 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#F5A623]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email Notifications</h3>
                  <span className="text-green-400 text-xs font-medium">Available</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Send invoices, order updates, and low-stock alerts via email.
              </p>
            </div>

            {/* Mobile App */}
            <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-6 hover:border-blue-500/30 transition">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Mobile App</h3>
                  <span className="text-[#F5A623] text-xs font-medium">Coming Soon</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Manage your business on the go with the ExiusCart mobile app for iOS and Android.
              </p>
            </div>

            {/* Payment Gateway */}
            <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-6 hover:border-blue-500/30 transition">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Payment Gateway</h3>
                  <span className="text-[#F5A623] text-xs font-medium">Coming Soon</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Accept online payments with integrated payment gateways for seamless checkout.
              </p>
            </div>

            {/* E-Commerce */}
            <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-6 hover:border-blue-500/30 transition">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                  <ShoppingCart className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Online Store</h3>
                  <span className="text-[#F5A623] text-xs font-medium">Coming Soon</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Launch your own online store with built-in e-commerce features and product pages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner With Us */}
      <section className="py-20 px-4 bg-[#0D1526]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#F5A623] font-medium mb-3">Become a Partner</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Partner With ExiusCart
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                We&apos;re looking for technology partners, resellers, and integration
                partners to help bring ExiusCart to more businesses across the region.
              </p>
              <div className="space-y-6">
                <div className="bg-[#151F32] rounded-xl border border-gray-800 p-6">
                  <h3 className="text-white font-semibold mb-2">Technology Partners</h3>
                  <p className="text-gray-400 text-sm">
                    Integrate your service with ExiusCart. We&apos;re open to partnerships
                    with payment providers, delivery services, and accounting platforms.
                  </p>
                </div>
                <div className="bg-[#151F32] rounded-xl border border-gray-800 p-6">
                  <h3 className="text-white font-semibold mb-2">Reseller Partners</h3>
                  <p className="text-gray-400 text-sm">
                    Sell ExiusCart to your clients and earn commissions. Perfect for
                    IT consultants, POS installers, and business advisors.
                  </p>
                </div>
                <div className="bg-[#151F32] rounded-xl border border-gray-800 p-6">
                  <h3 className="text-white font-semibold mb-2">Referral Partners</h3>
                  <p className="text-gray-400 text-sm">
                    Refer businesses to ExiusCart and earn rewards for every successful
                    signup. Simple, no commitments required.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Why Partner With Us?</h3>
              <div className="space-y-5">
                <div>
                  <p className="text-white font-medium mb-1">Growing Market</p>
                  <p className="text-gray-500 text-sm">UAE small business market is booming — be part of the growth</p>
                </div>
                <div className="border-t border-gray-800 pt-5">
                  <p className="text-white font-medium mb-1">Competitive Commissions</p>
                  <p className="text-gray-500 text-sm">Earn generous commissions on every sale you bring</p>
                </div>
                <div className="border-t border-gray-800 pt-5">
                  <p className="text-white font-medium mb-1">Marketing Support</p>
                  <p className="text-gray-500 text-sm">Get access to marketing materials, demos, and sales training</p>
                </div>
                <div className="border-t border-gray-800 pt-5">
                  <p className="text-white font-medium mb-1">Dedicated Partner Manager</p>
                  <p className="text-gray-500 text-sm">A dedicated contact to support you throughout the partnership</p>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="block text-center bg-[#F5A623] hover:bg-[#E09612] text-black font-semibold py-4 rounded-lg transition-all"
                >
                  Contact Us to Partner
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to connect your business?
          </h2>
          <p className="text-gray-400 mb-10">
            Start your 7-day free trial and experience all integrations first-hand.
          </p>
          <Link
            href="/register"
            className="inline-flex items-center justify-center gap-2 bg-[#F5A623] hover:bg-[#E09612] text-black font-semibold px-10 py-4 rounded-lg transition-all text-lg"
          >
            Start 7-Day Free Trial
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
