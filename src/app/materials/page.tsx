"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FINISH_OPTIONS } from "@/data/finishes";
import { Sparkles, ArrowRight, Layers, ShieldCheck } from "lucide-react";

export default function MaterialsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Header />

      <main className="flex-grow py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
              The Option Library
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-brand-900 mt-3 mb-4">
              Materials, Coatings & Luxury Finishes
            </h1>
            <p className="text-slate-600 text-sm sm:text-base font-light">
              Explore our extensive selection of tactile coatings, hot foil stamping, structural embossing, and custom-cut velvet inserts designed to command prestige.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {FINISH_OPTIONS.map((finish) => (
              <div 
                key={finish.id}
                className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="h-52 w-full rounded-2xl overflow-hidden mb-5 bg-slate-100">
                    <img src={finish.image} alt={finish.name} className="w-full h-full object-cover" />
                  </div>

                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                      {finish.luxuryTier}
                    </span>
                    <span className="text-xs text-slate-400 capitalize">{finish.category}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-brand-900 mb-2">
                    {finish.name}
                  </h3>
                  
                  <p className="text-xs font-semibold text-emerald-700 mb-2">
                    {finish.tagline}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {finish.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <p className="text-[11px] text-slate-500 mb-3">
                    Recommended with: <strong className="text-slate-800">{finish.bestPairedWith}</strong>
                  </p>
                  <Link
                    href={`/quote?finish=${finish.id}`}
                    className="w-full py-2.5 bg-slate-100 hover:bg-brand-900 hover:text-white rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-1 text-slate-800"
                  >
                    <span>Use in Custom Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Sample Kit Callout */}
          <div className="bg-brand-900 rounded-3xl p-8 lg:p-12 text-white flex flex-col md:flex-row justify-between items-center gap-8 shadow-xl">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">Tactile Swatch Kit</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold mt-1 mb-2">
                Experience all finishes in your hands
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-xl font-light">
                Order our physical sample box containing hot foil foils, soft-touch laminations, spot UV swatches, and greyboard calipers.
              </p>
            </div>
            <Link
              href="/sample-kit"
              className="px-8 py-4 bg-white text-slate-900 font-bold text-xs rounded-full hover:bg-slate-100 transition-colors shrink-0 shadow-lg"
            >
              Order Sample Kit for $19
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
