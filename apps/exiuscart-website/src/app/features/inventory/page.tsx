import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ArrowRight,
  Check,
  Package,
  AlertTriangle,
  History,
  Tags,
  Barcode,
  Upload,
  Download,
  Search,
  Bell,
  Layers,
  TrendingDown,
  RefreshCw,
} from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Inventory Management | Stock Tracking & Alerts | ExiusCart',
  description: 'Real-time inventory tracking with low stock alerts, barcode scanning, bulk import/export. Know your stock levels instantly. Perfect for UAE small shops.',
  openGraph: {
    title: 'Inventory Management | Stock Tracking | ExiusCart',
    description: 'Real-time inventory tracking with alerts, barcode scanning and bulk import/export.',
    url: 'https://exiuscart.com/features/inventory',
    siteName: 'ExiusCart',
    type: 'website',
  },
};

const inventoryFeatures = [
  {
    icon: Package,
    title: 'Real-Time Stock Tracking',
    description: 'Know exactly how many items you have in stock at any moment. Updates automatically with every sale.',
  },
  {
    icon: AlertTriangle,
    title: 'Low Stock Alerts',
    description: 'Get notified when products run low. Set custom thresholds for each product to never run out.',
  },
  {
    icon: History,
    title: 'Stock Movement History',
    description: 'Track every stock change — sales, returns, adjustments. Full audit trail for accountability.',
  },
  {
    icon: Tags,
    title: 'Product Categories',
    description: 'Organize products into categories and subcategories. Find any item in seconds.',
  },
  {
    icon: Barcode,
    title: 'Barcode Support',
    description: 'Scan barcodes to quickly find products, update stock, or ring up sales. Works with any barcode scanner.',
  },
  {
    icon: Upload,
    title: 'Bulk Import/Export',
    description: 'Import products from Excel/CSV. Export your entire inventory for backup or analysis.',
  },
];

const benefits = [
  'Never lose a sale due to stockouts',
  'Reduce overstock and tied-up capital',
  'Save hours on manual stock counts',
  'Accurate profit calculations',
  'Multi-location support (coming soon)',
  'Automatic reorder suggestions',
];

const stockItems = [
  { name: 'iPhone 15 Pro Case', sku: 'ACC-001', stock: 45, status: 'good' },
  { name: 'USB-C Fast Charger', sku: 'CHG-012', stock: 8, status: 'low' },
  { name: 'Wireless Earbuds', sku: 'AUD-005', stock: 0, status: 'out' },
  { name: 'Screen Protector Pack', sku: 'ACC-023', stock: 120, status: 'good' },
  { name: 'Power Bank 20000mAh', sku: 'PWR-007', stock: 15, status: 'good' },
];

