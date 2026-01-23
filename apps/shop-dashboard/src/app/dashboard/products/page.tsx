'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Plus,
  Search,
  Filter,
  MoreVertical,
  Edit,
  Trash2,
  Package,
  Eye,
  ChevronDown,
  X,
  ImageIcon,
} from 'lucide-react';

// Mock data - will come from API
const mockProducts = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    sku: 'IPH15PM-256-BLK',
    category: 'Smartphones',
    costPrice: 3800,
    sellingPrice: 4299,
    stock: 5,
    lowStockAlert: 3,
    vatPercent: 5,
    image: null,
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24 Ultra',
    sku: 'SAM-S24U-256-GRN',
    category: 'Smartphones',
    costPrice: 3500,
    sellingPrice: 3999,
    stock: 8,
    lowStockAlert: 5,
    vatPercent: 5,
    image: null,
  },
  {
    id: '3',
    name: 'AirPods Pro (2nd Gen)',
    sku: 'APP-2GEN-WHT',
    category: 'Accessories',
    costPrice: 700,
    sellingPrice: 899,
    stock: 3,
    lowStockAlert: 10,
    vatPercent: 5,
    image: null,
  },
  {
    id: '4',
    name: 'USB-C Fast Charger 65W',
    sku: 'CHG-65W-USB-C',
    category: 'Accessories',
    costPrice: 80,
    sellingPrice: 129,
    stock: 25,
    lowStockAlert: 20,
    vatPercent: 5,
    image: null,
  },
  {
    id: '5',
    name: 'iPhone 14 Pro',
    sku: 'IPH14P-128-PUR',
    category: 'Smartphones',
    costPrice: 3200,
    sellingPrice: 3599,
    stock: 2,
    lowStockAlert: 3,
    vatPercent: 5,
    image: null,
  },
];

