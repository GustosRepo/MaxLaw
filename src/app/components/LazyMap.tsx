"use client";
import React from 'react';
import { FIRM_ADDRESS_FULL } from '@/lib/constants';

interface LazyMapProps {
  title?: string;
  className?: string;
}

export default function LazyMap({ title = 'Office location map', className = '' }: LazyMapProps) {
  const [inView, setInView] = React.useState(false);
  const [loaded, setLoaded] = React.useState(false);
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!ref.current || inView) return;
    const el = ref.current;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      });
    }, { rootMargin: '200px' });
    obs.observe(el);
    return () => obs.disconnect();
  }, [inView]);

  return (
    <div ref={ref} className={`relative w-full h-40 md:h-48 rounded-xl overflow-hidden border border-white/10 ${className}`}>      
      {!inView && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-neutral-900 via-neutral-900/95 to-neutral-800 text-white/60 text-xs">
          <span>Map deferred to save memory</span>
          <span className="opacity-50">Scroll a bit more to load…</span>
        </div>
      )}
      {inView && (
        <iframe
          title={title}
          aria-label={`Google map showing office at ${FIRM_ADDRESS_FULL}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={() => setLoaded(true)}
          className={`w-full h-full transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          src={`https://www.google.com/maps?q=${encodeURIComponent(FIRM_ADDRESS_FULL)}&output=embed`}
          allowFullScreen
        />
      )}
      {!loaded && inView && (
        <div className="absolute inset-0 animate-pulse bg-[linear-gradient(110deg,#2a2a2a,45%,#3a3a3a,55%,#2a2a2a)] bg-[length:200%_100%]" aria-hidden />
      )}
    </div>
  );
}
