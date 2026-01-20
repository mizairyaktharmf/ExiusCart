// ============================================
// ExiusCart Shared Types
// ============================================

// User & Auth Types
export interface User {
  id: string;
  shopId: string;
  name: string;
  email: string;
  phone?: string;
  role: 'owner' | 'staff';
  permissions: string[];
  isActive: boolean;
  lastLogin?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Admin {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'super_admin';
  isActive: boolean;
  lastLogin?: string;
  createdAt: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
  expiresIn: number;
}

// Shop Types
export interface Shop {
  id: string;
  name: string;
  nameAr?: string;
  slug: string;
  ownerName: string;
  email: string;
  phone: string;
  address?: string;
  logoUrl?: string;
  tradeLicense?: string;
  vatNumber?: string;
  language: 'ar' | 'en';
  currency: string;
  vatRate: number;
  subdomain?: string;
  customDomain?: string;
  status: 'pending' | 'active' | 'suspended';
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

// Plan & Subscription Types
export interface Plan {
  id: string;
  name: string;
  nameAr?: string;
  slug: string;
  type: 'one_time' | 'monthly';
  price: number;
  currency: string;
  features: PlanFeatures;
  isActive: boolean;
  sortOrder: number;
  createdAt: string;
}

export interface PlanFeatures {
  pos: boolean;
  invoices: boolean;
  whatsappOrders: boolean;
  inventory: boolean;
  stockAlerts: boolean;
  maxProducts: number;
  maxOrders: number;
  supportLevel: 'basic' | 'priority';
}

export interface Subscription {
  id: string;
  shopId: string;
  planId: string;
  type: 'one_time' | 'monthly';
  status: 'pending' | 'active' | 'expired' | 'cancelled';
  amount: number;
  currency: string;
  startsAt?: string;
  expiresAt?: string;
  billingCycleStart?: string;
  billingCycleEnd?: string;
  createdAt: string;
  updatedAt: string;
}

// Payment Types
export interface Payment {
  id: string;
  shopId: string;
  subscriptionId?: string;
  amount: number;
  currency: string;
  paymentMethod: 'bank_transfer' | 'card' | 'cash';
  paymentReference?: string;
  status: 'pending' | 'confirmed' | 'rejected';
  bankName?: string;
  transferDate?: string;
  transferProofUrl?: string;
  confirmedBy?: string;
  confirmedAt?: string;
  rejectionReason?: string;
  notes?: string;
  createdAt: string;
}

// Product & Category Types
export interface Category {
  id: string;
  shopId: string;
  name: string;
  nameAr?: string;
  slug: string;
  description?: string;
  imageUrl?: string;
  parentId?: string;
  sortOrder: number;
  isActive: boolean;
  createdAt: string;
}

export interface Product {
  id: string;
  shopId: string;
  categoryId?: string;
  name: string;
  nameAr?: string;
  description?: string;
  sku?: string;
  barcode?: string;
  costPrice: number;
  sellingPrice: number;
  stockQty: number;
  minStockLevel: number;
  trackInventory: boolean;
  imageUrl?: string;
  images: string[];
  isActive: boolean;
  isFeatured: boolean;
  supplierName?: string;
  supplierNotes?: string;
  createdAt: string;
  updatedAt: string;
}

// Inventory Types
export interface StockMovement {
  id: string;
  shopId: string;
  productId: string;
  type: 'in' | 'out' | 'adjustment';
  quantity: number;
  referenceType?: 'order' | 'manual' | 'return';
  referenceId?: string;
  notes?: string;
  createdBy?: string;
  createdAt: string;
}

// Customer Types
export interface Customer {
  id: string;
  shopId: string;
  name: string;
  phone?: string;
  email?: string;
  address?: string;
  notes?: string;
  totalOrders: number;
  totalSpent: number;
  createdAt: string;
  updatedAt: string;
}

// Order Types
export interface Order {
  id: string;
  shopId: string;
  customerId?: string;
  orderNumber: string;
  orderType: 'pos' | 'whatsapp';
  subtotal: number;
  vatAmount: number;
  discountAmount: number;
  totalAmount: number;
  totalCost: number;
  totalProfit: number;
  status: 'new' | 'confirmed' | 'paid' | 'delivered' | 'cancelled';
  paymentStatus: 'pending' | 'partial' | 'paid';
  customerName?: string;
  customerPhone?: string;
  customerAddress?: string;
  notes?: string;
  createdBy?: string;
  createdAt: string;
  updatedAt: string;
}

export interface OrderItem {
  id: string;
  orderId: string;
  productId?: string;
  productName: string;
  quantity: number;
  unitPrice: number;
  costPrice: number;
  discount: number;
  total: number;
  createdAt: string;
}

export interface OrderPayment {
  id: string;
  orderId: string;
  paymentMethod: 'cash' | 'card' | 'bank_transfer';
  amount: number;
  reference?: string;
  notes?: string;
  createdAt: string;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// Dashboard Stats Types
export interface DashboardStats {
  todaySales: number;
  todayOrders: number;
  pendingOrders: number;
  lowStockProducts: number;
  totalCustomers: number;
  monthlyRevenue: number;
}

export interface AdminDashboardStats {
  totalShops: number;
  activeSubscriptions: number;
  pendingPayments: number;
  monthlyRevenue: number;
  newRegistrations: number;
  expiringSubscriptions: number;
}
