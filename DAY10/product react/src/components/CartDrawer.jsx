import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, CheckCircle, Package } from 'lucide-react';
import ProductImage from './ProductImage';

export default function CartDrawer({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem,
  onClearCart
}) {
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  if (!isOpen) return null;

  // Calculate pricing summaries
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingThreshold = 150;
  const shippingCost = subtotal > shippingThreshold || subtotal === 0 ? 0 : 9.99;
  const total = subtotal + shippingCost;

  const handleCheckout = () => {
    // Generate a mock order number
    const randomOrderNum = 'AE-' + Math.floor(100000 + Math.random() * 900000);
    setOrderNumber(randomOrderNum);
    setCheckoutSuccess(true);
  };

  const handleFinishCheckout = () => {
    setCheckoutSuccess(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="cart-header">
          <h2>
            <ShoppingBag size={20} />
            Your Cart
          </h2>
          <button className="cart-close-btn" onClick={onClose} aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        {/* Checkout Success Screen */}
        {checkoutSuccess ? (
          <div className="checkout-success-view animate-fade">
            <CheckCircle size={64} className="checkout-success-icon" />
            <h3>Order Confirmed!</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Thank you for your purchase. Your order <strong>{orderNumber}</strong> has been received and is being processed.
            </p>
            <div style={{ backgroundColor: 'var(--bg-tertiary)', padding: '16px', borderRadius: 'var(--border-radius-md)', width: '100%', margin: '12px 0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '6px' }}>
                <span>Order Total:</span>
                <strong>${total.toFixed(2)}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                <span>Delivery Est:</span>
                <strong>2-4 Business Days</strong>
              </div>
            </div>
            <button className="premium-btn" style={{ width: '100%' }} onClick={handleFinishCheckout}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            {/* Cart Items List */}
            {cartItems.length > 0 ? (
              <>
                <div className="cart-items-list">
                  {cartItems.map((item, index) => (
                    <div key={`${item.id}-${item.selectedColor}-${item.selectedSize}-${index}`} className="cart-item">
                      {/* Image representation */}
                      <div className="cart-item-image" style={{ background: item.colorGradient }}>
                        <ProductImage category={item.category} colorGradient={item.colorGradient} iconSize={24} />
                      </div>

                      {/* Info & Adjustments */}
                      <div className="cart-item-details">
                        <div>
                          <h4 className="cart-item-name">{item.name}</h4>
                          
                          {/* Selected properties display */}
                          {(item.selectedSize || item.selectedColor) && (
                            <div className="cart-item-meta" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2px' }}>
                              {item.selectedSize && <span>Size: {item.selectedSize}</span>}
                              {item.selectedColor && (
                                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                  Color: 
                                  <span 
                                    style={{ 
                                      display: 'inline-block', 
                                      width: '10px', 
                                      height: '10px', 
                                      borderRadius: '50%', 
                                      backgroundColor: item.selectedColor,
                                      border: '1px solid rgba(0,0,0,0.1)'
                                    }} 
                                  />
                                </span>
                              )}
                            </div>
                          )}
                        </div>

                        <div className="cart-item-bottom">
                          <span className="cart-item-price">${(item.price * item.quantity).toFixed(2)}</span>
                          
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            {/* Quantity buttons */}
                            <div className="quantity-control">
                              <button 
                                onClick={() => onUpdateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity - 1)}
                                aria-label="Decrease quantity"
                              >
                                -
                              </button>
                              <span>{item.quantity}</span>
                              <button 
                                onClick={() => onUpdateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity + 1)}
                                aria-label="Increase quantity"
                              >
                                +
                              </button>
                            </div>

                            {/* Trash button */}
                            <button 
                              className="cart-item-remove"
                              onClick={() => onRemoveItem(item.id, item.selectedSize, item.selectedColor)}
                              title="Remove item"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer and summary */}
                <div className="cart-footer">
                  <div className="cart-totals">
                    <div className="cart-total-row">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="cart-total-row">
                      <span>Shipping</span>
                      <span>{shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}</span>
                    </div>
                    
                    {/* Free shipping banner progress */}
                    {subtotal < shippingThreshold && (
                      <div style={{ fontSize: '0.8rem', color: 'var(--accent)', marginTop: '4px', textAlign: 'center' }}>
                        Spend <strong>${(shippingThreshold - subtotal).toFixed(2)}</strong> more for <strong>FREE SHIPPING</strong>
                      </div>
                    )}

                    <div className="cart-total-row grand-total">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <button className="premium-btn" style={{ width: '100%', padding: '14px' }} onClick={handleCheckout}>
                    Proceed to Checkout
                  </button>
                </div>
              </>
            ) : (
              /* Empty state */
              <div className="cart-empty">
                <ShoppingBag size={48} className="cart-empty-icon" />
                <h3>Your cart is empty</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Looks like you haven't added anything yet.</p>
                <button className="secondary-btn" onClick={onClose}>
                  Start Browsing
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
