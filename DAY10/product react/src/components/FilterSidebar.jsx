import React from 'react';
import { 
  Grid, 
  UtensilsCrossed, 
  Watch, 
  Headphones, 
  Monitor, 
  Shirt, 
  Footprints, 
  Smartphone, 
  X, 
  SlidersHorizontal,
  RefreshCw
} from 'lucide-react';

const categoryIconMap = {
  all: Grid,
  foods: UtensilsCrossed,
  accessories: Watch,
  headphones: Headphones,
  pc: Monitor,
  dress: Shirt,
  shoes: Footprints,
  mobiles: Smartphone
};

export default function FilterSidebar({ 
  products, 
  activeCategory, 
  onCategoryChange, 
  minPrice, 
  maxPrice, 
  onMinPriceChange, 
  onMaxPriceChange,
  onResetFilters,
  isOpen,
  onClose
}) {
  
  // Calculate counts for each category
  const getCategoryCount = (catName) => {
    if (catName === 'all') return products.length;
    return products.filter(p => p.category === catName).length;
  };

  const categories = ['all', 'foods', 'accessories', 'headphones', 'pc', 'dress', 'shoes', 'mobiles'];

  return (
    <aside className={`filter-sidebar glass-panel ${isOpen ? 'open' : ''}`}>
      {/* Mobile close button */}
      <button 
        className="close-filter-sidebar" 
        onClick={onClose}
        style={{ display: 'none' }} /* overridden by media query */
      >
        <X size={18} />
      </button>

      {/* Header */}
      <div className="filter-section" style={{ borderBottom: 'none', paddingBottom: 0 }}>
        <h2 className="filter-section-title" style={{ display: 'flex', alignItems: 'center', gap: '8px', borderBottom: 'none' }}>
          <SlidersHorizontal size={18} />
          Filters
        </h2>
      </div>

      {/* Categories Section */}
      <div className="filter-section">
        <h3 className="filter-section-title">Categories</h3>
        <div className="category-list">
          {categories.map(cat => {
            const Icon = categoryIconMap[cat];
            const isActive = activeCategory === cat;
            return (
              <button 
                key={cat} 
                className={`category-btn ${isActive ? 'active' : ''}`}
                onClick={() => {
                  onCategoryChange(cat);
                  onClose(); // Auto close on mobile select
                }}
              >
                <span className="category-btn-label">
                  {Icon && <Icon size={16} />}
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </span>
                <span className="category-count">{getCategoryCount(cat)}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Price Range Section */}
      <div className="filter-section">
        <h3 className="filter-section-title">Price Range ($)</h3>
        <div className="price-range-inputs">
          <input 
            type="number" 
            placeholder="Min" 
            value={minPrice} 
            onChange={(e) => onMinPriceChange(e.target.value)}
            min="0"
          />
          <span>to</span>
          <input 
            type="number" 
            placeholder="Max" 
            value={maxPrice} 
            onChange={(e) => onMaxPriceChange(e.target.value)}
            min="0"
          />
        </div>
      </div>

      {/* Reset Button */}
      <button 
        className="secondary-btn" 
        style={{ marginTop: 'auto', display: 'flex', justifyContent: 'center' }}
        onClick={onResetFilters}
      >
        <RefreshCw size={16} />
        Reset Filters
      </button>
    </aside>
  );
}
