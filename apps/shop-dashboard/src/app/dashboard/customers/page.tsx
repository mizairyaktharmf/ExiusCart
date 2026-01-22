'use client';

import { useState } from 'react';
import {
  Search,
  Plus,
  User,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  MoreVertical,
  Edit,
  Trash2,
  X,
  FileText,
  TrendingUp,
  Calendar,
  Star,
  Users,
  ShoppingBag,
} from 'lucide-react';

// Mock customers data - will come from API
const mockCustomers = [
  {
    id: '1',
    name: 'Ahmad Ali',
    phone: '+971501234567',
    email: 'ahmad.ali@email.com',
    address: 'Dubai Marina, Dubai',
    totalOrders: 12,
    totalSpent: 24500,
    lastOrder: '2024-01-20',
    joinedDate: '2023-06-15',
    isVip: true,
  },
  {
    id: '2',
    name: 'Sara Mohammed',
    phone: '+971502345678',
    email: 'sara.m@email.com',
    address: 'JLT, Dubai',
    totalOrders: 8,
    totalSpent: 15200,
    lastOrder: '2024-01-19',
    joinedDate: '2023-08-20',
    isVip: false,
  },
  {
    id: '3',
    name: 'Mohammed Hassan',
    phone: '+971503456789',
    email: 'mhassan@email.com',
    address: 'Business Bay, Dubai',
    totalOrders: 5,
    totalSpent: 8900,
    lastOrder: '2024-01-18',
    joinedDate: '2023-10-05',
    isVip: false,
  },
  {
    id: '4',
    name: 'Fatima Abdullah',
    phone: '+971504567890',
    email: 'fatima.a@email.com',
    address: 'Downtown Dubai',
    totalOrders: 15,
    totalSpent: 32000,
    lastOrder: '2024-01-17',
    joinedDate: '2023-04-12',
    isVip: true,
  },
  {
    id: '5',
    name: 'Omar Khalid',
    phone: '+971505678901',
    email: 'omar.k@email.com',
    address: 'Al Barsha, Dubai',
    totalOrders: 3,
    totalSpent: 4500,
    lastOrder: '2024-01-15',
    joinedDate: '2023-12-01',
    isVip: false,
  },
  {
    id: '6',
    name: 'Layla Ahmed',
    phone: '+971506789012',
    email: 'layla.a@email.com',
    address: 'Jumeirah, Dubai',
    totalOrders: 20,
    totalSpent: 45000,
    lastOrder: '2024-01-20',
    joinedDate: '2023-02-28',
    isVip: true,
  },
];

interface CustomerForm {
  name: string;
  phone: string;
  email: string;
  address: string;
}

