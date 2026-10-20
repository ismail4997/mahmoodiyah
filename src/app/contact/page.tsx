"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MessageSquare, Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col selection:bg-neutral-900 selection:text-white">
      <Header />

      <main className="flex-grow">
        
        {/* Header */}
        <section className="pt-16 pb-14 bg-[#fafafa] border-b border-neutral-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">Get In Touch</span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-950 tracking-tight mt-2">
              Contact Mahmoodiyah
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 font-light max-w-2xl mt-4 leading-relaxed">
              Have questions about box structures, materials, minimum order quantities, or sample kits? Our packaging specialists are ready to help.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              
              {/* Left Column: Contact Channels */}
              <div className="lg:col-span-5 space-y-8">
                
                <div>
                  <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">Direct Communication</span>
                  <h2 className="font-serif text-3xl font-bold text-neutral-950 mt-1">
                    Talk With Our Team
                  </h2>
                  <p className="text-sm text-neutral-600 font-light mt-2 leading-relaxed">
                    We work with brand owners, agencies, and manufacturing teams across multiple sectors.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* WhatsApp Primary */}
                  <a
                    href="https://wa.me/923024598791"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-4 group hover:bg-emerald-100/70 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-serif text-base font-bold text-emerald-950">WhatsApp Inquiries</h3>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-200 text-emerald-900 text-[10px] font-bold uppercase tracking-wider">Fastest</span>
                      </div>
                      <p className="text-xs text-emerald-800 mt-0.5">Instant quotes, dielines & sample photos</p>
                      <p className="text-sm font-bold text-emerald-950 mt-2 font-mono">0302-4598791</p>
                      <span className="text-xs font-semibold text-emerald-900 mt-1 block group-hover:underline">
                        Message on WhatsApp →
                      </span>
                    </div>
                  </a>

                  {/* Phone & WhatsApp Secondary */}
                  <div className="p-6 rounded-2xl bg-sky-50 border border-sky-200 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-sky-700 text-white flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-serif text-base font-bold text-sky-950">Direct Call & WhatsApp</h3>
                      </div>
                      <p className="text-xs text-sky-800 mt-0.5">Direct line for consultations & order tracking</p>
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
                          Chat on WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/80 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-neutral-900 text-white flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-base font-bold text-neutral-950">Mahmoodiyah Packaging</h3>
                      <p className="text-xs text-neutral-600 mt-0.5">Custom Printing & Box Manufacturing</p>
                      <p className="text-xs font-semibold text-neutral-800 mt-2">Serving clients nationwide across Pakistan</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column: General Message Form */}
              <div className="lg:col-span-7">
                <div className="p-8 md:p-10 rounded-3xl bg-neutral-50 border border-neutral-200/80 space-y-6">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-neutral-950">Send a Message</h3>
                    <p className="text-xs text-neutral-600 mt-1">
                      Have a general question? Fill out this form or use our dedicated <a href="/quote" className="underline font-bold text-neutral-900">Request a Quote</a> page for pricing.
                    </p>
                  </div>

                  {submitted ? (
                    <div className="p-8 rounded-2xl bg-white border border-neutral-200 text-center space-y-4">
                      <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                      <h4 className="font-serif text-xl font-bold text-neutral-950">Message Sent</h4>
                      <p className="text-xs text-neutral-600">
                        Thank you for reaching out. We will review your message and reply promptly.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="px-6 py-2.5 rounded-full bg-neutral-900 text-white text-xs font-semibold uppercase tracking-wider"
                      >
                        Send Another Note
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="font-bold text-neutral-900 uppercase tracking-wider">Your Name</label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={e => setFormData({...formData, name: e.target.value})}
                            placeholder="John Doe"
                            className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 text-neutral-900 text-sm"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="font-bold text-neutral-900 uppercase tracking-wider">Email Address</label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={e => setFormData({...formData, email: e.target.value})}
                            placeholder="john@company.com"
                            className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 text-neutral-900 text-sm"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-bold text-neutral-900 uppercase tracking-wider">Phone / WhatsApp</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={e => setFormData({...formData, phone: e.target.value})}
                          placeholder="+1 555 000-0000"
                          className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 text-neutral-900 text-sm"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-bold text-neutral-900 uppercase tracking-wider">Subject</label>
                        <input
                          type="text"
                          required
                          value={formData.subject}
                          onChange={e => setFormData({...formData, subject: e.target.value})}
                          placeholder="General Inquiry / Material Sample / Production Question"
                          className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 text-neutral-900 text-sm"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-bold text-neutral-900 uppercase tracking-wider">Your Message</label>
                        <textarea
                          rows={5}
                          required
                          value={formData.message}
                          onChange={e => setFormData({...formData, message: e.target.value})}
                          placeholder="How can we help your brand?"
                          className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 text-neutral-900 text-sm"
                        />
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-neutral-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-neutral-800 transition-all shadow"
                        >
                          <span>Send Message</span>
                          <Send className="w-3.5 h-3.5 ml-2" />
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
