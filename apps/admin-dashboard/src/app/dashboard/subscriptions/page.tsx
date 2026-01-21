'use client';

import { useState } from 'react';
import {
  Search,
  Filter,
  Package,
  Calendar,
  TrendingUp,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  Edit,
  Check,
} from 'lucide-react';

// Pricing Plans
const plans = [
  {
    id: 'starter',
    name: 'Starter',
    priceMonthly: 69,
    priceOneTime: 699,
    features: ['POS & Invoicing', 'Product Management', 'Customer Database', 'Sales Reports'],
    activeCount: 45,
    color: 'gray',
  },
  {
    id: 'business',
    name: 'Business',
    priceMonthly: 89,
    priceOneTime: 899,
    features: ['Everything in Starter', 'WhatsApp Orders', 'Order Dashboard', 'Order Tracking'],
    activeCount: 67,
    color: 'blue',
    popular: true,
  },
  {
    id: 'pro',
    name: 'Pro',
    priceMonthly: 129,
    priceOneTime: 1200,
    features: ['Everything in Business', 'Inventory Management', 'Low Stock Alerts', 'Priority Support'],
    activeCount: 44,
    color: 'primary',
  },
];

// Mock subscriptions
const subscriptions = [
  {
    id: '1',
    shop: 'Al Bareek Mobiles',
    plan: 'Pro',
    type: 'one-time',
    status: 'active',
    startDate: '2024-01-15',
    endDate: null,
    amount: 1200,
  },
  {
    id: '2',
    shop: 'Tech Zone',
    plan: 'Business',
    type: 'monthly',
    status: 'active',
    startDate: '2024-01-10',
    endDate: '2024-02-10',
    amount: 89,
  },
  {
    id: '3',
    shop: 'Mobile World',
    plan: 'Starter',
    type: 'trial',
    status: 'trial',
    startDate: '2024-01-18',
    endDate: '2024-02-01',
    amount: 0,
  },
  {
    id: '4',
    shop: 'Phone Palace',
    plan: 'Business',
    type: 'monthly',
    status: 'expired',
    startDate: '2023-12-20',
    endDate: '2024-01-20',
    amount: 89,
  },
  {
    id: '5',
    shop: 'Digital Store',
    plan: 'Pro',
    type: 'one-time',
    status: 'active',
    startDate: '2024-01-05',
    endDate: null,
    amount: 1200,
  },
  {
    id: '6',
    shop: 'Quick Mart',
    plan: 'Business',
    type: 'monthly',
    status: 'expiring',
    startDate: '2023-12-22',
    endDate: '2024-01-22',
    amount: 89,
  },
];

