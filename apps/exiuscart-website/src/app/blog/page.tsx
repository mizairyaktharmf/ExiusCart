import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { ArrowRight, Clock, User, Tag, Search } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Blog | ExiusCart - Business Tips, POS Guides & UAE Retail Insights',
  description: 'Learn how to grow your UAE business with ExiusCart. Read our latest articles on POS systems, inventory management, WhatsApp commerce, and small business tips.',
  openGraph: {
    title: 'Blog | ExiusCart',
    description: 'Business tips, POS guides & UAE retail insights for small business owners.',
    url: 'https://exiuscart.com/blog',
  },
};

// Placeholder blog posts - will be replaced with data from admin dashboard
const featuredPost = {
  slug: 'complete-guide-pos-system-uae-small-business',
  title: 'The Complete Guide to Choosing a POS System for Your UAE Small Business',
  excerpt: 'Discover everything you need to know about selecting the right point-of-sale system for your retail shop in the UAE. From VAT compliance to WhatsApp integration.',
  category: 'Guides',
  author: 'ExiusCart Team',
  date: 'Jan 28, 2026',
  readTime: '8 min read',
  image: '/images/blog/pos-guide.jpg',
};

const blogPosts = [
  {
    slug: '5-ways-whatsapp-orders-boost-sales',
    title: '5 Ways WhatsApp Orders Can Boost Your Retail Sales by 40%',
    excerpt: 'Learn how UAE shop owners are using WhatsApp to receive orders and increase their revenue significantly.',
    category: 'WhatsApp Commerce',
    author: 'ExiusCart Team',
    date: 'Jan 25, 2026',
    readTime: '5 min read',
    image: '/images/blog/whatsapp-orders.jpg',
  },
  {
    slug: 'inventory-management-tips-small-shops',
    title: 'Inventory Management Tips for Small Shops: Avoid Stockouts & Overstocking',
    excerpt: 'Master the art of inventory control with these practical tips designed for UAE small business owners.',
    category: 'Inventory',
    author: 'ExiusCart Team',
    date: 'Jan 22, 2026',
    readTime: '6 min read',
    image: '/images/blog/inventory-tips.jpg',
  },
  {
    slug: 'vat-invoicing-guide-uae-businesses',
    title: 'VAT Invoicing Made Simple: A Guide for UAE Business Owners',
    excerpt: 'Everything you need to know about creating VAT-compliant invoices for your UAE business.',
    category: 'Finance',
    author: 'ExiusCart Team',
    date: 'Jan 18, 2026',
    readTime: '7 min read',
    image: '/images/blog/vat-guide.jpg',
  },
  {
    slug: 'mobile-pos-vs-traditional-cash-register',
    title: 'Mobile POS vs Traditional Cash Register: Which is Right for You?',
    excerpt: 'Compare the pros and cons of modern mobile POS systems against traditional cash registers.',
    category: 'Technology',
    author: 'ExiusCart Team',
    date: 'Jan 15, 2026',
    readTime: '5 min read',
    image: '/images/blog/mobile-pos.jpg',
  },
  {
    slug: 'customer-loyalty-programs-small-retail',
    title: 'Building Customer Loyalty Programs for Small Retail Shops',
    excerpt: 'Discover effective loyalty strategies that don\'t require a big budget but deliver big results.',
    category: 'Marketing',
    author: 'ExiusCart Team',
    date: 'Jan 12, 2026',
    readTime: '6 min read',
    image: '/images/blog/loyalty-program.jpg',
  },
  {
    slug: 'digital-transformation-uae-retail-2026',
    title: 'Digital Transformation in UAE Retail: Trends for 2026',
    excerpt: 'Stay ahead of the curve with these emerging retail technology trends shaping UAE businesses.',
    category: 'Industry Trends',
    author: 'ExiusCart Team',
    date: 'Jan 8, 2026',
    readTime: '8 min read',
    image: '/images/blog/digital-transformation.jpg',
  },
];

