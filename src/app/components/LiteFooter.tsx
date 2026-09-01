"use client";

import Link from 'next/link';
import React from 'react';
import { FIRM_PHONE_DISPLAY, FIRM_PHONE_E164 } from '../../lib/constants';

export default function LiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-12 border-t border-white/10 bg-black/85 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-3 px-4 py-6 text-center text-xs text-white/60">
        <div className="flex flex-wrap justify-center gap-4 text-white/70">
          <Link href="/about" className="hover:text-[#d4af37]">About</Link>
          <Link href="/practice" className="hover:text-[#d4af37]">Practice</Link>
          <Link href="/results" className="hover:text-[#d4af37]">Results</Link>
          <Link href="/privacy-policy" className="hover:text-[#d4af37]">Privacy Policy</Link>
          <Link href="/disclaimer" className="hover:text-[#d4af37]">Disclaimer</Link>
          <Link href="/contact" className="hover:text-[#d4af37]">Contact</Link>
        </div>
        <p>© {year} The Law Offices of Saggese &amp; Associates</p>
        <div className="flex flex-col items-center gap-2 text-white/40">
          <span>Las Vegas, Nevada</span>
          <a href={`tel:${FIRM_PHONE_E164}`} className="inline-flex items-center rounded-xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-4 py-2 text-sm font-bold text-[#0e0e0e] no-underline shadow-[0_8px_22px_rgba(212,175,55,0.18)]">Call {FIRM_PHONE_DISPLAY}</a>
        </div>
      </div>
    </footer>
  );
}
