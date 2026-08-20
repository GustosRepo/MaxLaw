"use client";

import Link from 'next/link';
import React from 'react';

export default function LiteNavbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/95 text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="inline-flex min-w-0 flex-shrink-0 items-center" prefetch={false}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/plainlogo.png"
            alt=""
            aria-hidden="true"
            width={210}
            height={75}
            decoding="async"
            className="h-8 w-auto max-w-[42vw]"
          />
          <span className="sr-only">The Law Offices of Saggese & Associates</span>
        </Link>
        <nav className="flex min-w-0 flex-shrink items-center justify-end gap-3 text-xs text-white/70">
          <Link href="/practice" className="hidden hover:text-[#d4af37] min-[430px]:inline">Practice</Link>
          <Link href="/results" className="hidden hover:text-[#d4af37] sm:inline">Results</Link>
          <Link href="/contact" className="hidden hover:text-[#d4af37] min-[430px]:inline">Contact</Link>
          <a href="tel:17027788883" className="whitespace-nowrap rounded-full bg-[#d4af37] px-4 py-2.5 text-sm font-semibold text-black shadow-[0_8px_22px_rgba(212,175,55,0.22)]">
            Call Now
          </a>
        </nav>
      </div>
    </header>
  );
}
