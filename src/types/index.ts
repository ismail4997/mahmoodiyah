export type CategoryId = 'folding-cartons' | 'corrugated-boxes' | 'rigid-boxes' | 'paper-bags';

export type PricingMode = 'INSTANT_ESTIMATE' | 'STARTING_PRICE' | 'CUSTOM_QUOTE';

export type DimensionUnit = 'inch' | 'cm' | 'mm';

export type CurrencyCode = 'USD' | 'GBP' | 'EUR' | 'AED' | 'AUD' | 'CAD';

export interface Currency {
  code: CurrencyCode;
  symbol: string;
  name: string;
  exchangeRate: number; // relative to USD base = 1.0
}

export interface MaterialOption {
  id: string;
  name: string;
  category: CategoryId;
  description?: string;
  costMultiplier: number;
  minGsmOrFlute?: string;
  isPopular?: boolean;
}

export interface FinishingOption {
  id: string;
  name: string;
  tagline: string;
  category: 'coating' | 'foil' | 'tactile' | 'structural' | 'insert';
  unitCostUSD: number;
  isPremium: boolean;
  image?: string;
}

export interface ProductTypeItem {
  id: string;
  slug: string;
  name: string;
  category: CategoryId;
  subcategory: string;
  tagline: string;
  description: string;
  image: string;
  moq: number;
  leadTime: string;
  basePriceUSD: number;
  pricingMode: PricingMode;
  defaultDimensions: {
    length: number;
    width: number;
    height: number;
    unit: DimensionUnit;
  };
  allowedMaterials: string[];
  allowedFinishes: string[];
  applications: string[];
  features: string[];
  seoTitle?: string;
  seoDescription?: string;
}

export interface PackagingCategoryData {
  id: CategoryId;
  slug: string;
  name: string;
  heroHeadline: string;
  heroSubheading: string;
  description: string;
  image: string;
  subcategories: {
    name: string;
    description: string;
    items: string[];
  }[];
  materialOverview: string[];
  finishingOverview: string[];
  seoTitle: string;
  seoDescription: string;
}

export type QuoteStatus = 
  | 'New'
  | 'Reviewing'
  | 'Quote Sent'
  | 'Customer Responded'
  | 'Sample Requested'
  | 'Sample Approved'
  | 'Order Confirmed'
  | 'Production'
  | 'Quality Check'
  | 'Shipped'
  | 'Completed'
  | 'Cancelled';

export interface QuoteCustomer {
  name: string;
  company: string;
  email: string;
  country: string;
  phone?: string;
  whatsapp?: string;
  website?: string;
  targetDeliveryDate?: string;
  message?: string;
}

export interface QuoteConfiguration {
  category: CategoryId;
  productTypeId: string;
  productTypeName: string;
  dimensions: {
    length: number;
    width: number;
    height: number;
    unit: DimensionUnit;
  };
  materialId: string;
  materialName: string;
  printing: 'No Printing' | 'CMYK' | 'Pantone' | 'CMYK + Pantone';
  finishes: string[];
  quantity: number;
  artworkAttached?: boolean;
  artworkFileName?: string;
  referenceFileAttached?: boolean;
  referenceFileName?: string;
  currency: CurrencyCode;
}

export interface QuoteCalculationResult {
  unitPriceUSD: number;
  totalPriceUSD: number;
  unitPriceLocal: number;
  totalPriceLocal: number;
  currency: CurrencyCode;
  currencySymbol: string;
  pricingMode: PricingMode;
  estimatedLeadDays: number;
  volumeSavingsPercent: number;
  breakdown?: {
    baseUnit: number;
    materialFactor: number;
    printingCost: number;
    finishesCost: number;
    volumeFactor: number;
  };
}

export interface StoredQuote {
  id: string;
  quoteNumber: string;
  config: QuoteConfiguration;
  result: QuoteCalculationResult;
  customer: QuoteCustomer;
  status: QuoteStatus;
  adminCustomPriceUSD?: number;
  adminNotes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface SampleRequest {
  id: string;
  sampleNumber: string;
  category: CategoryId;
  productTypeId: string;
  productTypeName: string;
  dimensions?: {
    length: number;
    width: number;
    height: number;
    unit: DimensionUnit;
  };
  quantity?: number;
  customer: {
    name: string;
    company: string;
    email: string;
    country: string;
    address?: string;
    phone?: string;
    message?: string;
  };
  referenceFileName?: string;
  status: 'New' | 'Dispatched' | 'Delivered' | 'Converted to Order' | 'Archived';
  createdAt: string;
}
