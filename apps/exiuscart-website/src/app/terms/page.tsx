import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Terms of Service | ExiusCart',
  description: 'ExiusCart terms of service. Read our terms and conditions for using ExiusCart business management platform. Fair, transparent policies for all users.',
  openGraph: {
    title: 'Terms of Service | ExiusCart',
    description: 'ExiusCart terms of service. Fair, transparent policies for all users.',
    url: 'https://exiuscart.com/terms',
    siteName: 'ExiusCart',
    type: 'website',
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0B1121]">
      <Navbar />

      <main className="pt-28 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-8 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
            <p className="text-gray-400">Last updated: January 2026</p>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
                <p className="text-gray-400 leading-relaxed">
                  Welcome to ExiusCart. These Terms of Service (&quot;Terms&quot;) govern your use of the ExiusCart
                  platform and services provided by NexCodeNova, a technology company based in Sri Lanka.
                  By accessing or using our services, you agree to be bound by these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">2. Description of Service</h2>
                <p className="text-gray-400 leading-relaxed">
                  ExiusCart is a business management platform that provides point of sale (POS), inventory
                  management, invoicing, customer management, and WhatsApp ordering capabilities for small
                  and medium businesses. Our services are designed primarily for businesses operating in
                  the UAE and surrounding regions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">3. Account Registration</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  To use ExiusCart, you must create an account. When registering, you agree to:
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Notify us immediately of any unauthorized use</li>
                  <li>Be responsible for all activities under your account</li>
                  <li>Be at least 18 years old or have legal authority to enter into this agreement</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">4. Free Trial</h2>
                <p className="text-gray-400 leading-relaxed">
                  ExiusCart offers a 7-day free trial for new users. During the trial period, you will have
                  access to all features of your selected plan. No credit card is required to start the trial.
                  At the end of the trial, you may choose to subscribe to a paid plan or your account will
                  be limited to basic features.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">5. Subscription and Payment</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Paid subscriptions are billed annually. By subscribing, you agree to:
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                  <li>Pay the applicable fees for your selected plan</li>
                  <li>Provide valid payment information</li>
                  <li>Authorize automatic renewal unless cancelled</li>
                  <li>Understand that prices may change with 30 days notice</li>
                </ul>
                <p className="text-gray-400 leading-relaxed mt-4">
                  All prices are displayed in AED (UAE Dirhams) and are exclusive of applicable taxes unless
                  otherwise stated.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">6. Acceptable Use</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  You agree not to use ExiusCart to:
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Transmit harmful or malicious code</li>
                  <li>Interfere with or disrupt our services</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Use the service for any illegal or fraudulent activities</li>
                  <li>Resell or redistribute the service without authorization</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">7. Data and Privacy</h2>
                <p className="text-gray-400 leading-relaxed">
                  Your use of ExiusCart is also governed by our Privacy Policy. You retain ownership of
                  your business data. We will not sell, share, or use your data for purposes other than
                  providing our services, except as described in our Privacy Policy. We implement
                  industry-standard security measures to protect your data.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">8. Service Availability</h2>
                <p className="text-gray-400 leading-relaxed">
                  We strive to maintain 99% uptime for our services. However, we do not guarantee
                  uninterrupted access. We may perform maintenance or updates that temporarily affect
                  service availability. We will provide reasonable notice for planned maintenance when
                  possible.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">9. Intellectual Property</h2>
                <p className="text-gray-400 leading-relaxed">
                  ExiusCart and all related trademarks, logos, and content are the property of NexCodeNova.
                  You are granted a limited, non-exclusive license to use our services for your business
                  purposes. You may not copy, modify, distribute, or create derivative works based on our
                  platform without written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">10. Limitation of Liability</h2>
                <p className="text-gray-400 leading-relaxed">
                  To the maximum extent permitted by law, ExiusCart and NexCodeNova shall not be liable
                  for any indirect, incidental, special, consequential, or punitive damages, including
                  loss of profits, data, or business opportunities. Our total liability shall not exceed
                  the amount paid by you for the service in the twelve months preceding the claim.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">11. Termination</h2>
                <p className="text-gray-400 leading-relaxed">
                  You may cancel your subscription at any time. We may suspend or terminate your account
                  for violation of these Terms. Upon termination, your right to use the service will cease
                  immediately. You may request export of your data within 30 days of termination.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">12. Changes to Terms</h2>
                <p className="text-gray-400 leading-relaxed">
                  We may update these Terms from time to time. We will notify you of significant changes
                  via email or through the platform. Continued use of the service after changes constitutes
                  acceptance of the updated Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">13. Governing Law</h2>
                <p className="text-gray-400 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of Sri Lanka.
                  Any disputes arising from these Terms shall be resolved through arbitration in Colombo,
                  Sri Lanka, unless otherwise agreed by the parties.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">14. Contact Us</h2>
                <p className="text-gray-400 leading-relaxed">
                  If you have any questions about these Terms, please contact us at:
                </p>
                <div className="mt-4 bg-[#151F32] rounded-xl p-6 border border-gray-800">
                  <p className="text-white font-medium">NexCodeNova</p>
                  <p className="text-gray-400 mt-2">Email: legal@exiuscart.com</p>
                  <p className="text-gray-400">WhatsApp: +971 56 239 3573</p>
                  <p className="text-gray-400">Location: Sri Lanka | Dubai</p>
                </div>
              </section>
            </div>
          </div>

          {/* Bottom Links */}
          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link
              href="/privacy"
              className="text-[#F5A623] hover:text-[#FFB84D] text-sm transition"
            >
              Read our Privacy Policy
            </Link>
            <Link
              href="/contact"
              className="text-gray-400 hover:text-white text-sm transition"
            >
              Have questions? Contact us
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
