export interface FinishOption {
  id: string;
  name: string;
  category: "foil" | "coating" | "tactile" | "structural";
  tagline: string;
  description: string;
  image: string;
  luxuryTier?: "Standard" | "Premium" | "Ultra Luxury";
  bestFor: string;
  bestPairedWith?: string;
}

export const FINISH_OPTIONS: FinishOption[] = [
  {
    id: "golden-panni-foil",
    name: "Golden Panni (Gold Foil Stamping)",
    category: "foil",
    luxuryTier: "Ultra Luxury",
    tagline: "Authentic high-luster metallic gold foil stamped with heated dies.",
    description: "Our signature Golden Panni foil stamping bonds brilliant metallic gold foil directly into the paperboard substrate under high pressure and heat, creating gleaming lettering and decorative crests with permanent luster.",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800",
    bestFor: "Luxury Perfumes, Premium Skincare, Gifting, Rigids",
    bestPairedWith: "Virgin Bleach Card & Dense Rigid Board"
  },
  {
    id: "multicolor-foiling",
    name: "Multi-Color Foil Stamping (Every Shade)",
    category: "foil",
    luxuryTier: "Ultra Luxury",
    tagline: "Vibrant metallic foils in Rose Gold, Silver, Copper, Holographic & Custom Shades.",
    description: "Expand beyond standard gold with our full spectrum of hot stamping foils. Perfect for color-coded cosmetics ranges, luxury retail accents, and modern high-contrast typography.",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=800",
    bestFor: "Color Cosmetics, Healthcare Badges, Boutique Retail",
    bestPairedWith: "Velvet Soft-Touch Lamination"
  },
  {
    id: "matte-gloss-lamination",
    name: "Matte & Gloss Protective Lamination",
    category: "coating",
    luxuryTier: "Premium",
    tagline: "Ultra-smooth velvet matte or crystal high-gloss protective films.",
    description: "Seals the printed ink against scuffs, water droplets, and handling abrasion while providing either a glare-free velvet soft-touch feel or a sparkling reflective high-gloss finish.",
    image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&q=80&w=800",
    bestFor: "Bleach Card Cartons, Baby Care, Skincare Boxes",
    bestPairedWith: "4-Color CMYK Offset Printing"
  },
  {
    id: "spot-uv-varnish",
    name: "Spot UV Gloss Coating",
    category: "coating",
    luxuryTier: "Premium",
    tagline: "Clear gloss polymer cured over selective areas for dramatic tactile contrast.",
    description: "Applied precisely over logos, graphic patterns, or typography over a matte background. Catches the light as the box tilts in the customer's hands.",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=800",
    bestFor: "Brand Logos, Pattern Accents, Retail Cartons",
    bestPairedWith: "Matte Black & Bleach Card Boxes"
  },
  {
    id: "embossing-debossing",
    name: "Precision Embossing & Debossing",
    category: "tactile",
    luxuryTier: "Ultra Luxury",
    tagline: "Dimensional 3D relief pressed into the paper stock.",
    description: "Elevates or indents your brand crest, typography, or textures into the board without adding ink. Delivers a tactile, understated luxury impression.",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&q=80&w=800",
    bestFor: "Cosmetic Cartons, Rigid Box Lids, Minimalist Branding",
    bestPairedWith: "Heavy Bleach Card & Rigid Box Lids"
  },
  {
    id: "custom-foam-inserts",
    name: "Precision Cavity Foam & Velvet Inserts",
    category: "structural",
    luxuryTier: "Ultra Luxury",
    tagline: "Custom-cut EVA foam beds and velvet cradles engineered to secure items.",
    description: "Laser-cut high-density EVA foam tailored to the exact millimeter dimensions of your bottles, injection vials, or delicate components, preventing movement and breakage.",
    image: "/images/rigid/custom-foam.jpg",
    bestFor: "Medical Vials, Perfume Flacons, Sensitive Kits",
    bestPairedWith: "Dense Rigid Setup Boxes"
  }
];
