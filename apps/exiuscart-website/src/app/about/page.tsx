import Link from 'next/link';
import { ArrowRight, Target, Rocket, Globe, Users, Code, Zap, ShieldCheck, Heart, MapPin, Building2, TrendingUp } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0B1121]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#F5A623] font-medium mb-4">About Us</p>
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] mb-6">
            Building the Future of
            <span className="block text-[#F5A623]">Small Business Technology</span>
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            ExiusCart is built by NexCodeNova — a passionate tech company on a mission
            to empower small businesses across the Middle East and South Asia with
            affordable, powerful tools.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 bg-[#0D1526]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#F5A623] font-medium mb-3">Our Story</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                From Sri Lanka to the UAE — and beyond
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  NexCodeNova started with a simple observation: small shop owners in
                  Sri Lanka and the UAE were struggling with expensive, overly complex
                  business software that wasn&apos;t designed for their needs.
                </p>
                <p>
                  We saw grocers tracking inventory on paper, electronics shops creating
                  invoices by hand, and boutique owners missing orders because they
                  couldn&apos;t keep up with WhatsApp messages. There had to be a better way.
                </p>
                <p>
                  That&apos;s why we built ExiusCart — an all-in-one business management
                  platform that&apos;s affordable, easy to use, and built specifically for
                  the real challenges small businesses face every day.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Timeline */}
              <div className="relative pl-8 border-l-2 border-[#F5A623]/30 space-y-8">
                <div className="relative">
                  <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-[#F5A623]"></div>
                  <p className="text-[#F5A623] font-semibold text-sm">Founded</p>
                  <h3 className="text-white font-semibold text-lg">NexCodeNova Established</h3>
                  <p className="text-gray-500 text-sm">Started as a software development company in Sri Lanka</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-[#F5A623]"></div>
                  <p className="text-[#F5A623] font-semibold text-sm">Product Launch</p>
                  <h3 className="text-white font-semibold text-lg">ExiusCart v1.0 Released</h3>
                  <p className="text-gray-500 text-sm">First version launched for UAE small businesses</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-[#F5A623]"></div>
                  <p className="text-[#F5A623] font-semibold text-sm">Expansion</p>
                  <h3 className="text-white font-semibold text-lg">Dubai Office &amp; Multi-Region</h3>
                  <p className="text-gray-500 text-sm">Expanding to Dubai with support for multiple currencies</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-[#F5A623]/50"></div>
                  <p className="text-[#F5A623] font-semibold text-sm">What&apos;s Next</p>
                  <h3 className="text-white font-semibold text-lg">Growing Across the Region</h3>
                  <p className="text-gray-500 text-sm">Expanding to Saudi Arabia, India, and more markets</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-8">
              <div className="w-12 h-12 bg-[#F5A623]/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-[#F5A623]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed">
                To empower every small business owner with affordable, easy-to-use
                technology that simplifies daily operations — from invoicing and inventory
                to customer management and WhatsApp orders. We believe powerful tools
                shouldn&apos;t come with enterprise price tags.
              </p>
            </div>
            <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-8">
              <div className="w-12 h-12 bg-[#F5A623]/10 rounded-xl flex items-center justify-center mb-6">
                <Rocket className="w-6 h-6 text-[#F5A623]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-400 leading-relaxed">
                To become the go-to business management platform for small and medium
                businesses across the Middle East and South Asia — making it possible for
                every shop, boutique, and store to run smarter, grow faster, and serve
                their customers better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 bg-[#0D1526]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#F5A623] font-medium mb-3">What Drives Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              These principles guide everything we build and every decision we make
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#151F32] rounded-xl border border-gray-800 p-6 text-center">
              <div className="w-12 h-12 bg-[#F5A623]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-[#F5A623]" />
              </div>
              <h3 className="text-white font-semibold mb-2">Customer First</h3>
              <p className="text-gray-500 text-sm">Every feature we build starts with a real customer need</p>
            </div>
            <div className="bg-[#151F32] rounded-xl border border-gray-800 p-6 text-center">
              <div className="w-12 h-12 bg-[#F5A623]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-[#F5A623]" />
              </div>
              <h3 className="text-white font-semibold mb-2">Simplicity</h3>
              <p className="text-gray-500 text-sm">Powerful doesn&apos;t have to mean complicated</p>
            </div>
            <div className="bg-[#151F32] rounded-xl border border-gray-800 p-6 text-center">
              <div className="w-12 h-12 bg-[#F5A623]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-6 h-6 text-[#F5A623]" />
              </div>
              <h3 className="text-white font-semibold mb-2">Trust & Quality</h3>
              <p className="text-gray-500 text-sm">We ship reliable software you can count on</p>
            </div>
            <div className="bg-[#151F32] rounded-xl border border-gray-800 p-6 text-center">
              <div className="w-12 h-12 bg-[#F5A623]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-[#F5A623]" />
              </div>
              <h3 className="text-white font-semibold mb-2">Local Focus</h3>
              <p className="text-gray-500 text-sm">Built for local regulations, languages, and workflows</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-[#F5A623] mb-2">50+</p>
              <p className="text-gray-400">Active Businesses</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-[#F5A623] mb-2">5+</p>
              <p className="text-gray-400">Countries Served</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-[#F5A623] mb-2">10K+</p>
              <p className="text-gray-400">Invoices Generated</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-[#F5A623] mb-2">99%</p>
              <p className="text-gray-400">Uptime Guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Where We Are */}
      <section className="py-20 px-4 bg-[#0D1526]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#F5A623] font-medium mb-3">Our Presence</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Where We Operate
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Headquartered in Sri Lanka with an expanding presence in Dubai, serving businesses across multiple regions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#F5A623]/10 rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-[#F5A623]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Sri Lanka</h3>
                  <p className="text-gray-500 text-sm">Headquarters & Development</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our core engineering team operates from Sri Lanka, building and
                maintaining the ExiusCart platform.
              </p>
            </div>
            <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#F5A623]/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#F5A623]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Dubai, UAE</h3>
                  <p className="text-gray-500 text-sm">Regional Operations</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our growing Dubai presence serves businesses across the UAE,
                providing local support and market expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NexCodeNova Products */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#F5A623] font-medium mb-3">NexCodeNova</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Part of the NexCodeNova Family
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              ExiusCart is a flagship product of NexCodeNova, a technology company
              dedicated to building solutions that make businesses run better
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#151F32] rounded-2xl border border-[#F5A623]/30 p-8 relative">
              <div className="absolute top-4 right-4">
                <span className="bg-[#F5A623]/10 text-[#F5A623] text-xs font-medium px-3 py-1 rounded-full">
                  Flagship
                </span>
              </div>
              <div className="w-12 h-12 bg-[#F5A623]/10 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-[#F5A623]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">ExiusCart</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                All-in-one business management platform for small businesses — POS,
                invoicing, inventory, WhatsApp orders, and more.
              </p>
            </div>
            <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-8">
              <div className="w-12 h-12 bg-[#F5A623]/10 rounded-xl flex items-center justify-center mb-6">
                <Code className="w-6 h-6 text-[#F5A623]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Custom Development</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Bespoke software solutions for businesses — web apps, mobile apps,
                and enterprise systems tailored to your needs.
              </p>
            </div>
            <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-8">
              <div className="w-12 h-12 bg-[#F5A623]/10 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-[#F5A623]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Consulting</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Technology consulting services to help businesses digitize operations
                and adopt modern tools for growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#0D1526]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to grow your business?
          </h2>
          <p className="text-gray-400 mb-10">
            Join businesses across the UAE, Saudi Arabia, Sri Lanka, and India
            using ExiusCart to simplify their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 bg-[#F5A623] hover:bg-[#E09612] text-black font-semibold px-10 py-4 rounded-lg transition-all text-lg"
            >
              Start 7-Day Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-white font-semibold px-10 py-4 rounded-lg transition-all border border-gray-700 text-lg"
            >
              Contact Us
            </Link>
          </div>
          <p className="text-gray-600 text-sm mt-4">
            No credit card required
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
