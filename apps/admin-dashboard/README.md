# ExiusCart Admin Dashboard

Admin dashboard for the ExiusCart platform - manage leads, shops, users, subscriptions, payments, and platform settings.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Navigate to admin-dashboard
cd apps/admin-dashboard

# Install dependencies
npm install

# Run development server
npm run dev
```

The admin dashboard will be available at `http://localhost:3002`

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3002
```

## Project Structure

```
apps/admin-dashboard/
├── src/
│   ├── app/
│   │   ├── dashboard/
│   │   │   ├── page.tsx              # Dashboard overview
│   │   │   ├── layout.tsx            # Dashboard layout with sidebar
│   │   │   ├── leads/
│   │   │   │   └── page.tsx          # Leads management (manual + auto)
│   │   │   ├── shops/
│   │   │   │   └── page.tsx          # Shops management
│   │   │   ├── users/
│   │   │   │   └── page.tsx          # Users management
│   │   │   ├── subscriptions/
│   │   │   │   └── page.tsx          # Subscriptions & Plans
│   │   │   ├── payments/
│   │   │   │   └── page.tsx          # Payments & Transactions
│   │   │   ├── reports/
│   │   │   │   └── page.tsx          # Analytics & Reports
│   │   │   └── settings/
│   │   │       └── page.tsx          # Platform settings
│   │   ├── login/
│   │   │   └── page.tsx              # Admin login page
│   │   ├── layout.tsx                # Root layout
│   │   ├── page.tsx                  # Root redirect
│   │   └── globals.css               # Global styles
│   ├── components/
│   │   └── layout/
│   │       ├── sidebar.tsx           # Collapsible sidebar navigation
│   │       └── header.tsx            # Top header component
│   └── lib/
│       └── utils.ts                  # Utility functions
├── public/
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── package.json
```

## Pages Overview

### 1. Login Page (`/login`)

Admin authentication page with:
- Email and password fields
- Remember me option
- Dark theme design
- ExiusCart Admin branding

### 2. Dashboard Overview (`/dashboard`)

Main dashboard with:
- **Stats Cards**: Total Shops, Active Users, Monthly Revenue, Pending Payments
- **Pending Payments Section**: Bank transfers awaiting approval with approve/reject actions
- **Expiring Subscriptions**: List of subscriptions expiring within 7 days
- **Recent Shops**: Latest registered shops table

### 3. Leads Management (`/dashboard/leads`)

Lead generation and tracking system with manual and automatic leads:

**Two Lead Sources**:
- **Manual Leads**: Added by admin through the form
- **Automatic Leads**: Captured from free trial signups

**Tabs**:
- All Leads (combined view)
- Manual (admin-added leads)
- From Signups (automatic/trial leads)

**Features**:
- **Search**: Search by name, shop name, email, license number
- **Filters**: Status (New, Contacted, Trial, Converted, Expired, Lost)
- **Stats Summary**: Total Leads, New, In Trial, Contacted, Converted
- **Table View** (Desktop): Lead info, shop details, contact, source, status, date, actions
- **Card View** (Mobile/Tablet): Responsive cards with all information
- **Actions**: View details, Edit, Delete

**Add Lead Form** (Manual):
- Full Name (required)
- Shop Name (required)
- Trade License Number (required)
- Email Address (required)
- Phone Number (required)
- Status (New, Contacted, Trial, Converted, Lost)
- Notes (optional)

**Automatic Lead Data** (From Signups):
- All form fields auto-captured
- Trial start and end dates
- Signup timestamp

### 4. Shops Management (`/dashboard/shops`)

Complete shop management with:
- **Search**: Search by shop name, owner, email
- **Filters**: Status (All, Active, Trial, Suspended), Plan (All, Starter, Business, Pro)
- **Stats Summary**: Total, Active, Trial, Suspended counts
- **Table View** (Desktop): Shop info, owner, plan, status, invoices, revenue, actions
- **Card View** (Mobile/Tablet): Responsive cards with all information
- **Actions**: View details, Edit, Suspend/Activate

### 5. Users Management (`/dashboard/users`)

User account management with:
- **Search**: Search by name, email, shop
- **Filters**: Role (All, Owners, Staff), Status (All, Active, Suspended)
- **Stats Summary**: Total Users, Shop Owners, Staff, Unverified
- **Table View** (Desktop): User info, shop, role, status, email verified, last login, actions
- **Card View** (Mobile/Tablet): Responsive cards
- **Actions**: Send verification email, Reset password, More options

### 6. Subscriptions & Plans (`/dashboard/subscriptions`)

Two-tab interface:

**Active Subscriptions Tab**:
- Search subscriptions
- Filter by plan type and status
- Stats: Total, Active, Trial, Expired
- Table/Card view with plan, billing type, status, dates, amount
- Renew action for expired subscriptions

**Pricing Plans Tab**:
- Plan cards (Starter, Business, Pro)
- Features list for each plan
- Monthly and yearly pricing
- Edit plan option

### 7. Payments & Transactions (`/dashboard/payments`)

Payment management with:
- **Search**: Search by shop, owner, payment ID, transaction ID
- **Filters**: Status (Completed, Pending, Failed, Rejected), Method (Card, Bank Transfer)
- **Tabs**: All Transactions, Pending Approval
- **Stats**: Total Revenue, Completed, Pending Approval, Failed/Rejected
- **Alert Banner**: Pending approvals notification
- **Table View** (Desktop): Payment ID, shop, plan, method, amount, status, date, actions
- **Card View** (Mobile/Tablet): Full payment details in cards
- **Actions**: View details, Approve, Reject (for pending)

### 8. Reports & Analytics (`/dashboard/reports`)

Analytics dashboard with:
- **Date Range Filter**: Last 7 days, 30 days, 90 days, This Year
- **Overview Stats**: Total Revenue, Total Shops, Active Subscriptions, Churn Rate (with trends)
- **Revenue Chart**: Monthly bar chart visualization
- **Plan Distribution**: Progress bars showing plan breakdown
- **Top Performing Shops**: Ranked table by revenue
- **Quick Stats Grid**: New shops, users, payments in last 30 days
- **Export Button**: Download reports

### 9. Settings (`/dashboard/settings`)

Five-tab settings interface:

**General Tab**:
- Platform Information (name, email, phone, website, description)
- Regional Settings (currency, language, timezone, date format)
- Trial Settings (duration, invoice limit, auto-trial toggle)

**Notifications Tab**:
- Email Notifications (new shop, payment received, pending approval, expiring subscriptions)
- Admin Alerts (system errors, high traffic, failed logins)
- Notification Recipients

**Security Tab**:
- Password Policy (min length, expiry, requirements)
- Session Settings (timeout, max sessions, single session)
- Two-Factor Authentication (admin, shop owners)
- Change Admin Password

**Payment Tab**:
- Payment Methods (cards, bank transfer, Apple Pay, Google Pay toggles)
- Stripe Configuration (API keys, webhook secret)
- Bank Transfer Details (bank name, account, IBAN, SWIFT)
- Invoice Settings (prefix, VAT number, rate, auto-generate)

**API & Integrations Tab**:
- API Keys (production key, regenerate)
- Rate Limiting (requests per minute/day)
- Webhook Configuration (URL, events)
- Third-party Integrations (Stripe, SendGrid, Twilio status)

## Components

### Sidebar (`components/layout/sidebar.tsx`)

- Collapsible sidebar navigation
- Active state highlighting
- Admin badge
- User info display
- Logout button
- Responsive: Hidden on mobile, shown on lg+

### Header (`components/layout/header.tsx`)

- Page title
- Search bar (desktop)
- Notifications bell with badge
- Online status indicator
- Mobile menu toggle

## Design System

### Colors

```css
/* Background Colors */
--bg-primary: #0B1121      /* Main background */
--bg-secondary: #151F32    /* Cards, sections */
--bg-hover: #1A2540        /* Hover states */

