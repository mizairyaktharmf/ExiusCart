import Link from 'next/link';
import {
  DollarSign,
  ShoppingBag,
  Package,
  Users,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  ShoppingCart,
  Plus,
  FileText,
  BarChart3,
  MessageCircle,
  Clock,
  CreditCard,
  Banknote,
} from 'lucide-react';

export default function DashboardPage() {
  // Mock data - will come from API
  const todayStats = {
    sales: 1234,
    salesChange: 12,
    orders: 28,
    ordersChange: 5,
    products: 156,
    productsChange: 0,
    customers: 89,
    customersChange: 3,
  };

  const paymentSummary = {
    cash: 745,
    card: 489,
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground text-sm">Welcome back! Here&apos;s what&apos;s happening today.</p>
        </div>
        <Link
          href="/dashboard/pos"
          className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-lg font-medium hover:bg-primary/90 transition"
        >
          <ShoppingCart className="w-5 h-5" />
          <span>New Sale</span>
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Today's Sales"
          value={`${todayStats.sales.toLocaleString()} AED`}
          change={todayStats.salesChange}
          icon={<DollarSign className="w-5 h-5" />}
          color="blue"
        />
        <StatCard
          title="Orders"
          value={todayStats.orders.toString()}
          change={todayStats.ordersChange}
          icon={<ShoppingBag className="w-5 h-5" />}
          color="green"
        />
        <StatCard
          title="Products"
          value={todayStats.products.toString()}
          change={todayStats.productsChange}
          icon={<Package className="w-5 h-5" />}
          color="purple"
        />
        <StatCard
          title="Customers"
          value={todayStats.customers.toString()}
          change={todayStats.customersChange}
          icon={<Users className="w-5 h-5" />}
          color="orange"
        />
      </div>

      {/* Payment Summary */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-green-500/10">
              <Banknote className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Cash</p>
              <p className="text-lg font-bold text-foreground">{paymentSummary.cash} AED</p>
            </div>
          </div>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-blue-500/10">
              <CreditCard className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Card</p>
              <p className="text-lg font-bold text-foreground">{paymentSummary.card} AED</p>
            </div>
          </div>
        </div>
      </div>

      {/* Alerts & Orders Row */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Low Stock Alert */}
        <div className="bg-card rounded-xl border border-border p-5">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 rounded-lg bg-warning/10">
              <AlertTriangle className="w-5 h-5 text-warning" />
            </div>
            <h2 className="font-semibold text-foreground">Low Stock Alerts</h2>
            <span className="ml-auto text-xs bg-warning/10 text-warning px-2 py-1 rounded-full font-medium">3 items</span>
          </div>
          <div className="space-y-1">
            <AlertItem name="iPhone 15 Pro" stock={2} min={5} critical />
            <AlertItem name="AirPods Pro" stock={3} min={10} />
            <AlertItem name="USB-C Cable" stock={5} min={20} />
          </div>
          <Link
            href="/dashboard/inventory"
            className="mt-4 text-sm text-primary hover:underline inline-block"
          >
            View all inventory →
          </Link>
        </div>

        {/* Pending WhatsApp Orders */}
        <div className="bg-card rounded-xl border border-border p-5">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 rounded-lg bg-green-500/10">
              <MessageCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="font-semibold text-foreground">WhatsApp Orders</h2>
            <span className="ml-auto text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">2 pending</span>
          </div>
          <div className="space-y-1">
            <WhatsAppOrderItem
              customer="Fatima Al-Rashid"
              phone="+971 50 123 4567"
              items={3}
              time="10 mins ago"
            />
            <WhatsAppOrderItem
              customer="Omar Hassan"
              phone="+971 55 987 6543"
              items={1}
              time="25 mins ago"
            />
          </div>
          <Link
            href="/dashboard/whatsapp"
            className="mt-4 text-sm text-primary hover:underline inline-block"
          >
            View all WhatsApp orders →
          </Link>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-card rounded-xl border border-border p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-foreground">Recent Orders</h2>
          <Link href="/dashboard/orders" className="text-sm text-primary hover:underline">
            View All
          </Link>
        </div>
        <div className="space-y-1">
          <OrderItem id="ORD-1234" customer="Ahmad" amount="4,299 AED" status="new" time="2 mins ago" />
          <OrderItem id="ORD-1233" customer="Sara" amount="899 AED" status="paid" time="15 mins ago" />
          <OrderItem id="ORD-1232" customer="Mohammed" amount="1,500 AED" status="completed" time="1 hour ago" />
          <OrderItem id="ORD-1231" customer="Layla" amount="2,150 AED" status="completed" time="2 hours ago" />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-card rounded-xl border border-border p-5">
        <h2 className="font-semibold text-foreground mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <QuickAction href="/dashboard/pos" label="New Sale" icon={<ShoppingCart className="w-6 h-6" />} color="blue" />
          <QuickAction href="/dashboard/products/new" label="Add Product" icon={<Plus className="w-6 h-6" />} color="green" />
          <QuickAction href="/dashboard/orders" label="View Orders" icon={<FileText className="w-6 h-6" />} color="purple" />
          <QuickAction href="/dashboard/reports" label="Reports" icon={<BarChart3 className="w-6 h-6" />} color="orange" />
        </div>
      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
  change,
  icon,
  color,
}: {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
  color: 'blue' | 'green' | 'purple' | 'orange';
}) {
  const colorStyles = {
    blue: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
    green: 'bg-green-500/10 text-green-600 dark:text-green-400',
    purple: 'bg-purple-500/10 text-purple-600 dark:text-purple-400',
    orange: 'bg-orange-500/10 text-orange-600 dark:text-orange-400',
  };

  const isPositive = change >= 0;

  return (
    <div className="bg-card rounded-xl border border-border p-4">
      <div className="flex items-center justify-between mb-3">
        <div className={`p-2.5 rounded-lg ${colorStyles[color]}`}>{icon}</div>
        {change !== 0 && (
          <div className={`flex items-center gap-1 text-xs font-medium ${isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
            {isPositive ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
            {isPositive ? '+' : ''}{change}%
          </div>
        )}
      </div>
      <p className="text-muted-foreground text-xs mb-1">{title}</p>
      <p className="text-xl font-bold text-foreground">{value}</p>
    </div>
  );
}

function AlertItem({ name, stock, min, critical }: { name: string; stock: number; min: number; critical?: boolean }) {
  return (
    <div className="flex items-center justify-between py-2.5 border-b border-border last:border-0">
      <span className="text-sm text-foreground">{name}</span>
      <span className={`text-xs font-medium px-2 py-1 rounded-full ${critical ? 'bg-red-500/10 text-red-600 dark:text-red-400' : 'bg-warning/10 text-warning'}`}>
        {stock} left (min: {min})
      </span>
    </div>
  );
}

function WhatsAppOrderItem({
  customer,
  phone,
  items,
  time,
}: {
  customer: string;
  phone: string;
  items: number;
  time: string;
}) {
  return (
    <div className="flex items-center justify-between py-2.5 border-b border-border last:border-0">
      <div>
        <p className="text-sm font-medium text-foreground">{customer}</p>
        <p className="text-xs text-muted-foreground">{phone} • {items} item{items > 1 ? 's' : ''}</p>
      </div>
      <div className="flex items-center gap-1 text-xs text-muted-foreground">
        <Clock className="w-3.5 h-3.5" />
        {time}
      </div>
    </div>
  );
}

function OrderItem({
  id,
  customer,
  amount,
  status,
  time,
}: {
  id: string;
  customer: string;
  amount: string;
  status: 'new' | 'paid' | 'completed';
  time: string;
}) {
  const statusStyles = {
    new: 'bg-orange-500/10 text-orange-600 dark:text-orange-400',
    paid: 'bg-green-500/10 text-green-600 dark:text-green-400',
    completed: 'bg-muted text-muted-foreground',
  };

  return (
    <div className="flex items-center justify-between py-2.5 border-b border-border last:border-0">
      <div className="flex items-center gap-3">
        <div>
          <p className="text-sm font-medium text-foreground">{id}</p>
          <p className="text-xs text-muted-foreground">{customer} • {time}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-sm font-semibold text-foreground">{amount}</span>
        <span className={`text-xs px-2 py-1 rounded-full font-medium capitalize ${statusStyles[status]}`}>
          {status}
        </span>
      </div>
    </div>
  );
}

function QuickAction({
  href,
  label,
  icon,
  color,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  color: 'blue' | 'green' | 'purple' | 'orange';
}) {
  const colorStyles = {
    blue: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20',
    green: 'bg-green-500/10 text-green-600 dark:text-green-400 hover:bg-green-500/20',
    purple: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 hover:bg-purple-500/20',
    orange: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 hover:bg-orange-500/20',
  };

  return (
    <Link
      href={href}
      className={`flex flex-col items-center gap-2 p-4 rounded-xl transition ${colorStyles[color]}`}
    >
      {icon}
      <span className="text-xs font-medium">{label}</span>
    </Link>
  );
}
