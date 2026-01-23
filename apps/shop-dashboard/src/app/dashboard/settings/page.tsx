'use client';

import { useState } from 'react';
import {
  Settings,
  Shield,
  Bell,
  Globe,
  Lock,
  Receipt,
  Percent,
  Calculator,
} from 'lucide-react';

type SettingsTab = 'general' | 'tax' | 'security' | 'notifications';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<SettingsTab>('general');

  // Settings state
  const [settings, setSettings] = useState({
    language: 'en',
    currency: 'AED',
    timezone: 'Asia/Dubai',
    theme: 'system',
    // Tax settings
    vatEnabled: true,
    vatRate: 5,
    pricesIncludeVat: true, // Most UAE shops set prices with VAT already included
    showVatBreakdown: true, // Show VAT breakdown on receipt
    // Notifications
    emailNotifications: true,
    pushNotifications: true,
    orderAlerts: true,
    lowStockAlerts: true,
    twoFactorEnabled: false,
  });

  const tabs = [
    { id: 'general' as SettingsTab, label: 'General', icon: Settings },
    { id: 'tax' as SettingsTab, label: 'Tax & VAT', icon: Receipt },
    { id: 'security' as SettingsTab, label: 'Security', icon: Shield },
    { id: 'notifications' as SettingsTab, label: 'Notifications', icon: Bell },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground text-sm">Manage your shop preferences</p>
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

      {/* Tax & VAT Settings */}
      {activeTab === 'tax' && (
        <div className="space-y-6">
          {/* VAT Configuration */}
          <div className="bg-card rounded-xl border border-border p-6">
            <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Percent className="w-5 h-5 text-primary" />
              VAT Configuration
            </h2>

            {/* UAE VAT Info */}
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-6">
              <p className="text-sm text-foreground font-medium">UAE VAT Rate: 5%</p>
              <p className="text-xs text-muted-foreground mt-1">
                Standard VAT rate in UAE is 5%. This is applied to most goods and services.
              </p>
            </div>

            <div className="space-y-6">
              {/* VAT Enabled Toggle */}
              <div className="flex items-center justify-between py-3 border-b border-border">
                <div>
                  <p className="font-medium text-foreground">Enable VAT</p>
                  <p className="text-sm text-muted-foreground">Apply VAT to transactions</p>
                </div>
                <button
                  type="button"
                  onClick={() => setSettings({ ...settings, vatEnabled: !settings.vatEnabled })}
                  className={`relative w-12 h-6 rounded-full transition ${
                    settings.vatEnabled ? 'bg-primary' : 'bg-muted'
                  }`}
                >
                  <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
                    settings.vatEnabled ? 'left-7' : 'left-1'
                  }`} />
                </button>
              </div>

              {settings.vatEnabled && (
                <>
                  {/* VAT Rate */}
                  <div>
                    <label htmlFor="vatRate" className="text-sm text-muted-foreground mb-1.5 block">VAT Rate (%)</label>
                    <select
                      id="vatRate"
                      title="VAT Rate"
                      value={settings.vatRate}
                      onChange={(e) => setSettings({ ...settings, vatRate: Number(e.target.value) })}
                      className="w-full sm:w-48 px-3 py-2.5 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground"
                    >
                      <option value={0}>0% (Exempt)</option>
                      <option value={5}>5% (UAE Standard)</option>
                    </select>
                  </div>

                  {/* Prices Include VAT - IMPORTANT SETTING */}
                  <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Calculator className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                          <p className="font-semibold text-foreground">Prices Include VAT</p>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          {settings.pricesIncludeVat
                            ? "Your product prices already include VAT. No extra VAT will be added at checkout."
                            : "Your product prices do NOT include VAT. 5% VAT will be added at checkout."
                          }
                        </p>
                        <div className="bg-background/50 rounded-lg p-3 text-xs">
                          <p className="font-medium text-foreground mb-1">Example: iPhone priced at 4,299 AED</p>
                          {settings.pricesIncludeVat ? (
                            <div className="text-muted-foreground space-y-0.5">
                              <p>• Customer pays: <span className="text-foreground font-medium">4,299 AED</span></p>
                              <p>• VAT included: <span className="text-foreground">204.71 AED</span></p>
                              <p>• Net price: <span className="text-foreground">4,094.29 AED</span></p>
                            </div>
                          ) : (
                            <div className="text-muted-foreground space-y-0.5">
                              <p>• Product price: <span className="text-foreground">4,299 AED</span></p>
                              <p>• VAT (5%): <span className="text-foreground">+214.95 AED</span></p>
                              <p>• Customer pays: <span className="text-foreground font-medium">4,513.95 AED</span></p>
                            </div>
                          )}
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setSettings({ ...settings, pricesIncludeVat: !settings.pricesIncludeVat })}
                        className={`relative w-14 h-7 rounded-full transition flex-shrink-0 ${
                          settings.pricesIncludeVat ? 'bg-green-500' : 'bg-muted'
                        }`}
                      >
                        <div className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-all shadow ${
                          settings.pricesIncludeVat ? 'left-8' : 'left-1'
                        }`} />
                      </button>
                    </div>
                    <p className="text-xs text-amber-600 dark:text-amber-400 mt-3 font-medium">
                      {settings.pricesIncludeVat ? '✓ Recommended for UAE retail shops' : '⚠️ VAT will be added to all prices at checkout'}
                    </p>
                  </div>

                  {/* Show VAT Breakdown */}
                  <div className="flex items-center justify-between py-3">
                    <div>
                      <p className="font-medium text-foreground">Show VAT Breakdown on Receipt</p>
                      <p className="text-sm text-muted-foreground">Display VAT amount separately on invoices</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSettings({ ...settings, showVatBreakdown: !settings.showVatBreakdown })}
                      className={`relative w-12 h-6 rounded-full transition ${
                        settings.showVatBreakdown ? 'bg-primary' : 'bg-muted'
                      }`}
                    >
                      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
                        settings.showVatBreakdown ? 'left-7' : 'left-1'
                      }`} />
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Tax Registration Info */}
          <div className="bg-card rounded-xl border border-border p-6">
            <h2 className="text-lg font-semibold text-foreground mb-4">Tax Registration</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">TRN (Tax Registration Number)</label>
                <input
                  type="text"
                  placeholder="100123456789003"
                  className="w-full px-3 py-2.5 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground"
                />
                <p className="text-xs text-muted-foreground mt-1">15-digit TRN from Federal Tax Authority</p>
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Trade License Number</label>
                <input
                  type="text"
                  placeholder="TL-2024-123456"
                  className="w-full px-3 py-2.5 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground"
                />
              </div>
            </div>
            <button
              type="button"
              className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition"
            >
              Save Tax Info
            </button>
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
    </div>
  );
}
