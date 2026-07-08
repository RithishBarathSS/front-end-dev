import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import FilterSidebar from './components/FilterSidebar';
import ProductGrid from './components/ProductGrid';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import { productsData } from './data/products';
import './components.css';

export default function App() {
  // Theme state (check system preferences initially)
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  // State Management
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortOption, setSortOption] = useState('featured');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Sync theme with HTML document element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Toggle Theme Handler
  const handleThemeToggle = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  // Add to Cart Handler (merges items with same options)
  const handleAddToCart = (productToAdd) => {
    setCart(prevCart => {
      // Find if item with same ID, size, and color already in cart
      const existingItemIndex = prevCart.findIndex(item => 
        item.id === productToAdd.id && 
        item.selectedSize === (productToAdd.selectedSize || '') && 
        item.selectedColor === (productToAdd.selectedColor || '')
      );

      if (existingItemIndex > -1) {
        const newCart = [...prevCart];
        newCart[existingItemIndex].quantity += 1;
        return newCart;
      } else {
        return [...prevCart, { 
          ...productToAdd, 
          selectedSize: productToAdd.selectedSize || '', 
          selectedColor: productToAdd.selectedColor || '', 
          quantity: 1 
        }];
      }
    });

    // Auto open cart for user feedback
    setIsCartOpen(true);
  };

  // Update Cart Item Quantity
  const handleUpdateQuantity = (id, size, color, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id, size, color);
      return;
    }
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === id && item.selectedSize === size && item.selectedColor === color
          ? { ...item, quantity: newQty }
          : item
      )
    );
  };

  // Remove Cart Item
  const handleRemoveItem = (id, size, color) => {
    setCart(prevCart => 
      prevCart.filter(item => !(item.id === id && item.selectedSize === size && item.selectedColor === color))
    );
  };

  // Clear Cart Handler
  const handleClearCart = () => {
    setCart([]);
  };

  // Wishlist / Favorite Handler
  const handleToggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Reset Filters Handler
  const handleResetFilters = () => {
    setSearchQuery('');
    setActiveCategory('all');
    setMinPrice('');
    setMaxPrice('');
    setSortOption('featured');
  };

  // --- Filtering Logic ---
  const filteredProducts = productsData.filter(product => {
    // 1. Category Filter
    if (activeCategory !== 'all' && product.category !== activeCategory) {
      return false;
    }

    // 2. Search Query Filter
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const nameMatch = product.name.toLowerCase().includes(q);
      const descMatch = product.description.toLowerCase().includes(q);
      const catMatch = product.category.toLowerCase().includes(q);
      if (!nameMatch && !descMatch && !catMatch) {
        return false;
      }
    }

    // 3. Min Price Filter
    if (minPrice !== '' && product.price < parseFloat(minPrice)) {
      return false;
    }

    // 4. Max Price Filter
    if (maxPrice !== '' && product.price > parseFloat(maxPrice)) {
      return false;
    }

    return true;
  });

  // --- Sorting Logic ---
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'featured':
      default:
        // Featured keeps dataset's default ordering
        return 0;
    }
  });

  // Calculate total items in cart
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%' }}>
      {/* Top Navigation */}
      <Navbar 
        cartCount={cartCount} 
        onCartClick={() => setIsCartOpen(true)}
        theme={theme}
        onThemeToggle={handleThemeToggle}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Hero Welcome Banner */}
      <section 
        className="animate-fade"
        style={{
          padding: '40px 24px',
          textAlign: 'center',
          background: 'linear-gradient(135deg, var(--accent-light) 0%, rgba(168, 85, 247, 0.05) 100%)',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px'
        }}
      >
        <span style={{ 
          fontSize: '0.85rem', 
          fontWeight: 700, 
          letterSpacing: '0.1em', 
          textTransform: 'uppercase', 
          color: 'var(--accent)',
          background: 'var(--bg-secondary)',
          padding: '4px 12px',
          borderRadius: 'var(--border-radius-full)',
          boxShadow: 'var(--shadow-sm)'
        }}>
          Summer Collection 2026
        </span>
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 800, 
          fontFamily: 'var(--font-heading)',
          color: 'var(--text-primary)',
          letterSpacing: '-0.02em',
          lineHeight: '1.2',
          margin: 0
        }}>
          Explore Next-Gen Essentials
        </h1>
        <p style={{ 
          color: 'var(--text-secondary)', 
          fontSize: '1.05rem', 
          maxWidth: '600px',
          margin: 0
        }}>
          Discover premium gadgets, fresh lifestyle clothing, high-performance computing, organic ingredients, and more in one visual marketplace.
        </p>
      </section>

      {/* Main Workspace Layout */}
      <main className="main-layout">
        {/* Sidebar Filters */}
        <FilterSidebar 
          products={productsData}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          minPrice={minPrice}
          maxPrice={maxPrice}
          onMinPriceChange={setMinPrice}
          onMaxPriceChange={setMaxPrice}
          onResetFilters={handleResetFilters}
          isOpen={isMobileFilterOpen}
          onClose={() => setIsMobileFilterOpen(false)}
        />

        {/* Product Catalog Grid */}
        <ProductGrid 
          products={sortedProducts}
          onProductClick={setSelectedProduct}
          onAddToCart={handleAddToCart}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
          onMobileFilterOpen={() => setIsMobileFilterOpen(true)}
          sortOption={sortOption}
          onSortChange={setSortOption}
          onResetFilters={handleResetFilters}
        />
      </main>

      {/* Footer */}
      <footer style={{
        marginTop: 'auto',
        borderTop: '1px solid var(--border)',
        padding: '32px 24px',
        textAlign: 'center',
        color: 'var(--text-muted)',
        fontSize: '0.9rem',
        backgroundColor: 'var(--bg-secondary)'
      }}>
        <p>© 2026 AeroCatalog Inc. Built with React and designed for speed.</p>
      </footer>

      {/* Details View Modal */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
          isFavorite={favorites.includes(selectedProduct.id)}
          onToggleFavorite={handleToggleFavorite}
        />
      )}

      {/* Cart Drawer */}
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