export default function SubscriptionsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [planFilter, setPlanFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [activeTab, setActiveTab] = useState<'subscriptions' | 'plans'>('subscriptions');

  const filteredSubs = subscriptions.filter((sub) => {
    const matchesSearch = sub.shop.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPlan = planFilter === 'all' || sub.plan === planFilter;
    const matchesStatus = statusFilter === 'all' || sub.status === statusFilter;
    return matchesSearch && matchesPlan && matchesStatus;
  });

  return (
    <div>
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Subscriptions</h1>
        <p className="text-gray-400 text-sm mt-1">Manage plans and active subscriptions</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        <button
          type="button"
          onClick={() => setActiveTab('subscriptions')}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition ${
            activeTab === 'subscriptions'
              ? 'bg-[#F5A623] text-black'
              : 'bg-[#151F32] text-gray-400 hover:text-white border border-gray-800'
          }`}
        >
          Active Subscriptions
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('plans')}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition ${
            activeTab === 'plans'
              ? 'bg-[#F5A623] text-black'
              : 'bg-[#151F32] text-gray-400 hover:text-white border border-gray-800'
          }`}
        >
          Pricing Plans
        </button>
      </div>

      {activeTab === 'plans' ? (
        // Plans Tab
        <div>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      ) : (
        // Subscriptions Tab
        <div>
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <StatCard
              label="Total Active"
              value={subscriptions.filter((s) => s.status === 'active').length}
              icon={<Package className="w-5 h-5" />}
              color="green"
            />
            <StatCard
              label="Monthly"
              value={subscriptions.filter((s) => s.type === 'monthly').length}
              icon={<Calendar className="w-5 h-5" />}
              color="blue"
            />
            <StatCard
              label="One-Time"
              value={subscriptions.filter((s) => s.type === 'one-time').length}
              icon={<TrendingUp className="w-5 h-5" />}
              color="primary"
            />
            <StatCard
              label="Expiring Soon"
              value={subscriptions.filter((s) => s.status === 'expiring').length}
              icon={<AlertCircle className="w-5 h-5" />}
              color="orange"
            />
          </div>

          {/* Filters */}
          <div className="bg-[#151F32] rounded-xl border border-gray-800 p-4 mb-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search shops..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-[#0B1121] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#F5A623] focus:outline-none transition"
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <select
                  value={planFilter}
                  onChange={(e) => setPlanFilter(e.target.value)}
                  className="px-4 py-2.5 bg-[#0B1121] border border-gray-700 rounded-lg text-white focus:border-[#F5A623] focus:outline-none transition appearance-none cursor-pointer"
                >
                  <option value="all">All Plans</option>
                  <option value="Starter">Starter</option>
                  <option value="Business">Business</option>
                  <option value="Pro">Pro</option>
                </select>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-4 py-2.5 bg-[#0B1121] border border-gray-700 rounded-lg text-white focus:border-[#F5A623] focus:outline-none transition appearance-none cursor-pointer"
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="trial">Trial</option>
                  <option value="expiring">Expiring</option>
                  <option value="expired">Expired</option>
                </select>
              </div>
            </div>
          </div>

          {/* Table - Desktop */}
          <div className="hidden lg:block bg-[#151F32] rounded-xl border border-gray-800 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-gray-400 border-b border-gray-800">
                  <th className="px-6 py-4 font-medium">Shop</th>
                  <th className="px-6 py-4 font-medium">Plan</th>
                  <th className="px-6 py-4 font-medium">Type</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium">Start Date</th>
                  <th className="px-6 py-4 font-medium">End Date</th>
                  <th className="px-6 py-4 font-medium">Amount</th>
                </tr>
              </thead>
              <tbody>
                {filteredSubs.map((sub) => (
                  <SubscriptionRow key={sub.id} subscription={sub} />
                ))}
              </tbody>
            </table>
          </div>

          {/* Cards - Mobile/Tablet */}
          <div className="lg:hidden space-y-4">
            {filteredSubs.map((sub) => (
              <SubscriptionCard key={sub.id} subscription={sub} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
            <p className="text-sm text-gray-400">
              Showing {filteredSubs.length} of {subscriptions.length} subscriptions
            </p>
            <div className="flex items-center gap-2">
              <button type="button" className="p-2 rounded-lg bg-[#151F32] border border-gray-800 text-gray-400">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button type="button" className="px-4 py-2 rounded-lg bg-[#F5A623] text-black font-medium">1</button>
              <button type="button" className="p-2 rounded-lg bg-[#151F32] border border-gray-800 text-gray-400">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function PlanCard({ plan }: { plan: typeof plans[0] }) {
  const colorStyles = {
    gray: 'border-gray-700',
    blue: 'border-blue-500',
    primary: 'border-[#F5A623]',
  };

  return (
    <div className={`bg-[#151F32] rounded-xl border-2 p-6 relative ${colorStyles[plan.color as keyof typeof colorStyles]}`}>
      {plan.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F5A623] text-black text-xs font-semibold px-3 py-1 rounded-full">
          Most Popular
        </span>
      )}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-white">{plan.name}</h3>
        <button type="button" className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition">
          <Edit className="w-4 h-4" />
        </button>
      </div>
      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold text-white">{plan.priceOneTime}</span>
          <span className="text-gray-400">AED</span>
        </div>
        <p className="text-sm text-gray-500">one-time or {plan.priceMonthly} AED/mo</p>
      </div>
      <div className="space-y-3 mb-6">
        {plan.features.map((feature, i) => (
          <div key={i} className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#F5A623]" />
            <span className="text-sm text-gray-300">{feature}</span>
          </div>
        ))}
      </div>
      <div className="pt-4 border-t border-gray-800">
        <p className="text-sm text-gray-400">
          <span className="text-white font-semibold">{plan.activeCount}</span> active subscriptions
        </p>
      </div>
    </div>
  );
}

function StatCard({ label, value, icon, color }: { label: string; value: number; icon: React.ReactNode; color: string }) {
  const colors: Record<string, string> = {
    green: 'bg-green-500/10 text-green-400',
    blue: 'bg-blue-500/10 text-blue-400',
    primary: 'bg-[#F5A623]/10 text-[#F5A623]',
    orange: 'bg-orange-500/10 text-orange-400',
  };

  return (
    <div className="bg-[#151F32] rounded-xl border border-gray-800 p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-sm">{label}</p>
          <p className="text-2xl font-bold text-white mt-1">{value}</p>
        </div>
        <div className={`p-2.5 rounded-lg ${colors[color]}`}>{icon}</div>
      </div>
    </div>
  );
}

function SubscriptionRow({ subscription: sub }: { subscription: typeof subscriptions[0] }) {
  const planStyles: Record<string, string> = {
    Starter: 'text-gray-400',
    Business: 'text-blue-400',
    Pro: 'text-[#F5A623]',
  };

  const statusStyles: Record<string, string> = {
    active: 'bg-green-500/10 text-green-400',
    trial: 'bg-blue-500/10 text-blue-400',
    expiring: 'bg-orange-500/10 text-orange-400',
    expired: 'bg-red-500/10 text-red-400',
  };

  const typeStyles: Record<string, string> = {
    'one-time': 'bg-[#F5A623]/10 text-[#F5A623]',
    monthly: 'bg-blue-500/10 text-blue-400',
    trial: 'bg-gray-500/10 text-gray-400',
  };

  return (
    <tr className="border-b border-gray-800 last:border-0 hover:bg-[#1A2540] transition">
      <td className="px-6 py-4 font-medium text-white">{sub.shop}</td>
      <td className={`px-6 py-4 font-medium ${planStyles[sub.plan]}`}>{sub.plan}</td>
      <td className="px-6 py-4">
        <span className={`text-xs px-2.5 py-1 rounded-lg capitalize ${typeStyles[sub.type]}`}>{sub.type}</span>
      </td>
      <td className="px-6 py-4">
        <span className={`text-xs px-2.5 py-1 rounded-lg capitalize ${statusStyles[sub.status]}`}>{sub.status}</span>
      </td>
      <td className="px-6 py-4 text-gray-400">{sub.startDate}</td>
      <td className="px-6 py-4 text-gray-400">{sub.endDate || 'Lifetime'}</td>
      <td className="px-6 py-4 text-white">{sub.amount > 0 ? `${sub.amount} AED` : 'Free'}</td>
    </tr>
  );
}

function SubscriptionCard({ subscription: sub }: { subscription: typeof subscriptions[0] }) {
  const planStyles: Record<string, string> = {
    Starter: 'bg-gray-500/10 text-gray-400',
    Business: 'bg-blue-500/10 text-blue-400',
    Pro: 'bg-[#F5A623]/10 text-[#F5A623]',
  };

  const statusStyles: Record<string, string> = {
    active: 'bg-green-500/10 text-green-400',
    trial: 'bg-blue-500/10 text-blue-400',
    expiring: 'bg-orange-500/10 text-orange-400',
    expired: 'bg-red-500/10 text-red-400',
  };

  return (
    <div className="bg-[#151F32] rounded-xl border border-gray-800 p-4">
      <div className="flex items-center justify-between mb-3">
        <p className="font-medium text-white">{sub.shop}</p>
        <span className={`text-xs px-2.5 py-1 rounded-lg capitalize ${statusStyles[sub.status]}`}>{sub.status}</span>
      </div>
      <div className="flex items-center gap-2 mb-3">
        <span className={`text-xs px-2.5 py-1 rounded-lg ${planStyles[sub.plan]}`}>{sub.plan}</span>
        <span className="text-xs text-gray-500 capitalize">{sub.type}</span>
      </div>
      <div className="flex items-center justify-between text-sm pt-3 border-t border-gray-800">
        <span className="text-gray-400">{sub.startDate} - {sub.endDate || 'Lifetime'}</span>
        <span className="text-white font-medium">{sub.amount > 0 ? `${sub.amount} AED` : 'Free'}</span>
      </div>
    </div>
  );
}
