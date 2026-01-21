'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Search,
  Filter,
  Plus,
  MoreVertical,
  Eye,
  Edit,
  Ban,
  CheckCircle,
  Store,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

// Mock data
const shops = [
  {
    id: '1',
    name: 'Al Bareek Mobiles',
    owner: 'Ahmed Ali',
    email: 'ahmed@albareek.com',
    phone: '+971 50 123 4567',
    plan: 'Pro',
    status: 'active',
    createdAt: '2024-01-15',
    invoices: 156,
    revenue: 45600,
  },
  {
    id: '2',
    name: 'Tech Zone',
    owner: 'Sara Hassan',
    email: 'sara@techzone.ae',
    phone: '+971 55 987 6543',
    plan: 'Business',
    status: 'active',
    createdAt: '2024-01-10',
    invoices: 89,
    revenue: 23400,
  },
  {
    id: '3',
    name: 'Mobile World',
    owner: 'Mohammed Khalid',
    email: 'mk@mobileworld.com',
    phone: '+971 52 456 7890',
    plan: 'Starter',
    status: 'trial',
    createdAt: '2024-01-18',
    invoices: 12,
    revenue: 3200,
  },
  {
    id: '4',
    name: 'Phone Palace',
    owner: 'Fatima Omar',
    email: 'fatima@phonepalace.ae',
    phone: '+971 54 321 9876',
    plan: 'Business',
    status: 'suspended',
    createdAt: '2023-12-20',
    invoices: 67,
    revenue: 18900,
  },
  {
    id: '5',
    name: 'Digital Store',
    owner: 'Ali Rahman',
    email: 'ali@digitalstore.com',
    phone: '+971 56 789 0123',
    plan: 'Pro',
    status: 'active',
    createdAt: '2024-01-05',
    invoices: 234,
    revenue: 67800,
  },
];

