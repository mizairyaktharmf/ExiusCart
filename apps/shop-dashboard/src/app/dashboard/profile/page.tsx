'use client';

import { useState } from 'react';
import {
  Store,
  FileText,
  MapPin,
  Phone,
  Mail,
  Globe,
  MessageCircle,
  Camera,
  Save,
  Building2,
  Receipt,
} from 'lucide-react';

export default function ShopProfilePage() {
  // Mock data - will come from API
  const [shopData, setShopData] = useState({
    name: 'Al Bareek Mobiles',
    tradeLicense: 'TL-2024-123456',
    vatNumber: 'VAT-100123456789',
    address: 'Shop 12, Al Fahidi Street, Bur Dubai, Dubai, UAE',
    phone: '+971 4 123 4567',
    email: 'contact@albareek.ae',
    website: 'www.albareek.ae',
    whatsapp: '+971 50 123 4567',
    description: 'Premium mobile phones and accessories shop in Dubai. Authorized dealer for Apple, Samsung, and other major brands.',
    logo: null as string | null,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSaving(false);
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Shop Profile</h1>
          <p className="text-muted-foreground text-sm">Manage your shop information and branding</p>
        </div>
        <div className="flex gap-3">
          {isEditing ? (
            <>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 rounded-lg border border-border text-foreground hover:bg-muted transition"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSave}
                disabled={isSaving}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition disabled:opacity-50"
              >
                <Save className="w-4 h-4" />
                {isSaving ? 'Saving...' : 'Save Changes'}
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>

      {/* Shop Logo & Name Card */}
      <div className="bg-card rounded-xl border border-border p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          {/* Logo */}
          <div className="relative">
            <div className="w-24 h-24 bg-primary/10 rounded-2xl flex items-center justify-center overflow-hidden">
              {shopData.logo ? (
                <img src={shopData.logo} alt="Shop logo" className="w-full h-full object-cover" />
              ) : (
                <Store className="w-10 h-10 text-primary" />
              )}
            </div>
            {isEditing && (
              <button
                type="button"
                className="absolute -bottom-2 -right-2 p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition"
                title="Change logo"
              >
                <Camera className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Shop Name & Status */}
          <div className="flex-1">
            {isEditing ? (
              <input
                type="text"
                value={shopData.name}
                onChange={(e) => setShopData({ ...shopData, name: e.target.value })}
                className="text-2xl font-bold bg-transparent border-b border-border focus:border-primary outline-none text-foreground w-full"
              />
            ) : (
              <h2 className="text-2xl font-bold text-foreground">{shopData.name}</h2>
            )}
            <div className="flex flex-wrap items-center gap-3 mt-2">
              <span className="text-xs bg-green-500/10 text-green-600 dark:text-green-400 px-2.5 py-1 rounded-full font-medium">
                Active
              </span>
              <span className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full font-medium">
                Pro Trial • 5 days left
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Business Information */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <Building2 className="w-5 h-5 text-primary" />
          Business Information
        </h3>
        <div className="grid sm:grid-cols-2 gap-6">
          <FormField
            label="Trade License Number"
            icon={<FileText className="w-4 h-4" />}
            value={shopData.tradeLicense}
            onChange={(value) => setShopData({ ...shopData, tradeLicense: value })}
            isEditing={isEditing}
            readOnly
          />
          <FormField
            label="VAT Registration Number"
            icon={<Receipt className="w-4 h-4" />}
            value={shopData.vatNumber}
            onChange={(value) => setShopData({ ...shopData, vatNumber: value })}
            isEditing={isEditing}
            readOnly
          />
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <Phone className="w-5 h-5 text-primary" />
          Contact Information
        </h3>
        <div className="grid sm:grid-cols-2 gap-6">
          <FormField
            label="Phone Number"
            icon={<Phone className="w-4 h-4" />}
            value={shopData.phone}
            onChange={(value) => setShopData({ ...shopData, phone: value })}
            isEditing={isEditing}
          />
          <FormField
            label="Email Address"
            icon={<Mail className="w-4 h-4" />}
            value={shopData.email}
            onChange={(value) => setShopData({ ...shopData, email: value })}
            isEditing={isEditing}
            type="email"
          />
          <FormField
            label="WhatsApp Number"
            icon={<MessageCircle className="w-4 h-4" />}
            value={shopData.whatsapp}
            onChange={(value) => setShopData({ ...shopData, whatsapp: value })}
            isEditing={isEditing}
          />
          <FormField
            label="Website"
            icon={<Globe className="w-4 h-4" />}
            value={shopData.website}
            onChange={(value) => setShopData({ ...shopData, website: value })}
            isEditing={isEditing}
            type="url"
          />
        </div>
      </div>

      {/* Location */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-primary" />
          Location
        </h3>
        <div className="space-y-4">
          <FormField
            label="Full Address"
            icon={<MapPin className="w-4 h-4" />}
            value={shopData.address}
            onChange={(value) => setShopData({ ...shopData, address: value })}
            isEditing={isEditing}
            multiline
          />
        </div>
      </div>

      {/* Description */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <FileText className="w-5 h-5 text-primary" />
          Shop Description
        </h3>
        <FormField
          label="About your shop"
          value={shopData.description}
          onChange={(value) => setShopData({ ...shopData, description: value })}
          isEditing={isEditing}
          multiline
          rows={4}
        />
      </div>
    </div>
  );
}

function FormField({
  label,
  icon,
  value,
  onChange,
  isEditing,
  type = 'text',
  multiline = false,
  rows = 3,
  readOnly = false,
}: {
  label: string;
  icon?: React.ReactNode;
  value: string;
  onChange: (value: string) => void;
  isEditing: boolean;
  type?: string;
  multiline?: boolean;
  rows?: number;
  readOnly?: boolean;
}) {
  if (!isEditing || readOnly) {
    return (
      <div>
        <label className="text-sm text-muted-foreground mb-1.5 block">{label}</label>
        <div className="flex items-center gap-2">
          {icon && <span className="text-muted-foreground">{icon}</span>}
          <span className="text-foreground">{value || '-'}</span>
          {readOnly && isEditing && (
            <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">Read-only</span>
          )}
        </div>
      </div>
    );
  }

  if (multiline) {
    return (
      <div>
        <label className="text-sm text-muted-foreground mb-1.5 block">{label}</label>
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={rows}
          className="w-full px-3 py-2 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground placeholder:text-muted-foreground resize-none"
        />
      </div>
    );
  }

  return (
    <div>
      <label className="text-sm text-muted-foreground mb-1.5 block">{label}</label>
      <div className="relative">
        {icon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            {icon}
          </span>
        )}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full ${icon ? 'pl-10' : 'pl-3'} pr-3 py-2 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground placeholder:text-muted-foreground`}
        />
      </div>
    </div>
  );
}
