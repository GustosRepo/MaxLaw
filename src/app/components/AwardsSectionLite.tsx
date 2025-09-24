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
      <div className="overflow-hidden">
        <div className="flex min-w-max gap-6 animate-scroll hover:pause-animation">
          {[...awards, ...awards].map((file, idx) => (
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
    </section>
  );
}
