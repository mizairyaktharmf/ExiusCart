'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, Check, X, Users, Package, MessageCircle, Gift, Sparkles, Copy } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { useCurrency } from '@/context/currency-context';
import { pricing, formatPrice, seasonalOffer } from '@/config/pricing';

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'onetime' | 'monthly'>('onetime');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const { currency, currencyConfig, isLoading } = useCurrency();

  // Get prices for current currency
  const prices = pricing[currency];

  // Get current promo based on billing period
  const currentPromo = billingPeriod === 'onetime' ? seasonalOffer.oneTime : seasonalOffer.monthly;

  const copyPromoCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0B1121] flex items-center justify-center">
        <div className="animate-pulse text-gray-400">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B1121]">
      <Navbar />

      {/* Promo Code Banner - Shows current promo based on billing period */}
      {seasonalOffer.isActive && (
        <div className="bg-gradient-to-r from-[#F5A623] to-[#E09612] py-3 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 flex-wrap">
            <Sparkles className="w-5 h-5 text-black" />
            <span className="text-black font-bold">{seasonalOffer.name} Sale!</span>
            <span className="text-black/80">|</span>
            <span className="text-black font-medium">
              {billingPeriod === 'onetime' ? 'One-time' : 'Monthly'}: <span className="font-bold">{currentPromo.discount}% OFF</span> with
            </span>
            <button
              onClick={() => copyPromoCode(currentPromo.code)}
              className="inline-flex items-center gap-1.5 bg-black/20 hover:bg-black/30 text-black font-semibold px-3 py-1 rounded-md text-sm transition-all"
            >
              <Copy className="w-4 h-4" />
              {copiedCode === currentPromo.code ? 'Copied!' : currentPromo.code}
            </button>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Simple, transparent pricing
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {billingPeriod === 'onetime'
              ? 'One-time payment for lifetime access. No hidden fees, no surprises.'
              : 'Flexible monthly subscription. Cancel anytime.'}
          </p>
          {/* Show current region */}
          <p className="mt-4 text-sm text-gray-500">
            Showing prices for {currencyConfig.flag} {currencyConfig.country} ({currency})
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Toggle - One Time / Monthly */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-[#151F32] rounded-lg p-1">
              <button
                onClick={() => setBillingPeriod('onetime')}
                className={`px-6 py-2 rounded-md font-medium text-sm transition-all ${
                  billingPeriod === 'onetime'
                    ? 'bg-[#F5A623] text-black'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                One-time
                {seasonalOffer.isActive && (
                  <span className="ml-2 text-xs bg-black/20 px-1.5 py-0.5 rounded">
                    {seasonalOffer.oneTime.discount}% OFF
                  </span>
                )}
              </button>
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-6 py-2 rounded-md font-medium text-sm transition-all ${
                  billingPeriod === 'monthly'
                    ? 'bg-[#F5A623] text-black'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                Monthly
                {seasonalOffer.isActive && (
                  <span className="ml-2 text-xs bg-emerald-500/30 text-emerald-300 px-1.5 py-0.5 rounded">
                    {seasonalOffer.monthly.discount}% OFF
                  </span>
                )}
              </button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            {/* Starter */}
            <PricingCard
              name="Starter"
              price={billingPeriod === 'onetime' ? prices.starter.oneTime : prices.starter.monthly}
              currency={currency}
              period={billingPeriod === 'onetime' ? 'one-time' : 'month'}
              description="Perfect for small shops getting started"
              highlights={[
                { icon: Package, text: '45 Products' },
                { icon: Users, text: '1 User Access' },
              ]}
              features={[
                { text: 'POS & Invoicing', included: true },
                { text: 'Product Management (45 max)', included: true },
                { text: 'Customer Database', included: true },
                { text: 'Sales Reports', included: true },
                { text: 'PDF & Excel Export', included: true },
                { text: 'VAT Calculation', included: true },
                { text: 'WhatsApp Orders', included: false },
                { text: 'Inventory Management', included: false },
                { text: 'Low Stock Alerts', included: false },
              ]}
            />

            {/* Business */}
            <PricingCard
              name="Business"
              price={billingPeriod === 'onetime' ? prices.business.oneTime : prices.business.monthly}
              currency={currency}
              period={billingPeriod === 'onetime' ? 'one-time' : 'month'}
              description="For growing shops needing more capacity"
              highlights={[
                { icon: Package, text: '100 Products' },
                { icon: Users, text: '2 User Access' },
              ]}
              features={[
                { text: 'Everything in Starter', included: true },
                { text: 'Product Management (100 max)', included: true },
                { text: 'Advanced Reports', included: true },
                { text: 'Customer Insights', included: true },
                { text: 'WhatsApp Orders', included: false },
                { text: 'Inventory Management', included: false },
                { text: 'Low Stock Alerts', included: false },
                { text: 'Priority Support', included: false },
              ]}
            />

            {/* Pro - Popular */}
            <PricingCard
              name="Pro"
              price={billingPeriod === 'onetime' ? prices.pro.oneTime : prices.pro.monthly}
              currency={currency}
              period={billingPeriod === 'onetime' ? 'one-time' : 'month'}
              description="Complete solution with WhatsApp & Inventory"
              popular
              highlights={[
                { icon: Package, text: '100 Products' },
                { icon: Users, text: '3 User Access' },
                { icon: MessageCircle, text: 'WhatsApp Orders' },
              ]}
              features={[
                { text: 'Everything in Business', included: true },
                { text: 'WhatsApp Order Link', included: true },
                { text: 'Order Dashboard', included: true },
                { text: 'Order Status Tracking', included: true },
                { text: 'Customer Notifications', included: true },
                { text: 'Inventory Management', included: true },
                { text: 'Low Stock Alerts', included: true },
                { text: 'Stock Movement History', included: true },
                { text: 'Priority Support', included: true },
              ]}
            />
          </div>
        </div>

        {/* Free Trial Banner */}
        <div className="max-w-4xl mx-auto mt-12 bg-gradient-to-r from-[#F5A623]/10 via-[#F5A623]/5 to-[#F5A623]/10 rounded-2xl p-8 border border-[#F5A623]/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-[#F5A623]/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Gift className="w-7 h-7 text-[#F5A623]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Try Free for 7 Days</h3>
                <p className="text-gray-400 text-sm">
                  Full access to all Pro features. No credit card required. Cancel anytime.
                </p>
              </div>
            </div>
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 bg-[#F5A623] hover:bg-[#E09612] text-black font-semibold px-8 py-3 rounded-lg transition-all whitespace-nowrap"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 px-4 bg-[#0D1526]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Compare plans
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-4 text-gray-400 font-medium">Feature</th>
                  <th className="text-center py-4 text-gray-400 font-medium">
                    Starter<br />
                    <span className="text-xs">
                      {billingPeriod === 'onetime'
                        ? formatPrice(prices.starter.oneTime, currency)
                        : `${formatPrice(prices.starter.monthly, currency)}/mo`}
                    </span>
                  </th>
                  <th className="text-center py-4 text-gray-400 font-medium">
                    Business<br />
                    <span className="text-xs">
                      {billingPeriod === 'onetime'
                        ? formatPrice(prices.business.oneTime, currency)
                        : `${formatPrice(prices.business.monthly, currency)}/mo`}
                    </span>
                  </th>
                  <th className="text-center py-4 text-gray-400 font-medium">
                    Pro<br />
                    <span className="text-xs">
                      {billingPeriod === 'onetime'
                        ? formatPrice(prices.pro.oneTime, currency)
                        : `${formatPrice(prices.pro.monthly, currency)}/mo`}
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <CompareRow feature="Product Listing" starter="45" business="100" pro="100" />
                <CompareRow feature="Staff Accounts" starter="1" business="2" pro="3" />
                <CompareRow feature="POS & Invoicing" starter business pro />
                <CompareRow feature="VAT Calculation" starter business pro />
                <CompareRow feature="Customer Database" starter business pro />
                <CompareRow feature="Sales Reports" starter business pro />
                <CompareRow feature="PDF & Excel Export" starter business pro />
                <CompareRow feature="WhatsApp Order Link" pro />
                <CompareRow feature="Order Dashboard" pro />
                <CompareRow feature="Inventory Management" pro />
                <CompareRow feature="Low Stock Alerts" pro />
                <CompareRow feature="Priority Support" pro />
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Frequently asked questions
          </h2>

          <div className="space-y-6">
            <FAQ
              question="What's included in the one-time payment?"
              answer="One-time payment gives you lifetime access to all features in your chosen plan, plus free updates and support. No recurring fees."
            />
            <FAQ
              question="What's the difference between one-time and monthly?"
              answer="One-time payment gives you lifetime access with no recurring fees. Monthly subscription is flexible - pay as you go and cancel anytime."
            />
            <FAQ
              question="How do I use the promo codes?"
              answer={`Use code ${seasonalOffer.oneTime.code} for ${seasonalOffer.oneTime.discount}% off one-time payments, or ${seasonalOffer.monthly.code} for ${seasonalOffer.monthly.discount}% off monthly subscriptions.`}
            />
            <FAQ
              question="Can I upgrade my plan later?"
              answer="Yes, you can upgrade anytime. You'll only pay the difference between your current plan and the new one."
            />
            <FAQ
              question="Is there a free trial?"
              answer="Yes, you get 7 days free trial with full access to all Pro features. No credit card required."
            />
            <FAQ
              question="What payment methods do you accept?"
              answer="We accept bank transfer and various local payment methods. Card payments coming soon."
            />
            <FAQ
              question="Do you offer refunds?"
              answer="Yes, we offer a 30-day money-back guarantee if you're not satisfied."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-[#0D1526]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Start your free trial today
          </h2>
          <p className="text-gray-400 mb-6">
            7 days free. No credit card required. Cancel anytime.
          </p>
          {seasonalOffer.isActive && (
            <p className="text-[#F5A623] font-medium mb-6">
              {seasonalOffer.name} Sale! Use <span className="font-bold">{seasonalOffer.oneTime.code}</span> for {seasonalOffer.oneTime.discount}% off one-time or <span className="font-bold">{seasonalOffer.monthly.code}</span> for {seasonalOffer.monthly.discount}% off monthly!
            </p>
          )}
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

function PricingCard({
  name,
  price,
  currency,
  period,
  description,
  features,
  highlights,
  popular,
}: {
  name: string;
  price: number;
  currency: string;
  period: string;
  description: string;
  features: { text: string; included: boolean }[];
  highlights: { icon: React.ElementType; text: string }[];
  popular?: boolean;
}) {
  // Format price - handle decimals for USD
  const formatDisplayPrice = (p: number) => {
    if (Number.isInteger(p)) {
      return p.toLocaleString();
    }
    return p.toFixed(2);
  };

  const formattedPrice = formatDisplayPrice(price);

  return (
    <div
      className={`relative bg-[#151F32] rounded-2xl border p-6 flex flex-col ${
        popular ? 'border-[#F5A623] ring-1 ring-[#F5A623]' : 'border-gray-800'
      }`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F5A623] text-black text-xs font-semibold px-3 py-1 rounded-full">
          Most Popular
        </div>
      )}

      <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
      <p className="text-gray-500 text-sm mb-4">{description}</p>

      <div className="mb-4">
        <div className="flex items-baseline gap-1">
          {currency === 'USD' && <span className="text-3xl font-bold text-white">$</span>}
          <span className="text-3xl font-bold text-white">{formattedPrice}</span>
          {currency !== 'USD' && <span className="text-gray-500">{currency}</span>}
          <span className="text-gray-500 text-sm">/ {period}</span>
        </div>
      </div>

      {/* Highlights */}
      <div className="flex flex-wrap gap-2 mb-6">
        {highlights.map((highlight, i) => {
          const Icon = highlight.icon;
          return (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-[#F5A623]/20 text-[#F5A623]"
            >
              <Icon className="w-3.5 h-3.5" />
              {highlight.text}
            </span>
          );
        })}
      </div>

      <Link
        href="/register"
        className={`block text-center font-semibold py-3 rounded-lg transition-all mb-6 ${
          popular
            ? 'bg-[#F5A623] hover:bg-[#E09612] text-black'
            : 'bg-white/10 hover:bg-white/20 text-white'
        }`}
      >
        Get Started
      </Link>

      <ul className="space-y-2.5 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2.5">
            {feature.included ? (
              <Check className="w-4 h-4 text-[#F5A623] mt-0.5 flex-shrink-0" />
            ) : (
              <X className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
            )}
            <span className={`text-sm ${feature.included ? 'text-gray-300' : 'text-gray-600'}`}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CompareRow({
  feature,
  starter,
  business,
  pro,
}: {
  feature: string;
  starter?: boolean | string;
  business?: boolean | string;
  pro?: boolean | string;
}) {
  const renderCell = (value?: boolean | string) => {
    if (typeof value === 'string') {
      return <span className="text-gray-300 text-xs">{value}</span>;
    }
    if (value) {
      return <Check className="w-5 h-5 text-[#F5A623] mx-auto" />;
    }
    return <X className="w-5 h-5 text-gray-700 mx-auto" />;
  };

  return (
    <tr className="border-b border-gray-800/50">
      <td className="py-3 text-gray-300 text-sm">{feature}</td>
      <td className="py-3 text-center">{renderCell(starter)}</td>
      <td className="py-3 text-center">{renderCell(business)}</td>
      <td className="py-3 text-center">{renderCell(pro)}</td>
    </tr>
  );
}

function FAQ({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="border-b border-gray-800 pb-6">
      <h3 className="text-white font-medium mb-2">{question}</h3>
      <p className="text-gray-400 text-sm">{answer}</p>
    </div>
  );
}
