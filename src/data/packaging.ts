export interface PackagingSolution {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  materialTypes: string[];
  structures: string[];
  recommendedIndustries: string[];
  finishes: string[];
}

export const PACKAGING_SOLUTIONS: PackagingSolution[] = [
  {
    id: "bleach-card-boxes",
    slug: "bleach-card-boxes",
    name: "Custom Bleach Card Boxes",
    tagline: "Ultra-pure white Solid Bleached Sulphate (SBS) cardstock for premium retail.",
    description: "Engineered from virgin bleach card fibers with a smooth, bright white surface on both sides. Ideal for luxury cosmetics, baby care, pharmaceuticals, and high-end retail products requiring vivid color fidelity and sharp folding lines.",
    image: "/images/packaging/folding-straight-tuck.jpg",
    materialTypes: ["300gsm - 400gsm Virgin Bleach Card (SBS)", "Food-Safe Bleached Board", "Cast-Coated Bleach Board"],
    structures: ["Straight Tuck End (STE)", "Reverse Tuck End (RTE)", "Auto-Lock Bottom", "Custom Die-Cut Windows"],
    recommendedIndustries: ["Beauty & Cosmetics", "Healthcare & Medical", "Baby & Mother Care", "Gifting & Retail"],
    finishes: ["Golden Panni (Gold Foil)", "Multi-Color Foiling", "Soft-Touch Matte Lamination", "Spot UV", "Embossing"]
  },
  {
    id: "box-board-boxes",
    slug: "box-board-boxes",
    name: "Box Board / Duplex Cartons",
    tagline: "Sturdy, cost-effective folding cartons with outstanding rigidity and structural integrity.",
    description: "Versatile duplex box board (white-back or grey-back) designed for medium-to-heavy retail items, food packaging, and industrial products that require dependable strength without unnecessary weight.",
    image: "/images/packaging/folding-auto-bottom.jpg",
    materialTypes: ["300gsm - 450gsm Duplex Box Board", "Grey-Back Folding Board", "White-Back Folding Board"],
    structures: ["Crash-Lock Bottom", "Hinged Lid Clamshell", "Reverse Tuck Box", "Sliding Sleeve & Tray"],
    recommendedIndustries: ["Food & Confectionery", "Industrial & Hardware", "Automotive Parts", "General Retail"],
    finishes: ["Food-Grade Barrier Coating", "Gloss / Matte Varnish", "Protective Scuff-Resistant Coating"]
  },
  {
    id: "rigid-boxes",
    slug: "rigid-boxes",
    name: "Luxury Rigid Setup Boxes",
    tagline: "Heavy-gauge structured boxes for prestigious unboxing experiences and fragile protection.",
    description: "Built with non-collapsing dense greyboard wrapped in fine paper sheets. Offers unparalleled physical heft, sharp 90-degree corners, and an unforgettable tactile feel for high-value products.",
    image: "/images/rigid/two-piece.jpg",
    materialTypes: ["1000gsm - 1800gsm Heavy Solid Greyboard", "157gsm Coated Art Paper Wrap", "Textured Specialty Wrap"],
    structures: ["Two-Piece Lift-Off Lid", "Magnetic Flip-Top Flap", "Shoulder & Neck Collar", "Slide Drawer with Ribbon Pull"],
    recommendedIndustries: ["Luxury & Fragrance", "Medical & Injection Kits", "Fine Jewelry", "High-End Electronics"],
    finishes: ["Golden Panni (Gold Foil Stamping)", "Multi-Color Foil Stamping", "Velvet EVA Cavity Inserts", "Deep Blind Embossing"]
  },
  {
    id: "paper-bags",
    slug: "paper-bags",
    name: "Custom Presentation Bags",
    tagline: "Tailored paper bags with custom handles for retail, events, and medical presentations.",
    description: "High-grade art paper and kraft carrier bags featuring reinforced bottom boards, turned tops, and custom rope, ribbon, or die-cut handles.",
    image: "/images/packaging/paper-bags.jpg",
    materialTypes: ["170gsm - 250gsm Coated Art Paper", "Reinforced Kraft Board", "Cardboard Base Stiffeners"],
    structures: ["Turned-Top Rope Handle", "Satin Ribbon Handle", "Die-Cut Handle", "Twisted Paper Handle"],
    recommendedIndustries: ["Healthcare & Pharmaceuticals", "Luxury Retail", "Boutique Cosmetics", "Corporate Gifting"],
    finishes: ["Matte Lamination", "Metallic Foil Stamping", "Spot Gloss Highlights", "Custom Eyelets"]
  },
  {
    id: "corrugated-boxes",
    slug: "corrugated-boxes",
    name: "Corrugated Product & Shipping Boxes",
    tagline: "Cushioned fluted corrugated cartons engineered for transit protection and mailer presentation.",
    description: "Fluted cardboard structures engineered to protect items against compression, impacts, and warehouse handling while presenting a clean, branded exterior.",
    image: "/images/packaging/corrugated-boxes.jpg",
    materialTypes: ["E-Flute (Fine Micro-Flute)", "B-Flute (Standard Cushion)", "C-Flute (Heavy Duty)"],
    structures: ["Die-Cut Self-Locking Mailer", "Regular Slotted Carton (RSC)", "Tray with Internal Partitions"],
    recommendedIndustries: ["E-Commerce", "Hardware & Machinery", "Bulk Food Distribution", "Apparel Delivery"],
    finishes: ["Flexographic & High-Graphic Offset Litho-Lamination", "Protective Matte Varnish"]
  },
  {
    id: "custom-structures",
    slug: "custom-structures",
    name: "Custom Structural Packaging",
    tagline: "Bespoke die-lines and internal cavity inserts engineered around unique product geometries.",
    description: "When standard box styles do not fit, our team develops tailored structural packaging with custom die-cut windows, internal bottle holders, multi-compartment dividers, and custom closures.",
    image: "/images/rigid/custom-foam.jpg",
    materialTypes: ["Laser-Cut EVA Foam", "Molded Pulp / Paperboard Dividers", "Clear PET Windows", "Reinforced Greyboard"],
    structures: ["Multi-Tier Compartments", "Custom Cutout Trays", "Book-Fold Setup", "Hexagonal & Distinctive Geometries"],
    recommendedIndustries: ["Baby Care (Feeder/Pump Kits)", "Healthcare (Vials/Ampoules)", "Fragrance Flacons", "Multi-Item Gift Sets"],
    finishes: ["Precision Laser Scoring", "Foil Stamped Flaps", "Custom Soft Foam Lining"]
  }
];
