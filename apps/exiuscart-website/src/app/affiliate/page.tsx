import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Briefcase, TrendingUp, BarChart3, CheckCircle, Award, Layers } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Affiliate Program | Earn 10-20% Commission | ExiusCart Reseller',
  description: 'Join the ExiusCart affiliate program. Earn 10-20% commission on every sale as an IT consultant, POS installer, or business advisor. Professional reseller partnership.',
  openGraph: {
    title: 'ExiusCart Affiliate Program | Earn 10-20% Commission',
    description: 'Join the ExiusCart affiliate program. Earn commissions as a reseller partner.',
    url: 'https://exiuscart.com/affiliate',
    siteName: 'ExiusCart',
    type: 'website',
  },
};

export default function AffiliatePage() {
  return (
    <div className="min-h-screen bg-[#0B1121]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#F5A623]/10 text-[#F5A623] text-sm font-medium px-4 py-2 rounded-full mb-6">
            <Briefcase className="w-4 h-4" />
            Affiliate Program
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] mb-6">
            Become an ExiusCart
            <span className="block text-[#F5A623]">Reseller Partner</span>
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Join our affiliate program and earn recurring commissions by selling
            ExiusCart to businesses in your network. Perfect for IT consultants,
            POS installers, and business advisors.
          </p>
        </div>
      </section>

      {/* Why Become an Affiliate */}
      <section className="py-20 px-4 bg-[#0D1526]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Become an Affiliate?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Build a revenue stream by helping businesses modernize their operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#151F32] rounded-xl border border-gray-800 p-6 text-center">
              <div className="w-12 h-12 bg-[#F5A623]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-[#F5A623]" />
              </div>
              <h3 className="text-white font-semibold mb-2">High Commissions</h3>
              <p className="text-gray-500 text-sm">Earn up to 20% commission on every sale</p>
            </div>
            <div className="bg-[#151F32] rounded-xl border border-gray-800 p-6 text-center">
              <div className="w-12 h-12 bg-[#F5A623]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Layers className="w-6 h-6 text-[#F5A623]" />
              </div>
              <h3 className="text-white font-semibold mb-2">Marketing Materials</h3>
              <p className="text-gray-500 text-sm">Get ready-made demos, brochures, and pitch decks</p>
            </div>
            <div className="bg-[#151F32] rounded-xl border border-gray-800 p-6 text-center">
              <div className="w-12 h-12 bg-[#F5A623]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-[#F5A623]" />
              </div>
              <h3 className="text-white font-semibold mb-2">Training &amp; Support</h3>
              <p className="text-gray-500 text-sm">Full product training and dedicated partner support</p>
            </div>
            <div className="bg-[#151F32] rounded-xl border border-gray-800 p-6 text-center">
              <div className="w-12 h-12 bg-[#F5A623]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-6 h-6 text-[#F5A623]" />
              </div>
              <h3 className="text-white font-semibold mb-2">Dashboard</h3>
              <p className="text-gray-500 text-sm">Track your referrals, commissions, and payouts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Commission Tiers */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Commission Structure
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The more you sell, the higher your commission rate
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-8 text-center">
              <p className="text-gray-500 text-sm mb-2">Starter</p>
              <p className="text-4xl font-bold text-white mb-1">10%</p>
              <p className="text-gray-500 text-sm mb-6">commission per sale</p>
              <div className="border-t border-gray-800 pt-6">
                <p className="text-gray-400 text-sm">1-5 sales per month</p>
              </div>
            </div>
            <div className="bg-[#151F32] rounded-2xl border-2 border-[#F5A623] p-8 text-center relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-[#F5A623] text-black text-xs font-bold px-4 py-1 rounded-full">
                  POPULAR
                </span>
              </div>
              <p className="text-[#F5A623] text-sm font-medium mb-2">Growth</p>
              <p className="text-4xl font-bold text-white mb-1">15%</p>
              <p className="text-gray-500 text-sm mb-6">commission per sale</p>
              <div className="border-t border-gray-800 pt-6">
                <p className="text-gray-400 text-sm">6-15 sales per month</p>
              </div>
            </div>
            <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-8 text-center">
              <p className="text-gray-500 text-sm mb-2">Premium</p>
              <p className="text-4xl font-bold text-white mb-1">20%</p>
              <p className="text-gray-500 text-sm mb-6">commission per sale</p>
              <div className="border-t border-gray-800 pt-6">
                <p className="text-gray-400 text-sm">16+ sales per month</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-20 px-4 bg-[#0D1526]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Perfect For
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Our affiliate program is designed for professionals who work
                with small businesses and can recommend ExiusCart as part of
                their service offering.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#F5A623] flex-shrink-0" />
                  <span className="text-gray-300">IT consultants and system integrators</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#F5A623] flex-shrink-0" />
                  <span className="text-gray-300">POS hardware installers and suppliers</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#F5A623] flex-shrink-0" />
                  <span className="text-gray-300">Business setup consultants in UAE</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#F5A623] flex-shrink-0" />
                  <span className="text-gray-300">Accountants and bookkeeping firms</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#F5A623] flex-shrink-0" />
                  <span className="text-gray-300">Digital marketing agencies</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#F5A623] flex-shrink-0" />
                  <span className="text-gray-300">Freelance tech professionals</span>
                </div>
              </div>
            </div>

            <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">What You Get</h3>
              <div className="space-y-5">
                <div>
                  <p className="text-white font-medium mb-1">Affiliate Dashboard</p>
                  <p className="text-gray-500 text-sm">Track all your referrals, earnings, and payout history</p>
                </div>
                <div className="border-t border-gray-800 pt-5">
                  <p className="text-white font-medium mb-1">Custom Demo Account</p>
                  <p className="text-gray-500 text-sm">Full demo access to show prospects how ExiusCart works</p>
                </div>
                <div className="border-t border-gray-800 pt-5">
                  <p className="text-white font-medium mb-1">Sales Materials</p>
                  <p className="text-gray-500 text-sm">Brochures, presentations, and comparison sheets</p>
                </div>
                <div className="border-t border-gray-800 pt-5">
                  <p className="text-white font-medium mb-1">Priority Support</p>
                  <p className="text-gray-500 text-sm">Direct line to our team for partner inquiries</p>
                </div>
                <div className="border-t border-gray-800 pt-5">
                  <p className="text-white font-medium mb-1">Monthly Payouts</p>
                  <p className="text-gray-500 text-sm">Commissions paid monthly via bank transfer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to become a partner?
          </h2>
          <p className="text-gray-400 mb-10">
            Apply to join our affiliate program today. We&apos;ll review your application
            and get back to you within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/971562393573?text=Hi!%20I%20want%20to%20join%20the%20ExiusCart%20affiliate%20program"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#F5A623] hover:bg-[#E09612] text-black font-semibold px-10 py-4 rounded-lg transition-all text-lg"
            >
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-white font-semibold px-10 py-4 rounded-lg transition-all border border-gray-700 text-lg"
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
