'use client';

import { useState } from 'react';
import {
  Search,
  Filter,
  MoreVertical,
  Mail,
  Phone,
  Shield,
  User,
  Store,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  XCircle,
  Key,
} from 'lucide-react';

// Mock data
const users = [
  {
    id: '1',
    name: 'Ahmed Ali',
    email: 'ahmed@albareek.com',
    phone: '+971 50 123 4567',
    role: 'owner',
    shop: 'Al Bareek Mobiles',
    status: 'active',
    emailVerified: true,
    lastLogin: '2024-01-20 14:30',
    createdAt: '2024-01-15',
  },
  {
    id: '2',
    name: 'Sara Hassan',
    email: 'sara@techzone.ae',
    phone: '+971 55 987 6543',
    role: 'owner',
    shop: 'Tech Zone',
    status: 'active',
    emailVerified: true,
    lastLogin: '2024-01-20 10:15',
    createdAt: '2024-01-10',
  },
  {
    id: '3',
    name: 'Mohammed Khalid',
    email: 'mk@mobileworld.com',
    phone: '+971 52 456 7890',
    role: 'owner',
    shop: 'Mobile World',
    status: 'active',
    emailVerified: false,
    lastLogin: '2024-01-19 18:45',
    createdAt: '2024-01-18',
  },
  {
    id: '4',
    name: 'Fatima Omar',
    email: 'fatima@phonepalace.ae',
    phone: '+971 54 321 9876',
    role: 'owner',
    shop: 'Phone Palace',
    status: 'suspended',
    emailVerified: true,
    lastLogin: '2024-01-10 09:00',
    createdAt: '2023-12-20',
  },
  {
    id: '5',
    name: 'Khalid Ibrahim',
    email: 'khalid@albareek.com',
    phone: '+971 50 111 2222',
    role: 'staff',
    shop: 'Al Bareek Mobiles',
    status: 'active',
    emailVerified: true,
    lastLogin: '2024-01-20 16:00',
    createdAt: '2024-01-16',
  },
  {
    id: '6',
    name: 'Layla Ahmed',
    email: 'layla@techzone.ae',
    phone: '+971 55 333 4444',
    role: 'staff',
    shop: 'Tech Zone',
    status: 'active',
    emailVerified: true,
    lastLogin: '2024-01-20 12:30',
    createdAt: '2024-01-12',
  },
];

