"use client";

import { useRef } from 'react';
import Link from 'next/link';
import { RESOURCES_PATH } from '@/lib/resources';

export const primaryNavLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/practice', label: 'Practice Areas' },
  { href: '/service-areas', label: 'Service Areas' },
  { href: '/results', label: 'Results' },
  { href: RESOURCES_PATH, label: 'Resources' },
  { href: '/contact', label: 'Contact' },
];

export default function PrimaryMenu({ className }: { className?: string }) {
  const disclosure = useRef<HTMLDetailsElement>(null);
  const summary = useRef<HTMLElement>(null);

  function closeMenu() {
    if (disclosure.current) disclosure.current.open = false;
  }

  return (
    <details
      ref={disclosure}
      className={`relative ${className ?? ''}`}
      onKeyDown={event => {
        if (event.key === 'Escape' && disclosure.current?.open) {
          event.stopPropagation();
          closeMenu();
          summary.current?.focus();
        }
      }}
    >
      <summary
        ref={summary}
        className="flex min-h-11 cursor-pointer list-none items-center rounded-lg border border-white/20 px-2.5 text-sm font-semibold text-white hover:border-[#d4af37] focus-visible:outline-2 focus-visible:outline-[#d4af37] [&::-webkit-details-marker]:hidden"
      >
        Menu
      </summary>
      <ul className="absolute right-0 z-10 mt-2 max-h-[calc(100dvh-6rem)] w-48 space-y-1 overflow-y-auto rounded-xl border border-white/10 bg-[#111] p-2 text-base font-semibold text-white shadow-xl">
        {primaryNavLinks.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              prefetch={false}
              onClick={closeMenu}
              className="block rounded-lg px-3 py-2.5 hover:bg-white/10 hover:text-[#d4af37] focus-visible:outline-2 focus-visible:outline-[#d4af37]"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}
