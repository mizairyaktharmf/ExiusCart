'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { menuItems } from './sidebar';
import { MoreHorizontal, X, LogOut } from 'lucide-react';

export function MobileBottomNav() {
  const pathname = usePathname();
  const [showMore, setShowMore] = useState(false);

  // Show first 4 items in the bottom bar, rest in "More" menu
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
        <div className="fixed bottom-16 left-0 right-0 bg-[#0B1121] border-t border-gray-800 z-50 lg:hidden rounded-t-2xl">
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
            <span className="text-sm font-semibold text-white">More Options</span>
            <button
              onClick={() => setShowMore(false)}
              className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="p-2 grid grid-cols-4 gap-2">
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
                      ? 'bg-[#F5A623] text-black'
                      : 'text-gray-400 hover:bg-[#151F32] hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-[10px] font-medium">{item.label}</span>
                </Link>
              );
            })}
            {/* Logout button */}
            <button
              className="flex flex-col items-center gap-1 p-3 rounded-xl text-gray-400 hover:bg-red-500/10 hover:text-red-400 transition-all"
            >
              <LogOut className="w-5 h-5" />
              <span className="text-[10px] font-medium">Logout</span>
            </button>
          </nav>
        </div>
      )}

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#0B1121] border-t border-gray-800 z-50 lg:hidden">
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
                    ? 'text-[#F5A623]'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : ''}`} />
                <span className={`text-[10px] ${isActive ? 'font-semibold' : 'font-medium'}`}>
                  {item.label}
                </span>
                {isActive && (
                  <div className="w-1 h-1 bg-[#F5A623] rounded-full mt-0.5" />
                )}
              </Link>
            );
          })}
          {/* More button */}
          <button
            onClick={() => setShowMore(!showMore)}
            className={`flex flex-col items-center gap-0.5 px-3 py-2 rounded-lg transition-all min-w-[60px] ${
              showMore ? 'text-[#F5A623]' : 'text-gray-400 hover:text-white'
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
