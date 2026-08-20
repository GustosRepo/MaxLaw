"use client";

import Link from 'next/link';
import React from 'react';

export default function LiteNavbar() {
  return (
    <header className="w-full bg-black/90 border-b border-white/10 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="inline-flex items-center" prefetch={false}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/plainlogo.png"
            alt=""
            aria-hidden="true"
            width={210}
            height={75}
            decoding="async"
            className="h-8 w-auto"
          />
          <span className="sr-only">The Law Offices of Saggese & Associates</span>
        </Link>
        <nav className="flex items-center gap-4 text-xs text-white/70">
          <Link href="/about" className="hover:text-[#d4af37]">About</Link>
          <Link href="/practice" className="hover:text-[#d4af37]">Practice</Link>
          <Link href="/results" className="hover:text-[#d4af37]">Results</Link>
          <Link href="/contact" className="hover:text-[#d4af37]">Contact</Link>
          <a href="tel:17027788883" className="rounded-xl bg-[#d4af37] px-3 py-2 font-semibold text-black">
            Call Now
          </a>
        </nav>
      </div>
    </header>
  );
}
