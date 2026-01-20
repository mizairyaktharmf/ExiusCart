import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#080D19] border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-xl font-bold text-white tracking-tight">
                <span className="text-[#F5A623]">Exius</span>Cart
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              All-in-one business management solution for UAE small businesses.
              Invoicing, inventory, and WhatsApp orders made simple.
            </p>
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
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-medium mb-4 text-sm">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-gray-500 hover:text-gray-300 text-sm transition">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-500 hover:text-gray-300 text-sm transition">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} ExiusCart. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm">
            Powered by{' '}
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
