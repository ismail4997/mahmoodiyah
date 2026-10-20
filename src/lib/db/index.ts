import fs from 'fs';
import path from 'path';
import { StoredQuote, SampleRequest, QuoteStatus } from '@/types';

// In-memory cache for fast SSR & Server Actions
let quotesMemory: StoredQuote[] = [
  {
    id: 'quote-101',
    quoteNumber: 'PKM-2026-101',
    config: {
      category: 'folding-cartons',
      productTypeId: 'straight-tuck-end',
      productTypeName: 'Straight Tuck End Box',
      dimensions: { length: 3.5, width: 3.5, height: 6, unit: 'inch' },
      materialId: 'sbs-18pt',
      materialName: '18pt Solid Bleached Sulfate (SBS)',
      printing: 'CMYK + Pantone',
      finishes: ['soft-touch', 'gold-foil'],
      quantity: 5000,
      currency: 'USD'
    },
    result: {
      unitPriceUSD: 0.62,
      totalPriceUSD: 3100,
      unitPriceLocal: 0.62,
      totalPriceLocal: 3100,
      currency: 'USD',
      currencySymbol: '$',
      pricingMode: 'INSTANT_ESTIMATE',
      estimatedLeadDays: 8,
      volumeSavingsPercent: 42
    },
    customer: {
      name: 'Claire Beauchamp',
      company: 'Aura Luxe Botanicals',
      email: 'claire@auraluxe.com',
      country: 'United States',
      phone: '+1 (415) 890-2341',
      message: 'Looking for a matte soft-touch finish with gold foil logo on the front face.'
    },
    status: 'Quote Sent',
    createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
    updatedAt: new Date(Date.now() - 3600000 * 4).toISOString()
  },
  {
    id: 'quote-102',
    quoteNumber: 'PKM-2026-102',
    config: {
      category: 'rigid-boxes',
      productTypeId: 'magnetic-closure-rigid',
      productTypeName: 'Magnetic Closure Rigid Box',
      dimensions: { length: 9, width: 7, height: 3, unit: 'inch' },
      materialId: 'greyboard-2.0mm',
      materialName: '2.0mm (1400gsm) Heavy Greyboard',
      printing: 'CMYK',
      finishes: ['soft-touch', 'gold-foil', 'eva-foam-insert'],
      quantity: 1000,
      currency: 'GBP'
    },
    result: {
      unitPriceUSD: 4.85,
      totalPriceUSD: 4850,
      unitPriceLocal: 3.83,
      totalPriceLocal: 3832,
      currency: 'GBP',
      currencySymbol: '£',
      pricingMode: 'INSTANT_ESTIMATE',
      estimatedLeadDays: 12,
      volumeSavingsPercent: 35
    },
    customer: {
      name: 'Oliver Sterling',
      company: 'Sterling & Croft Horology',
      email: 'o.sterling@sterlingcroft.co.uk',
      country: 'United Kingdom',
      phone: '+44 20 7946 0912',
      message: 'Need high density EVA foam cutout for our automatic chronometer series.'
    },
    status: 'Reviewing',
    createdAt: new Date(Date.now() - 3600000 * 12).toISOString(),
    updatedAt: new Date(Date.now() - 3600000 * 2).toISOString()
  },
  {
    id: 'quote-103',
    quoteNumber: 'PKM-2026-103',
    config: {
      category: 'corrugated-boxes',
      productTypeId: 'ecommerce-mailer',
      productTypeName: 'E-Commerce Mailer Box',
      dimensions: { length: 12, width: 9, height: 4, unit: 'inch' },
      materialId: 'e-flute-kraft',
      materialName: 'E-Flute Kraft Corrugated (1/16")',
      printing: 'CMYK',
      finishes: ['matte-varnish'],
      quantity: 2500,
      currency: 'EUR'
    },
    result: {
      unitPriceUSD: 1.15,
      totalPriceUSD: 2875,
      unitPriceLocal: 1.06,
      totalPriceLocal: 2645,
      currency: 'EUR',
      currencySymbol: '€',
      pricingMode: 'INSTANT_ESTIMATE',
      estimatedLeadDays: 10,
      volumeSavingsPercent: 28
    },
    customer: {
      name: 'Matteo Rossi',
      company: 'Verde Organics Europe',
      email: 'm.rossi@verdeorganics.eu',
      country: 'Germany',
      phone: '+49 30 1234567',
      message: 'Subscription box run for quarterly shipments.'
    },
    status: 'New',
    createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
    updatedAt: new Date().toISOString()
  }
];

let samplesMemory: SampleRequest[] = [
  {
    id: 'sample-201',
    sampleNumber: 'SMP-2026-201',
    category: 'rigid-boxes',
    productTypeId: 'shoulder-neck-rigid',
    productTypeName: 'Shoulder & Neck Luxury Box',
    customer: {
      name: 'Sophia Chen',
      company: 'Lumière Parfumerie',
      email: 'sophia@lumiereparfum.com',
      country: 'France',
      address: '14 Rue de Rivoli, 75001 Paris',
      phone: '+33 1 42 68 55 00',
      message: 'Requesting sample swatch of gold collar and 2mm board.'
    },
    status: 'Dispatched',
    createdAt: new Date(Date.now() - 3600000 * 48).toISOString()
  }
];

export const db = {
  getQuotes: (): StoredQuote[] => {
    return [...quotesMemory].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  },

  getQuoteById: (id: string): StoredQuote | undefined => {
    return quotesMemory.find(q => q.id === id);
  },

  createQuote: (quoteData: Omit<StoredQuote, 'id' | 'quoteNumber' | 'createdAt' | 'updatedAt'>): StoredQuote => {
    const nextNum = quotesMemory.length + 104;
    const newQuote: StoredQuote = {
      ...quoteData,
      id: `quote-${Date.now()}`,
      quoteNumber: `PKM-2026-${nextNum}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    quotesMemory.unshift(newQuote);
    return newQuote;
  },

  updateQuoteStatus: (id: string, status: QuoteStatus, adminNotes?: string, adminCustomPriceUSD?: number): StoredQuote | null => {
    const quoteIndex = quotesMemory.findIndex(q => q.id === id);
    if (quoteIndex === -1) return null;

    const updated = {
      ...quotesMemory[quoteIndex],
      status,
      adminNotes: adminNotes !== undefined ? adminNotes : quotesMemory[quoteIndex].adminNotes,
      adminCustomPriceUSD: adminCustomPriceUSD !== undefined ? adminCustomPriceUSD : quotesMemory[quoteIndex].adminCustomPriceUSD,
      updatedAt: new Date().toISOString()
    };
    quotesMemory[quoteIndex] = updated;
    return updated;
  },

  getSamples: (): SampleRequest[] => {
    return [...samplesMemory].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  },

  createSampleRequest: (sampleData: Omit<SampleRequest, 'id' | 'sampleNumber' | 'createdAt'>): SampleRequest => {
    const nextNum = samplesMemory.length + 202;
    const newSample: SampleRequest = {
      ...sampleData,
      id: `sample-${Date.now()}`,
      sampleNumber: `SMP-2026-${nextNum}`,
      createdAt: new Date().toISOString()
    };
    samplesMemory.unshift(newSample);
    return newSample;
  }
};
