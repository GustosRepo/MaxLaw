"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/practice", label: "Practice Areas" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/results", label: "Results" },
  { href: "/media", label: "Media" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#2d2d2d] bg-[#0e0e0e]/95 backdrop-blur-xl shadow-2xl">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="inline-flex items-center gap-2 md:gap-3" prefetch={false}>
          <span className="inline-flex items-center justify-center rounded-xl px-2.5 py-1 md:px-3.5 md:py-1.5 border border-[#d4af37]/60 bg-transparent shadow-[0_3px_12px_rgba(212,175,55,0.2)]">
            <Image
              src="/home-logo.png"
              alt="The Law Offices of Saggese & Associates"
              width={160}
              height={36}
              priority
              className="h-8 w-auto md:h-10"
            />
          </span>
          <span className="sr-only">The Law Offices of Saggese & Associates</span>
        </Link>

        {/* Hamburger Icon */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded-lg focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-7 w-7 text-[#d4af37]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Nav */}
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

        {/* Desktop call button (hidden on mobile) */}
        <a
          href="tel:17027788883"
          className="hidden md:inline-flex group relative overflow-hidden rounded-xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] border-2 border-[#d4af37] px-6 py-3 text-base font-bold text-[#0e0e0e] shadow-[0_8px_32px_rgba(212,175,55,0.3)] transition-all duration-300 hover:shadow-[0_12px_48px_rgba(212,175,55,0.5)] hover:scale-105 font-['Inter']"
        >
          <span className="relative z-10">(702) 778-8883</span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#e6c547] to-[#d4af37] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </a>
      </nav>

      {/* Mobile Menu — now in flow so it pushes content down instead of overlapping */}
      <div
        id="mobile-nav"
        aria-hidden={!menuOpen}
        hidden={!menuOpen}
        className={`md:hidden w-full overflow-hidden bg-[#0e0e0e]/95 backdrop-blur-xl transition-[max-height,opacity,padding] duration-300 ease-in-out ${
          menuOpen ? "max-h-screen opacity-100 py-8" : "max-h-0 opacity-0 py-0"
        }`}
        style={{ pointerEvents: menuOpen ? "auto" : "none" }}
      >
        <div className="flex flex-col items-center justify-center gap-8 font-['Inter']">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-2xl font-semibold text-white/90 hover:text-[#d4af37] transition-all duration-300"
              prefetch={false}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          {/* Phone number removed on mobile as requested */}
        </div>
      </div>
    </header>
  );
}
