'use client';

import { useState } from 'react';
import { Search, Plus, Shield, Users, Smartphone, Crown, X, Edit, Trash2, AlertCircle } from 'lucide-react';

const mockStaff = [
  { id: '1', name: 'Ahmed Khan', email: 'ahmed@store.com', role: 'admin', devices: 1, maxDevices: 2, status: 'active', lastActive: '2024-01-20' },
  { id: '2', name: 'Sara Ali', email: 'sara@store.com', role: 'staff', devices: 2, maxDevices: 2, status: 'active', lastActive: '2024-01-19' },
  { id: '3', name: 'Mohammed Hassan', email: 'mohammed@store.com', role: 'staff', devices: 1, maxDevices: 2, status: 'active', lastActive: '2024-01-18' },
];

const roles = [
  { id: 'admin', name: 'Admin (Owner)', description: 'Full access to all features', color: 'purple' },
  { id: 'staff', name: 'Staff', description: 'Limited access - POS, Orders, Inventory', color: 'blue' },
];

const permissions = {
  admin: ['Dashboard', 'POS', 'Orders', 'Products', 'Inventory', 'Purchases', 'Quotations', 'Expenses', 'Customers', 'WhatsApp', 'Reports', 'Staff & Roles', 'Billing', 'Settings'],
  staff: ['Dashboard', 'POS', 'Orders', 'Products', 'Inventory', 'Customers'],
};

export default function StaffPage() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('all');

  const filteredStaff = mockStaff.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) || s.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = selectedRole === 'all' || s.role === selectedRole;
    return matchesSearch && matchesRole;
  });

  const totalStaff = mockStaff.length;
  const adminCount = mockStaff.filter(s => s.role === 'admin').length;
  const staffCount = mockStaff.filter(s => s.role === 'staff').length;
  const activeDevices = mockStaff.reduce((sum, s) => sum + s.devices, 0);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Staff & Roles</h1>
          <p className="text-muted-foreground text-sm">Manage your team members and permissions</p>
        </div>
        <button
          type="button"
          onClick={() => setShowAddModal(true)}
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition"
        >
          <Plus className="w-4 h-4" />
          Add Staff
        </button>
      </div>

      {/* Pricing Notice */}
      <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-medium text-foreground">Staff Pricing</p>
          <p className="text-xs text-muted-foreground mt-1">Your plan includes 2 staff members. Additional staff members cost <span className="font-semibold text-foreground">59 AED/month</span> each. Each user can login on up to 2 devices.</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{totalStaff}</p>
              <p className="text-xs text-muted-foreground">Total Staff</p>
            </div>
          </div>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
              <Crown className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{adminCount}</p>
              <p className="text-xs text-muted-foreground">Admins</p>
            </div>
          </div>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{staffCount}</p>
              <p className="text-xs text-muted-foreground">Staff Members</p>
            </div>
          </div>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center">
              <Smartphone className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{activeDevices}</p>
              <p className="text-xs text-muted-foreground">Active Devices</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-card rounded-xl border border-border p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search staff..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground"
            />
          </div>
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="px-4 py-2.5 bg-muted border border-border rounded-lg text-foreground"
          >
            <option value="all">All Roles</option>
            <option value="admin">Admin</option>
            <option value="staff">Staff</option>
          </select>
        </div>
      </div>

      {/* Staff List */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground">Staff Member</th>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground">Role</th>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground">Devices</th>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground">Status</th>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground">Last Active</th>
                <th className="text-center p-4 text-sm font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredStaff.map((staff) => (
                <tr key={staff.id} className="hover:bg-muted/30 transition">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary font-semibold">{staff.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{staff.name}</p>
                        <p className="text-xs text-muted-foreground">{staff.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`text-xs px-2.5 py-1 rounded-full ${
                      staff.role === 'admin'
                        ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400'
                        : 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                    }`}>
                      {staff.role === 'admin' ? 'Admin' : 'Staff'}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <Smartphone className="w-4 h-4 text-muted-foreground" />
                      <span className="text-foreground">{staff.devices}/{staff.maxDevices}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="text-xs px-2.5 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-400">
                      Active
                    </span>
                  </td>
                  <td className="p-4 text-muted-foreground text-sm">{staff.lastActive}</td>
                  <td className="p-4">
                    <div className="flex items-center justify-center gap-1">
                      <button type="button" className="p-2 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground">
                        <Edit className="w-4 h-4" />
                      </button>
                      {staff.role !== 'admin' && (
                        <button type="button" className="p-2 hover:bg-red-500/10 rounded-lg text-muted-foreground hover:text-red-600">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile */}
        <div className="md:hidden divide-y divide-border">
          {filteredStaff.map((staff) => (
            <div key={staff.id} className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">{staff.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{staff.name}</p>
                    <p className="text-xs text-muted-foreground">{staff.email}</p>
                  </div>
                </div>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  staff.role === 'admin'
                    ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400'
                    : 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                }`}>
                  {staff.role === 'admin' ? 'Admin' : 'Staff'}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Smartphone className="w-3.5 h-3.5" />
                    {staff.devices}/{staff.maxDevices} devices
                  </span>
                  <span className="text-green-600 dark:text-green-400">Active</span>
                </div>
                <span>{staff.lastActive}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Role Permissions */}
      <div className="bg-card rounded-xl border border-border p-4">
        <h3 className="font-semibold text-foreground mb-4">Role Permissions</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {roles.map((role) => (
            <div key={role.id} className="bg-muted/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className={`w-2 h-2 rounded-full ${role.id === 'admin' ? 'bg-purple-500' : 'bg-blue-500'}`} />
                <h4 className="font-medium text-foreground">{role.name}</h4>
              </div>
              <p className="text-xs text-muted-foreground mb-3">{role.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {permissions[role.id as keyof typeof permissions].map((perm) => (
                  <span key={perm} className="text-xs px-2 py-0.5 bg-background border border-border rounded text-muted-foreground">
                    {perm}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Staff Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-xl border border-border w-full max-w-md">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h2 className="text-lg font-semibold text-foreground">Add Staff Member</h2>
              <button type="button" onClick={() => setShowAddModal(false)} className="p-2 hover:bg-muted rounded-lg">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 space-y-4">
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-3">
                <p className="text-xs text-muted-foreground">
                  Adding a new staff member will cost <span className="font-semibold text-foreground">59 AED/month</span> if you exceed your plan limit.
                </p>
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Full Name</label>
                <input type="text" placeholder="Enter staff name" className="w-full px-3 py-2.5 bg-muted border border-border rounded-lg text-foreground" />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Email Address</label>
                <input type="email" placeholder="staff@example.com" className="w-full px-3 py-2.5 bg-muted border border-border rounded-lg text-foreground" />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Role</label>
                <select className="w-full px-3 py-2.5 bg-muted border border-border rounded-lg text-foreground">
                  <option value="staff">Staff - Limited access</option>
                  <option value="admin">Admin - Full access</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Temporary Password</label>
                <input type="text" placeholder="Create password" className="w-full px-3 py-2.5 bg-muted border border-border rounded-lg text-foreground" />
                <p className="text-xs text-muted-foreground mt-1">Staff will be asked to change this on first login</p>
              </div>
              <div className="flex gap-3">
                <button type="button" onClick={() => setShowAddModal(false)} className="flex-1 py-3 border border-border rounded-lg text-foreground hover:bg-muted">
                  Cancel
                </button>
                <button type="button" className="flex-1 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90">
                  Add Staff
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
