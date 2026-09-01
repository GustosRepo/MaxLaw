import Image from 'next/image';
import React from 'react';
import { FEATURED_MEDIA_APPEARANCES } from '../../lib/constants';

// Server component: minimal markup, lazy images.

const mediaItems: { src: string; alt: string; width: number; height: number }[] = [
  { src: '/shows/LasVegas_journal_review_logo.jpg', alt: 'Las Vegas Review-Journal', width: 300, height: 300 },
  { src: '/shows/The_Defenders_(2010_TV_series_intertitle).png', alt: 'CBS The Defenders', width: 421, height: 236 },
  { src: '/shows/insideeditions.png', alt: 'Inside Editions', width: 366, height: 256 },
];

export default function MediaSection() {
  return (
    <section id="media" className="py-12 px-4 sm:px-6">
      <h2 className="text-3xl font-bold text-center mb-3">As Seen On</h2>
      <p className="mx-auto mb-8 max-w-3xl text-center text-sm text-white/70">FOX, CBS, CNN, Court TV, 48 Hours, and leading Las Vegas news outlets.</p>
      <ul className="mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        {mediaItems.map(item => (
          <li key={item.src} className="flex min-h-[236px] items-center justify-center rounded-xl border border-white/10 bg-white/5 p-3 overflow-hidden">
            <Image
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              loading="lazy"
              className="h-auto max-h-[300px] w-auto max-w-full object-contain opacity-90 transition hover:opacity-100"
              sizes="(max-width:640px) 90vw, 421px"
            />
          </li>
        ))}
      </ul>
      <ul className="mx-auto mt-6 grid max-w-5xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURED_MEDIA_APPEARANCES.map((appearance) => (
          <li key={`${appearance.network}-${appearance.program}`} className="rounded-xl border border-white/10 bg-black/25 p-4 text-center">
            <div className="text-xs font-bold uppercase tracking-[0.16em] text-[#d4af37]">{appearance.network}</div>
            <div className="mt-2 text-sm font-semibold leading-snug text-white">{appearance.program}</div>
          </li>
        ))}
      </ul>
      <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-[#d4af37]/25 bg-black/30 p-6 text-center">
        <h3 className="text-xl font-semibold text-[#d4af37]">The Real Lawyer Behind CBS&apos;s <em>The Defenders</em></h3>
        <p className="mt-3 text-sm leading-relaxed text-white/80">Marc Saggese&apos;s Las Vegas legal career helped inspire Pete Kaczmarek, played by Jerry O&apos;Connell, in the CBS prime-time legal drama <em>The Defenders</em>. Marc worked with the show&apos;s writers to help bring legal authenticity to its stories.</p>
        <a href="/media#defenders" className="mt-4 inline-block text-sm font-semibold text-[#d4af37] underline underline-offset-4">Read the media story</a>
      </div>
    </section>
  );
}
