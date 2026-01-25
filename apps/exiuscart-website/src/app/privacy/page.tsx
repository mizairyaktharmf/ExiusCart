import Link from 'next/link';
import { ArrowLeft, Shield, Lock, Eye, Database, Bell, Trash2, Globe, Mail } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

export default function PrivacyPage() {
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
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#F5A623]/20 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-[#F5A623]" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
              </div>
            </div>
            <p className="text-gray-400">Last updated: January 2026</p>
          </div>

          {/* Quick Summary */}
          <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-6 mb-12">
            <h2 className="text-lg font-semibold text-white mb-4">Quick Summary</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-[#F5A623] flex-shrink-0 mt-0.5" />
                <p className="text-gray-400 text-sm">Your data is encrypted and secured</p>
              </div>
              <div className="flex items-start gap-3">
                <Eye className="w-5 h-5 text-[#F5A623] flex-shrink-0 mt-0.5" />
                <p className="text-gray-400 text-sm">We never sell your data to third parties</p>
              </div>
              <div className="flex items-start gap-3">
                <Database className="w-5 h-5 text-[#F5A623] flex-shrink-0 mt-0.5" />
                <p className="text-gray-400 text-sm">You own your business data</p>
              </div>
              <div className="flex items-start gap-3">
                <Trash2 className="w-5 h-5 text-[#F5A623] flex-shrink-0 mt-0.5" />
                <p className="text-gray-400 text-sm">You can request data deletion anytime</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
                <p className="text-gray-400 leading-relaxed">
                  NexCodeNova (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;), a technology company based in Sri Lanka,
                  operates ExiusCart. This Privacy Policy explains how we collect, use, disclose, and
                  safeguard your information when you use our platform. We are committed to protecting
                  your privacy and handling your data with transparency.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>

                <h3 className="text-lg font-medium text-white mt-6 mb-3">2.1 Information You Provide</h3>
                <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                  <li>Account information (name, email, phone number, business name)</li>
                  <li>Business data (products, customers, invoices, inventory)</li>
                  <li>Payment information (processed securely by payment providers)</li>
                  <li>Communications with our support team</li>
                </ul>

                <h3 className="text-lg font-medium text-white mt-6 mb-3">2.2 Information Collected Automatically</h3>
                <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                  <li>Device information (browser type, operating system)</li>
                  <li>Usage data (features used, time spent, actions taken)</li>
                  <li>IP address and general location</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  We use the collected information to:
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                  <li>Provide and maintain our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send administrative notifications and updates</li>
                  <li>Respond to your comments, questions, and support requests</li>
                  <li>Improve our platform and develop new features</li>
                  <li>Monitor and analyze usage patterns and trends</li>
                  <li>Detect, prevent, and address technical issues</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">4. Data Sharing and Disclosure</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  We do not sell your personal information. We may share your data only in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                  <li><strong className="text-white">Service Providers:</strong> Third-party companies that help us operate our platform (hosting, payment processing, analytics)</li>
                  <li><strong className="text-white">Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong className="text-white">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                  <li><strong className="text-white">With Your Consent:</strong> When you explicitly authorize us to share information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">5. Data Security</h2>
                <p className="text-gray-400 leading-relaxed">
                  We implement industry-standard security measures to protect your data:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-[#1A2540] rounded-xl p-4">
                    <Lock className="w-5 h-5 text-[#F5A623] mb-2" />
                    <p className="text-white font-medium text-sm">SSL/TLS Encryption</p>
                    <p className="text-gray-500 text-xs">All data transmitted is encrypted</p>
                  </div>
                  <div className="bg-[#1A2540] rounded-xl p-4">
                    <Database className="w-5 h-5 text-[#F5A623] mb-2" />
                    <p className="text-white font-medium text-sm">Encrypted Storage</p>
                    <p className="text-gray-500 text-xs">Data at rest is encrypted</p>
                  </div>
                  <div className="bg-[#1A2540] rounded-xl p-4">
                    <Shield className="w-5 h-5 text-[#F5A623] mb-2" />
                    <p className="text-white font-medium text-sm">Regular Backups</p>
                    <p className="text-gray-500 text-xs">Automated daily backups</p>
                  </div>
                  <div className="bg-[#1A2540] rounded-xl p-4">
                    <Eye className="w-5 h-5 text-[#F5A623] mb-2" />
                    <p className="text-white font-medium text-sm">Access Controls</p>
                    <p className="text-gray-500 text-xs">Limited employee access</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">6. Data Retention</h2>
                <p className="text-gray-400 leading-relaxed">
                  We retain your data for as long as your account is active or as needed to provide services.
                  After account termination, we retain data for up to 30 days to allow for data export.
                  Some data may be retained longer for legal compliance or legitimate business purposes.
                  You can request immediate deletion of your data at any time.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">7. Your Rights</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  You have the following rights regarding your personal data:
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                  <li><strong className="text-white">Access:</strong> Request a copy of your personal data</li>
                  <li><strong className="text-white">Correction:</strong> Update or correct inaccurate information</li>
                  <li><strong className="text-white">Deletion:</strong> Request deletion of your data</li>
                  <li><strong className="text-white">Export:</strong> Download your data in a portable format</li>
                  <li><strong className="text-white">Opt-out:</strong> Unsubscribe from marketing communications</li>
                  <li><strong className="text-white">Restriction:</strong> Limit how we process your data</li>
                </ul>
                <p className="text-gray-400 leading-relaxed mt-4">
                  To exercise these rights, contact us at privacy@exiuscart.com or through your account settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">8. Cookies</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  We use cookies and similar technologies to:
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                  <li>Keep you signed in to your account</li>
                  <li>Remember your preferences</li>
                  <li>Understand how you use our platform</li>
                  <li>Improve our services</li>
                </ul>
                <p className="text-gray-400 leading-relaxed mt-4">
                  You can control cookies through your browser settings. Disabling cookies may affect
                  some functionality of our platform.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">9. International Data Transfers</h2>
                <p className="text-gray-400 leading-relaxed">
                  Your data may be processed and stored in Sri Lanka, UAE, and other countries where our
                  service providers operate. We ensure appropriate safeguards are in place for international
                  data transfers in compliance with applicable data protection laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">10. Children&apos;s Privacy</h2>
                <p className="text-gray-400 leading-relaxed">
                  ExiusCart is not intended for use by individuals under 18 years of age. We do not
                  knowingly collect personal information from children. If you believe we have collected
                  data from a child, please contact us immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">11. Changes to This Policy</h2>
                <p className="text-gray-400 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of significant
                  changes via email or through a notice on our platform. The &quot;Last updated&quot; date at the
                  top of this page indicates when the policy was last revised.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">12. Contact Us</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  If you have questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-[#151F32] rounded-xl p-6 border border-gray-800">
                  <p className="text-white font-medium mb-4">NexCodeNova - Data Protection</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-[#F5A623]" />
                      <span className="text-gray-400">privacy@exiuscart.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Bell className="w-4 h-4 text-[#F5A623]" />
                      <span className="text-gray-400">WhatsApp: +971 56 239 3573</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="w-4 h-4 text-[#F5A623]" />
                      <span className="text-gray-400">Sri Lanka | Dubai</span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Bottom Links */}
          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link
              href="/terms"
              className="text-[#F5A623] hover:text-[#FFB84D] text-sm transition"
            >
              Read our Terms of Service
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
