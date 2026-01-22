'use client';

import { useState } from 'react';
import {
  MessageCircle,
  Search,
  Phone,
  Clock,
  Check,
  CheckCheck,
  X,
  Package,
  User,
  Calendar,
  Filter,
  MoreVertical,
  Send,
  ExternalLink,
  ShoppingCart,
  AlertCircle,
  ArrowRight,
  Plus,
  FileText,
  RefreshCw,
} from 'lucide-react';

// Mock WhatsApp orders data
const mockWhatsAppOrders = [
  {
    id: 'WA-001',
    customer: { name: 'Khalid Ahmed', phone: '+971501234567' },
    message: 'Hi, I want to order iPhone 15 Pro Max 256GB in Natural Titanium. Can you deliver to JLT?',
    items: [
      { name: 'iPhone 15 Pro Max 256GB', quantity: 1, price: 4299 },
    ],
    status: 'pending',
    createdAt: '2024-01-20T14:30:00',
    lastMessage: '2024-01-20T14:35:00',
    unread: true,
  },
  {
    id: 'WA-002',
    customer: { name: 'Fatima Hassan', phone: '+971502345678' },
    message: 'Can I get 2 AirPods Pro? Also need a fast charger. What\'s the total?',
    items: [
      { name: 'AirPods Pro (2nd Gen)', quantity: 2, price: 899 },
      { name: 'USB-C Fast Charger 65W', quantity: 1, price: 129 },
    ],
    status: 'confirmed',
    createdAt: '2024-01-20T12:15:00',
    lastMessage: '2024-01-20T13:20:00',
    unread: false,
  },
  {
    id: 'WA-003',
    customer: { name: 'Omar Saleh', phone: '+971503456789' },
    message: 'I ordered Samsung Galaxy S24 Ultra yesterday. When will it be delivered?',
    items: [
      { name: 'Samsung Galaxy S24 Ultra', quantity: 1, price: 3999 },
    ],
    status: 'processing',
    createdAt: '2024-01-19T16:45:00',
    lastMessage: '2024-01-20T09:00:00',
    unread: true,
  },
  {
    id: 'WA-004',
    customer: { name: 'Sara Ali', phone: '+971504567890' },
    message: 'Thanks for the delivery! The iPad is working great.',
    items: [
      { name: 'iPad Pro 12.9"', quantity: 1, price: 4499 },
    ],
    status: 'completed',
    createdAt: '2024-01-18T10:30:00',
    lastMessage: '2024-01-19T14:00:00',
    unread: false,
  },
  {
    id: 'WA-005',
    customer: { name: 'Mohammed Rashid', phone: '+971505678901' },
    message: 'Please cancel my order. I found it cheaper somewhere else.',
    items: [
      { name: 'MacBook Air M3', quantity: 1, price: 4999 },
    ],
    status: 'cancelled',
    createdAt: '2024-01-17T11:00:00',
    lastMessage: '2024-01-17T15:30:00',
    unread: false,
  },
];

type OrderStatus = 'all' | 'pending' | 'confirmed' | 'processing' | 'completed' | 'cancelled';

