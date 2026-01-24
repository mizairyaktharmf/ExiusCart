'use client';

import { useState } from 'react';
import {
  Search,
  Plus,
  Minus,
  Trash2,
  X,
  CreditCard,
  Banknote,
  Percent,
  Receipt,
  Printer,
  MessageCircle,
  Check,
  ShoppingCart,
  Package,
  User,
  Download,
} from 'lucide-react';
import { generateInvoicePDF, generateThermalReceipt } from '@/lib/invoice-generator';

// Mock products - will come from API
const mockProducts = [
  { id: '1', name: 'iPhone 15 Pro Max', price: 4299, stock: 5, category: 'Smartphones' },
  { id: '2', name: 'Samsung Galaxy S24 Ultra', price: 3999, stock: 8, category: 'Smartphones' },
  { id: '3', name: 'AirPods Pro (2nd Gen)', price: 899, stock: 3, category: 'Accessories' },
  { id: '4', name: 'USB-C Fast Charger 65W', price: 129, stock: 25, category: 'Accessories' },
  { id: '5', name: 'iPhone 14 Pro', price: 3599, stock: 2, category: 'Smartphones' },
  { id: '6', name: 'Samsung Galaxy Buds FE', price: 299, stock: 15, category: 'Accessories' },
  { id: '7', name: 'iPad Pro 12.9"', price: 4499, stock: 4, category: 'Tablets' },
  { id: '8', name: 'Apple Watch Series 9', price: 1599, stock: 7, category: 'Wearables' },
  { id: '9', name: 'MacBook Air M3', price: 4999, stock: 3, category: 'Laptops' },
  { id: '10', name: 'iPhone Case - Clear', price: 79, stock: 50, category: 'Accessories' },
  { id: '11', name: 'Screen Protector', price: 49, stock: 100, category: 'Accessories' },
  { id: '12', name: 'Lightning Cable 2m', price: 89, stock: 30, category: 'Accessories' },
];

const categories = ['All', 'Smartphones', 'Accessories', 'Tablets', 'Wearables', 'Laptops'];

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

// Shop VAT settings - will come from context/API in production
const shopVatSettings = {
  vatEnabled: true,
  vatRate: 5, // 5% UAE VAT
  pricesIncludeVat: true, // Most UAE shops set prices with VAT already included
  showVatBreakdown: true,
};

