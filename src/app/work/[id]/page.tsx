import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SELECTED_PROJECTS, getProjectById, getRelatedProjects } from "@/data/projects";
import { 
  ArrowLeft, 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  Box, 
  Layers, 
  Sparkles, 
  Printer, 
  Maximize2 
} from "lucide-react";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return SELECTED_PROJECTS.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) return { title: "Project Not Found | Mahmoodiyah" };

  return {
    title: `${project.projectName} | Mahmoodiyah Selected Work`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  const related = getRelatedProjects(project.id, 3);

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col selection:bg-neutral-900 selection:text-white">
      <Header />

      <main className="flex-grow">
        
        {/* Breadcrumb & Navigation */}
        <div className="bg-[#fafafa] border-b border-neutral-200/80 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <Link
              href="/work"
              className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-neutral-600 hover:text-neutral-950 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-1.5" />
              <span>Back to Selected Work</span>
            </Link>

            <span className="text-xs font-medium text-neutral-400">
              {project.clientName} / {project.packagingType}
            </span>
          </div>
        </div>

        {/* Project Header */}
        <section className="pt-12 pb-14 bg-[#fafafa] border-b border-neutral-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-neutral-900 text-white text-[11px] font-semibold uppercase tracking-wider">
                  Client: {project.clientName}
                </span>
                <span className="px-3 py-1 rounded-full bg-neutral-200 text-neutral-800 text-[11px] font-semibold uppercase tracking-wider">
                  {project.industry}
                </span>
                <span className="px-3 py-1 rounded-full border border-neutral-300 text-neutral-700 text-[11px] font-semibold uppercase tracking-wider">
                  {project.packagingType}
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-neutral-950 tracking-tight leading-[1.15]">
                {project.projectName}
              </h1>

              <p className="text-base sm:text-xl text-neutral-600 font-light leading-relaxed pt-2">
                {project.description}
              </p>
            </div>
          </div>
        </section>

        {/* Hero Image Showcase */}
        <section className="py-12 bg-white border-b border-neutral-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl overflow-hidden aspect-[16/9] shadow-2xl bg-neutral-100">
              <Image
                src={project.images[0]}
                alt={project.projectName}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Requirement & Solution Section */}
        <section className="py-16 md:py-24 bg-white border-b border-neutral-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              
              {/* Left: Challenge & Solution */}
              <div className="lg:col-span-7 space-y-12">
                
                <div className="space-y-4">
                  <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">The Requirement</span>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-neutral-950">
                    Product & Brand Requirements
                  </h2>
                  <p className="text-base text-neutral-700 leading-relaxed font-light">
                    {project.requirement}
                  </p>
                </div>

                <div className="space-y-4 pt-6 border-t border-neutral-100">
                  <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">The Packaging Solution</span>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-neutral-950">
                    Engineered Packaging Execution
                  </h2>
                  <p className="text-base text-neutral-700 leading-relaxed font-light">
                    {project.solution}
                  </p>
                </div>

              </div>

              {/* Right: Technical Specifications Card */}
              <div className="lg:col-span-5">
                <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200/80 space-y-6">
                  <h3 className="font-serif text-xl font-bold text-neutral-950 border-b border-neutral-200 pb-4">
                    Packaging Details & Specs
                  </h3>

                  <div className="space-y-4 text-xs">
                    <div>
                      <p className="uppercase tracking-wider text-neutral-400 font-semibold">Material</p>
                      <p className="font-medium text-neutral-900 text-sm mt-0.5">{project.material}</p>
                    </div>

                    <div>
                      <p className="uppercase tracking-wider text-neutral-400 font-semibold">Structure</p>
                      <p className="font-medium text-neutral-900 text-sm mt-0.5">{project.structure}</p>
                    </div>

                    {project.dimensions && (
                      <div>
                        <p className="uppercase tracking-wider text-neutral-400 font-semibold">Dimensions</p>
                        <p className="font-medium text-neutral-900 text-sm mt-0.5">{project.dimensions}</p>
                      </div>
                    )}

                    <div>
                      <p className="uppercase tracking-wider text-neutral-400 font-semibold">Printing</p>
                      <p className="font-medium text-neutral-900 text-sm mt-0.5">{project.printing}</p>
                    </div>

                    <div>
                      <p className="uppercase tracking-wider text-neutral-400 font-semibold">Finishing</p>
                      <p className="font-medium text-neutral-900 text-sm mt-0.5">{project.finishing}</p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-neutral-200 space-y-2">
                    <a
                      href={`https://wa.me/923024598791?text=${encodeURIComponent(`Hello Mahmoodiyah, I am interested in custom packaging similar to: ${project.projectName} (${project.clientName})`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center py-3.5 rounded-full bg-emerald-600 text-white text-xs font-semibold uppercase tracking-wider hover:bg-emerald-700 transition-all shadow"
                    >
                      <span>Inquire on WhatsApp</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-2" />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Project Image Gallery */}
        {project.images.length > 1 && (
          <section className="py-16 md:py-24 bg-[#fafafa] border-b border-neutral-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
              <div className="text-center max-w-xl mx-auto">
                <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">Visual Documentation</span>
                <h2 className="font-serif text-3xl font-bold text-neutral-950 mt-1">
                  Project Gallery
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {project.images.slice(1).map((img, idx) => (
                  <div key={idx} className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-neutral-200 shadow-md">
                    <Image
                      src={img}
                      alt={`${project.projectName} shot ${idx + 2}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Projects */}
        <section className="py-20 md:py-28 bg-white border-b border-neutral-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">Explore More</span>
                <h2 className="font-serif text-3xl font-bold text-neutral-950 mt-1">
                  Related Packaging Work
                </h2>
              </div>
              <Link
                href="/work"
                className="text-xs font-semibold uppercase tracking-wider text-neutral-950 hover:text-neutral-600 inline-flex items-center"
              >
                <span>View Full Portfolio</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map(item => (
                <Link
                  key={item.id}
                  href={`/work/${item.id}`}
                  className="group block rounded-2xl bg-neutral-50 border border-neutral-200/80 overflow-hidden hover:shadow-lg transition-all"
                >
                  <div className="relative aspect-[16/10] bg-neutral-200 overflow-hidden">
                    <Image
                      src={item.images[0]}
                      alt={item.projectName}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 space-y-2">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-neutral-500">
                      {item.clientName}
                    </span>
                    <h3 className="font-serif text-base font-bold text-neutral-950 group-hover:text-neutral-700">
                      {item.projectName}
                    </h3>
                    <p className="text-xs text-neutral-600 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Tailored Quote CTA */}
        <section className="py-20 bg-neutral-950 text-white text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">
              Have a similar packaging requirement?
            </h2>
            <p className="text-neutral-400 text-sm max-w-xl mx-auto leading-relaxed">
              We create custom folding cartons, rigid boxes, and bags tailored to your product dimensions, material preferences, and brand aesthetic.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={`https://wa.me/923024598791?text=${encodeURIComponent(`Hello Mahmoodiyah, I would like to discuss packaging for my product, inspired by: ${project.projectName}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-neutral-950 text-xs font-semibold uppercase tracking-wider hover:bg-neutral-200 transition-all shadow-xl"
              >
                <span>Discuss on WhatsApp</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-neutral-700 text-neutral-300 text-xs font-semibold uppercase tracking-wider hover:bg-neutral-900 transition-colors"
              >
                <span>Contact Our Team</span>
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