export default function UsersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.shop.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = roleFilter === 'all' || user.role === roleFilter;
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
    return matchesSearch && matchesRole && matchesStatus;
  });

  return (
    <div>
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Users</h1>
        <p className="text-gray-400 text-sm mt-1">Manage shop owners and staff accounts</p>
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
                placeholder="Search users, emails, shops..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-[#0B1121] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#F5A623] focus:outline-none transition"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex gap-3">
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <select
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
                className="pl-9 pr-8 py-2.5 bg-[#0B1121] border border-gray-700 rounded-lg text-white focus:border-[#F5A623] focus:outline-none transition appearance-none cursor-pointer"
              >
                <option value="all">All Roles</option>
                <option value="owner">Owners</option>
                <option value="staff">Staff</option>
              </select>
            </div>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2.5 bg-[#0B1121] border border-gray-700 rounded-lg text-white focus:border-[#F5A623] focus:outline-none transition appearance-none cursor-pointer"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="suspended">Suspended</option>
            </select>
          </div>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard label="Total Users" value={users.length} icon={<User className="w-5 h-5" />} />
        <StatCard label="Shop Owners" value={users.filter((u) => u.role === 'owner').length} icon={<Shield className="w-5 h-5" />} color="primary" />
        <StatCard label="Staff" value={users.filter((u) => u.role === 'staff').length} icon={<User className="w-5 h-5" />} color="blue" />
        <StatCard label="Unverified" value={users.filter((u) => !u.emailVerified).length} icon={<Mail className="w-5 h-5" />} color="orange" />
      </div>

      {/* Users Table - Desktop */}
      <div className="hidden lg:block bg-[#151F32] rounded-xl border border-gray-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-400 border-b border-gray-800">
                <th className="px-6 py-4 font-medium">User</th>
                <th className="px-6 py-4 font-medium">Shop</th>
                <th className="px-6 py-4 font-medium">Role</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Email Verified</th>
                <th className="px-6 py-4 font-medium">Last Login</th>
                <th className="px-6 py-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <UserTableRow key={user.id} user={user} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Users Cards - Mobile/Tablet */}
      <div className="lg:hidden space-y-4">
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
        <p className="text-sm text-gray-400">
          Showing {filteredUsers.length} of {users.length} users
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
  color?: 'default' | 'primary' | 'blue' | 'orange';
}) {
  const colors = {
    default: 'bg-gray-500/10 text-gray-400',
    primary: 'bg-[#F5A623]/10 text-[#F5A623]',
    blue: 'bg-blue-500/10 text-blue-400',
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

function UserTableRow({ user }: { user: typeof users[0] }) {
  const roleStyles = {
    owner: 'bg-[#F5A623]/10 text-[#F5A623]',
    staff: 'bg-blue-500/10 text-blue-400',
  };

  const statusStyles = {
    active: 'bg-green-500/10 text-green-400',
    suspended: 'bg-red-500/10 text-red-400',
  };

  return (
    <tr className="border-b border-gray-800 last:border-0 hover:bg-[#1A2540] transition">
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#F5A623]/10 rounded-full flex items-center justify-center">
            <span className="text-sm font-semibold text-[#F5A623]">
              {user.name.split(' ').map((n) => n[0]).join('')}
            </span>
          </div>
          <div>
            <p className="font-medium text-white">{user.name}</p>
            <p className="text-xs text-gray-500">{user.email}</p>
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <Store className="w-4 h-4 text-gray-500" />
          <span className="text-white">{user.shop}</span>
        </div>
      </td>
      <td className="px-6 py-4">
        <span className={`text-xs px-2.5 py-1 rounded-lg capitalize ${roleStyles[user.role as keyof typeof roleStyles]}`}>
          {user.role}
        </span>
      </td>
      <td className="px-6 py-4">
        <span className={`text-xs px-2.5 py-1 rounded-lg capitalize ${statusStyles[user.status as keyof typeof statusStyles]}`}>
          {user.status}
        </span>
      </td>
      <td className="px-6 py-4">
        {user.emailVerified ? (
          <CheckCircle className="w-5 h-5 text-green-400" />
        ) : (
          <XCircle className="w-5 h-5 text-red-400" />
        )}
      </td>
      <td className="px-6 py-4 text-gray-400 text-sm">{user.lastLogin}</td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <button
            type="button"
            title="Send verification email"
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition"
          >
            <Mail className="w-4 h-4" />
          </button>
          <button
            type="button"
            title="Reset password"
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition"
          >
            <Key className="w-4 h-4" />
          </button>
          <button
            type="button"
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition"
          >
            <MoreVertical className="w-4 h-4" />
          </button>
        </div>
      </td>
    </tr>
  );
}

function UserCard({ user }: { user: typeof users[0] }) {
  const roleStyles = {
    owner: 'bg-[#F5A623]/10 text-[#F5A623]',
    staff: 'bg-blue-500/10 text-blue-400',
  };

  const statusStyles = {
    active: 'bg-green-500/10 text-green-400',
    suspended: 'bg-red-500/10 text-red-400',
  };

  return (
    <div className="bg-[#151F32] rounded-xl border border-gray-800 p-4">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-[#F5A623]/10 rounded-full flex items-center justify-center">
            <span className="text-sm font-semibold text-[#F5A623]">
              {user.name.split(' ').map((n) => n[0]).join('')}
            </span>
          </div>
          <div>
            <p className="font-medium text-white">{user.name}</p>
            <p className="text-sm text-gray-400">{user.email}</p>
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
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Store className="w-4 h-4" />
          <span>{user.shop}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Phone className="w-4 h-4" />
          <span>{user.phone}</span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-800">
        <div className="flex items-center gap-2">
          <span className={`text-xs px-2.5 py-1 rounded-lg capitalize ${roleStyles[user.role as keyof typeof roleStyles]}`}>
            {user.role}
          </span>
          <span className={`text-xs px-2.5 py-1 rounded-lg capitalize ${statusStyles[user.status as keyof typeof statusStyles]}`}>
            {user.status}
          </span>
        </div>
        <div className="flex items-center gap-1">
          {user.emailVerified ? (
            <CheckCircle className="w-4 h-4 text-green-400" />
          ) : (
            <XCircle className="w-4 h-4 text-red-400" />
          )}
          <span className="text-xs text-gray-500">
            {user.emailVerified ? 'Verified' : 'Unverified'}
          </span>
        </div>
      </div>
    </div>
  );
}
