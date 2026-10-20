export interface ClientInfo {
  id: string;
  name: string;
  industry: string;
  summary: string;
  projectId?: string;
  badgeInitials: string;
}

export const REAL_CLIENTS: ClientInfo[] = [
  {
    id: "more-macaroni",
    name: "More Macaroni / Brunos",
    industry: "Food & Beverage",
    summary: "Custom food-grade 7-Spice Macaroni 250g cartons with auto-crash bottom locks and cooking guides.",
    projectId: "more-macaroni-pasta",
    badgeInitials: "MM"
  },
  {
    id: "rivaj",
    name: "Rivaj UK / Rivaj Cosmetics",
    industry: "Beauty & Cosmetics",
    summary: "Luxury Bleach Card Aloe Vera sheet mask hanging cartons with precision euro-slots and soft-touch lamination.",
    projectId: "rivaj-cosmetics",
    badgeInitials: "RV"
  },
  {
    id: "benson-automotive",
    name: "Benson Automotive & Bearings",
    industry: "Industrial & Automotive",
    summary: "Heavy-duty oil-resistant Box Board packaging for high-performance spark plugs, parts, and machinery bearings.",
    projectId: "benson-automotive-packaging",
    badgeInitials: "BN"
  },
  {
    id: "dezato",
    name: "Dezato by Murad",
    industry: "Food & Confectionery",
    summary: "Artisan confectionery, Matilda & Melissa cake puddle boxes engineered with interlocking tabs.",
    projectId: "dezato-cake-boxes",
    badgeInitials: "DZ"
  },
  {
    id: "olina",
    name: "Olina Cosmetics",
    industry: "Beauty & Personal Care",
    summary: "24k Gold Glow Creme Bleach with Golden Panni, Rose Hair Removal cartons, and 12-PCS master counter display boxes.",
    projectId: "olina-24k-gold-glow",
    badgeInitials: "OL"
  },
  {
    id: "maq",
    name: "MAQ Baby Care",
    industry: "Baby & Mother Care",
    summary: "Premium baby feeding bottles, silicone nipples, and pump cartons with transparent viewing windows.",
    projectId: "maq-baby-care",
    badgeInitials: "MAQ"
  },
  {
    id: "fun-kids",
    name: "Fun Kids Care",
    industry: "Personal Care & Toys",
    summary: "High-adhesion printed blister backer cards for children's toothbrushes and toy accessories.",
    projectId: "fun-kids-oral-care",
    badgeInitials: "FK"
  },
  {
    id: "shifa-labs",
    name: "Shifa Labs",
    industry: "Healthcare & Medical",
    summary: "Precision glass injection rigid setup boxes and institutional medical presentation carrier bags.",
    projectId: "shifa-labs",
    badgeInitials: "SL"
  },
  {
    id: "luxury-fragrance",
    name: "Luxury Fragrance Partners",
    industry: "Luxury & Fragrance",
    summary: "Bespoke rigid setup boxes embellished with traditional Golden Panni foiling for luxury perfume flacons.",
    projectId: "perfume-rigid-boxes",
    badgeInitials: "PR"
  }
];
