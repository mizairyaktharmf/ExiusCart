import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ArrowRight,
  Check,
  BarChart3,
  TrendingUp,
  DollarSign,
  Calendar,
  FileSpreadsheet,
  PieChart,
  Users,
  Package,
  CreditCard,
  Download,
  Filter,
  Clock,
} from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Reports & Analytics | Sales, Inventory & Profit Reports | ExiusCart',
  description: 'Powerful business reports: sales analytics, profit tracking, inventory reports. Export to PDF and Excel. Make data-driven decisions for your small business.',
  openGraph: {
    title: 'Reports & Analytics | ExiusCart',
    description: 'Powerful business reports: sales, profit, inventory. Export to PDF and Excel.',
    url: 'https://exiuscart.com/features/reports',
    siteName: 'ExiusCart',
    type: 'website',
  },
};

const reportFeatures = [
  {
    icon: TrendingUp,
    title: 'Sales Analytics',
    description: 'Track daily, weekly, and monthly sales trends. Identify peak selling times and seasonal patterns.',
  },
  {
    icon: DollarSign,
    title: 'Profit Tracking',
    description: 'See your actual profits after costs. Understand margins on every product and category.',
  },
  {
    icon: Package,
    title: 'Product Performance',
    description: 'Know your best sellers and slow movers. Make smarter purchasing and pricing decisions.',
  },
  {
    icon: CreditCard,
    title: 'Payment Breakdown',
    description: 'See how customers pay — cash, card, or transfer. Track receivables and outstanding payments.',
  },
  {
    icon: Users,
    title: 'Customer Insights',
    description: 'Identify your top customers by spending. Track customer retention and repeat purchases.',
  },
  {
    icon: FileSpreadsheet,
    title: 'Export Reports',
    description: 'Download reports as PDF or Excel. Share with accountants or use for tax filing.',
  },
];

const reportTypes = [
  { name: 'Daily Sales Summary', description: 'Overview of each day\'s transactions and totals' },
  { name: 'Product Sales Report', description: 'Performance breakdown by product' },
  { name: 'Category Report', description: 'Sales grouped by product categories' },
  { name: 'Payment Method Report', description: 'Breakdown by cash, card, transfer' },
  { name: 'Customer Report', description: 'Top customers and spending patterns' },
  { name: 'Inventory Valuation', description: 'Current stock value at cost and retail' },
  { name: 'Profit & Loss', description: 'Revenue minus costs and expenses' },
  { name: 'VAT Report', description: 'Tax collected for UAE compliance' },
];

const benefits = [
  'Make data-driven business decisions',
  'Identify profitable products instantly',
  'Track business growth over time',
  'Prepare for tax season easily',
  'Spot trends before competitors',
  'Share reports with stakeholders',
];

