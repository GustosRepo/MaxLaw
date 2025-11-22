import Image from 'next/image';
import React from 'react';

// Server component: lightweight, no client JS. Mobile shows a trimmed set automatically via CSS.
// Uses existing images under /public/awards/*

const awards = [
  'Client-Champion.png',
  'Lawyers-badge.png',
  'top-100.png',
  'new-updated-badge-1.png',
  'new-updated-badge-2.png',
  'new-updated-badge-3.png',
  'new-updated-badge-4.png',
  'new-updated-badge-5.png',
  'new-updated-badge-6.jpg',
  'new-updated-badge-7.png',
  'new-updated-badge-8.png',
];

export default function AwardsSection() {
  return (
    <section id="awards" className="py-12 px-4 sm:px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Awards & Recognitions</h2>
      <div className="mx-auto max-w-5xl overflow-hidden">
        <div className="flex min-w-max gap-8 animate-scroll hover:pause-animation">
          {[...awards, ...awards].map((file, idx) => (
            <div
              key={`${file}-${idx}`}
              className="relative h-24 w-24 sm:h-28 sm:w-28 award-tile flex items-center justify-center overflow-hidden"
            >
              <Image
                src={`/awards/${file}`}
                alt={file.replace(/[-_]/g,' ').replace(/\.[a-z]+$/i,'')}
                fill
                sizes="96px"
                className="object-contain drop-shadow"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-white/40 max-w-md mx-auto">Logos are for recognition only and do not imply endorsement.</p>
    </section>
  );
}
