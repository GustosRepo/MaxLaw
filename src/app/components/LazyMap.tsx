"use client";
import React from 'react';
import { FIRM_ADDRESS_FULL } from '@/lib/constants';

interface LazyMapProps {
  title?: string;
  className?: string;
}

export default function LazyMap({ title = 'Office location map', className = '' }: LazyMapProps) {
  return (
    <div className={`relative w-full h-40 md:h-48 rounded-xl overflow-hidden border border-white/10 ${className}`}>
      <iframe
        title={title}
        aria-label={`Google map showing office at ${FIRM_ADDRESS_FULL}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 h-full w-full border-0"
        src={`https://www.google.com/maps?q=${encodeURIComponent(FIRM_ADDRESS_FULL)}&output=embed`}
        allowFullScreen
      />
    </div>
  );
}
