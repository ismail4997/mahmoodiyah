import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, Search, PenTool, Box, Factory, Truck } from "lucide-react";

export const metadata = {
  title: "Packaging Process | Mahmoodiyah",
  description: "Learn how Mahmoodiyah delivers custom packaging through our clear 5-step workflow: Discover, Design, Sample, Produce, and Deliver."
};

export default function ProcessPage() {
  const steps = [
    {
      num: "01",
      title: "DISCOVER",
      subtitle: "Understanding your product & requirements",
      desc: "We start by analyzing your product specifications, target dimensions, container weight, branding identity, packaging category (Bleach Card, Box Board, Rigid Box, or Bag), and target production quantities.",
      deliverables: ["Product dimension assessment", "Substrate & material recommendations", "Initial budget & quote estimate"]
    },
    {
      num: "02",
      title: "DESIGN",
      subtitle: "Engineering structure & visual layout",
      desc: "Our team develops the structural die-line tailored to your exact item. We map out tuck styles, lock bottoms, window cutouts, or custom cavity inserts, ensuring your artwork and branding align seamlessly with fold lines.",
      deliverables: ["Custom structural die-line (PDF/AI)", "Artwork placement guidance", "Finishing specifications (Foil, UV, Lamination)"]
    },
    {
      num: "03",
      title: "SAMPLE",
      subtitle: "Physical validation & prototyping",
      desc: "Where required, a physical unprinted structural plain mock-up or proof is created to verify dimensions, item snugness, and folding functionality before committing to full manufacturing.",
      deliverables: ["Structural sizing check", "Product fit confirmation", "Client sign-off on die-line"]
    },
    {
      num: "04",
      title: "PRODUCE",
      subtitle: "High-precision manufacturing & finishing",
      desc: "Once approved, your packaging moves into manufacturing: high-fidelity offset printing, Golden Panni / multi-color hot foil stamping, protective laminations, precision die-cutting, scoring, and automated gluing.",
      deliverables: ["High-precision offset printing", "Specialized foil & spot UV finishing", "Automated die-cutting & fold-gluing"]
    },
    {
      num: "05",
      title: "DELIVER",
      subtitle: "Quality inspection & packaging delivery",
      desc: "Each production batch undergoes thorough quality control for glue seam integrity, color consistency, and count verification before being carefully packed flat or in master cartons for safe delivery to your warehouse.",
      deliverables: ["Final batch quality inspection", "Protective master carton packaging", "Safe dispatch to your facility"]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col selection:bg-neutral-900 selection:text-white">
      <Header />

      <main className="flex-grow">
        
        {/* Header */}
        <section className="pt-16 pb-14 bg-[#fafafa] border-b border-neutral-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">Methodology</span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-950 tracking-tight mt-2">
              Our 5-Step Process
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 font-light max-w-2xl mt-4 leading-relaxed">
              From the initial consultation to final delivery, our straightforward 5-step workflow ensures your packaging is structurally sound, visually refined, and produced with accuracy.
            </p>
          </div>
        </section>

        {/* Steps List */}
        <section className="py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {steps.map((step, idx) => (
              <div 
                key={step.num}
                className="p-8 md:p-10 rounded-3xl bg-neutral-50 border border-neutral-200/80 grid grid-cols-1 md:grid-cols-12 gap-8 items-start hover:shadow-md transition-all"
              >
                <div className="md:col-span-3 flex flex-col justify-between">
                  <span className="font-mono text-4xl md:text-5xl font-bold text-neutral-900">{step.num}</span>
                  <span className="text-xs uppercase tracking-widest font-bold text-neutral-400 mt-2">Step {idx + 1}</span>
                </div>

                <div className="md:col-span-9 space-y-4">
                  <div>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-neutral-950">{step.title}</h2>
                    <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mt-1">{step.subtitle}</p>
                  </div>

                  <p className="text-sm text-neutral-700 leading-relaxed font-light">
                    {step.desc}
                  </p>

                  <div className="pt-4 border-t border-neutral-200">
                    <p className="text-[11px] uppercase tracking-wider font-bold text-neutral-900 mb-2">Key Milestones:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-neutral-600">
                      {step.deliverables.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-neutral-900 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-neutral-950 text-white text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">
              Ready to begin at Step 01?
            </h2>
            <p className="text-neutral-400 text-sm max-w-xl mx-auto">
              Send us your packaging inquiry, product dimensions, and target quantities today.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-neutral-950 text-xs font-semibold uppercase tracking-wider hover:bg-neutral-200 transition-all shadow-xl"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <a
                href="https://wa.me/923024598791"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-neutral-700 text-neutral-300 text-xs font-semibold tracking-wider uppercase hover:bg-neutral-900 transition-colors"
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
