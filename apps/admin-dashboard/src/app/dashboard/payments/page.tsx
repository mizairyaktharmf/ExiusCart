'use client';

import { useState } from 'react';
import {
  Search,
  Filter,
  Download,
  CheckCircle,
  XCircle,
  Clock,
  CreditCard,
  Banknote,
  Building2,
  ChevronLeft,
  ChevronRight,
  Eye,
  Check,
  X,
  AlertCircle,
  TrendingUp,
  Calendar,
} from 'lucide-react';

// Mock data
const payments = [
  {
    id: 'PAY-001',
    shop: 'Al Bareek Mobiles',
    owner: 'Ahmed Ali',
    amount: 299,
    currency: 'AED',
    type: 'subscription',
    plan: 'Pro',
    method: 'card',
    status: 'completed',
    transactionId: 'TXN-ABC123',
    date: '2024-01-20 14:30',
  },
  {
    id: 'PAY-002',
    shop: 'Tech Zone',
    owner: 'Sara Hassan',
    amount: 199,
    currency: 'AED',
    type: 'subscription',
    plan: 'Business',
    method: 'bank_transfer',
    status: 'pending',
    transactionId: 'TXN-DEF456',
    date: '2024-01-20 10:15',
    proofUrl: '/proof/pay-002.jpg',
  },
  {
    id: 'PAY-003',
    shop: 'Mobile World',
    owner: 'Mohammed Khalid',
    amount: 99,
    currency: 'AED',
    type: 'subscription',
    plan: 'Starter',
    method: 'card',
    status: 'completed',
    transactionId: 'TXN-GHI789',
    date: '2024-01-19 18:45',
  },
  {
    id: 'PAY-004',
    shop: 'Phone Palace',
    owner: 'Fatima Omar',
    amount: 199,
    currency: 'AED',
    type: 'subscription',
    plan: 'Business',
    method: 'bank_transfer',
    status: 'rejected',
    transactionId: 'TXN-JKL012',
    date: '2024-01-18 09:00',
    rejectionReason: 'Invalid payment proof',
  },
  {
    id: 'PAY-005',
    shop: 'Digital Store',
    owner: 'Ali Rahman',
    amount: 299,
    currency: 'AED',
    type: 'subscription',
    plan: 'Pro',
    method: 'bank_transfer',
    status: 'pending',
    transactionId: 'TXN-MNO345',
    date: '2024-01-20 16:00',
    proofUrl: '/proof/pay-005.jpg',
  },
  {
    id: 'PAY-006',
    shop: 'Smart Phones Hub',
    owner: 'Khalid Ibrahim',
    amount: 99,
    currency: 'AED',
    type: 'subscription',
    plan: 'Starter',
    method: 'card',
    status: 'completed',
    transactionId: 'TXN-PQR678',
    date: '2024-01-17 11:30',
  },
  {
    id: 'PAY-007',
    shop: 'Gadget Gallery',
    owner: 'Layla Ahmed',
    amount: 199,
    currency: 'AED',
    type: 'subscription',
    plan: 'Business',
    method: 'bank_transfer',
    status: 'pending',
    transactionId: 'TXN-STU901',
    date: '2024-01-20 08:45',
    proofUrl: '/proof/pay-007.jpg',
  },
  {
    id: 'PAY-008',
    shop: 'Mobile Express',
    owner: 'Omar Hassan',
    amount: 299,
    currency: 'AED',
    type: 'subscription',
    plan: 'Pro',
    method: 'card',
    status: 'failed',
    transactionId: 'TXN-VWX234',
    date: '2024-01-16 15:20',
    failureReason: 'Card declined',
  },
];