export default function InventoryFeaturePage() {
  return (
    <div className="min-h-screen bg-[#0B1121]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#F5A623]/10 border border-[#F5A623]/30 rounded-full px-4 py-2 mb-6">
                <Package className="w-4 h-4 text-[#F5A623]" />
                <span className="text-[#F5A623] text-sm font-medium">Inventory Management</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Know Your Stock, Control Your Business
              </h1>
              <p className="text-gray-400 text-lg mb-8">
                Stop guessing how much stock you have. Real-time inventory tracking that updates automatically with every sale, return, and adjustment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center gap-2 bg-[#F5A623] hover:bg-[#E09612] text-black font-semibold px-8 py-4 rounded-lg transition-all"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-white font-semibold px-8 py-4 rounded-lg transition-all border border-gray-700"
                >
                  Watch Demo
                </Link>
              </div>
            </div>

            {/* Inventory Preview */}
            <div className="relative">
              <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-white font-semibold">Inventory Overview</h3>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Search products..."
                        className="bg-[#1A2540] border border-gray-700 rounded-lg pl-9 pr-4 py-2 text-sm text-white placeholder-gray-500 w-48"
                        readOnly
                      />
                    </div>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-[#1A2540] rounded-xl p-3 text-center">
                    <p className="text-2xl font-bold text-white">156</p>
                    <p className="text-gray-400 text-xs">Total Products</p>
                  </div>
                  <div className="bg-[#1A2540] rounded-xl p-3 text-center">
                    <p className="text-2xl font-bold text-yellow-400">3</p>
                    <p className="text-gray-400 text-xs">Low Stock</p>
                  </div>
                  <div className="bg-[#1A2540] rounded-xl p-3 text-center">
                    <p className="text-2xl font-bold text-red-400">1</p>
                    <p className="text-gray-400 text-xs">Out of Stock</p>
                  </div>
                </div>

                {/* Product List */}
                <div className="space-y-2">
                  {stockItems.map((item, i) => (
                    <div key={i} className="bg-[#1A2540] rounded-lg p-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#0B1121] rounded-lg flex items-center justify-center">
                          <Package className="w-5 h-5 text-gray-600" />
                        </div>
                        <div>
                          <p className="text-white text-sm font-medium">{item.name}</p>
                          <p className="text-gray-500 text-xs">{item.sku}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-bold ${
                          item.status === 'good' ? 'text-green-400' :
                          item.status === 'low' ? 'text-yellow-400' : 'text-red-400'
                        }`}>
                          {item.stock}
                        </p>
                        <p className="text-gray-500 text-xs">
                          {item.status === 'good' ? 'In Stock' :
                           item.status === 'low' ? 'Low Stock' : 'Out of Stock'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#F5A623]/5 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-[#0D1526]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Stock Control
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Everything you need to manage inventory efficiently and make smarter purchasing decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {inventoryFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="bg-[#151F32] rounded-2xl border border-gray-800 p-6 hover:border-[#F5A623]/30 transition">
                  <div className="w-12 h-12 bg-[#F5A623]/20 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#F5A623]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stock Alert Demo */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Never Run Out of Stock Again
              </h2>
              <p className="text-gray-400 mb-8">
                Set custom low-stock thresholds for each product. Get alerts via dashboard notification when it&apos;s time to reorder.
              </p>

              {/* Alert Preview */}
              <div className="space-y-4">
                <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-xl p-4 flex items-start gap-4">
                  <div className="w-10 h-10 bg-yellow-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Bell className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Low Stock Alert</p>
                    <p className="text-gray-400 text-sm">USB-C Fast Charger has only 8 units left. Reorder threshold: 10</p>
                  </div>
                </div>

                <div className="bg-red-400/10 border border-red-400/30 rounded-xl p-4 flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Out of Stock</p>
                    <p className="text-gray-400 text-sm">Wireless Earbuds is out of stock. Consider reordering immediately.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ul className="space-y-4">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 bg-[#151F32] rounded-xl border border-gray-800 p-4">
                    <Check className="w-5 h-5 text-[#F5A623] flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stock Movement */}
      <section className="py-20 px-4 bg-[#0D1526]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Movement History Preview */}
            <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white font-semibold">Stock Movement History</h3>
                <span className="text-gray-500 text-sm">Last 24 hours</span>
              </div>

              <div className="space-y-3">
                {[
                  { action: 'Sale', product: 'iPhone 15 Pro Case', qty: -2, time: '10:32 AM' },
                  { action: 'Restock', product: 'Screen Protector Pack', qty: +50, time: '09:15 AM' },
                  { action: 'Sale', product: 'USB-C Fast Charger', qty: -1, time: '09:02 AM' },
                  { action: 'Return', product: 'Wireless Earbuds', qty: +1, time: 'Yesterday' },
                  { action: 'Adjustment', product: 'Power Bank 20000mAh', qty: -3, time: 'Yesterday' },
                ].map((item, i) => (
                  <div key={i} className="bg-[#1A2540] rounded-lg p-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        item.qty > 0 ? 'bg-green-400/20' : 'bg-red-400/20'
                      }`}>
                        {item.qty > 0 ? (
                          <Upload className="w-4 h-4 text-green-400" />
                        ) : (
                          <Download className="w-4 h-4 text-red-400" />
                        )}
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">{item.action}</p>
                        <p className="text-gray-500 text-xs">{item.product}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-bold text-sm ${item.qty > 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {item.qty > 0 ? '+' : ''}{item.qty}
                      </p>
                      <p className="text-gray-500 text-xs">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Track Every Stock Change
              </h2>
              <p className="text-gray-400 mb-8">
                Complete visibility into your inventory movements. Know exactly what happened, when, and why. Perfect for accountability and identifying shrinkage.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#151F32] rounded-xl border border-gray-800 p-4 text-center">
                  <Layers className="w-8 h-8 text-[#F5A623] mx-auto mb-2" />
                  <p className="text-white font-medium">Full Audit Trail</p>
                </div>
                <div className="bg-[#151F32] rounded-xl border border-gray-800 p-4 text-center">
                  <TrendingDown className="w-8 h-8 text-[#F5A623] mx-auto mb-2" />
                  <p className="text-white font-medium">Shrinkage Reports</p>
                </div>
                <div className="bg-[#151F32] rounded-xl border border-gray-800 p-4 text-center">
                  <RefreshCw className="w-8 h-8 text-[#F5A623] mx-auto mb-2" />
                  <p className="text-white font-medium">Auto Sync</p>
                </div>
                <div className="bg-[#151F32] rounded-xl border border-gray-800 p-4 text-center">
                  <Download className="w-8 h-8 text-[#F5A623] mx-auto mb-2" />
                  <p className="text-white font-medium">Export History</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Take Control of Your Inventory
          </h2>
          <p className="text-gray-400 mb-10">
            Start tracking your stock today. Free 7-day trial with all features included.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 bg-[#F5A623] hover:bg-[#E09612] text-black font-semibold px-10 py-4 rounded-lg transition-all text-lg"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/features"
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-white font-semibold px-10 py-4 rounded-lg transition-all border border-gray-700"
            >
              View All Features
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
