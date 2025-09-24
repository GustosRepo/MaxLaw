"use client";

import Image from 'next/image';

const awards = [
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
      <div className="grid grid-cols-3 gap-3">
        {awards.map(file => (
          <div key={file} className="relative aspect-square rounded-xl border border-white/15 bg-black/35">
            <Image
              src={`/awards/${file}`}
              alt={file.replace(/[-_]/g, ' ').replace(/\.[a-z]+$/i, '')}
              fill
              className="object-contain p-4"
              sizes="(max-width: 768px) 30vw, 120px"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
