'use client';

import { useState } from 'react';
import { Search, Plus, Wallet, TrendingUp, Calendar, X, Receipt, Filter, Edit, Trash2 } from 'lucide-react';

const mockExpenses = [
  { id: '1', category: 'Rent', description: 'Shop rent January', amount: 8000, date: '2024-01-01', paymentMethod: 'bank' },
  { id: '2', category: 'Utilities', description: 'Electricity bill', amount: 450, date: '2024-01-15', paymentMethod: 'cash' },
  { id: '3', category: 'Supplies', description: 'Packaging materials', amount: 320, date: '2024-01-18', paymentMethod: 'card' },
  { id: '4', category: 'Marketing', description: 'Social media ads', amount: 500, date: '2024-01-20', paymentMethod: 'card' },
];

const categories = ['All', 'Rent', 'Utilities', 'Supplies', 'Marketing', 'Salary', 'Transport', 'Other'];

export default function ExpensesPage() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [formData, setFormData] = useState({ category: '', description: '', amount: '', date: '', paymentMethod: 'cash' });

  const totalExpenses = mockExpenses.reduce((sum, e) => sum + e.amount, 0);
  const thisMonth = mockExpenses.filter(e => e.date.startsWith('2024-01')).reduce((sum, e) => sum + e.amount, 0);

  const filteredExpenses = mockExpenses.filter(e => {
    const matchesSearch = e.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || e.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Expenses</h1>
          <p className="text-muted-foreground text-sm">Track your business expenses</p>
        </div>
        <button
          type="button"
          onClick={() => setShowAddModal(true)}
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition"
        >
          <Plus className="w-4 h-4" />
          Add Expense
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center">
              <Wallet className="w-5 h-5 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{totalExpenses.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground">Total Expenses (AED)</p>
            </div>
          </div>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{thisMonth.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground">This Month (AED)</p>
            </div>
          </div>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
              <Receipt className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{mockExpenses.length}</p>
              <p className="text-xs text-muted-foreground">Total Entries</p>
            </div>
          </div>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{Math.round(totalExpenses / mockExpenses.length)}</p>
              <p className="text-xs text-muted-foreground">Avg. Expense (AED)</p>
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
              placeholder="Search expenses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2.5 bg-muted border border-border rounded-lg text-foreground"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Expenses List */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground">Date</th>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground">Category</th>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground">Description</th>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground">Payment</th>
                <th className="text-right p-4 text-sm font-medium text-muted-foreground">Amount</th>
                <th className="text-center p-4 text-sm font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredExpenses.map((expense) => (
                <tr key={expense.id} className="hover:bg-muted/30 transition">
                  <td className="p-4 text-muted-foreground text-sm">{expense.date}</td>
                  <td className="p-4">
                    <span className="text-xs px-2.5 py-1 rounded-full bg-muted text-foreground">{expense.category}</span>
                  </td>
                  <td className="p-4 text-foreground">{expense.description}</td>
                  <td className="p-4 text-muted-foreground capitalize text-sm">{expense.paymentMethod}</td>
                  <td className="p-4 text-right font-semibold text-red-600 dark:text-red-400">-{expense.amount.toLocaleString()} AED</td>
                  <td className="p-4">
                    <div className="flex items-center justify-center gap-1">
                      <button type="button" className="p-2 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button type="button" className="p-2 hover:bg-red-500/10 rounded-lg text-muted-foreground hover:text-red-600">
                        <Trash2 className="w-4 h-4" />
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
          {filteredExpenses.map((expense) => (
            <div key={expense.id} className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <span className="text-xs px-2 py-0.5 rounded bg-muted text-foreground">{expense.category}</span>
                  <p className="font-medium text-foreground mt-1">{expense.description}</p>
                </div>
                <span className="font-semibold text-red-600 dark:text-red-400">-{expense.amount} AED</span>
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{expense.date}</span>
                <span className="capitalize">{expense.paymentMethod}</span>
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
              <h2 className="text-lg font-semibold text-foreground">Add Expense</h2>
              <button type="button" onClick={() => setShowAddModal(false)} className="p-2 hover:bg-muted rounded-lg">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Category</label>
                <select className="w-full px-3 py-2.5 bg-muted border border-border rounded-lg text-foreground">
                  {categories.filter(c => c !== 'All').map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Description</label>
                <input type="text" placeholder="What was this expense for?" className="w-full px-3 py-2.5 bg-muted border border-border rounded-lg text-foreground" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Amount (AED)</label>
                  <input type="number" placeholder="0.00" className="w-full px-3 py-2.5 bg-muted border border-border rounded-lg text-foreground" />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Date</label>
                  <input type="date" className="w-full px-3 py-2.5 bg-muted border border-border rounded-lg text-foreground" />
                </div>
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Payment Method</label>
                <select className="w-full px-3 py-2.5 bg-muted border border-border rounded-lg text-foreground">
                  <option value="cash">Cash</option>
                  <option value="card">Card</option>
                  <option value="bank">Bank Transfer</option>
                </select>
              </div>
              <div className="flex gap-3">
                <button type="button" onClick={() => setShowAddModal(false)} className="flex-1 py-3 border border-border rounded-lg text-foreground hover:bg-muted">
                  Cancel
                </button>
                <button type="button" className="flex-1 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90">
                  Add Expense
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