const categories = [
  { name: 'All Posts', count: 15 },
  { name: 'Guides', count: 5 },
  { name: 'WhatsApp Commerce', count: 3 },
  { name: 'Inventory', count: 2 },
  { name: 'Finance', count: 2 },
  { name: 'Marketing', count: 2 },
  { name: 'Industry Trends', count: 1 },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0B1121]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ExiusCart <span className="text-[#F5A623]">Blog</span>
            </h1>
            <p className="text-lg text-gray-400 mb-8">
              Tips, guides, and insights to help you grow your UAE business.
              Learn about POS systems, inventory management, and retail success strategies.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-4 bg-[#151F32] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-[#F5A623] focus:outline-none transition"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-4 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={category.name}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  index === 0
                    ? 'bg-[#F5A623] text-black'
                    : 'bg-[#151F32] text-gray-400 hover:text-white hover:bg-[#1A2540]'
                }`}
              >
                {category.name}
                <span className="ml-2 text-xs opacity-70">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <Link href={`/blog/${featuredPost.slug}`} className="group block">
            <div className="bg-[#151F32] rounded-2xl border border-gray-800 overflow-hidden hover:border-[#F5A623]/50 transition">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 md:h-full min-h-[300px] bg-gradient-to-br from-[#F5A623]/20 to-[#0B1121] flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 bg-[#F5A623]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Tag className="w-10 h-10 text-[#F5A623]" />
                    </div>
                    <p className="text-gray-500 text-sm">Featured Article</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-[#F5A623]/20 text-[#F5A623] text-xs font-semibold px-3 py-1 rounded-full">
                      Featured
                    </span>
                    <span className="text-[#F5A623] text-sm font-medium">
                      {featuredPost.category}
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#F5A623] transition">
                    {featuredPost.title}
                  </h2>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </span>
                    <span>{featuredPost.date}</span>
                  </div>

                  <div className="flex items-center gap-2 text-[#F5A623] font-medium group-hover:gap-3 transition-all">
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">Latest Articles</h2>
            <select className="bg-[#151F32] border border-gray-700 rounded-lg px-4 py-2 text-gray-400 text-sm focus:border-[#F5A623] focus:outline-none">
              <option>Most Recent</option>
              <option>Most Popular</option>
              <option>Oldest First</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center gap-2 bg-[#151F32] hover:bg-[#1A2540] text-white font-medium px-8 py-3 rounded-lg transition border border-gray-700">
              Load More Articles
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="px-4 py-16 bg-[#0D1526]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get Business Tips in Your Inbox
          </h2>
          <p className="text-gray-400 mb-8">
            Join 1,000+ UAE business owners receiving weekly tips on growing their retail business.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-4 bg-[#151F32] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#F5A623] focus:outline-none"
            />
            <button className="bg-[#F5A623] hover:bg-[#E09612] text-black font-semibold px-8 py-4 rounded-lg transition whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="text-gray-600 text-xs mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function BlogCard({ post }: { post: typeof blogPosts[0] }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="bg-[#151F32] rounded-xl border border-gray-800 overflow-hidden hover:border-[#F5A623]/50 transition h-full flex flex-col">
        {/* Image Placeholder */}
        <div className="h-48 bg-gradient-to-br from-[#1A2540] to-[#0B1121] flex items-center justify-center">
          <div className="w-12 h-12 bg-[#F5A623]/20 rounded-xl flex items-center justify-center">
            <Tag className="w-6 h-6 text-[#F5A623]" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[#F5A623] text-xs font-medium">
              {post.category}
            </span>
            <span className="text-gray-600 text-xs">•</span>
            <span className="text-gray-500 text-xs">{post.readTime}</span>
          </div>

          <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-[#F5A623] transition line-clamp-2">
            {post.title}
          </h3>

          <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-1">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">{post.date}</span>
            <span className="flex items-center gap-1 text-[#F5A623] font-medium group-hover:gap-2 transition-all">
              Read
              <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
