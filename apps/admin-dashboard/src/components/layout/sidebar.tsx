'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Store,
  Users,
  CreditCard,
  Package,
  BarChart3,
  Settings,
  LogOut,
  ChevronLeft,
  UserPlus,
} from 'lucide-react';
import { useState } from 'react';

const menuItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/dashboard/leads', label: 'Leads', icon: UserPlus },
  { href: '/dashboard/shops', label: 'Shops', icon: Store },
  { href: '/dashboard/users', label: 'Users', icon: Users },
  { href: '/dashboard/subscriptions', label: 'Subscriptions', icon: Package },
  { href: '/dashboard/payments', label: 'Payments', icon: CreditCard },
  { href: '/dashboard/reports', label: 'Reports', icon: BarChart3 },
  { href: '/dashboard/settings', label: 'Settings', icon: Settings },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`fixed left-0 top-0 h-full bg-[#0B1121] border-r border-gray-800 transition-all duration-300 z-50 ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Logo */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-gray-800">
        <Link href="/dashboard" className="flex items-center gap-2">
          {!collapsed ? (
            <span className="text-xl font-bold text-white tracking-tight">
              <span className="text-[#F5A623]">Exius</span>Cart
            </span>
          ) : (
            <span className="text-xl font-bold text-[#F5A623]">E</span>
          )}
        </Link>
        <button
          onClick={() => setCollapsed(!collapsed)}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition hidden lg:block"
        >
          <ChevronLeft
            className={`w-5 h-5 transition-transform ${collapsed ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      {/* Admin Badge */}
      {!collapsed && (
        <div className="px-4 py-3 border-b border-gray-800">
          <span className="text-xs font-semibold text-[#F5A623] bg-[#F5A623]/10 px-2.5 py-1 rounded">
            ADMIN PANEL
          </span>
        </div>
      )}

      {/* Navigation */}
      <nav className="p-3 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            pathname === item.href ||
            (item.href !== '/dashboard' && pathname.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              title={collapsed ? item.label : undefined}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                isActive
                  ? 'bg-[#F5A623] text-black'
                  : 'text-gray-400 hover:bg-[#151F32] hover:text-white'
              }`}
            >
              <Icon className={`w-5 h-5 flex-shrink-0 ${collapsed ? 'mx-auto' : ''}`} />
              {!collapsed && <span className="font-medium text-sm">{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Admin Info */}
      <div className="absolute bottom-0 left-0 right-0 p-3 border-t border-gray-800">
        {!collapsed && (
          <div className="flex items-center gap-3 mb-3 px-2">
            <div className="w-10 h-10 bg-[#F5A623] rounded-full flex items-center justify-center">
              <span className="text-sm font-bold text-black">SA</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">Super Admin</p>
              <p className="text-xs text-gray-500 truncate">admin@exiuscart.com</p>
            </div>
          </div>
        )}
        <button
          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:bg-red-500/10 hover:text-red-400 w-full transition ${
            collapsed ? 'justify-center' : ''
          }`}
        >
          <LogOut className="w-5 h-5 flex-shrink-0" />
          {!collapsed && <span className="font-medium text-sm">Logout</span>}
        </button>
      </div>
    </aside>
  );
}