export default function CustomersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState<'all' | 'vip'>('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState<typeof mockCustomers[0] | null>(null);
  const [selectedCustomer, setSelectedCustomer] = useState<typeof mockCustomers[0] | null>(null);
  const [formData, setFormData] = useState<CustomerForm>({
    name: '',
    phone: '',
    email: '',
    address: '',
  });

  // Stats
  const totalCustomers = mockCustomers.length;
  const vipCustomers = mockCustomers.filter((c) => c.isVip).length;
  const totalRevenue = mockCustomers.reduce((sum, c) => sum + c.totalSpent, 0);
  const avgOrderValue = totalRevenue / mockCustomers.reduce((sum, c) => sum + c.totalOrders, 0);

  // Filter customers
  const filteredCustomers = mockCustomers.filter((customer) => {
    const matchesSearch =
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.phone.includes(searchQuery) ||
      customer.email.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter = filter === 'all' || (filter === 'vip' && customer.isVip);

    return matchesSearch && matchesFilter;
  });

  const handleOpenAdd = () => {
    setFormData({ name: '', phone: '', email: '', address: '' });
    setEditingCustomer(null);
    setShowAddModal(true);
  };

  const handleOpenEdit = (customer: typeof mockCustomers[0]) => {
    setFormData({
      name: customer.name,
      phone: customer.phone,
      email: customer.email,
      address: customer.address,
    });
    setEditingCustomer(customer);
    setShowAddModal(true);
  };

  const handleSave = () => {
    console.log('Saving customer:', formData, editingCustomer ? 'Update' : 'Create');
    setShowAddModal(false);
    setEditingCustomer(null);
    setFormData({ name: '', phone: '', email: '', address: '' });
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
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Customers</h1>
          <p className="text-muted-foreground text-sm">Manage your customer database</p>
        </div>
        <button
          type="button"
          onClick={handleOpenAdd}
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition"
        >
          <Plus className="w-4 h-4" />
          Add Customer
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{totalCustomers}</p>
              <p className="text-xs text-muted-foreground">Total Customers</p>
            </div>
          </div>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-500/10 rounded-lg flex items-center justify-center">
              <Star className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{vipCustomers}</p>
              <p className="text-xs text-muted-foreground">VIP Customers</p>
            </div>
          </div>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{(totalRevenue / 1000).toFixed(0)}K</p>
              <p className="text-xs text-muted-foreground">Total Revenue (AED)</p>
            </div>
          </div>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{avgOrderValue.toFixed(0)}</p>
              <p className="text-xs text-muted-foreground">Avg. Order (AED)</p>
            </div>
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
              placeholder="Search by name, phone, email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground placeholder:text-muted-foreground"
            />
          </div>

          {/* Filter */}
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                filter === 'all'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:text-foreground'
              }`}
            >
              All
            </button>
            <button
              type="button"
              onClick={() => setFilter('vip')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition flex items-center gap-1.5 ${
                filter === 'vip'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:text-foreground'
              }`}
            >
              <Star className="w-3.5 h-3.5" />
              VIP Only
            </button>
          </div>
        </div>
      </div>

      {/* Customers List */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground">Customer</th>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground">Contact</th>
                <th className="text-center p-4 text-sm font-medium text-muted-foreground">Orders</th>
                <th className="text-right p-4 text-sm font-medium text-muted-foreground">Total Spent</th>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground">Last Order</th>
                <th className="text-center p-4 text-sm font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredCustomers.map((customer) => (
                <tr key={customer.id} className="hover:bg-muted/30 transition">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium text-foreground">{customer.name}</p>
                          {customer.isVip && (
                            <span className="bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 text-xs px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
                              <Star className="w-3 h-3" />
                              VIP
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground">{customer.address}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="space-y-1">
                      <p className="text-sm text-foreground flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-muted-foreground" />
                        {customer.phone}
                      </p>
                      <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5" />
                        {customer.email}
                      </p>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-lg font-semibold text-foreground">{customer.totalOrders}</span>
                  </td>
                  <td className="p-4 text-right">
                    <span className="font-semibold text-foreground">{customer.totalSpent.toLocaleString()} AED</span>
                  </td>
                  <td className="p-4">
                    <span className="text-sm text-muted-foreground">{formatDate(customer.lastOrder)}</span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center justify-center gap-1">
                      <button
                        type="button"
                        onClick={() => setSelectedCustomer(customer)}
                        className="p-2 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground transition"
                        title="View Profile"
                      >
                        <User className="w-4 h-4" />
                      </button>
                      <a
                        href={`https://wa.me/${customer.phone.replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-green-500/10 rounded-lg text-green-600 dark:text-green-400 transition"
                        title="WhatsApp"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </a>
                      <button
                        type="button"
                        onClick={() => handleOpenEdit(customer)}
                        className="p-2 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground transition"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden divide-y divide-border">
          {filteredCustomers.map((customer) => (
            <div key={customer.id} className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-foreground">{customer.name}</p>
                      {customer.isVip && (
                        <Star className="w-4 h-4 text-yellow-500" />
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">{customer.phone}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedCustomer(customer)}
                  className="p-2 hover:bg-muted rounded-lg text-muted-foreground"
                >
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-between text-sm mb-3">
                <span className="text-muted-foreground">{customer.totalOrders} orders</span>
                <span className="font-semibold text-foreground">{customer.totalSpent.toLocaleString()} AED</span>
              </div>

              <div className="flex gap-2">
                <a
                  href={`https://wa.me/${customer.phone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 bg-green-500/10 text-green-600 dark:text-green-400 rounded-lg text-sm font-medium text-center flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
                <button
                  type="button"
                  onClick={() => handleOpenEdit(customer)}
                  className="px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition"
                >
                  <Edit className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredCustomers.length === 0 && (
          <div className="p-12 text-center">
            <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-medium text-foreground mb-1">No customers found</h3>
            <p className="text-sm text-muted-foreground">Try adjusting your search</p>
          </div>
        )}
      </div>

      {/* Add/Edit Customer Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-xl border border-border w-full max-w-md">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h2 className="text-lg font-semibold text-foreground">
                {editingCustomer ? 'Edit Customer' : 'Add Customer'}
              </h2>
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="p-2 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 space-y-4">
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Full Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter customer name"
                  className="w-full px-3 py-2.5 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground"
                />
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Phone Number *</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+971 50 123 4567"
                  className="w-full px-3 py-2.5 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground"
                />
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="customer@email.com"
                  className="w-full px-3 py-2.5 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground"
                />
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Address</label>
                <textarea
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="Enter address"
                  rows={2}
                  className="w-full px-3 py-2.5 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground resize-none"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 py-3 border border-border rounded-lg text-foreground hover:bg-muted transition"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSave}
                  disabled={!formData.name || !formData.phone}
                  className="flex-1 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {editingCustomer ? 'Update' : 'Add Customer'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Customer Profile Modal */}
      {selectedCustomer && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-xl border border-border w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-border sticky top-0 bg-card">
              <h2 className="text-lg font-semibold text-foreground">Customer Profile</h2>
              <button
                type="button"
                onClick={() => setSelectedCustomer(null)}
                className="p-2 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 space-y-4">
              {/* Profile Header */}
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <User className="w-10 h-10 text-primary" />
                </div>
                <div className="flex items-center justify-center gap-2">
                  <h3 className="text-xl font-bold text-foreground">{selectedCustomer.name}</h3>
                  {selectedCustomer.isVip && (
                    <span className="bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      VIP
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Customer since {formatDate(selectedCustomer.joinedDate)}
                </p>
              </div>

              {/* Contact Info */}
              <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span className="text-foreground">{selectedCustomer.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span className="text-foreground">{selectedCustomer.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-foreground">{selectedCustomer.address}</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-primary/5 rounded-lg p-3 text-center">
                  <p className="text-2xl font-bold text-primary">{selectedCustomer.totalOrders}</p>
                  <p className="text-xs text-muted-foreground">Total Orders</p>
                </div>
                <div className="bg-green-500/5 rounded-lg p-3 text-center">
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">{selectedCustomer.totalSpent.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">Total Spent (AED)</p>
                </div>
              </div>

              {/* Last Order */}
              <div className="bg-muted/30 rounded-lg p-3 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Last Order</span>
                <span className="text-sm font-medium text-foreground">{formatDate(selectedCustomer.lastOrder)}</span>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-2">
                <a
                  href={`https://wa.me/${selectedCustomer.phone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCustomer(null);
                    handleOpenEdit(selectedCustomer);
                  }}
                  className="flex-1 py-3 bg-muted text-foreground rounded-lg font-medium hover:bg-muted/80 transition flex items-center justify-center gap-2"
                >
                  <Edit className="w-4 h-4" />
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
