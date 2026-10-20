export interface ProjectDetail {
  id: string;
  projectName: string;
  clientName: string;
  industry: string;
  packagingType: string;
  material: string;
  structure: string;
  dimensions?: string;
  printing: string;
  finishing: string;
  description: string;
  requirement: string;
  solution: string;
  images: string[];
  featured: boolean;
  tags: string[];
}

export const SELECTED_PROJECTS: ProjectDetail[] = [
  {
    id: "more-macaroni-pasta",
    projectName: "More Macaroni 7 Spice 2-in-1 Food Cartons",
    clientName: "More Macaroni / Brunos",
    industry: "Food & Beverage",
    packagingType: "Food-Grade Box Board Carton",
    material: "Food-Safe Duplex Box Board (350gsm) with Moisture Barrier",
    structure: "Auto-Lock Crash Bottom Carton with Easy-Fold Top Tuck Closure",
    dimensions: "Standard 250g retail profile fitted for dry macaroni pasta + inner spice sachet",
    printing: "4-Color High-Density CMYK Food-Safe Inks with Gold Wheat & Cooked Dish Accents",
    finishing: "Moisture-Resistant Matte Protective Coating, Clean Creasing, Sharp Dual-Language Typography",
    description: "Vibrant, shelf-stable food packaging developed for More Macaroni's 7 Spice Macaroni (250g, 2-in-1 Macaroni & Masala Mix included), featuring clear step-by-step cooking guides and nutritional disclosures.",
    requirement: "Dry pasta combined with an inner spice packet requires rigid structural sidewalls and a dependable crash-lock bottom to prevent bulging or bursting under weight during shipping and supermarket shelf stacking.",
    solution: "We manufactured high-caliper food-grade Box Board cartons with rapid-erect auto-bottom locks, sealed with a moisture-resistant protective coating to preserve carton crispness in all humidity conditions.",
    images: [
      "/images/projects/more-macaroni-box-front.jpg",
      "/images/projects/more-macaroni-box-back.jpg"
    ],
    featured: true,
    tags: ["Food & Beverage", "Pasta Boxes", "Macaroni", "Box Board", "Auto-Bottom", "Retail"]
  },
  {
    id: "rivaj-cosmetics",
    projectName: "Rivaj Aloe Vera Sheet Mask Hanging Retail Cartons",
    clientName: "Rivaj UK / Rivaj Cosmetics",
    industry: "Beauty & Skincare",
    packagingType: "Bleach Card Hanging Retail Carton",
    material: "Virgin Bleach Card (SBS 350gsm)",
    structure: "Hanging Envelope Carton with Die-Cut Euro-Slot & Bottom Flap Closure",
    dimensions: "Engineered for 3x 25ml multi-pack facial sheet mask sachets",
    printing: "Vibrant Botanical Green & Deep Forest Green 4-Color CMYK Offset Print",
    finishing: "Soft-Touch Velvet Matte Lamination, Precision Die-Cut Euro Slot, Clean Creasing",
    description: "Premium hanging retail packaging engineered for Rivaj UK's Aloe Vera Whitening Sheet Mask collection (3x25ml pack).",
    requirement: "Sheet mask multi-packs need a slim, space-saving hanging retail profile with a durable euro-slot punch that resists tearing on display pegs, paired with fresh botanical color reproduction.",
    solution: "We engineered high-density virgin SBS Bleach Card cartons featuring reinforced top tabs with precision euro-slots, finished with velvet soft-touch lamination to resist shelf wear and store lighting glare.",
    images: [
      "/images/projects/rivaj-aloe-vera-mask-front.jpg",
      "/images/projects/rivaj-aloe-vera-mask-angle.jpg"
    ],
    featured: true,
    tags: ["Bleach Card", "Rivaj", "Cosmetics", "Skincare", "Hanging Carton", "Euro-Slot"]
  },
  {
    id: "benson-automotive-packaging",
    projectName: "Benson Spark Plug & Bearing High-Strength Automotive Boxes",
    clientName: "Benson Automotive & Bearings",
    industry: "Industrial & Automotive",
    packagingType: "Heavy-Duty Box Board Cartons",
    material: "Heavy-Caliper Duplex Box Board (400gsm)",
    structure: "Straight & Reverse Tuck Industrial Carton with Reinforced Score Lines",
    dimensions: "Engineered for 4-pack / single spark plugs and precision ball bearings",
    printing: "Vibrant Royal Blue & High-Contrast Industrial Yellow Screen/Offset Print",
    finishing: "Oil & Scuff-Resistant Protective Varnish, High-Pressure Double Creasing",
    description: "Durable, high-visibility retail and workshop packaging engineered for Benson ultra-durable spark plugs, automotive components, and ball bearings.",
    requirement: "Automotive replacement parts require rugged packaging that withstands grease, mechanical vibration, and heavy warehouse stacking while featuring high-contrast part identification.",
    solution: "We produced rigid, heavy-caliper Box Board cartons with tight-tolerance corner seams and a protective scuff-resistant coating that repels workshop oils and maintains crisp corner geometry.",
    images: [
      "/images/projects/benson-spark-plug-angle.jpg",
      "/images/projects/benson-spark-plug-box.jpg",
      "/images/projects/benson-bearing-box.png"
    ],
    featured: true,
    tags: ["Box Board", "Automotive", "Industrial", "Spark Plug", "Bearings", "Heavy-Duty"]
  },
  {
    id: "dezato-cake-boxes",
    projectName: "Dezato Matilda & Melissa Cake Puddle Artisan Bakery Boxes",
    clientName: "Dezato by Murad",
    industry: "Food & Confectionery",
    packagingType: "Custom Food-Grade Folding Cartons",
    material: "Virgin Bleach Card (SBS 350-400gsm) with Food-Safe Barrier",
    structure: "Hinged Lid Takeaway Cake Box with Interlocking Corner Tabs",
    dimensions: "Engineered specifically to cradle individual molten cake puddle bowls securely",
    printing: "4-Color High-Saturation CMYK Inks (Vibrant Cherry Red & Royal Purple editions)",
    finishing: "Grease-Resistant Inner Barrier Coating, Velvet Matte Lamination, Precision Score Lines",
    description: "Distinctive, vibrant confectionery packaging created for Dezato's viral Matilda Chocolate Cake Puddle and Melissa Matcha/Pistachio Dessert range.",
    requirement: "Warm, molten cake puddles require packaging that insulates the dessert tub, resists dessert condensation, and keeps the tub upright during on-demand delivery while creating an unboxing spectacle on social media.",
    solution: "We engineered custom food-safe Bleach Card cartons with tight-tolerance creasing and interlocking tabs that lock the dessert bowl firmly in place, finished with bold editorial illustration printing and protective velvet matte coating.",
    images: [
      "/images/projects/dezato-matilda-cake-box.png",
      "/images/projects/dezato-cakes-duo.png"
    ],
    featured: true,
    tags: ["Food & Confectionery", "Bakery Boxes", "Bleach Card", "Takeaway", "Food-Safe"]
  },
  {
    id: "maq-baby-care",
    projectName: "MAQ Premium Feeder & Nipple Window Cartons",
    clientName: "MAQ Baby Care",
    industry: "Baby & Mother Care",
    packagingType: "Bleach Card Window Carton",
    material: "Virgin Bleach Card (SBS 350gsm)",
    structure: "Straight Tuck End Box with Clear PET Product Window & Auto-Lock Base",
    dimensions: "Custom-fitted for 240ml/120ml baby feeder bottle with handle clearance",
    printing: "4-Color High-Fidelity Offset Printing (CMYK)",
    finishing: "Protective Gloss & Matte Lamination, Precision Die-Cut Window, Crease Scoring",
    description: "Retail presentation packaging for MAQ's Premium Baby Feeder and silicone nipple range, featuring a transparent viewing window allowing parents to inspect bottle softness and ergonomic handles.",
    requirement: "MAQ required a clean, clinical yet friendly baby-care retail box with a secure front window allowing 180-degree product visibility while maintaining structural strength against transport crushing.",
    solution: "We engineered a virgin Bleach Card box with high-clarity PET window film bonded seamlessly to the inner flap, paired with reinforced bottom locks to hold the bottle weight securely on retail pharmacy shelves.",
    images: [
      "/images/projects/maq-feeder-box.png",
      "/images/packaging/folding-window-carton.jpg",
      "/images/packaging/folding-straight-tuck.jpg"
    ],
    featured: true,
    tags: ["Bleach Card", "Baby Care", "Window Box", "Retail Carton", "BPA Free"]
  },
  {
    id: "olina-24k-gold-glow",
    projectName: "Olina 24k Gold Glow Creme Bleach Luxury Packaging",
    clientName: "Olina Cosmetics",
    industry: "Beauty & Cosmetics",
    packagingType: "Bleach Card Sachet & Box with Golden Panni",
    material: "Virgin Bleach Card (SBS 350gsm)",
    structure: "Straight Tuck Cosmetic Carton & Sealed Retail Pouch Card",
    dimensions: "Standard unit and salon retail pack sizes",
    printing: "Deep Velvet Black & Multi-Color Photographic Skin Glow Offset Print",
    finishing: "Golden Panni (Authentic Gold Foil Stamping), Soft-Touch Matte Lamination, High-Gloss Spot Details",
    description: "Opulent cosmetic packaging developed for Olina's 24k Gold Glow Creme Bleach (Instant Skin Glow Gold-Oxide Action).",
    requirement: "The brand required rich, reflective gold embellishments against a deep jet-black background to communicate 24-karat gold luxury and radiant skin benefits.",
    solution: "Utilized our signature Golden Panni hot foil stamping process to achieve a brilliant, mirror-like gold luster for the brand logo and metallic swirls, sealed under protective soft-touch matte lamination.",
    images: [
      "/images/projects/olina-24k-gold-bleach.png",
      "/images/projects/olina-hair-removal-rose.png",
      "/images/projects/olina-petroleum-jelly.png"
    ],
    featured: true,
    tags: ["Golden Panni", "Gold Foiling", "Cosmetics", "Beauty", "Bleach Card"]
  },
  {
    id: "fun-kids-oral-care",
    projectName: "Fun Kids Toothbrush & Toy Comb/Fan Blister Cards",
    clientName: "Fun Kids Care",
    industry: "Personal Care & Kids",
    packagingType: "Printed Blister Backer Cards",
    material: "High-Density Virgin Bleach Board with Heat-Seal Coating (350-400gsm)",
    structure: "Die-Cut Hanging Blister Card with Euro Slot & Dual Product Cavity Fit",
    dimensions: "Engineered for combined toothbrush + toy fan / comb dual blister blisters",
    printing: "High-Energy Full-Color CMYK Print with Bright Kids Theme Artwork",
    finishing: "Heat-Seal Blister Varnish, Precision Die-Cut Euro-Hole, Rounded Corner Punching",
    description: "Eye-catching hanging retail blister cards designed for Fun Kids ultra-soft 3+ years toothbrushes bundled with interactive toy fans and combs.",
    requirement: "The packaging required flawless fiber-tearing heat seal adhesion to clear thermoformed plastic blisters to prevent tampering on retail pegs, along with bright, child-friendly color registration.",
    solution: "Manufactured using heavy heat-seal coated Bleach Board that creates an unbreakable hermetic bond with the blister bubble while displaying vibrant yellow/pink graphics and clear safety certifications.",
    images: [
      "/images/projects/fun-kids-toothbrush-fan.png",
      "/images/projects/fun-kids-toothbrush-comb.png"
    ],
    featured: false,
    tags: ["Blister Card", "Personal Care", "Kids Care", "Bleach Board", "Retail"]
  },
  {
    id: "olina-hair-removal-rose",
    projectName: "Olina Rose Oil Hair Removal Lotion Bleach Card Box",
    clientName: "Olina Cosmetics",
    industry: "Beauty & Cosmetics",
    packagingType: "Bleach Card Cosmetic Carton",
    material: "Virgin Bleach Card (SBS 350gsm)",
    structure: "Reverse Tuck End Folding Carton with Precision Flaps",
    dimensions: "Custom-sized for lotion tube packaging",
    printing: "4-Color High-Saturation Pink & Navy CMYK Offset Printing",
    finishing: "Smooth Soft-Touch Velvet Matte Lamination, Multi-Color Foiling Accent",
    description: "Premium retail folding carton box for Olina's Sweet Rose Oil Hair Removal Lotion, designed with high visual shelf appeal and soft botanical floral graphics.",
    requirement: "Olina needed vibrant color fidelity that accurately represented delicate rose petal tones and crisp typography for usage directions and ingredient disclosures.",
    solution: "Manufactured using bright white SBS Bleach Card to guarantee color purity without yellowing, sealed with a smooth protective matte lamination to resist bathroom humidity.",
    images: [
      "/images/projects/olina-hair-removal-rose.png",
      "/images/projects/olina-hair-removal-herbal.png",
      "/images/packaging/folding-cartons.jpg"
    ],
    featured: false,
    tags: ["Bleach Card", "Cosmetics", "Beauty", "Tuck Box", "Retail"]
  },
  {
    id: "olina-petroleum-jelly",
    projectName: "Olina Natural Petroleum Jelly 12-PCS Master Box",
    clientName: "Olina Cosmetics",
    industry: "Beauty & Personal Care",
    packagingType: "Box Board Retail Display Carton",
    material: "High-Grade Duplex Box Board (350-400gsm)",
    structure: "Straight Tuck Outer Display Box with Reinforced Side Walls",
    dimensions: "Engineered to hold 12 small individual Olina Petroleum Jelly tubs",
    printing: "Rich Cobalt Blue, Vibrant Amber & Red 4-Color Offset Print",
    finishing: "High-Gloss Protective Coating, Scuff-Resistant Varnish",
    description: "Multi-unit retail packaging for Olina Natural Petroleum Jelly (Honey, Coconut & Vitamin E formula), functioning as both transit protection and counter-top display.",
    requirement: "The packaging required strong perimeter rigidity to house 12 packed plastic jars without bowing, combined with punchy retail colors for high-turnover pharmacy shelves.",
    solution: "Engineered using heavy-caliper Box Board with interlocking dust flaps and scuff-resistant gloss varnish, ensuring sharp corners and vibrant blue background saturation.",
    images: [
      "/images/projects/olina-petroleum-jelly.png",
      "/images/packaging/folding-auto-bottom.jpg",
      "/images/packaging/corrugated-product-box.jpg"
    ],
    featured: false,
    tags: ["Box Board", "Cosmetics", "Display Box", "Multi-Pack", "Gloss Varnish"]
  },
  {
    id: "shifa-labs",
    projectName: "Shifa Labs Injection Rigid Setup Boxes & Presentation Bags",
    clientName: "Shifa Labs",
    industry: "Healthcare & Medical",
    packagingType: "Rigid Setup Boxes & Custom Bags",
    material: "1200gsm Rigid Dense Greyboard + 200gsm Art Paper Carrier Bags",
    structure: "2-Piece Lift-Off Lid Box with Multi-Vial Cavity Foam Bed + Matching Rope-Handle Bag",
    dimensions: "Custom dimensions engineered around glass injection vials and ampoule sets",
    printing: "Clean Medical 2-Color & 4-Color Offset",
    finishing: "Smooth Matte Lamination, Precision Metallic Foil Accent, Reinforced Eyelets",
    description: "An institutional-grade presentation box and matching carrier bag suite engineered for Shifa Labs' delicate injection vials and medical solutions.",
    requirement: "Glass medical vials require absolute shock absorption and zero movement during handling, combined with an authoritative medical aesthetic for institutional distribution.",
    solution: "We constructed heavy-gauge rigid setup boxes fitted with high-density laser-cut cavity inserts to lock each vial firmly in place, paired with heavy-duty matte carrier bags for executive medical presentations.",
    images: [
      "/images/rigid/two-piece.jpg",
      "/images/packaging/paper-bags.jpg",
      "/images/rigid/custom-foam.jpg"
    ],
    featured: false,
    tags: ["Rigid Boxes", "Paper Bags", "Healthcare", "Medical", "Custom Inserts"]
  },
  {
    id: "perfume-rigid-boxes",
    projectName: "Bespoke Perfume Rigid Setup Boxes with Golden Panni",
    clientName: "Luxury Fragrance Partners",
    industry: "Luxury & Fragrance",
    packagingType: "Luxury Rigid Setup Box",
    material: "1500gsm Heavy Greyboard wrapped in Fine Matte Art Paper",
    structure: "Shoulder & Neck Setup Box / Book-Style Magnetic Flap",
    dimensions: "Fitted for 50ml and 100ml Eau de Parfum heavy glass flacons",
    printing: "Deep Charcoal Black Offset with Gold Accent Inks",
    finishing: "Golden Panni (High-Luster Gold Foil Stamping), Multi-color Hot Foil, Deep Embossing",
    description: "Ultra-premium rigid packaging crafted to house artisanal perfume flacons with dramatic unboxing ceremony.",
    requirement: "Fragrance bottles are heavy and fragile. The packaging needed substantial physical heft, seamless edges, and rich traditional gold embellishments.",
    solution: "Constructed thick 1500gsm rigid board setup boxes with exposed collar neck details and traditional Golden Panni hot foil stamping, combined with fitted velvet cradles.",
    images: [
      "/images/rigid/shoulder-neck.jpg",
      "/images/rigid/magnetic.jpg",
      "/images/packaging/rigid-boxes.jpg"
    ],
    featured: false,
    tags: ["Rigid Boxes", "Perfume", "Golden Panni", "Luxury", "Gold Foiling"]
  }
];

export function getProjectById(id: string): ProjectDetail | undefined {
  return SELECTED_PROJECTS.find(p => p.id === id);
}

export function getRelatedProjects(currentId: string, limit = 3): ProjectDetail[] {
  return SELECTED_PROJECTS.filter(p => p.id !== currentId).slice(0, limit);
}
