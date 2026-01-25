'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, HelpCircle, MessageCircle, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

const faqCategories = [
  {
    name: 'Getting Started',
    faqs: [
      {
        question: 'What is ExiusCart?',
        answer: 'ExiusCart is an all-in-one business management platform designed for UAE small businesses. It combines point of sale (POS), inventory management, VAT-compliant invoicing, customer management, and WhatsApp ordering capabilities in one easy-to-use system.',
      },
      {
        question: 'How do I sign up for ExiusCart?',
        answer: 'Simply click "Start Free Trial" on our website. You\'ll need to provide your business name, email, and phone number. No credit card is required. You\'ll get instant access to all features for 7 days.',
      },
      {
        question: 'Is there a free trial?',
        answer: 'Yes! We offer a 7-day free trial with full access to all features. No credit card required. At the end of the trial, you can choose a plan that fits your business or continue with limited free features.',
      },
      {
        question: 'Do I need to install any software?',
        answer: 'No installation needed. ExiusCart is a web-based platform that works in your browser. You can access it from any device — computer, tablet, or smartphone. We also have a mobile-optimized interface for on-the-go management.',
      },
    ],
  },
  {
    name: 'Pricing & Plans',
    faqs: [
      {
        question: 'How much does ExiusCart cost?',
        answer: 'We offer 4 plans: Starter (199 AED/year), Business (499 AED/year), Pro (799 AED/year), and Pro+ (1,499 AED/year). All prices are billed annually. Each plan includes different features and shop limits. Check our pricing page for detailed comparison.',
      },
      {
        question: 'Can I change my plan later?',
        answer: 'Yes, you can upgrade or downgrade your plan at any time. When upgrading, you\'ll get immediate access to new features. When downgrading, changes take effect at your next billing cycle.',
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept credit/debit cards (Visa, Mastercard), bank transfers, and cash payments through our office. All payments are processed securely.',
      },
      {
        question: 'Is there a refund policy?',
        answer: 'We offer a 7-day money-back guarantee after the free trial. If you\'re not satisfied within the first 7 days of your paid subscription, contact us for a full refund.',
      },
    ],
  },
  {
    name: 'Features & Functionality',
    faqs: [
      {
        question: 'Does ExiusCart support VAT invoicing?',
        answer: 'Yes! ExiusCart generates UAE VAT-compliant invoices with automatic 5% VAT calculation. All invoices include your TRN (Tax Registration Number) and meet FTA requirements.',
      },
      {
        question: 'How does WhatsApp ordering work?',
        answer: 'You get a unique catalog link that you can share with customers. They browse your products, add items to cart, and tap "Order via WhatsApp". The order details are sent directly to your WhatsApp, where you can confirm and process it.',
      },
      {
        question: 'Can I use ExiusCart offline?',
        answer: 'Yes, ExiusCart works offline. You can continue making sales and the data will sync automatically when you\'re back online. This is perfect for businesses in areas with unstable internet.',
      },
      {
        question: 'Does it support Arabic language?',
        answer: 'Yes! ExiusCart fully supports both Arabic and English. You can switch languages instantly from the settings. Invoices and receipts can also be generated in Arabic.',
      },
      {
        question: 'Can I connect my barcode scanner?',
        answer: 'Yes, ExiusCart works with any USB or Bluetooth barcode scanner. Simply scan products to add them to cart or look up inventory. No special configuration needed.',
      },
    ],
  },
  {
    name: 'Data & Security',
    faqs: [
      {
        question: 'Is my data secure?',
        answer: 'Absolutely. We use industry-standard SSL/TLS encryption for all data transmission and encrypt data at rest. Your business data is backed up daily to multiple secure locations.',
      },
      {
        question: 'Who owns my business data?',
        answer: 'You do. Your business data belongs to you. We never sell or share your data with third parties. You can export your data at any time in standard formats (Excel, PDF).',
      },
      {
        question: 'Can I export my data?',
        answer: 'Yes, you can export all your data including products, customers, invoices, and reports. Exports are available in Excel and PDF formats. Data export is available in all plans.',
      },
      {
        question: 'What happens if I cancel my subscription?',
        answer: 'Your data remains accessible in read-only mode for 30 days after cancellation. During this time, you can export all your data. After 30 days, data is securely deleted unless you request an extension.',
      },
    ],
  },
  {
    name: 'Support & Help',
    faqs: [
      {
        question: 'How can I get support?',
        answer: 'We offer multiple support channels: WhatsApp chat (fastest), email support, and phone support during business hours. Pro and Pro+ plans include priority support with faster response times.',
      },
      {
        question: 'Do you offer training?',
        answer: 'Yes! We provide free onboarding training for all new users. This includes a video walkthrough and a live session if needed. Pro+ plans include dedicated training sessions.',
      },
      {
        question: 'What are your support hours?',
        answer: 'Our support team is available Sunday to Thursday, 9 AM to 6 PM (UAE time). WhatsApp support typically responds within a few hours during business days.',
      },
      {
        question: 'Is there documentation available?',
        answer: 'Yes, we have comprehensive help documentation, video tutorials, and guides available in our Help Center. These cover all features and common use cases.',
      },
    ],
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-800 last:border-b-0">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-white font-medium pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-5">
          <p className="text-gray-400 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState(faqCategories[0].name);

  return (
    <div className="min-h-screen bg-[#0B1121]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-[#F5A623]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8 text-[#F5A623]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Find answers to common questions about ExiusCart. Can&apos;t find what you&apos;re looking for? Contact our support team.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Category Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                  Categories
                </h3>
                <nav className="space-y-1">
                  {faqCategories.map((category) => (
                    <button
                      key={category.name}
                      type="button"
                      onClick={() => setActiveCategory(category.name)}
                      className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition ${
                        activeCategory === category.name
                          ? 'bg-[#F5A623]/10 text-[#F5A623]'
                          : 'text-gray-400 hover:text-white hover:bg-[#151F32]'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* FAQ List */}
            <div className="lg:col-span-3">
              {faqCategories.map((category) => (
                <div
                  key={category.name}
                  className={activeCategory === category.name ? 'block' : 'hidden'}
                >
                  <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-6">
                    <h2 className="text-xl font-semibold text-white mb-6">
                      {category.name}
                    </h2>
                    <div>
                      {category.faqs.map((faq, i) => (
                        <FAQItem key={i} question={faq.question} answer={faq.answer} />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 px-4 bg-[#0D1526]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-gray-400 mb-8">
            Our support team is here to help. Reach out via WhatsApp for the fastest response.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/971562393573?text=Hi%2C%20I%20have%20a%20question%20about%20ExiusCart"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold px-8 py-4 rounded-lg transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-white font-semibold px-8 py-4 rounded-lg transition-all border border-gray-700"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-400 mb-8">
            Try ExiusCart free for 7 days. No credit card required.
          </p>
          <Link
            href="/register"
            className="inline-flex items-center justify-center gap-2 bg-[#F5A623] hover:bg-[#E09612] text-black font-semibold px-10 py-4 rounded-lg transition-all text-lg"
          >
            Start 7-Day Free Trial
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
