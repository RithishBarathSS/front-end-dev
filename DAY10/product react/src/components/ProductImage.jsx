import React from 'react';
import { 
  UtensilsCrossed, 
  Watch, 
  Headphones, 
  Monitor, 
  Shirt, 
  Footprints, 
  Smartphone, 
  Package 
} from 'lucide-react';

const categoryIconMap = {
  foods: UtensilsCrossed,
  accessories: Watch,
  headphones: Headphones,
  pc: Monitor,
  dress: Shirt,
  shoes: Footprints,
  mobiles: Smartphone
};

export default function ProductImage({ category, colorGradient, iconSize = 48, style = {} }) {
  const IconComponent = categoryIconMap[category] || Package;

  return (
    <div 
      style={{
        background: colorGradient || 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justify: 'center',
        position: 'relative',
        ...style
      }}
    >
      {/* Decorative premium shapes */}
      <div 
        style={{
          position: 'absolute',
          top: '-20%',
          left: '-20%',
          width: '60%',
          height: '60%',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.08)',
          filter: 'blur(8px)'
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '-30%',
          right: '-10%',
          width: '70%',
          height: '70%',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.05)',
          filter: 'blur(12px)'
        }}
      />
      <IconComponent 
        size={iconSize} 
        strokeWidth={1.5} 
        style={{ 
          color: '#ffffff',
          filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.15))' 
        }} 
      />
    </div>
  );
}
