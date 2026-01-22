'use client';

import { useState } from 'react';
import {
  CreditCard,
  Check,
  Crown,
  Zap,
  Users,
  Package,
  BarChart3,
  MessageCircle,
  Shield,
  Clock,
  AlertTriangle,
  Download,
  Calendar,
  Receipt,
  Plus,
  Star,
} from 'lucide-react';

// Pricing plans
const plans = [
  {
    id: 'starter',
    name: 'Starter',
    price: 99,
    period: 'month',
    description: 'Perfect for small shops getting started',
    features: [
      { text: '1 Staff Account', included: true },
      { text: 'Up to 100 Products', included: true },
      { text: 'Basic POS', included: true },
      { text: 'Invoice Generation', included: true },
      { text: 'Basic Reports', included: true },
      { text: 'WhatsApp Integration', included: false },
      { text: 'Multi-device Login', included: false },
      { text: 'Priority Support', included: false },
    ],
    popular: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 199,
    period: 'month',
    description: 'Best for growing businesses',
    features: [
      { text: '2 Staff Accounts', included: true },
      { text: 'Unlimited Products', included: true },
      { text: 'Advanced POS', included: true },
      { text: 'Invoice Generation', included: true },
      { text: 'Advanced Reports & Analytics', included: true },
      { text: 'WhatsApp Integration', included: true },
      { text: '2 Device Login per User', included: true },
      { text: 'Priority Support', included: false },
    ],
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 399,
    period: 'month',
    description: 'For large operations with multiple staff',
    features: [
      { text: '5 Staff Accounts', included: true },
      { text: 'Unlimited Products', included: true },
      { text: 'Advanced POS + Inventory', included: true },
      { text: 'Custom Invoice Branding', included: true },
      { text: 'Full Analytics Suite', included: true },
      { text: 'WhatsApp Business API', included: true },
      { text: 'Unlimited Device Login', included: true },
      { text: '24/7 Priority Support', included: true },
    ],
    popular: false,
  },
];

// Mock billing history
const billingHistory = [
  { id: '1', date: '2024-01-01', description: 'Pro Plan - Monthly', amount: 199, status: 'paid' },
  { id: '2', date: '2023-12-01', description: 'Pro Plan - Monthly', amount: 199, status: 'paid' },
  { id: '3', date: '2023-11-15', description: 'Extra Staff (1)', amount: 59, status: 'paid' },
  { id: '4', date: '2023-11-01', description: 'Pro Plan - Monthly', amount: 199, status: 'paid' },
];

