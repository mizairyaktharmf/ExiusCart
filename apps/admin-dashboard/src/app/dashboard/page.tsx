import {
  Store,
  CreditCard,
  Users,
  DollarSign,
  TrendingUp,
  Clock,
  AlertCircle,
} from 'lucide-react';

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Shops"
          value="156"
          change="+8 this month"
          icon={<Store className="w-6 h-6" />}
          color="purple"
        />
        <StatCard
          title="Active Subscriptions"
          value="142"
          change="91% active"
          icon={<Users className="w-6 h-6" />}
          color="green"
        />
        <StatCard
          title="Pending Payments"
          value="12"
          change="Review needed"
          icon={<CreditCard className="w-6 h-6" />}
          color="orange"
        />
        <StatCard
          title="Monthly Revenue"
          value="45,670 AED"
          change="+15% vs last month"
          icon={<DollarSign className="w-6 h-6" />}
          color="blue"
        />
      </div>

      {/* Alerts & Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        {/* Pending Payments */}
        <div className="bg-white rounded-xl border p-6">
          <div className="flex items-center gap-2 mb-4">
            <AlertCircle className="w-5 h-5 text-orange-500" />
            <h2 className="font-semibold">Pending Payment Approvals</h2>
          </div>
          <div className="space-y-3">
            <PaymentItem
              shop="Al Bareek Mobiles"
              amount="899 AED"
              plan="Business"
              time="2 hours ago"
            />
            <PaymentItem
              shop="Tech Zone"
              amount="1,200 AED"
              plan="Pro"
              time="5 hours ago"
            />
            <PaymentItem
              shop="Mobile World"
              amount="699 AED"
              plan="Starter"
              time="1 day ago"
            />
          </div>
          <a
            href="/dashboard/payments"
            className="block text-center text-purple-600 hover:underline mt-4 text-sm font-medium"
          >
            View All Pending Payments
          </a>
        </div>

        {/* Expiring Subscriptions */}
        <div className="bg-white rounded-xl border p-6">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-red-500" />
            <h2 className="font-semibold">Expiring Soon (7 days)</h2>
          </div>
          <div className="space-y-3">
            <ExpiringItem shop="Quick Mart" plan="Business Monthly" days={2} />
            <ExpiringItem shop="Phone House" plan="Pro Monthly" days={5} />
            <ExpiringItem shop="Digital Store" plan="Starter Monthly" days={7} />
          </div>
          <a
            href="/dashboard/subscriptions"
            className="block text-center text-purple-600 hover:underline mt-4 text-sm font-medium"
          >
            View All Subscriptions
          </a>
        </div>
      </div>

      {/* Recent Shops */}
      <div className="bg-white rounded-xl border p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold">Recently Registered Shops</h2>
          <a href="/dashboard/shops" className="text-sm text-purple-600 hover:underline">
            View All
          </a>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-500 border-b">
                <th className="pb-3 font-medium">Shop Name</th>
                <th className="pb-3 font-medium">Owner</th>
                <th className="pb-3 font-medium">Plan</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Registered</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <ShopRow
                name="Smart Electronics"
                owner="Ahmed Ali"
                plan="Pro"
                status="active"
                date="Today"
              />
              <ShopRow
                name="City Phones"
                owner="Sara Hassan"
                plan="Business"
                status="pending"
                date="Yesterday"
              />
              <ShopRow
                name="Tech Hub"
                owner="Mohammed Khalid"
                plan="Starter"
                status="active"
                date="2 days ago"
              />
            </tbody>
          </table>
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
  color: 'purple' | 'green' | 'orange' | 'blue';
}) {
  const colors = {
    purple: 'bg-purple-50 text-purple-600',
    green: 'bg-green-50 text-green-600',
    orange: 'bg-orange-50 text-orange-600',
    blue: 'bg-blue-50 text-blue-600',
  };

  return (
    <div className="bg-white rounded-xl border p-6">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${colors[color]}`}>{icon}</div>
        <TrendingUp className="w-4 h-4 text-green-500" />
      </div>
      <p className="text-gray-600 text-sm">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-xs text-gray-500 mt-1">{change}</p>
    </div>
  );
}

function PaymentItem({
  shop,
  amount,
  plan,
  time,
}: {
  shop: string;
  amount: string;
  plan: string;
  time: string;
}) {
  return (
    <div className="flex items-center justify-between py-3 border-b last:border-0">
      <div>
        <p className="font-medium text-sm">{shop}</p>
        <p className="text-xs text-gray-500">
          {plan} Plan - {time}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-semibold text-sm">{amount}</span>
        <button className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200">
          Approve
        </button>
      </div>
    </div>
  );
}

function ExpiringItem({
  shop,
  plan,
  days,
}: {
  shop: string;
  plan: string;
  days: number;
}) {
  return (
    <div className="flex items-center justify-between py-3 border-b last:border-0">
      <div>
        <p className="font-medium text-sm">{shop}</p>
        <p className="text-xs text-gray-500">{plan}</p>
      </div>
      <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">
        {days} days left
      </span>
    </div>
  );
}

function ShopRow({
  name,
  owner,
  plan,
  status,
  date,
}: {
  name: string;
  owner: string;
  plan: string;
  status: 'active' | 'pending' | 'suspended';
  date: string;
}) {
  const statusColors = {
    active: 'bg-green-100 text-green-700',
    pending: 'bg-yellow-100 text-yellow-700',
    suspended: 'bg-red-100 text-red-700',
  };

  return (
    <tr className="border-b last:border-0">
      <td className="py-3 font-medium">{name}</td>
      <td className="py-3 text-gray-600">{owner}</td>
      <td className="py-3">{plan}</td>
      <td className="py-3">
        <span className={`text-xs px-2 py-1 rounded ${statusColors[status]}`}>
          {status}
        </span>
      </td>
      <td className="py-3 text-gray-500">{date}</td>
    </tr>
  );
}
