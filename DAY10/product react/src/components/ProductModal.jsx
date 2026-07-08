import React, { useState, useEffect } from 'react';
import { X, Star, Heart, ShoppingCart } from 'lucide-react';
import ProductImage from './ProductImage';

export default function ProductModal({ 
  product, 
  onClose, 
  onAddToCart,
  isFavorite,
  onToggleFavorite 
}) {
  if (!product) return null;

  const { name, category, price, rating, reviewCount, description, details, sizes, colors, colorGradient } = product;

  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  // Auto-select first option on load
  useEffect(() => {
    if (sizes && sizes.length > 0) {
      setSelectedSize(sizes[0]);
    } else {
      setSelectedSize('');
    }
    if (colors && colors.length > 0) {
      setSelectedColor(colors[0]);
    } else {
      setSelectedColor('');
    }
  }, [product]);

  const handleAddToCart = () => {
    // Add custom options to the added product
    onAddToCart({
      ...product,
      selectedSize,
      selectedColor
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close details">
          <X size={18} />
        </button>

        {/* Product Image Panel (Left) */}
        <div className="modal-image-panel" style={{ background: colorGradient }}>
          <ProductImage category={category} colorGradient={colorGradient} iconSize={96} />
        </div>

        {/* Product Info Panel (Right) */}
        <div className="modal-info-panel">
          <div>
            <span className="product-card-cat" style={{ fontSize: '0.8rem' }}>{category}</span>
            <h1 className="modal-title">{name}</h1>
          </div>

          {/* Pricing & Ratings */}
          <div className="modal-price-rating">
            <span className="modal-price">${price.toFixed(2)}</span>
            <div className="product-card-rating" style={{ fontSize: '0.95rem' }}>
              <div className="stars-container">
                <Star size={16} fill="currentColor" />
              </div>
              <span><strong>{rating}</strong> ({reviewCount} reviews)</span>
            </div>
          </div>

          {/* Description */}
          <p className="modal-desc">{description}</p>

          {/* Color Selectors (if any exist) */}
          {colors && colors.length > 0 && (
            <div className="modal-options">
              <span className="modal-option-label">Choose Color</span>
              <div className="option-selectors">
                {colors.map(col => (
                  <button 
                    key={col}
                    className={`color-ring ${selectedColor === col ? 'selected' : ''}`}
                    onClick={() => setSelectedColor(col)}
                    title={`Color option ${col}`}
                  >
                    <div className="color-dot" style={{ backgroundColor: col }} />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Size Selectors (if any exist) */}
          {sizes && sizes.length > 0 && (
            <div className="modal-options">
              <span className="modal-option-label">Choose Variant / Size</span>
              <div className="option-selectors">
                {sizes.map(sz => (
                  <button 
                    key={sz}
                    className={`size-pill ${selectedSize === sz ? 'selected' : ''}`}
                    onClick={() => setSelectedSize(sz)}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Specs Sheet */}
          {details && Object.keys(details).length > 0 && (
            <div className="modal-specs">
              <span className="modal-option-label" style={{ fontSize: '0.8rem', opacity: 0.8, marginBottom: '6px' }}>Specifications</span>
              {Object.entries(details).map(([key, value]) => (
                <div key={key} className="spec-row">
                  <span className="spec-label">{key}</span>
                  <span className="spec-val">{value}</span>
                </div>
              ))}
            </div>
          )}

          {/* Action CTAs */}
          <div className="modal-actions">
            <button className="premium-btn" onClick={handleAddToCart}>
              <ShoppingCart size={18} />
              Add to Cart
            </button>
            
            <button 
              className={`nav-icon-btn ${isFavorite ? 'active' : ''}`}
              onClick={() => onToggleFavorite(product.id)}
              style={{ height: '48px', width: '48px', color: isFavorite ? 'var(--danger)' : 'inherit', borderColor: isFavorite ? 'var(--danger)' : 'var(--border)' }}
              title="Add to Favorites"
              aria-label="Toggle wishlist"
            >
              <Heart size={20} fill={isFavorite ? 'currentColor' : 'none'} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
