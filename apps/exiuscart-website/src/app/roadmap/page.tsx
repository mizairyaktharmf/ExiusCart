import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle, Clock, Rocket, Sparkles, Target, Calendar, MessageCircle } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Roadmap | Upcoming Features & Plans | ExiusCart',
  description: 'See what\'s coming next to ExiusCart. Our product roadmap shows planned features, improvements, and updates. Help shape the future of ExiusCart.',
  openGraph: {
    title: 'ExiusCart Roadmap | Upcoming Features',
    description: 'See what\'s coming next to ExiusCart. Planned features and improvements.',
    url: 'https://exiuscart.com/roadmap',
    siteName: 'ExiusCart',
    type: 'website',
  },
};

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-[#0B1121]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#F5A623]/10 text-[#F5A623] text-sm font-medium px-4 py-2 rounded-full mb-6">
            <Rocket className="w-4 h-4" />
            Product Roadmap
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] mb-6">
            Building the Future of
            <span className="block text-[#F5A623]">Small Business Tools</span>
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            See what we&apos;re working on and what&apos;s coming next. Your feedback
            helps us prioritize features that matter most to your business.
          </p>
        </div>
      </section>

      {/* Roadmap Timeline */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">

          {/* Q1 2026 - In Progress */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-[#F5A623]/20 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-[#F5A623]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Q1 2026</h2>
                <p className="text-[#F5A623] text-sm font-medium">In Progress</p>
              </div>
            </div>

            <div className="space-y-4 pl-6 border-l-2 border-[#F5A623]/30">
              <RoadmapItem
                status="in-progress"
                title="Online Store Integration"
                description="Connect your ExiusCart inventory to a simple online storefront. Customers can browse and order online."
              />
              <RoadmapItem
                status="in-progress"
                title="Advanced Customer Loyalty Program"
                description="Points system, rewards, and customer tiers to increase repeat purchases."
              />
              <RoadmapItem
                status="planned"
                title="Multi-Branch Support"
                description="Manage multiple shop locations from one dashboard with consolidated reporting."
              />
              <RoadmapItem
                status="planned"
                title="Supplier Management"
                description="Track suppliers, manage purchase orders, and automate reordering when stock is low."
              />
            </div>
          </div>

          {/* Q2 2026 - Planned */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Q2 2026</h2>
                <p className="text-purple-400 text-sm font-medium">Planned</p>
              </div>
            </div>

            <div className="space-y-4 pl-6 border-l-2 border-purple-500/30">
              <RoadmapItem
                status="planned"
                title="AI-Powered Sales Insights"
                description="Smart recommendations on pricing, inventory, and promotions based on your sales data."
              />
              <RoadmapItem
                status="planned"
                title="Employee Management"
                description="Staff scheduling, time tracking, and commission management for your team."
              />
              <RoadmapItem
                status="planned"
                title="Payment Gateway Integration"
                description="Accept online payments with popular UAE payment providers like Network, Telr, and PayTabs."
              />
              <RoadmapItem
                status="planned"
                title="Advanced Promotions Engine"
                description="Create complex promotions: buy-one-get-one, bundle deals, time-limited offers, and more."
              />
            </div>
          </div>

          {/* Q3-Q4 2026 - Future */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Q3-Q4 2026</h2>
                <p className="text-blue-400 text-sm font-medium">Future Plans</p>
              </div>
            </div>

            <div className="space-y-4 pl-6 border-l-2 border-blue-500/30">
              <RoadmapItem
                status="future"
                title="Mobile App (iOS & Android)"
                description="Native mobile apps for managing your business on the go with offline support."
              />
              <RoadmapItem
                status="future"
                title="Accounting Software Integration"
                description="Sync with QuickBooks, Zoho Books, and other popular accounting platforms."
              />
              <RoadmapItem
                status="future"
                title="Delivery Management"
                description="Built-in delivery tracking, driver assignment, and customer notifications."
              />
              <RoadmapItem
                status="future"
                title="Arabic RTL Interface"
                description="Full Arabic language support with right-to-left interface design."
              />
            </div>
          </div>

          {/* Completed Recently */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Recently Completed</h2>
                <p className="text-green-400 text-sm font-medium">Shipped</p>
              </div>
            </div>

            <div className="space-y-4 pl-6 border-l-2 border-green-500/30">
              <RoadmapItem
                status="completed"
                title="Multi-Currency Support"
                description="Auto-detect region and display prices in AED, LKR, or USD."
              />
              <RoadmapItem
                status="completed"
                title="WhatsApp Order Management"
                description="Receive and manage customer orders directly through WhatsApp."
              />
              <RoadmapItem
                status="completed"
                title="Advanced Reporting Dashboard"
                description="New sales analytics with charts, graphs, and PDF/Excel export."
              />
              <RoadmapItem
                status="completed"
                title="Barcode Scanning"
                description="Quick product lookup with barcode scanning support."
              />
            </div>
          </div>

        </div>
      </section>

      {/* Feature Request CTA */}
      <section className="py-20 px-4 bg-[#0D1526]">
        <div className="max-w-3xl mx-auto text-center">
          <Calendar className="w-12 h-12 text-[#F5A623] mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Have a Feature Request?
          </h2>
          <p className="text-gray-400 mb-10 leading-relaxed">
            We build ExiusCart based on real feedback from shop owners like you.
            Tell us what features would help your business the most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/971562393573?text=Hi!%20I%20have%20a%20feature%20request%20for%20ExiusCart"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold px-8 py-4 rounded-lg transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Request via WhatsApp
            </a>
            <Link
              href="/changelog"
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-white font-semibold px-8 py-4 rounded-lg transition-all border border-gray-700"
            >
              View Changelog
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function RoadmapItem({
  status,
  title,
  description
}: {
  status: 'completed' | 'in-progress' | 'planned' | 'future';
  title: string;
  description: string;
}) {
  const statusConfig = {
    'completed': {
      bg: 'bg-green-500/10',
      text: 'text-green-400',
      label: 'Shipped',
      dot: 'bg-green-500',
    },
    'in-progress': {
      bg: 'bg-[#F5A623]/10',
      text: 'text-[#F5A623]',
      label: 'In Progress',
      dot: 'bg-[#F5A623]',
    },
    'planned': {
      bg: 'bg-purple-500/10',
      text: 'text-purple-400',
      label: 'Planned',
      dot: 'bg-purple-500',
    },
    'future': {
      bg: 'bg-blue-500/10',
      text: 'text-blue-400',
      label: 'Future',
      dot: 'bg-blue-500',
    },
  };

  const config = statusConfig[status];

  return (
    <div className="bg-[#151F32] rounded-xl border border-gray-800 p-6 relative ml-4">
      <div className={`absolute -left-[25px] top-8 w-3 h-3 rounded-full ${config.dot}`}></div>
      <div className="flex items-start justify-between gap-4 mb-2">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <span className={`${config.bg} ${config.text} text-xs font-medium px-2 py-1 rounded shrink-0`}>
          {config.label}
        </span>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
