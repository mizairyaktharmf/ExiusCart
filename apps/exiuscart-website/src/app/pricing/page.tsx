'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, Check, X, Printer, Users, Package, MessageCircle, Rocket, Gift } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { useCurrency } from '@/context/currency-context';
import { pricing, monthlyPricing, formatPrice, getSavings } from '@/config/pricing';

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'onetime' | 'monthly'>('onetime');
  const { currency, currencyConfig, isLoading } = useCurrency();

  const showMonthly = currencyConfig.showMonthly;
  const showProPlus = currencyConfig.showProPlus;
  const hasMonthlyPricing = monthlyPricing[currency] !== null;

  const [showComingSoon, setShowComingSoon] = useState(false);

  const handleMonthlyClick = () => {
    if (!hasMonthlyPricing) {
      setShowComingSoon(true);
    } else {
      setBillingPeriod('monthly');
    }
  };

  // Get prices for current currency
  const prices = pricing[currency];

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

      {/* Coming Soon Modal */}
      {showComingSoon && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={() => setShowComingSoon(false)}>
          <div className="bg-[#151F32] rounded-2xl border border-gray-700 p-8 max-w-sm text-center" onClick={(e) => e.stopPropagation()}>
            <div className="w-16 h-16 bg-[#F5A623]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Rocket className="w-8 h-8 text-[#F5A623]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Coming Soon!</h3>
            <p className="text-gray-400 mb-6">
              Monthly subscription plans are coming soon for {currencyConfig.country}. For now, enjoy our one-time payment options with lifetime access!
            </p>
            <button
              onClick={() => setShowComingSoon(false)}
              className="px-6 py-2.5 bg-[#F5A623] hover:bg-[#E09612] text-black font-semibold rounded-lg transition-all"
            >
              Got it!
            </button>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Simple, transparent pricing
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {showMonthly
              ? 'Choose one-time payment for lifetime access or monthly subscription. No hidden fees, no surprises.'
              : 'One-time payment for lifetime access. No hidden fees, no surprises.'}
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
              </button>
              <button
                onClick={handleMonthlyClick}
                className={`px-6 py-2 rounded-md font-medium text-sm transition-all ${
                  billingPeriod === 'monthly' && hasMonthlyPricing
                    ? 'bg-[#F5A623] text-black'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                Monthly {!hasMonthlyPricing && <span className="text-xs ml-1">(Soon)</span>}
              </button>
            </div>
          </div>

          <div className={`grid gap-6 ${showProPlus ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3 max-w-5xl mx-auto'}`}>
            {/* Starter */}
            <PricingCard
              name="Starter"
              price={prices.starter.oneTime}
              originalPrice={prices.starter.originalOneTime}
              currency={currency}
              currencySymbol={currencyConfig.symbol}
              period="one-time"
              description="Perfect for small shops getting started"
              highlights={[
                { icon: Package, text: '25 Products' },
                { icon: Users, text: '1 User Access' },
              ]}
              features={[
                { text: 'POS & Invoicing', included: true },
                { text: 'Product Management (25 max)', included: true },
                { text: 'Customer Database', included: true },
                { text: 'Sales Reports', included: true },
                { text: 'PDF & Excel Export', included: true },
                { text: 'VAT Calculation', included: true },
                { text: 'WhatsApp Orders', included: false },
                { text: 'Inventory Management', included: false },
                { text: 'Low Stock Alerts', included: false },
              ]}
              addon={{
                text: 'Need more staff?',
                price: `+${formatPrice(99, currency)}/staff`,
              }}
            />

            {/* Business */}
            <PricingCard
              name="Business"
              price={prices.business.oneTime}
              originalPrice={prices.business.originalOneTime}
              currency={currency}
              currencySymbol={currencyConfig.symbol}
              period="one-time"
              description="For growing shops needing more capacity"
              highlights={[
                { icon: Package, text: '50 Products' },
                { icon: Users, text: '1 User Access' },
              ]}
              features={[
                { text: 'Everything in Starter', included: true },
                { text: 'Product Management (50 max)', included: true },
                { text: 'Advanced Reports', included: true },
                { text: 'Customer Insights', included: true },
                { text: 'WhatsApp Orders', included: false },
                { text: 'Inventory Management', included: false },
                { text: 'Low Stock Alerts', included: false },
                { text: 'Priority Support', included: false },
              ]}
              addon={{
                text: 'Need more staff?',
                price: `+${formatPrice(99, currency)}/staff`,
              }}
            />

            {/* Pro - Popular */}
            <PricingCard
              name="Pro"
              price={prices.pro.oneTime}
              originalPrice={prices.pro.originalOneTime}
              currency={currency}
              currencySymbol={currencyConfig.symbol}
              period="one-time"
              description="Complete solution with WhatsApp & Inventory"
              popular
              highlights={[
                { icon: Package, text: '100 Products' },
                { icon: Users, text: '2 User Access' },
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
              addon={{
                text: 'Need more staff?',
                price: `+${formatPrice(99, currency)}/staff`,
              }}
            />

            {/* Pro+ with Thermal Printer - Only show for AED/SAR */}
            {showProPlus && (
              <PricingCard
                name="Pro+"
                price={prices.proplus.oneTime}
                originalPrice={prices.proplus.originalOneTime}
                currency={currency}
                currencySymbol={currencyConfig.symbol}
                period="one-time"
                description="Everything + Free Thermal Printer"
                badge="Best Value"
                highlights={[
                  { icon: Printer, text: 'Free Thermal Printer' },
                  { icon: Package, text: 'Unlimited Products' },
                  { icon: Users, text: 'Multiple Staff' },
                  { icon: MessageCircle, text: 'WhatsApp Orders' },
                ]}
                features={[
                  { text: 'Everything in Pro', included: true },
                  { text: 'Free Thermal Receipt Printer', included: true },
                  { text: 'Automatic Receipt Printing', included: true },
                  { text: 'Custom Receipt Branding', included: true },
                  { text: 'Printer Setup Support', included: true },
                  { text: 'Unlimited Staff Accounts', included: true },
                  { text: 'On-site Setup Assistance', included: true },
                  { text: 'Lifetime Priority Support', included: true },
                ]}
                isProPlus
              />
            )}
          </div>

          {/* Add-on Info */}
          <div className="max-w-2xl mx-auto mt-8 bg-[#151F32] rounded-xl p-6 border border-gray-800">
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-5 h-5 text-[#F5A623]" />
              <h3 className="text-white font-semibold">Need Additional Staff?</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Add extra staff accounts to any plan for just <span className="text-[#F5A623] font-semibold">{formatPrice(99, currency)}</span> per staff member (one-time).
              Perfect for expanding teams without upgrading your entire plan.
            </p>
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
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Compare plans
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-4 text-gray-400 font-medium">Feature</th>
                  <th className="text-center py-4 text-gray-400 font-medium">Starter<br /><span className="text-xs">{formatPrice(prices.starter.oneTime, currency)}</span></th>
                  <th className="text-center py-4 text-gray-400 font-medium">Business<br /><span className="text-xs">{formatPrice(prices.business.oneTime, currency)}</span></th>
                  <th className="text-center py-4 text-gray-400 font-medium">Pro<br /><span className="text-xs">{formatPrice(prices.pro.oneTime, currency)}</span></th>
                  {showProPlus && (
                    <th className="text-center py-4 text-gray-400 font-medium">Pro+<br /><span className="text-xs">{formatPrice(prices.proplus.oneTime, currency)}</span></th>
                  )}
                </tr>
              </thead>
              <tbody className="text-sm">
                <CompareRow feature="Product Listing" starter="25" business="50" pro="100" proPlus={showProPlus ? "Unlimited" : undefined} showProPlus={showProPlus} />
                <CompareRow feature="Staff Accounts" starter="1" business="1" pro="2" proPlus={showProPlus ? "Unlimited" : undefined} showProPlus={showProPlus} />
                <CompareRow feature="POS & Invoicing" starter business pro proPlus={showProPlus} showProPlus={showProPlus} />
                <CompareRow feature="VAT Calculation" starter business pro proPlus={showProPlus} showProPlus={showProPlus} />
                <CompareRow feature="Customer Database" starter business pro proPlus={showProPlus} showProPlus={showProPlus} />
                <CompareRow feature="Sales Reports" starter business pro proPlus={showProPlus} showProPlus={showProPlus} />
                <CompareRow feature="PDF & Excel Export" starter business pro proPlus={showProPlus} showProPlus={showProPlus} />
                <CompareRow feature="WhatsApp Order Link" pro proPlus={showProPlus} showProPlus={showProPlus} />
                <CompareRow feature="Order Dashboard" pro proPlus={showProPlus} showProPlus={showProPlus} />
                <CompareRow feature="Inventory Management" pro proPlus={showProPlus} showProPlus={showProPlus} />
                <CompareRow feature="Low Stock Alerts" pro proPlus={showProPlus} showProPlus={showProPlus} />
                {showProPlus && (
                  <>
                    <CompareRow feature="Thermal Printer (Free)" proPlus showProPlus={showProPlus} />
                    <CompareRow feature="Receipt Printing" proPlus showProPlus={showProPlus} />
                  </>
                )}
                <CompareRow feature="Priority Support" pro proPlus={showProPlus} showProPlus={showProPlus} />
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
              question="Can I add more staff to my plan?"
              answer={`Yes! You can add additional staff accounts to any plan for just ${formatPrice(99, currency)} per staff member (one-time payment).`}
            />
            <FAQ
              question="Can I upgrade my plan later?"
              answer="Yes, you can upgrade anytime. You'll only pay the difference between your current plan and the new one."
            />
            {showProPlus && (
              <FAQ
                question="What does the free thermal printer include?"
                answer="The Pro+ plan includes a high-quality 80mm thermal receipt printer, delivery to your location, and free setup assistance. Perfect for printing customer receipts instantly."
              />
            )}
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
          <p className="text-gray-400 mb-10">
            7 days free. No credit card required. Cancel anytime.
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

function PricingCard({
  name,
  price,
  originalPrice,
  currency,
  currencySymbol,
  period,
  description,
  features,
  highlights,
  popular,
  badge,
  addon,
  isProPlus,
}: {
  name: string;
  price: number;
  originalPrice?: number;
  currency: string;
  currencySymbol: string;
  period: string;
  description: string;
  features: { text: string; included: boolean }[];
  highlights: { icon: React.ElementType; text: string }[];
  popular?: boolean;
  badge?: string;
  addon?: { text: string; price: string };
  isProPlus?: boolean;
}) {
  const savings = originalPrice ? originalPrice - price : 0;
  const formattedPrice = price.toLocaleString();
  const formattedOriginal = originalPrice?.toLocaleString();

  return (
    <div
      className={`relative bg-[#151F32] rounded-2xl border p-6 flex flex-col ${
        popular ? 'border-[#F5A623] ring-1 ring-[#F5A623]' : isProPlus ? 'border-emerald-500 ring-1 ring-emerald-500' : 'border-gray-800'
      }`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F5A623] text-black text-xs font-semibold px-3 py-1 rounded-full">
          Most Popular
        </div>
      )}
      {badge && !popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {badge}
        </div>
      )}

      <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
      <p className="text-gray-500 text-sm mb-4">{description}</p>

      <div className="mb-4">
        {formattedOriginal && savings > 0 && (
          <div className="flex items-center gap-2 mb-1">
            <span className="text-lg text-gray-500 line-through">{formattedOriginal} {currency}</span>
            <span className="text-xs font-semibold bg-red-500/20 text-red-400 px-2 py-0.5 rounded">SAVE {savings.toLocaleString()} {currency}</span>
          </div>
        )}
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold text-white">{formattedPrice}</span>
          <span className="text-gray-500">{currency}</span>
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
              className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${
                isProPlus ? 'bg-emerald-500/20 text-emerald-400' : 'bg-[#F5A623]/20 text-[#F5A623]'
              }`}
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
            : isProPlus
            ? 'bg-emerald-500 hover:bg-emerald-600 text-white'
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

      {addon && (
        <div className="mt-4 pt-4 border-t border-gray-800">
          <p className="text-xs text-gray-500">{addon.text}</p>
          <p className="text-sm font-semibold text-[#F5A623]">{addon.price}</p>
        </div>
      )}
    </div>
  );
}

function CompareRow({
  feature,
  starter,
  business,
  pro,
  proPlus,
  showProPlus,
}: {
  feature: string;
  starter?: boolean | string;
  business?: boolean | string;
  pro?: boolean | string;
  proPlus?: boolean | string;
  showProPlus: boolean;
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
      {showProPlus && <td className="py-3 text-center">{renderCell(proPlus)}</td>}
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
