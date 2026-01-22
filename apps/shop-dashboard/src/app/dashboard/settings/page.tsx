'use client';

import { useState } from 'react';
import {
  Settings,
  User,
  Shield,
  Bell,
  Smartphone,
  Globe,
  Palette,
  Users,
  Plus,
  Edit,
  Trash2,
  X,
  Check,
  AlertTriangle,
  Lock,
  Mail,
  Key,
  Monitor,
  Clock,
  Crown,
  UserPlus,
} from 'lucide-react';

// Mock staff data
const mockStaff = [
  {
    id: '1',
    name: 'Ahmad Al-Rashid',
    email: 'ahmad@albareek.ae',
    phone: '+971501234567',
    role: 'admin',
    status: 'active',
    devices: 2,
    maxDevices: 2,
    lastLogin: '2024-01-20 14:30',
    createdAt: '2023-06-15',
  },
  {
    id: '2',
    name: 'Mohammed Saleh',
    email: 'mohammed@albareek.ae',
    phone: '+971502345678',
    role: 'staff',
    status: 'active',
    devices: 1,
    maxDevices: 2,
    lastLogin: '2024-01-20 10:15',
    createdAt: '2023-08-20',
  },
  {
    id: '3',
    name: 'Sara Ahmed',
    email: 'sara@albareek.ae',
    phone: '+971503456789',
    role: 'staff',
    status: 'inactive',
    devices: 0,
    maxDevices: 2,
    lastLogin: '2024-01-15 16:45',
    createdAt: '2023-11-10',
  },
];

type SettingsTab = 'general' | 'staff' | 'security' | 'notifications';

