"use client";
import React from 'react';
import Image from 'next/image';

// Static hero background image (desktop only) per request
export default function HeroMediaRotator() {
  return (
    <div className="absolute inset-0 -z-10 hidden md:block overflow-hidden rounded-3xl">
      <Image
        src="/home-pics/neo-classical-courthouse-facade-illuminated-night-generated-by-ai.jpg"
        alt="Neo-classical courthouse facade illuminated at night"
        fill
        priority
        sizes="(min-width: 768px) 1200px, 100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/55 to-black/85" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(212,175,55,0.28),transparent_65%)] mix-blend-overlay pointer-events-none" />
    </div>
  );
}