export default function POSPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [discount, setDiscount] = useState(0);
  const [discountType, setDiscountType] = useState<'percent' | 'fixed'>('percent');
  const [showCheckout, setShowCheckout] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'cash' | 'card' | 'tamara' | 'tabby'>('cash');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [orderNumber, setOrderNumber] = useState('');

  const filteredProducts = mockProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (product: typeof mockProducts[0]) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { id: product.id, name: product.name, price: product.price, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
    setDiscount(0);
    setCustomerName('');
    setCustomerPhone('');
  };

  // Calculate totals based on VAT settings
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = discountType === 'percent' ? (cartTotal * discount) / 100 : discount;
  const afterDiscount = cartTotal - discountAmount;

  // VAT calculation depends on whether prices include VAT or not
  let subtotal: number;
  let vatAmount: number;
  let total: number;

  if (!shopVatSettings.vatEnabled || shopVatSettings.vatRate === 0) {
    // No VAT
    subtotal = afterDiscount;
    vatAmount = 0;
    total = afterDiscount;
  } else if (shopVatSettings.pricesIncludeVat) {
    // Prices INCLUDE VAT (most common in UAE retail)
    // Price shown = Final price (VAT already inside)
    // We need to extract VAT from the total for display purposes
    // Formula: VAT = Total - (Total / 1.05)
    total = afterDiscount; // Customer pays this amount (no extra VAT added)
    vatAmount = total - (total / (1 + shopVatSettings.vatRate / 100));
    subtotal = total - vatAmount; // Net amount before VAT
  } else {
    // Prices EXCLUDE VAT (VAT added on top)
    subtotal = afterDiscount;
    vatAmount = subtotal * (shopVatSettings.vatRate / 100);
    total = subtotal + vatAmount;
  }

  const handleCheckout = () => {
    if (cart.length === 0) return;
    setShowCheckout(true);
  };

  const handlePayment = () => {
    // Generate order number
    const newOrderNumber = `ORD-${Date.now().toString().slice(-6)}`;
    setOrderNumber(newOrderNumber);

    // Process payment - API call
    console.log('Processing payment:', { cart, total, paymentMethod, customerName, customerPhone, orderNumber: newOrderNumber });
    setShowCheckout(false);
    setShowReceipt(true);
  };

  // Shop data - will come from API/context
  const shopData = {
    name: 'Al Bareek Mobiles',
    address: 'Shop 12, Al Fahidi Street, Bur Dubai, Dubai, UAE',
    phone: '+971 4 123 4567',
    email: 'contact@albareek.ae',
    vatNumber: '100123456789',
    tradeLicense: 'TL-2024-123456',
  };

  const getInvoiceData = () => ({
    orderNumber,
    date: new Date(),
    items: cart.map((item) => ({
      name: item.name,
      quantity: item.quantity,
      price: item.price,
    })),
    subtotal,
    discount: discountAmount,
    vat: vatAmount,
    total,
    paymentMethod,
    customer: customerName || customerPhone ? {
      name: customerName || undefined,
      phone: customerPhone || undefined,
    } : undefined,
    shop: shopData,
  });

  const handleDownloadInvoice = () => {
    generateInvoicePDF(getInvoiceData());
  };

  const handlePrintReceipt = () => {
    generateThermalReceipt(getInvoiceData());
  };

  const handleShareWhatsApp = () => {
    if (!customerPhone) {
      alert('No customer phone number provided');
      return;
    }

    const message = `
🧾 *Invoice from ${shopData.name}*

📋 Order #${orderNumber}
📅 ${new Date().toLocaleDateString('en-AE')}

*Items:*
${cart.map((item) => `• ${item.name} x${item.quantity} - ${(item.price * item.quantity).toFixed(2)} AED`).join('\n')}

💰 Subtotal: ${subtotal.toFixed(2)} AED
${discountAmount > 0 ? `🏷️ Discount: -${discountAmount.toFixed(2)} AED\n` : ''}📊 VAT (5%): ${vatAmount.toFixed(2)} AED
━━━━━━━━━━━━━━━
*Total: ${total.toFixed(2)} AED*
━━━━━━━━━━━━━━━

Paid via: ${paymentMethod === 'tamara' ? 'Tamara' : paymentMethod === 'tabby' ? 'Tabby' : paymentMethod.charAt(0).toUpperCase() + paymentMethod.slice(1)}

Thank you for shopping with us! 🙏
    `.trim();

    const whatsappUrl = `https://wa.me/${customerPhone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleNewSale = () => {
    clearCart();
    setOrderNumber('');
    setShowReceipt(false);
  };

  return (
    <div className="h-[calc(100vh-8rem)] lg:h-[calc(100vh-5rem)] flex flex-col lg:flex-row gap-4">
      {/* Products Section */}
      <div className="flex-1 flex flex-col min-h-0">
        {/* Search & Filter */}
        <div className="bg-card rounded-xl border border-border p-3 mb-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground placeholder:text-muted-foreground text-base"
              />
            </div>
          </div>
          {/* Category Pills */}
          <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition ${
                  selectedCategory === cat
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1 overflow-y-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {filteredProducts.map((product) => (
              <button
                key={product.id}
                type="button"
                onClick={() => addToCart(product)}
                disabled={product.stock === 0}
                className={`bg-card border border-border rounded-xl p-3 text-left hover:border-primary hover:shadow-md transition ${
                  product.stock === 0 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <div className="w-full aspect-square bg-muted rounded-lg flex items-center justify-center mb-2">
                  <Package className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="font-medium text-foreground text-sm line-clamp-2 mb-1">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-bold">{product.price} AED</span>
                  <span className={`text-xs px-1.5 py-0.5 rounded ${
                    product.stock === 0
                      ? 'bg-red-500/10 text-red-600 dark:text-red-400'
                      : product.stock <= 5
                      ? 'bg-orange-500/10 text-orange-600 dark:text-orange-400'
                      : 'bg-green-500/10 text-green-600 dark:text-green-400'
                  }`}>
                    {product.stock}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Cart Section - Fixed on Desktop, Slide-up on Mobile */}
      <div className="lg:w-96 bg-card border border-border rounded-xl flex flex-col">
        {/* Cart Header */}
        <div className="p-4 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-primary" />
            <h2 className="font-semibold text-foreground">Cart</h2>
            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
              {cart.reduce((sum, item) => sum + item.quantity, 0)} items
            </span>
          </div>
          {cart.length > 0 && (
            <button
              type="button"
              onClick={clearCart}
              className="text-sm text-muted-foreground hover:text-destructive transition"
            >
              Clear
            </button>
          )}
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[200px]">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-muted-foreground">
              <ShoppingCart className="w-12 h-12 mb-2 opacity-50" />
              <p className="text-sm">Cart is empty</p>
              <p className="text-xs">Tap products to add</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex items-center gap-3 bg-muted/50 rounded-lg p-3">
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-foreground text-sm truncate">{item.name}</h4>
                  <p className="text-sm text-primary font-semibold">{item.price} AED</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, -1)}
                    aria-label={`Decrease quantity of ${item.name}`}
                    className="w-8 h-8 flex items-center justify-center bg-muted rounded-lg text-foreground hover:bg-muted/80 transition"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center font-medium text-foreground">{item.quantity}</span>
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, 1)}
                    aria-label={`Increase quantity of ${item.name}`}
                    className="w-8 h-8 flex items-center justify-center bg-muted rounded-lg text-foreground hover:bg-muted/80 transition"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    aria-label={`Remove ${item.name} from cart`}
                    className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg transition"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Discount */}
        {cart.length > 0 && (
          <div className="px-4 pb-3">
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <Percent className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="number"
                  id="discount-amount"
                  value={discount || ''}
                  onChange={(e) => setDiscount(Number(e.target.value))}
                  placeholder="Discount"
                  aria-label="Discount amount"
                  className="w-full pl-9 pr-3 py-2 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground text-sm"
                />
              </div>
              <select
                id="discount-type"
                value={discountType}
                onChange={(e) => setDiscountType(e.target.value as 'percent' | 'fixed')}
                aria-label="Discount type"
                className="px-3 py-2 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground text-sm"
              >
                <option value="percent">%</option>
                <option value="fixed">AED</option>
              </select>
            </div>
          </div>
        )}

        {/* Cart Summary */}
        <div className="p-4 border-t border-border space-y-2">
          {shopVatSettings.pricesIncludeVat ? (
            // Prices INCLUDE VAT - show total first, then breakdown
            <>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Items Total</span>
                <span className="text-foreground">{cartTotal.toFixed(2)} AED</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Discount</span>
                  <span className="text-green-600 dark:text-green-400">-{discountAmount.toFixed(2)} AED</span>
                </div>
              )}
              {shopVatSettings.showVatBreakdown && shopVatSettings.vatEnabled && (
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span className="text-xs">(incl. VAT {shopVatSettings.vatRate}%)</span>
                  <span className="text-xs">{vatAmount.toFixed(2)} AED</span>
                </div>
              )}
              <div className="flex justify-between text-lg font-bold pt-2 border-t border-border">
                <span className="text-foreground">Total</span>
                <span className="text-primary">{total.toFixed(2)} AED</span>
              </div>
            </>
          ) : (
            // Prices EXCLUDE VAT - show subtotal, then add VAT
            <>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="text-foreground">{cartTotal.toFixed(2)} AED</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Discount</span>
                  <span className="text-green-600 dark:text-green-400">-{discountAmount.toFixed(2)} AED</span>
                </div>
              )}
              {shopVatSettings.vatEnabled && shopVatSettings.vatRate > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">VAT ({shopVatSettings.vatRate}%)</span>
                  <span className="text-foreground">+{vatAmount.toFixed(2)} AED</span>
                </div>
              )}
              <div className="flex justify-between text-lg font-bold pt-2 border-t border-border">
                <span className="text-foreground">Total</span>
                <span className="text-primary">{total.toFixed(2)} AED</span>
              </div>
            </>
          )}
        </div>

        {/* Checkout Button */}
        <div className="p-4 pt-0">
          <button
            type="button"
            onClick={handleCheckout}
            disabled={cart.length === 0}
            className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <Receipt className="w-5 h-5" />
            Checkout
          </button>
        </div>
      </div>

      {/* Checkout Modal */}
      {showCheckout && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-xl border border-border w-full max-w-md max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border sticky top-0 bg-card">
              <h2 className="text-lg font-semibold text-foreground">Checkout</h2>
              <button
                type="button"
                onClick={() => setShowCheckout(false)}
                aria-label="Close checkout"
                className="p-2 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 space-y-6">
              {/* Customer Info (Optional) */}
              <div>
                <h3 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Customer (Optional)
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    id="customer-name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Name"
                    aria-label="Customer name"
                    className="px-3 py-2.5 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground text-sm"
                  />
                  <input
                    type="tel"
                    id="customer-phone"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="Phone"
                    aria-label="Customer phone"
                    className="px-3 py-2.5 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground text-sm"
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <h3 className="text-sm font-medium text-foreground mb-3">Payment Method</h3>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cash')}
                    className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition ${
                      paymentMethod === 'cash'
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <Banknote className={`w-8 h-8 ${paymentMethod === 'cash' ? 'text-primary' : 'text-muted-foreground'}`} />
                    <span className={`text-sm font-medium ${paymentMethod === 'cash' ? 'text-primary' : 'text-foreground'}`}>Cash</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition ${
                      paymentMethod === 'card'
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <CreditCard className={`w-8 h-8 ${paymentMethod === 'card' ? 'text-primary' : 'text-muted-foreground'}`} />
                    <span className={`text-sm font-medium ${paymentMethod === 'card' ? 'text-primary' : 'text-foreground'}`}>Card</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('tamara')}
                    className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition ${
                      paymentMethod === 'tamara'
                        ? 'border-[#3BFFC1] bg-[#3BFFC1]/10'
                        : 'border-border hover:border-[#3BFFC1]/50'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${
                      paymentMethod === 'tamara' ? 'bg-[#3BFFC1] text-black' : 'bg-[#3BFFC1]/20 text-[#3BFFC1]'
                    }`}>
                      T
                    </div>
                    <span className={`text-sm font-medium ${paymentMethod === 'tamara' ? 'text-[#3BFFC1]' : 'text-foreground'}`}>Tamara</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('tabby')}
                    className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition ${
                      paymentMethod === 'tabby'
                        ? 'border-[#3BFAC5] bg-[#3BFAC5]/10'
                        : 'border-border hover:border-[#3BFAC5]/50'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${
                      paymentMethod === 'tabby' ? 'bg-[#3BFAC5] text-black' : 'bg-[#3BFAC5]/20 text-[#3BFAC5]'
                    }`}>
                      T
                    </div>
                    <span className={`text-sm font-medium ${paymentMethod === 'tabby' ? 'text-[#3BFAC5]' : 'text-foreground'}`}>Tabby</span>
                  </button>
                </div>
              </div>

              {/* Order Summary */}
              <div className="bg-muted/50 rounded-xl p-4">
                <h3 className="text-sm font-medium text-foreground mb-3">Order Summary</h3>
                <div className="space-y-2 text-sm">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <span className="text-muted-foreground">{item.name} x{item.quantity}</span>
                      <span className="text-foreground">{(item.price * item.quantity).toFixed(2)} AED</span>
                    </div>
                  ))}
                  <div className="border-t border-border pt-2 mt-2">
                    {shopVatSettings.pricesIncludeVat ? (
                      // Prices INCLUDE VAT
                      <>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Items Total</span>
                          <span className="text-foreground">{cartTotal.toFixed(2)} AED</span>
                        </div>
                        {discountAmount > 0 && (
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Discount</span>
                            <span className="text-green-600 dark:text-green-400">-{discountAmount.toFixed(2)} AED</span>
                          </div>
                        )}
                        {shopVatSettings.showVatBreakdown && shopVatSettings.vatEnabled && (
                          <div className="flex justify-between text-muted-foreground">
                            <span className="text-xs">(incl. VAT {shopVatSettings.vatRate}%)</span>
                            <span className="text-xs">{vatAmount.toFixed(2)} AED</span>
                          </div>
                        )}
                      </>
                    ) : (
                      // Prices EXCLUDE VAT
                      <>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Subtotal</span>
                          <span className="text-foreground">{cartTotal.toFixed(2)} AED</span>
                        </div>
                        {discountAmount > 0 && (
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Discount</span>
                            <span className="text-green-600 dark:text-green-400">-{discountAmount.toFixed(2)} AED</span>
                          </div>
                        )}
                        {shopVatSettings.vatEnabled && shopVatSettings.vatRate > 0 && (
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">VAT ({shopVatSettings.vatRate}%)</span>
                            <span className="text-foreground">+{vatAmount.toFixed(2)} AED</span>
                          </div>
                        )}
                      </>
                    )}
                    <div className="flex justify-between font-bold text-base pt-2 border-t border-border mt-2">
                      <span className="text-foreground">Total</span>
                      <span className="text-primary">{total.toFixed(2)} AED</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Confirm Button */}
              <button
                type="button"
                onClick={handlePayment}
                className="w-full py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold text-lg transition flex items-center justify-center gap-2"
              >
                <Check className="w-5 h-5" />
                Confirm Payment - {total.toFixed(2)} AED
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Receipt Modal */}
      {showReceipt && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-xl border border-border w-full max-w-sm">
            {/* Receipt Header */}
            <div className="p-6 text-center border-b border-border">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-xl font-bold text-foreground">Payment Successful!</h2>
              <p className="text-muted-foreground text-sm mt-1">Order #{orderNumber}</p>
            </div>

            {/* Receipt Details */}
            <div className="p-6 space-y-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">{total.toFixed(2)} AED</p>
                <p className="text-sm text-muted-foreground">
                  Paid via {paymentMethod === 'tamara' ? 'Tamara' : paymentMethod === 'tabby' ? 'Tabby' : paymentMethod.charAt(0).toUpperCase() + paymentMethod.slice(1)}
                </p>
              </div>

              {/* Download A4 Invoice - Primary Action */}
              <button
                type="button"
                onClick={handleDownloadInvoice}
                className="w-full py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download A4 Invoice (PDF)
              </button>

              {/* Other Actions */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={handlePrintReceipt}
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-muted rounded-lg text-foreground hover:bg-muted/80 transition"
                >
                  <Printer className="w-5 h-5" />
                  <span className="text-sm font-medium">Thermal</span>
                </button>
                <button
                  type="button"
                  onClick={handleShareWhatsApp}
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-green-500/10 rounded-lg text-green-600 dark:text-green-400 hover:bg-green-500/20 transition"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">WhatsApp</span>
                </button>
              </div>

              <button
                type="button"
                onClick={handleNewSale}
                className="w-full py-4 bg-muted text-foreground rounded-xl font-semibold hover:bg-muted/80 transition"
              >
                New Sale
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
