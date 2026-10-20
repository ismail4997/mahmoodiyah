"use client";

import React, { useState, useMemo } from "react";
import { RIGID_BOXES, RigidBoxStyle } from "@/data/products";
import { 
  Calculator, 
  Sparkles, 
  UploadCloud, 
  CheckCircle2, 
  Clock, 
  TrendingDown, 
  ShieldCheck,
  ArrowRight
} from "lucide-react";
import confetti from "canvas-confetti";

const QUANTITY_TIERS = [250, 500, 1000, 2500, 5000];

export default function QuoteCalculator({ fullPage = false }: { fullPage?: boolean }) {
  const [selectedBoxId, setSelectedBoxId] = useState<string>("magnetic-closure");
  const [length, setLength] = useState<number>(8);
  const [width, setWidth] = useState<number>(6);
  const [depth, setDepth] = useState<number>(3);
  const [thickness, setThickness] = useState<number>(1200); // gsm
  const [finish, setFinish] = useState<string>("soft-touch");
  const [hasInsert, setHasInsert] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(500);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    companyName: "",
    phone: "",
    notes: ""
  });

  const selectedBox = useMemo(() => {
    return RIGID_BOXES.find(b => b.id === selectedBoxId) || RIGID_BOXES[0];
  }, [selectedBoxId]);

  // Pricing math engine
  const calculation = useMemo(() => {
    const base = selectedBox.basePrice;
    
    // Thickness scale
    let thicknessMultiplier = 1.0;
    if (thickness === 1500) thicknessMultiplier = 1.12;
    if (thickness === 1800) thicknessMultiplier = 1.25;

    // Dimension scaling
    const stdVol = 8 * 6 * 3; // 144 cu in
    const currentVol = Math.max(1, length * width * depth);
    const volScale = Math.pow(currentVol / stdVol, 0.35);

    // Finish cost per unit
    let finishAddOn = 0;
    if (finish === "foil") finishAddOn = 0.45;
    if (finish === "spot-uv") finishAddOn = 0.35;
    if (finish === "soft-touch") finishAddOn = 0.25;
    if (finish === "embossed") finishAddOn = 0.40;

    // Custom Foam Insert add-on
    const insertCost = hasInsert ? 0.95 : 0;

    // Volume discount curve
    const volumeFactor = Math.pow(500 / quantity, 0.30);

    const calculatedUnitPrice = (base * thicknessMultiplier * volScale * volumeFactor) + finishAddOn + insertCost;
    const unitPrice = Math.max(1.50, parseFloat(calculatedUnitPrice.toFixed(2)));
    const total = Math.round(unitPrice * quantity);

    // Baseline un-discounted reference for savings
    const baseRef = (base * thicknessMultiplier * volScale * 1.35) + finishAddOn + insertCost;
    const savingsPercent = Math.max(0, Math.round(((baseRef - unitPrice) / baseRef) * 100));

    return {
      unitPrice,
      total,
      savingsPercent,
      leadTime: selectedBox.leadTime
    };
  }, [selectedBox, thickness, length, width, depth, finish, hasInsert, quantity]);

  const handleSubmitQuote = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className={`bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden ${fullPage ? "max-w-5xl mx-auto" : ""}`}>
      
      {/* Top Banner */}
      <div className="bg-brand-900 text-white p-6 sm:p-8 flex flex-wrap justify-between items-center gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1.5 mb-1">
            <Sparkles className="w-3.5 h-3.5" /> Instant Rigid Box Configurator
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold">
            Custom Rigid Box Estimator
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm font-light mt-1">
            Select your rigid box structure, dimensions, and luxury finishes for instant volume pricing.
          </p>
        </div>
        <div className="bg-slate-800 px-4 py-2.5 rounded-2xl border border-slate-700 flex items-center gap-3">
          <Clock className="w-5 h-5 text-emerald-400" />
          <div>
            <p className="text-[10px] uppercase font-bold text-slate-400">Production Time</p>
            <p className="text-xs font-semibold text-white">{calculation.leadTime}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        
        {/* Left Configurator */}
        <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 border-b lg:border-b-0 lg:border-r border-slate-100">
          
          {/* 1. Box Style Selection */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              1. Choose Rigid Box Style
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {RIGID_BOXES.map((b) => {
                const isSelected = b.id === selectedBoxId;
                return (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => {
                      setSelectedBoxId(b.id);
                      if (b.id === "custom-insert-box") setHasInsert(true);
                    }}
                    className={`text-left p-2.5 rounded-2xl border-2 transition-all ${
                      isSelected 
                        ? "border-brand-900 bg-slate-50 shadow-sm" 
                        : "border-slate-100 hover:border-slate-300 bg-white"
                    }`}
                  >
                    <div className="h-20 w-full rounded-xl overflow-hidden mb-2 bg-slate-100">
                      <img src={b.image} alt={b.name} className="w-full h-full object-cover" />
                    </div>
                    <p className="text-xs font-bold text-slate-900 leading-tight">{b.name}</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">From ${b.basePrice.toFixed(2)}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Custom Dimensions */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                2. Internal Dimensions (Inches)
              </label>
              <span className="text-xs text-slate-400 font-mono">Length × Width × Depth</span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="text-[11px] font-semibold text-slate-600 block mb-1">Length</label>
                <input
                  type="number"
                  min={3}
                  max={24}
                  value={length}
                  onChange={(e) => setLength(parseFloat(e.target.value) || 3)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-brand-900 outline-none"
                />
              </div>
              <div>
                <label className="text-[11px] font-semibold text-slate-600 block mb-1">Width</label>
                <input
                  type="number"
                  min={3}
                  max={24}
                  value={width}
                  onChange={(e) => setWidth(parseFloat(e.target.value) || 3)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-brand-900 outline-none"
                />
              </div>
              <div>
                <label className="text-[11px] font-semibold text-slate-600 block mb-1">Depth</label>
                <input
                  type="number"
                  min={1}
                  max={12}
                  value={depth}
                  onChange={(e) => setDepth(parseFloat(e.target.value) || 1)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-brand-900 outline-none"
                />
              </div>
            </div>
          </div>

          {/* 3. Board Thickness & Finish */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                3. Board Caliper (Thickness)
              </label>
              <select
                value={thickness}
                onChange={(e) => setThickness(parseInt(e.target.value))}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:ring-2 focus:ring-brand-900 outline-none"
              >
                <option value={1200}>1200gsm (Standard Rigid - 1.8mm)</option>
                <option value={1500}>1500gsm (Heavy Luxury - 2.3mm)</option>
                <option value={1800}>1800gsm (Ultra-Rigid - 2.8mm)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                4. Luxury Surface Finish
              </label>
              <select
                value={finish}
                onChange={(e) => setFinish(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:ring-2 focus:ring-brand-900 outline-none"
              >
                <option value="soft-touch">Velvet Soft-Touch Lamination</option>
                <option value="foil">Hot Metallic Gold/Silver Foil (+45¢)</option>
                <option value="spot-uv">Gloss Spot UV Logo (+35¢)</option>
                <option value="embossed">Embossed 3D Relief (+40¢)</option>
                <option value="matte">Classic Matte Finish</option>
              </select>
            </div>
          </div>

          {/* 5. Custom Foam Insert Toggle */}
          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-slate-900">Custom Die-Cut Foam Insert?</p>
              <p className="text-[11px] text-slate-500">Laser cut to fit bottles, jars, or jewelry (+95¢/box)</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                checked={hasInsert} 
                onChange={(e) => setHasInsert(e.target.checked)} 
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-900"></div>
            </label>
          </div>

          {/* Artwork Upload Attachment */}
          <div className="p-3.5 bg-slate-50 rounded-2xl border border-dashed border-slate-300 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <UploadCloud className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <p className="text-xs font-bold text-slate-900">Have Logo or Artwork?</p>
                <p className="text-[10px] text-slate-500">Attach AI, PDF, or JPG for free 3D proof</p>
              </div>
            </div>
            <label className="cursor-pointer px-3 py-1.5 bg-white border border-slate-300 rounded-xl text-xs font-semibold text-slate-800 hover:bg-slate-100 shadow-sm transition-colors whitespace-nowrap">
              {uploadedFileName ? "Attached ✓" : "Upload File"}
              <input 
                type="file" 
                className="hidden" 
                onChange={(e) => setUploadedFileName(e.target.files?.[0]?.name || null)} 
              />
            </label>
          </div>

        </div>

        {/* Right Live Pricing Column */}
        <div className="lg:col-span-5 p-6 sm:p-8 bg-slate-50 flex flex-col justify-between space-y-6">
          
          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Select Quantity
              </label>
              {calculation.savingsPercent > 0 && (
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                  Save {calculation.savingsPercent}% in bulk
                </span>
              )}
            </div>

            {/* Quantity Selector */}
            <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-3 gap-2 mb-6">
              {QUANTITY_TIERS.map((tier) => (
                <button
                  key={tier}
                  type="button"
                  onClick={() => setQuantity(tier)}
                  className={`py-2 px-2 rounded-xl border text-xs font-bold transition-all ${
                    quantity === tier 
                      ? "bg-brand-900 text-white border-brand-900 shadow-sm" 
                      : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                  }`}
                >
                  {tier.toLocaleString()} pcs
                </button>
              ))}
            </div>

            {/* Price Card */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              
              <div className="flex justify-between items-baseline pb-3 border-b border-slate-100">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400">Unit Price</span>
                  <p className="text-3xl font-serif font-bold text-brand-900 mt-0.5">
                    ${calculation.unitPrice.toFixed(2)}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase font-bold text-slate-400">Estimated Total</span>
                  <p className="text-xl font-bold text-slate-900 mt-0.5">
                    ${calculation.total.toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-1.5 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span className="text-slate-400">Style:</span>
                  <span className="font-semibold text-slate-800">{selectedBox.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Dimensions:</span>
                  <span className="font-semibold text-slate-800">{length}" × {width}" × {depth}"</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Caliper:</span>
                  <span className="font-semibold text-slate-800">{thickness}gsm Rigid Board</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Finish:</span>
                  <span className="font-semibold text-slate-800 capitalize">{finish.replace("-", " ")}</span>
                </div>
                {hasInsert && (
                  <div className="flex justify-between text-emerald-700">
                    <span>Foam Insert:</span>
                    <span className="font-semibold">Included</span>
                  </div>
                )}
              </div>

            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full py-3.5 px-6 rounded-full bg-brand-900 text-white font-semibold text-sm hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Get Official Quote & 3D Proof</span>
            </button>

            <p className="text-[10px] text-center text-slate-400">
              ✓ Free vector dielines • Zero payment required upfront
            </p>
          </div>

        </div>

      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative animate-in fade-in zoom-in-95 duration-200">
            
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 font-bold"
            >
              ✕
            </button>

            {!submitted ? (
              <>
                <h3 className="font-serif text-2xl font-bold text-slate-900 mb-1">
                  Request 3D Proof & Quote
                </h3>
                <p className="text-xs text-slate-500 mb-4">
                  {quantity.toLocaleString()} pcs of {selectedBox.name} at <strong className="text-slate-900">${calculation.unitPrice.toFixed(2)}/box</strong>.
                </p>

                <form onSubmit={handleSubmitQuote} className="space-y-3">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-brand-900 outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@brand.com"
                      value={formData.workEmail}
                      onChange={(e) => setFormData({...formData, workEmail: e.target.value})}
                      className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-brand-900 outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Company Name</label>
                    <input
                      type="text"
                      placeholder="Brand Name"
                      value={formData.companyName}
                      onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                      className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-brand-900 outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-brand-900 outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-brand-900 text-white rounded-xl font-bold text-xs hover:bg-slate-800 transition-colors shadow-md mt-2"
                  >
                    Submit & Generate 3D Proof
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-serif text-xl font-bold text-slate-900">
                  Quote Request Received!
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. A packaging specialist will deliver your formal 3D proof & dielines to <strong>{formData.workEmail}</strong> within 4 business hours.
                </p>
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    setSubmitted(false);
                  }}
                  className="px-5 py-2 bg-slate-100 text-slate-800 font-semibold rounded-full text-xs hover:bg-slate-200 transition-colors mt-2"
                >
                  Close
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