export default function ShopsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [planFilter, setPlanFilter] = useState('all');

  const filteredShops = shops.filter((shop) => {
    const matchesSearch =
      shop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shop.owner.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shop.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || shop.status === statusFilter;
    const matchesPlan = planFilter === 'all' || shop.plan === planFilter;
    return matchesSearch && matchesStatus && matchesPlan;
  });

  return (
    <div>
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Shops</h1>
          <p className="text-gray-400 text-sm mt-1">Manage all registered shops</p>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 bg-[#F5A623] hover:bg-[#E09612] text-black font-semibold px-4 py-2.5 rounded-lg transition w-full sm:w-auto"
        >
          <Plus className="w-5 h-5" />
          Add Shop
        </button>
      </div>

      {/* Filters */}
      <div className="bg-[#151F32] rounded-xl border border-gray-800 p-4 mb-6">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search shops, owners, emails..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-[#0B1121] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#F5A623] focus:outline-none transition"
              />
            </div>
          </div>

          {/* Status Filter */}
          <div className="flex gap-3">
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="pl-9 pr-8 py-2.5 bg-[#0B1121] border border-gray-700 rounded-lg text-white focus:border-[#F5A623] focus:outline-none transition appearance-none cursor-pointer"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="trial">Trial</option>
                <option value="suspended">Suspended</option>
              </select>
            </div>

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
          </div>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard label="Total Shops" value={shops.length} />
        <StatCard label="Active" value={shops.filter((s) => s.status === 'active').length} color="green" />
        <StatCard label="Trial" value={shops.filter((s) => s.status === 'trial').length} color="blue" />
        <StatCard label="Suspended" value={shops.filter((s) => s.status === 'suspended').length} color="red" />
      </div>

      {/* Shops Table - Desktop */}
      <div className="hidden lg:block bg-[#151F32] rounded-xl border border-gray-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-400 border-b border-gray-800">
                <th className="px-6 py-4 font-medium">Shop</th>
                <th className="px-6 py-4 font-medium">Owner</th>
                <th className="px-6 py-4 font-medium">Plan</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Invoices</th>
                <th className="px-6 py-4 font-medium">Revenue</th>
                <th className="px-6 py-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredShops.map((shop) => (
                <ShopTableRow key={shop.id} shop={shop} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Shops Cards - Mobile/Tablet */}
      <div className="lg:hidden space-y-4">
        {filteredShops.map((shop) => (
          <ShopCard key={shop.id} shop={shop} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
        <p className="text-sm text-gray-400">
          Showing {filteredShops.length} of {shops.length} shops
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="p-2 rounded-lg bg-[#151F32] border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700 transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            className="px-4 py-2 rounded-lg bg-[#F5A623] text-black font-medium"
          >
            1
          </button>
          <button
            type="button"
            className="px-4 py-2 rounded-lg bg-[#151F32] border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700 transition"
          >
            2
          </button>
          <button
            type="button"
            className="px-4 py-2 rounded-lg bg-[#151F32] border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700 transition"
          >
            3
          </button>
          <button
            type="button"
            className="p-2 rounded-lg bg-[#151F32] border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700 transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  color = 'default',
}: {
  label: string;
  value: number;
  color?: 'default' | 'green' | 'blue' | 'red';
}) {
  const colors = {
    default: 'text-white',
    green: 'text-green-400',
    blue: 'text-blue-400',
    red: 'text-red-400',
  };

  return (
    <div className="bg-[#151F32] rounded-xl border border-gray-800 p-4">
      <p className="text-gray-400 text-sm">{label}</p>
      <p className={`text-2xl font-bold mt-1 ${colors[color]}`}>{value}</p>
    </div>
  );
}

function ShopTableRow({ shop }: { shop: typeof shops[0] }) {
  const statusStyles = {
    active: 'bg-green-500/10 text-green-400',
    trial: 'bg-blue-500/10 text-blue-400',
    suspended: 'bg-red-500/10 text-red-400',
  };

  const planStyles = {
    Starter: 'text-gray-400',
    Business: 'text-blue-400',
    Pro: 'text-[#F5A623]',
  };

  return (
    <tr className="border-b border-gray-800 last:border-0 hover:bg-[#1A2540] transition">
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#F5A623]/10 rounded-lg flex items-center justify-center">
            <Store className="w-5 h-5 text-[#F5A623]" />
          </div>
          <div>
            <p className="font-medium text-white">{shop.name}</p>
            <p className="text-xs text-gray-500">{shop.email}</p>
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <p className="text-white">{shop.owner}</p>
        <p className="text-xs text-gray-500">{shop.phone}</p>
      </td>
      <td className={`px-6 py-4 font-medium ${planStyles[shop.plan as keyof typeof planStyles]}`}>
        {shop.plan}
      </td>
      <td className="px-6 py-4">
        <span className={`text-xs px-2.5 py-1 rounded-lg capitalize ${statusStyles[shop.status as keyof typeof statusStyles]}`}>
          {shop.status}
        </span>
      </td>
      <td className="px-6 py-4 text-white">{shop.invoices}</td>
      <td className="px-6 py-4 text-white">{shop.revenue.toLocaleString()} AED</td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <Link
            href={`/dashboard/shops/${shop.id}`}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition"
          >
            <Eye className="w-4 h-4" />
          </Link>
          <button
            type="button"
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition"
          >
            <Edit className="w-4 h-4" />
          </button>
          <button
            type="button"
            className={`p-2 rounded-lg transition ${
              shop.status === 'suspended'
                ? 'text-green-400 hover:bg-green-500/10'
                : 'text-red-400 hover:bg-red-500/10'
            }`}
          >
            {shop.status === 'suspended' ? (
              <CheckCircle className="w-4 h-4" />
            ) : (
              <Ban className="w-4 h-4" />
            )}
          </button>
        </div>
      </td>
    </tr>
  );
}

function ShopCard({ shop }: { shop: typeof shops[0] }) {
  const statusStyles = {
    active: 'bg-green-500/10 text-green-400',
    trial: 'bg-blue-500/10 text-blue-400',
    suspended: 'bg-red-500/10 text-red-400',
  };

  const planStyles = {
    Starter: 'bg-gray-500/10 text-gray-400',
    Business: 'bg-blue-500/10 text-blue-400',
    Pro: 'bg-[#F5A623]/10 text-[#F5A623]',
  };

  return (
    <div className="bg-[#151F32] rounded-xl border border-gray-800 p-4">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-[#F5A623]/10 rounded-lg flex items-center justify-center">
            <Store className="w-6 h-6 text-[#F5A623]" />
          </div>
          <div>
            <p className="font-medium text-white">{shop.name}</p>
            <p className="text-sm text-gray-400">{shop.owner}</p>
          </div>
        </div>
        <button
          type="button"
          className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition"
        >
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>

      {/* Info */}
      <div className="space-y-2 mb-4">
        <p className="text-sm text-gray-400">{shop.email}</p>
        <p className="text-sm text-gray-400">{shop.phone}</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-[#0B1121] rounded-lg p-3">
          <p className="text-xs text-gray-500">Invoices</p>
          <p className="text-lg font-semibold text-white">{shop.invoices}</p>
        </div>
        <div className="bg-[#0B1121] rounded-lg p-3">
          <p className="text-xs text-gray-500">Revenue</p>
          <p className="text-lg font-semibold text-white">{shop.revenue.toLocaleString()}</p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-800">
        <div className="flex items-center gap-2">
          <span className={`text-xs px-2.5 py-1 rounded-lg ${planStyles[shop.plan as keyof typeof planStyles]}`}>
            {shop.plan}
          </span>
          <span className={`text-xs px-2.5 py-1 rounded-lg capitalize ${statusStyles[shop.status as keyof typeof statusStyles]}`}>
            {shop.status}
          </span>
        </div>
        <Link
          href={`/dashboard/shops/${shop.id}`}
          className="text-sm text-[#F5A623] hover:text-[#FFB84D] font-medium transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