export default function BillingPage() {
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [showAddStaffModal, setShowAddStaffModal] = useState(false);
  const [extraStaffCount, setExtraStaffCount] = useState(1);

  // Current subscription (mock data)
  const currentPlan = {
    name: 'Pro',
    price: 199,
    nextBilling: '2024-02-01',
    daysLeft: 5,
    staffIncluded: 2,
    staffUsed: 2,
    extraStaff: 1,
    extraStaffCost: 59,
  };

  const handleUpgrade = (planId: string) => {
    setSelectedPlan(planId);
    setShowUpgradeModal(true);
  };

  const handleAddStaff = () => {
    console.log('Adding extra staff:', extraStaffCount);
    setShowAddStaffModal(false);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-AE', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Billing & Subscription</h1>
          <p className="text-muted-foreground text-sm">Manage your plan and billing</p>
        </div>
      </div>

      {/* Trial Warning (if applicable) */}
      {currentPlan.daysLeft <= 7 && (
        <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-4 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-medium text-foreground">Trial Ending Soon</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Your trial ends in {currentPlan.daysLeft} days. Upgrade now to continue using all features.
            </p>
          </div>
        </div>
      )}

      {/* Current Plan */}
      <div className="bg-card rounded-xl border border-border p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
              <Crown className="w-7 h-7 text-primary" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-foreground">{currentPlan.name} Plan</h2>
                <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Current</span>
              </div>
              <p className="text-muted-foreground text-sm mt-1">
                {currentPlan.price} AED/month • Next billing: {formatDate(currentPlan.nextBilling)}
              </p>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {currentPlan.staffUsed}/{currentPlan.staffIncluded + currentPlan.extraStaff} Staff
                </span>
                {currentPlan.extraStaff > 0 && (
                  <span className="text-sm text-primary">
                    +{currentPlan.extraStaff} extra ({currentPlan.extraStaffCost} AED/month)
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setShowAddStaffModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-foreground hover:bg-muted transition"
            >
              <Plus className="w-4 h-4" />
              Add Staff
            </button>
            <button
              type="button"
              onClick={() => handleUpgrade('enterprise')}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition"
            >
              <Zap className="w-4 h-4" />
              Upgrade
            </button>
          </div>
        </div>
      </div>

      {/* Staff Pricing Info */}
      <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <Users className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-medium text-foreground">Need More Staff?</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Add extra staff accounts for just <span className="font-bold text-foreground">59 AED/month</span> each.
              Each staff member gets their own login with up to 2 device access.
            </p>
          </div>
        </div>
      </div>

      {/* Plans Comparison */}
      <div>
        <h2 className="text-lg font-semibold text-foreground mb-4">Available Plans</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-card rounded-xl border-2 p-6 relative ${
                plan.popular ? 'border-primary' : 'border-border'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
                <div className="mt-2">
                  <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground"> AED/{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    {feature.included ? (
                      <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                    ) : (
                      <div className="w-4 h-4 rounded-full border-2 border-muted-foreground/30" />
                    )}
                    <span className={feature.included ? 'text-foreground' : 'text-muted-foreground'}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => handleUpgrade(plan.id)}
                disabled={plan.name === currentPlan.name}
                className={`w-full py-3 rounded-lg font-medium transition ${
                  plan.name === currentPlan.name
                    ? 'bg-muted text-muted-foreground cursor-not-allowed'
                    : plan.popular
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'border border-border text-foreground hover:bg-muted'
                }`}
              >
                {plan.name === currentPlan.name ? 'Current Plan' : 'Select Plan'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Billing History */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="p-4 border-b border-border flex items-center justify-between">
          <h2 className="font-semibold text-foreground">Billing History</h2>
          <button
            type="button"
            className="text-sm text-primary hover:underline flex items-center gap-1"
          >
            <Download className="w-4 h-4" />
            Download All
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground">Date</th>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground">Description</th>
                <th className="text-right p-4 text-sm font-medium text-muted-foreground">Amount</th>
                <th className="text-center p-4 text-sm font-medium text-muted-foreground">Status</th>
                <th className="text-center p-4 text-sm font-medium text-muted-foreground">Invoice</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {billingHistory.map((item) => (
                <tr key={item.id} className="hover:bg-muted/30 transition">
                  <td className="p-4 text-sm text-muted-foreground">{formatDate(item.date)}</td>
                  <td className="p-4 text-sm text-foreground">{item.description}</td>
                  <td className="p-4 text-sm text-foreground text-right font-medium">{item.amount} AED</td>
                  <td className="p-4 text-center">
                    <span className="text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 capitalize">
                      {item.status}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    <button
                      type="button"
                      className="p-2 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground transition"
                    >
                      <Receipt className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Extra Staff Modal */}
      {showAddStaffModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-xl border border-border w-full max-w-md">
            <div className="p-4 border-b border-border">
              <h2 className="text-lg font-semibold text-foreground">Add Extra Staff</h2>
            </div>
            <div className="p-4 space-y-4">
              <div className="bg-muted/50 rounded-lg p-4 text-center">
                <p className="text-sm text-muted-foreground mb-1">Cost per extra staff</p>
                <p className="text-3xl font-bold text-foreground">59 AED<span className="text-sm font-normal text-muted-foreground">/month</span></p>
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Number of staff to add</label>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setExtraStaffCount(Math.max(1, extraStaffCount - 1))}
                    className="w-10 h-10 flex items-center justify-center bg-muted rounded-lg text-foreground hover:bg-muted/80 transition"
                  >
                    -
                  </button>
                  <span className="flex-1 text-center text-2xl font-bold text-foreground">{extraStaffCount}</span>
                  <button
                    type="button"
                    onClick={() => setExtraStaffCount(extraStaffCount + 1)}
                    className="w-10 h-10 flex items-center justify-center bg-muted rounded-lg text-foreground hover:bg-muted/80 transition"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="bg-primary/5 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Monthly cost</span>
                  <span className="text-xl font-bold text-primary">{extraStaffCount * 59} AED</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowAddStaffModal(false)}
                  className="flex-1 py-3 border border-border rounded-lg text-foreground hover:bg-muted transition"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleAddStaff}
                  className="flex-1 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition"
                >
                  Add & Pay
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Upgrade Modal */}
      {showUpgradeModal && selectedPlan && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-xl border border-border w-full max-w-md">
            <div className="p-4 border-b border-border">
              <h2 className="text-lg font-semibold text-foreground">Confirm Upgrade</h2>
            </div>
            <div className="p-4 space-y-4">
              <div className="bg-muted/50 rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-1">Upgrading to</p>
                <p className="text-xl font-bold text-foreground capitalize">{selectedPlan} Plan</p>
                <p className="text-sm text-muted-foreground mt-1">
                  {plans.find(p => p.id === selectedPlan)?.price} AED/month
                </p>
              </div>

              <p className="text-sm text-muted-foreground">
                You will be charged the prorated amount for the remaining days of your current billing cycle,
                then the full amount starting next month.
              </p>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowUpgradeModal(false)}
                  className="flex-1 py-3 border border-border rounded-lg text-foreground hover:bg-muted transition"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => {
                    console.log('Upgrading to:', selectedPlan);
                    setShowUpgradeModal(false);
                  }}
                  className="flex-1 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition"
                >
                  Confirm Upgrade
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
