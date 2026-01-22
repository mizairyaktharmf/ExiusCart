'use client';

import { useState } from 'react';
import {
  Search,
  Filter,
  FileText,
  Eye,
  Download,
  Calendar,
  CreditCard,
  Banknote,
  X,
  ChevronDown,
  MoreVertical,
  Printer,
  MessageCircle,
  RefreshCw,
  Package,
  CheckCircle,
  Clock,
  XCircle,
  TrendingUp,
} from 'lucide-react';
import { generateInvoicePDF } from '@/lib/invoice-generator';

// Mock orders data - will come from API
const mockOrders = [
  {
    id: 'ORD-240120-001',
    date: '2024-01-20T14:30:00',
    customer: { name: 'Ahmad Ali', phone: '+971501234567' },
    items: [
      { name: 'iPhone 15 Pro Max', quantity: 1, price: 4299 },
      { name: 'iPhone Case - Clear', quantity: 1, price: 79 },
    ],
    subtotal: 4378,
    discount: 0,
    vat: 218.9,
    total: 4596.9,
    paymentMethod: 'card',
    status: 'completed',
  },
  {
    id: 'ORD-240120-002',
    date: '2024-01-20T12:15:00',
    customer: { name: 'Sara Mohammed', phone: '+971502345678' },
    items: [
      { name: 'AirPods Pro (2nd Gen)', quantity: 2, price: 899 },
    ],
    subtotal: 1798,
    discount: 100,
    vat: 84.9,
    total: 1782.9,
    paymentMethod: 'cash',
    status: 'completed',
  },
  {
    id: 'ORD-240120-003',
    date: '2024-01-20T10:45:00',
    customer: null,
    items: [
      { name: 'USB-C Fast Charger 65W', quantity: 3, price: 129 },
      { name: 'Lightning Cable 2m', quantity: 2, price: 89 },
    ],
    subtotal: 565,
    discount: 0,
    vat: 28.25,
    total: 593.25,
    paymentMethod: 'cash',
    status: 'completed',
  },
  {
    id: 'ORD-240119-001',
    date: '2024-01-19T16:20:00',
    customer: { name: 'Mohammed Hassan', phone: '+971503456789' },
    items: [
      { name: 'Samsung Galaxy S24 Ultra', quantity: 1, price: 3999 },
    ],
    subtotal: 3999,
    discount: 200,
    vat: 189.95,
    total: 3988.95,
    paymentMethod: 'card',
    status: 'completed',
  },
  {
    id: 'ORD-240119-002',
    date: '2024-01-19T14:00:00',
    customer: { name: 'Fatima Abdullah', phone: '+971504567890' },
    items: [
      { name: 'Apple Watch Series 9', quantity: 1, price: 1599 },
      { name: 'Screen Protector', quantity: 2, price: 49 },
    ],
    subtotal: 1697,
    discount: 0,
    vat: 84.85,
    total: 1781.85,
    paymentMethod: 'split',
    status: 'completed',
  },
  {
    id: 'ORD-240118-001',
    date: '2024-01-18T11:30:00',
    customer: null,
    items: [
      { name: 'iPad Pro 12.9"', quantity: 1, price: 4499 },
    ],
    subtotal: 4499,
    discount: 0,
    vat: 224.95,
    total: 4723.95,
    paymentMethod: 'card',
    status: 'refunded',
  },
];

type OrderStatus = 'all' | 'completed' | 'pending' | 'refunded';
type PaymentFilter = 'all' | 'cash' | 'card' | 'split';
type DateFilter = 'all' | 'today' | 'week' | 'month';

