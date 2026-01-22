'use client';

import { useState } from 'react';
import { Search, Plus, Truck, Package, Calendar, X, Check, Clock, Eye, FileText } from 'lucide-react';

const mockPurchases = [
  { id: 'PO-001', supplier: 'Apple UAE Distributor', items: 5, total: 52000, status: 'received', date: '2024-01-20' },
  { id: 'PO-002', supplier: 'Samsung Gulf', items: 3, total: 28000, status: 'pending', date: '2024-01-18' },
];

const mockSuppliers = [
  { id: '1', name: 'Apple UAE Distributor', phone: '+971 4 555 1234', email: 'orders@apple-uae.com' },
  { id: '2', name: 'Samsung Gulf', phone: '+971 4 555 5678', email: 'sales@samsung-gulf.com' },
];

export default function PurchasesPage() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const getStatusBadge = (status: string) => {
    if (status === 'received') return 'bg-green-500/10 text-green-600 dark:text-green-400';
    if (status === 'pending') return 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400';
    return 'bg-muted text-muted-foreground';
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Purchases</h1>
          <p className="text-muted-foreground text-sm">Manage purchase orders from suppliers</p>
        </div>
        <button
          type="button"
          onClick={() => setShowAddModal(true)}
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition"
        >
          <Plus className="w-4 h-4" />
          New Purchase
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{mockPurchases.length}</p>
              <p className="text-xs text-muted-foreground">Total Orders</p>
            </div>
          </div>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-500/10 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{mockPurchases.filter(p => p.status === 'pending').length}</p>
              <p className="text-xs text-muted-foreground">Pending</p>
            </div>
          </div>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
              <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{mockPurchases.filter(p => p.status === 'received').length}</p>
              <p className="text-xs text-muted-foreground">Received</p>
            </div>
          </div>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
              <Truck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{mockSuppliers.length}</p>
              <p className="text-xs text-muted-foreground">Suppliers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="bg-card rounded-xl border border-border p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search purchases..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground"
          />
        </div>
      </div>

      {/* Purchases List */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground">Order ID</th>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground">Supplier</th>
                <th className="text-center p-4 text-sm font-medium text-muted-foreground">Items</th>
                <th className="text-right p-4 text-sm font-medium text-muted-foreground">Total</th>
                <th className="text-center p-4 text-sm font-medium text-muted-foreground">Status</th>
                <th className="text-center p-4 text-sm font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {mockPurchases.map((purchase) => (
                <tr key={purchase.id} className="hover:bg-muted/30 transition">
                  <td className="p-4 font-mono text-sm text-primary">{purchase.id}</td>
                  <td className="p-4 text-foreground">{purchase.supplier}</td>
                  <td className="p-4 text-center text-foreground">{purchase.items}</td>
                  <td className="p-4 text-right font-semibold text-foreground">{purchase.total.toLocaleString()} AED</td>
                  <td className="p-4 text-center">
                    <span className={`text-xs px-2.5 py-1 rounded-full capitalize ${getStatusBadge(purchase.status)}`}>
                      {purchase.status}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    <button type="button" className="p-2 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground">
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Purchase Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-xl border border-border w-full max-w-md">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h2 className="text-lg font-semibold text-foreground">New Purchase Order</h2>
              <button type="button" onClick={() => setShowAddModal(false)} className="p-2 hover:bg-muted rounded-lg">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Supplier</label>
                <select className="w-full px-3 py-2.5 bg-muted border border-border rounded-lg text-foreground">
                  <option value="">Select supplier...</option>
                  {mockSuppliers.map((s) => (
                    <option key={s.id} value={s.id}>{s.name}</option>
                  ))}
                </select>
              </div>
              <div className="bg-muted/50 rounded-lg p-4 text-center text-muted-foreground text-sm">
                Product selection will be available when backend is connected
              </div>
              <div className="flex gap-3">
                <button type="button" onClick={() => setShowAddModal(false)} className="flex-1 py-3 border border-border rounded-lg text-foreground hover:bg-muted">
                  Cancel
                </button>
                <button type="button" className="flex-1 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90">
                  Create Order
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
