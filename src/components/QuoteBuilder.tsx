"use client";

import React, { useState, useMemo, useEffect } from "react";
import { 
  CategoryId, 
  DimensionUnit, 
  QuoteConfiguration, 
  QuoteCalculationResult,
  PricingMode 
} from "@/types";
import { CATEGORIES, PRODUCT_TYPES, MATERIALS, FINISHES, CURRENCIES } from "@/data/catalog";
import { useCurrency } from "@/context/CurrencyContext";
import { calculateQuotePrice, convertToInches, convertFromInches } from "@/lib/pricing-engine";
import { 
  Box, 
  Layers, 
  Sparkles, 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  UploadCloud, 
  CheckCircle2, 
  Globe, 
  Info,
  Clock,
  FileCheck
} from "lucide-react";
import confetti from "canvas-confetti";

interface QuoteBuilderProps {
  initialCategory?: CategoryId;
  initialProductSlug?: string;
}

const PRESET_QUANTITIES = [100, 250, 500, 1000, 2500, 5000, 10000, 25000];

export default function QuoteBuilder({ initialCategory = 'folding-cartons', initialProductSlug }: QuoteBuilderProps) {
  const { currency, currencyCode, formatPrice } = useCurrency();

  // Wizard Step (1 to 9)
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Configuration State
  const [category, setCategory] = useState<CategoryId>(initialCategory);
  const [productTypeId, setProductTypeId] = useState<string>('');
  
  // Dimensions
  const [unit, setUnit] = useState<DimensionUnit>('inch');
  const [length, setLength] = useState<number>(6);
  const [width, setWidth] = useState<number>(4);
  const [height, setHeight] = useState<number>(2);

  // Material & Print
  const [materialId, setMaterialId] = useState<string>('');
  const [printing, setPrinting] = useState<'No Printing' | 'CMYK' | 'Pantone' | 'CMYK + Pantone'>('CMYK');
  
  // Finishes (multi-select)
  const [selectedFinishes, setSelectedFinishes] = useState<string[]>(['matte-lam']);

  // Quantity
  const [quantity, setQuantity] = useState<number>(1000);
  const [isCustomQty, setIsCustomQty] = useState<boolean>(false);
  const [customQtyInput, setCustomQtyInput] = useState<string>('1000');

  // Artwork & Files
  const [artworkFile, setArtworkFile] = useState<string | null>(null);
  const [referenceFile, setReferenceFile] = useState<string | null>(null);

  // Customer Contact
  const [customer, setCustomer] = useState({
    name: '',
    company: '',
    email: '',
    country: 'United States',
    phone: '',
    whatsapp: '',
    website: '',
    targetDeliveryDate: '',
    message: ''
  });

  // Submission Status
  const [submitting, setSubmitting] = useState(false);
  const [submittedQuote, setSubmittedQuote] = useState<any | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Initialize product type and material when category changes
  useEffect(() => {
    const availableProducts = PRODUCT_TYPES.filter(p => p.category === category);
    if (availableProducts.length > 0) {
      if (initialProductSlug) {
        const found = availableProducts.find(p => p.slug === initialProductSlug || p.id === initialProductSlug);
        if (found) {
          setProductTypeId(found.id);
        } else {
          setProductTypeId(availableProducts[0].id);
        }
      } else {
        setProductTypeId(availableProducts[0].id);
      }
    }

    const availableMaterials = MATERIALS.filter(m => m.category === category);
    if (availableMaterials.length > 0) {
      setMaterialId(availableMaterials[0].id);
    }
  }, [category, initialProductSlug]);

  const currentProduct = useMemo(() => {
    return PRODUCT_TYPES.find(p => p.id === productTypeId) || PRODUCT_TYPES[0];
  }, [productTypeId]);

  const availableMaterials = useMemo(() => {
    return MATERIALS.filter(m => m.category === category);
  }, [category]);

  const availableProducts = useMemo(() => {
    return PRODUCT_TYPES.filter(p => p.category === category);
  }, [category]);

  // Unit conversion handler
  const handleUnitChange = (newUnit: DimensionUnit) => {
    if (newUnit === unit) return;
    const lenInches = convertToInches(length, unit);
    const widInches = convertToInches(width, unit);
    const hgtInches = convertToInches(height, unit);

    setLength(parseFloat(convertFromInches(lenInches, newUnit).toFixed(2)));
    setWidth(parseFloat(convertFromInches(widInches, newUnit).toFixed(2)));
    setHeight(parseFloat(convertFromInches(hgtInches, newUnit).toFixed(2)));
    setUnit(newUnit);
  };

  // Toggle multi-select finishes
  const toggleFinish = (finishId: string) => {
    if (selectedFinishes.includes(finishId)) {
      setSelectedFinishes(selectedFinishes.filter(id => id !== finishId));
    } else {
      setSelectedFinishes([...selectedFinishes, finishId]);
    }
  };

  // Live calculation
  const quoteConfig: QuoteConfiguration = useMemo(() => {
    const material = MATERIALS.find(m => m.id === materialId) || availableMaterials[0];
    return {
      category,
      productTypeId: currentProduct.id,
      productTypeName: currentProduct.name,
      dimensions: {
        length: Math.max(0.5, length),
        width: Math.max(0.5, width),
        height: Math.max(0.5, height),
        unit
      },
      materialId: material?.id || 'sbs-16pt',
      materialName: material?.name || 'Standard Paperboard',
      printing,
      finishes: selectedFinishes,
      quantity: Math.max(10, quantity),
      artworkAttached: !!artworkFile,
      artworkFileName: artworkFile || undefined,
      referenceFileAttached: !!referenceFile,
      referenceFileName: referenceFile || undefined,
      currency: currencyCode
    };
  }, [category, currentProduct, length, width, height, unit, materialId, availableMaterials, printing, selectedFinishes, quantity, artworkFile, referenceFile, currencyCode]);

  const calculationResult: QuoteCalculationResult = useMemo(() => {
    return calculateQuotePrice(quoteConfig);
  }, [quoteConfig]);

  const handleNext = () => {
    if (currentStep < 9) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customer.name || !customer.email || !customer.company) {
      setErrorMsg("Please fill in your name, company, and work email.");
      return;
    }

    setSubmitting(true);
    setErrorMsg(null);

    try {
      const res = await fetch('/api/quotes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          config: quoteConfig,
          customer
        })
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit quote');
      }

      setSubmittedQuote(data.quote);
      confetti({
        particleCount: 140,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch (err: any) {
      setErrorMsg(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
      
      {/* Top Wizard Progress Bar */}
      <div className="bg-slate-950 text-white p-6 md:p-8 border-b border-slate-900">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
              Step {currentStep} of 9
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold mt-0.5">
              Custom Packaging Specification & Quotation
            </h2>
          </div>
          
          <div className="text-right hidden sm:block">
            <span className="text-[11px] text-slate-400 block font-medium">Pricing Mode</span>
            <span className="text-xs font-bold text-white bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
              {calculationResult.pricingMode === 'INSTANT_ESTIMATE' ? 'Instant Live Calculation' : 'Custom Review'}
            </span>
          </div>
        </div>

        {/* 9-Step Progress Pills */}
        <div className="grid grid-cols-9 gap-1.5 sm:gap-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((step) => {
            const isCompleted = step < currentStep;
            const isCurrent = step === currentStep;
            return (
              <button
                key={step}
                type="button"
                onClick={() => setCurrentStep(step)}
                className={`h-2 rounded-full transition-all ${
                  isCurrent 
                    ? "bg-emerald-400 shadow-sm" 
                    : isCompleted 
                    ? "bg-slate-700 hover:bg-slate-600" 
                    : "bg-slate-800"
                }`}
                title={`Step ${step}`}
              />
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        
        {/* Left Interactive Configurator Panel */}
        <div className="lg:col-span-8 p-6 md:p-10 space-y-8 border-b lg:border-b-0 lg:border-r border-slate-150">
          
          {/* ================= STEP 1: CHOOSE CATEGORY ================= */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Step 1</span>
                <h3 className="font-serif text-2xl font-bold text-slate-950 mt-1">
                  Choose Packaging Category
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Select the core manufacturing structure for your packaging.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {CATEGORIES.map((cat) => {
                  const isSelected = category === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setCategory(cat.id)}
                      className={`text-left p-4 rounded-2xl border-2 transition-all flex flex-col justify-between ${
                        isSelected 
                          ? "border-slate-950 bg-slate-50/80 shadow-sm" 
                          : "border-slate-200 hover:border-slate-300 bg-white"
                      }`}
                    >
                      <div className="h-28 w-full rounded-xl overflow-hidden mb-3 bg-slate-100">
                        <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <div className="flex justify-between items-center">
                          <h4 className="font-bold text-sm text-slate-950">{cat.name}</h4>
                          {isSelected && <Check className="w-4 h-4 text-emerald-600 font-bold" />}
                        </div>
                        <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                          {cat.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* ================= STEP 2: CHOOSE PRODUCT TYPE ================= */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Step 2</span>
                <h3 className="font-serif text-2xl font-bold text-slate-950 mt-1">
                  Select Product Structure
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Available styles for <strong className="text-slate-900">{CATEGORIES.find(c => c.id === category)?.name}</strong>.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[460px] overflow-y-auto pr-1">
                {availableProducts.map((p) => {
                  const isSelected = productTypeId === p.id;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setProductTypeId(p.id)}
                      className={`text-left p-4 rounded-2xl border-2 transition-all flex items-start gap-4 ${
                        isSelected 
                          ? "border-slate-950 bg-slate-50 shadow-sm" 
                          : "border-slate-200 hover:border-slate-300 bg-white"
                      }`}
                    >
                      <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-slate-100">
                        <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h4 className="font-bold text-xs text-slate-950">{p.name}</h4>
                          {isSelected && <Check className="w-4 h-4 text-emerald-600 font-bold shrink-0" />}
                        </div>
                        <span className="text-[10px] font-semibold text-emerald-700">{p.subcategory}</span>
                        <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                          {p.tagline}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* ================= STEP 3: DIMENSIONS & UNIT CONVERSION ================= */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Step 3</span>
                <h3 className="font-serif text-2xl font-bold text-slate-950 mt-1">
                  Internal Box Dimensions
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Enter the inner dimensions of your packaging in inches, centimeters, or millimeters.
                </p>
              </div>

              {/* Unit Switcher */}
              <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-xl max-w-xs">
                {(['inch', 'cm', 'mm'] as DimensionUnit[]).map((u) => (
                  <button
                    key={u}
                    type="button"
                    onClick={() => handleUnitChange(u)}
                    className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all capitalize ${
                      unit === u 
                        ? "bg-white text-slate-950 shadow-sm" 
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {u === 'inch' ? 'Inches (in)' : u === 'cm' ? 'Centimeters (cm)' : 'Millimeters (mm)'}
                  </button>
                ))}
              </div>

              {/* Dimension Inputs */}
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Length ({unit})
                  </label>
                  <input
                    type="number"
                    step={unit === 'inch' ? '0.25' : '1'}
                    min="1"
                    value={length}
                    onChange={(e) => setLength(parseFloat(e.target.value) || 1)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Width ({unit})
                  </label>
                  <input
                    type="number"
                    step={unit === 'inch' ? '0.25' : '1'}
                    min="1"
                    value={width}
                    onChange={(e) => setWidth(parseFloat(e.target.value) || 1)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Height / Depth ({unit})
                  </label>
                  <input
                    type="number"
                    step={unit === 'inch' ? '0.25' : '1'}
                    min="0.5"
                    value={height}
                    onChange={(e) => setHeight(parseFloat(e.target.value) || 0.5)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
                  />
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center gap-3 text-xs text-slate-600">
                <Info className="w-5 h-5 text-slate-400 shrink-0" />
                <span>
                  <strong>Tip:</strong> Always measure the longest dimensions of your primary product and add 2–3mm (1/8") buffer for comfortable insertion.
                </span>
              </div>
            </div>
          )}

          {/* ================= STEP 4: CHOOSE MATERIAL ================= */}
          {currentStep === 4 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Step 4</span>
                <h3 className="font-serif text-2xl font-bold text-slate-950 mt-1">
                  Select Board Substrate & Material
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Choose the structural board grade and caliper thickness for your packaging.
                </p>
              </div>

              <div className="space-y-3">
                {availableMaterials.map((mat) => {
                  const isSelected = materialId === mat.id;
                  return (
                    <label
                      key={mat.id}
                      onClick={() => setMaterialId(mat.id)}
                      className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                        isSelected 
                          ? "border-slate-950 bg-slate-50 shadow-sm" 
                          : "border-slate-200 hover:border-slate-300 bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="material_option"
                          checked={isSelected}
                          onChange={() => setMaterialId(mat.id)}
                          className="accent-slate-900 w-4 h-4"
                        />
                        <div>
                          <p className="text-xs font-bold text-slate-950">{mat.name}</p>
                          <p className="text-[11px] text-slate-500">{mat.minGsmOrFlute}</p>
                        </div>
                      </div>
                      {mat.isPopular && (
                        <span className="text-[10px] uppercase font-bold tracking-wider bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                          Standard
                        </span>
                      )}
                    </label>
                  );
                })}
              </div>
            </div>
          )}

          {/* ================= STEP 5: PRINTING ================= */}
          {currentStep === 5 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Step 5</span>
                <h3 className="font-serif text-2xl font-bold text-slate-950 mt-1">
                  Printing Specifications
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Select color reproduction standards for high-precision brand consistency.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { id: 'No Printing', name: 'No Printing (Plain Kraft / White)', desc: 'Clean unprinted substrate' },
                  { id: 'CMYK', name: 'Full Color CMYK Process', desc: 'Industry standard 4-color high resolution process print' },
                  { id: 'Pantone', name: 'Pantone (PMS Spot Colors)', desc: 'Exact color matching for proprietary brand guidelines' },
                  { id: 'CMYK + Pantone', name: 'CMYK + Spot Pantone', desc: 'Full photographic process print with specialized PMS brand accents' }
                ].map((opt) => {
                  const isSelected = printing === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setPrinting(opt.id as any)}
                      className={`text-left p-4 rounded-2xl border-2 transition-all ${
                        isSelected 
                          ? "border-slate-950 bg-slate-50 shadow-sm" 
                          : "border-slate-200 hover:border-slate-300 bg-white"
                      }`}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="font-bold text-xs text-slate-950">{opt.name}</h4>
                        {isSelected && <Check className="w-4 h-4 text-emerald-600 font-bold" />}
                      </div>
                      <p className="text-[11px] text-slate-500 leading-relaxed">{opt.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* ================= STEP 6: FINISHING (MULTI-SELECT) ================= */}
          {currentStep === 6 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Step 6</span>
                <h3 className="font-serif text-2xl font-bold text-slate-950 mt-1">
                  Surface Finishes & Custom Add-Ons
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Select multiple premium finishes to elevate your packaging's tactile presentation.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[460px] overflow-y-auto pr-1">
                {FINISHES.map((f) => {
                  const isSelected = selectedFinishes.includes(f.id);
                  return (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => toggleFinish(f.id)}
                      className={`text-left p-3.5 rounded-2xl border-2 transition-all flex items-start justify-between gap-2 ${
                        isSelected 
                          ? "border-slate-950 bg-slate-50 shadow-sm" 
                          : "border-slate-200 hover:border-slate-300 bg-white"
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`w-4 h-4 rounded flex items-center justify-center text-[10px] border ${
                            isSelected ? "bg-slate-950 text-white border-slate-950" : "border-slate-300"
                          }`}>
                            {isSelected ? "✓" : ""}
                          </span>
                          <span className="text-xs font-bold text-slate-950">{f.name}</span>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-1 pl-6 leading-snug">{f.tagline}</p>
                      </div>
                      {f.isPremium && (
                        <span className="text-[9px] uppercase tracking-wider font-bold bg-amber-50 text-amber-800 border border-amber-200 px-1.5 py-0.5 rounded shrink-0">
                          Luxury
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* ================= STEP 7: QUANTITY ================= */}
          {currentStep === 7 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Step 7</span>
                <h3 className="font-serif text-2xl font-bold text-slate-950 mt-1">
                  Select Production Quantity
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Choose a preset tier or specify your exact manufacturing volume.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {PRESET_QUANTITIES.map((tier) => {
                  const isSelected = !isCustomQty && quantity === tier;
                  return (
                    <button
                      key={tier}
                      type="button"
                      onClick={() => {
                        setQuantity(tier);
                        setIsCustomQty(false);
                      }}
                      className={`py-3.5 px-3 rounded-2xl border-2 text-xs font-bold transition-all text-center ${
                        isSelected 
                          ? "border-slate-950 bg-slate-950 text-white shadow-sm" 
                          : "border-slate-200 hover:border-slate-300 bg-white text-slate-800"
                      }`}
                    >
                      {tier.toLocaleString()} units
                    </button>
                  );
                })}
              </div>

              {/* Custom Quantity Input */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <label className="text-xs font-bold text-slate-800 block">
                  Or Specify Custom Quantity:
                </label>
                <div className="flex gap-3">
                  <input
                    type="number"
                    min="100"
                    step="50"
                    value={customQtyInput}
                    onChange={(e) => {
                      setCustomQtyInput(e.target.value);
                      setIsCustomQty(true);
                      const num = parseInt(e.target.value);
                      if (num > 0) setQuantity(num);
                    }}
                    placeholder="e.g. 7500"
                    className="flex-1 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const num = parseInt(customQtyInput);
                      if (num > 0) {
                        setQuantity(num);
                        setIsCustomQty(true);
                      }
                    }}
                    className="px-5 py-2.5 bg-slate-950 text-white rounded-xl text-xs font-bold"
                  >
                    Apply Custom Qty
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ================= STEP 8: ARTWORK UPLOAD ================= */}
          {currentStep === 8 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Step 8</span>
                <h3 className="font-serif text-2xl font-bold text-slate-950 mt-1">
                  Artwork & Reference Files
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Upload your vector dielines, logo files, or reference images for structural analysis.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Artwork File */}
                <div className="p-6 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-300 text-center space-y-3">
                  <UploadCloud className="w-8 h-8 text-slate-500 mx-auto" />
                  <div>
                    <p className="text-xs font-bold text-slate-900">Final Artwork / Dieline</p>
                    <p className="text-[11px] text-slate-400">Accepted: PDF, AI, PSD, PNG, JPG</p>
                  </div>
                  <label className="inline-block px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-800 hover:bg-slate-100 cursor-pointer shadow-sm">
                    {artworkFile ? "✓ " + artworkFile : "Select Artwork"}
                    <input 
                      type="file" 
                      className="hidden" 
                      accept=".pdf,.ai,.psd,.png,.jpg,.jpeg"
                      onChange={(e) => setArtworkFile(e.target.files?.[0]?.name || null)} 
                    />
                  </label>
                </div>

                {/* Reference File */}
                <div className="p-6 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-300 text-center space-y-3">
                  <FileCheck className="w-8 h-8 text-slate-500 mx-auto" />
                  <div>
                    <p className="text-xs font-bold text-slate-900">Inspiration / Reference Image</p>
                    <p className="text-[11px] text-slate-400">Photos of existing boxes or competitor designs</p>
                  </div>
                  <label className="inline-block px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-800 hover:bg-slate-100 cursor-pointer shadow-sm">
                    {referenceFile ? "✓ " + referenceFile : "Attach Reference"}
                    <input 
                      type="file" 
                      className="hidden" 
                      accept=".pdf,.png,.jpg,.jpeg"
                      onChange={(e) => setReferenceFile(e.target.files?.[0]?.name || null)} 
                    />
                  </label>
                </div>
              </div>

              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs text-emerald-900 flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-emerald-600 shrink-0" />
                <p>
                  <strong>No artwork yet?</strong> Don't worry! Send us your reference and our in-house prepress engineers can create vector dielines for your product.
                </p>
              </div>
            </div>
          )}

          {/* ================= STEP 9: CUSTOMER INFORMATION ================= */}
          {currentStep === 9 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Step 9</span>
                <h3 className="font-serif text-2xl font-bold text-slate-950 mt-1">
                  Contact & Company Information
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  We'll send your official 3D proof and formal production quotation to your email.
                </p>
              </div>

              {errorMsg && (
                <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-800 font-semibold">
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleFinalSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rachel Sterling"
                      value={customer.name}
                      onChange={(e) => setCustomer({...customer, name: e.target.value})}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-slate-950 outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Company / Brand Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lumina Cosmetics LLC"
                      value={customer.company}
                      onChange={(e) => setCustomer({...customer, company: e.target.value})}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-slate-950 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="rachel@luminabeauty.com"
                      value={customer.email}
                      onChange={(e) => setCustomer({...customer, email: e.target.value})}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-slate-950 outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Country *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. United States, United Kingdom, UAE"
                      value={customer.country}
                      onChange={(e) => setCustomer({...customer, country: e.target.value})}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-slate-950 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={customer.phone}
                      onChange={(e) => setCustomer({...customer, phone: e.target.value})}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-slate-950 outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">WhatsApp (Optional)</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={customer.whatsapp}
                      onChange={(e) => setCustomer({...customer, whatsapp: e.target.value})}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-slate-950 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Company Website (Optional)</label>
                    <input
                      type="url"
                      placeholder="https://brand.com"
                      value={customer.website}
                      onChange={(e) => setCustomer({...customer, website: e.target.value})}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-slate-950 outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Target In-Hand Delivery Date</label>
                    <input
                      type="date"
                      value={customer.targetDeliveryDate}
                      onChange={(e) => setCustomer({...customer, targetDeliveryDate: e.target.value})}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-slate-950 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Project Notes & Custom Requirements</label>
                  <textarea
                    rows={3}
                    placeholder="Add any specific Pantone codes, insert layout preferences, or special logistics instructions..."
                    value={customer.message}
                    onChange={(e) => setCustomer({...customer, message: e.target.value})}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-slate-950 outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 bg-slate-950 text-white rounded-full font-bold text-sm hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>{submitting ? "Submitting Quotation..." : "Submit Quotation Request"}</span>
                </button>
              </form>
            </div>
          )}

          {/* Wizard Navigation Buttons */}
          <div className="flex justify-between items-center pt-4 border-t border-slate-100">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="px-5 py-2.5 rounded-full border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors flex items-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
            ) : <div />}

            {currentStep < 9 && (
              <button
                type="button"
                onClick={handleNext}
                className="px-7 py-2.5 rounded-full bg-slate-950 text-white text-xs font-bold hover:bg-slate-800 transition-all flex items-center gap-2 shadow-sm"
              >
                <span>Continue to Step {currentStep + 1}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>

        {/* Right Live Pricing Summary Sidebar */}
        <div className="lg:col-span-4 p-6 md:p-8 bg-slate-50 flex flex-col justify-between space-y-6">
          
          <div className="space-y-6">
            
            {/* Live Pricing Card */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              
              <div className="flex justify-between items-start pb-4 border-b border-slate-100">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
                    Estimated Price
                  </span>
                  
                  {calculationResult.pricingMode === 'INSTANT_ESTIMATE' && (
                    <div className="mt-1">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-serif font-bold text-slate-950">
                          {formatPrice(calculationResult.unitPriceUSD)}
                        </span>
                        <span className="text-xs text-slate-500 font-semibold">/ unit</span>
                      </div>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">
                        Estimated Total: <strong className="text-slate-900">{formatPrice(calculationResult.totalPriceUSD)}</strong>
                      </p>
                    </div>
                  )}

                  {calculationResult.pricingMode === 'STARTING_PRICE' && (
                    <div className="mt-1">
                      <p className="text-xs text-slate-500 font-semibold">Starting from</p>
                      <p className="text-2xl font-serif font-bold text-slate-950">
                        {formatPrice(calculationResult.unitPriceUSD)} <span className="text-xs font-normal">/ unit</span>
                      </p>
                    </div>
                  )}

                  {calculationResult.pricingMode === 'CUSTOM_QUOTE' && (
                    <div className="mt-1">
                      <p className="text-xl font-serif font-bold text-slate-950">Custom Pricing</p>
                      <p className="text-[11px] text-slate-500">Request formal quote</p>
                    </div>
                  )}
                </div>

                {calculationResult.volumeSavingsPercent > 0 && (
                  <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full text-[10px] font-bold">
                    Save {calculationResult.volumeSavingsPercent}%
                  </span>
                )}
              </div>

              {/* Specifications Summary */}
              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span className="text-slate-400">Category:</span>
                  <span className="font-semibold text-slate-900 capitalize">{category.replace('-', ' ')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Style:</span>
                  <span className="font-semibold text-slate-900 text-right truncate max-w-[170px]">{currentProduct.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Dimensions:</span>
                  <span className="font-semibold text-slate-900">{length} × {width} × {height} {unit}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Material:</span>
                  <span className="font-semibold text-slate-900 text-right truncate max-w-[170px]">
                    {MATERIALS.find(m => m.id === materialId)?.name}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Printing:</span>
                  <span className="font-semibold text-slate-900">{printing}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Finishes:</span>
                  <span className="font-semibold text-slate-900 text-right truncate max-w-[170px]">
                    {selectedFinishes.length > 0 ? `${selectedFinishes.length} selected` : 'None'}
                  </span>
                </div>
                <div className="flex justify-between border-t border-slate-100 pt-2 font-bold text-slate-950">
                  <span>Quantity:</span>
                  <span>{quantity.toLocaleString()} units</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-400 leading-relaxed italic">
                * Final pricing is confirmed after specification and artwork review.
              </div>

            </div>

            {/* Production Details */}
            <div className="bg-slate-100 p-4 rounded-2xl border border-slate-200/80 space-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-2 text-slate-900 font-bold">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span>Estimated Turnaround</span>
              </div>
              <p className="text-[11px] text-slate-500">
                Standard production: <strong>{calculationResult.estimatedLeadDays} Business Days</strong> post artwork sign-off.
              </p>
            </div>

          </div>

          <div className="text-[11px] text-center text-slate-400 space-y-1">
            <p>✓ 100% Free Dieline Generation</p>
            <p>✓ Pre-flight 3D Inspection Included</p>
          </div>

        </div>

      </div>

      {/* Success Modal */}
      {submittedQuote && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl border border-slate-100 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h3 className="font-serif text-2xl font-bold text-slate-950">
              Quote Request Submitted
            </h3>

            <p className="text-xs font-mono text-slate-500 bg-slate-100 py-1 px-3 rounded-full inline-block">
              Reference: {submittedQuote.quoteNumber}
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
              Thank you, <strong>{submittedQuote.customer.name}</strong>. Our structural packaging engineering desk has received your specifications for <strong>{submittedQuote.config.quantity.toLocaleString()} units</strong> of <strong>{submittedQuote.config.productTypeName}</strong>.
            </p>

            <p className="text-xs text-slate-500">
              A formal quotation and 3D dieline proof will be sent to <strong>{submittedQuote.customer.email}</strong> within 4 business hours.
            </p>

            <div className="pt-4 flex gap-3 justify-center">
              <button
                onClick={() => setSubmittedQuote(null)}
                className="px-6 py-2.5 bg-slate-950 text-white rounded-full text-xs font-bold hover:bg-slate-800 transition-colors"
              >
                Close Window
              </button>
              <a
                href="/sample-request"
                className="px-6 py-2.5 bg-slate-100 text-slate-800 rounded-full text-xs font-bold hover:bg-slate-200 transition-colors"
              >
                Order a Physical Sample
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
