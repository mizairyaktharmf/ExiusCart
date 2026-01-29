import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Refund Policy | ExiusCart',
  description: 'ExiusCart refund policy. 7-day free trial, money-back guarantee for eligible purchases. Learn about our fair refund terms for one-time and subscription plans.',
  openGraph: {
    title: 'Refund Policy | ExiusCart',
    description: 'ExiusCart refund policy. 7-day free trial with money-back guarantee for eligible purchases.',
    url: 'https://exiuscart.com/refund-policy',
    siteName: 'ExiusCart',
    type: 'website',
  },
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-[#0B1121]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#F5A623] font-medium mb-4">Legal</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-[1.1] mb-6">
            Refund Policy
          </h1>
          <p className="text-gray-400">
            Last updated: January 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-12">
            {/* Overview */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
              <p className="text-gray-400 leading-relaxed">
                At ExiusCart, we want you to be completely satisfied with your purchase.
                We offer a 7-day free trial so you can try the product before committing.
                If you&apos;re not satisfied after purchasing, we have a clear and fair
                refund policy outlined below.
              </p>
            </div>

            {/* Free Trial */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">7-Day Free Trial</h2>
              <div className="bg-[#151F32] rounded-xl border border-gray-800 p-6">
                <p className="text-gray-400 leading-relaxed">
                  Every new account starts with a <span className="text-white font-medium">7-day free trial</span> with
                  full access to all features. No credit card is required to start.
                  If you decide not to continue, your account will simply expire — no
                  charges, no questions asked.
                </p>
              </div>
            </div>

            {/* One-Time Purchase */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">One-Time Purchase Refunds</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                For one-time license purchases, the following refund policy applies:
              </p>
              <div className="space-y-4">
                <div className="bg-[#151F32] rounded-xl border border-gray-800 p-6">
                  <h3 className="text-white font-semibold mb-2">Within 7 Days of Purchase</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    If you are not satisfied with ExiusCart within 7 days of your purchase,
                    you may request a full refund. Contact our support team via WhatsApp or
                    email with your order details, and we will process the refund within
                    5-7 business days.
                  </p>
                </div>
                <div className="bg-[#151F32] rounded-xl border border-gray-800 p-6">
                  <h3 className="text-white font-semibold mb-2">After 7 Days</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Refunds are not available after 7 days from the date of purchase for
                    one-time licenses. Since the product is a digital software license with
                    lifetime access, we encourage you to use the free trial to evaluate the
                    product before purchasing.
                  </p>
                </div>
              </div>
            </div>

            {/* Monthly Subscription */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Monthly Subscription Refunds</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                For monthly subscription plans:
              </p>
              <div className="space-y-4">
                <div className="bg-[#151F32] rounded-xl border border-gray-800 p-6">
                  <h3 className="text-white font-semibold mb-2">Cancellation</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    You can cancel your subscription at any time. Your access will
                    continue until the end of the current billing period. No further
                    charges will be made after cancellation.
                  </p>
                </div>
                <div className="bg-[#151F32] rounded-xl border border-gray-800 p-6">
                  <h3 className="text-white font-semibold mb-2">Current Period</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    We do not offer partial refunds for the current billing period.
                    Once cancelled, you retain access to all features until your
                    current period ends.
                  </p>
                </div>
              </div>
            </div>

            {/* Non-Refundable */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Non-Refundable Items</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                The following are not eligible for refunds:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#F5A623] mt-1">&#8226;</span>
                  <span className="text-gray-400 text-sm">Custom development or integration services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#F5A623] mt-1">&#8226;</span>
                  <span className="text-gray-400 text-sm">Setup and training services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#F5A623] mt-1">&#8226;</span>
                  <span className="text-gray-400 text-sm">Add-on modules purchased separately after the initial 7-day period</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#F5A623] mt-1">&#8226;</span>
                  <span className="text-gray-400 text-sm">Accounts terminated due to policy violations</span>
                </li>
              </ul>
            </div>

            {/* How to Request */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">How to Request a Refund</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                To request a refund, please contact us with the following information:
              </p>
              <div className="bg-[#151F32] rounded-xl border border-gray-800 p-6 space-y-3">
                <p className="text-gray-300 text-sm">1. Your registered email address or phone number</p>
                <p className="text-gray-300 text-sm">2. Order/Invoice number</p>
                <p className="text-gray-300 text-sm">3. Date of purchase</p>
                <p className="text-gray-300 text-sm">4. Reason for the refund request</p>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/971562393573"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold px-6 py-3 rounded-lg transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Support
                </a>
                <a
                  href="mailto:support@exiuscart.com"
                  className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-white font-semibold px-6 py-3 rounded-lg transition-all border border-gray-700"
                >
                  Email Support
                </a>
              </div>
            </div>

            {/* Processing Time */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Refund Processing</h2>
              <p className="text-gray-400 leading-relaxed">
                Approved refunds will be processed within 5-7 business days. The
                refund will be returned to the original payment method used for the
                purchase. Please note that your bank may take additional time to
                reflect the refund in your account.
              </p>
            </div>

            {/* Changes */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h2>
              <p className="text-gray-400 leading-relaxed">
                ExiusCart reserves the right to update this refund policy at any time.
                Changes will be posted on this page with an updated date. We encourage
                you to review this policy periodically.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-3">Questions about refunds?</h3>
              <p className="text-gray-400 mb-6">
                Our support team is happy to help with any questions about our refund policy.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#F5A623] hover:bg-[#E09612] text-black font-semibold px-8 py-3 rounded-lg transition-all"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
