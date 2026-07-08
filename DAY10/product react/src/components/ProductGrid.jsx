import React from 'react';
import { SlidersHorizontal, PackageOpen, RefreshCw } from 'lucide-react';
import ProductCard from './ProductCard';

export default function ProductGrid({ 
  products, 
  onProductClick, 
  onAddToCart,
  favorites,
  onToggleFavorite,
  onMobileFilterOpen,
  sortOption,
  onSortChange,
  onResetFilters
}) {
  return (
    <div className="products-content">
      {/* Header controls (Sorting, Mobile filters button, Results count) */}
      <div className="grid-header">
        <div className="results-count">
          Showing <span>{products.length}</span> {products.length === 1 ? 'product' : 'products'}
        </div>

        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          {/* Mobile filter toggle */}
          <button className="mobile-filter-toggle" onClick={onMobileFilterOpen}>
            <SlidersHorizontal size={16} />
            Filters
          </button>

          {/* Sort dropdown */}
          <select 
            className="sort-select" 
            value={sortOption}
            onChange={(e) => onSortChange(e.target.value)}
            aria-label="Sort products"
          >
            <option value="featured">Sort by: Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>

      {/* Grid container or Empty state */}
      {products.length > 0 ? (
        <div className="products-grid">
          {products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onProductClick={onProductClick}
              onAddToCart={onAddToCart}
              isFavorite={favorites.includes(product.id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state animate-fade">
          <PackageOpen size={48} className="empty-state-icon" />
          <h3>No products found</h3>
          <p>We couldn't find any products matching your search or filters. Try adjusting them!</p>
          <button className="secondary-btn" onClick={onResetFilters}>
            <RefreshCw size={16} />
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
}
