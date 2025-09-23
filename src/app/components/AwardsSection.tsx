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
    <section id="awards" className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Awards & Recognitions</h2>
      <ul className="mx-auto max-w-5xl grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {awards.map((file, i) => (
          <li
            key={file}
            className={`relative aspect-square rounded-xl border border-white/10 bg-white/5 p-2 flex items-center justify-center overflow-hidden ${i>5 ? 'hidden md:flex' : ''}`}
          >
            <Image
              src={`/awards/${file}`}
              alt={file.replace(/[-_]/g,' ').replace(/\.[a-z]+$/i,'')}
              fill
              sizes="(max-width:640px) 30vw, (max-width:1024px) 12vw, 160px"
              className="object-contain drop-shadow"
              loading="lazy"
            />
          </li>
        ))}
      </ul>
      <p className="mt-6 text-center text-xs text-white/40 max-w-md mx-auto">Logos are for recognition only and do not imply endorsement. Mobile trimmed for speed.</p>
    </section>
  );
}
