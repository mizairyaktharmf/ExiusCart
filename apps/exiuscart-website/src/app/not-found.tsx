import Link from 'next/link';
import { Home, Search } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0B1121]">
      <Navbar />

      <section className="pt-28 pb-20 px-4 flex items-center justify-center min-h-[70vh]">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <p className="text-[#F5A623] text-8xl md:text-9xl font-bold">404</p>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-[#F5A623] hover:bg-[#E09612] text-black font-semibold px-8 py-4 rounded-lg transition-all"
            >
              <Home className="w-5 h-5" />
              Go Home
            </Link>
            <Link
              href="/features"
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-white font-semibold px-8 py-4 rounded-lg transition-all border border-gray-700"
            >
              <Search className="w-5 h-5" />
              Explore Features
            </Link>
          </div>

          <div className="mt-16 pt-10 border-t border-gray-800">
            <p className="text-gray-500 text-sm mb-6">Popular pages</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/pricing" className="text-gray-400 hover:text-white text-sm bg-[#151F32] px-4 py-2 rounded-lg transition">
                Pricing
              </Link>
              <Link href="/features" className="text-gray-400 hover:text-white text-sm bg-[#151F32] px-4 py-2 rounded-lg transition">
                Features
              </Link>
              <Link href="/demo" className="text-gray-400 hover:text-white text-sm bg-[#151F32] px-4 py-2 rounded-lg transition">
                Demo
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white text-sm bg-[#151F32] px-4 py-2 rounded-lg transition">
                Contact
              </Link>
              <Link href="/faq" className="text-gray-400 hover:text-white text-sm bg-[#151F32] px-4 py-2 rounded-lg transition">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
