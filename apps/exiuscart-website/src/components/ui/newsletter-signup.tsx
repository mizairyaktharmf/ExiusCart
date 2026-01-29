'use client';

import { useState } from 'react';
import { Mail, CheckCircle, Loader2, ArrowRight } from 'lucide-react';

interface NewsletterSignupProps {
  variant?: 'default' | 'compact' | 'inline';
  className?: string;
}

export function NewsletterSignup({ variant = 'default', className = '' }: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setErrorMessage('Please enter a valid email address');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    // Simulate API call - replace with actual newsletter API
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      setEmail('');
    } catch {
      setErrorMessage('Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  if (variant === 'compact') {
    return (
      <div className={className}>
        {status === 'success' ? (
          <div className="flex items-center gap-2 text-green-400">
            <CheckCircle className="w-5 h-5" />
            <span className="text-sm">Thanks for subscribing!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 bg-[#0B1121] border border-gray-700 rounded-lg px-4 py-2 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#F5A623] transition"
              disabled={status === 'loading'}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-[#F5A623] hover:bg-[#E09612] text-black font-semibold px-4 py-2 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <ArrowRight className="w-5 h-5" />
              )}
            </button>
          </form>
        )}
        {status === 'error' && (
          <p className="text-red-400 text-xs mt-2">{errorMessage}</p>
        )}
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <div className={`bg-[#151F32] rounded-xl border border-gray-800 p-6 ${className}`}>
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-[#F5A623]/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Mail className="w-5 h-5 text-[#F5A623]" />
          </div>
          <div className="flex-1">
            <h4 className="text-white font-semibold mb-1">Stay Updated</h4>
            <p className="text-gray-500 text-sm mb-4">Get product updates and business tips in your inbox.</p>

            {status === 'success' ? (
              <div className="flex items-center gap-2 text-green-400">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm">You&apos;re subscribed!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 bg-[#0B1121] border border-gray-700 rounded-lg px-4 py-2 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#F5A623] transition"
                  disabled={status === 'loading'}
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-[#F5A623] hover:bg-[#E09612] text-black font-semibold px-4 py-2 rounded-lg text-sm transition-all disabled:opacity-50"
                >
                  {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-xs mt-2">{errorMessage}</p>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Default variant - full section
  return (
    <section className={`py-16 px-4 ${className}`}>
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-16 h-16 bg-[#F5A623]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Mail className="w-8 h-8 text-[#F5A623]" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Get Business Tips & Updates
        </h2>
        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
          Join 1,000+ shop owners. Get weekly tips on growing your business,
          plus early access to new ExiusCart features.
        </p>

        {status === 'success' ? (
          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 max-w-md mx-auto">
            <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <p className="text-green-400 font-medium">Thanks for subscribing!</p>
            <p className="text-gray-400 text-sm mt-2">Check your inbox for a welcome email.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 bg-[#151F32] border border-gray-700 rounded-lg px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#F5A623] transition"
                disabled={status === 'loading'}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-[#F5A623] hover:bg-[#E09612] text-black font-semibold px-6 py-4 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
            {status === 'error' && (
              <p className="text-red-400 text-sm mt-3">{errorMessage}</p>
            )}
            <p className="text-gray-600 text-xs mt-4">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
