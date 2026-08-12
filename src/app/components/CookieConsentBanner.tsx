'use client';

import Link from 'next/link';
import React from 'react';

const STORAGE_KEY = 'maxlaw-cookie-consent';

type ConsentChoice = 'accepted' | 'rejected';

export default function CookieConsentBanner() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
    const saved = window.localStorage.getItem(STORAGE_KEY) as ConsentChoice | null;
    setIsVisible(!saved);
  }, []);

  const saveChoice = (choice: ConsentChoice) => {
    if (!hasMounted) return;
    window.localStorage.setItem(STORAGE_KEY, choice);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#d4af37]/30 bg-[#111111]/95 backdrop-blur-md shadow-[0_-12px_50px_rgba(0,0,0,0.4)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-6">
        <div className="max-w-3xl text-sm text-white/80">
          <p className="font-semibold text-white">Cookie preferences</p>
          <p className="mt-1">
            We use cookies to help improve site performance and understand usage. You can accept or reject non-essential cookies at any time. See our{' '}
            <Link href="/privacy-policy" className="text-[#d4af37] underline underline-offset-2">Privacy Policy</Link>.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => saveChoice('rejected')}
            className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:border-white/30 hover:text-white"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={() => saveChoice('accepted')}
            className="rounded-full bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-4 py-2 text-sm font-semibold text-[#0e0e0e] shadow-[0_10px_30px_rgba(212,175,55,0.2)]"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
