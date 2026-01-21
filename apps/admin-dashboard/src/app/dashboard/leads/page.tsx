'use client';

import { useState } from 'react';
import {
  Search,
  Filter,
  Plus,
  UserPlus,
  Phone,
  Mail,
  Store,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Eye,
  Edit,
  Trash2,
  CheckCircle,
  Clock,
  XCircle,
  FileText,
  X,
} from 'lucide-react';

// Mock data - Manual leads (added by admin)
const manualLeads = [
  {
    id: 'ML-001',
    name: 'Abdullah Mohammed',
    shopName: 'Mobile City',
    licenseNumber: 'DED-2024-78901',
    email: 'abdullah@mobilecity.ae',
    phone: '+971 50 111 2233',
    source: 'manual',
    status: 'new',
    notes: 'Interested in Pro plan, has 2 branches',
    createdAt: '2024-01-20 10:30',
    createdBy: 'Admin',
  },
  {
    id: 'ML-002',
    name: 'Rashid Al Maktoum',
    shopName: 'Phone Hub Dubai',
    licenseNumber: 'DED-2024-45678',
    email: 'rashid@phonehub.ae',
    phone: '+971 55 444 5566',
    source: 'manual',
    status: 'contacted',
    notes: 'Called on 19th, will decide next week',
    createdAt: '2024-01-18 14:15',
    createdBy: 'Admin',
  },
  {
    id: 'ML-003',
    name: 'Mariam Hassan',
    shopName: 'Tech Corner',
    licenseNumber: 'DED-2023-12345',
    email: 'mariam@techcorner.ae',
    phone: '+971 52 777 8899',
    source: 'manual',
    status: 'converted',
    notes: 'Converted to Business plan',
    createdAt: '2024-01-10 09:00',
    createdBy: 'Admin',
  },
];

// Mock data - Automatic leads (from signup/free trial)
const automaticLeads = [
  {
    id: 'AL-001',
    name: 'Yusuf Ahmed',
    shopName: 'Smart Mobiles',
    licenseNumber: 'DED-2024-99887',
    email: 'yusuf@smartmobiles.ae',
    phone: '+971 50 222 3344',
    source: 'signup',
    status: 'trial',
    trialStartDate: '2024-01-20',
    trialEndDate: '2024-02-03',
    createdAt: '2024-01-20 16:45',
  },
  {
    id: 'AL-002',
    name: 'Fatima Saeed',
    shopName: 'Phone Station',
    licenseNumber: 'DED-2024-55443',
    email: 'fatima@phonestation.ae',
    phone: '+971 54 666 7788',
    source: 'signup',
    status: 'trial',
    trialStartDate: '2024-01-19',
    trialEndDate: '2024-02-02',
    createdAt: '2024-01-19 11:20',
  },
  {
    id: 'AL-003',
    name: 'Omar Khalid',
    shopName: 'Digital Zone',
    licenseNumber: 'DED-2024-33221',
    email: 'omar@digitalzone.ae',
    phone: '+971 56 888 9900',
    source: 'signup',
    status: 'expired',
    trialStartDate: '2024-01-01',
    trialEndDate: '2024-01-15',
    createdAt: '2024-01-01 08:30',
  },
  {
    id: 'AL-004',
    name: 'Aisha Rahman',
    shopName: 'Mobile Express Plus',
    licenseNumber: 'DED-2024-11223',
    email: 'aisha@mobileexpress.ae',
    phone: '+971 58 111 2233',
    source: 'signup',
    status: 'converted',
    trialStartDate: '2024-01-05',
    trialEndDate: '2024-01-19',
    createdAt: '2024-01-05 13:00',
  },
];

type Lead = (typeof manualLeads)[0] | (typeof automaticLeads)[0];

