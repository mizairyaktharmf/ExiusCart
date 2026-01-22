'use client';

import { useState } from 'react';
import { Search, Plus, ClipboardList, Clock, Check, X, Eye, Send, ArrowRight, FileText } from 'lucide-react';

const mockQuotations = [
  { id: 'QT-001', customer: 'Ahmad Ali', phone: '+971501234567', items: 3, total: 5500, status: 'pending', date: '2024-01-20', validUntil: '2024-01-27' },
  { id: 'QT-002', customer: 'Sara Mohammed', phone: '+971502345678', items: 1, total: 4299, status: 'accepted', date: '2024-01-18', validUntil: '2024-01-25' },
  { id: 'QT-003', customer: 'Mohammed Hassan', phone: '+971503456789', items: 2, total: 8500, status: 'expired', date: '2024-01-10', validUntil: '2024-01-17' },
];

export default function QuotationsPage() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const getStatusBadge = (status: string) => {
    if (status === 'accepted') return 'bg-green-500/10 text-green-600 dark:text-green-400';
    if (status === 'pending') return 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400';
    if (status === 'expired') return 'bg-red-500/10 text-red-600 dark:text-red-400';
    return 'bg-muted text-muted-foreground';
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Quotations</h1>
          <p className="text-muted-foreground text-sm">Create and manage price quotes for customers</p>
        </div>
        <button
          type="button"
          onClick={() => setShowAddModal(true)}
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition"
        >
          <Plus className="w-4 h-4" />
          New Quotation
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <ClipboardList className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{mockQuotations.length}</p>
              <p className="text-xs text-muted-foreground">Total Quotes</p>
            </div>
          </div>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-500/10 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{mockQuotations.filter(q => q.status === 'pending').length}</p>
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
              <p className="text-2xl font-bold text-foreground">{mockQuotations.filter(q => q.status === 'accepted').length}</p>
              <p className="text-xs text-muted-foreground">Accepted</p>
            </div>
          </div>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center">
              <X className="w-5 h-5 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{mockQuotations.filter(q => q.status === 'expired').length}</p>
              <p className="text-xs text-muted-foreground">Expired</p>
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
            placeholder="Search quotations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground"
          />
        </div>
      </div>

      {/* Quotations List */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        {/* Desktop */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground">Quote ID</th>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground">Customer</th>
                <th className="text-center p-4 text-sm font-medium text-muted-foreground">Items</th>
                <th className="text-right p-4 text-sm font-medium text-muted-foreground">Total</th>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground">Valid Until</th>
                <th className="text-center p-4 text-sm font-medium text-muted-foreground">Status</th>
                <th className="text-center p-4 text-sm font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {mockQuotations.map((quote) => (
                <tr key={quote.id} className="hover:bg-muted/30 transition">
                  <td className="p-4 font-mono text-sm text-primary">{quote.id}</td>
                  <td className="p-4">
                    <p className="text-foreground">{quote.customer}</p>
                    <p className="text-xs text-muted-foreground">{quote.phone}</p>
                  </td>
                  <td className="p-4 text-center text-foreground">{quote.items}</td>
                  <td className="p-4 text-right font-semibold text-foreground">{quote.total.toLocaleString()} AED</td>
                  <td className="p-4 text-muted-foreground text-sm">{quote.validUntil}</td>
                  <td className="p-4 text-center">
                    <span className={`text-xs px-2.5 py-1 rounded-full capitalize ${getStatusBadge(quote.status)}`}>
                      {quote.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center justify-center gap-1">
                      <button type="button" className="p-2 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground" title="View">
                        <Eye className="w-4 h-4" />
                      </button>
                      {quote.status === 'pending' && (
                        <button type="button" className="p-2 hover:bg-green-500/10 rounded-lg text-green-600" title="Convert to Order">
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      )}
                      <button type="button" className="p-2 hover:bg-blue-500/10 rounded-lg text-blue-600" title="Send WhatsApp">
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile */}
        <div className="md:hidden divide-y divide-border">
          {mockQuotations.map((quote) => (
            <div key={quote.id} className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <span className="font-mono text-sm text-primary">{quote.id}</span>
                  <p className="font-medium text-foreground">{quote.customer}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full capitalize ${getStatusBadge(quote.status)}`}>
                  {quote.status}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm mb-3">
                <span className="text-muted-foreground">{quote.items} items</span>
                <span className="font-semibold text-foreground">{quote.total.toLocaleString()} AED</span>
              </div>
              <div className="flex gap-2">
                <button type="button" className="flex-1 py-2 bg-muted text-foreground rounded-lg text-sm font-medium">View</button>
                {quote.status === 'pending' && (
                  <button type="button" className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium">Convert</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-xl border border-border w-full max-w-md">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h2 className="text-lg font-semibold text-foreground">New Quotation</h2>
              <button type="button" onClick={() => setShowAddModal(false)} className="p-2 hover:bg-muted rounded-lg">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Customer Name</label>
                <input type="text" placeholder="Enter name" className="w-full px-3 py-2.5 bg-muted border border-border rounded-lg text-foreground" />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Phone</label>
                <input type="tel" placeholder="+971 50 123 4567" className="w-full px-3 py-2.5 bg-muted border border-border rounded-lg text-foreground" />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Valid For (Days)</label>
                <input type="number" defaultValue={7} className="w-full px-3 py-2.5 bg-muted border border-border rounded-lg text-foreground" />
              </div>
              <div className="bg-muted/50 rounded-lg p-4 text-center text-muted-foreground text-sm">
                Add products after creating the quote
              </div>
              <div className="flex gap-3">
                <button type="button" onClick={() => setShowAddModal(false)} className="flex-1 py-3 border border-border rounded-lg text-foreground hover:bg-muted">
                  Cancel
                </button>
                <button type="button" className="flex-1 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90">
                  Create Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
