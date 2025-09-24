"use client";

import Link from 'next/link';
import React from 'react';

export default function LiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-12 border-t border-white/10 bg-black/85 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-3 px-4 py-6 text-center text-xs text-white/60">
        <div className="flex flex-wrap justify-center gap-4 text-white/70">
          <Link href="/about" className="hover:text-[#d4af37]">About</Link>
          <Link href="/practice" className="hover:text-[#d4af37]">Practice</Link>
          <Link href="/results" className="hover:text-[#d4af37]">Results</Link>
          <Link href="/contact" className="hover:text-[#d4af37]">Contact</Link>
        </div>
        <p>© {year} The Law Offices of Saggese &amp; Associates</p>
        <p className="text-white/40">Las Vegas, Nevada • (702) 778-8883</p>
      </div>
    </footer>
  );
}
