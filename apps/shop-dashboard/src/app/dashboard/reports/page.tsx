'use client';

import { useState } from 'react';
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Calendar,
  Download,
  Filter,
  Package,
  DollarSign,
  ShoppingCart,
  Users,
  ArrowUp,
  ArrowDown,
  FileText,
  PieChart,
  Activity,
} from 'lucide-react';

// Mock sales data for charts
const dailySalesData = [
  { day: 'Mon', sales: 4500, orders: 12 },
  { day: 'Tue', sales: 5200, orders: 15 },
  { day: 'Wed', sales: 3800, orders: 10 },
  { day: 'Thu', sales: 6100, orders: 18 },
  { day: 'Fri', sales: 7500, orders: 22 },
  { day: 'Sat', sales: 8200, orders: 25 },
  { day: 'Sun', sales: 5500, orders: 16 },
];

const monthlySalesData = [
  { month: 'Jan', sales: 125000, orders: 320 },
  { month: 'Feb', sales: 118000, orders: 298 },
  { month: 'Mar', sales: 142000, orders: 365 },
  { month: 'Apr', sales: 135000, orders: 340 },
  { month: 'May', sales: 158000, orders: 402 },
  { month: 'Jun', sales: 145000, orders: 375 },
];

const categorySalesData = [
  { category: 'Smartphones', sales: 185000, percentage: 45, color: 'bg-blue-500' },
  { category: 'Accessories', sales: 82000, percentage: 20, color: 'bg-green-500' },
  { category: 'Tablets', sales: 65000, percentage: 16, color: 'bg-purple-500' },
  { category: 'Laptops', sales: 49000, percentage: 12, color: 'bg-orange-500' },
  { category: 'Wearables', sales: 29000, percentage: 7, color: 'bg-pink-500' },
];

const topProducts = [
  { name: 'iPhone 15 Pro Max', sold: 45, revenue: 193455 },
  { name: 'Samsung Galaxy S24 Ultra', sold: 38, revenue: 151962 },
  { name: 'AirPods Pro (2nd Gen)', sold: 62, revenue: 55738 },
  { name: 'iPad Pro 12.9"', sold: 22, revenue: 98978 },
  { name: 'Apple Watch Series 9', sold: 35, revenue: 55965 },
];

const paymentMethodData = [
  { method: 'Card', count: 245, amount: 285000, percentage: 58 },
  { method: 'Cash', count: 180, amount: 165000, percentage: 34 },
  { method: 'Split', count: 42, amount: 40000, percentage: 8 },
];

type ReportType = 'sales' | 'products' | 'inventory' | 'customers';
type DateRange = 'today' | 'week' | 'month' | 'year';