export default function ReportsFeaturePage() {
  return (
    <div className="min-h-screen bg-[#0B1121]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#F5A623]/10 border border-[#F5A623]/30 rounded-full px-4 py-2 mb-6">
                <BarChart3 className="w-4 h-4 text-[#F5A623]" />
                <span className="text-[#F5A623] text-sm font-medium">Reports & Analytics</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Understand Your Business With Data
              </h1>
              <p className="text-gray-400 text-lg mb-8">
                Stop guessing, start knowing. Get clear insights into your sales, profits, and trends with easy-to-read reports that help you make smarter decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center gap-2 bg-[#F5A623] hover:bg-[#E09612] text-black font-semibold px-8 py-4 rounded-lg transition-all"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-white font-semibold px-8 py-4 rounded-lg transition-all border border-gray-700"
                >
                  Watch Demo
                </Link>
              </div>
            </div>

            {/* Dashboard Preview */}
            <div className="relative">
              <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-white font-semibold">Sales Overview</h3>
                  <div className="flex items-center gap-2 bg-[#1A2540] rounded-lg px-3 py-1.5">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400 text-sm">This Month</span>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-[#1A2540] rounded-xl p-4">
                    <p className="text-gray-400 text-xs mb-1">Revenue</p>
                    <p className="text-2xl font-bold text-white">24,580</p>
                    <p className="text-green-400 text-xs">+12% vs last month</p>
                  </div>
                  <div className="bg-[#1A2540] rounded-xl p-4">
                    <p className="text-gray-400 text-xs mb-1">Orders</p>
                    <p className="text-2xl font-bold text-white">186</p>
                    <p className="text-green-400 text-xs">+8% vs last month</p>
                  </div>
                  <div className="bg-[#1A2540] rounded-xl p-4">
                    <p className="text-gray-400 text-xs mb-1">Profit</p>
                    <p className="text-2xl font-bold text-[#F5A623]">7,850</p>
                    <p className="text-green-400 text-xs">+15% margin</p>
                  </div>
                </div>

                {/* Chart Placeholder */}
                <div className="bg-[#1A2540] rounded-xl p-4 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-400 text-sm">Weekly Sales</span>
                    <span className="text-white text-sm font-medium">24,580 AED</span>
                  </div>
                  <div className="flex items-end gap-2 h-32">
                    {[
                      { height: 'h-[45%]', day: 'S' },
                      { height: 'h-[65%]', day: 'M' },
                      { height: 'h-[40%]', day: 'T' },
                      { height: 'h-[80%]', day: 'W' },
                      { height: 'h-[55%]', day: 'T' },
                      { height: 'h-[90%]', day: 'F' },
                      { height: 'h-[70%]', day: 'S' },
                    ].map((bar, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1">
                        <div className={`w-full bg-[#F5A623] rounded-t transition-all ${bar.height}`}></div>
                        <span className="text-gray-500 text-xs">{bar.day}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Top Products */}
                <div>
                  <p className="text-gray-400 text-sm mb-3">Top Products</p>
                  <div className="space-y-2">
                    {[
                      { name: 'iPhone 15 Case', sales: 45, amount: '4,005' },
                      { name: 'USB-C Charger', sales: 38, amount: '2,850' },
                      { name: 'Screen Protector', sales: 32, amount: '1,440' },
                    ].map((product, i) => (
                      <div key={i} className="flex items-center justify-between bg-[#1A2540] rounded-lg p-2">
                        <div className="flex items-center gap-2">
                          <span className="text-[#F5A623] font-bold text-sm">#{i + 1}</span>
                          <span className="text-white text-sm">{product.name}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-white text-sm font-medium">{product.amount} AED</span>
                          <span className="text-gray-500 text-xs ml-2">({product.sales} sold)</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#F5A623]/5 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-[#0D1526]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Analytics Made Simple
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              No complex dashboards or confusing metrics. Just the insights you need to grow your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reportFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="bg-[#151F32] rounded-2xl border border-gray-800 p-6 hover:border-[#F5A623]/30 transition">
                  <div className="w-12 h-12 bg-[#F5A623]/20 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#F5A623]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Report Types */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                8 Essential Reports Built-In
              </h2>
              <p className="text-gray-400 mb-8">
                Everything you need to understand your business performance. Generate any report with one click.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {reportTypes.map((report, i) => (
                  <div key={i} className="bg-[#151F32] rounded-xl border border-gray-800 p-4">
                    <h4 className="text-white font-medium mb-1">{report.name}</h4>
                    <p className="text-gray-500 text-sm">{report.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {/* Filter Preview */}
              <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Filter className="w-5 h-5 text-[#F5A623]" />
                  <h3 className="text-white font-semibold">Flexible Filtering</h3>
                </div>
                <p className="text-gray-400 mb-4">Filter reports by date range, category, payment method, or customer.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#1A2540] text-gray-300 px-3 py-1.5 rounded-lg text-sm">Today</span>
                  <span className="bg-[#F5A623]/20 text-[#F5A623] px-3 py-1.5 rounded-lg text-sm">This Week</span>
                  <span className="bg-[#1A2540] text-gray-300 px-3 py-1.5 rounded-lg text-sm">This Month</span>
                  <span className="bg-[#1A2540] text-gray-300 px-3 py-1.5 rounded-lg text-sm">Custom Range</span>
                </div>
              </div>

              {/* Export Preview */}
              <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Download className="w-5 h-5 text-[#F5A623]" />
                  <h3 className="text-white font-semibold">Export Anywhere</h3>
                </div>
                <p className="text-gray-400 mb-4">Download reports in your preferred format. Share with your team or accountant.</p>
                <div className="flex gap-3">
                  <div className="bg-[#1A2540] rounded-lg px-4 py-2 flex items-center gap-2">
                    <FileSpreadsheet className="w-4 h-4 text-green-400" />
                    <span className="text-white text-sm">Excel</span>
                  </div>
                  <div className="bg-[#1A2540] rounded-lg px-4 py-2 flex items-center gap-2">
                    <FileSpreadsheet className="w-4 h-4 text-red-400" />
                    <span className="text-white text-sm">PDF</span>
                  </div>
                </div>
              </div>

              {/* Real-time */}
              <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-[#F5A623]" />
                  <h3 className="text-white font-semibold">Real-Time Data</h3>
                </div>
                <p className="text-gray-400">Reports update instantly as you make sales. Always see the latest numbers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-[#0D1526]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#151F32] rounded-xl border border-gray-800 p-6 text-center">
                <PieChart className="w-8 h-8 text-[#F5A623] mx-auto mb-3" />
                <p className="text-2xl font-bold text-white mb-1">8+</p>
                <p className="text-gray-400 text-sm">Report Types</p>
              </div>
              <div className="bg-[#151F32] rounded-xl border border-gray-800 p-6 text-center">
                <Clock className="w-8 h-8 text-[#F5A623] mx-auto mb-3" />
                <p className="text-2xl font-bold text-white mb-1">Real-time</p>
                <p className="text-gray-400 text-sm">Data Updates</p>
              </div>
              <div className="bg-[#151F32] rounded-xl border border-gray-800 p-6 text-center">
                <Download className="w-8 h-8 text-[#F5A623] mx-auto mb-3" />
                <p className="text-2xl font-bold text-white mb-1">PDF/Excel</p>
                <p className="text-gray-400 text-sm">Export Formats</p>
              </div>
              <div className="bg-[#151F32] rounded-xl border border-gray-800 p-6 text-center">
                <TrendingUp className="w-8 h-8 text-[#F5A623] mx-auto mb-3" />
                <p className="text-2xl font-bold text-white mb-1">Trends</p>
                <p className="text-gray-400 text-sm">& Comparisons</p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Reports Matter
              </h2>
              <p className="text-gray-400 mb-8">
                Businesses that track their data grow faster. Know what&apos;s working, fix what isn&apos;t, and make confident decisions.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#F5A623] flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Start Making Data-Driven Decisions
          </h2>
          <p className="text-gray-400 mb-10">
            Try ExiusCart free for 7 days. See your business clearly with powerful reports.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 bg-[#F5A623] hover:bg-[#E09612] text-black font-semibold px-10 py-4 rounded-lg transition-all text-lg"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/features"
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-white font-semibold px-10 py-4 rounded-lg transition-all border border-gray-700"
            >
              View All Features
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
