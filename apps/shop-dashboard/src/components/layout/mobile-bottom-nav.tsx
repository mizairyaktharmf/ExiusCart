'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { menuItems } from './sidebar';
import { MoreHorizontal, X, LogOut } from 'lucide-react';

export function MobileBottomNav() {
  const pathname = usePathname();
  const [showMore, setShowMore] = useState(false);

  // Show first 4 items in the bottom bar (Dashboard, POS, Orders, Products)
  const mainItems = menuItems.slice(0, 4);
  const moreItems = menuItems.slice(4);

  return (
    <>
      {/* More Menu Overlay */}
      {showMore && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setShowMore(false)}
        />
      )}

      {/* More Menu Panel */}
      {showMore && (
        <div className="fixed bottom-16 left-0 right-0 bg-card border-t border-border z-50 lg:hidden rounded-t-2xl animate-slide-up">
          <div className="flex items-center justify-between px-4 py-3 border-b border-border">
            <span className="text-sm font-semibold text-foreground">More Options</span>
            <button
              type="button"
              onClick={() => setShowMore(false)}
              aria-label="Close menu"
              title="Close menu"
              className="p-1 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="p-3 grid grid-cols-4 gap-2">
            {moreItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                pathname === item.href ||
                (item.href !== '/dashboard' && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setShowMore(false)}
                  className={`flex flex-col items-center gap-1 p-3 rounded-xl transition-all ${
                    isActive
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-[10px] font-medium">{item.label}</span>
                </Link>
              );
            })}
            {/* Logout button */}
            <button
              type="button"
              aria-label="Logout"
              title="Logout"
              className="flex flex-col items-center gap-1 p-3 rounded-xl text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-all"
            >
              <LogOut className="w-5 h-5" />
              <span className="text-[10px] font-medium">Logout</span>
            </button>
          </nav>
        </div>
      )}

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50 lg:hidden">
        <div className="flex items-center justify-around px-2 py-1 safe-area-pb">
          {mainItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              pathname === item.href ||
              (item.href !== '/dashboard' && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center gap-0.5 px-3 py-2 rounded-lg transition-all min-w-[60px] ${
                  isActive
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : ''}`} />
                <span className={`text-[10px] ${isActive ? 'font-semibold' : 'font-medium'}`}>
                  {item.label}
                </span>
                {isActive && (
                  <div className="w-1 h-1 bg-primary rounded-full mt-0.5" />
                )}
              </Link>
            );
          })}
          {/* More button */}
          <button
            type="button"
            onClick={() => setShowMore(!showMore)}
            aria-label="More options"
            title="More options"
            className={`flex flex-col items-center gap-0.5 px-3 py-2 rounded-lg transition-all min-w-[60px] ${
              showMore ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <MoreHorizontal className="w-5 h-5" />
            <span className="text-[10px] font-medium">More</span>
          </button>
        </div>
      </nav>
    </>
  );
}
