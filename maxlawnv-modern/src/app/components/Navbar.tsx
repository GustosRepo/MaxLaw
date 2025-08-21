"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/practice", label: "Practice Areas" },
  { href: "/results", label: "Results" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#2d2d2d] bg-[#0e0e0e]/95 backdrop-blur-xl shadow-2xl">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="inline-flex items-center gap-3" prefetch={false}>
          <span className="inline-flex items-center justify-center rounded-xl bg-white shadow-2xl px-4 py-2 border-2 border-[#d4af37]/60">
            <Image src="/home-logo.png" alt="The Law Offices of Saggese & Associates" width={180} height={48} priority />
          </span>
          <span className="sr-only">The Law Offices of Saggese & Associates</span>
        </Link>
        <div className="hidden items-center gap-8 md:flex font-['Inter']">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="text-base font-medium text-white/85 hover:text-[#d4af37] transition-all duration-300 hover:drop-shadow-[0_2px_8px_rgba(212,175,55,0.3)] relative group" 
              prefetch={false}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#d4af37] to-[#c5a467] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>
        <a 
          href="tel:17027788883" 
          className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] border-2 border-[#d4af37] px-6 py-3 text-base font-bold text-[#0e0e0e] shadow-[0_8px_32px_rgba(212,175,55,0.3)] transition-all duration-300 hover:shadow-[0_12px_48px_rgba(212,175,55,0.5)] hover:scale-105 font-['Inter']"
        >
          <span className="relative z-10">(702) 778-8883</span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#e6c547] to-[#d4af37] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </a>
      </nav>
    </header>
  );
}
