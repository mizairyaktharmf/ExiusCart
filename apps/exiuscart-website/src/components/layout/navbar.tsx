'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { CurrencySwitcher } from '@/components/ui/currency-switcher';

const navLinks = [
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/demo', label: 'Demo' },
  { href: '/compare', label: 'Compare' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B1121]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-white tracking-tight">
              <span className="text-[#F5A623]">Exius</span>Cart
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <CurrencySwitcher />
            <Link
              href="/login"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="inline-flex items-center gap-2 bg-[#F5A623] hover:bg-[#E09612] text-black font-semibold px-5 py-2.5 rounded-lg transition-all text-sm"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-400 hover:text-white p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0B1121] border-t border-gray-800">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-400 hover:text-white transition-colors py-3"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 mt-4 border-t border-gray-800 space-y-3">
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="block text-gray-400 hover:text-white transition-colors py-2"
              >
                Login
              </Link>
              <Link
                href="/register"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 bg-[#F5A623] hover:bg-[#E09612] text-black font-semibold px-5 py-3 rounded-lg transition-all"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
