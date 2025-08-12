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
    <header className="sticky top-0 z-50 border-b border-[#2d313a] bg-[#181c23]/90 backdrop-blur shadow-lg">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="inline-flex items-center gap-3" prefetch={false}>
          <span className="inline-flex items-center justify-center rounded-xl bg-white shadow-lg px-4 py-2 border border-[#bfa76a]">
            <Image src="/home-logo.png" alt="The Law Offices of Saggese & Associates" width={180} height={48} priority />
          </span>
          <span className="sr-only">The Law Offices of Saggese & Associates</span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-base font-medium text-white/80 hover:text-[#bfa76a] transition" prefetch={false}>
              {link.label}
            </Link>
          ))}
        </div>
        <a href="tel:17027788883" className="rounded-xl border px-4 py-2 text-base font-bold shadow-sm transition bg-[#bfa76a] text-[#23272e] border-[#bfa76a] hover:bg-[#d6c08a]">(702) 778-8883</a>
      </nav>
    </header>
  );
}
