import Link from 'next/link';
import { MessageCircle, Instagram, Facebook, Linkedin, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#080D19] border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-xl font-bold text-white tracking-tight">
                <span className="text-[#F5A623]">Exius</span>Cart
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-6">
              All-in-one business management solution for UAE small businesses.
              Invoicing, inventory, and WhatsApp orders made simple.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/971562393573"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#25D366]/10 hover:bg-[#25D366]/20 rounded-lg flex items-center justify-center transition"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
              </a>
              <a
                href="https://instagram.com/exiuscart"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#E4405F]/10 hover:bg-[#E4405F]/20 rounded-lg flex items-center justify-center transition"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-[#E4405F]" />
              </a>
              <a
                href="https://facebook.com/exiuscart"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#1877F2]/10 hover:bg-[#1877F2]/20 rounded-lg flex items-center justify-center transition"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-[#1877F2]" />
              </a>
              <a
                href="https://linkedin.com/company/nexcodenova"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 rounded-lg flex items-center justify-center transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-[#0A66C2]" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-medium mb-4 text-sm">Product</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/features" className="text-gray-500 hover:text-gray-300 text-sm transition">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-500 hover:text-gray-300 text-sm transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-gray-500 hover:text-gray-300 text-sm transition">
                  Demo
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-500 hover:text-gray-300 text-sm transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-white font-medium mb-4 text-sm">Features</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/features/pos" className="text-gray-500 hover:text-gray-300 text-sm transition">
                  POS & Invoicing
                </Link>
              </li>
              <li>
                <Link href="/features/inventory" className="text-gray-500 hover:text-gray-300 text-sm transition">
                  Inventory
                </Link>
              </li>
              <li>
                <Link href="/features/whatsapp-orders" className="text-gray-500 hover:text-gray-300 text-sm transition">
                  WhatsApp Orders
                </Link>
              </li>
              <li>
                <Link href="/features/reports" className="text-gray-500 hover:text-gray-300 text-sm transition">
                  Reports
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-medium mb-4 text-sm">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-500 hover:text-gray-300 text-sm transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-500 hover:text-gray-300 text-sm transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-500 hover:text-gray-300 text-sm transition">
                  Careers
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/971563531043"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[#25D366] text-sm transition inline-flex items-center gap-1"
                >
                  <MessageCircle className="w-3 h-3" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-medium mb-4 text-sm">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-gray-500 hover:text-gray-300 text-sm transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-500 hover:text-gray-300 text-sm transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="bg-[#0B1121] rounded-xl p-4 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <a
              href="mailto:support@exiuscart.com"
              className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition"
            >
              <Mail className="w-4 h-4 text-[#F5A623]" />
              support@exiuscart.com
            </a>
            <a
              href="https://wa.me/971501234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-[#25D366] text-sm transition"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              +971 562393573
            </a>
            <span className="flex items-center gap-2 text-gray-400 text-sm">
              <MapPin className="w-4 h-4 text-[#F5A623]" />
               Dubai| Sri Lanka
            </span>
          </div>
          <Link
            href="/register"
            className="bg-[#F5A623] hover:bg-[#E09612] text-black font-semibold px-6 py-2 rounded-lg text-sm transition whitespace-nowrap"
          >
            Start 7-Day Free Trial
          </Link>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} ExiusCart. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm">
            A product of{' '}
            <a
              href="https://nexcodenova.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F5A623] hover:text-[#FFB84D] transition"
            >
              NexCodeNova
            </a>
          
          </p>
        </div>
      </div>
    </footer>
  );
}
