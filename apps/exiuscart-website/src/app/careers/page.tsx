import Link from 'next/link';
import {
  ArrowLeft,
  Briefcase,
  Globe,
  Clock,
  Heart,
  Zap,
  Users,
  Rocket,
  Code,
  Palette,
  Megaphone,
  Headphones,
  Mail,
  MapPin,
  Coffee,
  Laptop,
  Calendar,
  Target,
  Lightbulb,
  Shield,
} from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[#0B1121]">
      <Navbar />

      <main className="pt-28 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Back Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-8 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-[#F5A623]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Briefcase className="w-8 h-8 text-[#F5A623]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Join Our Team
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6">
              Help us build the future of business management in the UAE.
              We are a remote-first company based in Sri Lanka, expanding to Dubai.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm">
              <span className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4 text-[#F5A623]" />
                Sri Lanka | Dubai
              </span>
              <span className="flex items-center gap-2 text-gray-400">
                <Globe className="w-4 h-4 text-[#F5A623]" />
                Remote First
              </span>
              <span className="flex items-center gap-2 text-gray-400">
                <Coffee className="w-4 h-4 text-[#F5A623]" />
                Freelance Friendly
              </span>
            </div>
          </div>

          {/* About Us */}
          <section className="mb-20">
            <div className="bg-gradient-to-r from-[#151F32] to-[#1A2540] rounded-2xl border border-gray-800 p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="text-[#F5A623] font-medium text-sm">ABOUT NEXCODENOVA</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-2 mb-4">
                    Building Tech for UAE Small Businesses
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    NexCodeNova is a technology company based in Sri Lanka, with plans to expand
                    to Dubai. ExiusCart is our flagship product — an all-in-one business management
                    platform designed specifically for UAE small businesses.
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    We believe in building practical solutions that solve real problems. Our team
                    works remotely, values results over hours, and is passionate about creating
                    technology that makes a difference.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#0B1121] rounded-xl p-6 text-center">
                    <p className="text-3xl font-bold text-[#F5A623]">100%</p>
                    <p className="text-gray-400 text-sm">Remote Team</p>
                  </div>
                  <div className="bg-[#0B1121] rounded-xl p-6 text-center">
                    <p className="text-3xl font-bold text-[#F5A623]">2</p>
                    <p className="text-gray-400 text-sm">Countries</p>
                  </div>
                  <div className="bg-[#0B1121] rounded-xl p-6 text-center">
                    <p className="text-3xl font-bold text-[#F5A623]">UAE</p>
                    <p className="text-gray-400 text-sm">Target Market</p>
                  </div>
                  <div className="bg-[#0B1121] rounded-xl p-6 text-center">
                    <p className="text-3xl font-bold text-[#F5A623]">∞</p>
                    <p className="text-gray-400 text-sm">Growth Potential</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Values */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <span className="text-[#F5A623] font-medium text-sm">OUR VALUES</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
                What We Stand For
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#151F32] rounded-xl border border-gray-800 p-6 text-center hover:border-[#F5A623]/30 transition">
                <div className="w-12 h-12 bg-[#F5A623]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-[#F5A623]" />
                </div>
                <h3 className="text-white font-semibold mb-2">Customer First</h3>
                <p className="text-gray-400 text-sm">Every decision starts with &quot;How does this help our customers?&quot;</p>
              </div>
              <div className="bg-[#151F32] rounded-xl border border-gray-800 p-6 text-center hover:border-[#F5A623]/30 transition">
                <div className="w-12 h-12 bg-[#F5A623]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-6 h-6 text-[#F5A623]" />
                </div>
                <h3 className="text-white font-semibold mb-2">Move Fast</h3>
                <p className="text-gray-400 text-sm">We ship quickly, learn from feedback, and iterate. Done is better than perfect.</p>
              </div>
              <div className="bg-[#151F32] rounded-xl border border-gray-800 p-6 text-center hover:border-[#F5A623]/30 transition">
                <div className="w-12 h-12 bg-[#F5A623]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-6 h-6 text-[#F5A623]" />
                </div>
                <h3 className="text-white font-semibold mb-2">Think Big</h3>
                <p className="text-gray-400 text-sm">We are building something that will transform how businesses operate in the UAE.</p>
              </div>
              <div className="bg-[#151F32] rounded-xl border border-gray-800 p-6 text-center hover:border-[#F5A623]/30 transition">
                <div className="w-12 h-12 bg-[#F5A623]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-[#F5A623]" />
                </div>
                <h3 className="text-white font-semibold mb-2">Trust & Transparency</h3>
                <p className="text-gray-400 text-sm">We share openly, give honest feedback, and trust each other to do great work.</p>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <span className="text-[#F5A623] font-medium text-sm">WHY JOIN US</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
                Benefits & Perks
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-[#151F32] rounded-xl border border-gray-800 p-6 hover:border-[#F5A623]/30 transition">
                <div className="w-12 h-12 bg-[#F5A623]/10 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-[#F5A623]" />
                </div>
                <h3 className="text-white font-semibold mb-2">Work From Anywhere</h3>
                <p className="text-gray-400 text-sm">We are fully remote. Work from home, a coffee shop, or the beach — wherever you do your best work.</p>
              </div>
              <div className="bg-[#151F32] rounded-xl border border-gray-800 p-6 hover:border-[#F5A623]/30 transition">
                <div className="w-12 h-12 bg-[#F5A623]/10 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-[#F5A623]" />
                </div>
                <h3 className="text-white font-semibold mb-2">Flexible Hours</h3>
                <p className="text-gray-400 text-sm">No rigid 9-5 schedules. We care about results, not when you clock in. Work when you are most productive.</p>
              </div>
              <div className="bg-[#151F32] rounded-xl border border-gray-800 p-6 hover:border-[#F5A623]/30 transition">
                <div className="w-12 h-12 bg-[#F5A623]/10 rounded-xl flex items-center justify-center mb-4">
                  <Laptop className="w-6 h-6 text-[#F5A623]" />
                </div>
                <h3 className="text-white font-semibold mb-2">Latest Tools</h3>
                <p className="text-gray-400 text-sm">We provide the tools you need — modern tech stack, premium software, and collaboration tools.</p>
              </div>
              <div className="bg-[#151F32] rounded-xl border border-gray-800 p-6 hover:border-[#F5A623]/30 transition">
                <div className="w-12 h-12 bg-[#F5A623]/10 rounded-xl flex items-center justify-center mb-4">
                  <Rocket className="w-6 h-6 text-[#F5A623]" />
                </div>
                <h3 className="text-white font-semibold mb-2">Growth Opportunities</h3>
                <p className="text-gray-400 text-sm">As we expand to Dubai and beyond, grow with us. Early team members get exciting opportunities.</p>
              </div>
              <div className="bg-[#151F32] rounded-xl border border-gray-800 p-6 hover:border-[#F5A623]/30 transition">
                <div className="w-12 h-12 bg-[#F5A623]/10 rounded-xl flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-[#F5A623]" />
                </div>
                <h3 className="text-white font-semibold mb-2">Work-Life Balance</h3>
                <p className="text-gray-400 text-sm">Your life matters. Generous time off, no micromanagement, and a culture that respects boundaries.</p>
              </div>
              <div className="bg-[#151F32] rounded-xl border border-gray-800 p-6 hover:border-[#F5A623]/30 transition">
                <div className="w-12 h-12 bg-[#F5A623]/10 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-[#F5A623]" />
                </div>
                <h3 className="text-white font-semibold mb-2">Great Team</h3>
                <p className="text-gray-400 text-sm">Work with passionate, skilled people who love what they do. We collaborate, not compete.</p>
              </div>
            </div>
          </section>

          {/* Departments */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <span className="text-[#F5A623] font-medium text-sm">TEAMS</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
                Our Departments
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#151F32] rounded-xl border border-gray-800 p-6 hover:border-[#F5A623]/30 transition">
                <Code className="w-8 h-8 text-[#F5A623] mb-4" />
                <h3 className="text-white font-semibold mb-2">Engineering</h3>
                <p className="text-gray-400 text-sm">Build scalable products with modern technologies like React, Next.js, Node.js, and TypeScript.</p>
              </div>
              <div className="bg-[#151F32] rounded-xl border border-gray-800 p-6 hover:border-[#F5A623]/30 transition">
                <Palette className="w-8 h-8 text-[#F5A623] mb-4" />
                <h3 className="text-white font-semibold mb-2">Design</h3>
                <p className="text-gray-400 text-sm">Create beautiful, intuitive experiences that delight users and solve real problems.</p>
              </div>
              <div className="bg-[#151F32] rounded-xl border border-gray-800 p-6 hover:border-[#F5A623]/30 transition">
                <Megaphone className="w-8 h-8 text-[#F5A623] mb-4" />
                <h3 className="text-white font-semibold mb-2">Marketing</h3>
                <p className="text-gray-400 text-sm">Tell our story, reach new audiences, and help UAE businesses discover ExiusCart.</p>
              </div>
              <div className="bg-[#151F32] rounded-xl border border-gray-800 p-6 hover:border-[#F5A623]/30 transition">
                <Headphones className="w-8 h-8 text-[#F5A623] mb-4" />
                <h3 className="text-white font-semibold mb-2">Customer Success</h3>
                <p className="text-gray-400 text-sm">Help our customers succeed. Be the friendly voice that guides them through their journey.</p>
              </div>
            </div>
          </section>

          {/* Open Positions */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <span className="text-[#F5A623] font-medium text-sm">OPEN POSITIONS</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
                Current Opportunities
              </h2>
            </div>

            {/* No Openings Message */}
            <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-12 text-center">
              <div className="w-20 h-20 bg-[#1A2540] rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-10 h-10 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                No Open Positions Right Now
              </h3>
              <p className="text-gray-400 max-w-lg mx-auto mb-6">
                We don&apos;t have any open positions at the moment, but we&apos;re always
                interested in meeting talented people. If you think you&apos;d be a great
                fit for our team, we&apos;d love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:careers@exiuscart.com"
                  className="inline-flex items-center justify-center gap-2 bg-[#F5A623] hover:bg-[#E09612] text-black font-semibold px-8 py-3 rounded-lg transition"
                >
                  <Mail className="w-5 h-5" />
                  Send Your Resume
                </a>
                <a
                  href="https://wa.me/971562393573?text=Hi%2C%20I%27m%20interested%20in%20career%20opportunities%20at%20ExiusCart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-white font-semibold px-8 py-3 rounded-lg transition border border-gray-700"
                >
                  Contact on WhatsApp
                </a>
              </div>
            </div>
          </section>

          {/* Working Style */}
          <section className="mb-20">
            <div className="bg-gradient-to-r from-[#F5A623]/10 to-[#FF6B35]/10 rounded-2xl border border-[#F5A623]/20 p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  How We Work
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  We believe in flexibility and trust. Here&apos;s what working with us looks like.
                </p>
              </div>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-14 h-14 bg-[#151F32] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-7 h-7 text-[#F5A623]" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Remote & Flexible</h3>
                  <p className="text-gray-400 text-sm">
                    Work from anywhere. Set your own schedule. We trust you to deliver.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 bg-[#151F32] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-7 h-7 text-[#F5A623]" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Freelance Welcome</h3>
                  <p className="text-gray-400 text-sm">
                    Project-based work available. Flexible contracts for skilled professionals.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 bg-[#151F32] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Rocket className="w-7 h-7 text-[#F5A623]" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Grow With Us</h3>
                  <p className="text-gray-400 text-sm">
                    As we expand to Dubai, early team members get exciting opportunities.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section>
            <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Let&apos;s Connect
              </h2>
              <p className="text-gray-400 max-w-lg mx-auto mb-8">
                Even if there are no open positions, we&apos;re always looking for talented
                individuals. Send us your resume and tell us what you&apos;re passionate about.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:careers@exiuscart.com"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition"
                >
                  <Mail className="w-5 h-5 text-[#F5A623]" />
                  careers@exiuscart.com
                </a>
                <span className="text-gray-700 hidden sm:block">|</span>
                <a
                  href="https://wa.me/971562393573"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-[#25D366] transition"
                >
                  <Globe className="w-5 h-5 text-[#25D366]" />
                  +971 56 239 3573
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
