import Link from 'next/link';
import { ArrowRight, Check, X, Star, DollarSign, Smartphone, Globe } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

export default function ComparePage() {
  return (
    <div className="min-h-screen bg-[#0B1121]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#F5A623] font-medium mb-4">Compare</p>
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] mb-6">
            Why Choose
            <span className="text-[#F5A623]"> ExiusCart</span>?
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            See how ExiusCart compares to other business management solutions.
            Built specifically for small businesses in the UAE and beyond.
          </p>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-8 text-center">
              <div className="w-14 h-14 bg-[#F5A623]/10 rounded-xl flex items-center justify-center mx-auto mb-5">
                <DollarSign className="w-7 h-7 text-[#F5A623]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">80% More Affordable</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                One-time payment starting from AED 499 vs monthly subscriptions
                that cost thousands per year with competitors.
              </p>
            </div>
            <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-8 text-center">
              <div className="w-14 h-14 bg-[#F5A623]/10 rounded-xl flex items-center justify-center mx-auto mb-5">
                <Globe className="w-7 h-7 text-[#F5A623]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Built for UAE</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                VAT-compliant invoicing, Arabic &amp; English support, and features
                designed for the way local businesses actually work.
              </p>
            </div>
            <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-8 text-center">
              <div className="w-14 h-14 bg-[#F5A623]/10 rounded-xl flex items-center justify-center mx-auto mb-5">
                <Smartphone className="w-7 h-7 text-[#F5A623]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">WhatsApp Integration</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Receive and manage customer orders via WhatsApp — a feature most
                competitors don&apos;t offer at all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4 bg-[#0D1526]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Feature-by-Feature Comparison
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A detailed look at how ExiusCart stacks up against typical POS and business management solutions
            </p>
          </div>

          {/* Table */}
          <div className="bg-[#151F32] rounded-2xl border border-gray-800 overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-4 gap-4 px-6 py-5 bg-[#1A2540] border-b border-gray-800">
              <div className="text-gray-400 font-medium text-sm">Feature</div>
              <div className="text-center">
                <span className="text-[#F5A623] font-bold">ExiusCart</span>
              </div>
              <div className="text-center">
                <span className="text-gray-400 font-medium text-sm">Typical POS</span>
              </div>
              <div className="text-center">
                <span className="text-gray-400 font-medium text-sm">Spreadsheets</span>
              </div>
            </div>

            {/* Pricing Section */}
            <div className="px-6 py-3 bg-[#0D1526]">
              <span className="text-[#F5A623] text-xs font-semibold uppercase tracking-wider">Pricing</span>
            </div>
            <CompareRow feature="One-time payment option" exius={true} typical={false} spreadsheet={true} />
            <CompareRow feature="Affordable for small shops" exius={true} typical={false} spreadsheet={true} />
            <CompareRow feature="Free updates included" exius={true} typical={false} spreadsheet={true} />
            <CompareRow feature="No hidden fees" exius={true} typical={false} spreadsheet={true} />

            {/* Features Section */}
            <div className="px-6 py-3 bg-[#0D1526]">
              <span className="text-[#F5A623] text-xs font-semibold uppercase tracking-wider">Core Features</span>
            </div>
            <CompareRow feature="POS / Point of Sale" exius={true} typical={true} spreadsheet={false} />
            <CompareRow feature="VAT-compliant invoicing (5%)" exius={true} typical="Partial" spreadsheet={false} />
            <CompareRow feature="Inventory management" exius={true} typical={true} spreadsheet="Basic" />
            <CompareRow feature="Customer database" exius={true} typical={true} spreadsheet="Manual" />
            <CompareRow feature="Sales reports & analytics" exius={true} typical={true} spreadsheet="Manual" />
            <CompareRow feature="PDF & Excel export" exius={true} typical="Partial" spreadsheet={false} />

            {/* Unique Features Section */}
            <div className="px-6 py-3 bg-[#0D1526]">
              <span className="text-[#F5A623] text-xs font-semibold uppercase tracking-wider">Unique to ExiusCart</span>
            </div>
            <CompareRow feature="WhatsApp order management" exius={true} typical={false} spreadsheet={false} />
            <CompareRow feature="Arabic & English interface" exius={true} typical="Partial" spreadsheet={false} />
            <CompareRow feature="Works offline" exius={true} typical="Partial" spreadsheet={true} />
            <CompareRow feature="WhatsApp receipts" exius={true} typical={false} spreadsheet={false} />
            <CompareRow feature="Multi-currency support" exius={true} typical="Partial" spreadsheet={false} />

            {/* Support Section */}
            <div className="px-6 py-3 bg-[#0D1526]">
              <span className="text-[#F5A623] text-xs font-semibold uppercase tracking-wider">Support</span>
            </div>
            <CompareRow feature="WhatsApp support" exius={true} typical={false} spreadsheet={false} />
            <CompareRow feature="Setup assistance" exius={true} typical="Extra cost" spreadsheet={false} />
            <CompareRow feature="Training included" exius={true} typical="Extra cost" spreadsheet={false} />
          </div>
        </div>
      </section>

      {/* Why Not Spreadsheets */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#F5A623] font-medium mb-3">Still Using Spreadsheets?</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                It&apos;s time to upgrade
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Spreadsheets were never designed to run a business. Every hour you
                spend manually entering data is an hour you could spend serving
                customers and growing your shop.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 text-red-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">No automatic calculations</p>
                    <p className="text-gray-500 text-sm">VAT, totals, and inventory have to be manually updated</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 text-red-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">No professional invoices</p>
                    <p className="text-gray-500 text-sm">Can&apos;t generate branded, VAT-compliant invoices</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 text-red-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Error-prone data entry</p>
                    <p className="text-gray-500 text-sm">One wrong formula can mess up your entire records</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 text-red-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">No real-time insights</p>
                    <p className="text-gray-500 text-sm">Can&apos;t see sales trends or stock alerts at a glance</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">With ExiusCart, you get:</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-green-400" />
                  </div>
                  <span className="text-gray-300">Automatic VAT calculation on every invoice</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-green-400" />
                  </div>
                  <span className="text-gray-300">Professional branded invoices in seconds</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-green-400" />
                  </div>
                  <span className="text-gray-300">Real-time inventory tracking with low-stock alerts</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-green-400" />
                  </div>
                  <span className="text-gray-300">Customer orders via WhatsApp</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-green-400" />
                  </div>
                  <span className="text-gray-300">Sales dashboards and business insights</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-green-400" />
                  </div>
                  <span className="text-gray-300">Export to PDF &amp; Excel anytime</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-800">
                <p className="text-gray-500 text-sm mb-4">All of this starting from just</p>
                <p className="text-4xl font-bold text-[#F5A623]">AED 499 <span className="text-base text-gray-500 font-normal">one-time</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Not Expensive POS */}
      <section className="py-20 px-4 bg-[#0D1526]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#F5A623] font-medium mb-3">Cost Comparison</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stop Overpaying for Software
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Most POS systems charge monthly fees that add up fast.
              ExiusCart gives you more features for a fraction of the cost.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Competitor A */}
            <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-8 text-center">
              <p className="text-gray-500 text-sm mb-2">Typical POS Software</p>
              <p className="text-3xl font-bold text-white mb-1">AED 200+</p>
              <p className="text-gray-500 text-sm mb-6">/month</p>
              <div className="bg-[#0D1526] rounded-lg p-4 mb-4">
                <p className="text-gray-400 text-sm">Annual cost</p>
                <p className="text-2xl font-bold text-red-400">AED 2,400+</p>
              </div>
              <p className="text-gray-600 text-xs">Plus setup fees, training costs, and hardware</p>
            </div>

            {/* ExiusCart */}
            <div className="bg-[#151F32] rounded-2xl border-2 border-[#F5A623] p-8 text-center relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-[#F5A623] text-black text-xs font-bold px-4 py-1 rounded-full">
                  BEST VALUE
                </span>
              </div>
              <p className="text-[#F5A623] text-sm font-medium mb-2">ExiusCart</p>
              <p className="text-3xl font-bold text-white mb-1">AED 499</p>
              <p className="text-gray-500 text-sm mb-6">one-time</p>
              <div className="bg-[#F5A623]/10 rounded-lg p-4 mb-4">
                <p className="text-[#F5A623] text-sm">Lifetime cost</p>
                <p className="text-2xl font-bold text-[#F5A623]">AED 499</p>
              </div>
              <p className="text-gray-400 text-xs">Free updates, no hidden fees, full support</p>
            </div>

            {/* Spreadsheets */}
            <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-8 text-center">
              <p className="text-gray-500 text-sm mb-2">Spreadsheets</p>
              <p className="text-3xl font-bold text-white mb-1">Free</p>
              <p className="text-gray-500 text-sm mb-6">but limited</p>
              <div className="bg-[#0D1526] rounded-lg p-4 mb-4">
                <p className="text-gray-400 text-sm">Hidden cost</p>
                <p className="text-2xl font-bold text-yellow-400">Your Time</p>
              </div>
              <p className="text-gray-600 text-xs">Hours of manual work, errors, no invoicing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-10 text-center">
            <div className="flex justify-center gap-1 mb-6">
              <Star className="w-5 h-5 fill-[#F5A623] text-[#F5A623]" />
              <Star className="w-5 h-5 fill-[#F5A623] text-[#F5A623]" />
              <Star className="w-5 h-5 fill-[#F5A623] text-[#F5A623]" />
              <Star className="w-5 h-5 fill-[#F5A623] text-[#F5A623]" />
              <Star className="w-5 h-5 fill-[#F5A623] text-[#F5A623]" />
            </div>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              &ldquo;I was paying AED 250/month for a POS system that couldn&apos;t even do WhatsApp
              orders. Switched to ExiusCart for a one-time payment and it does everything
              I need. Best decision for my shop.&rdquo;
            </p>
            <div>
              <p className="text-white font-semibold">Ahmed Al Rashid</p>
              <p className="text-gray-500 text-sm">Mobile Zone Electronics, Dubai</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#0D1526]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to switch to ExiusCart?
          </h2>
          <p className="text-gray-400 mb-10">
            Start your 7-day free trial and see the difference for yourself.
            No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 bg-[#F5A623] hover:bg-[#E09612] text-black font-semibold px-10 py-4 rounded-lg transition-all text-lg"
            >
              Start 7-Day Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-white font-semibold px-10 py-4 rounded-lg transition-all border border-gray-700 text-lg"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function CompareRow({
  feature,
  exius,
  typical,
  spreadsheet,
}: {
  feature: string;
  exius: boolean | string;
  typical: boolean | string;
  spreadsheet: boolean | string;
}) {
  return (
    <div className="grid grid-cols-4 gap-4 px-6 py-4 border-b border-gray-800/50 hover:bg-[#1A2540]/30 transition">
      <div className="text-gray-300 text-sm">{feature}</div>
      <div className="text-center">
        <CellValue value={exius} highlight />
      </div>
      <div className="text-center">
        <CellValue value={typical} />
      </div>
      <div className="text-center">
        <CellValue value={spreadsheet} />
      </div>
    </div>
  );
}

function CellValue({ value, highlight }: { value: boolean | string; highlight?: boolean }) {
  if (value === true) {
    return (
      <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${highlight ? 'bg-[#F5A623]/10' : 'bg-green-500/10'}`}>
        <Check className={`w-4 h-4 ${highlight ? 'text-[#F5A623]' : 'text-green-400'}`} />
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-500/10">
        <X className="w-4 h-4 text-red-400" />
      </span>
    );
  }
  return <span className="text-yellow-400 text-xs font-medium">{value}</span>;
}
