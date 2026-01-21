import Link from 'next/link';
import { ArrowRight, Check, X } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#0B1121]">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Simple, transparent pricing
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Choose one-time payment for lifetime access or monthly subscription.
            No hidden fees, no surprises.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Toggle - One Time / Monthly */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-[#151F32] rounded-lg p-1">
              <button className="px-6 py-2 rounded-md bg-[#F5A623] text-black font-medium text-sm">
                One-time
              </button>
              <button className="px-6 py-2 rounded-md text-gray-400 font-medium text-sm">
                Monthly
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <PricingCard
              name="Starter"
              price="599"
              period="one-time"
              description="Perfect for small shops getting started"
              features={[
                { text: 'POS & Invoicing', included: true },
                { text: 'Product Management', included: true },
                { text: 'Customer Database', included: true },
                { text: 'Sales Reports', included: true },
                { text: 'PDF & Excel Export', included: true },
                { text: 'WhatsApp Orders', included: false },
                { text: 'Inventory Management', included: false },
                { text: 'Low Stock Alerts', included: false },
              ]}
            />

            {/* Business - Popular */}
            <PricingCard
              name="Business"
              price="799"
              period="one-time"
              description="For shops with WhatsApp order needs"
              popular
              features={[
                { text: 'Everything in Starter', included: true },
                { text: 'WhatsApp Order Link', included: true },
                { text: 'Order Dashboard', included: true },
                { text: 'Order Status Tracking', included: true },
                { text: 'Customer Notifications', included: true },
                { text: 'Inventory Management', included: false },
                { text: 'Low Stock Alerts', included: false },
                { text: 'Stock History', included: false },
              ]}
            />

            {/* Pro */}
            <PricingCard
              name="Pro"
              price="1,299"
              period="one-time"
              description="Complete solution with inventory"
              features={[
                { text: 'Everything in Business', included: true },
                { text: 'Inventory Management', included: true },
                { text: 'Stock In/Out Tracking', included: true },
                { text: 'Low Stock Alerts', included: true },
                { text: 'Stock Movement History', included: true },
                { text: 'Supplier Notes', included: true },
                { text: 'Priority Support', included: true },
                { text: 'Multiple Staff Accounts', included: true },
              ]}
            />
          </div>

          {/* Monthly Pricing Note */}
          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm">
              Monthly plans: Starter 59 AED/mo · Business 79 AED/mo · Pro 129 AED/mo
            </p>
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
                  <th className="text-center py-4 text-gray-400 font-medium">Starter</th>
                  <th className="text-center py-4 text-gray-400 font-medium">Business</th>
                  <th className="text-center py-4 text-gray-400 font-medium">Pro</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <CompareRow feature="POS & Invoicing" starter business pro />
                <CompareRow feature="VAT Calculation" starter business pro />
                <CompareRow feature="Product Management" starter business pro />
                <CompareRow feature="Customer Database" starter business pro />
                <CompareRow feature="Sales Reports" starter business pro />
                <CompareRow feature="PDF & Excel Export" starter business pro />
                <CompareRow feature="WhatsApp Order Link" business pro />
                <CompareRow feature="Order Dashboard" business pro />
                <CompareRow feature="Order Status Tracking" business pro />
                <CompareRow feature="Inventory Management" pro />
                <CompareRow feature="Low Stock Alerts" pro />
                <CompareRow feature="Stock Movement History" pro />
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
              question="What's the difference between one-time and monthly?"
              answer="One-time payment gives you lifetime access to the plan features. Monthly subscription is pay-as-you-go. Both include free updates and support."
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
              answer="We accept bank transfer. Card payments coming soon."
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
  period,
  description,
  features,
  popular,
}: {
  name: string;
  price: string;
  period: string;
  description: string;
  features: { text: string; included: boolean }[];
  popular?: boolean;
}) {
  return (
    <div
      className={`relative bg-[#151F32] rounded-2xl border p-8 ${
        popular ? 'border-[#F5A623]' : 'border-gray-800'
      }`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F5A623] text-black text-xs font-semibold px-3 py-1 rounded-full">
          Most Popular
        </div>
      )}

      <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
      <p className="text-gray-500 text-sm mb-6">{description}</p>

      <div className="flex items-baseline gap-1 mb-8">
        <span className="text-4xl font-bold text-white">{price}</span>
        <span className="text-gray-500">AED</span>
        <span className="text-gray-500 text-sm">/ {period}</span>
      </div>

      <Link
        href="/register"
        className={`block text-center font-semibold py-3 rounded-lg transition-all mb-8 ${
          popular
            ? 'bg-[#F5A623] hover:bg-[#E09612] text-black'
            : 'bg-white/10 hover:bg-white/20 text-white'
        }`}
      >
        Get Started
      </Link>

      <ul className="space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3">
            {feature.included ? (
              <Check className="w-5 h-5 text-[#F5A623]" />
            ) : (
              <X className="w-5 h-5 text-gray-600" />
            )}
            <span className={feature.included ? 'text-gray-300' : 'text-gray-600'}>
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
  starter?: boolean;
  business?: boolean;
  pro?: boolean;
}) {
  return (
    <tr className="border-b border-gray-800/50">
      <td className="py-4 text-gray-300">{feature}</td>
      <td className="py-4 text-center">
        {starter ? (
          <Check className="w-5 h-5 text-[#F5A623] mx-auto" />
        ) : (
          <X className="w-5 h-5 text-gray-700 mx-auto" />
        )}
      </td>
      <td className="py-4 text-center">
        {business ? (
          <Check className="w-5 h-5 text-[#F5A623] mx-auto" />
        ) : (
          <X className="w-5 h-5 text-gray-700 mx-auto" />
        )}
      </td>
      <td className="py-4 text-center">
        {pro ? (
          <Check className="w-5 h-5 text-[#F5A623] mx-auto" />
        ) : (
          <X className="w-5 h-5 text-gray-700 mx-auto" />
        )}
      </td>
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
