"use client";

import React from 'react';
import Image from 'next/image';

export default function AboutSectionLite() {
  return (
    <section className="mx-auto w-full max-w-5xl space-y-6 px-4">
      <div className="space-y-3 rounded-2xl border border-white/12 bg-black/40 p-6 text-center text-white/80">
        <div className="mx-auto h-32 w-32 overflow-hidden rounded border border-white/15 bg-black/50">
          <Image
            src="/meet-your.jpg"
            alt="Marc A. Saggese"
            width={128}
            height={128}
            className="h-full w-full object-cover"
            priority={false}
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white">Marc A. Saggese, Esq.</h2>
          <p className="mt-2 text-sm text-white/70">
            Las Vegas trial lawyer helping injury victims and clients facing criminal charges. Over two decades of
            courtroom experience with a client‑first approach.
          </p>
        </div>
        <ul className="mt-4 flex flex-wrap justify-center gap-3 text-xs text-white/60">
          <li>20+ Years Serving Nevada</li>
          <li>Former Army JAG Captain</li>
          <li>Legal Analyst for Local Media</li>
        </ul>
        <p className="text-[11px] text-white/40">Meet the full team on the About page.</p>
      </div>
    </section>
  );
}
