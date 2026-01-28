import Link from 'next/link';
import { ArrowRight, Zap, Bug, Sparkles, Shield } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

export default function ChangelogPage() {
  return (
    <div className="min-h-screen bg-[#0B1121]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#F5A623] font-medium mb-4">Changelog</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-[1.1] mb-6">
            What&apos;s New in
            <span className="text-[#F5A623]"> ExiusCart</span>
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            We&apos;re constantly improving ExiusCart. Here&apos;s what&apos;s been
            shipped recently — new features, improvements, and fixes.
          </p>
        </div>
      </section>

      {/* Changelog Entries */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 border-l-2 border-[#F5A623]/20 space-y-16">

            {/* v2.5 */}
            <div className="relative">
              <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-[#F5A623]"></div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#F5A623]/10 text-[#F5A623] text-sm font-bold px-3 py-1 rounded-lg">v2.5</span>
                <span className="text-gray-500 text-sm">January 2026</span>
                <span className="bg-green-500/10 text-green-400 text-xs font-medium px-2 py-0.5 rounded">Latest</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Multi-Currency Support</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">Auto-detect user region and display prices in local currency (AED, SAR, LKR, INR, USD)</span>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">Manual currency switcher in navbar and footer</span>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">Region-specific pricing plans for each market</span>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-4 h-4 text-[#F5A623] mt-1 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">Improved pricing page with monthly/one-time toggle</span>
                </div>
              </div>
            </div>

            {/* v2.4 */}
            <div className="relative">
              <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-[#F5A623]/60"></div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#F5A623]/10 text-[#F5A623] text-sm font-bold px-3 py-1 rounded-lg">v2.4</span>
                <span className="text-gray-500 text-sm">December 2025</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">WhatsApp Order Management</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">Receive and manage customer orders directly through WhatsApp</span>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">Automated order confirmation and receipt sending via WhatsApp</span>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-4 h-4 text-[#F5A623] mt-1 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">Product catalog sharing through WhatsApp links</span>
                </div>
                <div className="flex items-start gap-3">
                  <Bug className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">Fixed order notification delays for high-volume shops</span>
                </div>
              </div>
            </div>

            {/* v2.3 */}
            <div className="relative">
              <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-[#F5A623]/60"></div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#F5A623]/10 text-[#F5A623] text-sm font-bold px-3 py-1 rounded-lg">v2.3</span>
                <span className="text-gray-500 text-sm">November 2025</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Advanced Reporting</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">New sales analytics dashboard with charts and graphs</span>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">Export reports as PDF and Excel with custom date ranges</span>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-4 h-4 text-[#F5A623] mt-1 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">Improved inventory report with stock movement history</span>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">Enhanced data encryption for all exported files</span>
                </div>
              </div>
            </div>

            {/* v2.2 */}
            <div className="relative">
              <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-[#F5A623]/40"></div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#F5A623]/10 text-[#F5A623] text-sm font-bold px-3 py-1 rounded-lg">v2.2</span>
                <span className="text-gray-500 text-sm">October 2025</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Inventory Improvements</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">Low stock alerts with customizable thresholds</span>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">Barcode scanning for quick product lookup</span>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-4 h-4 text-[#F5A623] mt-1 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">Bulk product import via Excel upload</span>
                </div>
                <div className="flex items-start gap-3">
                  <Bug className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">Fixed stock count sync issues on multi-device setups</span>
                </div>
              </div>
            </div>

            {/* v2.1 */}
            <div className="relative">
              <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-[#F5A623]/40"></div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#F5A623]/10 text-[#F5A623] text-sm font-bold px-3 py-1 rounded-lg">v2.1</span>
                <span className="text-gray-500 text-sm">September 2025</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">POS &amp; Invoicing Updates</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">VAT-compliant invoice generation (5% UAE VAT)</span>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">Thermal printer support for receipt printing</span>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-4 h-4 text-[#F5A623] mt-1 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">Faster checkout flow with quick product search</span>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-4 h-4 text-[#F5A623] mt-1 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">Arabic language support for invoices</span>
                </div>
              </div>
            </div>

            {/* v2.0 */}
            <div className="relative">
              <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-[#F5A623]/30"></div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#F5A623]/10 text-[#F5A623] text-sm font-bold px-3 py-1 rounded-lg">v2.0</span>
                <span className="text-gray-500 text-sm">August 2025</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">ExiusCart 2.0 Launch</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">Complete platform redesign with modern UI</span>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">New POS system with touch-friendly interface</span>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">Customer database with purchase history</span>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">Offline mode — works without internet connection</span>
                </div>
              </div>
            </div>

          </div>

          {/* Legend */}
          <div className="mt-16 bg-[#151F32] rounded-xl border border-gray-800 p-6">
            <p className="text-gray-500 text-sm mb-4">Legend</p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-gray-400 text-sm">New Feature</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#F5A623]" />
                <span className="text-gray-400 text-sm">Improvement</span>
              </div>
              <div className="flex items-center gap-2">
                <Bug className="w-4 h-4 text-red-400" />
                <span className="text-gray-400 text-sm">Bug Fix</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400 text-sm">Security</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-[#0D1526]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Always improving
          </h2>
          <p className="text-gray-400 mb-10">
            ExiusCart is actively developed with new features and improvements
            shipping regularly. Start your free trial to experience the latest version.
          </p>
          <Link
            href="/register"
            className="inline-flex items-center justify-center gap-2 bg-[#F5A623] hover:bg-[#E09612] text-black font-semibold px-10 py-4 rounded-lg transition-all text-lg"
          >
            Start 7-Day Free Trial
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