const mockCategories = ['All', 'Smartphones', 'Accessories', 'Tablets', 'Laptops', 'Wearables'];

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<typeof mockProducts[0] | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null);

  const filteredProducts = mockProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleEdit = (product: typeof mockProducts[0]) => {
    setEditingProduct(product);
    setShowAddModal(true);
  };

  const handleDelete = (productId: string) => {
    // API call to delete
    console.log('Delete product:', productId);
    setShowDeleteConfirm(null);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Products</h1>
          <p className="text-muted-foreground text-sm">Manage your product catalog</p>
        </div>
        <button
          type="button"
          onClick={() => {
            setEditingProduct(null);
            setShowAddModal(true);
          }}
          className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-lg font-medium hover:bg-primary/90 transition"
        >
          <Plus className="w-5 h-5" />
          <span>Add Product</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-card rounded-xl border border-border p-4">
          <p className="text-muted-foreground text-xs mb-1">Total Products</p>
          <p className="text-2xl font-bold text-foreground">{mockProducts.length}</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <p className="text-muted-foreground text-xs mb-1">Categories</p>
          <p className="text-2xl font-bold text-foreground">{mockCategories.length - 1}</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <p className="text-muted-foreground text-xs mb-1">Low Stock</p>
          <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
            {mockProducts.filter(p => p.stock <= p.lowStockAlert).length}
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <p className="text-muted-foreground text-xs mb-1">Out of Stock</p>
          <p className="text-2xl font-bold text-red-600 dark:text-red-400">
            {mockProducts.filter(p => p.stock === 0).length}
          </p>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="bg-card rounded-xl border border-border p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search products by name or SKU..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground placeholder:text-muted-foreground"
            />
          </div>

          {/* Category Filter */}
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="appearance-none w-full sm:w-48 px-4 py-2.5 pr-10 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground"
            >
              {mockCategories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Products List */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground">Product</th>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground">SKU</th>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground">Category</th>
                <th className="text-right p-4 text-sm font-medium text-muted-foreground">Cost</th>
                <th className="text-right p-4 text-sm font-medium text-muted-foreground">Price</th>
                <th className="text-center p-4 text-sm font-medium text-muted-foreground">Stock</th>
                <th className="text-right p-4 text-sm font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-muted/30 transition">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                        {product.image ? (
                          <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-lg" />
                        ) : (
                          <Package className="w-6 h-6 text-muted-foreground" />
                        )}
                      </div>
                      <span className="font-medium text-foreground">{product.name}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="text-sm text-muted-foreground font-mono">{product.sku}</span>
                  </td>
                  <td className="p-4">
                    <span className="text-sm text-foreground">{product.category}</span>
                  </td>
                  <td className="p-4 text-right">
                    <span className="text-sm text-muted-foreground">{product.costPrice} AED</span>
                  </td>
                  <td className="p-4 text-right">
                    <span className="text-sm font-medium text-foreground">{product.sellingPrice} AED</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                      product.stock === 0
                        ? 'bg-red-500/10 text-red-600 dark:text-red-400'
                        : product.stock <= product.lowStockAlert
                        ? 'bg-orange-500/10 text-orange-600 dark:text-orange-400'
                        : 'bg-green-500/10 text-green-600 dark:text-green-400'
                    }`}>
                      {product.stock}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => handleEdit(product)}
                        className="p-2 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground transition"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowDeleteConfirm(product.id)}
                        className="p-2 hover:bg-destructive/10 rounded-lg text-muted-foreground hover:text-destructive transition"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden divide-y divide-border">
          {filteredProducts.map((product) => (
            <div key={product.id} className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                  {product.image ? (
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-lg" />
                  ) : (
                    <Package className="w-8 h-8 text-muted-foreground" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-foreground truncate">{product.name}</h3>
                  <p className="text-xs text-muted-foreground font-mono mt-0.5">{product.sku}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-sm font-semibold text-foreground">{product.sellingPrice} AED</span>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                      product.stock === 0
                        ? 'bg-red-500/10 text-red-600 dark:text-red-400'
                        : product.stock <= product.lowStockAlert
                        ? 'bg-orange-500/10 text-orange-600 dark:text-orange-400'
                        : 'bg-green-500/10 text-green-600 dark:text-green-400'
                    }`}>
                      {product.stock} in stock
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => handleEdit(product)}
                    className="p-2 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground transition"
                    title="Edit"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowDeleteConfirm(product.id)}
                    className="p-2 hover:bg-destructive/10 rounded-lg text-muted-foreground hover:text-destructive transition"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="p-12 text-center">
            <Package className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-medium text-foreground mb-1">No products found</h3>
            <p className="text-sm text-muted-foreground">Try adjusting your search or filters</p>
          </div>
        )}
      </div>

      {/* Add/Edit Product Modal */}
      {showAddModal && (
        <ProductModal
          product={editingProduct}
          categories={mockCategories.filter(c => c !== 'All')}
          onClose={() => {
            setShowAddModal(false);
            setEditingProduct(null);
          }}
          onSave={(data) => {
            console.log('Save product:', data);
            setShowAddModal(false);
            setEditingProduct(null);
          }}
        />
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-xl border border-border p-6 max-w-sm w-full">
            <h3 className="text-lg font-semibold text-foreground mb-2">Delete Product?</h3>
            <p className="text-sm text-muted-foreground mb-6">
              This action cannot be undone. The product will be permanently removed from your catalog.
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setShowDeleteConfirm(null)}
                className="flex-1 px-4 py-2 border border-border rounded-lg text-foreground hover:bg-muted transition"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => handleDelete(showDeleteConfirm)}
                className="flex-1 px-4 py-2 bg-destructive text-destructive-foreground rounded-lg hover:bg-destructive/90 transition"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ProductModal({
  product,
  categories,
  onClose,
  onSave,
}: {
  product: typeof mockProducts[0] | null;
  categories: string[];
  onClose: () => void;
  onSave: (data: any) => void;
}) {
  const [formData, setFormData] = useState({
    name: product?.name || '',
    sku: product?.sku || '',
    category: product?.category || categories[0],
    costPrice: product?.costPrice || 0,
    sellingPrice: product?.sellingPrice || 0,
    stock: product?.stock || 0,
    lowStockAlert: product?.lowStockAlert || 5,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-card rounded-xl border border-border w-full max-w-lg max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border sticky top-0 bg-card">
          <h2 className="text-lg font-semibold text-foreground">
            {product ? 'Edit Product' : 'Add Product'}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          {/* Image Upload */}
          <div>
            <label className="text-sm text-muted-foreground mb-1.5 block">Product Image</label>
            <div className="w-full h-32 bg-muted border-2 border-dashed border-border rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-primary transition">
              <ImageIcon className="w-8 h-8 text-muted-foreground mb-2" />
              <span className="text-sm text-muted-foreground">Click to upload image</span>
            </div>
          </div>

          {/* Name */}
          <div>
            <label className="text-sm text-muted-foreground mb-1.5 block">Product Name *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full px-3 py-2.5 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground"
              placeholder="e.g. iPhone 15 Pro Max"
            />
          </div>

          {/* SKU & Category */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">SKU / IMEI</label>
              <input
                type="text"
                value={formData.sku}
                onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
                className="w-full px-3 py-2.5 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground"
                placeholder="e.g. IPH15PM-256"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Category *</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                required
                className="w-full px-3 py-2.5 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Prices */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Cost Price (AED) *</label>
              <input
                type="number"
                value={formData.costPrice}
                onChange={(e) => setFormData({ ...formData, costPrice: Number(e.target.value) })}
                required
                min="0"
                className="w-full px-3 py-2.5 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Selling Price (AED) *</label>
              <input
                type="number"
                value={formData.sellingPrice}
                onChange={(e) => setFormData({ ...formData, sellingPrice: Number(e.target.value) })}
                required
                min="0"
                className="w-full px-3 py-2.5 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground"
              />
            </div>
          </div>

          {/* VAT Info Banner */}
          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
            <p className="text-sm font-medium text-green-700 dark:text-green-400">
              Price includes VAT (5%)
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Your shop is set to include VAT in prices. No extra VAT will be charged at checkout.
              <a href="/dashboard/settings" className="text-primary hover:underline ml-1">Change in Settings</a>
            </p>
          </div>

          {/* Stock */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Initial Stock</label>
              <input
                type="number"
                value={formData.stock}
                onChange={(e) => setFormData({ ...formData, stock: Number(e.target.value) })}
                min="0"
                className="w-full px-3 py-2.5 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Low Stock Alert</label>
              <input
                type="number"
                value={formData.lowStockAlert}
                onChange={(e) => setFormData({ ...formData, lowStockAlert: Number(e.target.value) })}
                min="0"
                className="w-full px-3 py-2.5 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground"
              />
            </div>
          </div>

          {/* Profit Preview */}
          {formData.costPrice > 0 && formData.sellingPrice > 0 && (
            <div className="bg-muted/50 rounded-lg p-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Profit Margin</span>
                <span className="font-medium text-green-600 dark:text-green-400">
                  {formData.sellingPrice - formData.costPrice} AED ({Math.round(((formData.sellingPrice - formData.costPrice) / formData.costPrice) * 100)}%)
                </span>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2.5 border border-border rounded-lg text-foreground hover:bg-muted transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium"
            >
              {product ? 'Update Product' : 'Add Product'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
