"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MessageSquare, Phone, Send, CheckCircle2, ArrowRight } from "lucide-react";

export default function ProjectInquiryPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const generateWhatsAppUrl = () => {
    const text = `Hello Mahmoodiyah Packaging, I would like to discuss a custom packaging project:
*Name:* ${formData.name || "Client"}
*Company:* ${formData.company || "N/A"}
*Phone:* ${formData.phone || "N/A"}
*Details:* ${formData.message || "Please contact me to discuss packaging requirements."}`;

    return `https://wa.me/923024598791?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col selection:bg-neutral-900 selection:text-white">
      <Header />

      <main className="flex-grow">
        
        {/* Header */}
        <section className="pt-16 pb-14 bg-[#fafafa] border-b border-neutral-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">Start a Conversation</span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-950 tracking-tight mt-2">
              Discuss Your Packaging
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 font-light max-w-2xl mt-4 leading-relaxed">
              Tell us about your brand and product packaging requirements. We will guide you through materials, structure, and sample production.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Quick Action Channels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              <a
                href="https://wa.me/923024598791"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-4 group hover:bg-emerald-100/80 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif text-base font-bold text-emerald-950">WhatsApp Consultation</h3>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-200 text-emerald-900 text-[10px] font-bold uppercase tracking-wider">Fastest</span>
                  </div>
                  <p className="text-xs text-emerald-800 mt-1">Send photos, dielines, and discuss directly</p>
                  <p className="text-sm font-bold text-emerald-950 mt-2 font-mono">0302-4598791</p>
                  <span className="text-xs font-semibold text-emerald-900 mt-2 block group-hover:underline">
                    Chat on WhatsApp →
                  </span>
                </div>
              </a>

              <div className="p-6 rounded-2xl bg-sky-50 border border-sky-200 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-700 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-base font-bold text-sky-950">Direct Phone & WhatsApp</h3>
                  <p className="text-xs text-sky-800 mt-1">Direct line for manufacturing consultations</p>
                  <p className="text-sm font-bold text-sky-950 mt-2 font-mono">0323-4866931</p>
                  <div className="flex items-center gap-3 mt-2">
                    <a
                      href="tel:+923234866931"
                      className="text-xs font-bold text-sky-950 underline hover:text-sky-800"
                    >
                      Call Now
                    </a>
                    <span className="text-sky-300">•</span>
                    <a
                      href="https://wa.me/923234866931"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-emerald-800 underline hover:text-emerald-950"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Simple Inquiry Form */}
            <div className="p-8 md:p-12 rounded-3xl bg-neutral-50 border border-neutral-200/80 space-y-6">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-neutral-950">
                  Send a Quick Inquiry
                </h2>
                <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                  Leave your details and brief requirements, and we will get back to you promptly.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-white border border-neutral-200 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h3 className="font-serif text-xl font-bold text-neutral-950">Inquiry Received</h3>
                  <p className="text-xs text-neutral-600 max-w-md mx-auto">
                    Thank you, {formData.name}. We will review your message and contact you via phone or WhatsApp.
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-emerald-600 text-white text-xs font-semibold uppercase tracking-wider hover:bg-emerald-700 transition-colors shadow"
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      <span>Message on WhatsApp</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-full border border-neutral-300 text-neutral-800 text-xs font-semibold uppercase tracking-wider"
                    >
                      Send Another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="font-bold text-neutral-900 uppercase tracking-wider">Your Name <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 text-neutral-900 text-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-bold text-neutral-900 uppercase tracking-wider">Company / Brand Name</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={e => setFormData({...formData, company: e.target.value})}
                        placeholder="e.g. Brand Name"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 text-neutral-900 text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-bold text-neutral-900 uppercase tracking-wider">Phone / WhatsApp Number <span className="text-red-500">*</span></label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      placeholder="e.g. 0300 1234567"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 text-neutral-900 text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-bold text-neutral-900 uppercase tracking-wider">What packaging do you need? <span className="text-red-500">*</span></label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                      placeholder="Briefly describe your product (e.g. Cosmetic boxes, Food boxes, Feeder packaging, Bags, etc.)..."
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 text-neutral-900 text-sm"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-4 items-center justify-between">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-neutral-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-neutral-800 transition-all shadow"
                    >
                      <span>Submit Inquiry</span>
                      <Send className="w-3.5 h-3.5 ml-2" />
                    </button>

                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-emerald-600 text-white text-xs font-semibold uppercase tracking-wider hover:bg-emerald-700 transition-colors shadow text-center"
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </form>
              )}

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
