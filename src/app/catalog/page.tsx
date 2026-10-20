"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RIGID_BOXES, RigidBoxStyle } from "@/data/products";
import { ArrowRight, CheckCircle2, Sparkles, X } from "lucide-react";

export default function CatalogPage() {
  const [activeModal, setActiveModal] = useState<RigidBoxStyle | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Header />

      <main className="flex-grow py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
              Rigid Setup Box Styles
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-brand-900 mt-3 mb-3">
              Luxury Rigid Box Catalog
            </h1>
            <p className="text-slate-600 text-xs sm:text-sm font-light">
              Explore our 6 custom rigid setup box structures, crafted with 1200gsm–1800gsm greyboard for ultra-premium luxury unboxing.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {RIGID_BOXES.map((box) => (
              <div 
                key={box.id}
                className="group bg-white rounded-3xl p-5 border border-slate-200/90 hover:border-slate-300 hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-4 bg-slate-100">
                    <img 
                      src={box.image} 
                      alt={box.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute bottom-3 right-3 bg-brand-900/90 backdrop-blur-sm text-white px-2.5 py-1 rounded-lg text-xs font-bold shadow">
                      From ${box.basePrice.toFixed(2)}/box
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-brand-900 mb-1">
                    {box.name}
                  </h3>
                  <p className="text-xs font-medium text-emerald-700 mb-2">
                    {box.tagline}
                  </p>
                  <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                    {box.description}
                  </p>

                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-[11px] text-slate-600 space-y-1 mb-4">
                    <p><strong>Best For:</strong> {box.bestFor}</p>
                    <p><strong>Min Order:</strong> {box.minOrderQty} units • <strong>Lead:</strong> {box.leadTime}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setActiveModal(box)}
                    className="py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-semibold transition-colors text-center"
                  >
                    Quick Specs
                  </button>
                  <Link
                    href={`/quote?box=${box.id}`}
                    className="py-2.5 px-3 bg-brand-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-1 shadow-sm"
                  >
                    <span>Configure</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>

      {/* Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative animate-in fade-in zoom-in-95 duration-200">
            
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 font-bold"
            >
              ✕
            </button>

            <div className="h-56 w-full rounded-2xl overflow-hidden mb-4 bg-slate-100">
              <img src={activeModal.image} alt={activeModal.name} className="w-full h-full object-cover" />
            </div>

            <h3 className="font-serif text-2xl font-bold text-slate-900 mb-1">
              {activeModal.name}
            </h3>
            <p className="text-xs font-medium text-emerald-700 mb-3">{activeModal.tagline}</p>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">{activeModal.description}</p>

            <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100 space-y-2 text-xs mb-5">
              <div>
                <p className="font-bold text-slate-800 text-[11px] uppercase tracking-wider mb-1">Key Features:</p>
                <ul className="space-y-1 text-slate-600">
                  {activeModal.features.map(f => (
                    <li key={f} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link
              href={`/quote?box=${activeModal.id}`}
              className="w-full py-3.5 bg-brand-900 text-white rounded-full font-bold text-xs hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Configure & Calculate Live Price</span>
            </Link>

          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
