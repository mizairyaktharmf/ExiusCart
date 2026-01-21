'use client';

import { useState } from 'react';
import {
  Settings,
  Bell,
  Shield,
  Globe,
  Mail,
  CreditCard,
  Database,
  Save,
  Eye,
  EyeOff,
  Check,
  AlertCircle,
  Smartphone,
  Server,
} from 'lucide-react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('general');
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const tabs = [
    { id: 'general', label: 'General', icon: <Settings className="w-4 h-4" /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell className="w-4 h-4" /> },
    { id: 'security', label: 'Security', icon: <Shield className="w-4 h-4" /> },
    { id: 'payment', label: 'Payment', icon: <CreditCard className="w-4 h-4" /> },
    { id: 'api', label: 'API & Integrations', icon: <Database className="w-4 h-4" /> },
  ];

  return (
    <div>
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Settings</h1>
          <p className="text-gray-400 text-sm mt-1">Manage platform configuration and preferences</p>
        </div>
        <button
          type="button"
          onClick={handleSave}
          className="inline-flex items-center justify-center gap-2 bg-[#F5A623] hover:bg-[#E09612] text-black font-semibold px-4 py-2.5 rounded-lg transition w-full sm:w-auto"
        >
          <Save className="w-5 h-5" />
          Save Changes
        </button>
      </div>

      {/* Success Alert */}
      {saved && (
        <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 mb-6">
          <div className="flex items-center gap-3">
            <Check className="w-5 h-5 text-green-400" />
            <p className="text-green-400 font-medium">Settings saved successfully!</p>
          </div>
        </div>
      )}

      {/* Tabs Navigation */}
      <div className="bg-[#151F32] rounded-xl border border-gray-800 p-2 mb-6 overflow-x-auto">
        <div className="flex gap-1 min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium transition whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-[#F5A623] text-black'
                  : 'text-gray-400 hover:text-white hover:bg-[#1A2540]'
              }`}
            >
              {tab.icon}
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="space-y-6">
        {activeTab === 'general' && <GeneralSettings />}
        {activeTab === 'notifications' && <NotificationSettings />}
        {activeTab === 'security' && <SecuritySettings />}
        {activeTab === 'payment' && <PaymentSettings />}
        {activeTab === 'api' && <APISettings />}
      </div>
    </div>
  );
}

function GeneralSettings() {
  return (
    <div className="space-y-6">
      {/* Platform Info */}
      <SettingsSection title="Platform Information" icon={<Globe className="w-5 h-5" />}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField label="Platform Name" defaultValue="ExiusCart" />
          <InputField label="Support Email" defaultValue="support@exiuscart.com" type="email" />
          <InputField label="Contact Phone" defaultValue="+971 4 123 4567" />
          <InputField label="Website URL" defaultValue="https://exiuscart.com" />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-400 mb-2">Platform Description</label>
          <textarea
            className="w-full px-4 py-3 bg-[#0B1121] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#F5A623] focus:outline-none transition resize-none"
            rows={3}
            defaultValue="Multi-tenant SaaS platform for UAE mobile shop businesses"
          />
        </div>
      </SettingsSection>

      {/* Regional Settings */}
      <SettingsSection title="Regional Settings" icon={<Globe className="w-5 h-5" />}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SelectField
            label="Default Currency"
            options={[
              { value: 'AED', label: 'AED - UAE Dirham' },
              { value: 'USD', label: 'USD - US Dollar' },
              { value: 'SAR', label: 'SAR - Saudi Riyal' },
            ]}
            defaultValue="AED"
          />
          <SelectField
            label="Default Language"
            options={[
              { value: 'en', label: 'English' },
              { value: 'ar', label: 'Arabic' },
            ]}
            defaultValue="en"
          />
          <SelectField
            label="Timezone"
            options={[
              { value: 'Asia/Dubai', label: 'Dubai (GMT+4)' },
              { value: 'Asia/Riyadh', label: 'Riyadh (GMT+3)' },
            ]}
            defaultValue="Asia/Dubai"
          />
          <SelectField
            label="Date Format"
            options={[
              { value: 'DD/MM/YYYY', label: 'DD/MM/YYYY' },
              { value: 'MM/DD/YYYY', label: 'MM/DD/YYYY' },
              { value: 'YYYY-MM-DD', label: 'YYYY-MM-DD' },
            ]}
            defaultValue="DD/MM/YYYY"
          />
        </div>
      </SettingsSection>

      {/* Trial Settings */}
      <SettingsSection title="Trial Settings" icon={<Smartphone className="w-5 h-5" />}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField label="Trial Duration (days)" type="number" defaultValue="14" />
          <InputField label="Trial Invoices Limit" type="number" defaultValue="50" />
        </div>
        <div className="mt-4">
          <ToggleField
            label="Enable Auto-Trial"
            description="Automatically enable trial for new shop registrations"
            defaultChecked={true}
          />
        </div>
      </SettingsSection>
    </div>
  );
}

function NotificationSettings() {
  return (
    <div className="space-y-6">
      {/* Email Notifications */}
      <SettingsSection title="Email Notifications" icon={<Mail className="w-5 h-5" />}>
        <div className="space-y-4">
          <ToggleField
            label="New Shop Registration"
            description="Receive email when a new shop registers"
            defaultChecked={true}
          />
          <ToggleField
            label="Payment Received"
            description="Receive email for successful payments"
            defaultChecked={true}
          />
          <ToggleField
            label="Payment Pending Approval"
            description="Receive email when bank transfer needs approval"
            defaultChecked={true}
          />
          <ToggleField
            label="Subscription Expiring"
            description="Receive email for subscriptions expiring in 7 days"
            defaultChecked={true}
          />
          <ToggleField
            label="Support Tickets"
            description="Receive email for new support tickets"
            defaultChecked={false}
          />
        </div>
      </SettingsSection>

      {/* Admin Alerts */}
      <SettingsSection title="Admin Alerts" icon={<AlertCircle className="w-5 h-5" />}>
        <div className="space-y-4">
          <ToggleField
            label="System Errors"
            description="Alert when system errors occur"
            defaultChecked={true}
          />
          <ToggleField
            label="High Traffic Warning"
            description="Alert when traffic exceeds normal levels"
            defaultChecked={true}
          />
          <ToggleField
            label="Failed Login Attempts"
            description="Alert for multiple failed login attempts"
            defaultChecked={true}
          />
        </div>
      </SettingsSection>

      {/* Notification Recipients */}
      <SettingsSection title="Notification Recipients" icon={<Mail className="w-5 h-5" />}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField label="Primary Email" defaultValue="admin@exiuscart.com" type="email" />
          <InputField label="Secondary Email" defaultValue="" type="email" placeholder="Optional backup email" />
        </div>
      </SettingsSection>
    </div>
  );
}

function SecuritySettings() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-6">
      {/* Password Policy */}
      <SettingsSection title="Password Policy" icon={<Shield className="w-5 h-5" />}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField label="Minimum Password Length" type="number" defaultValue="8" />
          <InputField label="Password Expiry (days)" type="number" defaultValue="90" />
        </div>
        <div className="mt-4 space-y-4">
          <ToggleField
            label="Require Uppercase Letters"
            description="Password must contain at least one uppercase letter"
            defaultChecked={true}
          />
          <ToggleField
            label="Require Numbers"
            description="Password must contain at least one number"
            defaultChecked={true}
          />
          <ToggleField
            label="Require Special Characters"
            description="Password must contain at least one special character"
            defaultChecked={false}
          />
        </div>
      </SettingsSection>

      {/* Session Settings */}
      <SettingsSection title="Session Settings" icon={<Server className="w-5 h-5" />}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField label="Session Timeout (minutes)" type="number" defaultValue="30" />
          <InputField label="Max Active Sessions" type="number" defaultValue="3" />
        </div>
        <div className="mt-4">
          <ToggleField
            label="Force Single Session"
            description="Logout from other devices when logging in"
            defaultChecked={false}
          />
        </div>
      </SettingsSection>

      {/* Two-Factor Authentication */}
      <SettingsSection title="Two-Factor Authentication" icon={<Shield className="w-5 h-5" />}>
        <div className="space-y-4">
          <ToggleField
            label="Require 2FA for Admins"
            description="Force two-factor authentication for all admin users"
            defaultChecked={true}
          />
          <ToggleField
            label="Require 2FA for Shop Owners"
            description="Force two-factor authentication for shop owners"
            defaultChecked={false}
          />
        </div>
      </SettingsSection>

      {/* Change Admin Password */}
      <SettingsSection title="Change Admin Password" icon={<Shield className="w-5 h-5" />}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-400 mb-2">Current Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                className="w-full px-4 py-2.5 bg-[#0B1121] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#F5A623] focus:outline-none transition pr-12"
                placeholder="Enter current password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>
          <InputField label="New Password" type="password" placeholder="Enter new password" />
        </div>
      </SettingsSection>
    </div>
  );
}

function PaymentSettings() {
  return (
    <div className="space-y-6">
      {/* Payment Methods */}
      <SettingsSection title="Payment Methods" icon={<CreditCard className="w-5 h-5" />}>
        <div className="space-y-4">
          <ToggleField
            label="Credit/Debit Cards"
            description="Accept Visa, Mastercard, and other cards via Stripe"
            defaultChecked={true}
          />
          <ToggleField
            label="Bank Transfer"
            description="Accept manual bank transfers with proof upload"
            defaultChecked={true}
          />
          <ToggleField
            label="Apple Pay"
            description="Accept Apple Pay payments"
            defaultChecked={false}
          />
          <ToggleField
            label="Google Pay"
            description="Accept Google Pay payments"
            defaultChecked={false}
          />
        </div>
      </SettingsSection>

      {/* Stripe Configuration */}
      <SettingsSection title="Stripe Configuration" icon={<CreditCard className="w-5 h-5" />}>
        <div className="space-y-4">
          <InputField label="Publishable Key" defaultValue="pk_live_***************" />
          <InputField label="Secret Key" type="password" defaultValue="sk_live_***************" />
          <InputField label="Webhook Secret" type="password" defaultValue="whsec_***************" />
        </div>
        <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
          <p className="text-sm text-blue-400">
            Make sure to configure your Stripe webhook endpoint to: <br />
            <code className="text-xs bg-[#0B1121] px-2 py-1 rounded mt-2 inline-block">
              https://api.exiuscart.com/webhooks/stripe
            </code>
          </p>
        </div>
      </SettingsSection>

      {/* Bank Transfer Details */}
      <SettingsSection title="Bank Transfer Details" icon={<CreditCard className="w-5 h-5" />}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField label="Bank Name" defaultValue="Emirates NBD" />
          <InputField label="Account Name" defaultValue="ExiusCart LLC" />
          <InputField label="Account Number" defaultValue="1234567890123" />
          <InputField label="IBAN" defaultValue="AE12 3456 7890 1234 5678 901" />
          <InputField label="SWIFT Code" defaultValue="EABORAED" />
          <InputField label="Branch" defaultValue="Dubai Main Branch" />
        </div>
      </SettingsSection>

      {/* Invoice Settings */}
      <SettingsSection title="Invoice Settings" icon={<CreditCard className="w-5 h-5" />}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField label="Invoice Prefix" defaultValue="INV-" />
          <InputField label="VAT Number" defaultValue="TRN123456789" />
          <InputField label="VAT Rate (%)" type="number" defaultValue="5" />
        </div>
        <div className="mt-4">
          <ToggleField
            label="Auto-generate Invoices"
            description="Automatically generate invoices for payments"
            defaultChecked={true}
          />
        </div>
      </SettingsSection>
    </div>
  );
}

function APISettings() {
  const [showApiKey, setShowApiKey] = useState(false);

  return (
    <div className="space-y-6">
      {/* API Keys */}
      <SettingsSection title="API Keys" icon={<Database className="w-5 h-5" />}>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Production API Key</label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type={showApiKey ? 'text' : 'password'}
                  className="w-full px-4 py-2.5 bg-[#0B1121] border border-gray-700 rounded-lg text-white font-mono text-sm focus:border-[#F5A623] focus:outline-none transition pr-12"
                  defaultValue="exc_prod_abc123xyz789def456"
                  readOnly
                />
                <button
                  type="button"
                  onClick={() => setShowApiKey(!showApiKey)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                >
                  {showApiKey ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              <button
                type="button"
                className="px-4 py-2.5 bg-[#151F32] border border-gray-700 hover:border-gray-600 text-white rounded-lg transition"
              >
                Regenerate
              </button>
            </div>
          </div>
        </div>
        <div className="mt-4 p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
          <div className="flex items-start gap-2">
            <AlertCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-orange-400">
              Keep your API keys secure. Never share them publicly or commit them to version control.
            </p>
          </div>
        </div>
      </SettingsSection>

      {/* Rate Limiting */}
      <SettingsSection title="Rate Limiting" icon={<Server className="w-5 h-5" />}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField label="Requests per Minute" type="number" defaultValue="60" />
          <InputField label="Requests per Day" type="number" defaultValue="10000" />
        </div>
      </SettingsSection>

      {/* Webhooks */}
      <SettingsSection title="Webhook Configuration" icon={<Database className="w-5 h-5" />}>
        <div className="space-y-4">
          <InputField
            label="Webhook URL"
            defaultValue=""
            placeholder="https://your-server.com/webhook"
          />
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Webhook Events</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {[
                'shop.created',
                'shop.updated',
                'subscription.created',
                'subscription.cancelled',
                'payment.completed',
                'payment.failed',
              ].map((event) => (
                <label
                  key={event}
                  className="flex items-center gap-2 p-3 bg-[#0B1121] border border-gray-700 rounded-lg cursor-pointer hover:border-gray-600"
                >
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-600 bg-[#0B1121] text-[#F5A623] focus:ring-[#F5A623] focus:ring-offset-0"
                    defaultChecked={event.includes('payment')}
                  />
                  <span className="text-sm text-gray-300 font-mono">{event}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </SettingsSection>

      {/* Third-party Integrations */}
      <SettingsSection title="Third-party Integrations" icon={<Database className="w-5 h-5" />}>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-[#0B1121] border border-gray-700 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#635BFF] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <div>
                <p className="font-medium text-white">Stripe</p>
                <p className="text-xs text-gray-500">Payment processing</p>
              </div>
            </div>
            <span className="text-xs px-2.5 py-1 rounded-lg bg-green-500/10 text-green-400">Connected</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-[#0B1121] border border-gray-700 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#00B67A] rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-white">SendGrid</p>
                <p className="text-xs text-gray-500">Email delivery</p>
              </div>
            </div>
            <span className="text-xs px-2.5 py-1 rounded-lg bg-green-500/10 text-green-400">Connected</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-[#0B1121] border border-gray-700 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-white">Twilio</p>
                <p className="text-xs text-gray-500">SMS notifications</p>
              </div>
            </div>
            <button
              type="button"
              className="text-xs px-3 py-1.5 rounded-lg bg-[#F5A623] text-black font-medium hover:bg-[#E09612] transition"
            >
              Connect
            </button>
          </div>
        </div>
      </SettingsSection>
    </div>
  );
}

// Reusable Components
function SettingsSection({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#151F32] rounded-xl border border-gray-800 p-4 md:p-6">
      <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-800">
        <div className="text-[#F5A623]">{icon}</div>
        <h2 className="text-lg font-semibold text-white">{title}</h2>
      </div>
      {children}
    </div>
  );
}

function InputField({
  label,
  type = 'text',
  defaultValue = '',
  placeholder = '',
}: {
  label: string;
  type?: string;
  defaultValue?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-400 mb-2">{label}</label>
      <input
        type={type}
        className="w-full px-4 py-2.5 bg-[#0B1121] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#F5A623] focus:outline-none transition"
        defaultValue={defaultValue}
        placeholder={placeholder}
      />
    </div>
  );
}

function SelectField({
  label,
  options,
  defaultValue,
}: {
  label: string;
  options: { value: string; label: string }[];
  defaultValue?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-400 mb-2">{label}</label>
      <select
        className="w-full px-4 py-2.5 bg-[#0B1121] border border-gray-700 rounded-lg text-white focus:border-[#F5A623] focus:outline-none transition appearance-none cursor-pointer"
        defaultValue={defaultValue}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function ToggleField({
  label,
  description,
  defaultChecked = false,
}: {
  label: string;
  description: string;
  defaultChecked?: boolean;
}) {
  const [checked, setChecked] = useState(defaultChecked);

  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="font-medium text-white">{label}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <button
        type="button"
        onClick={() => setChecked(!checked)}
        className={`relative w-11 h-6 rounded-full transition flex-shrink-0 ${
          checked ? 'bg-[#F5A623]' : 'bg-gray-700'
        }`}
      >
        <span
          className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${
            checked ? 'left-6' : 'left-1'
          }`}
        />
      </button>
    </div>
  );
}
