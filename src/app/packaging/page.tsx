import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PACKAGING_SOLUTIONS } from "@/data/packaging";
import { FINISH_OPTIONS } from "@/data/finishes";
import { ArrowRight, CheckCircle2, Sparkles, Box, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Custom Packaging Solutions | Mahmoodiyah",
  description: "Explore Mahmoodiyah's available packaging solutions: Bleach card cartons, Box board packaging, Luxury rigid setup boxes, and custom carrier bags."
};

export default function PackagingPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col selection:bg-neutral-900 selection:text-white">
      <Header />

      <main className="flex-grow">
        
        {/* Page Header */}
        <section className="pt-16 pb-14 bg-[#fafafa] border-b border-neutral-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">Capabilities</span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-950 tracking-tight mt-2">
              Packaging Solutions
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 font-light max-w-2xl mt-4 leading-relaxed">
              Custom packaging options engineered around your product dimensions, brand aesthetics, and protection requirements. Solutions can be developed around your exact specifications.
            </p>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
            {PACKAGING_SOLUTIONS.map((solution, idx) => (
              <div 
                key={solution.id}
                id={solution.slug}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Visual */}
                <div className={`lg:col-span-6 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative rounded-3xl overflow-hidden aspect-[16/11] bg-neutral-100 shadow-xl">
                    <Image
                      src={solution.image}
                      alt={solution.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Details */}
                <div className={`lg:col-span-6 space-y-6 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">Category {idx + 1}</span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-950">
                    {solution.name}
                  </h2>
                  <p className="text-base text-neutral-600 font-light leading-relaxed">
                    {solution.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-neutral-100">
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-neutral-900 font-bold mb-2">Available Structures</h4>
                      <ul className="space-y-1.5 text-xs text-neutral-600">
                        {solution.structures.map((s, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-neutral-900"></span>
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-neutral-900 font-bold mb-2">Material Substrates</h4>
                      <ul className="space-y-1.5 text-xs text-neutral-600">
                        {solution.materialTypes.map((m, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-neutral-900"></span>
                            <span>{m}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={`/quote?solution=${solution.slug}`}
                      className="inline-flex items-center px-6 py-3 rounded-full bg-neutral-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-neutral-800 transition-all shadow"
                    >
                      <span>Inquire About {solution.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Finishes & Foiling Feature */}
        <section className="py-20 md:py-28 bg-[#fafafa] border-t border-neutral-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
              <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">Specialized Finishes</span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-950 tracking-tight">
                Embellishments & Foil Finishing
              </h2>
              <p className="text-sm md:text-base text-neutral-600 font-light leading-relaxed">
                Specializing in pure cardboard and rigid substrates with authentic Golden Panni, multi-color foiling, velvet lamination, and 3D embossing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {FINISH_OPTIONS.map((finish) => (
                <div key={finish.id} className="p-8 rounded-3xl bg-white border border-neutral-200/80 space-y-4 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-neutral-900 text-white flex items-center justify-center">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-neutral-950">{finish.name}</h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">{finish.description}</p>
                  <p className="text-[11px] font-semibold text-neutral-400 pt-2 border-t border-neutral-100">
                    Best for: {finish.bestFor}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 bg-neutral-950 text-white text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">
              Need a custom packaging structure developed?
            </h2>
            <p className="text-neutral-400 text-sm max-w-xl mx-auto">
              Share your product dimensions, sample requirements, or reference designs with our packaging specialists.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-neutral-950 text-xs font-semibold uppercase tracking-wider hover:bg-neutral-200 transition-all shadow-xl"
              >
                <span>Discuss Your Packaging</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <a
                href="https://wa.me/923024598791"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-neutral-700 text-neutral-300 text-xs font-semibold uppercase tracking-wider hover:bg-neutral-900 transition-colors"
              >
                <span>WhatsApp: 0302-4598791</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