export default function LeadsPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'manual' | 'automatic'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showAddForm, setShowAddForm] = useState(false);

  const allLeads = [...manualLeads, ...automaticLeads].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  const getFilteredLeads = () => {
    let leads: Lead[] = [];
    if (activeTab === 'all') leads = allLeads;
    else if (activeTab === 'manual') leads = manualLeads;
    else leads = automaticLeads;

    return leads.filter((lead) => {
      const matchesSearch =
        lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.shopName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.licenseNumber.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === 'all' || lead.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  };

  const filteredLeads = getFilteredLeads();

  const stats = {
    total: allLeads.length,
    new: allLeads.filter((l) => l.status === 'new').length,
    trial: allLeads.filter((l) => l.status === 'trial').length,
    contacted: allLeads.filter((l) => l.status === 'contacted').length,
    converted: allLeads.filter((l) => l.status === 'converted').length,
  };

  return (
    <div>
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Leads</h1>
          <p className="text-gray-400 text-sm mt-1">Manage potential customers and trial signups</p>
        </div>
        <button
          type="button"
          onClick={() => setShowAddForm(true)}
          className="inline-flex items-center justify-center gap-2 bg-[#F5A623] hover:bg-[#E09612] text-black font-semibold px-4 py-2.5 rounded-lg transition w-full sm:w-auto"
        >
          <Plus className="w-5 h-5" />
          Add Lead
        </button>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        <StatCard label="Total Leads" value={stats.total} icon={<UserPlus className="w-5 h-5" />} />
        <StatCard label="New" value={stats.new} icon={<Clock className="w-5 h-5" />} color="blue" />
        <StatCard label="In Trial" value={stats.trial} icon={<FileText className="w-5 h-5" />} color="orange" />
        <StatCard label="Contacted" value={stats.contacted} icon={<Phone className="w-5 h-5" />} color="purple" />
        <StatCard label="Converted" value={stats.converted} icon={<CheckCircle className="w-5 h-5" />} color="green" />
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto">
        <button
          type="button"
          onClick={() => setActiveTab('all')}
          className={`px-4 py-2 rounded-lg font-medium transition whitespace-nowrap ${
            activeTab === 'all'
              ? 'bg-[#F5A623] text-black'
              : 'bg-[#151F32] text-gray-400 hover:text-white border border-gray-800'
          }`}
        >
          All Leads ({allLeads.length})
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('manual')}
          className={`px-4 py-2 rounded-lg font-medium transition whitespace-nowrap ${
            activeTab === 'manual'
              ? 'bg-[#F5A623] text-black'
              : 'bg-[#151F32] text-gray-400 hover:text-white border border-gray-800'
          }`}
        >
          Manual ({manualLeads.length})
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('automatic')}
          className={`px-4 py-2 rounded-lg font-medium transition whitespace-nowrap ${
            activeTab === 'automatic'
              ? 'bg-[#F5A623] text-black'
              : 'bg-[#151F32] text-gray-400 hover:text-white border border-gray-800'
          }`}
        >
          From Signups ({automaticLeads.length})
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
                placeholder="Search by name, shop, email, license..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-[#0B1121] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#F5A623] focus:outline-none transition"
              />
            </div>
          </div>

          {/* Status Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="pl-9 pr-8 py-2.5 bg-[#0B1121] border border-gray-700 rounded-lg text-white focus:border-[#F5A623] focus:outline-none transition appearance-none cursor-pointer"
            >
              <option value="all">All Status</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="trial">In Trial</option>
              <option value="converted">Converted</option>
              <option value="expired">Expired</option>
              <option value="lost">Lost</option>
            </select>
          </div>
        </div>
      </div>

      {/* Leads Table - Desktop */}
      <div className="hidden lg:block bg-[#151F32] rounded-xl border border-gray-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-400 border-b border-gray-800">
                <th className="px-6 py-4 font-medium">Lead</th>
                <th className="px-6 py-4 font-medium">Shop Details</th>
                <th className="px-6 py-4 font-medium">Contact</th>
                <th className="px-6 py-4 font-medium">Source</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredLeads.map((lead) => (
                <LeadTableRow key={lead.id} lead={lead} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Leads Cards - Mobile/Tablet */}
      <div className="lg:hidden space-y-4">
        {filteredLeads.map((lead) => (
          <LeadCard key={lead.id} lead={lead} />
        ))}
      </div>

      {/* Empty State */}
      {filteredLeads.length === 0 && (
        <div className="bg-[#151F32] rounded-xl border border-gray-800 p-8 text-center">
          <UserPlus className="w-12 h-12 text-gray-600 mx-auto mb-4" />
          <p className="text-gray-400">No leads found matching your criteria</p>
        </div>
      )}

      {/* Pagination */}
      {filteredLeads.length > 0 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
          <p className="text-sm text-gray-400">
            Showing {filteredLeads.length} of {allLeads.length} leads
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

      {/* Add Lead Modal */}
      {showAddForm && <AddLeadModal onClose={() => setShowAddForm(false)} />}
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
  value: number;
  icon: React.ReactNode;
  color?: 'default' | 'blue' | 'orange' | 'purple' | 'green';
}) {
  const colors = {
    default: 'bg-gray-500/10 text-gray-400',
    blue: 'bg-blue-500/10 text-blue-400',
    orange: 'bg-orange-500/10 text-orange-400',
    purple: 'bg-purple-500/10 text-purple-400',
    green: 'bg-green-500/10 text-green-400',
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

function LeadTableRow({ lead }: { lead: Lead }) {
  const statusStyles = {
    new: 'bg-blue-500/10 text-blue-400',
    contacted: 'bg-purple-500/10 text-purple-400',
    trial: 'bg-orange-500/10 text-orange-400',
    converted: 'bg-green-500/10 text-green-400',
    expired: 'bg-red-500/10 text-red-400',
    lost: 'bg-gray-500/10 text-gray-400',
  };

  const sourceStyles = {
    manual: 'bg-[#F5A623]/10 text-[#F5A623]',
    signup: 'bg-blue-500/10 text-blue-400',
  };

  return (
    <tr className="border-b border-gray-800 last:border-0 hover:bg-[#1A2540] transition">
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#F5A623]/10 rounded-full flex items-center justify-center">
            <span className="text-sm font-semibold text-[#F5A623]">
              {lead.name.split(' ').map((n) => n[0]).join('')}
            </span>
          </div>
          <div>
            <p className="font-medium text-white">{lead.name}</p>
            <p className="text-xs text-gray-500">{lead.id}</p>
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <Store className="w-4 h-4 text-gray-500" />
          <div>
            <p className="text-white">{lead.shopName}</p>
            <p className="text-xs text-gray-500">{lead.licenseNumber}</p>
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Mail className="w-3.5 h-3.5" />
            <span>{lead.email}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Phone className="w-3.5 h-3.5" />
            <span>{lead.phone}</span>
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <span className={`text-xs px-2.5 py-1 rounded-lg capitalize ${sourceStyles[lead.source as keyof typeof sourceStyles]}`}>
          {lead.source === 'signup' ? 'Auto (Signup)' : 'Manual'}
        </span>
      </td>
      <td className="px-6 py-4">
        <span className={`text-xs px-2.5 py-1 rounded-lg capitalize ${statusStyles[lead.status as keyof typeof statusStyles]}`}>
          {lead.status}
        </span>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <Calendar className="w-4 h-4" />
          <span>{lead.createdAt}</span>
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
          <button
            type="button"
            title="Edit lead"
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition"
          >
            <Edit className="w-4 h-4" />
          </button>
          <button
            type="button"
            title="Delete lead"
            className="p-2 rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </td>
    </tr>
  );
}

function LeadCard({ lead }: { lead: Lead }) {
  const statusStyles = {
    new: 'bg-blue-500/10 text-blue-400',
    contacted: 'bg-purple-500/10 text-purple-400',
    trial: 'bg-orange-500/10 text-orange-400',
    converted: 'bg-green-500/10 text-green-400',
    expired: 'bg-red-500/10 text-red-400',
    lost: 'bg-gray-500/10 text-gray-400',
  };

  const sourceStyles = {
    manual: 'bg-[#F5A623]/10 text-[#F5A623]',
    signup: 'bg-blue-500/10 text-blue-400',
  };

  return (
    <div className="bg-[#151F32] rounded-xl border border-gray-800 p-4">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-[#F5A623]/10 rounded-full flex items-center justify-center">
            <span className="text-sm font-semibold text-[#F5A623]">
              {lead.name.split(' ').map((n) => n[0]).join('')}
            </span>
          </div>
          <div>
            <p className="font-medium text-white">{lead.name}</p>
            <p className="text-xs text-gray-500">{lead.id}</p>
          </div>
        </div>
        <span className={`text-xs px-2.5 py-1 rounded-lg capitalize ${statusStyles[lead.status as keyof typeof statusStyles]}`}>
          {lead.status}
        </span>
      </div>

      {/* Shop Info */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm">
          <Store className="w-4 h-4 text-gray-500" />
          <span className="text-white">{lead.shopName}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <FileText className="w-4 h-4" />
          <span>{lead.licenseNumber}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Mail className="w-4 h-4" />
          <span>{lead.email}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Phone className="w-4 h-4" />
          <span>{lead.phone}</span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-800">
        <div className="flex items-center gap-2">
          <span className={`text-xs px-2.5 py-1 rounded-lg ${sourceStyles[lead.source as keyof typeof sourceStyles]}`}>
            {lead.source === 'signup' ? 'Auto' : 'Manual'}
          </span>
          <span className="text-xs text-gray-500">{lead.createdAt}</span>
        </div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition"
          >
            <Eye className="w-4 h-4" />
          </button>
          <button
            type="button"
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition"
          >
            <Edit className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function AddLeadModal({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    shopName: '',
    licenseNumber: '',
    email: '',
    phone: '',
    status: 'new',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: API call to save lead
    console.log('Submitting lead:', formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-[#151F32] rounded-xl border border-gray-800 w-full max-w-lg max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <h2 className="text-lg font-semibold text-white">Add New Lead</h2>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Full Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter full name"
              className="w-full px-4 py-2.5 bg-[#0B1121] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#F5A623] focus:outline-none transition"
            />
          </div>

          {/* Shop Name */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Shop Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.shopName}
              onChange={(e) => setFormData({ ...formData, shopName: e.target.value })}
              placeholder="Enter shop name"
              className="w-full px-4 py-2.5 bg-[#0B1121] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#F5A623] focus:outline-none transition"
            />
          </div>

          {/* License Number */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Trade License Number <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.licenseNumber}
              onChange={(e) => setFormData({ ...formData, licenseNumber: e.target.value })}
              placeholder="e.g., DED-2024-12345"
              className="w-full px-4 py-2.5 bg-[#0B1121] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#F5A623] focus:outline-none transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Email Address <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Enter email address"
              className="w-full px-4 py-2.5 bg-[#0B1121] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#F5A623] focus:outline-none transition"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Phone Number <span className="text-red-400">*</span>
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+971 50 123 4567"
              className="w-full px-4 py-2.5 bg-[#0B1121] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#F5A623] focus:outline-none transition"
            />
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Status</label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              className="w-full px-4 py-2.5 bg-[#0B1121] border border-gray-700 rounded-lg text-white focus:border-[#F5A623] focus:outline-none transition appearance-none cursor-pointer"
            >
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="trial">In Trial</option>
              <option value="converted">Converted</option>
              <option value="lost">Lost</option>
            </select>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Notes</label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="Add any additional notes..."
              rows={3}
              className="w-full px-4 py-2.5 bg-[#0B1121] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#F5A623] focus:outline-none transition resize-none"
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2.5 bg-[#0B1121] border border-gray-700 text-white rounded-lg hover:border-gray-600 transition font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2.5 bg-[#F5A623] hover:bg-[#E09612] text-black rounded-lg transition font-semibold"
            >
              Add Lead
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
