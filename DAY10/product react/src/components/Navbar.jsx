import React from 'react';
import { ShoppingBag, Sun, Moon, Search, Sparkles } from 'lucide-react';

export default function Navbar({ 
  cartCount, 
  onCartClick, 
  theme, 
  onThemeToggle, 
  searchQuery, 
  onSearchChange 
}) {
  return (
    <header className="navbar glass-panel">
      <a href="#" className="navbar-brand" onClick={(e) => e.preventDefault()}>
        <Sparkles size={24} style={{ color: 'var(--accent)' }} />
        <span>AeroCatalog</span>
      </a>

      {/* Real-time search bar */}
      <div className="search-bar-container">
        <Search size={18} className="search-icon-btn" />
        <input 
          type="text" 
          placeholder="Search products, brands, categories..." 
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <div className="navbar-actions">
        {/* Dark/Light mode switcher */}
        <button 
          className="nav-icon-btn" 
          onClick={onThemeToggle} 
          aria-label="Toggle theme"
          title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Shopping Cart Trigger */}
        <button 
          className="nav-icon-btn" 
          onClick={onCartClick}
          aria-label="Open Cart"
        >
          <ShoppingBag size={20} />
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </button>
      </div>
    </header>
  );
}
