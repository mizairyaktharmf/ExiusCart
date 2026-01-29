import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Gift, Users, DollarSign, Share2, CheckCircle, MessageCircle, Briefcase, TrendingUp, BarChart3, Award, Layers } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Partner Program | Earn 10-20% Commission | ExiusCart',
  description: 'Join the ExiusCart partner program. Refer businesses casually or become a professional affiliate. Earn 10-20% commission on every sale. Perfect for everyone.',
  openGraph: {
    title: 'ExiusCart Partner Program | Earn Commissions',
    description: 'Join the ExiusCart partner program. Earn 10-20% commission on every sale.',
    url: 'https://exiuscart.com/partners',
    siteName: 'ExiusCart',
    type: 'website',
  },
};

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-[#0B1121]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#F5A623]/10 text-[#F5A623] text-sm font-medium px-4 py-2 rounded-full mb-6">
            <Gift className="w-4 h-4" />
            Partner Program
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] mb-6">
            Refer & Earn with
            <span className="block text-[#F5A623]">ExiusCart</span>
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Whether you&apos;re a shop owner sharing with friends or a professional
            reseller, earn commissions for every business you bring to ExiusCart.
          </p>
        </div>
      </section>

      {/* Two Program Options */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Referral Program */}
            <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F5A623]/5 rounded-bl-full"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-[#F5A623]/10 rounded-xl flex items-center justify-center mb-6">
                  <Gift className="w-7 h-7 text-[#F5A623]" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">Referral Program</h2>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  Perfect for existing customers and anyone who wants to share ExiusCart casually with shop owners they know.
                </p>

                <div className="bg-[#0D1526] rounded-xl p-4 mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400 text-sm">You Earn</span>
                    <span className="text-2xl font-bold text-[#F5A623]">10%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">They Get</span>
                    <span className="text-white font-semibold">10% OFF</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">No minimum requirements</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Simple referral link</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Monthly payouts</span>
                  </div>
                </div>

                <a
                  href="https://wa.me/971562393573?text=Hi!%20I%20want%20to%20join%20the%20ExiusCart%20referral%20program"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-[#F5A623] hover:bg-[#E09612] text-black font-semibold py-3 rounded-lg transition-all"
                >
                  Join Referral Program
                </a>
              </div>
            </div>

            {/* Affiliate Program */}
            <div className="bg-[#151F32] rounded-2xl border-2 border-[#F5A623] p-8 relative overflow-hidden">
              <div className="absolute -top-1 -right-1">
                <span className="bg-[#F5A623] text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
                  PRO
                </span>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F5A623]/10 rounded-bl-full"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-[#F5A623]/10 rounded-xl flex items-center justify-center mb-6">
                  <Briefcase className="w-7 h-7 text-[#F5A623]" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">Affiliate Program</h2>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  For IT consultants, POS installers, and business advisors who want to resell ExiusCart professionally.
                </p>

                <div className="bg-[#0D1526] rounded-xl p-4 mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400 text-sm">You Earn</span>
                    <span className="text-2xl font-bold text-[#F5A623]">10-20%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Tier Based</span>
                    <span className="text-white font-semibold">Higher volume = More %</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Affiliate dashboard</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Demo account & sales materials</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Priority partner support</span>
                  </div>
                </div>

                <a
                  href="https://wa.me/971562393573?text=Hi!%20I%20want%20to%20join%20the%20ExiusCart%20affiliate%20program"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-[#F5A623] hover:bg-[#E09612] text-black font-semibold py-3 rounded-lg transition-all"
                >
                  Apply for Affiliate Program
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-[#0D1526]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Three simple steps to start earning
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F5A623]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Share2 className="w-8 h-8 text-[#F5A623]" />
              </div>
              <div className="bg-[#F5A623] text-black text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold text-white mb-3">Share</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Share your unique referral link or recommend ExiusCart to business owners.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F5A623]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-[#F5A623]" />
              </div>
              <div className="bg-[#F5A623] text-black text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold text-white mb-3">They Sign Up</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your referral signs up and starts their 7-day free trial.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F5A623]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-[#F5A623]" />
              </div>
              <div className="bg-[#F5A623] text-black text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold text-white mb-3">You Earn</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                When they purchase, you earn commission. Paid monthly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commission Tiers (Affiliate) */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Affiliate Commission Tiers
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

      {/* What Affiliates Get */}
      <section className="py-20 px-4 bg-[#0D1526]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Affiliates Get
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Professional partners receive additional tools and support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#151F32] rounded-xl border border-gray-800 p-6 text-center">
              <div className="w-12 h-12 bg-[#F5A623]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-6 h-6 text-[#F5A623]" />
              </div>
              <h3 className="text-white font-semibold mb-2">Affiliate Dashboard</h3>
              <p className="text-gray-500 text-sm">Track referrals, earnings, and payouts</p>
            </div>
            <div className="bg-[#151F32] rounded-xl border border-gray-800 p-6 text-center">
              <div className="w-12 h-12 bg-[#F5A623]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Layers className="w-6 h-6 text-[#F5A623]" />
              </div>
              <h3 className="text-white font-semibold mb-2">Sales Materials</h3>
              <p className="text-gray-500 text-sm">Brochures, demos, and pitch decks</p>
            </div>
            <div className="bg-[#151F32] rounded-xl border border-gray-800 p-6 text-center">
              <div className="w-12 h-12 bg-[#F5A623]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-[#F5A623]" />
              </div>
              <h3 className="text-white font-semibold mb-2">Training</h3>
              <p className="text-gray-500 text-sm">Full product training and onboarding</p>
            </div>
            <div className="bg-[#151F32] rounded-xl border border-gray-800 p-6 text-center">
              <div className="w-12 h-12 bg-[#F5A623]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-[#F5A623]" />
              </div>
              <h3 className="text-white font-semibold mb-2">Priority Support</h3>
              <p className="text-gray-500 text-sm">Direct line to our partner team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Join */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Who Can Join?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Gift className="w-5 h-5 text-[#F5A623]" />
                Referral Program
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Existing ExiusCart customers</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Friends & family of shop owners</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Anyone who knows a business</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[#F5A623]" />
                Affiliate Program
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">IT consultants & system integrators</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">POS hardware installers</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Business setup consultants</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Accountants & bookkeepers</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Digital marketing agencies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-[#0D1526]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to start earning?
          </h2>
          <p className="text-gray-400 mb-10">
            Contact us on WhatsApp to join the partner program that&apos;s right for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/971562393573?text=Hi!%20I%20want%20to%20join%20the%20ExiusCart%20partner%20program"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold px-10 py-4 rounded-lg transition-all text-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Join via WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-white font-semibold px-10 py-4 rounded-lg transition-all border border-gray-700 text-lg"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
