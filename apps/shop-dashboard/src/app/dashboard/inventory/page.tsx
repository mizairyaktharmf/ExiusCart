'use client';

import { useState } from 'react';
import {
  Search,
  Filter,
  Package,
  AlertTriangle,
  TrendingDown,
  TrendingUp,
  Plus,
  Minus,
  X,
  ArrowUpDown,
  Download,
  Upload,
  MoreVertical,
  Edit,
  History,
  BarChart3,
} from 'lucide-react';

// Mock inventory data - will come from API
const mockInventory = [
  { id: '1', name: 'iPhone 15 Pro Max', sku: 'IPH15PM-256', category: 'Smartphones', stock: 5, minStock: 10, cost: 3800, price: 4299, lastUpdated: '2024-01-20' },
  { id: '2', name: 'Samsung Galaxy S24 Ultra', sku: 'SGS24U-256', category: 'Smartphones', stock: 8, minStock: 5, cost: 3500, price: 3999, lastUpdated: '2024-01-19' },
  { id: '3', name: 'AirPods Pro (2nd Gen)', sku: 'APP2-WHT', category: 'Accessories', stock: 3, minStock: 10, cost: 750, price: 899, lastUpdated: '2024-01-18' },
  { id: '4', name: 'USB-C Fast Charger 65W', sku: 'USBC-65W', category: 'Accessories', stock: 25, minStock: 15, cost: 80, price: 129, lastUpdated: '2024-01-20' },
  { id: '5', name: 'iPhone 14 Pro', sku: 'IPH14P-128', category: 'Smartphones', stock: 2, minStock: 5, cost: 3000, price: 3599, lastUpdated: '2024-01-17' },
  { id: '6', name: 'Samsung Galaxy Buds FE', sku: 'SGBFE-BLK', category: 'Accessories', stock: 15, minStock: 10, cost: 200, price: 299, lastUpdated: '2024-01-19' },
  { id: '7', name: 'iPad Pro 12.9"', sku: 'IPDP129-256', category: 'Tablets', stock: 4, minStock: 3, cost: 3800, price: 4499, lastUpdated: '2024-01-16' },
  { id: '8', name: 'Apple Watch Series 9', sku: 'AWS9-45MM', category: 'Wearables', stock: 7, minStock: 5, cost: 1300, price: 1599, lastUpdated: '2024-01-20' },
  { id: '9', name: 'MacBook Air M3', sku: 'MBA-M3-256', category: 'Laptops', stock: 0, minStock: 3, cost: 4200, price: 4999, lastUpdated: '2024-01-15' },
  { id: '10', name: 'iPhone Case - Clear', sku: 'IPC-CLR-15', category: 'Accessories', stock: 50, minStock: 20, cost: 30, price: 79, lastUpdated: '2024-01-20' },
  { id: '11', name: 'Screen Protector', sku: 'SP-TEMPER', category: 'Accessories', stock: 100, minStock: 30, cost: 15, price: 49, lastUpdated: '2024-01-20' },
  { id: '12', name: 'Lightning Cable 2m', sku: 'LC-2M-WHT', category: 'Accessories', stock: 30, minStock: 25, cost: 40, price: 89, lastUpdated: '2024-01-19' },
];

// Mock stock movements
const mockMovements = [
  { id: '1', productName: 'iPhone 15 Pro Max', type: 'sale', quantity: -1, date: '2024-01-20 14:30', reference: 'ORD-123456' },
  { id: '2', productName: 'AirPods Pro (2nd Gen)', type: 'sale', quantity: -2, date: '2024-01-20 12:15', reference: 'ORD-123455' },
  { id: '3', productName: 'USB-C Fast Charger 65W', type: 'purchase', quantity: 20, date: '2024-01-20 10:00', reference: 'PO-001234' },
  { id: '4', productName: 'iPhone Case - Clear', type: 'adjustment', quantity: -5, date: '2024-01-19 16:45', reference: 'ADJ-000012' },
  { id: '5', productName: 'Samsung Galaxy S24 Ultra', type: 'sale', quantity: -1, date: '2024-01-19 15:20', reference: 'ORD-123454' },
];

const categories = ['All', 'Smartphones', 'Accessories', 'Tablets', 'Wearables', 'Laptops'];

