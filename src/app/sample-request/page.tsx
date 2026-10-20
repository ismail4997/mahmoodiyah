"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CATEGORIES, PRODUCT_TYPES } from "@/data/catalog";
import { CategoryId } from "@/types";
import { CheckCircle2, UploadCloud, Sparkles, Box, ShieldCheck, Truck } from "lucide-react";
import confetti from "canvas-confetti";

export default function SampleRequestPage() {
  const [category, setCategory] = useState<CategoryId>('folding-cartons');
  const [productTypeId, setProductTypeId] = useState<string>('straight-tuck-end');
  const [length, setLength] = useState<string>('6');
  const [width, setWidth] = useState<string>('4');
  const [height, setHeight] = useState<string>('2');
  const [quantity, setQuantity] = useState<number>(1);
  const [referenceFile, setReferenceFile] = useState<string | null>(null);
  const [artworkFile, setArtworkFile] = useState<string | null>(null);

  const [customer, setCustomer] = useState({
    name: '',
    company: '',
    email: '',
    country: 'United States',
    address: '',
    phone: '',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submittedSample, setSubmittedSample] = useState<any | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const availableProducts = PRODUCT_TYPES.filter(p => p.category === category);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customer.name || !customer.email || !customer.company) {
      setErrorMsg("Please fill in your name, company, and work email.");
      return;
    }

    setSubmitting(true);
    setErrorMsg(null);

    try {
      const selectedProd = PRODUCT_TYPES.find(p => p.id === productTypeId);
      const res = await fetch('/api/samples', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          category,
          productTypeId,
          productTypeName: selectedProd?.name || 'Custom Sample',
          dimensions: {
            length: parseFloat(length) || 6,
            width: parseFloat(width) || 4,
            height: parseFloat(height) || 2,
            unit: 'inch'
          },
          quantity,
          customer,
          referenceFileName: referenceFile || artworkFile || undefined
        })
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit sample request');
      }

      setSubmittedSample(data.sample);
      confetti({
        particleCount: 130,
        spread: 75,
        origin: { y: 0.6 }
      });
    } catch (err: any) {
      setErrorMsg(err.message || 'An error occurred. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Header />

      <main className="flex-grow py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
              Pre-Production Validation
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-slate-950 mt-3 mb-3">
              Request a Packaging Sample
            </h1>
            <p className="text-slate-600 text-xs sm:text-sm font-light">
              Evaluate material calipers, flute structures, print accuracy, and luxury finishes before committing to bulk manufacturing.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
            
            {!submittedSample ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {errorMsg && (
                  <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-800 font-semibold">
                    {errorMsg}
                  </div>
                )}

                {/* Step 1: Packaging Category & Type */}
                <div className="space-y-4 pb-6 border-b border-slate-100">
                  <h3 className="font-serif text-lg font-bold text-slate-950">
                    1. Packaging Specifications
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Packaging Category *</label>
                      <select
                        value={category}
                        onChange={(e) => {
                          const newCat = e.target.value as CategoryId;
                          setCategory(newCat);
                          const prods = PRODUCT_TYPES.filter(p => p.category === newCat);
                          if (prods.length > 0) setProductTypeId(prods[0].id);
                        }}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-slate-950 outline-none"
                      >
                        <option value="folding-cartons">Folding Cartons / Bleached Card</option>
                        <option value="corrugated-boxes">Corrugated Boxes / Mailers</option>
                        <option value="rigid-boxes">Rigid Boxes / Luxury Setup</option>
                        <option value="paper-bags">Paper Bags / Luxury Euro-Totes</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Product Structure *</label>
                      <select
                        value={productTypeId}
                        onChange={(e) => setProductTypeId(e.target.value)}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-slate-950 outline-none"
                      >
                        {availableProducts.map(p => (
                          <option key={p.id} value={p.id}>{p.name} ({p.subcategory})</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Dimensions */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Target Dimensions (Inches - L × W × H)
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      <input
                        type="text"
                        placeholder="Length"
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                        className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold"
                      />
                      <input
                        type="text"
                        placeholder="Width"
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                        className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold"
                      />
                      <input
                        type="text"
                        placeholder="Height"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold"
                      />
                    </div>
                  </div>
                </div>

                {/* Step 2: File Uploads */}
                <div className="space-y-4 pb-6 border-b border-slate-100">
                  <h3 className="font-serif text-lg font-bold text-slate-950">
                    2. Artwork / Reference Uploads (Optional)
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 rounded-2xl border border-dashed border-slate-300 text-center">
                      <p className="text-xs font-bold text-slate-900 mb-1">Artwork Dieline</p>
                      <label className="inline-block px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 hover:bg-slate-100 cursor-pointer shadow-xs">
                        {artworkFile ? "✓ " + artworkFile : "Attach File"}
                        <input type="file" className="hidden" onChange={(e) => setArtworkFile(e.target.files?.[0]?.name || null)} />
                      </label>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-2xl border border-dashed border-slate-300 text-center">
                      <p className="text-xs font-bold text-slate-900 mb-1">Reference Image</p>
                      <label className="inline-block px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 hover:bg-slate-100 cursor-pointer shadow-xs">
                        {referenceFile ? "✓ " + referenceFile : "Attach Photo"}
                        <input type="file" className="hidden" onChange={(e) => setReferenceFile(e.target.files?.[0]?.name || null)} />
                      </label>
                    </div>
                  </div>
                </div>

                {/* Step 3: Contact Details */}
                <div className="space-y-4">
                  <h3 className="font-serif text-lg font-bold text-slate-950">
                    3. Dispatch Address & Contact Information
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Jordan Blake"
                        value={customer.name}
                        onChange={(e) => setCustomer({...customer, name: e.target.value})}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-slate-950 outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Company / Brand *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Atelier Noir Paris"
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
                        placeholder="jordan@ateliernoir.com"
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

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Physical Dispatch Address</label>
                    <input
                      type="text"
                      placeholder="Suite, Street, City, Postal Code"
                      value={customer.address}
                      onChange={(e) => setCustomer({...customer, address: e.target.value})}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-slate-950 outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Sample Notes / Specific Swatches Needed</label>
                    <textarea
                      rows={3}
                      placeholder="Mention any specific board thicknesses (e.g. 2mm greyboard) or foil stamping colors you want included..."
                      value={customer.message}
                      onChange={(e) => setCustomer({...customer, message: e.target.value})}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-slate-950 outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 bg-slate-950 text-white rounded-full font-bold text-sm hover:bg-slate-800 transition-all shadow-md flex items-center justify-center gap-2 mt-4"
                  >
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    <span>{submitting ? "Submitting Sample Request..." : "Request a Sample"}</span>
                  </button>
                </div>

              </form>
            ) : (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-slate-950">
                  Sample Request Registered
                </h3>
                <p className="text-xs font-mono text-slate-500 bg-slate-100 py-1 px-3 rounded-full inline-block">
                  Reference: {submittedSample.sampleNumber}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{submittedSample.customer.name}</strong>. Our prepress dispatch center will assemble your material swatches and {submittedSample.productTypeName} proof for delivery to <strong>{submittedSample.customer.country}</strong>.
                </p>
                <div className="pt-4">
                  <a
                    href="/"
                    className="px-6 py-2.5 bg-slate-950 text-white rounded-full text-xs font-bold hover:bg-slate-800 transition-colors"
                  >
                    Return to Homepage
                  </a>
                </div>
              </div>
            )}

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
