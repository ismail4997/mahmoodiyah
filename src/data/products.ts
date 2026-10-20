export interface RigidBoxStyle {
  id: string;
  name: string;
  style: "magnetic" | "two-piece" | "shoulder-neck" | "drawer" | "collapsible" | "custom-insert";
  tagline: string;
  description: string;
  image: string;
  minOrderQty: number;
  leadTime: string;
  basePrice: number;
  bestFor: string;
  features: string[];
  materials: string[];
}

export const RIGID_BOXES: RigidBoxStyle[] = [
  {
    id: "magnetic-closure",
    name: "Magnetic Closure Rigid Box",
    style: "magnetic",
    tagline: "Book-style flip top with hidden magnetic snap.",
    description: "The gold standard for luxury unboxing. Features concealed neodymium magnets in the front flap for a satisfying click when opening and closing.",
    image: "/images/rigid/magnetic.jpg",
    minOrderQty: 250,
    leadTime: "10-12 Days",
    basePrice: 3.80,
    bestFor: "Luxury Skincare, Electronics, PR Kits, Premium Gifts",
    features: ["Concealed magnetic snap", "Soft-touch matte finish", "Full exterior & interior print"],
    materials: ["1200gsm - 1800gsm Heavy Greyboard", "157gsm Art Paper Wrap"]
  },
  {
    id: "two-piece-lid",
    name: "Two-Piece Lift-Off Lid Box",
    style: "two-piece",
    tagline: "Classic separate lid and base telescoping setup.",
    description: "Timeless, sturdy construction where the lid slides off the base with smooth air-release resistance. Ideal for retail shelves and unboxing.",
    image: "/images/rigid/two-piece.jpg",
    minOrderQty: 250,
    leadTime: "10-12 Days",
    basePrice: 3.20,
    bestFor: "Shoes, Apparel, Confectionery, Luxury Retail",
    features: ["Full or partial telescoping lid", "Reinforced corner seams", "Embossed / Foil stamped logo"],
    materials: ["1200gsm Solid Chipboard", "Textured Linen or Matte Wrap"]
  },
  {
    id: "shoulder-neck",
    name: "Shoulder & Neck Luxury Box",
    style: "shoulder-neck",
    tagline: "Elevated design with an exposed inner collar.",
    description: "An inner neck tray extends between the base and lid, creating a striking contrasting visual band—often finished in metallic gold, silver, or accent colors.",
    image: "/images/rigid/shoulder-neck.jpg",
    minOrderQty: 250,
    leadTime: "12-14 Days",
    basePrice: 4.50,
    bestFor: "Fine Jewelry, Watches, High-End Perfumes, Spirits",
    features: ["Metallic gold/silver exposed collar", "Flush-lid closure", "Ultra-thick premium feel"],
    materials: ["1500gsm Dense Greyboard", "Metallic Foil Collar Band"]
  },
  {
    id: "slide-drawer",
    name: "Slide Drawer / Matchbox Style",
    style: "drawer",
    tagline: "Smooth pull-out sleeve with ribbon tab.",
    description: "An outer rigid sleeve encasing an inner tray that slides open smoothly. Includes a satin or grosgrain ribbon pull for effortless access.",
    image: "/images/rigid/slide-drawer.jpg",
    minOrderQty: 250,
    leadTime: "10-12 Days",
    basePrice: 3.60,
    bestFor: "Cosmetics, Jewelry, Card Sets, Luxury Candles",
    features: ["Satin ribbon pull tab", "Snug glide fit", "Spot UV and Foil stamping"],
    materials: ["1200gsm Rigid Board", "Soft-Touch Matte Lamination"]
  },
  {
    id: "collapsible-magnetic",
    name: "Collapsible Flat-Pack Rigid Box",
    style: "collapsible",
    tagline: "Rigid luxury look that ships flat to save 75% on freight.",
    description: "Engineered with corner adhesive stickers or corner magnets. Ships 100% flat to minimize shipping and storage costs, then pops into a solid rigid box in seconds.",
    image: "/images/rigid/collapsible.jpg",
    minOrderQty: 250,
    leadTime: "12-14 Days",
    basePrice: 4.10,
    bestFor: "E-Commerce Luxury Brands, Apparel, Hampers",
    features: ["Saves 75% warehouse space", "Instant pop-up assembly", "Magnetic front flap closure"],
    materials: ["1400gsm Heavy Foldable Greyboard", "Reinforced Corner Tape"]
  },
  {
    id: "custom-insert-box",
    name: "Rigid Box with Precision Custom Foam",
    style: "custom-insert",
    tagline: "Tailored EVA foam or velvet cushions for a flawless fit.",
    description: "Heavy rigid box paired with laser-cut EVA foam, molded pulp, or satin-lined beds that securely cradle fragile glass bottles, tech, or multi-item sets.",
    image: "/images/rigid/custom-foam.jpg",
    minOrderQty: 250,
    leadTime: "12-14 Days",
    basePrice: 4.90,
    bestFor: "Fragile Perfume Bottles, Glass Jars, Tech Devices",
    features: ["Precision die-cut bottle cavities", "Velvet-topped high-density EVA", "Zero item rattle or damage"],
    materials: ["1500gsm Greyboard", "High-Density Black/White EVA Foam"]
  }
];
