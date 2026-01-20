import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0B1121]">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About ExiusCart
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We build software that helps small businesses in UAE manage their
            operations efficiently and grow.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Our Story</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-400 leading-relaxed mb-6">
              ExiusCart was born from a simple observation: small shop owners in
              the UAE were struggling with outdated tools. Paper invoices, Excel
              spreadsheets, and scattered WhatsApp messages made running a
              business harder than it should be.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              We set out to build something different — a complete business
              management solution that&apos;s simple enough for anyone to use, yet
              powerful enough to handle real business needs. No complicated
              setup, no expensive consultants, no technical skills required.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Today, ExiusCart helps businesses across the UAE create invoices,
              manage inventory, and handle customer orders — all from one
              dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 bg-[#0D1526]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-12 text-center">
            What we believe in
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard
              title="Simplicity"
              description="Software should make your life easier, not harder. We design every feature with simplicity in mind."
            />
            <ValueCard
              title="Affordability"
              description="Small businesses deserve great tools without breaking the bank. We keep our prices fair and transparent."
            />
            <ValueCard
              title="Local Focus"
              description="We understand UAE business needs — VAT compliance, Arabic support, and local payment methods."
            />
          </div>
        </div>
      </section>

      {/* Built By */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Built by NexCodeNova</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            ExiusCart is proudly built by NexCodeNova, a software development
            company focused on creating practical solutions for businesses in
            the region.
          </p>
          <a
            href="https://nexcodenova.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#F5A623] hover:text-[#FFB84D] font-medium transition"
          >
            Visit NexCodeNova
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-[#0D1526]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-gray-400 mb-10">
            Try ExiusCart free for 14 days and see how it can help your business.
          </p>
          <Link
            href="/register"
            className="inline-flex items-center justify-center gap-2 bg-[#F5A623] hover:bg-[#E09612] text-black font-semibold px-10 py-4 rounded-lg transition-all"
          >
            Start Free Trial
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ValueCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
