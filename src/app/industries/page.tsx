import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { REAL_INDUSTRIES } from "@/data/industries";
import { ArrowRight, CheckCircle2, Layers } from "lucide-react";

export const metadata = {
  title: "Industry Packaging Solutions | Mahmoodiyah",
  description: "Specialized custom packaging solutions for cosmetics, healthcare, food, baby care, industrial hardware, and luxury fragrance sectors."
};

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col selection:bg-neutral-900 selection:text-white">
      <Header />

      <main className="flex-grow">
        
        {/* Page Header */}
        <section className="pt-16 pb-14 bg-[#fafafa] border-b border-neutral-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">Sectors</span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-950 tracking-tight mt-2">
              Industries We Serve
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 font-light max-w-2xl mt-4 leading-relaxed">
              Packaging requirements differ greatly across products and industries. We adapt material weight, structural die-lines, and finishing techniques to match your sector's exact commercial needs.
            </p>
          </div>
        </section>

        {/* Industries List */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {REAL_INDUSTRIES.map((ind, idx) => (
              <div 
                key={ind.id}
                id={ind.slug}
                className="p-8 md:p-12 rounded-3xl bg-neutral-50 border border-neutral-200/80 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-6 space-y-4">
                  <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">Sector 0{idx + 1}</span>
                  <h2 className="font-serif text-3xl font-bold text-neutral-950">{ind.name}</h2>
                  <p className="text-sm text-neutral-600 leading-relaxed font-light">
                    {ind.description}
                  </p>

                  <div className="pt-2">
                    <p className="text-xs uppercase tracking-wider text-neutral-900 font-bold mb-2">Key Packaging Needs:</p>
                    <ul className="space-y-1.5 text-xs text-neutral-700">
                      {ind.keyPackagingNeeds.map((need, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-neutral-900 shrink-0" />
                          <span>{need}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-6 bg-white p-6 md:p-8 rounded-2xl border border-neutral-200/80 space-y-4">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold">Recommended Materials</span>
                    <p className="text-xs font-semibold text-neutral-900 mt-1">
                      {ind.recommendedMaterials.join(" • ")}
                    </p>
                  </div>

                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold">Signature Finishes</span>
                    <p className="text-xs font-semibold text-neutral-900 mt-1">
                      {ind.recommendedFinishes.join(" • ")}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-100 flex flex-wrap gap-4 items-center justify-between">
                    <Link
                      href={`/quote?industry=${ind.slug}`}
                      className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-neutral-900 hover:text-neutral-600"
                    >
                      <span>Inquire For {ind.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </Link>

                    {ind.relatedProjects.length > 0 && (
                      <Link
                        href={`/work/${ind.relatedProjects[0]}`}
                        className="text-xs text-neutral-500 hover:text-neutral-900"
                      >
                        View Related Project →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 bg-neutral-950 text-white text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">
              Custom Packaging Tailored to Your Product
            </h2>
            <p className="text-neutral-400 text-sm max-w-xl mx-auto">
              Discuss your sector-specific requirements, barrier coating needs, or load-bearing limits with our packaging team.
            </p>
            <div className="pt-2">
              <Link
                href="/quote"
                className="inline-flex items-center px-8 py-4 rounded-full bg-white text-neutral-950 text-xs font-semibold uppercase tracking-wider hover:bg-neutral-200 transition-all shadow-xl"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
