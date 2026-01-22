'use client';

import { Bell, Search, Menu, User, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/components/providers/theme-provider';

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <header className="h-16 bg-card border-b border-border flex items-center justify-between px-4 lg:px-6">
      {/* Mobile Menu Button */}
      <button
        type="button"
        onClick={onMenuClick}
        aria-label="Open menu"
        title="Open menu"
        className="lg:hidden p-2 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground transition"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Search */}
      <div className="hidden md:flex items-center flex-1 max-w-md ml-4">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search products, orders..."
            className="w-full pl-10 pr-4 py-2 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground placeholder:text-muted-foreground"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-2 lg:gap-4">
        {/* Mobile Search */}
        <button
          type="button"
          aria-label="Search"
          title="Search"
          className="md:hidden p-2 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground transition"
        >
          <Search className="w-5 h-5" />
        </button>

        {/* Theme Toggle */}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={resolvedTheme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          title={resolvedTheme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          className="p-2 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground transition"
        >
          {resolvedTheme === 'light' ? (
            <Moon className="w-5 h-5" />
          ) : (
            <Sun className="w-5 h-5" />
          )}
        </button>

        {/* Notifications */}
        <button
          type="button"
          aria-label="Notifications"
          title="Notifications"
          className="relative p-2 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground transition"
        >
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-destructive rounded-full"></span>
        </button>

        {/* Profile */}
        <button
          type="button"
          aria-label="Profile"
          title="Profile"
          className="flex items-center gap-2 p-2 hover:bg-muted rounded-lg transition"
        >
          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-primary" />
          </div>
          <span className="hidden md:block text-sm font-medium text-foreground">Ahmad</span>
        </button>
      </div>
    </header>
  );
}
