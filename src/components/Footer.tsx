import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, Phone, MapPin, MessageSquare, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-300 border-t border-neutral-800">
      {/* Top Banner / Value Proposition */}
      <div className="border-b border-neutral-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">Custom Packaging Partner</span>
              <h3 className="font-serif text-2xl md:text-3xl text-white font-bold mt-1">
                Packaging Designed Around Your Brand.
              </h3>
            </div>
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-neutral-950 text-xs font-semibold uppercase tracking-wider hover:bg-neutral-200 transition-colors shrink-0 shadow-sm"
            >
              <span>Request a Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-white text-neutral-950 flex items-center justify-center font-serif font-bold text-lg">
                M
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                MAHMOODIYAH
              </span>
            </Link>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed font-light">
              Custom packaging solutions created around your product, brand identity, and customer experience.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-neutral-400">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Available for new B2B custom production runs</span>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white font-semibold mb-4">Packaging Solutions</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/packaging" className="text-neutral-400 hover:text-white transition-colors">
                  Bleach Card Boxes
                </Link>
              </li>
              <li>
                <Link href="/packaging" className="text-neutral-400 hover:text-white transition-colors">
                  Box Board Cartons
                </Link>
              </li>
              <li>
                <Link href="/packaging" className="text-neutral-400 hover:text-white transition-colors">
                  Rigid Setup Boxes
                </Link>
              </li>
              <li>
                <Link href="/packaging" className="text-neutral-400 hover:text-white transition-colors">
                  Custom Paper Bags
                </Link>
              </li>
              <li>
                <Link href="/packaging" className="text-neutral-400 hover:text-white transition-colors">
                  Hanging Blister Cards
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white font-semibold mb-4">Explore</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/work" className="text-neutral-400 hover:text-white transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link href="/clients" className="text-neutral-400 hover:text-white transition-colors">
                  Brands We've Worked With
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-neutral-400 hover:text-white transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-400 hover:text-white transition-colors">
                  About Mahmoodiyah
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-neutral-400 hover:text-white transition-colors">
                  5-Step Process
                </Link>
              </li>
              <li>
                <Link href="/quote" className="text-neutral-400 hover:text-white transition-colors">
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Inquiries */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white font-semibold mb-4">Direct Contact</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li className="flex items-start gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <a 
                  href="https://wa.me/923024598791" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: <span className="text-white font-semibold">0302-4598791</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <a 
                    href="tel:+923234866931" 
                    className="hover:text-white transition-colors"
                  >
                    Call: <span className="text-white font-semibold">0323-4866931</span>
                  </a>
                  <a 
                    href="https://wa.me/923234866931" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-neutral-400 hover:text-emerald-400 transition-colors mt-0.5"
                  >
                    (WhatsApp available)
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                <a href="mailto:info@mahmoodiyah.com" className="hover:text-white transition-colors">
                  info@mahmoodiyah.com
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} MAHMOODIYAH Printing & Packaging. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/contact" className="hover:text-neutral-300 transition-colors">Contact</Link>
            <Link href="/quote" className="hover:text-neutral-300 transition-colors">Get a Quote</Link>
            <Link href="/about" className="hover:text-neutral-300 transition-colors">Company Profile</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
