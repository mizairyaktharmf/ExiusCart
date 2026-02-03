'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Play,
  Monitor,
  Smartphone,
  ShoppingCart,
  Package,
  FileText,
  Users,
  BarChart3,
  MessageCircle,
  ArrowRight,
  Check,
  X
} from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

const demoFeatures = [
  {
    id: 'pos',
    title: 'Point of Sale',
    description: 'Fast, intuitive checkout experience with cart management, discounts, and multiple payment methods.',
    icon: ShoppingCart,
    highlights: ['Quick product search', 'Discount codes', 'Multiple payment options', 'Receipt printing'],
  },
  {
    id: 'products',
    title: 'Product Management',
    description: 'Organize your catalog with categories, variants, and real-time stock tracking.',
    icon: Package,
    highlights: ['Bulk import/export', 'Category management', 'Stock alerts', 'Barcode support'],
  },
  {
    id: 'invoicing',
    title: 'VAT Invoicing',
    description: 'Generate UAE-compliant invoices with automatic VAT calculation and PDF export.',
    icon: FileText,
    highlights: ['5% VAT compliant', 'PDF & Excel export', 'Email invoices', 'Payment tracking'],
  },
  {
    id: 'customers',
    title: 'Customer Database',
    description: 'Build relationships with customer profiles, purchase history, and loyalty tracking.',
    icon: Users,
    highlights: ['Customer profiles', 'Purchase history', 'Credit management', 'Loyalty points'],
  },
  {
    id: 'reports',
    title: 'Sales Reports',
    description: 'Make data-driven decisions with comprehensive sales analytics and insights.',
    icon: BarChart3,
    highlights: ['Daily/weekly/monthly', 'Product performance', 'Staff reports', 'Profit margins'],
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp Orders',
    description: 'Receive and manage customer orders directly through WhatsApp integration.',
    icon: MessageCircle,
    highlights: ['Order notifications', 'Auto-replies', 'Catalog sharing', 'Order tracking'],
  },
];

