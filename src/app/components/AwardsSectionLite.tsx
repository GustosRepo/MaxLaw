"use client";

import Image from 'next/image';
import { MARC_AWARDS } from '../../lib/constants';

const awardBadges = [
  'ClientChampion_Platinum_2026_300.png',
  'peer-reviewed-300.png',
  'Client-Champion.png',
  'Lawyers-badge.png',
  'top-100.png',
  'new-updated-badge-1.png',
  'new-updated-badge-2.png'
];

export default function AwardsSectionLite() {
  return (
    <section className="mx-auto w-full max-w-5xl space-y-6 px-4">
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-semibold text-white">Awards &amp; Recognition</h2>
        <p className="text-sm text-white/70">Select professional honors.</p>
      </div>
      <div className="overflow-hidden">
        <div className="flex min-w-max gap-6 animate-scroll hover:pause-animation">
          {[...awardBadges, ...awardBadges].map((file, idx) => (
            <div key={`${file}-${idx}`} className="relative h-20 w-20 rounded-xl border border-white/12 bg-black/35">
              <Image
                src={`/awards/${file}`}
                alt={file.replace(/[-_]/g, ' ').replace(/\.[a-z]+$/i, '')}
                fill
                className="object-contain p-3"
                sizes="80px"
              />
            </div>
          ))}
        </div>
      </div>
      <details className="rounded-xl border border-white/12 bg-black/30 p-4 text-sm text-white/75">
        <summary className="cursor-pointer font-semibold text-white">Recognition details</summary>
        <ul className="mt-3 grid grid-cols-1 gap-3 text-left leading-relaxed">
          {MARC_AWARDS.map((award, index) => (
            <li key={`${award}-${index}`} className="rounded-xl border border-white/10 bg-black/25 px-4 py-3">{award}</li>
          ))}
        </ul>
      </details>
      <p className="text-center text-xs text-white/50">Past results, awards, or recognitions do not guarantee similar outcomes. Each case is unique.</p>
    </section>
  );
}
