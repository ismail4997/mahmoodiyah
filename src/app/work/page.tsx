"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SELECTED_PROJECTS } from "@/data/projects";
import { ArrowRight, ArrowUpRight, Filter } from "lucide-react";

export default function WorkPage() {
  const [selectedFilter, setSelectedFilter] = useState("ALL");

  const filterCategories = [
    { label: "ALL", value: "ALL" },
    { label: "COSMETICS", value: "Cosmetics" },
    { label: "FOOD", value: "Food" },
    { label: "HEALTHCARE", value: "Healthcare" },
    { label: "BABY CARE", value: "Baby Care" },
    { label: "INDUSTRIAL", value: "Industrial" },
    { label: "RIGID BOXES", value: "Rigid Boxes" },
    { label: "BLEACH CARD", value: "Bleach Card" }
  ];

  const filteredProjects = SELECTED_PROJECTS.filter(project => {
    if (selectedFilter === "ALL") return true;
    if (selectedFilter === "Cosmetics") return project.industry.toLowerCase().includes("cosmetic") || project.industry.toLowerCase().includes("beauty");
    if (selectedFilter === "Food") return project.industry.toLowerCase().includes("food") || project.industry.toLowerCase().includes("confectionery");
    if (selectedFilter === "Healthcare") return project.industry.toLowerCase().includes("healthcare") || project.industry.toLowerCase().includes("medical");
    if (selectedFilter === "Baby Care") return project.industry.toLowerCase().includes("baby");
    if (selectedFilter === "Industrial") return project.industry.toLowerCase().includes("industrial") || project.industry.toLowerCase().includes("hardware");
    if (selectedFilter === "Rigid Boxes") return project.packagingType.toLowerCase().includes("rigid");
    if (selectedFilter === "Bleach Card") return project.material.toLowerCase().includes("bleach");
    return true;
  });

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col selection:bg-neutral-900 selection:text-white">
      <Header />

      <main className="flex-grow">
        
        {/* Page Header */}
        <section className="pt-16 pb-14 bg-[#fafafa] border-b border-neutral-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">Portfolio</span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-950 tracking-tight mt-2">
              Selected Work
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 font-light max-w-2xl mt-4 leading-relaxed">
              Explore a selection of packaging created for our clients and their products across cosmetics, healthcare, food, baby care, and industrial sectors.
            </p>

            {/* Filter Bar */}
            <div className="pt-8 flex items-center gap-2 flex-wrap">
              <span className="text-xs font-semibold text-neutral-400 mr-2 uppercase tracking-wider flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Filter:
              </span>
              {filterCategories.map(cat => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedFilter(cat.value)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all uppercase ${
                    selectedFilter === cat.value
                      ? "bg-neutral-900 text-white shadow-sm"
                      : "bg-white border border-neutral-200 text-neutral-700 hover:border-neutral-400"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map(project => (
                <Link
                  key={project.id}
                  href={`/work/${project.id}`}
                  className="group block rounded-2xl bg-white border border-neutral-200/80 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  <div className="relative aspect-[16/11] bg-neutral-100 overflow-hidden">
                    <Image
                      src={project.images[0]}
                      alt={project.projectName}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-[11px] font-semibold tracking-wider uppercase text-neutral-900 shadow-sm">
                        {project.clientName}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[11px] text-neutral-500 font-medium">
                        <span>{project.industry}</span>
                        <span className="text-neutral-900 font-semibold">{project.packagingType}</span>
                      </div>

                      <h3 className="font-serif text-xl font-bold text-neutral-950 group-hover:text-neutral-700 transition-colors">
                        {project.projectName}
                      </h3>

                      <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-neutral-900">
                      <span>View Project</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-20 bg-neutral-50 rounded-2xl border border-neutral-200">
                <p className="text-neutral-600 text-sm">No projects found in this category.</p>
                <button
                  onClick={() => setSelectedFilter("ALL")}
                  className="mt-4 px-6 py-2 rounded-full bg-neutral-900 text-white text-xs font-semibold uppercase tracking-wider"
                >
                  Show All Projects
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Bottom Quote Banner */}
        <section className="py-16 bg-[#fafafa] border-t border-neutral-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-neutral-950">
              Have a similar packaging requirement?
            </h3>
            <p className="text-sm text-neutral-600 max-w-xl mx-auto">
              Send us your product dimensions, material preference, or design files to receive a detailed quotation.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-neutral-900 text-white text-xs font-semibold tracking-wider uppercase hover:bg-neutral-800 transition-all shadow"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <a
                href="https://wa.me/923024598791"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-neutral-300 text-neutral-800 text-xs font-semibold tracking-wider uppercase hover:bg-neutral-100 transition-colors"
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
