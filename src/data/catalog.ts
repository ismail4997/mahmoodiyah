import { 
  PackagingCategoryData, 
  ProductTypeItem, 
  MaterialOption, 
  FinishingOption, 
  Currency 
} from "@/types";

export const CURRENCIES: Record<string, Currency> = {
  USD: { code: 'USD', symbol: '$', name: 'US Dollar', exchangeRate: 1.0 },
  GBP: { code: 'GBP', symbol: '£', name: 'British Pound', exchangeRate: 0.79 },
  EUR: { code: 'EUR', symbol: '€', name: 'Euro', exchangeRate: 0.92 },
  AED: { code: 'AED', symbol: 'AED ', name: 'UAE Dirham', exchangeRate: 3.67 },
  AUD: { code: 'AUD', symbol: 'A$', name: 'Australian Dollar', exchangeRate: 1.53 },
  CAD: { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar', exchangeRate: 1.36 }
};

export const CATEGORIES: PackagingCategoryData[] = [
  {
    id: 'folding-cartons',
    slug: 'folding-cartons',
    name: 'Folding Cartons',
    heroHeadline: 'Custom Printed Card Packaging for Retail & Consumer Brands.',
    heroSubheading: 'High-precision bleached cardstock and paperboard cartons engineered for cosmetics, food, pharmaceuticals, and retail display.',
    description: 'Printed card packaging for retail, cosmetics, food and consumer products.',
    image: '/images/packaging/folding-cartons.jpg',
    subcategories: [
      {
        name: 'Tuck Boxes',
        description: 'Standard and custom tuck end cartons that ship flat and assemble in seconds.',
        items: ['Straight Tuck End', 'Reverse Tuck End', 'Tuck End with Window', 'Auto Bottom', 'Lock Bottom']
      },
      {
        name: 'Sleeve Boxes',
        description: 'Outer protective packaging sleeves and sliding product sleeves.',
        items: ['Printed Sleeve', 'Product Sleeve', 'Sliding Sleeve']
      },
      {
        name: 'Window Cartons',
        description: 'Cartons featuring clear transparent PET or custom die-cut product showcase windows.',
        items: ['Clear Window Carton', 'Die-Cut Window Carton']
      },
      {
        name: 'Specialty Cartons',
        description: 'Distinctive structural forms designed for gifting and retail shelf presence.',
        items: ['Crash Lock Box', 'Pillow Box', 'Gable Box', 'Hexagonal Box', 'Triangular Box', 'Custom Die-Cut Carton']
      }
    ],
    materialOverview: [
      '14pt - 24pt Solid Bleached Sulfate (SBS)',
      'Clay Coated Newsback (CCNB)',
      '100% Recycled Natural Kraft Board',
      'Metallic Foil Paperboard'
    ],
    finishingOverview: [
      'Soft-Touch Velvet Lamination',
      'Spot UV Gloss Coating',
      'Hot Metallic Foil Stamping',
      'Precision Embossing & Debossing'
    ],
    seoTitle: 'Custom Folding Cartons & Paperboard Boxes | Packmenn',
    seoDescription: 'Manufacturer of custom printed folding cartons, tuck boxes, and product sleeves for retail, beauty, and food brands worldwide.'
  },
  {
    id: 'corrugated-boxes',
    slug: 'corrugated-boxes',
    name: 'Corrugated Boxes',
    heroHeadline: 'Strong, Functional Packaging for Shipping & E-Commerce.',
    heroSubheading: 'Heavy-duty fluted corrugated boxes engineered to protect goods in transit while delivering a memorable unboxing experience.',
    description: 'Strong, functional packaging for shipping, e-commerce and product presentation.',
    image: '/images/packaging/corrugated-boxes.jpg',
    subcategories: [
      {
        name: 'Standard Shipping Boxes',
        description: 'Industry-standard slotted shipping cartons for transport and master carton packing.',
        items: ['Regular Slotted Carton (RSC)', 'Half Slotted Carton (HSC)', 'Full Overlap Box (FOL)', 'Five Panel Wrapper']
      },
      {
        name: 'Mailer Boxes',
        description: 'Self-locking crush-resistant presentation boxes for direct-to-consumer delivery.',
        items: ['E-Commerce Mailer', 'Subscription Box', 'Die-Cut Mailer', 'Book-Fold Mailer']
      },
      {
        name: 'Product Boxes',
        description: 'Sturdy printed corrugated boxes for retail shelf and heavier goods display.',
        items: ['Printed Corrugated Box', 'Die-Cut Product Box', 'Retail Display Box', 'Product Shipping Box']
      },
      {
        name: 'Specialty Corrugated',
        description: 'Custom corrugated dividers, trays, and partitioned shipping configurations.',
        items: ['Corrugated Tray', 'Partitioned Box', 'Box with Inserts', 'Custom Die-Cut Box', 'Display Box']
      }
    ],
    materialOverview: [
      'E-Flute (1/16" slim presentation profile)',
      'B-Flute (1/8" standard transit cushion)',
      'C-Flute (3/16" heavy-duty shipping)',
      'E+B / B+C Double Wall corrugated'
    ],
    finishingOverview: [
      'Inside & Outside Dual CMYK Print',
      'Matte & Gloss Protective Varnishes',
      'Tear-Strip & Peel-and-Seal Adhesives',
      'Custom Fluted Dividers & Inserts'
    ],
    seoTitle: 'Custom Corrugated Boxes & E-Commerce Mailers | Packmenn',
    seoDescription: 'Custom printed corrugated shipping boxes, mailers, and retail displays engineered to your exact product dimensions.'
  },
  {
    id: 'rigid-boxes',
    slug: 'rigid-boxes',
    name: 'Rigid Boxes',
    heroHeadline: 'Premium Luxury Presentation Packaging.',
    heroSubheading: 'Ultra-thick solid greyboard setup boxes designed for luxury cosmetics, jewelry, watches, electronics, and prestige gifting.',
    description: 'Premium presentation packaging for luxury, cosmetics, jewelry, gifts and high-end products.',
    image: '/images/packaging/rigid-boxes.jpg',
    subcategories: [
      {
        name: 'Lid & Base Boxes',
        description: 'Two-piece telescoping rigid setup boxes with smooth air-release resistance.',
        items: ['Two-Piece Rigid Box', 'Lift-Off Lid Box', 'Deep Lid & Base']
      },
      {
        name: 'Magnetic Closure',
        description: 'Book-style rigid boxes with concealed neodymium magnets for a crisp snap closure.',
        items: ['Magnetic Closure Box', 'Book-Style Magnetic Box', 'Foldable Magnetic Box']
      },
      {
        name: 'Drawer & Slide Boxes',
        description: 'Rigid sliding sleeves with inner pull trays and satin ribbon tabs.',
        items: ['Drawer Box', 'Matchbox Style Box', 'Sleeve + Tray']
      },
      {
        name: 'Shoulder & Neck',
        description: 'Three-piece structures featuring an exposed contrasting collar neck.',
        items: ['Shoulder Neck Box', 'Three-Piece Rigid Box']
      },
      {
        name: 'Book Style & Specialty',
        description: 'Hinged presentation boxes with custom precision-cut foam or velvet cushions.',
        items: ['Hinged Lid Box', 'Jewelry Box', 'Watch Box', 'Perfume Box', 'Gift Box', 'Custom Insert Box']
      }
    ],
    materialOverview: [
      '1.5mm (1000gsm) Rigid Board',
      '2.0mm (1400gsm) Heavy Greyboard',
      '2.5mm (1800gsm) Ultra-Rigid Chipboard',
      '3.0mm (2200gsm) Solid Presentation Board',
      '157gsm Art Paper, Textured Linen & Velvet Wraps'
    ],
    finishingOverview: [
      'Hot Metallic Foil Stamping (Gold, Silver, Copper)',
      'Spot UV Gloss Coating',
      'Velvet Soft-Touch Lamination',
      'Laser-Cut High-Density EVA & Foam Inserts'
    ],
    seoTitle: 'Custom Luxury Rigid Boxes & Setup Packaging | Packmenn',
    seoDescription: 'High-end custom rigid setup boxes with magnetic closures, shoulder necks, and custom velvet foam inserts from 250 units.'
  },
  {
    id: 'paper-bags',
    slug: 'paper-bags',
    name: 'Paper Bags',
    heroHeadline: 'Custom Printed Retail, Shopping & Luxury Paper Bags.',
    heroSubheading: 'High-strength kraft, bleached white card, and luxury euro-tote paper bags crafted with twisted, flat, rope, or satin ribbon handles.',
    description: 'Custom retail shopping bags, luxury euro-totes, and kraft carrier bags with premium handles and foil stamping.',
    image: '/images/packaging/paper-bags.jpg',
    subcategories: [
      {
        name: 'Retail Shopping Bags',
        description: 'Durable kraft and bleached white paper carrier bags for boutiques, retail, and apparel.',
        items: ['Twisted Handle Kraft Bag', 'Flat Handle Shopping Bag', 'SOS Merchandise Bag']
      },
      {
        name: 'Luxury Euro-Totes',
        description: 'Heavyweight coated art card bags with card-reinforced collars, base boards, and satin ribbon or cord handles.',
        items: ['Luxury Ribbon Handle Bag', 'Cotton Rope Handle Bag', 'Satin Pull Tie Bag']
      },
      {
        name: 'Boutique & Specialty Bags',
        description: 'Custom punch handle bags, foil stamped boutique totes, and custom gusseted retail carriers.',
        items: ['Die-Cut Punch Handle Bag', 'Hot Foil Stamped Bag', 'Custom Gusset Bag']
      }
    ],
    materialOverview: [
      '120gsm - 150gsm Natural Brown Kraft Paper',
      '120gsm - 160gsm Bleached White Kraft Paper',
      '210gsm - 250gsm Luxury Coated Art Card',
      '100% Recycled FSC® Certified Eco-Kraft'
    ],
    finishingOverview: [
      'Twisted Paper & Flat Tape Handles',
      'Soft Satin & Grosgrain Ribbon Handles',
      'Knotted Braided Cotton Cord Handles',
      'Metallic Foil Stamping & 3D Embossing',
      'Top Turn-Over Card & Bottom Board Reinforcement'
    ],
    seoTitle: 'Custom Paper Bags & Luxury Euro-Totes | Packmenn',
    seoDescription: 'Custom printed paper bags, retail kraft shopping bags, and luxury euro-totes with ribbon and rope handles manufactured from 250 units.'
  }
];

export const PRODUCT_TYPES: ProductTypeItem[] = [
  // ================= FOLDING CARTONS =================
  {
    id: 'straight-tuck-end',
    slug: 'straight-tuck-end',
    name: 'Straight Tuck End Box',
    category: 'folding-cartons',
    subcategory: 'Tuck Boxes',
    tagline: 'Clean front panel with top and bottom tuck flaps closing in the same direction.',
    description: 'Straight tuck cartons provide a clean, seamless front display with no visible raw paper edges. Widely used for cosmetics, skincare, and luxury retail packaging.',
    image: '/images/packaging/folding-straight-tuck.jpg',
    moq: 250,
    leadTime: '7-10 Business Days',
    basePriceUSD: 0.65,
    pricingMode: 'INSTANT_ESTIMATE',
    defaultDimensions: { length: 3, width: 3, height: 6, unit: 'inch' },
    allowedMaterials: ['sbs-16pt', 'sbs-18pt', 'sbs-24pt', 'kraft-paperboard'],
    allowedFinishes: ['matte-lam', 'gloss-lam', 'soft-touch', 'spot-uv', 'gold-foil', 'silver-foil', 'emboss'],
    applications: ['Cosmetics', 'Skincare Serums', 'Perfume Bottles', 'Health Supplements'],
    features: ['Ships 100% flat', 'High resolution CMYK printing', 'Quick hand assembly']
  },
  {
    id: 'reverse-tuck-end',
    slug: 'reverse-tuck-end',
    name: 'Reverse Tuck End Box',
    category: 'folding-cartons',
    subcategory: 'Tuck Boxes',
    tagline: 'Economical folding carton with top and bottom flaps opening in opposite directions.',
    description: 'The most cost-efficient folding carton structure. Engineered for high-speed automated or manual filling across retail, consumer electronics, and confectionery.',
    image: '/images/packaging/folding-reverse-tuck.jpg',
    moq: 250,
    leadTime: '7-10 Business Days',
    basePriceUSD: 0.58,
    pricingMode: 'INSTANT_ESTIMATE',
    defaultDimensions: { length: 3.5, width: 2, height: 5, unit: 'inch' },
    allowedMaterials: ['sbs-16pt', 'sbs-18pt', 'sbs-24pt', 'kraft-paperboard', 'ccnb-board'],
    allowedFinishes: ['matte-lam', 'gloss-lam', 'soft-touch', 'spot-uv', 'gold-foil', 'silver-foil'],
    applications: ['Pharmaceuticals', 'Personal Care', 'Retail Hardware', 'Confectionery'],
    features: ['Maximum sheet yield efficiency', 'Ships flat to minimize storage', 'Compatible with automated packing']
  },
  {
    id: 'tuck-end-window',
    slug: 'tuck-end-window',
    name: 'Tuck End with Window',
    category: 'folding-cartons',
    subcategory: 'Window Cartons',
    tagline: 'Folding carton featuring a clear transparent PET/PVC window display.',
    description: 'Allows customers to view the actual color, texture, and quality of the product inside while keeping it securely protected from dust and tampering.',
    image: '/images/packaging/folding-window-carton.jpg',
    moq: 500,
    leadTime: '8-12 Business Days',
    basePriceUSD: 0.78,
    pricingMode: 'INSTANT_ESTIMATE',
    defaultDimensions: { length: 4, width: 2.5, height: 6, unit: 'inch' },
    allowedMaterials: ['sbs-18pt', 'sbs-24pt', 'kraft-paperboard'],
    allowedFinishes: ['matte-lam', 'gloss-lam', 'spot-uv', 'gold-foil', 'window-patch'],
    applications: ['Bakery & Sweets', 'Cosmetics', 'Electronics', 'Toys & Collectibles'],
    features: ['Crystal clear PET window patch', 'Custom die-cut window shapes', 'Vibrant exterior print']
  },
  {
    id: 'auto-bottom-box',
    slug: 'auto-bottom-box',
    name: 'Auto Bottom (Crash Lock) Box',
    category: 'folding-cartons',
    subcategory: 'Tuck Boxes',
    tagline: 'Pre-glued bottom automatically locks in place in one second.',
    description: 'Engineered for high-volume fulfillment lines. Squeezing the folded carton instantly snaps the reinforced base into a locked, heavy-load-bearing bottom.',
    image: '/images/packaging/folding-auto-bottom.jpg',
    moq: 500,
    leadTime: '8-11 Business Days',
    basePriceUSD: 0.72,
    pricingMode: 'INSTANT_ESTIMATE',
    defaultDimensions: { length: 4, width: 4, height: 8, unit: 'inch' },
    allowedMaterials: ['sbs-18pt', 'sbs-24pt', 'ccnb-board'],
    allowedFinishes: ['matte-lam', 'gloss-lam', 'soft-touch', 'spot-uv', 'gold-foil'],
    applications: ['Heavy Glass Bottles', 'Beverages', 'Candles', 'Retail Hardware'],
    features: ['1-second snap assembly', 'Reinforced weight capacity', 'Reduced labor packing time']
  },
  {
    id: 'printed-sleeve-box',
    slug: 'printed-sleeve-box',
    name: 'Printed Product Sleeve',
    category: 'folding-cartons',
    subcategory: 'Sleeve Boxes',
    tagline: 'Custom printed wrap-around band or sliding sleeve.',
    description: 'A versatile paperboard sleeve that slides snugly over plain boxes, food trays, or retail tins to add branded graphics and compliance information cost-effectively.',
    image: '/images/packaging/folding-printed-sleeve.jpg',
    moq: 250,
    leadTime: '5-8 Business Days',
    basePriceUSD: 0.45,
    pricingMode: 'INSTANT_ESTIMATE',
    defaultDimensions: { length: 6, width: 4, height: 2, unit: 'inch' },
    allowedMaterials: ['sbs-16pt', 'sbs-18pt', 'kraft-paperboard'],
    allowedFinishes: ['matte-lam', 'gloss-lam', 'soft-touch', 'gold-foil', 'spot-uv'],
    applications: ['Food Meal Trays', 'Soap Bars', 'Apparel Multipacks', 'Gift Sets'],
    features: ['Extremely low unit cost', 'Fast manufacturing turnaround', 'Snug friction slide fit']
  },

  // ================= CORRUGATED BOXES =================
  {
    id: 'ecommerce-mailer',
    slug: 'ecommerce-mailer',
    name: 'E-Commerce Mailer Box',
    category: 'corrugated-boxes',
    subcategory: 'Mailer Boxes',
    tagline: 'Crush-resistant self-locking corrugated box for memorable unboxing.',
    description: 'The premier choice for subscription kits, apparel, and direct-to-consumer e-commerce. Features double-wall side construction and self-locking roll-end tabs with zero tape required.',
    image: '/images/packaging/corrugated-boxes.jpg',
    moq: 100,
    leadTime: '7-10 Business Days',
    basePriceUSD: 1.25,
    pricingMode: 'INSTANT_ESTIMATE',
    defaultDimensions: { length: 10, width: 8, height: 4, unit: 'inch' },
    allowedMaterials: ['e-flute-kraft', 'e-flute-white', 'b-flute-kraft', 'b-flute-white'],
    allowedFinishes: ['matte-varnish', 'gloss-varnish', 'dual-print', 'spot-uv', 'custom-inserts'],
    applications: ['E-Commerce Subscriptions', 'Apparel & Footwear', 'Cosmetic PR Kits', 'Specialty Food'],
    features: ['Double-wall crush resistance', 'Interior & Exterior full color print', '100% Recyclable FSC certified']
  },
  {
    id: 'regular-slotted-carton',
    slug: 'regular-slotted-carton',
    name: 'Regular Slotted Carton (RSC)',
    category: 'corrugated-boxes',
    subcategory: 'Standard Shipping Boxes',
    tagline: 'The universal standard for master freight shipping and bulk transit.',
    description: 'All flaps have the same length and outer flaps meet at the center for quick taping. Maximum strength and raw material efficiency for palletizing and transport.',
    image: '/images/packaging/corrugated-rsc.jpg',
    moq: 100,
    leadTime: '6-9 Business Days',
    basePriceUSD: 0.95,
    pricingMode: 'INSTANT_ESTIMATE',
    defaultDimensions: { length: 14, width: 10, height: 10, unit: 'inch' },
    allowedMaterials: ['b-flute-kraft', 'c-flute-kraft', 'double-wall-bc'],
    allowedFinishes: ['matte-varnish', 'single-color-flexo', 'custom-labels'],
    applications: ['Master Freight Shipping', 'Warehouse Palletizing', 'Bulk Distribution', 'Industrial Parts'],
    features: ['High stacking strength', 'Most economical corrugated format', 'Custom ECT strength ratings']
  },
  {
    id: 'die-cut-product-box',
    slug: 'die-cut-product-box',
    name: 'Die-Cut Corrugated Product Box',
    category: 'corrugated-boxes',
    subcategory: 'Product Boxes',
    tagline: 'Custom engineered corrugated box designed for retail shelf and display.',
    description: 'Precision die-cut corrugated boxes featuring unique fold patterns, built-in handles, or tear-away perforated header cards for retail display shelves.',
    image: '/images/packaging/corrugated-product-box.jpg',
    moq: 250,
    leadTime: '8-12 Business Days',
    basePriceUSD: 1.45,
    pricingMode: 'INSTANT_ESTIMATE',
    defaultDimensions: { length: 8, width: 6, height: 6, unit: 'inch' },
    allowedMaterials: ['e-flute-white', 'b-flute-white', 'e-flute-kraft'],
    allowedFinishes: ['matte-varnish', 'gloss-varnish', 'spot-uv', 'dual-print'],
    applications: ['Retail Electronics', 'Bottled Beverages', 'Kitchenware', 'Tools & Hardware'],
    features: ['Custom structural contours', 'Clean crisp fold lines', 'High graphic print fidelity']
  },
  {
    id: 'corrugated-tray-inserts',
    slug: 'corrugated-tray-inserts',
    name: 'Corrugated Tray with Dividers',
    category: 'corrugated-boxes',
    subcategory: 'Specialty Corrugated',
    tagline: 'Compartmentalized corrugated base for multiple jars, cans, or components.',
    description: 'Heavy fluted tray with precision interlocking corrugated dividers to eliminate glass-on-glass contact and protect fragile items in transport.',
    image: '/images/packaging/corrugated-tray-dividers.jpg',
    moq: 100,
    leadTime: '6-9 Business Days',
    basePriceUSD: 1.10,
    pricingMode: 'INSTANT_ESTIMATE',
    defaultDimensions: { length: 12, width: 9, height: 4, unit: 'inch' },
    allowedMaterials: ['b-flute-kraft', 'e-flute-kraft', 'b-flute-white'],
    allowedFinishes: ['matte-varnish', 'die-cut-partitions'],
    applications: ['Wine & Spirits', 'Gourmet Jars', 'Candle Sets', 'Component Kits'],
    features: ['Shock absorbing partitions', 'Easy drop-in loading', 'Reinforced edge walls']
  },

  // ================= RIGID BOXES =================
  {
    id: 'magnetic-closure-rigid',
    slug: 'magnetic-closure-rigid',
    name: 'Magnetic Closure Rigid Box',
    category: 'rigid-boxes',
    subcategory: 'Magnetic',
    tagline: 'Book-style flip top with hidden neodymium magnetic snap.',
    description: 'The gold standard in luxury unboxing. Constructed from 1.5mm–3.0mm solid greyboard wrapped in fine coated paper, linen, or soft-touch velvet with concealed magnets in the front flap.',
    image: '/images/rigid/magnetic.jpg',
    moq: 250,
    leadTime: '10-14 Business Days',
    basePriceUSD: 3.80,
    pricingMode: 'INSTANT_ESTIMATE',
    defaultDimensions: { length: 8, width: 6, height: 3, unit: 'inch' },
    allowedMaterials: ['greyboard-1.5mm', 'greyboard-2.0mm', 'greyboard-2.5mm', 'greyboard-3.0mm'],
    allowedFinishes: ['soft-touch', 'gold-foil', 'silver-foil', 'custom-foil', 'spot-uv', 'emboss', 'deboss', 'eva-foam-insert'],
    applications: ['Luxury Skincare', 'High-End Electronics', 'PR & Influencer Kits', 'Prestige Spirits'],
    features: ['Concealed magnetic click', 'Ultra-thick solid greyboard', 'Full interior and exterior branding']
  },
  {
    id: 'two-piece-rigid-box',
    slug: 'two-piece-rigid-box',
    name: 'Two-Piece Lift-Off Lid Box',
    category: 'rigid-boxes',
    subcategory: 'Lid & Base',
    tagline: 'Classic telescoping lid and base setup with smooth air-release resistance.',
    description: 'Timeless rigid construction where the lid slides over the base with a smooth, controlled vacuum glide. Ideal for retail footwear, luxury apparel, and gift hampers.',
    image: '/images/rigid/two-piece.jpg',
    moq: 250,
    leadTime: '10-12 Business Days',
    basePriceUSD: 3.20,
    pricingMode: 'INSTANT_ESTIMATE',
    defaultDimensions: { length: 9, width: 7, height: 3.5, unit: 'inch' },
    allowedMaterials: ['greyboard-1.5mm', 'greyboard-2.0mm', 'greyboard-2.5mm'],
    allowedFinishes: ['matte-lam', 'gloss-lam', 'soft-touch', 'gold-foil', 'silver-foil', 'emboss', 'spot-uv'],
    applications: ['Footwear & Leather Goods', 'Apparel & Knitwear', 'Chocolates & Confections', 'Board Games'],
    features: ['Full or partial telescoping lid', 'Reinforced rigid corners', 'Sturdy keepsake construction']
  },
  {
    id: 'shoulder-neck-rigid',
    slug: 'shoulder-neck-rigid',
    name: 'Shoulder & Neck Luxury Box',
    category: 'rigid-boxes',
    subcategory: 'Shoulder',
    tagline: 'Three-piece structure with an exposed metallic collar neck.',
    description: 'An inner neck tray extends between the base and lid, creating a striking contrasting visual band—typically finished in reflective metallic gold, silver, or custom brand accents.',
    image: '/images/rigid/shoulder-neck.jpg',
    moq: 250,
    leadTime: '12-15 Business Days',
    basePriceUSD: 4.50,
    pricingMode: 'INSTANT_ESTIMATE',
    defaultDimensions: { length: 6, width: 6, height: 8, unit: 'inch' },
    allowedMaterials: ['greyboard-2.0mm', 'greyboard-2.5mm', 'greyboard-3.0mm'],
    allowedFinishes: ['soft-touch', 'gold-foil', 'silver-foil', 'metallic-collar', 'emboss', 'eva-foam-insert'],
    applications: ['Fine Jewelry & Watches', 'Luxury Fragrance & Perfume', 'High-End Spirits', 'Ceremonial Gifts'],
    features: ['Exposed metallic neck collar', 'Flush lid & base alignment', 'Ultra-weighty premium feel']
  },
  {
    id: 'drawer-rigid-box',
    slug: 'drawer-rigid-box',
    name: 'Slide Drawer / Matchbox Box',
    category: 'rigid-boxes',
    subcategory: 'Drawer',
    tagline: 'Outer rigid sleeve encasing an inner tray with satin ribbon pull.',
    description: 'An outer rigid shell housing an inner sliding tray that glides out effortlessly using a satin, grosgrain, or leather pull tab. Ideal for jewelry, card decks, and cosmetic palettes.',
    image: '/images/rigid/slide-drawer.jpg',
    moq: 250,
    leadTime: '10-13 Business Days',
    basePriceUSD: 3.60,
    pricingMode: 'INSTANT_ESTIMATE',
    defaultDimensions: { length: 7, width: 5, height: 2, unit: 'inch' },
    allowedMaterials: ['greyboard-1.5mm', 'greyboard-2.0mm', 'greyboard-2.5mm'],
    allowedFinishes: ['soft-touch', 'gold-foil', 'silver-foil', 'spot-uv', 'ribbon-pull', 'eva-foam-insert'],
    applications: ['Jewelry & Accessories', 'Cosmetic Palettes', 'Stationery & Cards', 'Luxury Candles'],
    features: ['Satin or grosgrain ribbon tab', 'Snug friction slide fit', 'Keepsake drawer utility']
  },
  {
    id: 'collapsible-magnetic-box',
    slug: 'collapsible-magnetic-box',
    name: 'Foldable / Collapsible Magnetic Box',
    category: 'rigid-boxes',
    subcategory: 'Magnetic',
    tagline: 'Luxury rigid box that ships flat to reduce international freight by 75%.',
    description: 'Engineered with hidden magnetic corners and adhesive tabs. Ships completely flat to slash shipping and warehousing costs, then pops into a solid rigid box in under 3 seconds.',
    image: '/images/rigid/collapsible.jpg',
    moq: 250,
    leadTime: '12-15 Business Days',
    basePriceUSD: 4.10,
    pricingMode: 'INSTANT_ESTIMATE',
    defaultDimensions: { length: 11, width: 8.5, height: 4, unit: 'inch' },
    allowedMaterials: ['greyboard-2.0mm', 'greyboard-2.5mm'],
    allowedFinishes: ['soft-touch', 'gold-foil', 'silver-foil', 'spot-uv', 'emboss'],
    applications: ['International E-Commerce', 'Apparel & Fashion', 'Corporate Gift Sets', 'Subscription Kits'],
    features: ['Saves 75% shipping volume', '3-second instant assembly', 'Reinforced magnetic corners']
  },
  {
    id: 'custom-insert-rigid-box',
    slug: 'custom-insert-rigid-box',
    name: 'Rigid Box with Custom Laser-Cut Foam',
    category: 'rigid-boxes',
    subcategory: 'Book Style & Specialty',
    tagline: 'Precision high-density EVA foam or velvet bed tailored to your items.',
    description: 'A heavy solid rigid setup box paired with laser die-cut high-density EVA foam or molded paper pulp cushions tailored to the exact millimeter of your product.',
    image: '/images/rigid/custom-foam.jpg',
    moq: 250,
    leadTime: '12-15 Business Days',
    basePriceUSD: 4.90,
    pricingMode: 'INSTANT_ESTIMATE',
    defaultDimensions: { length: 10, width: 7, height: 3, unit: 'inch' },
    allowedMaterials: ['greyboard-2.0mm', 'greyboard-2.5mm', 'greyboard-3.0mm'],
    allowedFinishes: ['soft-touch', 'gold-foil', 'spot-uv', 'eva-foam-insert', 'velvet-flocking'],
    applications: ['Fragile Glassware & Perfume', 'Medical Devices', 'Electronics & Hardware', 'Multi-Piece Sets'],
    features: ['Laser die-cut product cavities', 'Zero item rattle or damage', 'Velvet or satin top lining']
  },

  // ================= PAPER BAGS =================
  {
    id: 'twisted-handle-paper-bag',
    slug: 'twisted-handle-paper-bag',
    name: 'Twisted Handle Kraft Bag',
    category: 'paper-bags',
    subcategory: 'Retail Shopping Bags',
    tagline: 'Classic retail shopping bag with machine-twisted paper loop handles.',
    description: 'The quintessential retail carrier bag. Made from durable 120–150gsm natural brown or bleached white kraft paper with sturdy twisted paper cord handles glued securely under a reinforced top fold.',
    image: '/images/packaging/bag-twisted-handle.jpg',
    moq: 500,
    leadTime: '7-10 Business Days',
    basePriceUSD: 0.42,
    pricingMode: 'INSTANT_ESTIMATE',
    defaultDimensions: { length: 8, width: 4.5, height: 10.5, unit: 'inch' },
    allowedMaterials: ['kraft-paper-120', 'kraft-paper-150', 'white-kraft-130', 'recycled-kraft-140'],
    allowedFinishes: ['matte-lam', 'gloss-lam', 'spot-uv', 'gold-foil', 'silver-foil'],
    applications: ['Apparel & Fashion', 'Department Stores', 'Gift Shops', 'Event Merchandise'],
    features: ['Reinforced top turn-over collar', 'Strong twisted paper cord handles', '100% Recyclable & Biodegradable']
  },
  {
    id: 'luxury-ribbon-handle-bag',
    slug: 'luxury-ribbon-handle-bag',
    name: 'Luxury Ribbon Handle Euro-Tote',
    category: 'paper-bags',
    subcategory: 'Luxury Euro-Totes',
    tagline: 'High-caliper art card shopping tote with soft satin or grosgrain ribbon handles.',
    description: 'Prestige packaging for luxury fashion, cosmetics, and jewelry. Crafted from 210–250gsm heavyweight coated art card with top and bottom reinforcement cardboards and elegant satin ribbon handles.',
    image: '/images/packaging/bag-ribbon-handle.jpg',
    moq: 250,
    leadTime: '9-12 Business Days',
    basePriceUSD: 0.95,
    pricingMode: 'INSTANT_ESTIMATE',
    defaultDimensions: { length: 10, width: 4, height: 13, unit: 'inch' },
    allowedMaterials: ['art-card-210', 'art-card-250', 'white-kraft-160'],
    allowedFinishes: ['matte-lam', 'gloss-lam', 'soft-touch', 'gold-foil', 'silver-foil', 'emboss', 'spot-uv'],
    applications: ['High-End Fashion Boutiques', 'Fine Jewelry', 'Luxury Cosmetics', 'VIP Corporate Events'],
    features: ['Wide satin or grosgrain ribbon handles', 'Reinforced top rim & base insert card', 'Velveteen soft-touch or matte lamination']
  },
  {
    id: 'flat-handle-paper-bag',
    slug: 'flat-handle-paper-bag',
    name: 'Flat Handle Kraft Paper Bag',
    category: 'paper-bags',
    subcategory: 'Retail Shopping Bags',
    tagline: 'Economical high-volume kraft paper bag with folded flat paper tape handles.',
    description: 'Designed for high-traffic retail, bakeries, cafes, and gourmet takeaway. Strong folded flat paper handles provide comfortable grip and maximum load capacity for daily carry.',
    image: '/images/packaging/bag-flat-handle.jpg',
    moq: 500,
    leadTime: '6-9 Business Days',
    basePriceUSD: 0.35,
    pricingMode: 'INSTANT_ESTIMATE',
    defaultDimensions: { length: 10, width: 5, height: 12, unit: 'inch' },
    allowedMaterials: ['kraft-paper-120', 'recycled-kraft-140', 'white-kraft-130'],
    allowedFinishes: ['matte-lam', 'gloss-lam'],
    applications: ['Cafes & Bakeries', 'Gourmet Food', 'Grocery Stores', 'Bookstores & Markets'],
    features: ['Flat tape comfort grip handles', 'High weight capacity', 'High-speed automated production']
  },
  {
    id: 'rope-handle-paper-bag',
    slug: 'rope-handle-paper-bag',
    name: 'Cotton Rope Handle Paper Bag',
    category: 'paper-bags',
    subcategory: 'Luxury Euro-Totes',
    tagline: 'Boutique paper carrier with thick knotted braided cotton or PP cord handles.',
    description: 'A timeless boutique classic. Premium cardstock bag fitted with thick braided cotton cord handles, reinforced eyelets, and crisp gussets for a clean, upright presentation.',
    image: '/images/packaging/bag-rope-handle.jpg',
    moq: 250,
    leadTime: '8-11 Business Days',
    basePriceUSD: 0.88,
    pricingMode: 'INSTANT_ESTIMATE',
    defaultDimensions: { length: 9, width: 3.5, height: 11, unit: 'inch' },
    allowedMaterials: ['art-card-210', 'art-card-250', 'white-kraft-160', 'kraft-paper-150'],
    allowedFinishes: ['matte-lam', 'gloss-lam', 'soft-touch', 'gold-foil', 'silver-foil', 'emboss'],
    applications: ['Designer Boutiques', 'Perfumeries', 'Footwear & Accessories', 'Gift Stores'],
    features: ['Knotted soft braided cotton cords', 'Reinforced metal or punch eyelets', 'Heavyweight structural stability']
  }
];

export const MATERIALS: MaterialOption[] = [
  // Folding Cartons
  { id: 'sbs-16pt', name: '16pt Solid Bleached Sulfate (SBS)', category: 'folding-cartons', costMultiplier: 1.0, minGsmOrFlute: '300gsm', isPopular: true },
  { id: 'sbs-18pt', name: '18pt Solid Bleached Sulfate (SBS)', category: 'folding-cartons', costMultiplier: 1.08, minGsmOrFlute: '350gsm', isPopular: true },
  { id: 'sbs-24pt', name: '24pt Heavy SBS Cardstock', category: 'folding-cartons', costMultiplier: 1.20, minGsmOrFlute: '450gsm' },
  { id: 'kraft-paperboard', name: '100% Recycled Natural Kraft Board', category: 'folding-cartons', costMultiplier: 0.95, minGsmOrFlute: '320gsm', isPopular: true },
  { id: 'ccnb-board', name: 'Clay Coated Newsback (CCNB)', category: 'folding-cartons', costMultiplier: 0.90, minGsmOrFlute: '350gsm' },

  // Corrugated
  { id: 'e-flute-kraft', name: 'E-Flute Kraft Corrugated (1/16")', category: 'corrugated-boxes', costMultiplier: 0.95, minGsmOrFlute: 'E-Flute 32ECT', isPopular: true },
  { id: 'e-flute-white', name: 'E-Flute Bleached White Corrugated', category: 'corrugated-boxes', costMultiplier: 1.05, minGsmOrFlute: 'E-Flute 32ECT', isPopular: true },
  { id: 'b-flute-kraft', name: 'B-Flute Kraft Shipping Corrugate (1/8")', category: 'corrugated-boxes', costMultiplier: 1.0, minGsmOrFlute: 'B-Flute 32ECT', isPopular: true },
  { id: 'b-flute-white', name: 'B-Flute Premium White Corrugated', category: 'corrugated-boxes', costMultiplier: 1.10, minGsmOrFlute: 'B-Flute 32ECT' },
  { id: 'c-flute-kraft', name: 'C-Flute Heavy Transit Corrugate (3/16")', category: 'corrugated-boxes', costMultiplier: 1.15, minGsmOrFlute: 'C-Flute 44ECT' },
  { id: 'double-wall-bc', name: 'Heavy Duty Double Wall (B+C Flute)', category: 'corrugated-boxes', costMultiplier: 1.40, minGsmOrFlute: 'BC-Flute 51ECT' },

  // Rigid Boxes
  { id: 'greyboard-1.5mm', name: '1.5mm (1000gsm) Rigid Greyboard', category: 'rigid-boxes', costMultiplier: 1.0, minGsmOrFlute: '1.5mm Solid Chipboard', isPopular: true },
  { id: 'greyboard-2.0mm', name: '2.0mm (1400gsm) Heavy Greyboard', category: 'rigid-boxes', costMultiplier: 1.15, minGsmOrFlute: '2.0mm Solid Chipboard', isPopular: true },
  { id: 'greyboard-2.5mm', name: '2.5mm (1800gsm) Ultra-Rigid Board', category: 'rigid-boxes', costMultiplier: 1.28, minGsmOrFlute: '2.5mm Solid Chipboard' },
  { id: 'greyboard-3.0mm', name: '3.0mm (2200gsm) Presentation Board', category: 'rigid-boxes', costMultiplier: 1.45, minGsmOrFlute: '3.0mm Solid Chipboard' },

  // Paper Bags
  { id: 'kraft-paper-120', name: '120gsm Natural Brown Kraft Paper', category: 'paper-bags', costMultiplier: 0.90, minGsmOrFlute: '120gsm Kraft', isPopular: true },
  { id: 'kraft-paper-150', name: '150gsm Heavy Brown Kraft Paper', category: 'paper-bags', costMultiplier: 0.98, minGsmOrFlute: '150gsm Kraft', isPopular: true },
  { id: 'white-kraft-130', name: '130gsm Bleached White Kraft Paper', category: 'paper-bags', costMultiplier: 1.0, minGsmOrFlute: '130gsm White Kraft', isPopular: true },
  { id: 'white-kraft-160', name: '160gsm Heavy White Kraft Paper', category: 'paper-bags', costMultiplier: 1.08, minGsmOrFlute: '160gsm White Kraft' },
  { id: 'art-card-210', name: '210gsm Coated Art Cardboard', category: 'paper-bags', costMultiplier: 1.20, minGsmOrFlute: '210gsm Art Paper', isPopular: true },
  { id: 'art-card-250', name: '250gsm Luxury Heavyweight Art Card', category: 'paper-bags', costMultiplier: 1.35, minGsmOrFlute: '250gsm Art Paper', isPopular: true },
  { id: 'recycled-kraft-140', name: '140gsm 100% Recycled Eco-Kraft', category: 'paper-bags', costMultiplier: 0.92, minGsmOrFlute: '140gsm FSC Kraft' }
];

export const FINISHES: FinishingOption[] = [
  { id: 'matte-lam', name: 'Matte Lamination', tagline: 'Anti-glare protective smooth coating', category: 'coating', unitCostUSD: 0.15, isPremium: false },
  { id: 'gloss-lam', name: 'Gloss Lamination', tagline: 'Vibrant reflective high-shine finish', category: 'coating', unitCostUSD: 0.15, isPremium: false },
  { id: 'soft-touch', name: 'Velvet Soft-Touch Lamination', tagline: 'Ultra-matte velvety peach-skin feel', category: 'tactile', unitCostUSD: 0.30, isPremium: true },
  { id: 'spot-uv', name: 'Spot UV Gloss', tagline: 'High-gloss polymer cured over logos', category: 'coating', unitCostUSD: 0.35, isPremium: true },
  { id: 'gold-foil', name: 'Hot Gold Foil Stamping', tagline: 'Metallic reflective gold heat bonded', category: 'foil', unitCostUSD: 0.40, isPremium: true },
  { id: 'silver-foil', name: 'Hot Silver Foil Stamping', tagline: 'Metallic chrome silver heat stamped', category: 'foil', unitCostUSD: 0.40, isPremium: true },
  { id: 'custom-foil', name: 'Custom Foil (Rose Gold / Holographic)', tagline: 'Specialty colored metallic foil', category: 'foil', unitCostUSD: 0.48, isPremium: true },
  { id: 'emboss', name: '3D Embossing', tagline: 'Raised dimensional relief without ink', category: 'tactile', unitCostUSD: 0.35, isPremium: true },
  { id: 'deboss', name: '3D Debossing', tagline: 'Indented deep impression into board', category: 'tactile', unitCostUSD: 0.35, isPremium: true },
  { id: 'window-patch', name: 'Clear PET Window Patch', tagline: 'Transparent product display window', category: 'structural', unitCostUSD: 0.25, isPremium: false },
  { id: 'eva-foam-insert', name: 'Custom Laser-Cut EVA Foam', tagline: 'Precision fitted high-density foam insert', category: 'insert', unitCostUSD: 0.95, isPremium: true },
  { id: 'cardboard-insert', name: 'Die-Cut Cardboard Insert', tagline: 'Folded paperboard product divider', category: 'insert', unitCostUSD: 0.35, isPremium: false }
];

export const INDUSTRIES_LIST = [
  { id: 'beauty-cosmetics', name: 'Beauty & Cosmetics', description: 'Luxury skincare cartons, perfume rigid boxes, and cosmetic sleeves with soft-touch and foil.' },
  { id: 'food-beverage', name: 'Food & Beverage', description: 'FDA-compliant bleached card cartons, bakery boxes, and confectionery presentation packaging.' },
  { id: 'jewelry-watches', name: 'Jewelry & Watches', description: 'High-caliper shoulder-neck and magnetic rigid boxes with plush velvet and EVA cushions.' },
  { id: 'fashion-apparel', name: 'Fashion & Apparel', description: 'E-commerce corrugated mailers, luxury flat-pack magnetic boxes, and retail garment packaging.' },
  { id: 'pharmaceutical', name: 'Pharmaceutical & Health', description: 'High-resolution tamper-evident reverse tuck cartons and medicine paperboard packaging.' },
  { id: 'electronics-tech', name: 'Electronics & Hardware', description: 'Anti-static, crush-resistant corrugated and rigid slide-drawer packaging with shock absorption.' },
  { id: 'ecommerce-d2c', name: 'E-Commerce & Subscriptions', description: 'Self-locking roll-end corrugated mailers and branded subscription unboxing kits.' },
  { id: 'luxury-gifts', name: 'Luxury & Gifts', description: 'Bespoke rigid presentation boxes, magnetic keepsake boxes, and foil-stamped corporate gifts.' }
];
