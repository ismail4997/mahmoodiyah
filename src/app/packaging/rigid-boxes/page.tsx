"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CATEGORIES, PRODUCT_TYPES } from "@/data/catalog";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export default function RigidBoxesPage() {
  const categoryData = CATEGORIES.find(c => c.id === 'rigid-boxes')!;
  const products = PRODUCT_TYPES.filter(p => p.category === 'rigid-boxes');

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Header />

      <main className="flex-grow">
        
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
                  Luxury Setup & Keepsake Boxes
                </span>
                <h1 className="font-serif text-3xl sm:text-5xl font-bold text-slate-950 tracking-tight">
                  {categoryData.heroHeadline}
                </h1>
                <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed max-w-xl">
                  {categoryData.heroSubheading}
                </p>
                <div className="pt-2 flex gap-3">
                  <Link
                    href="/quote?category=rigid-boxes"
                    className="px-7 py-3.5 bg-slate-950 text-white font-bold text-xs rounded-full hover:bg-slate-800 transition-colors shadow-sm flex items-center gap-2"
                  >
                    <span>Configure Rigid Boxes</span>
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                  </Link>
                  <Link
                    href="/sample-request"
                    className="px-6 py-3.5 bg-white border border-slate-300 text-slate-800 font-bold text-xs rounded-full hover:bg-slate-100 transition-colors"
                  >
                    Request Sample Kit
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 h-72 lg:h-96 rounded-3xl overflow-hidden bg-slate-200 shadow-xl border border-slate-200">
                <img 
                  src={categoryData.image} 
                  alt={categoryData.name} 
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>
        </section>

        {/* Subcategories Breakdown */}
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950">
                Rigid Box Structural Families
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm font-light mt-1">
                Concealed magnetic snaps, lift-off lids, slide drawers, and shoulder neck structures.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryData.subcategories.map((sub) => (
                <div key={sub.name} className="p-6 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-slate-950 mb-2">{sub.name}</h3>
                    <p className="text-xs text-slate-500 font-light mb-4">{sub.description}</p>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {sub.items.map(item => (
                        <li key={item} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-serif text-3xl font-bold text-slate-950">
                Luxury Rigid Box Products
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm font-light mt-1">
                Engineered with 1.5mm–3.0mm solid greyboard and custom laser-cut velvet foam.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((p) => (
                <div key={p.id} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:shadow-xl transition-all flex flex-col justify-between">
                  <div>
                    <div className="h-56 w-full rounded-2xl overflow-hidden mb-5 bg-slate-100">
                      <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                      {p.subcategory}
                    </span>

                    <h3 className="font-serif text-xl font-bold text-slate-950 mt-2 mb-1">
                      {p.name}
                    </h3>
                    <p className="text-xs text-slate-600 font-light leading-relaxed mb-4">
                      {p.tagline}
                    </p>

                    <div className="space-y-1 text-[11px] text-slate-500 border-t border-slate-100 pt-3 mb-5">
                      <p>MOQ: <strong>{p.moq} units</strong></p>
                      <p>Lead Time: <strong>{p.leadTime}</strong></p>
                      <p>Starting from: <strong className="text-slate-900">${p.basePriceUSD.toFixed(2)} / unit</strong></p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      href={`/packaging/rigid-boxes/${p.slug}`}
                      className="py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-semibold text-center transition-colors"
                    >
                      Specifications
                    </Link>
                    <Link
                      href={`/quote?category=rigid-boxes&product=${p.slug}`}
                      className="py-2.5 px-3 bg-slate-950 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1"
                    >
                      <span>Quote</span>
                      <ArrowRight className="w-3 h-3 text-emerald-400" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
