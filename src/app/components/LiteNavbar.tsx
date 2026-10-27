"use client";

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { FIRM_PHONE_DISPLAY, FIRM_PHONE_E164 } from '../../lib/constants';

export default function LiteNavbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/95 text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 py-0">
        <Link href="/" className="inline-flex min-w-0 flex-shrink-0 items-center" prefetch={false}>
          <Image
            src="/2026logo-sharp.png"
            sizes="(min-width: 768px) 162px, 130px"
            alt=""
            aria-hidden="true"
            width={300}
            height={100}
            loading="eager"
            fetchPriority="low"
            decoding="async"
            className="aspect-[3/1] h-8 w-auto max-w-[42vw] object-contain scale-[1.35]"
          />
          <span className="sr-only">The Law Offices of Saggese & Associates</span>
        </Link>
        <nav className="flex min-w-0 flex-shrink items-center justify-end gap-2 text-sm font-semibold text-white/80 min-[430px]:gap-3">
          <Link href="/practice" className="hidden hover:text-[#d4af37] min-[430px]:inline">Practice</Link>
          <Link href="/results" className="hidden hover:text-[#d4af37] sm:inline">Results</Link>
          <Link href="/contact" className="hidden rounded-lg bg-[#d4af37] px-3 py-1.5 font-bold text-black shadow-[0_5px_16px_rgba(212,175,55,0.25)] min-[430px]:inline">Contact</Link>
          <a href={`tel:${FIRM_PHONE_E164}`} className="whitespace-nowrap rounded-full bg-[#d4af37] px-3 py-2 text-sm font-bold text-black shadow-[0_8px_22px_rgba(212,175,55,0.22)] min-[380px]:text-base sm:px-4 sm:py-2.5">
            {FIRM_PHONE_DISPLAY}
          </a>
        </nav>
      </div>
    </header>
  );
}
