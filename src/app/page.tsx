import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClientLogoGrid } from "@/components/ClientLogos";
import { SELECTED_PROJECTS } from "@/data/projects";
import { REAL_CLIENTS } from "@/data/clients";
import { PACKAGING_SOLUTIONS } from "@/data/packaging";
import { FINISH_OPTIONS } from "@/data/finishes";
import { 
  ArrowRight, 
  ArrowUpRight, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Box, 
  ShieldCheck, 
  Sliders, 
  Palette, 
  Printer
} from "lucide-react";

export const metadata = {
  title: "Mahmoodiyah | Custom Packaging Solutions",
  description: "Custom packaging solutions designed around your product, brand, and customer experience. Bleach card boxes, box board cartons, and luxury rigid packaging."
};

export default function HomePage() {
  const featuredProjects = SELECTED_PROJECTS.filter(p => p.featured).slice(0, 4);

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col selection:bg-neutral-900 selection:text-white">
      <Header />

      <main className="flex-grow">
        
        {/* ========================================================================= */}
        {/* 1. HERO SECTION */}
        {/* ========================================================================= */}
        <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 bg-[#fafafa] border-b border-neutral-200/80 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Hero Copy */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-200/60 border border-neutral-300 text-xs font-semibold tracking-wider uppercase text-neutral-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-900"></span>
                  Mahmoodiyah Packaging
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-950 tracking-tight leading-[1.1]">
                  Packaging Designed Around Your Brand.
                </h1>

                <p className="text-lg md:text-xl text-neutral-600 font-light leading-relaxed max-w-xl">
                  Custom packaging solutions created around your product, brand identity, and customer unboxing experience.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-neutral-950 text-white text-sm font-semibold tracking-wider uppercase hover:bg-neutral-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    <span>Get in Touch</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>

                  <Link
                    href="/work"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-neutral-900 border border-neutral-300 text-sm font-semibold tracking-wider uppercase hover:bg-neutral-50 transition-colors"
                  >
                    <span>Explore Our Work</span>
                  </Link>
                </div>

                {/* Key Attributes */}
                <div className="pt-6 border-t border-neutral-200 grid grid-cols-3 gap-4 text-left">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">Materials</p>
                    <p className="text-xs font-medium text-neutral-900 mt-0.5">Bleach Card & Box Board</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">Finishes</p>
                    <p className="text-xs font-medium text-neutral-900 mt-0.5">Golden Panni & Foiling</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">Structure</p>
                    <p className="text-xs font-medium text-neutral-900 mt-0.5">Cartons, Blisters & Rigids</p>
                  </div>
                </div>
              </div>

              {/* Hero Visual Composition using Real Work */}
              <div className="lg:col-span-6 relative">
                <div className="grid grid-cols-2 gap-4">
                  
                  <div className="space-y-4">
                    <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5] bg-neutral-100 group border border-neutral-200/80">
                      <Image
                        src="/images/projects/benson-spark-plug-angle.jpg"
                        alt="Benson Spark Plug Automotive Box on Studio Background"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent flex items-end p-5">
                        <div>
                          <span className="text-[10px] uppercase tracking-widest text-neutral-300 font-semibold">Benson Automotive</span>
                          <p className="text-white text-sm font-semibold">Spark Plug Box Board Carton</p>
                        </div>
                      </div>
                    </div>

                    <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-square bg-neutral-100 group border border-neutral-200/80">
                      <Image
                        src="/images/projects/dezato-matilda-cake-box.png"
                        alt="Dezato Matilda Cake Puddle Artisan Bakery Box"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent flex items-end p-4">
                        <div>
                          <span className="text-[9px] uppercase tracking-wider text-neutral-300 font-semibold">Dezato Bakery</span>
                          <p className="text-white text-xs font-medium">Matilda Cake Puddle Box</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 pt-6">
                    <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-square bg-neutral-100 group border border-neutral-200/80">
                      <Image
                        src="/images/projects/rivaj-aloe-vera-mask-front.jpg"
                        alt="Rivaj Aloe Vera Sheet Mask Hanging Bleach Card Box"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent flex items-end p-4">
                        <div>
                          <span className="text-[9px] uppercase tracking-wider text-neutral-300 font-semibold">Rivaj Cosmetics</span>
                          <p className="text-white text-xs font-medium">Aloe Vera Mask Carton</p>
                        </div>
                      </div>
                    </div>

                    <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5] bg-neutral-100 group border border-neutral-200/80">
                      <Image
                        src="/images/projects/more-macaroni-box-front.jpg"
                        alt="More Macaroni 7 Spice Food-Grade Box"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent flex items-end p-5">
                        <div>
                          <span className="text-[10px] uppercase tracking-widest text-neutral-300 font-semibold">More Macaroni / Brunos</span>
                          <p className="text-white text-sm font-semibold">7 Spice Food-Grade Box</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. INTRODUCTION SECTION */}
        {/* ========================================================================= */}
        <section className="py-20 md:py-28 bg-white border-b border-neutral-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">The Philosophy</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-950 tracking-tight">
              Packaging That Represents Your Brand.
            </h2>
            <p className="text-lg md:text-xl text-neutral-600 font-light leading-relaxed max-w-3xl mx-auto">
              Packaging is more than just a box. At Mahmoodiyah, we treat packaging as the primary physical bridge to your customer—defining the unboxing moment, protecting your goods, and communicating your brand's true value.
            </p>

            {/* 6 Pillars */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-10 text-left">
              <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100">
                <span className="text-xs font-mono text-neutral-400">01</span>
                <h3 className="text-base font-bold text-neutral-950 mt-2">Brand Identity</h3>
                <p className="text-xs text-neutral-600 mt-1">Accurate color reproduction, typography, and finishing.</p>
              </div>

              <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100">
                <span className="text-xs font-mono text-neutral-400">02</span>
                <h3 className="text-base font-bold text-neutral-950 mt-2">Product Presentation</h3>
                <p className="text-xs text-neutral-600 mt-1">Structured display that showcases products with elegance.</p>
              </div>

              <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100">
                <span className="text-xs font-mono text-neutral-400">03</span>
                <h3 className="text-base font-bold text-neutral-950 mt-2">Unboxing Experience</h3>
                <p className="text-xs text-neutral-600 mt-1">Smooth tuck closures, magnetic snaps, and tactile coatings.</p>
              </div>

              <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100">
                <span className="text-xs font-mono text-neutral-400">04</span>
                <h3 className="text-base font-bold text-neutral-950 mt-2">Product Protection</h3>
                <p className="text-xs text-neutral-600 mt-1">Heavy-caliper boards and snug custom cavity inserts.</p>
              </div>

              <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100">
                <span className="text-xs font-mono text-neutral-400">05</span>
                <h3 className="text-base font-bold text-neutral-950 mt-2">Retail Presence</h3>
                <p className="text-xs text-neutral-600 mt-1">Eye-catching die-lines, window cutouts, and foiling on shelf.</p>
              </div>

              <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100">
                <span className="text-xs font-mono text-neutral-400">06</span>
                <h3 className="text-base font-bold text-neutral-950 mt-2">Custom Geometry</h3>
                <p className="text-xs text-neutral-600 mt-1">Precision die-lines tailored to your exact item dimensions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. PACKAGING SOLUTIONS */}
        {/* ========================================================================= */}
        <section className="py-20 md:py-28 bg-[#fafafa] border-b border-neutral-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">What We Offer</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-950 tracking-tight mt-1">
                  Packaging Solutions
                </h2>
                <p className="text-sm md:text-base text-neutral-600 mt-2 max-w-xl">
                  Available packaging options and structural formats developed around your product requirements.
                </p>
              </div>
              <Link
                href="/packaging"
                className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-neutral-950 hover:text-neutral-600 transition-colors"
              >
                <span>View All Solutions</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PACKAGING_SOLUTIONS.map((item) => (
                <div 
                  key={item.id}
                  className="bg-white rounded-2xl border border-neutral-200/80 overflow-hidden flex flex-col group hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] bg-neutral-100 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-neutral-950">{item.name}</h3>
                      <p className="text-xs text-neutral-600 mt-2 line-clamp-3 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                      <span className="text-[11px] font-medium text-neutral-500">
                        {item.structures[0]}
                      </span>
                      <Link
                        href="/packaging"
                        className="text-xs font-bold uppercase tracking-wider text-neutral-900 group-hover:text-neutral-600 inline-flex items-center"
                      >
                        Explore
                        <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. SELECTED WORK */}
        {/* ========================================================================= */}
        <section className="py-20 md:py-28 bg-white border-b border-neutral-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">Real Portfolio</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-950 tracking-tight mt-1">
                  Selected Work
                </h2>
                <p className="text-sm md:text-base text-neutral-600 mt-2 max-w-xl">
                  A selection of packaging projects created for brands across different product categories.
                </p>
              </div>

              <Link
                href="/work"
                className="inline-flex items-center px-6 py-2.5 rounded-full bg-neutral-950 text-white text-xs font-semibold uppercase tracking-wider hover:bg-neutral-800 transition-colors"
              >
                <span>View All Work</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Link>
            </div>

            {/* Editorial Portfolio Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {featuredProjects.map((project) => (
                <Link
                  key={project.id}
                  href={`/work/${project.id}`}
                  className="group block rounded-2xl bg-neutral-50 border border-neutral-200/80 overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative aspect-[16/11] bg-neutral-200 overflow-hidden">
                    <Image
                      src={project.images[0]}
                      alt={project.projectName}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-semibold tracking-wider uppercase text-neutral-900 shadow-sm">
                        {project.clientName}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 md:p-8 space-y-3">
                    <div className="flex items-center justify-between text-xs text-neutral-500 font-medium">
                      <span>{project.industry}</span>
                      <span className="text-neutral-900 font-semibold">{project.packagingType}</span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-neutral-950 group-hover:text-neutral-700 transition-colors">
                      {project.projectName}
                    </h3>

                    <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="pt-3 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-neutral-900">
                      <span>View Project Details</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. CLIENTS / BRANDS WE'VE WORKED WITH (LOGOS) */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 bg-[#fafafa] border-b border-neutral-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">Client Partnerships</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-950 tracking-tight mt-1">
                Brands We've Worked With
              </h2>
              <p className="text-sm text-neutral-600 mt-2">
                Custom packaging delivered for real brands across healthcare, cosmetics, food, baby care, and industrial engineering.
              </p>
            </div>

            {/* Clean Vector Client Logo Grid */}
            <ClientLogoGrid />
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. CUSTOMIZATION SYSTEM */}
        {/* ========================================================================= */}
        <section className="py-20 md:py-28 bg-white border-b border-neutral-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">Tailored Engineering</span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-950 tracking-tight">
                Full Packaging Customization
              </h2>
              <p className="text-sm md:text-base text-neutral-600">
                Every detail of your packaging is adapted to fit your product geometry, branding palette, and retail requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Structure */}
              <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200/80 space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-neutral-950 text-white flex items-center justify-center">
                  <Box className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-neutral-950">Structure</h3>
                  <p className="text-xs text-neutral-600 mt-1">Form factor & dimensional engineering</p>
                </div>
                <ul className="space-y-3 text-xs text-neutral-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                    <span>Exact custom length, width & depth dimensions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                    <span>Straight tuck, reverse tuck & auto crash bottom</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                    <span>Die-cut clear inspection windows (PET film)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                    <span>Laser-cut foam beds & precision bottle inserts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                    <span>Magnetic concealed flaps & satin ribbon closures</span>
                  </li>
                </ul>
              </div>

              {/* Print */}
              <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200/80 space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-neutral-950 text-white flex items-center justify-center">
                  <Printer className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-neutral-950">Print & Materials</h3>
                  <p className="text-xs text-neutral-600 mt-1">Pure cardstocks & high-fidelity graphics</p>
                </div>
                <ul className="space-y-3 text-xs text-neutral-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                    <span>Virgin Bleach Card (SBS 300-400gsm)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                    <span>Duplex Box Board (White-back & Grey-back)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                    <span>Dense Rigid Board (1000-1800gsm)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                    <span>Full-bleed 4-Color CMYK + Pantone matching</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                    <span>Fine typography & high-contrast barcode printing</span>
                  </li>
                </ul>
              </div>

              {/* Finishing */}
              <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200/80 space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-neutral-950 text-white flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-neutral-950">Finishing & Foil</h3>
                  <p className="text-xs text-neutral-600 mt-1">Specialized embellishments & coatings</p>
                </div>
                <ul className="space-y-3 text-xs text-neutral-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                    <span><strong>Golden Panni:</strong> High-luster hot gold foil</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                    <span><strong>Multi-Color Foiling:</strong> Silver, Rose Gold, Custom</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                    <span>Velvet soft-touch & matte protective lamination</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                    <span>Spot UV gloss highlights over matte surface</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                    <span>Precision 3D embossing & debossed logos</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. 5-STEP PROCESS */}
        {/* ========================================================================= */}
        <section className="py-20 md:py-28 bg-[#fafafa] border-b border-neutral-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">How It Works</span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-950 tracking-tight">
                Our 5-Step Process
              </h2>
              <p className="text-sm md:text-base text-neutral-600">
                A structured, reliable workflow from initial concept to finished packaging delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              
              <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 space-y-3">
                <span className="font-mono text-xs font-bold text-neutral-400">01</span>
                <h3 className="font-serif text-lg font-bold text-neutral-950">DISCOVER</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Understand the product, brand, dimensions, quantity, and packaging requirements.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 space-y-3">
                <span className="font-mono text-xs font-bold text-neutral-400">02</span>
                <h3 className="font-serif text-lg font-bold text-neutral-950">DESIGN</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Develop the packaging structure, precision die-lines, and visual finishing direction.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 space-y-3">
                <span className="font-mono text-xs font-bold text-neutral-400">03</span>
                <h3 className="font-serif text-lg font-bold text-neutral-950">SAMPLE</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Create a physical sample or structural prototype to confirm sizing and fit where required.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 space-y-3">
                <span className="font-mono text-xs font-bold text-neutral-400">04</span>
                <h3 className="font-serif text-lg font-bold text-neutral-950">PRODUCE</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Move the approved packaging into precision offset printing, foiling, cutting, and assembly.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 space-y-3">
                <span className="font-mono text-xs font-bold text-neutral-400">05</span>
                <h3 className="font-serif text-lg font-bold text-neutral-950">DELIVER</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Prepare, pack, and deliver the finished custom packaging safely to your facility.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 8. WHY MAHMOODIYAH */}
        {/* ========================================================================= */}
        <section className="py-20 md:py-28 bg-white border-b border-neutral-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-5 space-y-6">
                <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">Value Proposition</span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-950 tracking-tight leading-tight">
                  Why Work With Mahmoodiyah?
                </h2>
                <p className="text-sm md:text-base text-neutral-600 font-light leading-relaxed">
                  We bridge the gap between creative brand aesthetics and industrial structural reliability.
                </p>
                <div className="pt-2">
                  <Link
                    href="/about"
                    className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-neutral-900 hover:text-neutral-600"
                  >
                    <span>Read Company Profile</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-2">
                  <h3 className="font-serif text-base font-bold text-neutral-950">Custom Approach</h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Packaging developed specifically around your product dimensions, weight, and brand identity.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-2">
                  <h3 className="font-serif text-base font-bold text-neutral-950">Design-Focused</h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Packaging should look and feel as refined as the product inside it.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-2">
                  <h3 className="font-serif text-base font-bold text-neutral-950">Flexible Solutions</h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    From Bleach Card boxes to rigid setup packaging and custom bags for different requirements.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-2">
                  <h3 className="font-serif text-base font-bold text-neutral-950">Detail-Oriented</h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Meticulous attention to dimensions, folding lines, foiling registration, and finishes.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-2 sm:col-span-2">
                  <h3 className="font-serif text-base font-bold text-neutral-950">Client-Focused Collaboration</h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    We work closely with brand owners and production managers to understand requirements and turn them into practical packaging.
                  </p>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 9. FINAL CTA */}
        {/* ========================================================================= */}
        <section className="py-24 md:py-32 bg-neutral-950 text-white relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
            <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">Start Your Project</span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
              Let's Build Your Packaging.
            </h2>
            <p className="text-base md:text-xl text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed">
              Have a product that needs the right packaging? Tell us what you're looking for and we'll help bring it to life.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-white text-neutral-950 text-xs font-semibold tracking-wider uppercase hover:bg-neutral-200 transition-all shadow-xl"
              >
                <span>Discuss Your Project</span>
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
