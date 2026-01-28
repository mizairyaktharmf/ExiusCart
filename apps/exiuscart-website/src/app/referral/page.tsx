import Link from 'next/link';
import { ArrowRight, Gift, Users, DollarSign, Share2, CheckCircle, MessageCircle } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

export default function ReferralPage() {
  return (
    <div className="min-h-screen bg-[#0B1121]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#F5A623]/10 text-[#F5A623] text-sm font-medium px-4 py-2 rounded-full mb-6">
            <Gift className="w-4 h-4" />
            Referral Program
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] mb-6">
            Refer a Shop,
            <span className="block text-[#F5A623]">Earn Rewards</span>
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Know a business that could benefit from ExiusCart? Refer them and
            earn rewards for every successful signup. It&apos;s a win-win.
          </p>
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
              Three simple steps to start earning rewards
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
                Share your unique referral link or simply tell a business owner about ExiusCart.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F5A623]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-[#F5A623]" />
              </div>
              <div className="bg-[#F5A623] text-black text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold text-white mb-3">They Sign Up</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your referral signs up for ExiusCart and starts their 7-day free trial.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F5A623]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-[#F5A623]" />
              </div>
              <div className="bg-[#F5A623] text-black text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold text-white mb-3">You Earn</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                When they purchase a plan, you earn a reward. Simple as that.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rewards */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                What You Earn
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                For every business that signs up and purchases through your referral,
                you receive rewards. The more you refer, the more you earn.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#F5A623] flex-shrink-0" />
                  <span className="text-gray-300">Earn for every successful referral purchase</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#F5A623] flex-shrink-0" />
                  <span className="text-gray-300">No limit on how many businesses you can refer</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#F5A623] flex-shrink-0" />
                  <span className="text-gray-300">Your referral also gets a discount on their first purchase</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#F5A623] flex-shrink-0" />
                  <span className="text-gray-300">Rewards paid out monthly</span>
                </div>
              </div>
            </div>

            <div className="bg-[#151F32] rounded-2xl border border-[#F5A623]/30 p-8">
              <div className="text-center mb-8">
                <Gift className="w-12 h-12 text-[#F5A623] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Referral Reward</h3>
                <p className="text-gray-500 text-sm">For each successful referral</p>
              </div>
              <div className="bg-[#0D1526] rounded-xl p-6 text-center mb-6">
                <p className="text-4xl font-bold text-[#F5A623] mb-1">10%</p>
                <p className="text-gray-400 text-sm">Commission on their purchase</p>
              </div>
              <div className="bg-[#0D1526] rounded-xl p-6 text-center mb-8">
                <p className="text-gray-400 text-sm mb-1">Your referral gets</p>
                <p className="text-2xl font-bold text-white">10% OFF</p>
                <p className="text-gray-500 text-sm">on their first purchase</p>
              </div>
              <a
                href="https://wa.me/971562393573?text=Hi!%20I%20want%20to%20join%20the%20ExiusCart%20referral%20program"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-[#F5A623] hover:bg-[#E09612] text-black font-semibold py-4 rounded-lg transition-all"
              >
                Join Referral Program
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Refer */}
      <section className="py-20 px-4 bg-[#0D1526]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Who Can Refer?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Anyone can join our referral program — no special requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-[#151F32] rounded-xl border border-gray-800 p-6 text-center">
              <h3 className="text-white font-semibold mb-2">Existing Customers</h3>
              <p className="text-gray-500 text-sm">Love ExiusCart? Share it with other shop owners you know.</p>
            </div>
            <div className="bg-[#151F32] rounded-xl border border-gray-800 p-6 text-center">
              <h3 className="text-white font-semibold mb-2">Business Consultants</h3>
              <p className="text-gray-500 text-sm">Recommend ExiusCart to your clients who need business tools.</p>
            </div>
            <div className="bg-[#151F32] rounded-xl border border-gray-800 p-6 text-center">
              <h3 className="text-white font-semibold mb-2">Anyone</h3>
              <p className="text-gray-500 text-sm">Know a shop owner? You can refer them and earn rewards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to start earning?
          </h2>
          <p className="text-gray-400 mb-10">
            Contact us on WhatsApp to join the referral program and get your unique referral link.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/971562393573?text=Hi!%20I%20want%20to%20join%20the%20ExiusCart%20referral%20program"
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
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
