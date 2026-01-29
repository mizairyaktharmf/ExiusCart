'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Eye, EyeOff, Loader2, ArrowLeft, Check, ShieldCheck, Zap, BarChart3 } from 'lucide-react';

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    setIsLoading(true);
    try {
      // TODO: Implement login API call
      console.log('Login data:', data);
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1121] flex">
      {/* Left Side - Branding & Image */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#0D1526] flex-col relative overflow-hidden">
        {/* Content */}
        <div className="flex-1 flex flex-col justify-center px-12 xl:px-16 pt-8">
          {/* Logo */}
          <Link href="/" className="mb-8">
            <span className="text-3xl font-bold text-white tracking-tight">
              <span className="text-[#F5A623]">Exius</span>Cart
            </span>
          </Link>

          <h2 className="text-3xl xl:text-4xl font-bold text-white mb-4 leading-tight">
            Manage your business
            <span className="text-[#F5A623]"> smarter</span>
          </h2>
          <p className="text-gray-400 mb-8 text-lg leading-relaxed">
            Access your dashboard to track sales, manage inventory, and grow your business.
          </p>

          {/* Features List */}
          <div className="space-y-4 mb-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#F5A623]/10 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-[#F5A623]" />
              </div>
              <div>
                <p className="text-white font-medium">Real-time Analytics</p>
                <p className="text-gray-500 text-sm">Track sales and performance instantly</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#F5A623]/10 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-[#F5A623]" />
              </div>
              <div>
                <p className="text-white font-medium">Fast & Easy POS</p>
                <p className="text-gray-500 text-sm">Process sales in seconds</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#F5A623]/10 rounded-lg flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-[#F5A623]" />
              </div>
              <div>
                <p className="text-white font-medium">Secure & Reliable</p>
                <p className="text-gray-500 text-sm">Your data is always protected</p>
              </div>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="relative">
            <div className="bg-[#151F32] rounded-xl border border-gray-800 shadow-2xl overflow-hidden">
              <div className="bg-[#1A2540] px-4 py-2 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27CA40]"></div>
              </div>
              <Image
                src="/images/dashboard-preview.png"
                alt="ExiusCart Dashboard"
                width={500}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="px-12 xl:px-16 py-8 border-t border-gray-800">
          <div className="flex items-center gap-8">
            <div>
              <p className="text-2xl font-bold text-[#F5A623]">50+</p>
              <p className="text-gray-500 text-sm">Active Shops</p>
            </div>
            <div className="w-px h-10 bg-gray-800"></div>
            <div>
              <p className="text-2xl font-bold text-[#F5A623]">10K+</p>
              <p className="text-gray-500 text-sm">Invoices Created</p>
            </div>
            <div className="w-px h-10 bg-gray-800"></div>
            <div>
              <p className="text-2xl font-bold text-[#F5A623]">99%</p>
              <p className="text-gray-500 text-sm">Uptime</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
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
        <main className="flex-1 flex items-center justify-center px-4 sm:px-8 py-8">
          <div className="w-full max-w-md">
            {/* Logo - Mobile Only */}
            <Link href="/" className="lg:hidden flex items-center justify-center gap-2 mb-8">
              <span className="text-2xl font-bold text-white tracking-tight">
                <span className="text-[#F5A623]">Exius</span>Cart
              </span>
            </Link>

            {/* Card */}
            <div className="bg-[#151F32] rounded-2xl border border-gray-800 p-6 sm:p-8">
              <h1 className="text-xl sm:text-2xl font-bold text-white mb-2">Welcome Back</h1>
              <p className="text-gray-400 mb-8 text-sm sm:text-base">
                Sign in to your account to continue
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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
                  <label htmlFor="password" className="block text-sm text-gray-400 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      {...register('password')}
                      className="w-full px-4 py-3 bg-[#0B1121] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#F5A623] focus:outline-none transition pr-12 text-sm sm:text-base"
                      placeholder="Enter your password"
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

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-600 bg-[#0B1121] text-[#F5A623] focus:ring-[#F5A623] focus:ring-offset-0"
                    />
                    <span className="text-sm text-gray-400">Remember me</span>
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-sm text-[#F5A623] hover:text-[#FFB84D] transition"
                  >
                    Forgot password?
                  </Link>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#F5A623] hover:bg-[#E09612] text-black font-semibold py-3 sm:py-4 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading && <Loader2 className="h-5 w-5 animate-spin" />}
                  Sign In
                </button>
              </form>

              <p className="text-center mt-8 text-gray-400 text-sm sm:text-base">
                Don&apos;t have an account?{' '}
                <Link href="/register" className="text-[#F5A623] font-semibold hover:text-[#FFB84D] transition">
                  Create one
                </Link>
              </p>
            </div>

            {/* Trust Badge */}
            <div className="mt-6 flex items-center justify-center gap-2 text-gray-500 text-sm">
              <ShieldCheck className="w-4 h-4" />
              <span>Secured with SSL encryption</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