interface StaffForm {
  name: string;
  email: string;
  phone: string;
  role: 'admin' | 'staff';
}

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<SettingsTab>('general');
  const [showAddStaffModal, setShowAddStaffModal] = useState(false);
  const [editingStaff, setEditingStaff] = useState<typeof mockStaff[0] | null>(null);
  const [staffForm, setStaffForm] = useState<StaffForm>({
    name: '',
    email: '',
    phone: '',
    role: 'staff',
  });

  // Settings state
  const [settings, setSettings] = useState({
    language: 'en',
    currency: 'AED',
    timezone: 'Asia/Dubai',
    theme: 'system',
    emailNotifications: true,
    pushNotifications: true,
    orderAlerts: true,
    lowStockAlerts: true,
    twoFactorEnabled: false,
  });

  // Plan limits (mock)
  const planLimits = {
    staffIncluded: 2,
    extraStaff: 1,
    totalStaff: 3,
    staffUsed: 3,
    extraStaffCost: 59,
  };

  const tabs = [
    { id: 'general' as SettingsTab, label: 'General', icon: Settings },
    { id: 'staff' as SettingsTab, label: 'Staff & Roles', icon: Users },
    { id: 'security' as SettingsTab, label: 'Security', icon: Shield },
    { id: 'notifications' as SettingsTab, label: 'Notifications', icon: Bell },
  ];

  const handleOpenAddStaff = () => {
    setStaffForm({ name: '', email: '', phone: '', role: 'staff' });
    setEditingStaff(null);
    setShowAddStaffModal(true);
  };

  const handleOpenEditStaff = (staff: typeof mockStaff[0]) => {
    setStaffForm({
      name: staff.name,
      email: staff.email,
      phone: staff.phone,
      role: staff.role as 'admin' | 'staff',
    });
    setEditingStaff(staff);
    setShowAddStaffModal(true);
  };

  const handleSaveStaff = () => {
    console.log('Saving staff:', staffForm, editingStaff ? 'Update' : 'Create');
    setShowAddStaffModal(false);
    setEditingStaff(null);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-AE', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground text-sm">Manage your shop preferences and team</p>
      </div>

      {/* Tabs */}
      <div className="bg-card rounded-xl border border-border p-1.5">
        <div className="flex gap-1 overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition ${
                  activeTab === tab.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* General Settings */}
      {activeTab === 'general' && (
        <div className="space-y-6">
          <div className="bg-card rounded-xl border border-border p-6">
            <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5 text-primary" />
              Regional Settings
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Language</label>
                <select
                  value={settings.language}
                  onChange={(e) => setSettings({ ...settings, language: e.target.value })}
                  className="w-full px-3 py-2.5 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground"
                >
                  <option value="en">English</option>
                  <option value="ar">Arabic</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Currency</label>
                <select
                  value={settings.currency}
                  onChange={(e) => setSettings({ ...settings, currency: e.target.value })}
                  className="w-full px-3 py-2.5 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground"
                >
                  <option value="AED">AED - UAE Dirham</option>
                  <option value="SAR">SAR - Saudi Riyal</option>
                  <option value="USD">USD - US Dollar</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Timezone</label>
                <select
                  value={settings.timezone}
                  onChange={(e) => setSettings({ ...settings, timezone: e.target.value })}
                  className="w-full px-3 py-2.5 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground"
                >
                  <option value="Asia/Dubai">Dubai (GMT+4)</option>
                  <option value="Asia/Riyadh">Riyadh (GMT+3)</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Theme</label>
                <select
                  value={settings.theme}
                  onChange={(e) => setSettings({ ...settings, theme: e.target.value })}
                  className="w-full px-3 py-2.5 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground"
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                  <option value="system">System</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Staff & Roles */}
      {activeTab === 'staff' && (
        <div className="space-y-6">
          {/* Staff Limits */}
          <div className="bg-card rounded-xl border border-border p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-foreground mb-1">Staff Accounts</h2>
                <p className="text-sm text-muted-foreground">
                  {planLimits.staffUsed} of {planLimits.totalStaff} staff accounts used
                  {planLimits.extraStaff > 0 && (
                    <span className="text-primary"> (includes {planLimits.extraStaff} extra)</span>
                  )}
                </p>
              </div>
              <button
                type="button"
                onClick={handleOpenAddStaff}
                disabled={planLimits.staffUsed >= planLimits.totalStaff}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <UserPlus className="w-4 h-4" />
                Add Staff
              </button>
            </div>

            {/* Progress Bar */}
            <div className="mt-4">
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${
                    planLimits.staffUsed >= planLimits.totalStaff ? 'bg-orange-500' : 'bg-primary'
                  }`}
                  style={{ width: `${(planLimits.staffUsed / planLimits.totalStaff) * 100}%` }}
                />
              </div>
            </div>

            {planLimits.staffUsed >= planLimits.totalStaff && (
              <div className="mt-4 bg-orange-500/10 border border-orange-500/20 rounded-lg p-3 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <span className="text-foreground font-medium">Staff limit reached.</span>
                  <span className="text-muted-foreground"> Add extra staff for </span>
                  <span className="text-primary font-medium">59 AED/month</span>
                  <span className="text-muted-foreground"> each in Billing.</span>
                </div>
              </div>
            )}
          </div>

          {/* Device Limit Info */}
          <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <Smartphone className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium text-foreground">Device Limit</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Each staff member can log in on up to <span className="font-bold text-foreground">2 devices</span> simultaneously.
                  This includes mobile phones, tablets, and computers.
                </p>
              </div>
            </div>
          </div>

          {/* Staff List */}
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <div className="p-4 border-b border-border">
              <h2 className="font-semibold text-foreground">Team Members</h2>
            </div>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Member</th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Role</th>
                    <th className="text-center p-4 text-sm font-medium text-muted-foreground">Devices</th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Last Login</th>
                    <th className="text-center p-4 text-sm font-medium text-muted-foreground">Status</th>
                    <th className="text-center p-4 text-sm font-medium text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {mockStaff.map((staff) => (
                    <tr key={staff.id} className="hover:bg-muted/30 transition">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            {staff.role === 'admin' ? (
                              <Crown className="w-5 h-5 text-primary" />
                            ) : (
                              <User className="w-5 h-5 text-primary" />
                            )}
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{staff.name}</p>
                            <p className="text-xs text-muted-foreground">{staff.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className={`text-xs px-2.5 py-1 rounded-full capitalize ${
                          staff.role === 'admin'
                            ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400'
                            : 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                        }`}>
                          {staff.role === 'admin' ? 'Admin (Owner)' : 'Staff'}
                        </span>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex items-center justify-center gap-1">
                          <Monitor className="w-4 h-4 text-muted-foreground" />
                          <span className={`font-medium ${
                            staff.devices >= staff.maxDevices
                              ? 'text-orange-600 dark:text-orange-400'
                              : 'text-foreground'
                          }`}>
                            {staff.devices}/{staff.maxDevices}
                          </span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          {staff.lastLogin}
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <span className={`text-xs px-2.5 py-1 rounded-full capitalize ${
                          staff.status === 'active'
                            ? 'bg-green-500/10 text-green-600 dark:text-green-400'
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {staff.status}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center justify-center gap-1">
                          <button
                            type="button"
                            onClick={() => handleOpenEditStaff(staff)}
                            className="p-2 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground transition"
                            title="Edit"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          {staff.role !== 'admin' && (
                            <button
                              type="button"
                              className="p-2 hover:bg-red-500/10 rounded-lg text-muted-foreground hover:text-red-600 dark:hover:text-red-400 transition"
                              title="Remove"
                            >
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

            {/* Mobile Card View */}
            <div className="md:hidden divide-y divide-border">
              {mockStaff.map((staff) => (
                <div key={staff.id} className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        {staff.role === 'admin' ? (
                          <Crown className="w-5 h-5 text-primary" />
                        ) : (
                          <User className="w-5 h-5 text-primary" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{staff.name}</p>
                        <p className="text-xs text-muted-foreground">{staff.email}</p>
                      </div>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full capitalize ${
                      staff.status === 'active'
                        ? 'bg-green-500/10 text-green-600 dark:text-green-400'
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {staff.status}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm mb-3">
                    <span className={`px-2 py-0.5 rounded text-xs ${
                      staff.role === 'admin'
                        ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400'
                        : 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                    }`}>
                      {staff.role === 'admin' ? 'Admin' : 'Staff'}
                    </span>
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Monitor className="w-3 h-3" />
                      {staff.devices}/{staff.maxDevices} devices
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => handleOpenEditStaff(staff)}
                      className="flex-1 py-2 bg-muted text-foreground rounded-lg text-sm font-medium hover:bg-muted/80 transition"
                    >
                      Edit
                    </button>
                    {staff.role !== 'admin' && (
                      <button
                        type="button"
                        className="px-4 py-2 bg-red-500/10 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-500/20 transition"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Permissions Info */}
          <div className="bg-card rounded-xl border border-border p-6">
            <h2 className="text-lg font-semibold text-foreground mb-4">Role Permissions</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-purple-500/5 border border-purple-500/20 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Crown className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <span className="font-medium text-foreground">Admin (Owner)</span>
                </div>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><Check className="w-3 h-3 text-green-500" /> Full system access</li>
                  <li className="flex items-center gap-2"><Check className="w-3 h-3 text-green-500" /> Manage staff & roles</li>
                  <li className="flex items-center gap-2"><Check className="w-3 h-3 text-green-500" /> View all reports</li>
                  <li className="flex items-center gap-2"><Check className="w-3 h-3 text-green-500" /> Billing & subscription</li>
                  <li className="flex items-center gap-2"><Check className="w-3 h-3 text-green-500" /> Delete data</li>
                </ul>
              </div>
              <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <User className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="font-medium text-foreground">Staff</span>
                </div>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><Check className="w-3 h-3 text-green-500" /> POS & billing</li>
                  <li className="flex items-center gap-2"><Check className="w-3 h-3 text-green-500" /> View products</li>
                  <li className="flex items-center gap-2"><Check className="w-3 h-3 text-green-500" /> View orders</li>
                  <li className="flex items-center gap-2"><Check className="w-3 h-3 text-green-500" /> Basic inventory</li>
                  <li className="flex items-center gap-2"><X className="w-3 h-3 text-red-500" /> No admin access</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Security */}
      {activeTab === 'security' && (
        <div className="space-y-6">
          <div className="bg-card rounded-xl border border-border p-6">
            <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Lock className="w-5 h-5 text-primary" />
              Password
            </h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Current Password</label>
                <input
                  type="password"
                  placeholder="Enter current password"
                  className="w-full px-3 py-2.5 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">New Password</label>
                  <input
                    type="password"
                    placeholder="Enter new password"
                    className="w-full px-3 py-2.5 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Confirm Password</label>
                  <input
                    type="password"
                    placeholder="Confirm new password"
                    className="w-full px-3 py-2.5 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground"
                  />
                </div>
              </div>
              <button
                type="button"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition"
              >
                Update Password
              </button>
            </div>
          </div>

          <div className="bg-card rounded-xl border border-border p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Two-Factor Authentication</h3>
                  <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSettings({ ...settings, twoFactorEnabled: !settings.twoFactorEnabled })}
                className={`relative w-12 h-6 rounded-full transition ${
                  settings.twoFactorEnabled ? 'bg-primary' : 'bg-muted'
                }`}
              >
                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
                  settings.twoFactorEnabled ? 'left-7' : 'left-1'
                }`} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Notifications */}
      {activeTab === 'notifications' && (
        <div className="space-y-6">
          <div className="bg-card rounded-xl border border-border p-6">
            <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Bell className="w-5 h-5 text-primary" />
              Notification Preferences
            </h2>
            <div className="space-y-4">
              {[
                { key: 'emailNotifications', label: 'Email Notifications', desc: 'Receive updates via email' },
                { key: 'pushNotifications', label: 'Push Notifications', desc: 'Browser push notifications' },
                { key: 'orderAlerts', label: 'Order Alerts', desc: 'Get notified for new orders' },
                { key: 'lowStockAlerts', label: 'Low Stock Alerts', desc: 'Alert when stock is low' },
              ].map((item) => (
                <div key={item.key} className="flex items-center justify-between py-2">
                  <div>
                    <p className="font-medium text-foreground">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSettings({ ...settings, [item.key]: !settings[item.key as keyof typeof settings] })}
                    className={`relative w-12 h-6 rounded-full transition ${
                      settings[item.key as keyof typeof settings] ? 'bg-primary' : 'bg-muted'
                    }`}
                  >
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
                      settings[item.key as keyof typeof settings] ? 'left-7' : 'left-1'
                    }`} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Add/Edit Staff Modal */}
      {showAddStaffModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-xl border border-border w-full max-w-md">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h2 className="text-lg font-semibold text-foreground">
                {editingStaff ? 'Edit Staff Member' : 'Add Staff Member'}
              </h2>
              <button
                type="button"
                onClick={() => setShowAddStaffModal(false)}
                className="p-2 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 space-y-4">
              {!editingStaff && (
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 text-sm">
                  <span className="text-foreground font-medium">Cost: </span>
                  <span className="text-muted-foreground">
                    {planLimits.staffUsed < planLimits.staffIncluded
                      ? 'Included in your plan'
                      : '59 AED/month (extra staff)'}
                  </span>
                </div>
              )}

              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Full Name *</label>
                <input
                  type="text"
                  value={staffForm.name}
                  onChange={(e) => setStaffForm({ ...staffForm, name: e.target.value })}
                  placeholder="Enter staff name"
                  className="w-full px-3 py-2.5 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground"
                />
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Email *</label>
                <input
                  type="email"
                  value={staffForm.email}
                  onChange={(e) => setStaffForm({ ...staffForm, email: e.target.value })}
                  placeholder="staff@yourshop.com"
                  className="w-full px-3 py-2.5 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground"
                />
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Phone</label>
                <input
                  type="tel"
                  value={staffForm.phone}
                  onChange={(e) => setStaffForm({ ...staffForm, phone: e.target.value })}
                  placeholder="+971 50 123 4567"
                  className="w-full px-3 py-2.5 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground"
                />
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Role *</label>
                <select
                  value={staffForm.role}
                  onChange={(e) => setStaffForm({ ...staffForm, role: e.target.value as 'admin' | 'staff' })}
                  className="w-full px-3 py-2.5 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground"
                  disabled={editingStaff?.role === 'admin'}
                >
                  <option value="staff">Staff (Limited Access)</option>
                  <option value="admin">Admin (Full Access)</option>
                </select>
              </div>

              <div className="bg-muted/50 rounded-lg p-3 text-sm text-muted-foreground">
                <p>This staff member will be able to log in on up to <span className="font-medium text-foreground">2 devices</span> simultaneously.</p>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddStaffModal(false)}
                  className="flex-1 py-3 border border-border rounded-lg text-foreground hover:bg-muted transition"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSaveStaff}
                  disabled={!staffForm.name || !staffForm.email}
                  className="flex-1 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {editingStaff ? 'Update' : 'Add Staff'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
