import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Mahmoodiyah | Custom Packaging Partner",
  description: "Learn about Mahmoodiyah, a design-focused custom packaging company helping brands create packaging that protects, presents, and elevates their products."
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col selection:bg-neutral-900 selection:text-white">
      <Header />

      <main className="flex-grow">
        
        {/* Hero Section */}
        <section className="pt-16 pb-16 bg-[#fafafa] border-b border-neutral-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">About Mahmoodiyah</span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-950 tracking-tight leading-tight">
                Packaging Built Around Your Brand.
              </h1>
              <p className="text-base sm:text-xl text-neutral-600 font-light leading-relaxed pt-2">
                Mahmoodiyah is a custom packaging company dedicated to helping brands and manufacturers create packaging that looks professional, represents their identity, protects their products, and elevates the customer experience.
              </p>
            </div>
          </div>
        </section>

        {/* Core Positioning */}
        <section className="py-20 md:py-28 bg-white border-b border-neutral-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">Our Approach</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-950">
                  More Than Just a Box Manufacturer
                </h2>
                <p className="text-base text-neutral-700 leading-relaxed font-light">
                  We don't believe in one-size-fits-all generic templates. Every product has distinct physical dimensions, protection tolerances, shelf presentation demands, and target audiences.
                </p>
                <p className="text-base text-neutral-700 leading-relaxed font-light">
                  Mahmoodiyah works directly with brand founders, product designers, and procurement teams to engineer the exact structure, board caliper, tuck style, and finishing details required for a flawless market launch.
                </p>

                <div className="pt-2">
                  <Link
                    href="/process"
                    className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-neutral-900 hover:text-neutral-600"
                  >
                    <span>Explore Our 5-Step Process</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6 relative rounded-3xl overflow-hidden aspect-[4/3] bg-neutral-100 shadow-xl">
                <Image
                  src="/images/projects/benson-spark-plug-angle.jpg"
                  alt="Mahmoodiyah Custom Packaging Production"
                  fill
                  className="object-cover"
                />
              </div>

            </div>
          </div>
        </section>

        {/* 6 Core Focus Areas */}
        <section className="py-20 md:py-28 bg-[#fafafa] border-b border-neutral-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">Our Standards</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-950">
                What Guides Every Packaging Project
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <div className="p-8 rounded-3xl bg-white border border-neutral-200/80 space-y-3">
                <h3 className="font-serif text-xl font-bold text-neutral-950">Customization</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Every die-line, fold, and flap is constructed around the actual item rather than forcing your product into pre-made carton stock.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-white border border-neutral-200/80 space-y-3">
                <h3 className="font-serif text-xl font-bold text-neutral-950">Design Sensitivity</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  We understand typographic balance, color fidelity, contrast, and how light reflects off foil stamping and lamination.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-white border border-neutral-200/80 space-y-3">
                <h3 className="font-serif text-xl font-bold text-neutral-950">Product Presentation</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Structuring packaging so that your product stands upright, remains secure, and commands attention on retail shelves.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-white border border-neutral-200/80 space-y-3">
                <h3 className="font-serif text-xl font-bold text-neutral-950">Packaging Quality</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Using virgin Bleach Card (SBS), high-density Box Board, and dense rigid board to ensure structural crispness without warping.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-white border border-neutral-200/80 space-y-3">
                <h3 className="font-serif text-xl font-bold text-neutral-950">Attention to Detail</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Checking score line tolerances, registration alignment, foiling sharpness, and clean glue joints on every production batch.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-white border border-neutral-200/80 space-y-3">
                <h3 className="font-serif text-xl font-bold text-neutral-950">Client Collaboration</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Transparent communication with clients from initial inquiry to final sample approval and manufacturing delivery.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 bg-neutral-950 text-white text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">
              Ready to create your custom packaging?
            </h2>
            <p className="text-neutral-400 text-sm max-w-xl mx-auto">
              Get in touch with Mahmoodiyah to discuss your product dimensions, material requirements, or receive a fast quotation.
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
