import React from 'react';
import Image from 'next/image';

/**
 * HeroMediaRotator (optimized)
 * - Removed unconditional `priority` to avoid unused preload warnings / mobile memory spike.
 * - Uses eager loading so the image still decodes quickly for LCP without forcing <link rel="preload">.
 * - Applies fetchPriority="high" only on larger screens after hydration.
 * - Radial decorative overlay disabled on small screens to reduce overdraw.
 * - Added quality hint + simplified sizes (single asset currently available).
 */
export default function HeroMediaRotator() {
  const [desktop, setDesktop] = React.useState(false);
  React.useEffect(() => {
    try { if (window.innerWidth >= 1024) setDesktop(true); } catch { /* ignore */ }
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <picture>
        <source srcSet="/home-pics/hero-bg-2400.webp" type="image/webp" />
        <Image
          src="/home-pics/hero-bg-2400.jpg"
          alt="Neo-classical courthouse facade illuminated at night"
          fill
          sizes="100vw"
          quality={70}
          loading="eager"
          fetchPriority={desktop ? 'high' : 'auto'}
          className="object-cover object-center will-change-transform"
        />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/65 to-black/85 md:from-black/70 md:via-black/55 md:to-black/80" />
      <div className="hidden md:block absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(212,175,55,0.28),transparent_65%)] mix-blend-overlay pointer-events-none" />
    </div>
  );
}
