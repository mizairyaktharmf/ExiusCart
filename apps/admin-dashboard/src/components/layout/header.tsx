'use client';

import { Bell, Search, Menu } from 'lucide-react';

interface HeaderProps {
  title: string;
  onMenuClick?: () => void;
}

export function AdminHeader({ title, onMenuClick }: HeaderProps) {
  return (
    <header className="h-16 bg-[#0B1121] border-b border-gray-800 flex items-center justify-between px-4 lg:px-6">
      {/* Left Side */}
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Toggle menu"
          className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition lg:hidden"
        >
          <Menu className="w-5 h-5" />
        </button>
        <h1 className="text-lg font-semibold text-white">{title}</h1>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="hidden md:flex items-center gap-2 bg-[#151F32] rounded-lg px-3 py-2 border border-gray-800">
          <Search className="w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-none outline-none text-sm text-white placeholder-gray-500 w-48"
          />
        </div>

        {/* Notifications */}
        <button
          type="button"
          aria-label="Notifications"
          className="relative p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition"
        >
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-[#F5A623] rounded-full"></span>
        </button>

        {/* Status Badge */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-green-500/10 text-green-400 rounded-lg text-xs font-medium">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          Online
        </div>

        {/* Mobile Search */}
        <button
          type="button"
          aria-label="Search"
          className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition md:hidden"
        >
          <Search className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
