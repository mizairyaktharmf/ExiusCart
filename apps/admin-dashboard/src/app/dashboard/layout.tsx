'use client';

import { useState } from 'react';
import { AdminSidebar } from '@/components/layout/sidebar';

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B1121]">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 transform lg:transform-none lg:opacity-100 transition-all duration-300 ${
          sidebarOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 lg:translate-x-0 lg:opacity-100'
        }`}
      >
        <AdminSidebar />
      </div>

      {/* Main Content */}
      <div className="lg:pl-64 min-h-screen transition-all duration-300">
        <main className="p-4 lg:p-6">{children}</main>
      </div>
    </div>
  );
}
