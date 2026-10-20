export interface IndustrySector {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  keyPackagingNeeds: string[];
  recommendedMaterials: string[];
  recommendedFinishes: string[];
  relatedProjects: string[];
}

export const REAL_INDUSTRIES: IndustrySector[] = [
  {
    id: "cosmetics-beauty",
    slug: "cosmetics-beauty",
    name: "Cosmetics & Beauty",
    tagline: "Flawless Bleach Card cartons with Golden Panni and vibrant foil accents for skincare and beauty.",
    description: "Beauty packaging demands precision. From facial serum cartons to makeup compact boxes, we craft pristine Bleach Card packaging finished with velvet lamination, crisp embossing, and metallic foiling.",
    keyPackagingNeeds: ["Flawless pure-white SBS surface", "High-contrast foil lettering", "Fingerprint-resistant matte touch", "Tight tuck closure"],
    recommendedMaterials: ["Virgin Bleach Card (SBS 350gsm)", "Rigid Setup Greyboard"],
    recommendedFinishes: ["Golden Panni (Gold Foil Stamping)", "Multi-Color Foiling", "Soft-Touch Matte Lamination", "Spot UV"],
    relatedProjects: ["onlia-cosmetics", "aster-cosmetics"]
  },
  {
    id: "food-confectionery",
    slug: "food-confectionery",
    name: "Food & Confectionery",
    tagline: "Food-safe Box Board and Bleach Card cartons engineered for pastries, pasta, and gourmet goods.",
    description: "Whether packaging dry pasta, bakery pastries, or confectionery treats, our packaging provides structural rigidity, grease/moisture barrier protection, and quick-assembly auto-bottom mechanisms.",
    keyPackagingNeeds: ["Food-grade compliance", "Load-bearing auto-lock bottoms", "Grease & moisture resistance", "Rapid filling line foldability"],
    recommendedMaterials: ["Food-Grade Box Board (350-400gsm)", "White-Back Bleached Board"],
    recommendedFinishes: ["Food-Safe Barrier Coating", "Matte/Gloss Varnish", "Die-Cut Interlocking Tabs"],
    relatedProjects: ["brunos-pasta", "dezato-food-boxes"]
  },
  {
    id: "healthcare-medical",
    slug: "healthcare-medical",
    name: "Healthcare & Medical",
    tagline: "Rigid setup boxes with custom vial beds, clinical folding cartons, and carrier presentation bags.",
    description: "Medical and pharmaceutical packaging requires absolute hygiene, zero-tolerance dimension accuracy, and shock absorption for glass ampoules, vials, and clinical diagnostic sets.",
    keyPackagingNeeds: ["Shock-absorbing cavity inserts", "Tamper-evident tuck locks", "Clean clinical color printing", "Sturdy presentation bags"],
    recommendedMaterials: ["Rigid Greyboard (1200-1500gsm)", "Virgin Bleach Card (350gsm)", "Reinforced Art Paper Carrier Bags"],
    recommendedFinishes: ["Matte Lamination", "Laser-Cut EVA Foam Cavities", "Foil Security Badges"],
    relatedProjects: ["shifa-labs"]
  },
  {
    id: "baby-care",
    slug: "baby-care",
    name: "Baby & Mother Care",
    tagline: "Hygienic, clear-window Bleach Card packaging for baby feeders, silicone nipples, and maternal pumps.",
    description: "Parents demand trust and visual clarity. We produce clean, BPA-free compliant Bleach Card retail cartons with crystal-clear PET windows for feeding bottles, pacifiers, and maternal breast pump systems.",
    keyPackagingNeeds: ["Clear product inspection windows", "Reinforced bottom to hold bottle weight", "Vibrant, family-friendly color reproduction", "Hygienic sealed flaps"],
    recommendedMaterials: ["Virgin Bleach Card (SBS 350-400gsm)", "Clear PET Window Film"],
    recommendedFinishes: ["Protective Gloss Lamination", "Precision Window Die-Cutting", "Auto-Bottom Locking"],
    relatedProjects: ["maq-baby-care"]
  },
  {
    id: "industrial-hardware",
    slug: "industrial-hardware",
    name: "Industrial & Hardware",
    tagline: "Heavyweight Box Board cartons engineered to hold dense steel bearings and mechanical components.",
    description: "Heavy mechanical parts, bearings, and hardware require robust, oil-resistant Box Board cartons that maintain their structural shape in warehouses and on service shelves.",
    keyPackagingNeeds: ["High caliper board for heavy weight", "Oil & grease resistance", "Reinforced double-scored edges", "High-contrast part labeling"],
    recommendedMaterials: ["Heavy-Caliper Duplex Box Board (400gsm)", "Fluted Corrugated Cartons"],
    recommendedFinishes: ["Scuff-Resistant Varnish", "High-Pressure Creasing"],
    relatedProjects: ["maryam-bearing-boxes"]
  },
  {
    id: "luxury-fragrance",
    slug: "luxury-fragrance",
    name: "Luxury & Fragrance",
    tagline: "Bespoke rigid setup boxes embellished with Golden Panni for artisanal perfume flacons.",
    description: "Fragrances require high drama and protective elegance. We construct dense rigid setup boxes with collar necks, magnetic closures, and opulent Golden Panni foil stamping.",
    keyPackagingNeeds: ["High-heft rigid structure", "Opulent metallic foil stamping", "Custom velvet-lined bottle cradles", "Seamless wrapped corners"],
    recommendedMaterials: ["1500gsm Heavy Greyboard", "Textured Matte Art Paper Wraps"],
    recommendedFinishes: ["Golden Panni (Gold Foil Stamping)", "Multi-Color Foils", "Blind Embossing", "Velvet Bottle Beds"],
    relatedProjects: ["perfume-rigid-boxes"]
  }
];