export default function DemoPage() {
  const [showVideo, setShowVideo] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(demoFeatures[0]);

  return (
    <div className="min-h-screen bg-[#0B1121]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#F5A623]/10 border border-[#F5A623]/30 rounded-full px-4 py-2 mb-6">
            <Play className="w-4 h-4 text-[#F5A623]" />
            <span className="text-[#F5A623] text-sm font-medium">Live Demo Available</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            See ExiusCart in Action
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            Explore our features through an interactive demo. No signup required —
            see exactly how ExiusCart can transform your business operations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowVideo(true)}
              className="inline-flex items-center justify-center gap-2 bg-[#F5A623] hover:bg-[#E09612] text-black font-semibold px-8 py-4 rounded-lg transition-all"
            >
              <Play className="w-5 h-5" />
              Watch Video Demo
            </button>
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-white font-semibold px-8 py-4 rounded-lg transition-all border border-gray-700"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Device Preview */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-[#F5A623]">
              <Monitor className="w-5 h-5" />
              <span className="text-sm font-medium">Desktop</span>
            </div>
            <div className="w-px h-4 bg-gray-700" />
            <div className="flex items-center gap-2 text-gray-400">
              <Smartphone className="w-5 h-5" />
              <span className="text-sm font-medium">Mobile Responsive</span>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="relative">
            <div className="bg-[#151F32] rounded-2xl border border-gray-800 overflow-hidden shadow-2xl">
              {/* Browser Header */}
              <div className="bg-[#1A2540] px-4 py-3 flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27CA40]"></div>
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-[#0B1121] rounded-lg px-4 py-1.5 text-gray-500 text-sm">
                    app.exiuscart.com/dashboard
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6">
                <div className="grid grid-cols-4 gap-4 mb-6">
                  <div className="bg-[#1A2540] rounded-xl p-4">
                    <p className="text-gray-400 text-xs mb-1">Today's Sales</p>
                    <p className="text-white text-xl font-bold">2,450 AED</p>
                    <p className="text-green-400 text-xs mt-1">+12% from yesterday</p>
                  </div>
                  <div className="bg-[#1A2540] rounded-xl p-4">
                    <p className="text-gray-400 text-xs mb-1">Orders</p>
                    <p className="text-white text-xl font-bold">24</p>
                    <p className="text-green-400 text-xs mt-1">+5 new orders</p>
                  </div>
                  <div className="bg-[#1A2540] rounded-xl p-4">
                    <p className="text-gray-400 text-xs mb-1">Products</p>
                    <p className="text-white text-xl font-bold">156</p>
                    <p className="text-yellow-400 text-xs mt-1">3 low stock</p>
                  </div>
                  <div className="bg-[#1A2540] rounded-xl p-4">
                    <p className="text-gray-400 text-xs mb-1">Customers</p>
                    <p className="text-white text-xl font-bold">89</p>
                    <p className="text-green-400 text-xs mt-1">+2 this week</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2 bg-[#1A2540] rounded-xl p-4 h-48">
                    <p className="text-gray-400 text-sm mb-4">Sales Overview</p>
                    <div className="flex items-end gap-2 h-32">
                      {['h-[40%]', 'h-[65%]', 'h-[45%]', 'h-[80%]', 'h-[55%]', 'h-[90%]', 'h-[70%]'].map((height, i) => (
                        <div key={i} className={`flex-1 bg-[#F5A623]/20 rounded-t ${height}`}>
                          <div className="w-full bg-[#F5A623] rounded-t h-[60%]"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-[#1A2540] rounded-xl p-4">
                    <p className="text-gray-400 text-sm mb-3">Recent Orders</p>
                    <div className="space-y-2">
                      {['#1234', '#1233', '#1232'].map((order) => (
                        <div key={order} className="flex items-center justify-between text-sm">
                          <span className="text-white">{order}</span>
                          <span className="text-green-400 text-xs">Completed</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F5A623]/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Interactive Feature Demo */}
      <section className="py-20 px-4 bg-[#0D1526]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Explore Every Feature
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Click on any feature below to see how it works and what it can do for your business.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Feature List */}
            <div className="space-y-3">
              {demoFeatures.map((feature) => {
                const Icon = feature.icon;
                const isSelected = selectedFeature.id === feature.id;
                return (
                  <button
                    key={feature.id}
                    onClick={() => setSelectedFeature(feature)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      isSelected
                        ? 'bg-[#F5A623]/10 border-[#F5A623]/50'
                        : 'bg-[#151F32] border-gray-800 hover:border-gray-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        isSelected ? 'bg-[#F5A623]' : 'bg-[#1A2540]'
                      }`}>
                        <Icon className={`w-5 h-5 ${isSelected ? 'text-black' : 'text-[#F5A623]'}`} />
                      </div>
                      <div>
                        <h3 className={`font-medium ${isSelected ? 'text-white' : 'text-gray-300'}`}>
                          {feature.title}
                        </h3>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Feature Detail */}
            <div className="lg:col-span-2">
              <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-8 h-full">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-[#F5A623]/20 rounded-xl flex items-center justify-center">
                    <selectedFeature.icon className="w-7 h-7 text-[#F5A623]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{selectedFeature.title}</h3>
                    <p className="text-gray-400">{selectedFeature.description}</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {selectedFeature.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-3 bg-[#0B1121] rounded-lg p-3">
                      <Check className="w-5 h-5 text-[#F5A623] flex-shrink-0" />
                      <span className="text-gray-300">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Mini Preview */}
                <div className="bg-[#0B1121] rounded-xl p-4 border border-gray-800">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-[#F5A623]"></div>
                    <span className="text-gray-500 text-sm">Live Preview</span>
                  </div>
                  <div className="h-40 flex items-center justify-center">
                    <div className="text-center">
                      <selectedFeature.icon className="w-12 h-12 text-[#F5A623]/30 mx-auto mb-3" />
                      <p className="text-gray-500 text-sm">
                        Start your free trial to explore {selectedFeature.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Try Demo */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#F5A623]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Play className="w-8 h-8 text-[#F5A623]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No Signup Required</h3>
              <p className="text-gray-400">
                Watch the video demo instantly without creating an account or providing any information.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#F5A623]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-8 h-8 text-[#F5A623]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Full Feature Tour</h3>
              <p className="text-gray-400">
                See every feature in action — from POS to reports, inventory to WhatsApp orders.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#F5A623]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-[#F5A623]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Ask Questions</h3>
              <p className="text-gray-400">
                Have questions during the demo? Chat with us on WhatsApp for instant answers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#0D1526]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Try ExiusCart?
          </h2>
          <p className="text-gray-400 mb-10">
            Start your 7-day free trial today. No credit card required.
            Experience all features with your own data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 bg-[#F5A623] hover:bg-[#E09612] text-black font-semibold px-10 py-4 rounded-lg transition-all text-lg"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/971501234567?text=Hi%2C%20I%20watched%20the%20demo%20and%20have%20some%20questions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold px-10 py-4 rounded-lg transition-all text-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Ask Questions
            </a>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideo && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#151F32] rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition"
              aria-label="Close video modal"
              title="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Video Player */}
            <div className="aspect-video bg-[#0B1121]">
              <video
                className="w-full h-full"
                controls
                autoPlay
                playsInline
              >
                <source src="/video/DEMO.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
