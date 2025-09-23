import Image from 'next/image';
import React from 'react';

// Server component: minimal markup, lazy images.

const mediaItems: { src: string; alt: string; href?: string }[] = [
  { src: '/shows/Face-to-Face-o.jpg', alt: 'Face to Face' },
  { src: '/shows/insideeditions.png', alt: 'Inside Editions' },
  { src: '/shows/Review-Journal-o.jpg', alt: 'Review Journal' },
  { src: '/shows/The-Defenders-o.jpg', alt: 'The Defenders' },
];

export default function MediaSection() {
  return (
    <section id="media" className="py-12 px-4 sm:px-6">
      <h2 className="text-3xl font-bold text-center mb-8">In The Media</h2>
      <ul className="mx-auto max-w-5xl grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
        {mediaItems.map(item => (
          <li key={item.src} className="relative aspect-[4/3] rounded-xl border border-white/10 bg-white/5 overflow-hidden">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              loading="lazy"
              className="object-cover opacity-90 hover:opacity-100 transition" 
              sizes="(max-width:640px) 45vw, (max-width:1024px) 25vw, 200px"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
