import React from "react";
import Link from "next/link";
import { REAL_CLIENTS } from "@/data/clients";

export function ClientLogo({ id, className = "" }: { id: string; className?: string }) {
  switch (id) {
    case "rivaj":
      return (
        <div className={`flex items-center gap-1.5 font-bold tracking-tight text-[#1e6e38] ${className}`}>
          <span className="font-serif italic text-2xl lowercase tracking-tighter" style={{ fontFamily: "Georgia, serif" }}>Rivaj</span>
          <span className="text-[9px] font-sans font-semibold uppercase px-1 py-0.2 border border-[#1e6e38] rounded-sm text-[#1e6e38]">UK</span>
        </div>
      );

    case "benson-automotive":
    case "benson-maryam":
      return (
        <div className={`flex items-center gap-2 text-[#0c3577] ${className}`}>
          <div className="w-8 h-8 rounded-full border-2 border-[#d4af37] flex items-center justify-center p-0.5 bg-[#0c3577]">
            <span className="text-[8px] font-bold text-[#d4af37] tracking-wider">BN</span>
          </div>
          <div className="flex flex-col text-left leading-none">
            <span className="font-black text-sm tracking-wider uppercase text-[#0c3577]">BENSON</span>
            <span className="text-[7px] font-bold tracking-widest text-[#d4af37] uppercase">BEARINGS</span>
          </div>
        </div>
      );

    case "dezato":
      return (
        <div className={`flex flex-col items-center justify-center text-center ${className}`}>
          <span className="font-serif font-black text-xl tracking-tight text-[#c81928] leading-none">Dezato</span>
          <span className="text-[8px] tracking-[0.25em] text-neutral-500 uppercase font-medium">BY MURAD</span>
        </div>
      );

    case "olina":
      return (
        <div className={`flex items-center gap-1.5 text-[#0a2558] ${className}`}>
          <svg className="w-5 h-5 text-[#0a2558] shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15 9H9L12 2Z" opacity="0.4"/>
            <path d="M12 22C6.48 22 2 17.52 2 12C2 7.25 5.34 3.28 9.87 2.24C9.53 4.14 9.84 6.13 10.8 7.82C11.83 9.63 13.56 10.87 15.6 11.27C15.96 11.34 16.33 11.38 16.7 11.38C17.7 11.38 18.68 11.11 19.55 10.61C20.47 12.04 21 13.73 21 15.5C21 19.09 18.09 22 14.5 22H12Z"/>
          </svg>
          <div className="flex flex-col text-left leading-none">
            <span className="font-serif font-bold text-lg tracking-tight text-[#0a2558]">Olina<span className="text-xs align-super">®</span></span>
            <span className="text-[7px] tracking-widest uppercase text-neutral-400 font-semibold">SKINCARE</span>
          </div>
        </div>
      );

    case "maq":
      return (
        <div className={`flex items-center gap-1.5 ${className}`}>
          <div className="w-7 h-7 rounded-lg bg-[#3b82f6] text-white font-bold flex items-center justify-center text-xs shadow-sm">
            M
          </div>
          <div className="flex flex-col text-left leading-none">
            <span className="font-sans font-black text-base tracking-wider text-[#1e3a8a]">MAQ</span>
            <span className="text-[7px] tracking-wider uppercase text-neutral-400 font-bold">BABY CARE</span>
          </div>
        </div>
      );

    case "fun-kids":
      return (
        <div className={`flex items-center gap-1.5 ${className}`}>
          <div className="flex -space-x-1">
            <span className="w-5 h-5 rounded-full bg-[#ec4899] text-white flex items-center justify-center text-[10px] font-bold">F</span>
            <span className="w-5 h-5 rounded-full bg-[#f59e0b] text-white flex items-center justify-center text-[10px] font-bold">u</span>
            <span className="w-5 h-5 rounded-full bg-[#10b981] text-white flex items-center justify-center text-[10px] font-bold">n</span>
          </div>
          <span className="font-bold text-xs tracking-wider text-neutral-800 uppercase">KIDS</span>
        </div>
      );

    case "more-macaroni":
    case "brunos":
      return (
        <div className={`flex items-center gap-1.5 ${className}`}>
          <div className="w-7 h-7 rounded-full bg-[#991b1b] flex items-center justify-center text-amber-300 font-serif font-bold text-xs">
            M
          </div>
          <div className="flex flex-col text-left leading-none">
            <span className="font-serif font-black text-sm tracking-tight text-[#991b1b]">MORE</span>
            <span className="text-[7px] tracking-wider text-neutral-500 font-bold uppercase">MACARONI</span>
          </div>
        </div>
      );

    case "shifa-labs":
      return (
        <div className={`flex items-center gap-2 ${className}`}>
          <div className="w-7 h-7 rounded-md bg-[#065f46] text-white flex items-center justify-center text-xs font-bold">
            +
          </div>
          <div className="flex flex-col text-left leading-none">
            <span className="font-bold text-sm tracking-wide text-[#065f46] uppercase">SHIFA</span>
            <span className="text-[7px] tracking-widest text-neutral-400 uppercase font-semibold">LABS</span>
          </div>
        </div>
      );

    case "luxury-fragrance":
      return (
        <div className={`flex flex-col items-center justify-center text-center ${className}`}>
          <span className="font-serif italic font-bold text-sm tracking-widest text-neutral-900 uppercase">PARFUM</span>
          <span className="text-[7px] tracking-[0.2em] text-[#b45309] font-bold uppercase">HAUTE COUTURE</span>
        </div>
      );

    default:
      return (
        <span className="font-serif font-bold text-base text-neutral-800 uppercase tracking-wider">{id}</span>
      );
  }
}

export function ClientLogoGrid({ limit }: { limit?: number }) {
  const clients = limit ? REAL_CLIENTS.slice(0, limit) : REAL_CLIENTS;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {clients.map((client) => (
        <Link
          key={client.id}
          href={client.projectId ? `/work/${client.projectId}` : "/clients"}
          className="p-6 rounded-2xl bg-white border border-neutral-200/80 flex flex-col items-center justify-center text-center group hover:border-neutral-900 hover:shadow-md transition-all h-32"
        >
          <ClientLogo id={client.id} />
          <span className="text-[10px] text-neutral-400 mt-2 font-medium tracking-wide">
            {client.industry}
          </span>
        </Link>
      ))}
    </div>
  );
}
