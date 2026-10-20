import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PRODUCT_TYPES, CATEGORIES, MATERIALS, FINISHES } from "@/data/catalog";
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Clock, 
  ShieldCheck,
  Package,
  Sliders,
  HelpCircle
} from "lucide-react";

export async function generateStaticParams() {
  return PRODUCT_TYPES.map((p) => ({
    category: p.category,
    slug: p.slug,
  }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const product = PRODUCT_TYPES.find(p => p.category === category && p.slug === slug);
  const categoryData = CATEGORIES.find(c => c.id === category);

  if (!product || !categoryData) {
    notFound();
  }

  const allowedMaterialObjects = MATERIALS.filter(m => product.allowedMaterials.includes(m.id));
  const allowedFinishObjects = FINISHES.filter(f => product.allowedFinishes.includes(f.id));

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Header />

      <main className="flex-grow py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8 font-medium">
            <Link href="/" className="hover:text-slate-900">Home</Link>
            <span>/</span>
            <Link href={`/packaging/${categoryData.slug}`} className="hover:text-slate-900">{categoryData.name}</Link>
            <span>/</span>
            <span className="text-slate-900 font-bold">{product.name}</span>
          </nav>

          {/* Product Overview Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-16 border-b border-slate-200">
            
            {/* Left: Large Product Gallery */}
            <div className="lg:col-span-6 space-y-4">
              <div className="rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-md">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-auto aspect-[4/3] object-cover"
                />
              </div>

              {/* Gallery Thumbnails */}
              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-2xl overflow-hidden border-2 border-slate-950 bg-slate-100 h-24">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 h-24">
                  <img src={categoryData.image} alt={categoryData.name} className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 h-24">
                  <img src="/images/packaging/hero-collection.jpg" alt="Packaging Collection" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Right: Product Details & CTAs */}
            <div className="lg:col-span-6 space-y-6">
              
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                  {product.subcategory}
                </span>
                <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950 mt-3 mb-2">
                  {product.name}
                </h1>
                <p className="text-sm text-slate-600 font-light leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Key Quick Specifications */}
              <div className="grid grid-cols-2 gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-200 text-xs">
                <div>
                  <span className="text-slate-400 block font-medium">Minimum Order Quantity (MOQ)</span>
                  <p className="text-sm font-bold text-slate-950 mt-0.5">{product.moq.toLocaleString()} units</p>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Standard Production Time</span>
                  <p className="text-sm font-bold text-slate-950 mt-0.5">{product.leadTime}</p>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Pricing</span>
                  <p className="text-sm font-bold text-slate-950 mt-0.5">Starting from ${product.basePriceUSD.toFixed(2)} / unit</p>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Custom Sizing</span>
                  <p className="text-sm font-bold text-emerald-800 mt-0.5">100% Tailored Dimensions</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href={`/quote?category=${product.category}&product=${product.slug}`}
                  className="flex-1 py-4 bg-slate-950 text-white rounded-full font-bold text-xs hover:bg-slate-800 transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Configure & Get a Quote</span>
                </Link>

                <Link
                  href={`/sample-request?category=${product.category}&product=${product.slug}`}
                  className="py-4 px-6 bg-white border border-slate-300 text-slate-800 rounded-full font-bold text-xs hover:bg-slate-100 transition-colors text-center"
                >
                  Request a Sample
                </Link>
              </div>

              {/* Key Features List */}
              <div className="space-y-2 pt-4 border-t border-slate-100 text-xs text-slate-700">
                <p className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">Engineering Highlights:</p>
                {product.features.map(f => (
                  <p key={f} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{f}</span>
                  </p>
                ))}
              </div>

            </div>

          </div>

          {/* Full Technical Specifications Grid */}
          <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-slate-200">
            
            {/* Applications */}
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200">
              <h3 className="font-serif text-lg font-bold text-slate-950 mb-3">
                Recommended Applications
              </h3>
              <ul className="space-y-2 text-xs text-slate-600">
                {product.applications.map(app => (
                  <li key={app} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Available Materials */}
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200">
              <h3 className="font-serif text-lg font-bold text-slate-950 mb-3">
                Available Material Substrates
              </h3>
              <ul className="space-y-2 text-xs text-slate-600">
                {allowedMaterialObjects.map(mat => (
                  <li key={mat.id} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{mat.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Compatible Finishes */}
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200">
              <h3 className="font-serif text-lg font-bold text-slate-950 mb-3">
                Available Finishes & Add-Ons
              </h3>
              <ul className="space-y-2 text-xs text-slate-600">
                {allowedFinishObjects.slice(0, 5).map(fin => (
                  <li key={fin.id} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{fin.name} ({fin.tagline})</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* "Need something custom?" Callout */}
          <div className="mt-16 bg-slate-950 rounded-3xl p-8 lg:p-12 text-white flex flex-col md:flex-row justify-between items-center gap-8 shadow-xl">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Bespoke Engineering
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                Need something custom?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm font-light">
                Tell us what you're looking for. Our structural packaging team can engineer custom die-lines, specialized closures, and complex multi-item insert trays.
              </p>
            </div>

            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-slate-950 font-bold text-xs rounded-full hover:bg-slate-100 transition-colors shrink-0 shadow-lg"
            >
              Talk to a Structural Engineer
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
