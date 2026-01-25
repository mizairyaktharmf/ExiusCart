'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MessageCircle, Mail, Phone, MapPin, Clock, Send, CheckCircle, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-[#0B1121]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have questions about ExiusCart? We're here to help. Reach out to us
            through any of the channels below.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {/* WhatsApp - Primary */}
            <a
              href="https://wa.me/971562393573?text=Hi%2C%20I'm%20interested%20in%20ExiusCart"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#25D366]/10 border-2 border-[#25D366]/30 rounded-2xl p-6 hover:border-[#25D366] transition-all"
            >
              <div className="w-14 h-14 bg-[#25D366] rounded-xl flex items-center justify-center mb-4">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">WhatsApp</h3>
              <p className="text-gray-400 mb-4">
                Fastest way to reach us. Get instant responses during business hours.
              </p>
              <span className="inline-flex items-center gap-2 text-[#25D366] font-medium group-hover:gap-3 transition-all">
                Chat Now
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:support@exiuscart.com"
              className="group bg-[#151F32] border border-gray-800 rounded-2xl p-6 hover:border-[#F5A623]/50 transition-all"
            >
              <div className="w-14 h-14 bg-[#F5A623]/20 rounded-xl flex items-center justify-center mb-4">
                <Mail className="w-7 h-7 text-[#F5A623]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-400 mb-4">
                Send us a detailed message. We typically respond within 24 hours.
              </p>
              <span className="inline-flex items-center gap-2 text-[#F5A623] font-medium group-hover:gap-3 transition-all">
                support@exiuscart.com
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>

            {/* Phone */}
            <a
              href="tel:+971562393573"
              className="group bg-[#151F32] border border-gray-800 rounded-2xl p-6 hover:border-[#F5A623]/50 transition-all"
            >
              <div className="w-14 h-14 bg-[#F5A623]/20 rounded-xl flex items-center justify-center mb-4">
                <Phone className="w-7 h-7 text-[#F5A623]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-400 mb-4">
                Speak directly with our team for urgent inquiries or support.
              </p>
              <span className="inline-flex items-center gap-2 text-[#F5A623] font-medium group-hover:gap-3 transition-all">
                +971 562393573
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-8">
              <h2 className="text-2xl font-bold text-white mb-2">Send us a Message</h2>
              <p className="text-gray-400 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-[#25D366]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-[#25D366]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400 mb-6">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-[#F5A623] hover:text-[#FFB84D] font-medium"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#0B1121] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623] outline-none transition"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#0B1121] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623] outline-none transition"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-[#0B1121] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623] outline-none transition"
                        placeholder="+971 50 123 4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#0B1121] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623] outline-none transition"
                      >
                        <option value="">Select a subject</option>
                        <option value="sales">Sales Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="demo">Request Demo</option>
                        <option value="partnership">Partnership</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-[#0B1121] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623] outline-none transition resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#F5A623] hover:bg-[#E09612] disabled:bg-[#F5A623]/50 text-black font-semibold py-4 rounded-lg transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Info Section */}
            <div className="space-y-8">
              {/* Business Hours */}
              <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#F5A623]/20 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#F5A623]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Business Hours</h3>
                </div>
                <div className="space-y-2 text-gray-400">
                  <div className="flex justify-between">
                    <span>Sunday - Thursday</span>
                    <span className="text-white">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Friday</span>
                    <span className="text-white">9:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-gray-500">Closed</span>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#F5A623]/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#F5A623]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Our Location</h3>
                </div>
                <p className="text-gray-400">
                  Dubai, United Arab Emirates
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  We operate remotely and serve businesses across all Emirates.
                </p>
              </div>

              {/* Quick Links */}
              <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <Link
                    href="/pricing"
                    className="flex items-center justify-between text-gray-400 hover:text-[#F5A623] transition"
                  >
                    <span>View Pricing Plans</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/features"
                    className="flex items-center justify-between text-gray-400 hover:text-[#F5A623] transition"
                  >
                    <span>Explore Features</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/register"
                    className="flex items-center justify-between text-gray-400 hover:text-[#F5A623] transition"
                  >
                    <span>Start Free Trial</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-16 px-4 bg-[#0D1526]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 bg-[#25D366] rounded-2xl flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Prefer WhatsApp?
          </h2>
          <p className="text-gray-400 mb-8">
            Get instant support and answers to your questions. Our team is ready to help you get started with ExiusCart.
          </p>
          <a
            href="https://wa.me/971501234567?text=Hi%2C%20I'm%20interested%20in%20ExiusCart"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold px-8 py-4 rounded-lg transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            Start WhatsApp Chat
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
