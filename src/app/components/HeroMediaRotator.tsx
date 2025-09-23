import React from 'react';
import Image from 'next/image';

// Static hero background image (now shown on all breakpoints)
export default function HeroMediaRotator() {
  return (
    <div className="absolute inset-0 -z-10 block overflow-hidden">
      <Image
        src="/home-pics/neo-classical-courthouse-facade-illuminated-night-generated-by-ai.jpg"
        alt="Neo-classical courthouse facade illuminated at night"
        fill
        sizes="100vw"
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/60 to-black/80 md:from-black/70 md:via-black/55 md:to-black/85" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(212,175,55,0.28),transparent_65%)] mix-blend-overlay pointer-events-none" />
    </div>
  );
}
