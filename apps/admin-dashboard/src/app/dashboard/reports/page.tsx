'use client';

import { useState } from 'react';
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Download,
  Calendar,
  Store,
  Users,
  CreditCard,
  Package,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';

// Mock data for charts
const monthlyRevenue = [
  { month: 'Aug', value: 12500 },
  { month: 'Sep', value: 15200 },
  { month: 'Oct', value: 18900 },
  { month: 'Nov', value: 22400 },
  { month: 'Dec', value: 28100 },
  { month: 'Jan', value: 32500 },
];

const topShops = [
  { name: 'Digital Store', revenue: 67800, invoices: 234 },
  { name: 'Al Bareek Mobiles', revenue: 45600, invoices: 156 },
  { name: 'Tech Zone', revenue: 23400, invoices: 89 },
  { name: 'Phone Palace', revenue: 18900, invoices: 67 },
  { name: 'Mobile World', revenue: 3200, invoices: 12 },
];

const planDistribution = [
  { plan: 'Starter', count: 12, percentage: 35 },
  { plan: 'Business', count: 15, percentage: 44 },
  { plan: 'Pro', count: 7, percentage: 21 },
];

export default function ReportsPage() {
  const [dateRange, setDateRange] = useState('last_30_days');

  return (
    <div>
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Reports</h1>
          <p className="text-gray-400 text-sm mt-1">Analytics and insights for your platform</p>
        </div>
        <div className="flex gap-3">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-4 py-2.5 bg-[#151F32] border border-gray-700 rounded-lg text-white focus:border-[#F5A623] focus:outline-none transition appearance-none cursor-pointer"
          >
            <option value="last_7_days">Last 7 days</option>
            <option value="last_30_days">Last 30 days</option>
            <option value="last_90_days">Last 90 days</option>
            <option value="this_year">This Year</option>
          </select>
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 bg-[#F5A623] hover:bg-[#E09612] text-black font-semibold px-4 py-2.5 rounded-lg transition"
          >
            <Download className="w-5 h-5" />
            <span className="hidden sm:inline">Export</span>
          </button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard
          label="Total Revenue"
          value="159,400 AED"
          change="+12.5%"
          trend="up"
          icon={<TrendingUp className="w-5 h-5" />}
        />
        <StatCard
          label="Total Shops"
          value="34"
          change="+8"
          trend="up"
          icon={<Store className="w-5 h-5" />}
        />
        <StatCard
          label="Active Subscriptions"
          value="29"
          change="+5"
          trend="up"
          icon={<Package className="w-5 h-5" />}
        />
        <StatCard
          label="Churn Rate"
          value="2.3%"
          change="-0.5%"
          trend="down"
          icon={<TrendingDown className="w-5 h-5" />}
          isGoodWhenDown
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Revenue Chart */}
        <div className="bg-[#151F32] rounded-xl border border-gray-800 p-4 md:p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-white">Revenue Overview</h3>
              <p className="text-sm text-gray-500">Monthly revenue trend</p>
            </div>
            <div className="flex items-center gap-2 text-[#F5A623]">
              <BarChart3 className="w-5 h-5" />
            </div>
          </div>
          {/* Simple Bar Chart */}
          <div className="flex items-end justify-between gap-2 h-48">
            {monthlyRevenue.map((item, index) => {
              const maxValue = Math.max(...monthlyRevenue.map((m) => m.value));
              const heightPercentage = (item.value / maxValue) * 100;
              return (
                <div key={item.month} className="flex-1 flex flex-col items-center gap-2">
                  <div
                    className={`w-full rounded-t-lg transition-all ${
                      index === monthlyRevenue.length - 1 ? 'bg-[#F5A623]' : 'bg-[#F5A623]/30'
                    }`}
                    style={{ height: `${heightPercentage}%` }}
                  />
                  <span className="text-xs text-gray-500">{item.month}</span>
                </div>
              );
            })}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-800">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Total this period</span>
              <span className="text-lg font-semibold text-white">
                {monthlyRevenue.reduce((sum, m) => sum + m.value, 0).toLocaleString()} AED
              </span>
            </div>
          </div>
        </div>

        {/* Plan Distribution */}
        <div className="bg-[#151F32] rounded-xl border border-gray-800 p-4 md:p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-white">Plan Distribution</h3>
              <p className="text-sm text-gray-500">Active subscriptions by plan</p>
            </div>
            <div className="flex items-center gap-2 text-[#F5A623]">
              <Package className="w-5 h-5" />
            </div>
          </div>
          <div className="space-y-4">
            {planDistribution.map((plan) => {
              const colors = {
                Starter: 'bg-gray-500',
                Business: 'bg-blue-500',
                Pro: 'bg-[#F5A623]',
              };
              return (
                <div key={plan.plan}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-300">{plan.plan}</span>
                    <span className="text-sm text-gray-400">
                      {plan.count} shops ({plan.percentage}%)
                    </span>
                  </div>
                  <div className="h-3 bg-[#0B1121] rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${colors[plan.plan as keyof typeof colors]}`}
                      style={{ width: `${plan.percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-6 pt-4 border-t border-gray-800">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Total active</span>
              <span className="text-lg font-semibold text-white">
                {planDistribution.reduce((sum, p) => sum + p.count, 0)} subscriptions
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Top Shops */}
      <div className="bg-[#151F32] rounded-xl border border-gray-800 p-4 md:p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-white">Top Performing Shops</h3>
            <p className="text-sm text-gray-500">Ranked by revenue</p>
          </div>
          <button
            type="button"
            className="text-sm text-[#F5A623] hover:text-[#FFB84D] font-medium transition"
          >
            View All
          </button>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-400 border-b border-gray-800">
                <th className="pb-3 font-medium">Rank</th>
                <th className="pb-3 font-medium">Shop Name</th>
                <th className="pb-3 font-medium text-right">Revenue</th>
                <th className="pb-3 font-medium text-right">Invoices</th>
                <th className="pb-3 font-medium text-right">Avg. Invoice</th>
              </tr>
            </thead>
            <tbody>
              {topShops.map((shop, index) => (
                <tr key={shop.name} className="border-b border-gray-800 last:border-0">
                  <td className="py-4">
                    <span
                      className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${
                        index === 0
                          ? 'bg-[#F5A623]/10 text-[#F5A623]'
                          : index === 1
                          ? 'bg-gray-400/10 text-gray-400'
                          : index === 2
                          ? 'bg-orange-400/10 text-orange-400'
                          : 'bg-gray-700/50 text-gray-500'
                      }`}
                    >
                      {index + 1}
                    </span>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#F5A623]/10 rounded-lg flex items-center justify-center">
                        <Store className="w-5 h-5 text-[#F5A623]" />
                      </div>
                      <span className="font-medium text-white">{shop.name}</span>
                    </div>
                  </td>
                  <td className="py-4 text-right font-semibold text-white">
                    {shop.revenue.toLocaleString()} AED
                  </td>
                  <td className="py-4 text-right text-gray-400">{shop.invoices}</td>
                  <td className="py-4 text-right text-gray-400">
                    {Math.round(shop.revenue / shop.invoices).toLocaleString()} AED
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-3">
          {topShops.map((shop, index) => (
            <div
              key={shop.name}
              className="bg-[#0B1121] rounded-lg p-4 flex items-center gap-4"
            >
              <span
                className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold flex-shrink-0 ${
                  index === 0
                    ? 'bg-[#F5A623]/10 text-[#F5A623]'
                    : index === 1
                    ? 'bg-gray-400/10 text-gray-400'
                    : index === 2
                    ? 'bg-orange-400/10 text-orange-400'
                    : 'bg-gray-700/50 text-gray-500'
                }`}
              >
                {index + 1}
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-white truncate">{shop.name}</p>
                <p className="text-sm text-gray-500">{shop.invoices} invoices</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-white">{shop.revenue.toLocaleString()}</p>
                <p className="text-xs text-gray-500">AED</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <QuickStatCard label="New Shops (30d)" value="8" icon={<Store className="w-5 h-5" />} />
        <QuickStatCard label="New Users (30d)" value="24" icon={<Users className="w-5 h-5" />} />
        <QuickStatCard label="Payments (30d)" value="45" icon={<CreditCard className="w-5 h-5" />} />
        <QuickStatCard label="Avg. Revenue/Shop" value="4,688 AED" icon={<TrendingUp className="w-5 h-5" />} />
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  change,
  trend,
  icon,
  isGoodWhenDown = false,
}: {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: React.ReactNode;
  isGoodWhenDown?: boolean;
}) {
  const isGood = isGoodWhenDown ? trend === 'down' : trend === 'up';

  return (
    <div className="bg-[#151F32] rounded-xl border border-gray-800 p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="p-2 rounded-lg bg-[#F5A623]/10 text-[#F5A623]">{icon}</div>
        <div
          className={`flex items-center gap-1 text-xs font-medium ${
            isGood ? 'text-green-400' : 'text-red-400'
          }`}
        >
          {trend === 'up' ? (
            <ArrowUpRight className="w-3 h-3" />
          ) : (
            <ArrowDownRight className="w-3 h-3" />
          )}
          {change}
        </div>
      </div>
      <p className="text-2xl font-bold text-white">{value}</p>
      <p className="text-sm text-gray-500 mt-1">{label}</p>
    </div>
  );
}

function QuickStatCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-[#151F32] rounded-xl border border-gray-800 p-4">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-gray-500/10 text-gray-400">{icon}</div>
        <div>
          <p className="text-lg font-bold text-white">{value}</p>
          <p className="text-xs text-gray-500">{label}</p>
        </div>
      </div>
    </div>
  );
}
