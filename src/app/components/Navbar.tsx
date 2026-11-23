"use client";

import Link from "next/link";
import Image from "next/image";
import { FIRM_PHONE_DISPLAY, FIRM_PHONE_E164 } from "../../lib/constants";
import PrimaryMenu, { primaryNavLinks } from "./PrimaryMenu";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#2d2d2d] bg-[#0e0e0e]/95 md:backdrop-blur-xl shadow-2xl">
      <nav aria-label="Main navigation" className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between gap-2 px-3 py-0 md:px-6">
        <Link href="/" className="inline-flex items-center gap-2 md:gap-3" prefetch={false}>
          <span className="inline-flex items-center justify-center rounded-xl px-2 py-1 md:px-3.5 md:py-1.5 border border-[#d4af37]/60 bg-transparent shadow-[0_3px_12px_rgba(212,175,55,0.2)]">
            <Image
              src="/2026logo-sharp.png"
              sizes="(min-width: 768px) 162px, 130px"
              alt=""
              aria-hidden="true"
              width={300}
              height={100}
              fetchPriority="low"
              loading="eager"
              decoding="async"
              className="aspect-[3/1] h-8 w-auto object-contain scale-[1.35] md:h-10"
            />
          </span>
          <span className="sr-only">The Law Offices of Saggese & Associates</span>
        </Link>

        <div className="hidden items-center gap-5 lg:flex xl:gap-7 font-[var(--font-inter)]">
          {primaryNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap text-lg font-bold transition-all duration-300 relative group xl:text-xl ${link.href === "/contact" ? "rounded-lg bg-[#d4af37] px-3 py-2 text-[#0e0e0e] shadow-[0_6px_20px_rgba(212,175,55,0.25)] hover:bg-[#e6c547] xl:px-4" : "text-white/85 hover:text-[#d4af37] hover:drop-shadow-[0_2px_8px_rgba(212,175,55,0.3)]"}`}
              prefetch={false}
            >
              {link.label}
              {link.href !== "/contact" && <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#d4af37] to-[#c5a467] transition-all duration-300 group-hover:w-full" />}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${FIRM_PHONE_E164}`}
            className="inline-flex whitespace-nowrap rounded-xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-2.5 py-3 text-sm font-black leading-none text-[#0e0e0e] no-underline shadow-[0_8px_32px_rgba(212,175,55,0.3)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_12px_48px_rgba(212,175,55,0.5)] md:px-4 md:text-lg lg:px-5 lg:text-xl xl:px-6 xl:text-2xl font-[var(--font-inter)]"
          >
            {FIRM_PHONE_DISPLAY}
          </a>
          <PrimaryMenu className="lg:hidden" />
        </div>
      </nav>
    </header>
  );
}
