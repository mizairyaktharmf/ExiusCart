# ExiusCart - Smart Multi-Shop Business System

> UAE-Focused POS + WhatsApp Orders + Inventory Management Platform

**Domains:** `exiuscart.com` | `exiuscart.ae`

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack](#2-tech-stack)
3. [System Architecture](#3-system-architecture)
4. [User Roles & Access](#4-user-roles--access)
5. [Pricing & Plans](#5-pricing--plans)
6. [Feature Modules](#6-feature-modules)
7. [Database Design](#7-database-design)
8. [API Structure](#8-api-structure)
9. [Domain & Routing Strategy](#9-domain--routing-strategy)
10. [Payment System](#10-payment-system)
11. [Security](#11-security)
12. [Folder Structure](#12-folder-structure)
13. [Deployment Strategy](#13-deployment-strategy)
14. [Future Roadmap](#14-future-roadmap)

---

## 1. Project Overview

### What is ExiusCart?

ExiusCart is a **multi-tenant SaaS platform** designed for small and medium businesses in the UAE. It provides:

- **Smart POS System** - Create bills, invoices, track payments
- **WhatsApp Order Manager** - Receive and manage orders via WhatsApp
- **Inventory Management** - Track stock, low-stock alerts
- **Multi-language Support** - Arabic & English

### Business Model

| Type | Description |
|------|-------------|
| **Multi-Tenant** | One system, many shops, isolated data |
| **One-Time Payment** | Lifetime license (699-1200 AED) |
| **Monthly Subscription** | Pay-as-you-go (69-129 AED/month) |
| **Payment Method** | Bank Transfer (Phase 1) |

### Target Market

- Small retail shops (UAE)
- Mobile/Electronics shops
- Grocery stores
- Service businesses
- Home businesses (Instagram/WhatsApp sellers)

---

## 2. Tech Stack

### Why FastAPI + Next.js?

| Technology | Reason |
|------------|--------|
| **FastAPI** | Fast, modern Python framework, async support, auto OpenAPI docs |
| **Next.js 14** | SSR for SEO, App Router, excellent for dashboards |
| **PostgreSQL** | Robust, perfect for multi-tenant with shop_id isolation |
| **Redis** | Caching, session management, rate limiting |
| **TypeScript** | Type safety on frontend |

### Full Stack

```
┌─────────────────────────────────────────────────────────────┐
│                        FRONTEND                              │
│                                                              │
│   Next.js 14 (App Router)                                   │
│   ├── Landing Page (exiuscart.com)                          │
│   ├── Admin Dashboard (/admin)                              │
│   ├── Shop Dashboard (shop.exiuscart.com)                   │
│   └── Customer Order Page (shop.exiuscart.com/order)        │
│                                                              │
│   Libraries:                                                 │
│   - Tailwind CSS (styling)                                  │
│   - shadcn/ui (components)                                  │
│   - React Query (data fetching)                             │
│   - Zustand (state management)                              │
│   - next-intl (i18n - Arabic/English)                       │
│   - React Hook Form + Zod (forms)                           │
│   - jsPDF / xlsx (exports)                                  │
│                                                              │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                        BACKEND                               │
│                                                              │
│   FastAPI (Python 3.11+)                                    │
│   ├── REST API                                              │
│   ├── JWT Authentication                                    │
│   ├── Multi-tenant middleware                               │
│   └── Background tasks (Celery)                             │
│                                                              │
│   Libraries:                                                 │
│   - SQLAlchemy (ORM)                                        │
│   - Alembic (migrations)                                    │
│   - Pydantic (validation)                                   │
│   - python-jose (JWT)                                       │
│   - passlib (password hashing)                              │
│   - asyncpg (async PostgreSQL)                              │
│                                                              │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                       DATABASE                               │
│                                                              │
│   PostgreSQL 15                                             │
│   └── Multi-tenant schema (shop_id on every table)          │
│                                                              │
│   Redis                                                      │
│   └── Caching, sessions, rate limiting                      │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 3. System Architecture

### Multi-Tenant Design

Every table includes `shop_id` for data isolation:

```
┌──────────────────────────────────────────────────────┐
│                   SINGLE DATABASE                     │
│                                                       │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐              │
│  │ Shop A  │  │ Shop B  │  │ Shop C  │              │
│  │ Data    │  │ Data    │  │ Data    │              │
│  │(shop_id │  │(shop_id │  │(shop_id │              │
│  │  = 1)   │  │  = 2)   │  │  = 3)   │              │
│  └─────────┘  └─────────┘  └─────────┘              │
│                                                       │
│  All queries filtered by shop_id automatically       │
│                                                       │
└──────────────────────────────────────────────────────┘
```

### Request Flow

```
User Request
     │
     ▼
┌─────────────────┐
│  Subdomain      │  albareek.exiuscart.com
│  Detection      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Shop Lookup    │  slug → shop_id
│  Middleware     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  JWT Auth       │  Verify token + shop_id
│  Middleware     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  API Endpoint   │  All queries use shop_id
│                 │
└─────────────────┘
```

---

## 4. User Roles & Access

### Role 1: Super Admin (System Owner - You)

**URL:** `admin.exiuscart.com` or `exiuscart.com/admin`

| Feature | Access |
|---------|--------|
| View all shops | ✅ |
| Create/suspend shops | ✅ |
| View subscription status | ✅ |
| View payment records | ✅ |
| Reset shop passwords | ✅ |
| View revenue reports | ✅ |
| Access shop business data | ❌ |

**Admin Dashboard Sections:**
```
/admin
├── Dashboard
│   ├── Total shops
│   ├── Active subscriptions
│   ├── Revenue this month
│   └── New registrations
│
├── Shops Management
│   ├── All shops list
│   ├── Create new shop
│   ├── Edit shop details
│   ├── Activate/Suspend
│   └── Assign custom domain
│
├── Subscriptions
│   ├── Active subscriptions
│   ├── Expiring soon
│   ├── Expired
│   └── One-time licenses
│
├── Payments
│   ├── All transactions
│   ├── Pending bank transfers
│   ├── Confirm payment
│   └── Revenue reports
│
└── Settings
    ├── Plans & pricing
    ├── System settings
    └── Admin account
```

### Role 2: Shop Owner (Your Clients)

**URL:** `{shop-slug}.exiuscart.com`

| Feature | Access |
|---------|--------|
| POS billing | ✅ (based on plan) |
| WhatsApp orders | ✅ (Business+ plan) |
| Inventory | ✅ (Pro plan) |
| Own products | ✅ |
| Own customers | ✅ |
| Other shop data | ❌ |

**Shop Dashboard Sections:**
```
/{shop}.exiuscart.com
├── Dashboard
│   ├── Today's sales
│   ├── Pending orders
│   ├── Low stock alerts
│   └── Quick actions
│
├── POS (Point of Sale)
│   ├── New bill
│   ├── Product search
│   ├── Payment processing
│   └── Print/export receipt
│
├── Orders (WhatsApp)
│   ├── New orders
│   ├── Processing
│   ├── Completed
│   └── Order details
│
├── Products
│   ├── All products
│   ├── Add product
│   ├── Categories
│   └── Import/Export
│
├── Inventory
│   ├── Stock levels
│   ├── Stock in/out
│   ├── Low stock alerts
│   └── Stock history
│
├── Customers
│   ├── Customer list
│   └── Customer history
│
├── Reports
│   ├── Sales report
│   ├── Product report
│   ├── Payment methods
│   └── Export PDF/Excel
│
└── Settings
    ├── Shop profile
    ├── VAT settings
    ├── Receipt template
    ├── Language (AR/EN)
    └── Subscription status
```

### Role 3: Shop Staff (Future)

Limited access based on permissions set by shop owner.

---

## 5. Pricing & Plans

### One-Time Payment (Lifetime License)

| Plan | Price | Features |
|------|-------|----------|
| **Starter** | 699 AED | POS + Billing + Basic Reports |
| **Business** | 899 AED | Starter + WhatsApp Orders |
| **Pro** | 1,200 AED | Business + Inventory + Stock Alerts |

### Monthly Subscription

| Plan | Price/Month | Features |
|------|-------------|----------|
| **Starter** | 69 AED | POS + Billing + Basic Reports |
| **Business** | 89 AED | Starter + WhatsApp Orders |
| **Pro** | 129 AED | Business + Inventory + Stock Alerts |

### Feature Matrix

| Feature | Starter | Business | Pro |
|---------|---------|----------|-----|
| POS Billing | ✅ | ✅ | ✅ |
| Invoice Generation | ✅ | ✅ | ✅ |
| VAT Calculation | ✅ | ✅ | ✅ |
| Daily Sales Report | ✅ | ✅ | ✅ |
| Export PDF/Excel | ✅ | ✅ | ✅ |
| Product Management | ✅ | ✅ | ✅ |
| Customer Management | ✅ | ✅ | ✅ |
| WhatsApp Order Link | ❌ | ✅ | ✅ |
| Order Dashboard | ❌ | ✅ | ✅ |
| Order Status Tracking | ❌ | ✅ | ✅ |
| Inventory Management | ❌ | ❌ | ✅ |
| Stock In/Out | ❌ | ❌ | ✅ |
| Low Stock Alerts | ❌ | ❌ | ✅ |
| Supplier Notes | ❌ | ❌ | ✅ |

### Add-Ons (Future)

| Add-On | Price |
|--------|-------|
| Custom Domain Setup | 300-500 AED (one-time) |
| WhatsApp API Integration | 50 AED/month |
| Multiple Branches | 200 AED/branch |
| Priority Support | 100 AED/month |

---

## 6. Feature Modules

### Module 1: Smart POS

```
┌─────────────────────────────────────────────────────────┐
│                    POS SCREEN                            │
│                                                          │
│  ┌──────────────────────┐  ┌─────────────────────────┐  │
│  │   PRODUCT SEARCH     │  │      CART               │  │
│  │   [🔍 Search...]     │  │                         │  │
│  │                      │  │  iPhone 15 Pro   x1     │  │
│  │   Quick Categories:  │  │  AED 4,299              │  │
│  │   [Phones] [Laptops] │  │                         │  │
│  │   [Access] [Service] │  │  AirPods Pro     x2     │  │
│  │                      │  │  AED 998                │  │
│  │   Recent Products:   │  │                         │  │
│  │   ┌─────┐ ┌─────┐   │  │  ─────────────────────  │  │
│  │   │     │ │     │   │  │  Subtotal: AED 5,297    │  │
│  │   │ 📱  │ │ 💻  │   │  │  VAT (5%): AED 264.85   │  │
│  │   │     │ │     │   │  │  ─────────────────────  │  │
│  │   └─────┘ └─────┘   │  │  TOTAL: AED 5,561.85    │  │
│  │                      │  │                         │  │
│  └──────────────────────┘  │  [Cash] [Card] [Split]  │  │
│                            │                         │  │
│                            │  [💳 COMPLETE SALE]     │  │
│                            └─────────────────────────┘  │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

**Features:**
- Quick product search
- Barcode scanner support (future)
- Dynamic product addition
- Multiple payment methods
- Split payment (Cash + Card)
- VAT calculation (5% UAE)
- Profit calculation per sale
- Receipt printing
- PDF/Excel export

**Payment Methods (Phase 1):**
- Cash
- Credit/Debit Card
- Bank Transfer
- Split Payment

### Module 2: WhatsApp Order Manager

```
Customer Journey:
─────────────────

1. Shop shares catalog link:
   albareek.exiuscart.com/order

2. Customer views products:
   ┌─────────────────────────────┐
   │    AL BAREEK MOBILES        │
   │                             │
   │   [📱 iPhone 15]  AED 4,299 │
   │   [📱 Samsung S24] AED 3,899│
   │   [🎧 AirPods]    AED 499   │
   │                             │
   │   Cart: 2 items - AED 4,798 │
   │   [📲 Order via WhatsApp]   │
   └─────────────────────────────┘

3. Click "Order via WhatsApp" → Opens WhatsApp with pre-filled message

4. Shop receives order in dashboard:
   ┌─────────────────────────────────────────────┐
   │  ORDERS                                      │
   │                                              │
   │  ● NEW    [Order #1234]                     │
   │           Ahmad - iPhone 15 + AirPods       │
   │           AED 4,798                         │
   │           [View] [Mark Paid] [Delivered]    │
   │                                              │
   │  ○ PAID   [Order #1233]                     │
   │           Sara - Samsung S24                │
   │           AED 3,899                         │
   │                                              │
   └─────────────────────────────────────────────┘
```

**Order Statuses:**
- New (orange)
- Confirmed (blue)
- Paid (green)
- Delivered (gray)
- Cancelled (red)

### Module 3: Inventory Management

```
┌─────────────────────────────────────────────────────────┐
│                 INVENTORY DASHBOARD                      │
│                                                          │
│  ⚠️ LOW STOCK ALERTS (3)                                │
│  ┌────────────────────────────────────────────────────┐ │
│  │ iPhone 15 Pro    │ Stock: 2  │ Min: 5  │ [Restock] │ │
│  │ AirPods Pro      │ Stock: 3  │ Min: 10 │ [Restock] │ │
│  │ USB-C Cable      │ Stock: 5  │ Min: 20 │ [Restock] │ │
│  └────────────────────────────────────────────────────┘ │
│                                                          │
│  📦 STOCK MOVEMENTS                                     │
│  ┌────────────────────────────────────────────────────┐ │
│  │ Today    │ IN: 25 items  │ OUT: 18 items           │ │
│  │ This Week│ IN: 150 items │ OUT: 89 items           │ │
│  └────────────────────────────────────────────────────┘ │
│                                                          │
│  [+ Stock In]  [- Stock Out]  [📊 Report]               │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

**Features:**
- Real-time stock tracking
- Minimum stock threshold per product
- Low stock alerts (dashboard, email)
- Stock in/out logging
- Supplier notes
- Stock history

---

## 7. Database Design

### Complete Schema

```sql
-- =====================================================
-- CORE TABLES
-- =====================================================

-- Shops (Tenants)
CREATE TABLE shops (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255),
    slug VARCHAR(100) UNIQUE NOT NULL,
    owner_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20) NOT NULL,
    address TEXT,
    logo_url VARCHAR(500),

    -- Business Info
    trade_license VARCHAR(100),
    vat_number VARCHAR(50),

    -- Settings
    language VARCHAR(5) DEFAULT 'ar',  -- 'ar' or 'en'
    currency VARCHAR(3) DEFAULT 'AED',
    vat_rate DECIMAL(5,2) DEFAULT 5.00,

    -- Domain
    subdomain VARCHAR(100) UNIQUE,
    custom_domain VARCHAR(255) UNIQUE,

    -- Status
    status VARCHAR(20) DEFAULT 'pending',  -- pending, active, suspended
    is_verified BOOLEAN DEFAULT FALSE,

    -- Timestamps
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Users (Shop Owners & Staff)
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    shop_id UUID REFERENCES shops(id) ON DELETE CASCADE,

    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    password_hash VARCHAR(255) NOT NULL,

    role VARCHAR(20) DEFAULT 'owner',  -- owner, staff
    permissions JSONB DEFAULT '[]',

    is_active BOOLEAN DEFAULT TRUE,
    last_login TIMESTAMP,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    UNIQUE(shop_id, email)
);

-- Super Admins (System Owners)
CREATE TABLE admins (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,

    role VARCHAR(20) DEFAULT 'admin',  -- admin, super_admin
    is_active BOOLEAN DEFAULT TRUE,
    last_login TIMESTAMP,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================================================
-- SUBSCRIPTION & PAYMENT TABLES
-- =====================================================

-- Plans
CREATE TABLE plans (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL,
    name_ar VARCHAR(100),
    slug VARCHAR(50) UNIQUE NOT NULL,

    type VARCHAR(20) NOT NULL,  -- 'one_time' or 'monthly'
    price DECIMAL(10,2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'AED',

    features JSONB NOT NULL,
    /*
    Features JSON example:
    {
        "pos": true,
        "invoices": true,
        "whatsapp_orders": true,
        "inventory": true,
        "stock_alerts": true,
        "max_products": 1000,
        "max_orders": -1,  // -1 = unlimited
        "support_level": "priority"
    }
    */

    is_active BOOLEAN DEFAULT TRUE,
    sort_order INT DEFAULT 0,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Subscriptions
CREATE TABLE subscriptions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    shop_id UUID REFERENCES shops(id) ON DELETE CASCADE,
    plan_id UUID REFERENCES plans(id),

    type VARCHAR(20) NOT NULL,  -- 'one_time' or 'monthly'
    status VARCHAR(20) DEFAULT 'pending',  -- pending, active, expired, cancelled

    amount DECIMAL(10,2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'AED',

    starts_at TIMESTAMP,
    expires_at TIMESTAMP,  -- NULL for one_time

    -- For monthly: track billing cycle
    billing_cycle_start DATE,
    billing_cycle_end DATE,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Payments
CREATE TABLE payments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    shop_id UUID REFERENCES shops(id) ON DELETE CASCADE,
    subscription_id UUID REFERENCES subscriptions(id),

    amount DECIMAL(10,2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'AED',

    payment_method VARCHAR(50) NOT NULL,  -- 'bank_transfer'
    payment_reference VARCHAR(255),  -- Bank reference number

    status VARCHAR(20) DEFAULT 'pending',  -- pending, confirmed, rejected

    -- Bank transfer details
    bank_name VARCHAR(100),
    transfer_date DATE,
    transfer_proof_url VARCHAR(500),  -- Screenshot/receipt upload

    -- Admin confirmation
    confirmed_by UUID REFERENCES admins(id),
    confirmed_at TIMESTAMP,
    rejection_reason TEXT,

    notes TEXT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================================================
-- PRODUCT & INVENTORY TABLES
-- =====================================================

-- Categories
CREATE TABLE categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    shop_id UUID REFERENCES shops(id) ON DELETE CASCADE,

    name VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255),
    slug VARCHAR(100),
    description TEXT,
    image_url VARCHAR(500),

    parent_id UUID REFERENCES categories(id),
    sort_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    UNIQUE(shop_id, slug)
);

-- Products
CREATE TABLE products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    shop_id UUID REFERENCES shops(id) ON DELETE CASCADE,
    category_id UUID REFERENCES categories(id),

    name VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255),
    description TEXT,
    sku VARCHAR(100),
    barcode VARCHAR(100),

    -- Pricing
    cost_price DECIMAL(10,2) DEFAULT 0,
    selling_price DECIMAL(10,2) NOT NULL,

    -- Inventory
    stock_qty INT DEFAULT 0,
    min_stock_level INT DEFAULT 0,
    track_inventory BOOLEAN DEFAULT TRUE,

    -- Media
    image_url VARCHAR(500),
    images JSONB DEFAULT '[]',

    -- Status
    is_active BOOLEAN DEFAULT TRUE,
    is_featured BOOLEAN DEFAULT FALSE,

    -- Supplier
    supplier_name VARCHAR(255),
    supplier_notes TEXT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    UNIQUE(shop_id, sku)
);

-- Stock Movements
CREATE TABLE stock_movements (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    shop_id UUID REFERENCES shops(id) ON DELETE CASCADE,
    product_id UUID REFERENCES products(id) ON DELETE CASCADE,

    type VARCHAR(20) NOT NULL,  -- 'in', 'out', 'adjustment'
    quantity INT NOT NULL,

    reference_type VARCHAR(50),  -- 'order', 'manual', 'return'
    reference_id UUID,

    notes TEXT,
    created_by UUID REFERENCES users(id),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================================================
-- ORDER TABLES
-- =====================================================

-- Customers
CREATE TABLE customers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    shop_id UUID REFERENCES shops(id) ON DELETE CASCADE,

    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    email VARCHAR(255),
    address TEXT,

    notes TEXT,
    total_orders INT DEFAULT 0,
    total_spent DECIMAL(12,2) DEFAULT 0,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Orders (POS + WhatsApp)
CREATE TABLE orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    shop_id UUID REFERENCES shops(id) ON DELETE CASCADE,
    customer_id UUID REFERENCES customers(id),

    order_number VARCHAR(50) NOT NULL,
    order_type VARCHAR(20) NOT NULL,  -- 'pos', 'whatsapp'

    -- Amounts
    subtotal DECIMAL(12,2) NOT NULL,
    vat_amount DECIMAL(10,2) DEFAULT 0,
    discount_amount DECIMAL(10,2) DEFAULT 0,
    total_amount DECIMAL(12,2) NOT NULL,

    -- Profit tracking
    total_cost DECIMAL(12,2) DEFAULT 0,
    total_profit DECIMAL(12,2) DEFAULT 0,

    -- Status
    status VARCHAR(20) DEFAULT 'new',  -- new, confirmed, paid, delivered, cancelled
    payment_status VARCHAR(20) DEFAULT 'pending',  -- pending, partial, paid

    -- Customer info (for WhatsApp orders)
    customer_name VARCHAR(255),
    customer_phone VARCHAR(20),
    customer_address TEXT,

    notes TEXT,

    created_by UUID REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    UNIQUE(shop_id, order_number)
);

-- Order Items
CREATE TABLE order_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
    product_id UUID REFERENCES products(id),

    product_name VARCHAR(255) NOT NULL,
    quantity INT NOT NULL,
    unit_price DECIMAL(10,2) NOT NULL,
    cost_price DECIMAL(10,2) DEFAULT 0,

    discount DECIMAL(10,2) DEFAULT 0,
    total DECIMAL(12,2) NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Order Payments (supports split payment)
CREATE TABLE order_payments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id UUID REFERENCES orders(id) ON DELETE CASCADE,

    payment_method VARCHAR(50) NOT NULL,  -- 'cash', 'card', 'bank_transfer'
    amount DECIMAL(10,2) NOT NULL,

    reference VARCHAR(255),  -- Card last 4 digits, bank ref, etc.
    notes TEXT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================================================
-- INDEXES
-- =====================================================

CREATE INDEX idx_shops_slug ON shops(slug);
CREATE INDEX idx_shops_subdomain ON shops(subdomain);
CREATE INDEX idx_shops_status ON shops(status);

CREATE INDEX idx_users_shop ON users(shop_id);
CREATE INDEX idx_users_email ON users(email);

CREATE INDEX idx_subscriptions_shop ON subscriptions(shop_id);
CREATE INDEX idx_subscriptions_status ON subscriptions(status);
CREATE INDEX idx_subscriptions_expires ON subscriptions(expires_at);

CREATE INDEX idx_payments_shop ON payments(shop_id);
CREATE INDEX idx_payments_status ON payments(status);

CREATE INDEX idx_products_shop ON products(shop_id);
CREATE INDEX idx_products_category ON products(category_id);
CREATE INDEX idx_products_sku ON products(sku);
CREATE INDEX idx_products_barcode ON products(barcode);

CREATE INDEX idx_orders_shop ON orders(shop_id);
CREATE INDEX idx_orders_customer ON orders(customer_id);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_created ON orders(created_at);

CREATE INDEX idx_stock_movements_product ON stock_movements(product_id);
CREATE INDEX idx_stock_movements_shop ON stock_movements(shop_id);
```

---

## 8. API Structure

### API Versioning

Base URL: `api.exiuscart.com/v1`

### Endpoints Overview

```
AUTH
────
POST   /auth/register          # New shop registration
POST   /auth/login             # Shop user login
POST   /auth/admin/login       # Super admin login
POST   /auth/refresh           # Refresh token
POST   /auth/forgot-password   # Request password reset
POST   /auth/reset-password    # Reset password

SHOPS (Admin)
─────────────
GET    /admin/shops            # List all shops
GET    /admin/shops/:id        # Get shop details
POST   /admin/shops            # Create shop (manual)
PATCH  /admin/shops/:id        # Update shop
PATCH  /admin/shops/:id/status # Activate/suspend shop
DELETE /admin/shops/:id        # Delete shop

SUBSCRIPTIONS (Admin)
─────────────────────
GET    /admin/subscriptions              # List all
GET    /admin/subscriptions/expiring     # Expiring soon
PATCH  /admin/subscriptions/:id/extend   # Extend subscription

PAYMENTS (Admin)
────────────────
GET    /admin/payments                   # List all payments
GET    /admin/payments/pending           # Pending bank transfers
POST   /admin/payments/:id/confirm       # Confirm payment
POST   /admin/payments/:id/reject        # Reject payment

DASHBOARD (Admin)
─────────────────
GET    /admin/dashboard/stats            # Overview stats
GET    /admin/dashboard/revenue          # Revenue reports

PLANS (Public)
──────────────
GET    /plans                            # List available plans

SHOP PROFILE
────────────
GET    /shop/profile                     # Get shop profile
PATCH  /shop/profile                     # Update profile
PATCH  /shop/settings                    # Update settings

SUBSCRIPTION
────────────
GET    /shop/subscription                # Current subscription
POST   /shop/subscription                # Subscribe to plan
POST   /shop/subscription/renew          # Renew monthly
POST   /shop/payment/upload              # Upload bank transfer proof

PRODUCTS
────────
GET    /products                         # List products
GET    /products/:id                     # Get product
POST   /products                         # Create product
PATCH  /products/:id                     # Update product
DELETE /products/:id                     # Delete product
POST   /products/import                  # Bulk import (CSV/Excel)
GET    /products/export                  # Export products

CATEGORIES
──────────
GET    /categories                       # List categories
POST   /categories                       # Create category
PATCH  /categories/:id                   # Update category
DELETE /categories/:id                   # Delete category

INVENTORY (Pro Plan)
────────────────────
GET    /inventory                        # Stock overview
GET    /inventory/low-stock              # Low stock alerts
POST   /inventory/stock-in               # Add stock
POST   /inventory/stock-out              # Remove stock
GET    /inventory/movements              # Stock movement history

CUSTOMERS
─────────
GET    /customers                        # List customers
GET    /customers/:id                    # Get customer
POST   /customers                        # Create customer
PATCH  /customers/:id                    # Update customer

ORDERS
──────
GET    /orders                           # List orders
GET    /orders/:id                       # Get order details
POST   /orders                           # Create order (POS/WhatsApp)
PATCH  /orders/:id/status                # Update status
POST   /orders/:id/payment               # Add payment

POS
───
POST   /pos/checkout                     # Complete POS sale
GET    /pos/receipt/:id                  # Get receipt
GET    /pos/daily-summary                # Daily sales summary

WHATSAPP ORDERS (Business+ Plan)
────────────────────────────────
GET    /whatsapp/catalog                 # Public product catalog
POST   /whatsapp/order                   # Create order from catalog
GET    /whatsapp/orders                  # Shop's WhatsApp orders

REPORTS
───────
GET    /reports/sales                    # Sales report
GET    /reports/products                 # Product performance
GET    /reports/payments                 # Payment methods breakdown
GET    /reports/profit                   # Profit report
GET    /reports/export                   # Export to PDF/Excel
```

---

## 9. Domain & Routing Strategy

### Domain Structure

```
exiuscart.com           → Landing page (marketing)
exiuscart.ae            → Redirect to .com OR Arabic landing

app.exiuscart.com       → Shop login/registration
admin.exiuscart.com     → Super admin dashboard

{slug}.exiuscart.com    → Individual shop dashboards
                           Examples:
                           - albareek.exiuscart.com
                           - ahmedmobiles.exiuscart.com

{slug}.exiuscart.com/order → Public order page for customers
```

### Custom Domain Support

```
Shop buys: www.albareek.com
Points to: exiuscart.com (CNAME)
System maps: albareek.com → shop_id

SSL: Automatic via Let's Encrypt
```

### Next.js Routing

```
app/
├── (marketing)/              # Landing pages
│   ├── page.tsx             # Home
│   ├── pricing/page.tsx     # Pricing
│   └── features/page.tsx    # Features
│
├── (auth)/                   # Authentication
│   ├── login/page.tsx
│   ├── register/page.tsx
│   └── forgot-password/page.tsx
│
├── admin/                    # Super admin dashboard
│   ├── layout.tsx
│   ├── page.tsx             # Dashboard
│   ├── shops/page.tsx
│   ├── subscriptions/page.tsx
│   └── payments/page.tsx
│
├── dashboard/                # Shop dashboard (subdomain)
│   ├── layout.tsx
│   ├── page.tsx             # Dashboard
│   ├── pos/page.tsx
│   ├── orders/page.tsx
│   ├── products/page.tsx
│   ├── inventory/page.tsx
│   └── settings/page.tsx
│
└── [shop]/                   # Public shop pages
    └── order/page.tsx       # Customer order page
```

### Subdomain Detection (Middleware)

```typescript
// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  const subdomain = hostname.split('.')[0]

  // Skip for main domains
  if (['www', 'exiuscart', 'admin', 'app', 'api'].includes(subdomain)) {
    return NextResponse.next()
  }

  // Shop subdomain detected - rewrite to dashboard
  const url = request.nextUrl.clone()
  url.pathname = `/dashboard${url.pathname}`

  // Pass shop slug in header
  const response = NextResponse.rewrite(url)
  response.headers.set('x-shop-slug', subdomain)

  return response
}
```

---

## 10. Payment System

### Phase 1: Bank Transfer Only

**How It Works:**

```
┌─────────────────────────────────────────────────────────────┐
│                  PAYMENT FLOW                                │
│                                                              │
│  1. Shop selects plan                                       │
│     ↓                                                       │
│  2. System shows bank details:                              │
│     ┌─────────────────────────────────┐                    │
│     │ Bank: Emirates NBD              │                    │
│     │ Account: ExiusCart LLC          │                    │
│     │ IBAN: AE12 3456 7890 1234 5678  │                    │
│     │ Amount: 899 AED                 │                    │
│     │ Reference: EXC-12345            │                    │
│     └─────────────────────────────────┘                    │
│     ↓                                                       │
│  3. Shop makes bank transfer                                │
│     ↓                                                       │
│  4. Shop uploads transfer receipt/screenshot                │
│     ↓                                                       │
│  5. Admin reviews in dashboard                              │
│     ↓                                                       │
│  6. Admin confirms → Shop activated                         │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Admin Payment Review:**

```
┌─────────────────────────────────────────────────────────────┐
│  PENDING PAYMENTS                                            │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ Al Bareek Mobiles                                      │ │
│  │ Plan: Business (One-Time)                              │ │
│  │ Amount: 899 AED                                        │ │
│  │ Reference: EXC-12345                                   │ │
│  │ Submitted: 2 hours ago                                 │ │
│  │                                                        │ │
│  │ [📄 View Receipt]                                      │ │
│  │                                                        │ │
│  │ [✅ Confirm Payment]  [❌ Reject]                      │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Future Phases

- **Phase 2:** Add Tap Payments (card payments)
- **Phase 3:** Add Stripe for international
- **Phase 4:** Apple Pay / Google Pay

---

## 11. Security

### Authentication

```python
# JWT Token Structure
{
    "sub": "user_id",
    "shop_id": "shop_uuid",
    "role": "owner",
    "type": "access",
    "exp": 1234567890
}

# Token Expiry
ACCESS_TOKEN_EXPIRE = 30 minutes
REFRESH_TOKEN_EXPIRE = 7 days
```

### Multi-Tenant Security

```python
# Every database query includes shop_id
async def get_products(shop_id: UUID, db: Session):
    return db.query(Product).filter(
        Product.shop_id == shop_id,
        Product.is_active == True
    ).all()

# Middleware validates shop_id from JWT
@app.middleware("http")
async def validate_tenant(request: Request, call_next):
    token_shop_id = request.state.shop_id
    path_shop_id = request.path_params.get("shop_id")

    if path_shop_id and path_shop_id != token_shop_id:
        raise HTTPException(403, "Access denied")

    return await call_next(request)
```

### Password Security

```python
# Using bcrypt with cost factor 12
from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(password: str) -> str:
    return pwd_context.hash(password)

def verify_password(plain: str, hashed: str) -> bool:
    return pwd_context.verify(plain, hashed)
```

### Input Validation

```python
# Using Pydantic for all inputs
from pydantic import BaseModel, validator, EmailStr

class ProductCreate(BaseModel):
    name: str
    selling_price: Decimal

    @validator('name')
    def name_not_empty(cls, v):
        if not v.strip():
            raise ValueError('Name cannot be empty')
        return v.strip()

    @validator('selling_price')
    def price_positive(cls, v):
        if v <= 0:
            raise ValueError('Price must be positive')
        return v
```

---

## 12. Folder Structure

### Backend (FastAPI)

```
backend/
├── app/
│   ├── __init__.py
│   ├── main.py                 # FastAPI app entry
│   ├── config.py               # Settings & env vars
│   │
│   ├── api/
│   │   ├── __init__.py
│   │   ├── deps.py             # Dependencies (DB, auth)
│   │   └── v1/
│   │       ├── __init__.py
│   │       ├── router.py       # Main router
│   │       ├── auth.py
│   │       ├── admin/
│   │       │   ├── shops.py
│   │       │   ├── subscriptions.py
│   │       │   ├── payments.py
│   │       │   └── dashboard.py
│   │       └── shop/
│   │           ├── profile.py
│   │           ├── products.py
│   │           ├── categories.py
│   │           ├── inventory.py
│   │           ├── orders.py
│   │           ├── customers.py
│   │           ├── pos.py
│   │           └── reports.py
│   │
│   ├── core/
│   │   ├── __init__.py
│   │   ├── security.py         # JWT, password hashing
│   │   └── permissions.py      # Role-based access
│   │
│   ├── db/
│   │   ├── __init__.py
│   │   ├── database.py         # DB connection
│   │   └── session.py          # Session management
│   │
│   ├── models/
│   │   ├── __init__.py
│   │   ├── shop.py
│   │   ├── user.py
│   │   ├── admin.py
│   │   ├── plan.py
│   │   ├── subscription.py
│   │   ├── payment.py
│   │   ├── product.py
│   │   ├── category.py
│   │   ├── order.py
│   │   ├── customer.py
│   │   └── stock_movement.py
│   │
│   ├── schemas/
│   │   ├── __init__.py
│   │   ├── shop.py
│   │   ├── user.py
│   │   ├── product.py
│   │   ├── order.py
│   │   └── ...
│   │
│   ├── services/
│   │   ├── __init__.py
│   │   ├── shop_service.py
│   │   ├── auth_service.py
│   │   ├── product_service.py
│   │   ├── order_service.py
│   │   ├── inventory_service.py
│   │   └── report_service.py
│   │
│   └── utils/
│       ├── __init__.py
│       ├── email.py
│       └── file_upload.py
│
├── alembic/
│   ├── versions/
│   └── env.py
│
├── tests/
│   ├── __init__.py
│   ├── conftest.py
│   └── ...
│
├── alembic.ini
├── requirements.txt
├── Dockerfile
└── .env.example
```

### Frontend (Next.js)

```
frontend/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                    # Landing page
│   │
│   ├── (marketing)/
│   │   ├── layout.tsx
│   │   ├── pricing/page.tsx
│   │   ├── features/page.tsx
│   │   └── contact/page.tsx
│   │
│   ├── (auth)/
│   │   ├── layout.tsx
│   │   ├── login/page.tsx
│   │   ├── register/page.tsx
│   │   └── forgot-password/page.tsx
│   │
│   ├── admin/
│   │   ├── layout.tsx
│   │   ├── page.tsx                # Admin dashboard
│   │   ├── shops/
│   │   │   ├── page.tsx
│   │   │   └── [id]/page.tsx
│   │   ├── subscriptions/page.tsx
│   │   ├── payments/page.tsx
│   │   └── settings/page.tsx
│   │
│   ├── dashboard/
│   │   ├── layout.tsx
│   │   ├── page.tsx                # Shop dashboard
│   │   ├── pos/page.tsx
│   │   ├── orders/
│   │   │   ├── page.tsx
│   │   │   └── [id]/page.tsx
│   │   ├── products/
│   │   │   ├── page.tsx
│   │   │   ├── new/page.tsx
│   │   │   └── [id]/page.tsx
│   │   ├── inventory/page.tsx
│   │   ├── customers/page.tsx
│   │   ├── reports/page.tsx
│   │   └── settings/page.tsx
│   │
│   └── [shop]/
│       └── order/page.tsx          # Public order page
│
├── components/
│   ├── ui/                         # shadcn components
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   └── Footer.tsx
│   ├── pos/
│   │   ├── ProductSearch.tsx
│   │   ├── Cart.tsx
│   │   └── PaymentModal.tsx
│   ├── orders/
│   │   ├── OrderCard.tsx
│   │   └── OrderDetails.tsx
│   └── ...
│
├── lib/
│   ├── api.ts                      # API client
│   ├── auth.ts                     # Auth utilities
│   └── utils.ts
│
├── hooks/
│   ├── useAuth.ts
│   ├── useShop.ts
│   └── useProducts.ts
│
├── stores/
│   ├── authStore.ts
│   ├── cartStore.ts
│   └── shopStore.ts
│
├── types/
│   ├── index.ts
│   ├── shop.ts
│   ├── product.ts
│   └── order.ts
│
├── locales/
│   ├── ar/
│   │   └── common.json
│   └── en/
│       └── common.json
│
├── public/
│   ├── images/
│   └── icons/
│
├── middleware.ts
├── next.config.js
├── tailwind.config.js
├── package.json
└── .env.example
```

---

## 13. Deployment Strategy

### Phase 1: Simple Setup

```
┌─────────────────────────────────────────────────────────────┐
│                    DEPLOYMENT                                │
│                                                              │
│   Vercel (Frontend)                                         │
│   └── Next.js app                                           │
│       └── Automatic SSL                                     │
│       └── Edge functions                                    │
│       └── Wildcard subdomain support                        │
│                                                              │
│   Railway / Render (Backend)                                │
│   └── FastAPI container                                     │
│       └── Auto-scaling                                      │
│       └── Health checks                                     │
│                                                              │
│   Supabase / Neon (Database)                                │
│   └── PostgreSQL                                            │
│       └── Connection pooling                                │
│       └── Automatic backups                                 │
│                                                              │
│   Cloudflare (DNS + CDN)                                    │
│   └── Wildcard DNS                                          │
│   └── DDoS protection                                       │
│   └── SSL certificates                                      │
│                                                              │
│   AWS S3 / Cloudflare R2 (File Storage)                     │
│   └── Product images                                        │
│   └── Payment receipts                                      │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### DNS Configuration

```
# Cloudflare DNS Records

exiuscart.com          A      → Vercel IP
www.exiuscart.com      CNAME  → cname.vercel-dns.com
*.exiuscart.com        CNAME  → cname.vercel-dns.com
api.exiuscart.com      CNAME  → railway-app.com
admin.exiuscart.com    CNAME  → cname.vercel-dns.com
```

### Environment Variables

```bash
# Backend (.env)
DATABASE_URL=postgresql://...
REDIS_URL=redis://...
SECRET_KEY=your-secret-key
JWT_SECRET=your-jwt-secret
ALLOWED_ORIGINS=https://exiuscart.com,https://*.exiuscart.com

# Frontend (.env.local)
NEXT_PUBLIC_API_URL=https://api.exiuscart.com
NEXT_PUBLIC_APP_URL=https://exiuscart.com
```

---

## 14. Future Roadmap

### Phase 1 (MVP) - Current
- [x] Project documentation
- [ ] Backend setup (FastAPI)
- [ ] Database schema
- [ ] Authentication system
- [ ] Admin dashboard
- [ ] Shop dashboard
- [ ] POS module
- [ ] Product management
- [ ] Bank transfer payments

### Phase 2 (Growth)
- [ ] WhatsApp order module
- [ ] Inventory management
- [ ] Stock alerts
- [ ] Email notifications
- [ ] Arabic language support

### Phase 3 (Scale)
- [ ] Tap Payments integration
- [ ] Custom domains
- [ ] Multiple branches per shop
- [ ] Staff accounts with roles
- [ ] Advanced reports

### Phase 4 (Advanced)
- [ ] WhatsApp Business API
- [ ] Mobile app (React Native)
- [ ] AI-powered insights
- [ ] Multi-currency support
- [ ] Accounting integration

---

## Quick Start Commands

```bash
# Clone and setup
git clone https://github.com/your-repo/exiuscart.git
cd exiuscart

# Backend
cd backend
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
cp .env.example .env
# Edit .env with your settings
alembic upgrade head
uvicorn app.main:app --reload

# Frontend
cd frontend
npm install
cp .env.example .env.local
# Edit .env.local with your settings
npm run dev
```

---

## Support

For issues or questions:
- Email: support@exiuscart.com
- Documentation: docs.exiuscart.com

---

**ExiusCart** - Empowering UAE Businesses

*Built with ❤️ for the UAE market*
