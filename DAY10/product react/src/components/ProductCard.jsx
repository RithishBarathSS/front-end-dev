import React, { useState } from 'react';
import { Star, Plus, Heart } from 'lucide-react';
import ProductImage from './ProductImage';

export default function ProductCard({ 
  product, 
  onProductClick, 
  onAddToCart,
  isFavorite,
  onToggleFavorite
}) {
  const { name, category, price, rating, reviewCount, badge, colorGradient } = product;

  return (
    <article 
      className="product-card animate-slide-up"
      onClick={() => onProductClick(product)}
    >
      {/* Product Image Container */}
      <div className="product-card-image-container">
        {badge && <span className="product-badge">{badge}</span>}
        
        {/* Wishlist Button */}
        <button 
          className={`product-card-wishlist ${isFavorite ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(product.id);
          }}
          aria-label="Add to wishlist"
        >
          <Heart size={16} fill={isFavorite ? 'currentColor' : 'none'} />
        </button>

        {/* Dynamic Colorful Image */}
        <div className="product-card-image">
          <ProductImage category={category} colorGradient={colorGradient} iconSize={44} />
        </div>
      </div>

      {/* Details Area */}
      <div className="product-card-details">
        <span className="product-card-cat">{category}</span>
        <h3 className="product-card-title">{name}</h3>

        {/* Ratings block */}
        <div className="product-card-rating">
          <div className="stars-container">
            <Star size={14} fill="currentColor" />
          </div>
          <span><strong>{rating}</strong> ({reviewCount} reviews)</span>
        </div>

        {/* Footer Area with Pricing and CTA */}
        <div className="product-card-bottom">
          <span className="product-card-price">${price.toFixed(2)}</span>
          <button 
            className="product-card-btn"
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            title="Quick Add to Cart"
            aria-label="Quick Add to Cart"
          >
            <Plus size={18} />
          </button>
        </div>
      </div>
    </article>
  );
}
