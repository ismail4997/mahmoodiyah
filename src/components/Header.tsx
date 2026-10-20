"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  ArrowRight,
  MessageCircle
} from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Packaging", href: "/packaging" },
    { name: "Selected Work", href: "/work" },
    { name: "Clients", href: "/clients" },
    { name: "Industries", href: "/industries" },
    { name: "About", href: "/about" },
    { name: "Process", href: "/process" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-200" 
          : "bg-white border-b border-neutral-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Brand Logo - MAHMOODIYAH */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-neutral-950 flex items-center justify-center text-white font-serif font-bold text-xl tracking-wider transition-transform group-hover:scale-105 shadow-sm">
              M
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-tight text-neutral-950 leading-none">
                MAHMOODIYAH
              </span>
              <span className="text-[9px] tracking-[0.22em] text-neutral-500 uppercase font-semibold mt-1">
                Custom Packaging Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium text-neutral-600">
            <Link 
              href="/packaging" 
              className={`hover:text-neutral-950 transition-colors ${pathname === "/packaging" ? "text-neutral-950 font-semibold" : ""}`}
            >
              Packaging
            </Link>

            <Link 
              href="/work" 
              className={`hover:text-neutral-950 transition-colors ${pathname.startsWith("/work") ? "text-neutral-950 font-semibold" : ""}`}
            >
              Selected Work
            </Link>

            <Link 
              href="/clients" 
              className={`hover:text-neutral-950 transition-colors ${pathname === "/clients" ? "text-neutral-950 font-semibold" : ""}`}
            >
              Clients
            </Link>

            <Link 
              href="/industries" 
              className={`hover:text-neutral-950 transition-colors ${pathname === "/industries" ? "text-neutral-950 font-semibold" : ""}`}
            >
              Industries
            </Link>

            <Link 
              href="/about" 
              className={`hover:text-neutral-950 transition-colors ${pathname === "/about" ? "text-neutral-950 font-semibold" : ""}`}
            >
              About
            </Link>

            <Link 
              href="/process" 
              className={`hover:text-neutral-950 transition-colors ${pathname === "/process" ? "text-neutral-950 font-semibold" : ""}`}
            >
              Process
            </Link>

            <Link 
              href="/contact" 
              className={`hover:text-neutral-950 transition-colors ${pathname === "/contact" ? "text-neutral-950 font-semibold" : ""}`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-neutral-950 text-white text-xs font-semibold tracking-wider uppercase hover:bg-neutral-800 transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5 ml-2" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <Link
              href="/contact"
              className="px-3.5 py-1.5 rounded-full bg-neutral-950 text-white text-[11px] font-semibold tracking-wide uppercase"
            >
              Contact
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-200 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200 shadow-xl">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href ? "bg-neutral-100 text-neutral-950 font-semibold" : "text-neutral-700 hover:bg-neutral-50 hover:text-neutral-950"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-neutral-100 flex flex-col gap-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center w-full py-3 rounded-full bg-neutral-950 text-white text-xs font-semibold uppercase tracking-wider text-center"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
