'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { CONSENT_EVENT, CONSENT_KEY, getConsentChoice } from '../../lib/consent';

const AHREFS_SRC = 'https://analytics.ahrefs.com/analytics.js';
const AHREFS_KEY = 'qFRUo4ZbMGsk8I3K4KP+IA';

declare global {
  interface Window {
    AhrefsAnalytics?: { sendEvent: (name: string) => void };
  }
}

export default function AhrefsAnalyticsLoader() {
  const pathname = usePathname();
  const lastPage = useRef<string | null>(null);

  useEffect(() => {
    // The tracker reads document.referrer directly, so skip URLs with an unsanitized referrer.
    if (/[?#]/.test(document.referrer)) return;

    const scriptSelector = `head script[src="${AHREFS_SRC}"]`;

    function trackPage(script: HTMLScriptElement) {
      if (getConsentChoice() !== 'accepted') return;

      const url = new URL(window.location.origin);
      url.pathname = window.location.pathname;
      script.dataset.pageLocation = url.href;

      if (!window.AhrefsAnalytics || lastPage.current === url.href) return;
      lastPage.current = url.href;
      window.AhrefsAnalytics.sendEvent('pageview');
    }

    function update() {
      const existing = document.querySelector<HTMLScriptElement>(scriptSelector);
      if (getConsentChoice() !== 'accepted') {
        // Ahrefs reads the key on every event, including after the script has executed.
        existing?.removeAttribute('data-key');
        lastPage.current = null;
        return;
      }

      if (existing) {
        existing.dataset.key = AHREFS_KEY;
        trackPage(existing);
        return;
      }

      const script = document.createElement('script');
      script.src = AHREFS_SRC;
      script.async = true;
      script.dataset.key = AHREFS_KEY;
      script.setAttribute('data-no-pageview-auto', '');
      script.addEventListener('load', () => trackPage(script), { once: true });
      script.addEventListener('error', () => script.remove(), { once: true });
      trackPage(script);
      document.head.appendChild(script);
    }

    function updateFromStorage(event: StorageEvent) {
      if (event.key === CONSENT_KEY || event.key === null) update();
    }

    update();
    window.addEventListener(CONSENT_EVENT, update);
    window.addEventListener('storage', updateFromStorage);
    return () => {
      window.removeEventListener(CONSENT_EVENT, update);
      window.removeEventListener('storage', updateFromStorage);
    };
  }, [pathname]);

  return null;
}
