'use client';

import Link from 'next/link';
import React from 'react';

import { clearAnalyticsCookies, CONSENT_EVENT, getConsentChoice, PREFERENCES_EVENT, saveConsentChoice, type ConsentChoice } from '../../lib/consent';

export default function CookieConsentBanner() {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const update = () => setIsVisible(!getConsentChoice());
    const open = () => setIsVisible(true);
    update();
    window.addEventListener(PREFERENCES_EVENT, open);
    window.addEventListener(CONSENT_EVENT, update);
    window.addEventListener('storage', update);
    return () => {
      window.removeEventListener(PREFERENCES_EVENT, open);
      window.removeEventListener(CONSENT_EVENT, update);
      window.removeEventListener('storage', update);
    };
  }, []);

  const saveChoice = (choice: ConsentChoice) => {
    const previous = getConsentChoice();
    saveConsentChoice(choice);
    setIsVisible(false);
    if (choice === 'rejected') {
      clearAnalyticsCookies();
      // Unload already-running analytics/chat code when consent is withdrawn.
      if (previous === 'accepted') window.location.reload();
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#d4af37]/30 bg-[#111111]/95 backdrop-blur-md shadow-[0_-12px_50px_rgba(0,0,0,0.4)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-6">
        <div className="max-w-3xl text-sm text-white/80">
          <p className="font-semibold text-white">Cookie preferences</p>
          <p className="mt-1">
            With your permission, we load analytics and live chat. You can change this choice using Cookie preferences in the footer. The contact form and phone links work either way. See our{' '}
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
