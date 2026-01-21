import Link from 'next/link';
import {
  Store,
  CreditCard,
  Users,
  TrendingUp,
  TrendingDown,
  Clock,
  AlertCircle,
  ArrowUpRight,
  DollarSign,
} from 'lucide-react';

export default function AdminDashboardPage() {
  return (
    <div>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <p className="text-gray-400 text-sm mt-1">Welcome back, Super Admin</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
        <StatCard
          title="Total Shops"
          value="156"
          change="+12%"
          trend="up"
          subtitle="8 new this month"
          icon={<Store className="w-5 h-5" />}
          color="primary"
        />
        <StatCard
          title="Active Users"
          value="342"
          change="+8%"
          trend="up"
          subtitle="Owners & Staff"
          icon={<Users className="w-5 h-5" />}
          color="blue"
        />
        <StatCard
          title="Monthly Revenue"
          value="45,670"
          change="+15%"
          trend="up"
          subtitle="AED this month"
          icon={<DollarSign className="w-5 h-5" />}
          color="green"
        />
        <StatCard
          title="Pending Payments"
          value="12"
          change="-3"
          trend="down"
          subtitle="Awaiting approval"
          icon={<CreditCard className="w-5 h-5" />}
          color="orange"
        />
      </div>

      {/* Alerts & Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-4 lg:gap-6 mb-8">
        {/* Pending Payments */}
        <div className="bg-[#151F32] rounded-xl border border-gray-800 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-[#F5A623]" />
              <h2 className="font-semibold text-white">Pending Payments</h2>
            </div>
            <span className="text-xs bg-[#F5A623]/10 text-[#F5A623] px-2 py-1 rounded-full">
              12 pending
            </span>
          </div>
          <div className="space-y-1">
            <PaymentItem
              shop="Al Bareek Mobiles"
              amount="899"
              plan="Business"
              time="2 hours ago"
            />
            <PaymentItem
              shop="Tech Zone"
              amount="1,200"
              plan="Pro"
              time="5 hours ago"
            />
            <PaymentItem
              shop="Mobile World"
              amount="699"
              plan="Starter"
              time="1 day ago"
            />
          </div>
          <Link
            href="/dashboard/payments"
            className="flex items-center justify-center gap-1 text-[#F5A623] hover:text-[#FFB84D] mt-4 text-sm font-medium transition"
          >
            View All Payments
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Expiring Subscriptions */}
        <div className="bg-[#151F32] rounded-xl border border-gray-800 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-red-400" />
              <h2 className="font-semibold text-white">Expiring Soon</h2>
            </div>
            <span className="text-xs bg-red-500/10 text-red-400 px-2 py-1 rounded-full">
              Next 7 days
            </span>
          </div>
          <div className="space-y-1">
            <ExpiringItem shop="Quick Mart" plan="Business Monthly" days={2} />
            <ExpiringItem shop="Phone House" plan="Pro Monthly" days={5} />
            <ExpiringItem shop="Digital Store" plan="Starter Monthly" days={7} />
          </div>
          <Link
            href="/dashboard/subscriptions"
            className="flex items-center justify-center gap-1 text-[#F5A623] hover:text-[#FFB84D] mt-4 text-sm font-medium transition"
          >
            View All Subscriptions
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Recent Shops */}
      <div className="bg-[#151F32] rounded-xl border border-gray-800 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-semibold text-white">Recently Registered Shops</h2>
          <Link
            href="/dashboard/shops"
            className="text-sm text-[#F5A623] hover:text-[#FFB84D] transition"
          >
            View All
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-400 border-b border-gray-800">
                <th className="pb-3 font-medium">Shop Name</th>
                <th className="pb-3 font-medium hidden sm:table-cell">Owner</th>
                <th className="pb-3 font-medium">Plan</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium hidden md:table-cell">Registered</th>
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
                status="trial"
                date="Yesterday"
              />
              <ShopRow
                name="Tech Hub"
                owner="Mohammed Khalid"
                plan="Starter"
                status="active"
                date="2 days ago"
              />
              <ShopRow
                name="Phone Palace"
                owner="Fatima Omar"
                plan="Business"
                status="pending"
                date="3 days ago"
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
  trend,
  subtitle,
  icon,
  color,
}: {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  subtitle: string;
  icon: React.ReactNode;
  color: 'primary' | 'blue' | 'green' | 'orange';
}) {
  const colors = {
    primary: 'bg-[#F5A623]/10 text-[#F5A623]',
    blue: 'bg-blue-500/10 text-blue-400',
    green: 'bg-green-500/10 text-green-400',
    orange: 'bg-orange-500/10 text-orange-400',
  };

  return (
    <div className="bg-[#151F32] rounded-xl border border-gray-800 p-5">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-2.5 rounded-lg ${colors[color]}`}>{icon}</div>
        <div
          className={`flex items-center gap-1 text-xs font-medium ${
            trend === 'up' ? 'text-green-400' : 'text-red-400'
          }`}
        >
          {trend === 'up' ? (
            <TrendingUp className="w-3 h-3" />
          ) : (
            <TrendingDown className="w-3 h-3" />
          )}
          {change}
        </div>
      </div>
      <p className="text-gray-400 text-sm">{title}</p>
      <p className="text-2xl font-bold text-white mt-1">{value}</p>
      <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
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
    <div className="flex items-center justify-between py-3 border-b border-gray-800 last:border-0">
      <div>
        <p className="font-medium text-sm text-white">{shop}</p>
        <p className="text-xs text-gray-500">
          {plan} Plan · {time}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <span className="font-semibold text-sm text-white">{amount} AED</span>
        <button
          type="button"
          className="text-xs bg-green-500/10 text-green-400 px-3 py-1.5 rounded-lg hover:bg-green-500/20 transition"
        >
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
  const urgency = days <= 2 ? 'bg-red-500/10 text-red-400' : 'bg-orange-500/10 text-orange-400';

  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-800 last:border-0">
      <div>
        <p className="font-medium text-sm text-white">{shop}</p>
        <p className="text-xs text-gray-500">{plan}</p>
      </div>
      <span className={`text-xs px-2.5 py-1 rounded-lg ${urgency}`}>
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
  status: 'active' | 'trial' | 'pending' | 'suspended';
  date: string;
}) {
  const statusStyles = {
    active: 'bg-green-500/10 text-green-400',
    trial: 'bg-blue-500/10 text-blue-400',
    pending: 'bg-yellow-500/10 text-yellow-400',
    suspended: 'bg-red-500/10 text-red-400',
  };

  const planStyles = {
    Starter: 'text-gray-400',
    Business: 'text-blue-400',
    Pro: 'text-[#F5A623]',
  };

  return (
    <tr className="border-b border-gray-800 last:border-0">
      <td className="py-3 font-medium text-white">{name}</td>
      <td className="py-3 text-gray-400 hidden sm:table-cell">{owner}</td>
      <td className={`py-3 ${planStyles[plan as keyof typeof planStyles] || 'text-gray-400'}`}>
        {plan}
      </td>
      <td className="py-3">
        <span className={`text-xs px-2 py-1 rounded-lg capitalize ${statusStyles[status]}`}>
          {status}
        </span>
      </td>
      <td className="py-3 text-gray-500 hidden md:table-cell">{date}</td>
    </tr>
  );
}