export default function PaymentsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [methodFilter, setMethodFilter] = useState('all');
  const [activeTab, setActiveTab] = useState<'all' | 'pending'>('all');

  const filteredPayments = payments.filter((payment) => {
    const matchesSearch =
      payment.shop.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.owner.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.transactionId.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || payment.status === statusFilter;
    const matchesMethod = methodFilter === 'all' || payment.method === methodFilter;
    const matchesTab = activeTab === 'all' || (activeTab === 'pending' && payment.status === 'pending');
    return matchesSearch && matchesStatus && matchesMethod && matchesTab;
  });

  const pendingPayments = payments.filter((p) => p.status === 'pending');
  const totalRevenue = payments
    .filter((p) => p.status === 'completed')
    .reduce((sum, p) => sum + p.amount, 0);

  return (
    <div>
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Payments</h1>
          <p className="text-gray-400 text-sm mt-1">Manage payment transactions and approvals</p>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 bg-[#151F32] border border-gray-700 hover:border-gray-600 text-white font-medium px-4 py-2.5 rounded-lg transition w-full sm:w-auto"
        >
          <Download className="w-5 h-5" />
          Export
        </button>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard
          label="Total Revenue"
          value={`${totalRevenue.toLocaleString()} AED`}
          icon={<TrendingUp className="w-5 h-5" />}
          color="primary"
        />
        <StatCard
          label="Completed"
          value={payments.filter((p) => p.status === 'completed').length}
          icon={<CheckCircle className="w-5 h-5" />}
          color="green"
        />
        <StatCard
          label="Pending Approval"
          value={pendingPayments.length}
          icon={<Clock className="w-5 h-5" />}
          color="orange"
        />
        <StatCard
          label="Failed/Rejected"
          value={payments.filter((p) => p.status === 'failed' || p.status === 'rejected').length}
          icon={<XCircle className="w-5 h-5" />}
          color="red"
        />
      </div>

      {/* Pending Approvals Alert */}
      {pendingPayments.length > 0 && (
        <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-4 mb-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-orange-400 font-medium">
                {pendingPayments.length} payment{pendingPayments.length > 1 ? 's' : ''} awaiting approval
              </p>
              <p className="text-orange-400/70 text-sm mt-1">
                Bank transfer payments require manual verification
              </p>
            </div>
            <button
              type="button"
              onClick={() => setActiveTab('pending')}
              className="text-sm text-orange-400 hover:text-orange-300 font-medium transition"
            >
              View All
            </button>
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        <button
          type="button"
          onClick={() => setActiveTab('all')}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            activeTab === 'all'
              ? 'bg-[#F5A623] text-black'
              : 'bg-[#151F32] text-gray-400 hover:text-white border border-gray-800'
          }`}
        >
          All Transactions
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('pending')}
          className={`px-4 py-2 rounded-lg font-medium transition flex items-center gap-2 ${
            activeTab === 'pending'
              ? 'bg-[#F5A623] text-black'
              : 'bg-[#151F32] text-gray-400 hover:text-white border border-gray-800'
          }`}
        >
          Pending
          {pendingPayments.length > 0 && (
            <span
              className={`text-xs px-2 py-0.5 rounded-full ${
                activeTab === 'pending' ? 'bg-black/20 text-black' : 'bg-orange-500 text-white'
              }`}
            >
              {pendingPayments.length}
            </span>
          )}
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
                placeholder="Search by shop, owner, ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-[#0B1121] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#F5A623] focus:outline-none transition"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="pl-9 pr-8 py-2.5 bg-[#0B1121] border border-gray-700 rounded-lg text-white focus:border-[#F5A623] focus:outline-none transition appearance-none cursor-pointer"
              >
                <option value="all">All Status</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
                <option value="failed">Failed</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>

            <select
              value={methodFilter}
              onChange={(e) => setMethodFilter(e.target.value)}
              className="px-4 py-2.5 bg-[#0B1121] border border-gray-700 rounded-lg text-white focus:border-[#F5A623] focus:outline-none transition appearance-none cursor-pointer"
            >
              <option value="all">All Methods</option>
              <option value="card">Card</option>
              <option value="bank_transfer">Bank Transfer</option>
            </select>
          </div>
        </div>
      </div>

      {/* Payments Table - Desktop */}
      <div className="hidden lg:block bg-[#151F32] rounded-xl border border-gray-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-400 border-b border-gray-800">
                <th className="px-6 py-4 font-medium">Payment ID</th>
                <th className="px-6 py-4 font-medium">Shop</th>
                <th className="px-6 py-4 font-medium">Plan</th>
                <th className="px-6 py-4 font-medium">Method</th>
                <th className="px-6 py-4 font-medium">Amount</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredPayments.map((payment) => (
                <PaymentTableRow key={payment.id} payment={payment} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payments Cards - Mobile/Tablet */}
      <div className="lg:hidden space-y-4">
        {filteredPayments.map((payment) => (
          <PaymentCard key={payment.id} payment={payment} />
        ))}
      </div>

      {/* Empty State */}
      {filteredPayments.length === 0 && (
        <div className="bg-[#151F32] rounded-xl border border-gray-800 p-8 text-center">
          <CreditCard className="w-12 h-12 text-gray-600 mx-auto mb-4" />
          <p className="text-gray-400">No payments found matching your criteria</p>
        </div>
      )}

      {/* Pagination */}
      {filteredPayments.length > 0 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
          <p className="text-sm text-gray-400">
            Showing {filteredPayments.length} of {payments.length} payments
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
              className="p-2 rounded-lg bg-[#151F32] border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700 transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function StatCard({
  label,
  value,
  icon,
  color = 'default',
}: {
  label: string;
  value: string | number;
  icon: React.ReactNode;
  color?: 'default' | 'primary' | 'green' | 'orange' | 'red';
}) {
  const colors = {
    default: 'bg-gray-500/10 text-gray-400',
    primary: 'bg-[#F5A623]/10 text-[#F5A623]',
    green: 'bg-green-500/10 text-green-400',
    orange: 'bg-orange-500/10 text-orange-400',
    red: 'bg-red-500/10 text-red-400',
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

function PaymentTableRow({ payment }: { payment: typeof payments[0] }) {
  const statusStyles = {
    completed: 'bg-green-500/10 text-green-400',
    pending: 'bg-orange-500/10 text-orange-400',
    failed: 'bg-red-500/10 text-red-400',
    rejected: 'bg-red-500/10 text-red-400',
  };

  const methodIcons = {
    card: <CreditCard className="w-4 h-4" />,
    bank_transfer: <Building2 className="w-4 h-4" />,
  };

  const planStyles = {
    Starter: 'text-gray-400',
    Business: 'text-blue-400',
    Pro: 'text-[#F5A623]',
  };

  return (
    <tr className="border-b border-gray-800 last:border-0 hover:bg-[#1A2540] transition">
      <td className="px-6 py-4">
        <p className="font-mono text-sm text-white">{payment.id}</p>
        <p className="font-mono text-xs text-gray-500">{payment.transactionId}</p>
      </td>
      <td className="px-6 py-4">
        <p className="font-medium text-white">{payment.shop}</p>
        <p className="text-xs text-gray-500">{payment.owner}</p>
      </td>
      <td className={`px-6 py-4 font-medium ${planStyles[payment.plan as keyof typeof planStyles]}`}>
        {payment.plan}
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-2 text-gray-400">
          {methodIcons[payment.method as keyof typeof methodIcons]}
          <span className="capitalize text-sm">{payment.method.replace('_', ' ')}</span>
        </div>
      </td>
      <td className="px-6 py-4">
        <p className="font-semibold text-white">{payment.amount} {payment.currency}</p>
      </td>
      <td className="px-6 py-4">
        <span
          className={`text-xs px-2.5 py-1 rounded-lg capitalize ${
            statusStyles[payment.status as keyof typeof statusStyles]
          }`}
        >
          {payment.status}
        </span>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <Calendar className="w-4 h-4" />
          <span>{payment.date}</span>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <button
            type="button"
            title="View details"
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition"
          >
            <Eye className="w-4 h-4" />
          </button>
          {payment.status === 'pending' && (
            <>
              <button
                type="button"
                title="Approve payment"
                className="p-2 rounded-lg text-green-400 hover:bg-green-500/10 transition"
              >
                <Check className="w-4 h-4" />
              </button>
              <button
                type="button"
                title="Reject payment"
                className="p-2 rounded-lg text-red-400 hover:bg-red-500/10 transition"
              >
                <X className="w-4 h-4" />
              </button>
            </>
          )}
        </div>
      </td>
    </tr>
  );
}

function PaymentCard({ payment }: { payment: typeof payments[0] }) {
  const statusStyles = {
    completed: 'bg-green-500/10 text-green-400',
    pending: 'bg-orange-500/10 text-orange-400',
    failed: 'bg-red-500/10 text-red-400',
    rejected: 'bg-red-500/10 text-red-400',
  };

  const methodIcons = {
    card: <CreditCard className="w-4 h-4" />,
    bank_transfer: <Building2 className="w-4 h-4" />,
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
        <div>
          <p className="font-mono text-sm text-white">{payment.id}</p>
          <p className="font-mono text-xs text-gray-500 mt-1">{payment.transactionId}</p>
        </div>
        <span
          className={`text-xs px-2.5 py-1 rounded-lg capitalize ${
            statusStyles[payment.status as keyof typeof statusStyles]
          }`}
        >
          {payment.status}
        </span>
      </div>

      {/* Shop Info */}
      <div className="mb-4">
        <p className="font-medium text-white">{payment.shop}</p>
        <p className="text-sm text-gray-400">{payment.owner}</p>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-[#0B1121] rounded-lg p-3">
          <p className="text-xs text-gray-500">Amount</p>
          <p className="text-lg font-semibold text-white">
            {payment.amount} {payment.currency}
          </p>
        </div>
        <div className="bg-[#0B1121] rounded-lg p-3">
          <p className="text-xs text-gray-500">Plan</p>
          <span
            className={`inline-block mt-1 text-xs px-2 py-1 rounded-lg ${
              planStyles[payment.plan as keyof typeof planStyles]
            }`}
          >
            {payment.plan}
          </span>
        </div>
      </div>

      {/* Method & Date */}
      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
        <div className="flex items-center gap-2">
          {methodIcons[payment.method as keyof typeof methodIcons]}
          <span className="capitalize">{payment.method.replace('_', ' ')}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>{payment.date}</span>
        </div>
      </div>

      {/* Actions */}
      {payment.status === 'pending' && (
        <div className="flex gap-2 pt-4 border-t border-gray-800">
          <button
            type="button"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-green-500/10 text-green-400 hover:bg-green-500/20 transition font-medium text-sm"
          >
            <Check className="w-4 h-4" />
            Approve
          </button>
          <button
            type="button"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition font-medium text-sm"
          >
            <X className="w-4 h-4" />
            Reject
          </button>
        </div>
      )}

      {/* View Details Button for non-pending */}
      {payment.status !== 'pending' && (
        <div className="pt-4 border-t border-gray-800">
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#0B1121] text-gray-400 hover:text-white transition font-medium text-sm"
          >
            <Eye className="w-4 h-4" />
            View Details
          </button>
        </div>
      )}
    </div>
  );
}
