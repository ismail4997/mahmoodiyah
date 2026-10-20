import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClientLogo } from "@/components/ClientLogos";
import { REAL_CLIENTS } from "@/data/clients";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Brands We've Worked With | Mahmoodiyah",
  description: "Real clients and brands partnering with Mahmoodiyah for custom packaging across cosmetics, healthcare, baby care, food, and industrial sectors."
};

export default function ClientsPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col selection:bg-neutral-900 selection:text-white">
      <Header />

      <main className="flex-grow">
        
        {/* Page Header */}
        <section className="pt-16 pb-14 bg-[#fafafa] border-b border-neutral-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">Client Partnerships</span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-950 tracking-tight mt-2">
              Brands We've Worked With
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 font-light max-w-2xl mt-4 leading-relaxed">
              We partner with businesses to transform their packaging requirements into professional, reliable, and brand-aligned packaging solutions.
            </p>
          </div>
        </section>

        {/* Clients Grid with Real Logos */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {REAL_CLIENTS.map((client) => (
                <div
                  key={client.id}
                  className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200/80 flex flex-col justify-between space-y-6 hover:shadow-lg transition-all"
                >
                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-white border border-neutral-200/80 inline-flex items-center justify-center min-h-16 min-w-36 shadow-sm">
                      <ClientLogo id={client.id} />
                    </div>

                    <div>
                      <h2 className="font-serif text-2xl font-bold text-neutral-950">{client.name}</h2>
                      <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider block mt-1">
                        {client.industry}
                      </span>
                    </div>

                    <p className="text-xs text-neutral-600 leading-relaxed font-light">
                      {client.summary}
                    </p>
                  </div>

                  {client.projectId ? (
                    <Link
                      href={`/work/${client.projectId}`}
                      className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-neutral-900 hover:text-neutral-600 pt-4 border-t border-neutral-200"
                    >
                      <span>View Packaging Project</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </Link>
                  ) : (
                    <div className="pt-4 border-t border-neutral-200 text-xs text-neutral-400">
                      <span>Custom Production Client</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Collaboration Principle */}
        <section className="py-16 bg-[#fafafa] border-t border-neutral-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-neutral-950">
              Looking for a dependable packaging partner?
            </h3>
            <p className="text-sm text-neutral-600 max-w-xl mx-auto leading-relaxed">
              Whether you are launching a new product line or upgrading your existing packaging quality, Mahmoodiyah works directly with your team from sizing to finished delivery.
            </p>
            <div className="pt-2">
              <Link
                href="/quote"
                className="inline-flex items-center px-8 py-3.5 rounded-full bg-neutral-950 text-white text-xs font-semibold tracking-wider uppercase hover:bg-neutral-800 transition-all shadow"
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