type StockFilter = 'all' | 'low' | 'out' | 'healthy';

interface AdjustmentModal {
  isOpen: boolean;
  product: typeof mockInventory[0] | null;
  type: 'add' | 'remove';
}

export default function InventoryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [stockFilter, setStockFilter] = useState<StockFilter>('all');
  const [showMovements, setShowMovements] = useState(false);
  const [adjustmentModal, setAdjustmentModal] = useState<AdjustmentModal>({
    isOpen: false,
    product: null,
    type: 'add',
  });
  const [adjustmentQty, setAdjustmentQty] = useState(1);
  const [adjustmentReason, setAdjustmentReason] = useState('');

  // Calculate stats
  const totalProducts = mockInventory.length;
  const totalStock = mockInventory.reduce((sum, item) => sum + item.stock, 0);
  const lowStockItems = mockInventory.filter((item) => item.stock > 0 && item.stock <= item.minStock);
  const outOfStockItems = mockInventory.filter((item) => item.stock === 0);
  const totalValue = mockInventory.reduce((sum, item) => sum + item.stock * item.cost, 0);

  // Filter inventory
  const filteredInventory = mockInventory.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.sku.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;

    let matchesStock = true;
    if (stockFilter === 'low') matchesStock = item.stock > 0 && item.stock <= item.minStock;
    else if (stockFilter === 'out') matchesStock = item.stock === 0;
    else if (stockFilter === 'healthy') matchesStock = item.stock > item.minStock;

    return matchesSearch && matchesCategory && matchesStock;
  });

  const handleAdjustment = () => {
    if (!adjustmentModal.product) return;

    const newQty = adjustmentModal.type === 'add' ? adjustmentQty : -adjustmentQty;
    console.log('Stock adjustment:', {
      productId: adjustmentModal.product.id,
      quantity: newQty,
      reason: adjustmentReason,
    });

    // Reset and close modal
    setAdjustmentModal({ isOpen: false, product: null, type: 'add' });
    setAdjustmentQty(1);
    setAdjustmentReason('');
  };

  const getStockStatus = (stock: number, minStock: number) => {
    if (stock === 0) return { label: 'Out of Stock', color: 'bg-red-500/10 text-red-600 dark:text-red-400' };
    if (stock <= minStock) return { label: 'Low Stock', color: 'bg-orange-500/10 text-orange-600 dark:text-orange-400' };
    return { label: 'In Stock', color: 'bg-green-500/10 text-green-600 dark:text-green-400' };
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Inventory</h1>
          <p className="text-muted-foreground text-sm">Manage stock levels and track movements</p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setShowMovements(!showMovements)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${
              showMovements
                ? 'bg-primary text-primary-foreground'
                : 'border border-border text-foreground hover:bg-muted'
            }`}
          >
            <History className="w-4 h-4" />
            <span className="hidden sm:inline">Movements</span>
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-2 border border-border text-foreground px-4 py-2 rounded-lg font-medium hover:bg-muted transition"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Export</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Package className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{totalProducts}</p>
              <p className="text-xs text-muted-foreground">Total Products</p>
            </div>
          </div>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{totalStock}</p>
              <p className="text-xs text-muted-foreground">Total Units</p>
            </div>
          </div>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{lowStockItems.length}</p>
              <p className="text-xs text-muted-foreground">Low Stock</p>
            </div>
          </div>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center">
              <TrendingDown className="w-5 h-5 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{outOfStockItems.length}</p>
              <p className="text-xs text-muted-foreground">Out of Stock</p>
            </div>
          </div>
        </div>
      </div>

      {/* Total Inventory Value */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl border border-primary/20 p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Total Inventory Value</p>
            <p className="text-3xl font-bold text-foreground">{totalValue.toLocaleString()} AED</p>
          </div>
          <div className="hidden sm:block text-right">
            <p className="text-sm text-muted-foreground">Based on cost price</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-card rounded-xl border border-border p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by name or SKU..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground placeholder:text-muted-foreground"
            />
          </div>

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2.5 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          {/* Stock Filter */}
          <div className="flex gap-2">
            {(['all', 'low', 'out', 'healthy'] as StockFilter[]).map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setStockFilter(filter)}
                className={`px-3 py-2 rounded-lg text-sm font-medium capitalize transition ${
                  stockFilter === filter
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:text-foreground'
                }`}
              >
                {filter === 'all' ? 'All' : filter === 'low' ? 'Low' : filter === 'out' ? 'Out' : 'OK'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      {showMovements ? (
        /* Stock Movements Table */
        <div className="bg-card rounded-xl border border-border overflow-hidden">
          <div className="p-4 border-b border-border">
            <h2 className="font-semibold text-foreground">Recent Stock Movements</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Product</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Type</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Quantity</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Date</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Reference</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {mockMovements.map((movement) => (
                  <tr key={movement.id} className="hover:bg-muted/30 transition">
                    <td className="p-4">
                      <span className="font-medium text-foreground">{movement.productName}</span>
                    </td>
                    <td className="p-4">
                      <span className={`text-xs px-2 py-1 rounded-full capitalize ${
                        movement.type === 'sale'
                          ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                          : movement.type === 'purchase'
                          ? 'bg-green-500/10 text-green-600 dark:text-green-400'
                          : 'bg-orange-500/10 text-orange-600 dark:text-orange-400'
                      }`}>
                        {movement.type}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={`font-medium ${
                        movement.quantity > 0
                          ? 'text-green-600 dark:text-green-400'
                          : 'text-red-600 dark:text-red-400'
                      }`}>
                        {movement.quantity > 0 ? '+' : ''}{movement.quantity}
                      </span>
                    </td>
                    <td className="p-4 text-muted-foreground text-sm">{movement.date}</td>
                    <td className="p-4">
                      <span className="text-sm text-primary font-mono">{movement.reference}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* Inventory Table */
        <div className="bg-card rounded-xl border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Product</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground hidden sm:table-cell">SKU</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground hidden md:table-cell">Category</th>
                  <th className="text-center p-4 text-sm font-medium text-muted-foreground">Stock</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground hidden lg:table-cell">Status</th>
                  <th className="text-right p-4 text-sm font-medium text-muted-foreground hidden sm:table-cell">Value</th>
                  <th className="text-center p-4 text-sm font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filteredInventory.map((item) => {
                  const status = getStockStatus(item.stock, item.minStock);
                  return (
                    <tr key={item.id} className="hover:bg-muted/30 transition">
                      <td className="p-4">
                        <div>
                          <p className="font-medium text-foreground">{item.name}</p>
                          <p className="text-xs text-muted-foreground sm:hidden">{item.sku}</p>
                        </div>
                      </td>
                      <td className="p-4 hidden sm:table-cell">
                        <span className="text-sm text-muted-foreground font-mono">{item.sku}</span>
                      </td>
                      <td className="p-4 hidden md:table-cell">
                        <span className="text-sm text-muted-foreground">{item.category}</span>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex flex-col items-center">
                          <span className={`text-lg font-bold ${
                            item.stock === 0
                              ? 'text-red-600 dark:text-red-400'
                              : item.stock <= item.minStock
                              ? 'text-orange-600 dark:text-orange-400'
                              : 'text-foreground'
                          }`}>
                            {item.stock}
                          </span>
                          <span className="text-xs text-muted-foreground">min: {item.minStock}</span>
                        </div>
                      </td>
                      <td className="p-4 hidden lg:table-cell">
                        <span className={`text-xs px-2.5 py-1 rounded-full ${status.color}`}>
                          {status.label}
                        </span>
                      </td>
                      <td className="p-4 text-right hidden sm:table-cell">
                        <span className="font-medium text-foreground">
                          {(item.stock * item.cost).toLocaleString()} AED
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center justify-center gap-1">
                          <button
                            type="button"
                            onClick={() => setAdjustmentModal({ isOpen: true, product: item, type: 'add' })}
                            className="p-2 hover:bg-green-500/10 rounded-lg text-green-600 dark:text-green-400 transition"
                            title="Add Stock"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() => setAdjustmentModal({ isOpen: true, product: item, type: 'remove' })}
                            disabled={item.stock === 0}
                            className="p-2 hover:bg-red-500/10 rounded-lg text-red-600 dark:text-red-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
                            title="Remove Stock"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {filteredInventory.length === 0 && (
            <div className="p-12 text-center">
              <Package className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-medium text-foreground mb-1">No products found</h3>
              <p className="text-sm text-muted-foreground">Try adjusting your filters</p>
            </div>
          )}
        </div>
      )}

      {/* Low Stock Alerts */}
      {lowStockItems.length > 0 && !showMovements && (
        <div className="bg-orange-500/5 border border-orange-500/20 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h3 className="font-medium text-foreground mb-2">Low Stock Alert</h3>
              <div className="flex flex-wrap gap-2">
                {lowStockItems.map((item) => (
                  <span
                    key={item.id}
                    className="text-xs bg-orange-500/10 text-orange-600 dark:text-orange-400 px-2.5 py-1 rounded-full"
                  >
                    {item.name} ({item.stock} left)
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Adjustment Modal */}
      {adjustmentModal.isOpen && adjustmentModal.product && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-xl border border-border w-full max-w-md">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h2 className="text-lg font-semibold text-foreground">
                {adjustmentModal.type === 'add' ? 'Add Stock' : 'Remove Stock'}
              </h2>
              <button
                type="button"
                onClick={() => setAdjustmentModal({ isOpen: false, product: null, type: 'add' })}
                className="p-2 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 space-y-4">
              {/* Product Info */}
              <div className="bg-muted/50 rounded-lg p-3">
                <p className="font-medium text-foreground">{adjustmentModal.product.name}</p>
                <p className="text-sm text-muted-foreground">Current stock: {adjustmentModal.product.stock} units</p>
              </div>

              {/* Quantity */}
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Quantity</label>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setAdjustmentQty(Math.max(1, adjustmentQty - 1))}
                    className="w-10 h-10 flex items-center justify-center bg-muted rounded-lg text-foreground hover:bg-muted/80 transition"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <input
                    type="number"
                    value={adjustmentQty}
                    onChange={(e) => setAdjustmentQty(Math.max(1, parseInt(e.target.value) || 1))}
                    className="flex-1 text-center py-2 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground text-lg font-medium"
                  />
                  <button
                    type="button"
                    onClick={() => setAdjustmentQty(adjustmentQty + 1)}
                    className="w-10 h-10 flex items-center justify-center bg-muted rounded-lg text-foreground hover:bg-muted/80 transition"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Reason */}
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Reason</label>
                <select
                  value={adjustmentReason}
                  onChange={(e) => setAdjustmentReason(e.target.value)}
                  className="w-full px-3 py-2.5 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground"
                >
                  <option value="">Select reason...</option>
                  {adjustmentModal.type === 'add' ? (
                    <>
                      <option value="purchase">New Purchase</option>
                      <option value="return">Customer Return</option>
                      <option value="correction">Stock Correction</option>
                      <option value="transfer">Transfer In</option>
                    </>
                  ) : (
                    <>
                      <option value="damaged">Damaged/Defective</option>
                      <option value="lost">Lost/Missing</option>
                      <option value="correction">Stock Correction</option>
                      <option value="transfer">Transfer Out</option>
                      <option value="expired">Expired</option>
                    </>
                  )}
                </select>
              </div>

              {/* New Stock Preview */}
              <div className="bg-muted/30 rounded-lg p-3 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">New stock after adjustment:</span>
                <span className={`text-lg font-bold ${
                  adjustmentModal.type === 'add'
                    ? 'text-green-600 dark:text-green-400'
                    : 'text-red-600 dark:text-red-400'
                }`}>
                  {adjustmentModal.type === 'add'
                    ? adjustmentModal.product.stock + adjustmentQty
                    : Math.max(0, adjustmentModal.product.stock - adjustmentQty)
                  } units
                </span>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setAdjustmentModal({ isOpen: false, product: null, type: 'add' })}
                  className="flex-1 py-3 border border-border rounded-lg text-foreground hover:bg-muted transition"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleAdjustment}
                  disabled={!adjustmentReason}
                  className={`flex-1 py-3 rounded-lg font-medium transition disabled:opacity-50 disabled:cursor-not-allowed ${
                    adjustmentModal.type === 'add'
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : 'bg-red-600 hover:bg-red-700 text-white'
                  }`}
                >
                  {adjustmentModal.type === 'add' ? 'Add Stock' : 'Remove Stock'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