export default function WhatsAppOrdersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<OrderStatus>('all');
  const [selectedOrder, setSelectedOrder] = useState<typeof mockWhatsAppOrders[0] | null>(null);
  const [showConvertModal, setShowConvertModal] = useState(false);
  const [orderToConvert, setOrderToConvert] = useState<typeof mockWhatsAppOrders[0] | null>(null);

  // Stats
  const pendingCount = mockWhatsAppOrders.filter((o) => o.status === 'pending').length;
  const unreadCount = mockWhatsAppOrders.filter((o) => o.unread).length;
  const todayOrders = mockWhatsAppOrders.filter(
    (o) => new Date(o.createdAt).toDateString() === new Date().toDateString()
  ).length;

  // Filter orders
  const filteredOrders = mockWhatsAppOrders.filter((order) => {
    const matchesSearch =
      order.customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.phone.includes(searchQuery) ||
      order.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    const badges: Record<string, { color: string; label: string }> = {
      pending: { color: 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400', label: 'Pending' },
      confirmed: { color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400', label: 'Confirmed' },
      processing: { color: 'bg-purple-500/10 text-purple-600 dark:text-purple-400', label: 'Processing' },
      completed: { color: 'bg-green-500/10 text-green-600 dark:text-green-400', label: 'Completed' },
      cancelled: { color: 'bg-red-500/10 text-red-600 dark:text-red-400', label: 'Cancelled' },
    };
    return badges[status] || { color: 'bg-muted text-muted-foreground', label: status };
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor(diff / (1000 * 60));

    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return date.toLocaleDateString('en-AE', { day: 'numeric', month: 'short' });
  };

  const handleConvertToOrder = (order: typeof mockWhatsAppOrders[0]) => {
    setOrderToConvert(order);
    setShowConvertModal(true);
  };

  const handleConfirmConvert = () => {
    console.log('Converting to POS order:', orderToConvert);
    setShowConvertModal(false);
    setOrderToConvert(null);
  };

  const openWhatsApp = (phone: string) => {
    window.open(`https://wa.me/${phone.replace(/[^0-9]/g, '')}`, '_blank');
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <MessageCircle className="w-7 h-7 text-green-500" />
            WhatsApp Orders
          </h1>
          <p className="text-muted-foreground text-sm">Manage orders received via WhatsApp</p>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition"
        >
          <RefreshCw className="w-4 h-4" />
          Sync Messages
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-500/10 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{pendingCount}</p>
              <p className="text-xs text-muted-foreground">Pending</p>
            </div>
          </div>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{unreadCount}</p>
              <p className="text-xs text-muted-foreground">Unread</p>
            </div>
          </div>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{todayOrders}</p>
              <p className="text-xs text-muted-foreground">Today</p>
            </div>
          </div>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <ShoppingCart className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{mockWhatsAppOrders.length}</p>
              <p className="text-xs text-muted-foreground">Total Orders</p>
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
              placeholder="Search by name, phone, or order ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground placeholder:text-muted-foreground"
            />
          </div>

          {/* Status Filter */}
          <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0">
            {(['all', 'pending', 'confirmed', 'processing', 'completed'] as OrderStatus[]).map((status) => (
              <button
                key={status}
                type="button"
                onClick={() => setStatusFilter(status)}
                className={`px-3 py-2 rounded-lg text-sm font-medium capitalize whitespace-nowrap transition ${
                  statusFilter === status
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:text-foreground'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Orders List */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="divide-y divide-border">
          {filteredOrders.map((order) => {
            const statusBadge = getStatusBadge(order.status);
            const orderTotal = order.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

            return (
              <div
                key={order.id}
                className={`p-4 hover:bg-muted/30 transition cursor-pointer ${
                  order.unread ? 'bg-green-500/5' : ''
                }`}
                onClick={() => setSelectedOrder(order)}
              >
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    {order.unread && (
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-card" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium text-foreground">{order.customer.name}</h3>
                          {order.unread && (
                            <span className="text-xs bg-green-500 text-white px-1.5 py-0.5 rounded">New</span>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground">{order.customer.phone}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <span className={`text-xs px-2 py-1 rounded-full ${statusBadge.color}`}>
                          {statusBadge.label}
                        </span>
                        <p className="text-xs text-muted-foreground mt-1">{formatTime(order.lastMessage)}</p>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{order.message}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm">
                        <Package className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{order.items.length} item(s)</span>
                        <span className="text-foreground font-medium">{orderTotal.toLocaleString()} AED</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            openWhatsApp(order.customer.phone);
                          }}
                          className="p-2 hover:bg-green-500/10 rounded-lg text-green-600 dark:text-green-400 transition"
                          title="Open WhatsApp"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </button>
                        {order.status === 'pending' && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleConvertToOrder(order);
                            }}
                            className="p-2 hover:bg-primary/10 rounded-lg text-primary transition"
                            title="Convert to Order"
                          >
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredOrders.length === 0 && (
          <div className="p-12 text-center">
            <MessageCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-medium text-foreground mb-1">No orders found</h3>
            <p className="text-sm text-muted-foreground">Try adjusting your filters</p>
          </div>
        )}
      </div>

      {/* Order Details Slide-over */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
          <div
            className="absolute inset-0"
            onClick={() => setSelectedOrder(null)}
          />
          <div className="relative bg-card w-full max-w-md h-full overflow-y-auto animate-in slide-in-from-right">
            {/* Header */}
            <div className="sticky top-0 bg-card border-b border-border p-4 flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-foreground">Order Details</h2>
                <p className="text-sm text-muted-foreground">{selectedOrder.id}</p>
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
              {/* Customer Info */}
              <div className="bg-muted/50 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{selectedOrder.customer.name}</p>
                    <p className="text-sm text-muted-foreground">{selectedOrder.customer.phone}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => openWhatsApp(selectedOrder.customer.phone)}
                  className="w-full py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </button>
              </div>

              {/* Status */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Status</span>
                <span className={`text-sm px-3 py-1 rounded-full ${getStatusBadge(selectedOrder.status).color}`}>
                  {getStatusBadge(selectedOrder.status).label}
                </span>
              </div>

              {/* Message */}
              <div>
                <p className="text-sm text-muted-foreground mb-2">Customer Message</p>
                <div className="bg-green-500/10 rounded-lg p-3 text-sm text-foreground">
                  {selectedOrder.message}
                </div>
              </div>

              {/* Items */}
              <div>
                <p className="text-sm text-muted-foreground mb-2">Order Items</p>
                <div className="space-y-2">
                  {selectedOrder.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center bg-muted/30 rounded-lg p-3">
                      <div>
                        <p className="text-sm font-medium text-foreground">{item.name}</p>
                        <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                      <p className="text-sm font-medium text-foreground">
                        {(item.price * item.quantity).toLocaleString()} AED
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Total */}
              <div className="bg-primary/5 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-foreground">Total</span>
                  <span className="text-xl font-bold text-primary">
                    {selectedOrder.items.reduce((sum, item) => sum + item.price * item.quantity, 0).toLocaleString()} AED
                  </span>
                </div>
              </div>

              {/* Timestamps */}
              <div className="text-sm space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Created</span>
                  <span className="text-foreground">
                    {new Date(selectedOrder.createdAt).toLocaleString('en-AE')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Last Message</span>
                  <span className="text-foreground">
                    {new Date(selectedOrder.lastMessage).toLocaleString('en-AE')}
                  </span>
                </div>
              </div>

              {/* Actions */}
              {selectedOrder.status === 'pending' && (
                <div className="pt-4 space-y-3">
                  <button
                    type="button"
                    onClick={() => handleConvertToOrder(selectedOrder)}
                    className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Convert to POS Order
                  </button>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      className="py-2 border border-green-500 text-green-600 dark:text-green-400 rounded-lg font-medium hover:bg-green-500/10 transition"
                    >
                      Confirm
                    </button>
                    <button
                      type="button"
                      className="py-2 border border-red-500 text-red-600 dark:text-red-400 rounded-lg font-medium hover:bg-red-500/10 transition"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Convert to Order Modal */}
      {showConvertModal && orderToConvert && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-xl border border-border w-full max-w-md">
            <div className="p-4 border-b border-border">
              <h2 className="text-lg font-semibold text-foreground">Convert to POS Order</h2>
            </div>
            <div className="p-4 space-y-4">
              <div className="bg-muted/50 rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-2">Customer</p>
                <p className="font-medium text-foreground">{orderToConvert.customer.name}</p>
                <p className="text-sm text-muted-foreground">{orderToConvert.customer.phone}</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">Items to add to cart</p>
                <div className="space-y-2">
                  {orderToConvert.items.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-foreground">{item.name} x{item.quantity}</span>
                      <span className="text-foreground font-medium">{(item.price * item.quantity).toLocaleString()} AED</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-sm text-muted-foreground">
                This will open the POS with these items pre-loaded in the cart.
              </p>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowConvertModal(false)}
                  className="flex-1 py-3 border border-border rounded-lg text-foreground hover:bg-muted transition"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleConfirmConvert}
                  className="flex-1 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition"
                >
                  Go to POS
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
