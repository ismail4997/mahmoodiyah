"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle2, ShieldCheck, Truck, Sparkles, Layers, Box } from "lucide-react";
import confetti from "canvas-confetti";

export default function SampleKitPage() {
  const [ordered, setOrdered] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    address: "",
    city: "",
    zip: "",
    primaryInterest: "rigid"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrdered(true);
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Header />

      <main className="flex-grow py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
              Zero Risk Tactile Evaluation
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-brand-900 mt-3 mb-4">
              Packmenn Custom Sample Box Kit
            </h1>
            <p className="text-slate-600 text-sm sm:text-base font-light">
              Get an unboxing preview kit containing material swatches, caliper thickness guides, print resolutions, and luxury finish samples. <strong className="text-brand-900 font-semibold">$19 fee is 100% credited back to your first order.</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Preview Column */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="h-80 w-full rounded-3xl overflow-hidden bg-slate-200 shadow-lg relative">
                <img 
                  src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=1000" 
                  alt="Packmenn Sample Kit" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-brand-900 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                  Includes Over 15+ Swatches
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="font-serif text-lg font-bold text-brand-900">
                  What's Inside Your Kit:
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Rigid Box Greyboards:</strong> 1200gsm, 1500gsm, and 1800gsm luxury calipers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Corrugated Flute Swatches:</strong> E-Flute, B-Flute in Kraft and Bleached White</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Folding Paperboards:</strong> 16pt, 18pt SBS and clay-coated retail boards</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Finish Samples:</strong> Gold Foil, Spot UV Gloss, Velvet Soft-Touch, Debossing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>$25 Production Promo Voucher</strong> inside the box</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Right Order Form Column */}
            <div className="lg:col-span-6 bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-xl">
              
              {!ordered ? (
                <>
                  <div className="flex justify-between items-baseline mb-6 pb-4 border-b border-slate-100">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-brand-900">
                        Order Sample Kit
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">Ships within 24 hours via Priority Air</p>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-serif font-bold text-brand-900">$19</span>
                      <span className="text-[10px] text-emerald-700 block font-semibold">100% Rebated</span>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Jordan Hayes"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-900 outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs font-bold text-slate-700 block mb-1">Work Email *</label>
                        <input
                          type="email"
                          required
                          placeholder="jordan@brand.com"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-900 outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-slate-700 block mb-1">Company / Brand</label>
                        <input
                          type="text"
                          placeholder="Brand Name"
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                          className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-900 outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Shipping Street Address *</label>
                      <input
                        type="text"
                        required
                        placeholder="123 Commerce Way, Suite 400"
                        value={formData.address}
                        onChange={(e) => setFormData({...formData, address: e.target.value})}
                        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-900 outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs font-bold text-slate-700 block mb-1">City / Region *</label>
                        <input
                          type="text"
                          required
                          placeholder="New York, NY"
                          value={formData.city}
                          onChange={(e) => setFormData({...formData, city: e.target.value})}
                          className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-900 outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-slate-700 block mb-1">Postal / Zip Code *</label>
                        <input
                          type="text"
                          required
                          placeholder="10001"
                          value={formData.zip}
                          onChange={(e) => setFormData({...formData, zip: e.target.value})}
                          className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-900 outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Primary Packaging Interest</label>
                      <select
                        value={formData.primaryInterest}
                        onChange={(e) => setFormData({...formData, primaryInterest: e.target.value})}
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:ring-2 focus:ring-brand-900 outline-none"
                      >
                        <option value="rigid">Luxury Rigid Setup Boxes</option>
                        <option value="mailer">Corrugated Mailer Shipping Boxes</option>
                        <option value="folding">Folding Paper Cartons</option>
                        <option value="pouches">Stand-Up Barrier Pouches</option>
                        <option value="bags">Retail Paper Shopping Bags</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-brand-900 text-white rounded-full font-bold text-sm hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 mt-2 flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-4 h-4 text-amber-300" />
                      <span>Order Sample Kit ($19 Rebated)</span>
                    </button>
                    
                    <p className="text-[11px] text-center text-slate-400">
                      ✓ Free Express Delivery • Includes $25 production voucher
                    </p>
                  </form>
                </>
              ) : (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-slate-900">
                    Sample Kit Dispatched!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>! Your Packmenn tactile sample box kit has been scheduled for priority dispatch to <strong>{formData.address}, {formData.city}</strong>.
                  </p>
                  <div className="p-4 bg-slate-50 rounded-2xl text-xs text-slate-600 border border-slate-100">
                    Your $25 production credit code <strong>PACKMENN-REBATE25</strong> has been registered to <strong>{formData.email}</strong>.
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