export default function OrdersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<OrderStatus>('all');
  const [paymentFilter, setPaymentFilter] = useState<PaymentFilter>('all');
  const [dateFilter, setDateFilter] = useState<DateFilter>('all');
  const [selectedOrder, setSelectedOrder] = useState<typeof mockOrders[0] | null>(null);

  // Calculate stats
  const todayOrders = mockOrders.filter((o) => new Date(o.date).toDateString() === new Date().toDateString());
  const todayRevenue = todayOrders.reduce((sum, o) => sum + (o.status === 'completed' ? o.total : 0), 0);
  const completedOrders = mockOrders.filter((o) => o.status === 'completed');
  const totalRevenue = completedOrders.reduce((sum, o) => sum + o.total, 0);

  // Filter orders
  const filteredOrders = mockOrders.filter((order) => {
    const matchesSearch = order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer?.phone?.includes(searchQuery);

    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    const matchesPayment = paymentFilter === 'all' || order.paymentMethod === paymentFilter;

    let matchesDate = true;
    const orderDate = new Date(order.date);
    const today = new Date();
    if (dateFilter === 'today') {
      matchesDate = orderDate.toDateString() === today.toDateString();
    } else if (dateFilter === 'week') {
      const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
      matchesDate = orderDate >= weekAgo;
    } else if (dateFilter === 'month') {
      const monthAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);
      matchesDate = orderDate >= monthAgo;
    }

    return matchesSearch && matchesStatus && matchesPayment && matchesDate;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return { icon: CheckCircle, color: 'bg-green-500/10 text-green-600 dark:text-green-400', label: 'Completed' };
      case 'pending':
        return { icon: Clock, color: 'bg-orange-500/10 text-orange-600 dark:text-orange-400', label: 'Pending' };
      case 'refunded':
        return { icon: RefreshCw, color: 'bg-red-500/10 text-red-600 dark:text-red-400', label: 'Refunded' };
      default:
        return { icon: Clock, color: 'bg-muted text-muted-foreground', label: status };
    }
  };

  const getPaymentIcon = (method: string) => {
    switch (method) {
      case 'cash':
        return Banknote;
      case 'card':
        return CreditCard;
      default:
        return CreditCard;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-AE', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-AE', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const handleDownloadInvoice = (order: typeof mockOrders[0]) => {
    // Mock shop data
    const shopData = {
      name: 'Al Bareek Mobiles',
      address: 'Shop 12, Al Fahidi Street, Bur Dubai, Dubai, UAE',
      phone: '+971 4 123 4567',
      email: 'contact@albareek.ae',
      vatNumber: '100123456789',
      tradeLicense: 'TL-2024-123456',
    };

    generateInvoicePDF({
      orderNumber: order.id,
      date: new Date(order.date),
      items: order.items,
      subtotal: order.subtotal,
      discount: order.discount,
      vat: order.vat,
      total: order.total,
      paymentMethod: order.paymentMethod,
      customer: order.customer || undefined,
      shop: shopData,
    });
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Orders & Sales</h1>
          <p className="text-muted-foreground text-sm">View and manage all orders</p>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-2 border border-border text-foreground px-4 py-2 rounded-lg font-medium hover:bg-muted transition"
        >
          <Download className="w-4 h-4" />
          Export Report
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{mockOrders.length}</p>
              <p className="text-xs text-muted-foreground">Total Orders</p>
            </div>
          </div>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{totalRevenue.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground">Total Revenue (AED)</p>
            </div>
          </div>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{todayOrders.length}</p>
              <p className="text-xs text-muted-foreground">Today's Orders</p>
            </div>
          </div>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
              <Banknote className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{todayRevenue.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground">Today's Revenue (AED)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-card rounded-xl border border-border p-4">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by order ID, customer..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground placeholder:text-muted-foreground"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {/* Date Filter */}
            <select
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value as DateFilter)}
              className="px-3 py-2 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground text-sm"
            >
              <option value="all">All Time</option>
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
            </select>

            {/* Status Filter */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as OrderStatus)}
              className="px-3 py-2 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground text-sm"
            >
              <option value="all">All Status</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
              <option value="refunded">Refunded</option>
            </select>

            {/* Payment Filter */}
            <select
              value={paymentFilter}
              onChange={(e) => setPaymentFilter(e.target.value as PaymentFilter)}
              className="px-3 py-2 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground text-sm"
            >
              <option value="all">All Payments</option>
              <option value="cash">Cash</option>
              <option value="card">Card</option>
              <option value="split">Split</option>
            </select>
          </div>
        </div>
      </div>

      {/* Orders List */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground">Order ID</th>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground">Date</th>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground">Customer</th>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground">Items</th>
                <th className="text-right p-4 text-sm font-medium text-muted-foreground">Total</th>
                <th className="text-center p-4 text-sm font-medium text-muted-foreground">Payment</th>
                <th className="text-center p-4 text-sm font-medium text-muted-foreground">Status</th>
                <th className="text-center p-4 text-sm font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredOrders.map((order) => {
                const status = getStatusBadge(order.status);
                const PaymentIcon = getPaymentIcon(order.paymentMethod);

                return (
                  <tr key={order.id} className="hover:bg-muted/30 transition">
                    <td className="p-4">
                      <span className="font-mono text-sm font-medium text-primary">{order.id}</span>
                    </td>
                    <td className="p-4">
                      <div>
                        <p className="text-sm text-foreground">{formatDate(order.date)}</p>
                        <p className="text-xs text-muted-foreground">{formatTime(order.date)}</p>
                      </div>
                    </td>
                    <td className="p-4">
                      {order.customer ? (
                        <div>
                          <p className="text-sm text-foreground">{order.customer.name}</p>
                          <p className="text-xs text-muted-foreground">{order.customer.phone}</p>
                        </div>
                      ) : (
                        <span className="text-sm text-muted-foreground">Walk-in</span>
                      )}
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-muted-foreground">{order.items.length} item(s)</span>
                    </td>
                    <td className="p-4 text-right">
                      <span className="font-semibold text-foreground">{order.total.toFixed(2)} AED</span>
                    </td>
                    <td className="p-4">
                      <div className="flex justify-center">
                        <div className="flex items-center gap-1.5 text-sm text-muted-foreground capitalize">
                          <PaymentIcon className="w-4 h-4" />
                          {order.paymentMethod}
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex justify-center">
                        <span className={`inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full ${status.color}`}>
                          <status.icon className="w-3 h-3" />
                          {status.label}
                        </span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-center gap-1">
                        <button
                          type="button"
                          onClick={() => setSelectedOrder(order)}
                          className="p-2 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground transition"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDownloadInvoice(order)}
                          className="p-2 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground transition"
                          title="Download Invoice"
                        >
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden divide-y divide-border">
          {filteredOrders.map((order) => {
            const status = getStatusBadge(order.status);
            const PaymentIcon = getPaymentIcon(order.paymentMethod);

            return (
              <div key={order.id} className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="font-mono text-sm font-medium text-primary">{order.id}</span>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {formatDate(order.date)} • {formatTime(order.date)}
                    </p>
                  </div>
                  <span className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full ${status.color}`}>
                    <status.icon className="w-3 h-3" />
                    {status.label}
                  </span>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-sm text-foreground">
                      {order.customer?.name || 'Walk-in Customer'}
                    </p>
                    <p className="text-xs text-muted-foreground">{order.items.length} item(s)</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-foreground">{order.total.toFixed(2)} AED</p>
                    <div className="flex items-center justify-end gap-1 text-xs text-muted-foreground capitalize">
                      <PaymentIcon className="w-3 h-3" />
                      {order.paymentMethod}
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedOrder(order)}
                    className="flex-1 py-2 bg-muted text-foreground rounded-lg text-sm font-medium hover:bg-muted/80 transition"
                  >
                    View Details
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDownloadInvoice(order)}
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredOrders.length === 0 && (
          <div className="p-12 text-center">
            <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-medium text-foreground mb-1">No orders found</h3>
            <p className="text-sm text-muted-foreground">Try adjusting your filters</p>
          </div>
        )}
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-xl border border-border w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-border sticky top-0 bg-card">
              <div>
                <h2 className="text-lg font-semibold text-foreground">Order Details</h2>
                <p className="text-sm text-primary font-mono">{selectedOrder.id}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedOrder(null)}
                className="p-2 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 space-y-4">
              {/* Date & Status */}
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  {formatDate(selectedOrder.date)} at {formatTime(selectedOrder.date)}
                </div>
                <span className={`inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full ${getStatusBadge(selectedOrder.status).color}`}>
                  {getStatusBadge(selectedOrder.status).label}
                </span>
              </div>

              {/* Customer */}
              <div className="bg-muted/50 rounded-lg p-3">
                <p className="text-xs text-muted-foreground mb-1">Customer</p>
                {selectedOrder.customer ? (
                  <div>
                    <p className="font-medium text-foreground">{selectedOrder.customer.name}</p>
                    <p className="text-sm text-muted-foreground">{selectedOrder.customer.phone}</p>
                  </div>
                ) : (
                  <p className="text-foreground">Walk-in Customer</p>
                )}
              </div>

              {/* Items */}
              <div>
                <p className="text-sm font-medium text-foreground mb-2">Items</p>
                <div className="space-y-2">
                  {selectedOrder.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-start bg-muted/30 rounded-lg p-3">
                      <div className="flex-1">
                        <p className="text-sm text-foreground">{item.name}</p>
                        <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                      <p className="text-sm font-medium text-foreground">
                        {(item.price * item.quantity).toFixed(2)} AED
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Summary */}
              <div className="border-t border-border pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="text-foreground">{selectedOrder.subtotal.toFixed(2)} AED</span>
                </div>
                {selectedOrder.discount > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Discount</span>
                    <span className="text-green-600 dark:text-green-400">-{selectedOrder.discount.toFixed(2)} AED</span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">VAT (5%)</span>
                  <span className="text-foreground">{selectedOrder.vat.toFixed(2)} AED</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-2 border-t border-border">
                  <span className="text-foreground">Total</span>
                  <span className="text-primary">{selectedOrder.total.toFixed(2)} AED</span>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-muted/50 rounded-lg p-3 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Payment Method</span>
                <span className="text-sm font-medium text-foreground capitalize flex items-center gap-2">
                  {selectedOrder.paymentMethod === 'cash' ? <Banknote className="w-4 h-4" /> : <CreditCard className="w-4 h-4" />}
                  {selectedOrder.paymentMethod}
                </span>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => handleDownloadInvoice(selectedOrder)}
                  className="flex-1 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download Invoice
                </button>
                {selectedOrder.customer?.phone && (
                  <button
                    type="button"
                    className="px-4 py-3 bg-green-500/10 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-500/20 transition"
                    title="Send via WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
