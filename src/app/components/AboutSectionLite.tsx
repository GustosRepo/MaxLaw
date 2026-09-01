"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MARC_HEADSHOT_SRC } from '../../lib/constants';

export default function AboutSectionLite() {
  return (
    <section className="mx-auto w-full max-w-5xl space-y-6 px-4">
      <div className="space-y-3 rounded-2xl border border-white/12 bg-black/40 p-6 text-center text-white/80">
        <div className="mx-auto h-32 w-32 overflow-hidden rounded border border-white/15 bg-black/50">
          <Image
            src={MARC_HEADSHOT_SRC}
            alt="Marc A. Saggese"
            width={128}
            height={128}
            className="h-full w-full object-cover object-top"
            priority={false}
          />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#d4af37]">Meet Your Lawyer</p>
          <h2 className="mt-1 text-2xl font-semibold text-white">Marc A. Saggese, Esq.</h2>
          <p className="mt-2 text-sm text-white/70">
            Las Vegas trial lawyer helping injury victims and clients facing criminal charges. Over two decades of
            courtroom experience with a client‑first approach.
          </p>
        </div>
        <ul className="mt-4 flex flex-wrap justify-center gap-3 text-xs text-white/60">
          <li>Free consultations</li>
          <li>Same-day when available</li>
          <li>Evening/weekend by appt.</li>
          <li>Se habla Espanol</li>
        </ul>
        <Link href="/about/marc-a-saggese" className="inline-flex justify-center rounded-2xl border border-white/12 px-5 py-3 text-sm font-semibold text-white/90">
          Full Marc Bio
        </Link>
      </div>
    </section>
  );
}
