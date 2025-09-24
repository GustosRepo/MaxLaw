"use client";

import Link from 'next/link';
import React from 'react';

export default function LiteNavbar() {
  return (
    <header className="w-full bg-black/90 border-b border-white/10 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-sm font-semibold tracking-wide text-white/90">
          Saggese &amp; Associates
        </Link>
        <nav className="flex items-center gap-4 text-xs text-white/70">
          <Link href="/practice" className="hover:text-[#d4af37]">Practice</Link>
          <Link href="/results" className="hover:text-[#d4af37]">Results</Link>
          <a href="tel:17027788883" className="rounded-xl bg-[#d4af37] px-3 py-2 font-semibold text-black">
            Call (702) 778-8883
          </a>
        </nav>
      </div>
    </header>
  );
}
