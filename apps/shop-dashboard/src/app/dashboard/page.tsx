import {
  DollarSign,
  ShoppingBag,
  Package,
  Users,
  TrendingUp,
  AlertTriangle,
} from 'lucide-react';

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Today's Sales"
          value="1,234 AED"
          change="+12%"
          icon={<DollarSign className="w-6 h-6" />}
          color="blue"
        />
        <StatCard
          title="Orders"
          value="28"
          change="+5%"
          icon={<ShoppingBag className="w-6 h-6" />}
          color="green"
        />
        <StatCard
          title="Products"
          value="156"
          change="0%"
          icon={<Package className="w-6 h-6" />}
          color="purple"
        />
        <StatCard
          title="Customers"
          value="89"
          change="+3%"
          icon={<Users className="w-6 h-6" />}
          color="orange"
        />
      </div>

      {/* Alerts & Quick Actions */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        {/* Low Stock Alert */}
        <div className="bg-white rounded-xl border p-6">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-orange-500" />
            <h2 className="font-semibold">Low Stock Alerts</h2>
          </div>
          <div className="space-y-3">
            <AlertItem name="iPhone 15 Pro" stock={2} min={5} />
            <AlertItem name="AirPods Pro" stock={3} min={10} />
            <AlertItem name="USB-C Cable" stock={5} min={20} />
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-xl border p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold">Recent Orders</h2>
            <a href="/dashboard/orders" className="text-sm text-blue-600 hover:underline">
              View All
            </a>
          </div>
          <div className="space-y-3">
            <OrderItem id="#1234" customer="Ahmad" amount="4,299 AED" status="new" />
            <OrderItem id="#1233" customer="Sara" amount="899 AED" status="paid" />
            <OrderItem id="#1232" customer="Mohammed" amount="1,500 AED" status="delivered" />
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl border p-6">
        <h2 className="font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <QuickAction href="/dashboard/pos" label="New Sale" icon="💳" />
          <QuickAction href="/dashboard/products/new" label="Add Product" icon="📦" />
          <QuickAction href="/dashboard/orders" label="View Orders" icon="📋" />
          <QuickAction href="/dashboard/reports" label="Reports" icon="📊" />
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
  change: string;
  icon: React.ReactNode;
  color: 'blue' | 'green' | 'purple' | 'orange';
}) {
  const colors = {
    blue: 'bg-blue-50 text-blue-600',
    green: 'bg-green-50 text-green-600',
    purple: 'bg-purple-50 text-purple-600',
    orange: 'bg-orange-50 text-orange-600',
  };

  return (
    <div className="bg-white rounded-xl border p-6">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${colors[color]}`}>{icon}</div>
        <div className="flex items-center gap-1 text-sm text-green-600">
          <TrendingUp className="w-4 h-4" />
          {change}
        </div>
      </div>
      <p className="text-gray-600 text-sm">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}

function AlertItem({ name, stock, min }: { name: string; stock: number; min: number }) {
  return (
    <div className="flex items-center justify-between py-2 border-b last:border-0">
      <span className="text-sm">{name}</span>
      <span className="text-sm text-orange-600 font-medium">
        {stock} left (min: {min})
      </span>
    </div>
  );
}

function OrderItem({
  id,
  customer,
  amount,
  status,
}: {
  id: string;
  customer: string;
  amount: string;
  status: 'new' | 'paid' | 'delivered';
}) {
  const statusColors = {
    new: 'bg-orange-100 text-orange-700',
    paid: 'bg-green-100 text-green-700',
    delivered: 'bg-gray-100 text-gray-700',
  };

  return (
    <div className="flex items-center justify-between py-2 border-b last:border-0">
      <div>
        <span className="font-medium text-sm">{id}</span>
        <span className="text-gray-500 text-sm ml-2">{customer}</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium">{amount}</span>
        <span className={`text-xs px-2 py-1 rounded-full ${statusColors[status]}`}>
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
}: {
  href: string;
  label: string;
  icon: string;
}) {
  return (
    <a
      href={href}
      className="flex flex-col items-center gap-2 p-4 rounded-xl border hover:bg-gray-50 transition"
    >
      <span className="text-2xl">{icon}</span>
      <span className="text-sm font-medium">{label}</span>
    </a>
  );
}