/* Accent Color */
--primary: #F5A623         /* Gold/Orange - brand color */
--primary-hover: #E09612   /* Darker gold for hover */

/* Status Colors */
--green: #22C55E           /* Success, Active */
--blue: #3B82F6            /* Info, Trial */
--orange: #F97316          /* Warning, Pending */
--red: #EF4444             /* Error, Suspended, Failed */

/* Text Colors */
--text-white: #FFFFFF
--text-gray-400: #9CA3AF
--text-gray-500: #6B7280

/* Border */
--border: #374151          /* gray-700 */
--border-light: #1F2937    /* gray-800 */
```

### Responsive Breakpoints

```css
/* Mobile First */
sm: 640px    /* Small tablets */
md: 768px    /* Tablets */
lg: 1024px   /* Desktop - Table view switches here */
xl: 1280px   /* Large desktop */
```

### Common Patterns

**Table/Card Pattern**:
- Desktop (lg+): Table view with all columns
- Mobile/Tablet (<lg): Card view with essential info

**Filter Bar Pattern**:
- Search input with icon
- Dropdown filters
- Responsive: Stack on mobile, row on desktop

**Stats Grid Pattern**:
- 2 columns on mobile
- 4 columns on desktop (lg+)

## TODO - Backend Integration

The following needs to be implemented when connecting to the backend:

### Authentication
- [ ] Implement NextAuth.js or custom auth
- [ ] Add JWT token handling
- [ ] Add session management
- [ ] Implement logout functionality
- [ ] Add protected route middleware

### API Integration

Replace mock data with API calls:

```typescript
// Example API service structure
// src/lib/api.ts

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const api = {
  // Leads
  getLeads: (params) => fetch(`${API_URL}/admin/leads?${params}`),
  getLead: (id) => fetch(`${API_URL}/admin/leads/${id}`),
  createLead: (data) => fetch(`${API_URL}/admin/leads`, { method: 'POST', body: data }),
  updateLead: (id, data) => fetch(`${API_URL}/admin/leads/${id}`, { method: 'PATCH', body: data }),
  deleteLead: (id) => fetch(`${API_URL}/admin/leads/${id}`, { method: 'DELETE' }),
  convertLead: (id) => fetch(`${API_URL}/admin/leads/${id}/convert`, { method: 'POST' }),

  // Shops
  getShops: (params) => fetch(`${API_URL}/admin/shops?${params}`),
  getShop: (id) => fetch(`${API_URL}/admin/shops/${id}`),
  updateShop: (id, data) => fetch(`${API_URL}/admin/shops/${id}`, { method: 'PATCH', body: data }),
  suspendShop: (id) => fetch(`${API_URL}/admin/shops/${id}/suspend`, { method: 'POST' }),

  // Users
  getUsers: (params) => fetch(`${API_URL}/admin/users?${params}`),
  sendVerificationEmail: (id) => fetch(`${API_URL}/admin/users/${id}/verify`, { method: 'POST' }),
  resetPassword: (id) => fetch(`${API_URL}/admin/users/${id}/reset-password`, { method: 'POST' }),

  // Subscriptions
  getSubscriptions: (params) => fetch(`${API_URL}/admin/subscriptions?${params}`),
  getPlans: () => fetch(`${API_URL}/admin/plans`),
  updatePlan: (id, data) => fetch(`${API_URL}/admin/plans/${id}`, { method: 'PATCH', body: data }),

  // Payments
  getPayments: (params) => fetch(`${API_URL}/admin/payments?${params}`),
  approvePayment: (id) => fetch(`${API_URL}/admin/payments/${id}/approve`, { method: 'POST' }),
  rejectPayment: (id, reason) => fetch(`${API_URL}/admin/payments/${id}/reject`, { method: 'POST', body: { reason } }),

  // Reports
  getRevenueStats: (dateRange) => fetch(`${API_URL}/admin/reports/revenue?range=${dateRange}`),
  getTopShops: (dateRange) => fetch(`${API_URL}/admin/reports/top-shops?range=${dateRange}`),

  // Settings
  getSettings: () => fetch(`${API_URL}/admin/settings`),
  updateSettings: (data) => fetch(`${API_URL}/admin/settings`, { method: 'PATCH', body: data }),
};
```

### State Management
- [ ] Add React Query or SWR for data fetching
- [ ] Implement loading states
- [ ] Add error handling and toast notifications
- [ ] Add optimistic updates for actions

### Features to Add
- [ ] Lead detail page (`/dashboard/leads/[id]`)
- [ ] Lead conversion flow (lead to shop/user)
- [ ] Shop detail page (`/dashboard/shops/[id]`)
- [ ] User detail page (`/dashboard/users/[id]`)
- [ ] Subscription detail/edit page
- [ ] Payment detail modal with proof image
- [ ] Real-time notifications (WebSocket)
- [ ] Dark/Light mode toggle (optional)
- [ ] Export functionality (CSV/PDF)
- [ ] Bulk actions (multi-select)
- [ ] Search with debounce
- [ ] Pagination with page size options
- [ ] Sorting by columns
- [ ] Date range picker component
- [ ] Confirmation dialogs for destructive actions

### Form Validation
- [ ] Add Zod or Yup schemas
- [ ] Implement React Hook Form
- [ ] Add form error states
- [ ] Add success/error toasts

## Scripts

```bash
# Development
npm run dev          # Start dev server on port 3002

# Build
npm run build        # Build for production
npm run start        # Start production server

# Linting
npm run lint         # Run ESLint
```

## Deployment

### AWS (Recommended)

See `docs/AWS_ARCHITECTURE.md` for full AWS deployment guide.

Quick steps:
1. Build Docker image
2. Push to ECR
3. Deploy to ECS Fargate
4. Configure ALB for routing

### Environment Variables for Production

```env
NEXT_PUBLIC_API_URL=https://api.exiuscart.com
NEXTAUTH_SECRET=your-production-secret
NEXTAUTH_URL=https://admin.exiuscart.com
```

## Contributing

1. Follow the existing code patterns
2. Use TypeScript strictly
3. Ensure responsive design (test on mobile/tablet)
4. Test dark mode appearance
5. Add loading and error states

## License

Proprietary - ExiusCart
