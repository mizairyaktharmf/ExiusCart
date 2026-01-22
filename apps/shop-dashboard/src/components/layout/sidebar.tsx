'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Boxes,
  Users,
  FileText,
  MessageCircle,
  BarChart3,
  Settings,
  LogOut,
  ChevronLeft,
  Store,
  CreditCard,
  X,
  ClipboardList,
  Truck,
  Receipt,
  Shield,
  Wallet,
} from 'lucide-react';

export const menuItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/dashboard/pos', label: 'POS', icon: ShoppingCart },
  { href: '/dashboard/orders', label: 'Orders', icon: FileText },
  { href: '/dashboard/products', label: 'Products', icon: Package },
  { href: '/dashboard/inventory', label: 'Inventory', icon: Boxes },
  { href: '/dashboard/purchases', label: 'Purchases', icon: Truck },
  { href: '/dashboard/quotations', label: 'Quotations', icon: ClipboardList },
  { href: '/dashboard/expenses', label: 'Expenses', icon: Wallet },
  { href: '/dashboard/customers', label: 'Customers', icon: Users },
  { href: '/dashboard/whatsapp', label: 'WhatsApp', icon: MessageCircle },
  { href: '/dashboard/reports', label: 'Reports', icon: BarChart3 },
  { href: '/dashboard/staff', label: 'Staff & Roles', icon: Shield },
  { href: '/dashboard/billing', label: 'Billing', icon: CreditCard },
  { href: '/dashboard/settings', label: 'Settings', icon: Settings },
];

interface ShopSidebarProps {
  collapsed: boolean;
  onCollapsedChange: (collapsed: boolean) => void;
  mobileOpen: boolean;
  onMobileClose: () => void;
}

export function ShopSidebar({
  collapsed,
  onCollapsedChange,
  mobileOpen,
  onMobileClose
}: ShopSidebarProps) {
  const pathname = usePathname();

  // Mock shop data - will come from API later
  const shopData = {
    name: 'Al Bareek Mobiles',
    plan: 'Pro Trial',
    daysLeft: 5,
  };

  return (
    <>
      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onMobileClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full bg-card border-r border-border transition-all duration-300 z-50
          ${collapsed ? 'w-20' : 'w-64'}
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Logo & Close button */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-border">
          <Link href="/dashboard" className="flex items-center gap-2">
            {!collapsed ? (
              <span className="text-xl font-bold text-foreground tracking-tight">
                <span className="text-primary">Exius</span>Cart
              </span>
            ) : (
              <span className="text-xl font-bold text-primary">E</span>
            )}
          </Link>

          {/* Mobile close button */}
          <button
            type="button"
            onClick={onMobileClose}
            aria-label="Close sidebar"
            title="Close sidebar"
            className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition lg:hidden"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Desktop collapse button */}
          <button
            type="button"
            onClick={() => onCollapsedChange(!collapsed)}
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition hidden lg:block"
          >
            <ChevronLeft
              className={`w-5 h-5 transition-transform ${collapsed ? 'rotate-180' : ''}`}
            />
          </button>
        </div>

        {/* Shop Info - Links to Profile */}
        {!collapsed && (
          <Link
            href="/dashboard/profile"
            onClick={onMobileClose}
            className="block px-4 py-3 border-b border-border hover:bg-muted/50 transition"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Store className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">{shopData.name}</p>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs text-primary font-medium">{shopData.plan}</span>
                  <span className="text-xs text-muted-foreground">• {shopData.daysLeft} days left</span>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Navigation */}
        <nav className="p-3 space-y-1 overflow-y-auto max-h-[calc(100vh-180px)]">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              pathname === item.href ||
              (item.href !== '/dashboard' && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onMobileClose}
                title={collapsed ? item.label : undefined}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                <Icon className={`w-5 h-5 flex-shrink-0 ${collapsed ? 'mx-auto' : ''}`} />
                {!collapsed && <span className="font-medium text-sm">{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="absolute bottom-0 left-0 right-0 p-3 border-t border-border bg-card">
          <button
            type="button"
            aria-label="Logout"
            title="Logout"
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-destructive/10 hover:text-destructive w-full transition ${
              collapsed ? 'justify-center' : ''
            }`}
          >
            <LogOut className="w-5 h-5 flex-shrink-0" />
            {!collapsed && <span className="font-medium text-sm">Logout</span>}
          </button>
        </div>
      </aside>
    </>
  );
}
