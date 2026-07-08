export const productsData = [
  // Foods
  {
    id: 'food-1',
    name: 'Ceremonial Matcha Powder',
    category: 'foods',
    price: 29.99,
    rating: 4.9,
    reviewCount: 312,
    badge: 'Premium',
    description: 'Stone-ground, certified organic ceremonial grade Uji Matcha. Rich in antioxidants with a smooth, sweet, and vibrant umami flavor profile.',
    details: {
      'Origin': 'Uji, Kyoto, Japan',
      'Weight': '30g',
      'Ingredients': '100% Organic Green Tea Leaves',
      'Shelf Life': '12 Months'
    },
    sizes: ['30g Tin', '80g Pouch'],
    colors: [],
    colorGradient: 'linear-gradient(135deg, #10b981 0%, #047857 100%)'
  },
  {
    id: 'food-2',
    name: 'Artisanal White Honey',
    category: 'foods',
    price: 24.50,
    rating: 4.8,
    reviewCount: 184,
    badge: 'Limited',
    description: 'Rare, raw white honey harvested from wild mountain flowers. Creamy texture with delicate floral notes and natural enzyme richness.',
    details: {
      'Source': 'Rocky Mountain Wilderness',
      'Weight': '250g',
      'Type': 'Raw, Unfiltered',
      'Pairing': 'Teas, cheeses, or direct spooning'
    },
    sizes: ['250g Jar', '500g Jar'],
    colors: [],
    colorGradient: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)'
  },
  {
    id: 'food-3',
    name: 'Single-Origin Dark Chocolate',
    category: 'foods',
    price: 12.00,
    rating: 4.7,
    reviewCount: 95,
    badge: 'Best Seller',
    description: '85% dark chocolate crafted from single-origin Venezuelan Criollo cacao beans. Deep notes of red fruits, coffee, and roasted nuts.',
    details: {
      'Cacao Content': '85%',
      'Origin': 'Chuao, Venezuela',
      'Weight': '75g Bar',
      'Attributes': 'Vegan, Fair-trade, Soy-free'
    },
    sizes: ['Single Bar', '3-Pack Gift Set'],
    colors: [],
    colorGradient: 'linear-gradient(135deg, #78350f 0%, #451a03 100%)'
  },

  // Accessories
  {
    id: 'acc-1',
    name: 'Chronograph Smartwatch v2',
    category: 'accessories',
    price: 189.99,
    rating: 4.6,
    reviewCount: 428,
    badge: 'Hot',
    description: 'Hybrid smartwatch featuring physical hands overlaid on a brilliant customizable OLED display. Track steps, heart rate, stress, and sleep.',
    details: {
      'Battery Life': 'Up to 14 days',
      'Water Resistance': '50m (5 ATM)',
      'Connectivity': 'Bluetooth 5.2, GPS',
      'Compatibility': 'iOS & Android'
    },
    sizes: ['40mm', '44mm'],
    colors: ['#0f172a', '#64748b', '#b45309'],
    colorGradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)'
  },
  {
    id: 'acc-2',
    name: 'Minimalist Leather Wallet',
    category: 'accessories',
    price: 45.00,
    rating: 4.9,
    reviewCount: 512,
    badge: 'Classic',
    description: 'RFID-blocking slim cardholder crafted from full-grain vegetable-tanned leather. Fits up to 8 cards and folded banknotes.',
    details: {
      'Material': 'Full-Grain Tuscan Leather',
      'Dimensions': '10cm x 7.5cm x 0.5cm',
      'RFID Protection': 'Yes, integrated',
      'Warranty': 'Lifetime'
    },
    sizes: [],
    colors: ['#3b2314', '#1c1917', '#78350f'],
    colorGradient: 'linear-gradient(135deg, #a21caf 0%, #6b21a8 100%)'
  },
  {
    id: 'acc-3',
    name: 'Aero polarized Sunglasses',
    category: 'accessories',
    price: 79.00,
    rating: 4.5,
    reviewCount: 122,
    badge: 'Summer',
    description: 'Ultra-lightweight titanium sunglasses with HD polarized lenses. Scratch-resistant, hydrophobic, and 100% UV protection.',
    details: {
      'Frame': 'Aerospace Grade Titanium',
      'Lens Technology': '1.1mm Polarized Triacetate',
      'UV Protection': 'UV400',
      'Weight': '18g'
    },
    sizes: ['Standard', 'Wide Fit'],
    colors: ['#000000', '#475569'],
    colorGradient: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)'
  },

  // Headphones
  {
    id: 'head-1',
    name: 'Acoustic Pro Wireless',
    category: 'headphones',
    price: 249.99,
    rating: 4.8,
    reviewCount: 784,
    badge: 'Staff Pick',
    description: 'Flagship over-ear headphones with custom-engineered dynamic drivers and smart active noise cancellation. Studio-grade sound everywhere.',
    details: {
      'Drivers': '40mm Neodymium',
      'ANC Type': 'Hybrid Adaptive ANC',
      'Playtime': 'Up to 45 hours (ANC off)',
      'Charging': 'USB-C (10 min charge = 5 hrs play)'
    },
    sizes: [],
    colors: ['#1e293b', '#f1f5f9', '#b45309'],
    colorGradient: 'linear-gradient(135deg, #818cf8 0%, #4f46e5 100%)'
  },
  {
    id: 'head-2',
    name: 'Sonic ANC Earbuds',
    category: 'headphones',
    price: 129.99,
    rating: 4.7,
    reviewCount: 396,
    badge: 'Popular',
    description: 'Compact wireless earbuds with deep active noise canceling. Ergonomic design with high-fidelity sound and clear call quality.',
    details: {
      'Water Resistance': 'IPX5 Sweatproof',
      'Playtime': '8 hours (32 hours with case)',
      'Microphones': '6 MEMS with AI beamforming',
      'Bluetooth': 'V5.3 Dual Channel'
    },
    sizes: [],
    colors: ['#0f172a', '#ffffff', '#10b981'],
    colorGradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)'
  },

  // PC
  {
    id: 'pc-1',
    name: 'Vanguard Gaming PC',
    category: 'pc',
    price: 1899.00,
    rating: 4.9,
    reviewCount: 147,
    badge: 'Monster Build',
    description: 'High-end gaming workstation featuring the latest generation liquid-cooled CPU and flagship graphics card. Housed in a glass panoramic chassis.',
    details: {
      'CPU': 'Intel Core i9-14900K or AMD Ryzen 9 7950X',
      'GPU': 'NVIDIA GeForce RTX 4080 Super 16GB',
      'RAM': '32GB DDR5 6000MHz',
      'Storage': '2TB NVMe M.2 Gen4 SSD'
    },
    sizes: ['i9 + RTX 4080', 'R9 + RTX 4080'],
    colors: ['#000000', '#ffffff'],
    colorGradient: 'linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)'
  },
  {
    id: 'pc-2',
    name: 'Apex Mechanical Keyboard',
    category: 'pc',
    price: 149.00,
    rating: 4.7,
    reviewCount: 289,
    badge: 'Customizable',
    description: '75% layout hot-swappable mechanical keyboard. Double-gasket mounted structure with pre-lubed linear switches and PBT keycaps.',
    details: {
      'Layout': '75% (82 keys)',
      'Switches': 'Gateron Oil King Linear',
      'Keycaps': 'Double-shot PBT Cherry Profile',
      'Backlight': 'South-facing RGB'
    },
    sizes: ['Linear Switches', 'Tactile Switches'],
    colors: ['#1e293b', '#e2e8f0'],
    colorGradient: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)'
  },
  {
    id: 'pc-3',
    name: 'Ultra-Wide Curved Monitor',
    category: 'pc',
    price: 549.99,
    rating: 4.8,
    reviewCount: 204,
    badge: 'Immersive',
    description: '34-inch curved gaming monitor (1000R) with UWQHD resolution, 165Hz refresh rate, and 1ms response time. Certified VESA DisplayHDR 400.',
    details: {
      'Panel Size': '34 inches, 21:9 Curved',
      'Resolution': '3440 x 1440 (UWQHD)',
      'Refresh Rate': '165Hz',
      'Response Time': '1ms (GtG)'
    },
    sizes: [],
    colors: [],
    colorGradient: 'linear-gradient(135deg, #6366f1 0%, #4338ca 100%)'
  },

  // Dress
  {
    id: 'dress-1',
    name: 'Urban Bomber Jacket',
    category: 'dress',
    price: 110.00,
    rating: 4.6,
    reviewCount: 167,
    badge: 'Trending',
    description: 'Water-resistant nylon bomber jacket with quilted orange lining. Modern fit with zippered pockets and ribbed knit collar.',
    details: {
      'Material': '100% Water-Resistant Nylon',
      'Fit': 'Regular Fit',
      'Closure': 'Heavy Duty Metal Zip',
      'Care': 'Machine Wash Cold'
    },
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['#14532d', '#0f172a', '#854d0e'],
    colorGradient: 'linear-gradient(135deg, #a8a29e 0%, #78716c 100%)'
  },
  {
    id: 'dress-2',
    name: 'Classic Linen Shirt',
    category: 'dress',
    price: 59.99,
    rating: 4.4,
    reviewCount: 88,
    badge: 'Eco Friendly',
    description: 'Breathable, relaxed shirt made from 100% sustainably sourced flax linen. Features a band collar and coconut husk buttons.',
    details: {
      'Material': '100% Flax Linen',
      'Collar': 'Grandad/Band Collar',
      'Sleeve': 'Long Sleeve (Rollable)',
      'Weight': 'Lightweight'
    },
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['#f8fafc', '#bae6fd', '#fed7aa'],
    colorGradient: 'linear-gradient(135deg, #84cc16 0%, #65a30d 100%)'
  },

  // Shoes
  {
    id: 'shoes-1',
    name: 'Nova Running Sneakers',
    category: 'shoes',
    price: 125.00,
    rating: 4.8,
    reviewCount: 452,
    badge: 'Top Seller',
    description: 'Next-gen running shoes with engineered mesh upper and nitrogen-infused foam midsole for maximum energy return and joint cushioning.',
    details: {
      'Midsole': 'Nitro-infused EVA cushioning',
      'Outsole': 'High-traction carbon rubber',
      'Weight': '240g (Size 9)',
      'Heel-to-Toe Drop': '8mm'
    },
    sizes: ['US 8', 'US 9', 'US 10', 'US 11'],
    colors: ['#fb7185', '#38bdf8', '#10b981'],
    colorGradient: 'linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)'
  },
  {
    id: 'shoes-2',
    name: 'Heritage Leather Boots',
    category: 'shoes',
    price: 210.00,
    rating: 4.9,
    reviewCount: 178,
    badge: 'Crafted',
    description: 'Handcrafted Goodyear-welted leather boots. Built with double-layer oil-tanned leather and high-density cork footbed that molds to your feet.',
    details: {
      'Construction': 'Goodyear Welt',
      'Leather': 'Oil-tanned cowhide',
      'Footbed': 'Natural Cork + Steel Shank',
      'Sole': 'Vibram mini-lug rubber'
    },
    sizes: ['US 7', 'US 8', 'US 9', 'US 10', 'US 11'],
    colors: ['#451a03', '#1c1917'],
    colorGradient: 'linear-gradient(135deg, #d97706 0%, #b45309 100%)'
  },

  // Mobiles
  {
    id: 'mob-1',
    name: 'Aero Foldable Phone',
    category: 'mobiles',
    price: 1599.00,
    rating: 4.8,
    reviewCount: 112,
    badge: 'Futuristic',
    description: 'Revolutionary foldable phone with a 7.6-inch seamless main display, armored aluminum hinge, and triple under-display camera system.',
    details: {
      'Displays': '7.6" Main Dynamic AMOLED 120Hz, 6.2" Cover Screen',
      'Processor': 'Snapdragon 8 Gen 3',
      'Memory': '16GB RAM + 512GB UFS 4.0 Storage',
      'Camera': '50MP Main + 12MP Ultra-wide + 10MP Telephoto'
    },
    sizes: ['256GB', '512GB'],
    colors: ['#0f172a', '#475569', '#f8fafc'],
    colorGradient: 'linear-gradient(135deg, #a855f7 0%, #7e22ce 100%)'
  },
  {
    id: 'mob-2',
    name: 'Infinity Flagship Pro',
    category: 'mobiles',
    price: 999.00,
    rating: 4.7,
    reviewCount: 324,
    badge: 'Pro Camera',
    description: 'Sleek smartphone featuring a 108MP camera, 5x optical zoom, and a 6.8-inch display that runs up to 144Hz. Encased in satin-finish titanium.',
    details: {
      'Display': '6.8" OLED QHD+, LTPO 1-144Hz',
      'Main Camera': '108MP f/1.7 OIS',
      'Battery': '5000mAh, 65W Wired Charging',
      'Chipset': 'Dimensity 9300'
    },
    sizes: ['128GB', '256GB', '512GB'],
    colors: ['#334155', '#475569', '#1e293b'],
    colorGradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)'
  }
];
