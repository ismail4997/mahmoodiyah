"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, ShieldCheck, Truck, Layers, Sliders, Box } from "lucide-react";

export default function HowItWorksPage() {
  const steps = [
    {
      num: "01",
      title: "Choose Your Packaging System",
      desc: "Select between folding paperboard cartons, fluted corrugated shippers, or luxury solid rigid setup boxes depending on your product's weight and retail unboxing goals.",
      details: ["Select standard or custom structures", "Determine primary product dimensions", "Assess weight and barrier requirements"]
    },
    {
      num: "02",
      title: "Configure Custom Specifications",
      desc: "Use our interactive quotation system to define exact length, width, and depth in inches, centimeters, or millimeters. Choose board calipers and tactile finishes.",
      details: ["14pt–24pt SBS or 1.5mm–3.0mm Greyboard", "Full color CMYK or Pantone PMS matching", "Hot foil stamping, spot UV & soft touch"]
    },
    {
      num: "03",
      title: "Receive Instant Volume Quotation",
      desc: "Get real-time tiered volume pricing from 100 to 25,000+ units with transparent unit cost breakdowns in your local currency.",
      details: ["Instant automated cost estimation", "Clear volume tier discount curve", "No hidden tooling or plate fees"]
    },
    {
      num: "04",
      title: "Approve 3D Proof & Dielines",
      desc: "Our structural prepress engineers generate precision vector dielines and high-resolution 3D digital unboxing proofs for your review before production.",
      details: ["Free vector dieline generation", "Pre-flight artwork resolution checks", "Pre-production 1-off physical prototypes available"]
    },
    {
      num: "05",
      title: "Precision Manufacturing",
      desc: "Manufactured in certified clean facilities with strict spectro-densitometer color control, sharp die-cutting, and rigorous structural testing.",
      details: ["ISO 9001 certified quality control", "Automated gluing & folding lines", "Comprehensive batch sample archiving"]
    },
    {
      num: "06",
      title: "Global Freight & Doorstep Delivery",
      desc: "Securely shrink-wrapped on international heat-treated pallets or carton-packed for swift air and ocean delivery worldwide.",
      details: ["DDP & FOB international freight terms", "Customs clearance and tracking", "Multi-warehouse split delivery options"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Header />

      <main className="flex-grow py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
              Production Methodology
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-slate-950 mt-3 mb-4">
              How Packmenn Works
            </h1>
            <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed">
              We took the complexity out of custom packaging manufacturing. Here is our six-stage process from concept to global delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {steps.map((s) => (
              <div key={s.num} className="p-8 bg-slate-50 rounded-3xl border border-slate-200 flex flex-col justify-between">
                <div>
                  <span className="font-serif text-3xl font-bold text-slate-400 block mb-4">{s.num}</span>
                  <h3 className="font-serif text-xl font-bold text-slate-950 mb-2">{s.title}</h3>
                  <p className="text-xs text-slate-600 font-light leading-relaxed mb-6">{s.desc}</p>
                  
                  <div className="space-y-1.5 border-t border-slate-200/80 pt-4 text-xs text-slate-700">
                    {s.details.map(d => (
                      <p key={d} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{d}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-950 text-white font-bold text-xs rounded-full hover:bg-slate-800 transition-colors shadow-md"
            >
              <span>Start Your Custom Packaging Project</span>
              <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