export default function ReportsPage() {
  const [activeReport, setActiveReport] = useState<ReportType>('sales');
  const [dateRange, setDateRange] = useState<DateRange>('week');

  // Calculate max for chart scaling
  const maxDailySales = Math.max(...dailySalesData.map((d) => d.sales));
  const maxMonthlySales = Math.max(...monthlySalesData.map((d) => d.sales));

  const reportTabs = [
    { id: 'sales' as ReportType, label: 'Sales Report', icon: TrendingUp },
    { id: 'products' as ReportType, label: 'Product Report', icon: Package },
    { id: 'inventory' as ReportType, label: 'Stock Report', icon: BarChart3 },
    { id: 'customers' as ReportType, label: 'Customer Report', icon: Users },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Reports & Analytics</h1>
          <p className="text-muted-foreground text-sm">Analyze your business performance</p>
        </div>
        <div className="flex gap-2">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value as DateRange)}
            className="px-4 py-2 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground"
          >
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>
          <button
            type="button"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Export</span>
          </button>
        </div>
      </div>

      {/* Report Tabs */}
      <div className="bg-card rounded-xl border border-border p-1.5">
        <div className="flex gap-1 overflow-x-auto">
          {reportTabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveReport(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition ${
                  activeReport === tab.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.id.charAt(0).toUpperCase() + tab.id.slice(1)}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Sales Report */}
      {activeReport === 'sales' && (
        <div className="space-y-6">
          {/* KPI Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-card rounded-xl border border-border p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <span className="flex items-center gap-1 text-xs text-green-600 dark:text-green-400">
                  <ArrowUp className="w-3 h-3" />
                  12%
                </span>
              </div>
              <p className="text-2xl font-bold text-foreground">40,800</p>
              <p className="text-xs text-muted-foreground">Total Revenue (AED)</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="flex items-center gap-1 text-xs text-green-600 dark:text-green-400">
                  <ArrowUp className="w-3 h-3" />
                  8%
                </span>
              </div>
              <p className="text-2xl font-bold text-foreground">118</p>
              <p className="text-xs text-muted-foreground">Total Orders</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
                  <Activity className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <span className="flex items-center gap-1 text-xs text-green-600 dark:text-green-400">
                  <ArrowUp className="w-3 h-3" />
                  5%
                </span>
              </div>
              <p className="text-2xl font-bold text-foreground">345.76</p>
              <p className="text-xs text-muted-foreground">Avg. Order Value (AED)</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                </div>
                <span className="flex items-center gap-1 text-xs text-red-600 dark:text-red-400">
                  <ArrowDown className="w-3 h-3" />
                  2%
                </span>
              </div>
              <p className="text-2xl font-bold text-foreground">23.5%</p>
              <p className="text-xs text-muted-foreground">Profit Margin</p>
            </div>
          </div>

          {/* Charts Row */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Daily Sales Chart */}
            <div className="bg-card rounded-xl border border-border p-4">
              <h3 className="font-semibold text-foreground mb-4">Daily Sales</h3>
              <div className="h-64 flex items-end gap-2">
                {dailySalesData.map((data) => (
                  <div key={data.day} className="flex-1 flex flex-col items-center gap-2">
                    <div
                      className="w-full bg-primary/80 rounded-t-lg transition-all hover:bg-primary"
                      style={{ height: `${(data.sales / maxDailySales) * 200}px` }}
                    />
                    <span className="text-xs text-muted-foreground">{data.day}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-border flex justify-between text-sm">
                <span className="text-muted-foreground">Total: <span className="text-foreground font-medium">40,800 AED</span></span>
                <span className="text-muted-foreground">Avg: <span className="text-foreground font-medium">5,829 AED/day</span></span>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-card rounded-xl border border-border p-4">
              <h3 className="font-semibold text-foreground mb-4">Payment Methods</h3>
              <div className="space-y-4">
                {paymentMethodData.map((method) => (
                  <div key={method.method}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-foreground">{method.method}</span>
                      <span className="text-sm text-muted-foreground">{method.count} orders • {method.amount.toLocaleString()} AED</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          method.method === 'Card' ? 'bg-blue-500' :
                          method.method === 'Cash' ? 'bg-green-500' : 'bg-purple-500'
                        }`}
                        style={{ width: `${method.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4 pt-4 border-t border-border">
                <div className="text-center">
                  <p className="text-lg font-bold text-foreground">467</p>
                  <p className="text-xs text-muted-foreground">Total Txns</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-foreground">490K</p>
                  <p className="text-xs text-muted-foreground">Total (AED)</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-foreground">1,049</p>
                  <p className="text-xs text-muted-foreground">Avg/Txn</p>
                </div>
              </div>
            </div>
          </div>

          {/* Category Sales */}
          <div className="bg-card rounded-xl border border-border p-4">
            <h3 className="font-semibold text-foreground mb-4">Sales by Category</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {categorySalesData.map((cat) => (
                <div key={cat.category} className="bg-muted/50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-3 h-3 rounded-full ${cat.color}`} />
                    <span className="text-sm font-medium text-foreground">{cat.category}</span>
                  </div>
                  <p className="text-2xl font-bold text-foreground">{(cat.sales / 1000).toFixed(0)}K</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-muted-foreground">AED</span>
                    <span className="text-xs font-medium text-primary">{cat.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Product Report */}
      {activeReport === 'products' && (
        <div className="space-y-6">
          {/* Top Selling Products */}
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <div className="p-4 border-b border-border">
              <h3 className="font-semibold text-foreground">Top Selling Products</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">#</th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Product</th>
                    <th className="text-center p-4 text-sm font-medium text-muted-foreground">Sold</th>
                    <th className="text-right p-4 text-sm font-medium text-muted-foreground">Revenue</th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Performance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {topProducts.map((product, index) => (
                    <tr key={product.name} className="hover:bg-muted/30 transition">
                      <td className="p-4">
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          index === 0 ? 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400' :
                          index === 1 ? 'bg-gray-500/10 text-gray-600 dark:text-gray-400' :
                          index === 2 ? 'bg-orange-500/10 text-orange-600 dark:text-orange-400' :
                          'bg-muted text-muted-foreground'
                        }`}>
                          {index + 1}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className="font-medium text-foreground">{product.name}</span>
                      </td>
                      <td className="p-4 text-center">
                        <span className="font-semibold text-foreground">{product.sold}</span>
                      </td>
                      <td className="p-4 text-right">
                        <span className="font-semibold text-foreground">{product.revenue.toLocaleString()} AED</span>
                      </td>
                      <td className="p-4">
                        <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary rounded-full"
                            style={{ width: `${(product.sold / topProducts[0].sold) * 100}%` }}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Category Performance */}
          <div className="bg-card rounded-xl border border-border p-4">
            <h3 className="font-semibold text-foreground mb-4">Category Performance</h3>
            <div className="space-y-4">
              {categorySalesData.map((cat) => (
                <div key={cat.category} className="flex items-center gap-4">
                  <div className={`w-4 h-4 rounded ${cat.color}`} />
                  <span className="flex-1 text-foreground">{cat.category}</span>
                  <div className="w-32 h-2 bg-muted rounded-full overflow-hidden hidden sm:block">
                    <div
                      className={`h-full rounded-full ${cat.color}`}
                      style={{ width: `${cat.percentage}%` }}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground w-12 text-right">{cat.percentage}%</span>
                  <span className="text-sm font-medium text-foreground w-24 text-right">{(cat.sales / 1000).toFixed(0)}K AED</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Inventory Report */}
      {activeReport === 'inventory' && (
        <div className="space-y-6">
          {/* Stock Summary */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-card rounded-xl border border-border p-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                <Package className="w-5 h-5 text-primary" />
              </div>
              <p className="text-2xl font-bold text-foreground">12</p>
              <p className="text-xs text-muted-foreground">Total Products</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-4">
              <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center mb-2">
                <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <p className="text-2xl font-bold text-foreground">249</p>
              <p className="text-xs text-muted-foreground">Total Units</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-4">
              <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center mb-2">
                <TrendingDown className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              </div>
              <p className="text-2xl font-bold text-foreground">4</p>
              <p className="text-xs text-muted-foreground">Low Stock Items</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-4">
              <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center mb-2">
                <Package className="w-5 h-5 text-red-600 dark:text-red-400" />
              </div>
              <p className="text-2xl font-bold text-foreground">1</p>
              <p className="text-xs text-muted-foreground">Out of Stock</p>
            </div>
          </div>

          {/* Inventory Value by Category */}
          <div className="bg-card rounded-xl border border-border p-4">
            <h3 className="font-semibold text-foreground mb-4">Inventory Value by Category</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-muted/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Smartphones</span>
                  <span className="text-xs text-primary">42%</span>
                </div>
                <p className="text-xl font-bold text-foreground">52,000 AED</p>
                <p className="text-xs text-muted-foreground mt-1">15 units</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Accessories</span>
                  <span className="text-xs text-primary">18%</span>
                </div>
                <p className="text-xl font-bold text-foreground">22,350 AED</p>
                <p className="text-xs text-muted-foreground mt-1">223 units</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Tablets</span>
                  <span className="text-xs text-primary">12%</span>
                </div>
                <p className="text-xl font-bold text-foreground">15,200 AED</p>
                <p className="text-xs text-muted-foreground mt-1">4 units</p>
              </div>
            </div>
          </div>

          {/* Stock Movement Summary */}
          <div className="bg-card rounded-xl border border-border p-4">
            <h3 className="font-semibold text-foreground mb-4">Stock Movement This Week</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-green-500/5 rounded-lg">
                <p className="text-3xl font-bold text-green-600 dark:text-green-400">+45</p>
                <p className="text-sm text-muted-foreground mt-1">Stock In</p>
              </div>
              <div className="text-center p-4 bg-red-500/5 rounded-lg">
                <p className="text-3xl font-bold text-red-600 dark:text-red-400">-38</p>
                <p className="text-sm text-muted-foreground mt-1">Stock Out (Sales)</p>
              </div>
              <div className="text-center p-4 bg-orange-500/5 rounded-lg">
                <p className="text-3xl font-bold text-orange-600 dark:text-orange-400">-3</p>
                <p className="text-sm text-muted-foreground mt-1">Adjustments</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Customer Report */}
      {activeReport === 'customers' && (
        <div className="space-y-6">
          {/* Customer Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-card rounded-xl border border-border p-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <p className="text-2xl font-bold text-foreground">156</p>
              <p className="text-xs text-muted-foreground">Total Customers</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-4">
              <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center mb-2">
                <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <p className="text-2xl font-bold text-foreground">24</p>
              <p className="text-xs text-muted-foreground">New This Month</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-4">
              <div className="w-10 h-10 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-2">
                <Users className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
              </div>
              <p className="text-2xl font-bold text-foreground">18</p>
              <p className="text-xs text-muted-foreground">VIP Customers</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-4">
              <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center mb-2">
                <Activity className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <p className="text-2xl font-bold text-foreground">68%</p>
              <p className="text-xs text-muted-foreground">Repeat Rate</p>
            </div>
          </div>

          {/* Customer Segments */}
          <div className="bg-card rounded-xl border border-border p-4">
            <h3 className="font-semibold text-foreground mb-4">Customer Segments</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="text-sm font-medium text-foreground">VIP (50K+ AED)</span>
                </div>
                <p className="text-2xl font-bold text-foreground">18</p>
                <p className="text-xs text-muted-foreground">Total spent: 1.2M AED</p>
              </div>
              <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                  <span className="text-sm font-medium text-foreground">Regular (10K-50K)</span>
                </div>
                <p className="text-2xl font-bold text-foreground">65</p>
                <p className="text-xs text-muted-foreground">Total spent: 850K AED</p>
              </div>
              <div className="bg-gray-500/5 border border-gray-500/20 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-gray-500" />
                  <span className="text-sm font-medium text-foreground">Occasional (&lt;10K)</span>
                </div>
                <p className="text-2xl font-bold text-foreground">73</p>
                <p className="text-xs text-muted-foreground">Total spent: 320K AED</p>
              </div>
            </div>
          </div>

          {/* Top Customers */}
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <div className="p-4 border-b border-border">
              <h3 className="font-semibold text-foreground">Top Customers by Revenue</h3>
            </div>
            <div className="divide-y divide-border">
              {[
                { name: 'Layla Ahmed', orders: 20, spent: 45000 },
                { name: 'Fatima Abdullah', orders: 15, spent: 32000 },
                { name: 'Ahmad Ali', orders: 12, spent: 24500 },
                { name: 'Sara Mohammed', orders: 8, spent: 15200 },
                { name: 'Mohammed Hassan', orders: 5, spent: 8900 },
              ].map((customer, index) => (
                <div key={customer.name} className="p-4 flex items-center gap-4 hover:bg-muted/30 transition">
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    index === 0 ? 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400' :
                    index === 1 ? 'bg-gray-500/10 text-gray-600 dark:text-gray-400' :
                    index === 2 ? 'bg-orange-500/10 text-orange-600 dark:text-orange-400' :
                    'bg-muted text-muted-foreground'
                  }`}>
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{customer.name}</p>
                    <p className="text-xs text-muted-foreground">{customer.orders} orders</p>
                  </div>
                  <span className="font-semibold text-foreground">{customer.spent.toLocaleString()} AED</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
