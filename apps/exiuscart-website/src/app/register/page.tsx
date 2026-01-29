'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Eye, EyeOff, Loader2, ArrowLeft, Check, Store, Users, TrendingUp, Shield } from 'lucide-react';

const registerSchema = z
  .object({
    shopName: z.string().min(2, 'Shop name must be at least 2 characters'),
    ownerName: z.string().min(2, 'Your name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email'),
    phone: z.string().min(9, 'Please enter a valid phone number'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

type RegisterForm = z.infer<typeof registerSchema>;

const features = [
  { icon: Store, text: 'Easy store setup in minutes' },
  { icon: Users, text: 'Unlimited staff accounts' },
  { icon: TrendingUp, text: 'Real-time sales analytics' },
  { icon: Shield, text: 'Secure payment processing' },
];

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterForm) => {
    setIsLoading(true);
    try {
      // TODO: Implement register API call
      console.log('Register data:', data);
    } catch (error) {
      console.error('Register error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1121] flex">
      {/* Left Side - Branding (hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#151F32] to-[#0B1121] flex-col justify-between p-12 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#F5A623] rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#F5A623] rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Logo */}
          <Link href="/" className="inline-flex items-center gap-2 mb-12">
            <span className="text-2xl font-bold text-white tracking-tight">
              <span className="text-[#F5A623]">Exius</span>Cart
            </span>
          </Link>

          {/* Headline */}
          <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
            Start Your Business<br />
            <span className="text-[#F5A623]">Journey Today</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-md">
            Join thousands of successful retailers using ExiusCart to manage and grow their business.
          </p>

          {/* Features */}
          <div className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#F5A623]/10 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-[#F5A623]" />
                </div>
                <span className="text-gray-300">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="relative z-10">
          <div className="bg-[#1A2540] rounded-xl border border-gray-800 p-3 shadow-2xl">
            <Image
              src="/images/dashboard-preview.png"
              alt="ExiusCart Dashboard Preview"
              width={600}
              height={350}
              className="rounded-lg w-full h-auto"
              priority
            />
          </div>

          {/* Stats Bar */}
          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="bg-[#1A2540]/50 rounded-lg p-4 border border-gray-800/50">
              <p className="text-2xl font-bold text-white">5,000+</p>
              <p className="text-gray-500 text-sm">Active Stores</p>
            </div>
            <div className="bg-[#1A2540]/50 rounded-lg p-4 border border-gray-800/50">
              <p className="text-2xl font-bold text-[#F5A623]">99.9%</p>
              <p className="text-gray-500 text-sm">Uptime</p>
            </div>
            <div className="bg-[#1A2540]/50 rounded-lg p-4 border border-gray-800/50">
              <p className="text-2xl font-bold text-green-400">24/7</p>
              <p className="text-gray-500 text-sm">Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Register Form */}
      <div className="w-full lg:w-1/2 flex flex-col">
        {/* Header */}
        <header className="p-4 sm:p-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to home</span>
          </Link>
        </header>

        {/* Form Container */}
        <main className="flex-1 flex items-center justify-center px-4 py-8">
          <div className="w-full max-w-md">
            {/* Mobile Logo */}
            <Link href="/" className="lg:hidden flex items-center justify-center gap-2 mb-8">
              <span className="text-2xl font-bold text-white tracking-tight">
                <span className="text-[#F5A623]">Exius</span>Cart
              </span>
            </Link>

            {/* Card */}
            <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-6 sm:p-8">
              <h1 className="text-xl sm:text-2xl font-bold text-white mb-2">Create Your Account</h1>
              <p className="text-gray-400 mb-6 text-sm sm:text-base">
                Start your 14-day free trial today
              </p>

              {/* Trial Badge */}
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 mb-6 flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                <p className="text-green-400 text-sm">
                  No credit card required for trial
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label htmlFor="shopName" className="block text-sm text-gray-400 mb-2">
                    Shop Name
                  </label>
                  <input
                    id="shopName"
                    type="text"
                    {...register('shopName')}
                    className="w-full px-4 py-3 bg-[#0B1121] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#F5A623] focus:outline-none transition text-sm sm:text-base"
                    placeholder="e.g., Al Bareek Mobiles"
                  />
                  {errors.shopName && (
                    <p className="text-red-400 text-sm mt-1">{errors.shopName.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="ownerName" className="block text-sm text-gray-400 mb-2">
                    Your Name
                  </label>
                  <input
                    id="ownerName"
                    type="text"
                    {...register('ownerName')}
                    className="w-full px-4 py-3 bg-[#0B1121] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#F5A623] focus:outline-none transition text-sm sm:text-base"
                    placeholder="Your full name"
                  />
                  {errors.ownerName && (
                    <p className="text-red-400 text-sm mt-1">{errors.ownerName.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register('email')}
                      className="w-full px-4 py-3 bg-[#0B1121] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#F5A623] focus:outline-none transition text-sm sm:text-base"
                      placeholder="you@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm text-gray-400 mb-2">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      {...register('phone')}
                      className="w-full px-4 py-3 bg-[#0B1121] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#F5A623] focus:outline-none transition text-sm sm:text-base"
                      placeholder="+971 50 123 4567"
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm text-gray-400 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      {...register('password')}
                      className="w-full px-4 py-3 bg-[#0B1121] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#F5A623] focus:outline-none transition pr-12 text-sm sm:text-base"
                      placeholder="Min 8 characters"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition"
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-red-400 text-sm mt-1">{errors.password.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm text-gray-400 mb-2">
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    type="password"
                    {...register('confirmPassword')}
                    className="w-full px-4 py-3 bg-[#0B1121] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#F5A623] focus:outline-none transition text-sm sm:text-base"
                    placeholder="Confirm your password"
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-400 text-sm mt-1">{errors.confirmPassword.message}</p>
                  )}
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    className="w-4 h-4 mt-0.5 rounded border-gray-600 bg-[#0B1121] text-[#F5A623] focus:ring-[#F5A623] focus:ring-offset-0"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-400">
                    I agree to the{' '}
                    <Link href="/terms" className="text-[#F5A623] hover:text-[#FFB84D] transition">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link href="/privacy" className="text-[#F5A623] hover:text-[#FFB84D] transition">
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#F5A623] hover:bg-[#E09612] text-black font-semibold py-3 sm:py-4 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-6"
                >
                  {isLoading && <Loader2 className="h-5 w-5 animate-spin" />}
                  Create Account
                </button>
              </form>

              <p className="text-center mt-6 text-gray-400 text-sm sm:text-base">
                Already have an account?{' '}
                <Link href="/login" className="text-[#F5A623] font-semibold hover:text-[#FFB84D] transition">
                  Sign in
                </Link>
              </p>
            </div>

            {/* Trust Badges - Mobile Only */}
            <div className="lg:hidden mt-6 flex justify-center gap-6 text-center">
              <div>
                <p className="text-lg font-bold text-white">5,000+</p>
                <p className="text-gray-500 text-xs">Stores</p>
              </div>
              <div>
                <p className="text-lg font-bold text-[#F5A623]">99.9%</p>
                <p className="text-gray-500 text-xs">Uptime</p>
              </div>
              <div>
                <p className="text-lg font-bold text-green-400">24/7</p>
                <p className="text-gray-500 text-xs">Support</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
