"use client";

import React from "react";
import { usePathname } from 'next/navigation';
import { GA_ID, trackPageView } from '../../lib/analytics';
import { clearAnalyticsCookies, CONSENT_EVENT, getConsentChoice } from '../../lib/consent';

export default function GoogleAnalyticsLoader() {
  const pathname = usePathname();
  React.useEffect(() => {
    const update = () => {
      if (getConsentChoice() === 'accepted') trackPageView();
      else {
        window[`ga-disable-${GA_ID}`] = true;
        document.querySelector('script[data-maxlaw-analytics]')?.remove();
        clearAnalyticsCookies();
      }
    };
    update();
    window.addEventListener(CONSENT_EVENT, update);
    const storageUpdate = () => {
      if (getConsentChoice() !== 'accepted' && document.querySelector('script[data-maxlaw-analytics]')) window.location.reload();
      else update();
    };
    window.addEventListener('storage', storageUpdate);
    return () => {
      window.removeEventListener(CONSENT_EVENT, update);
      window.removeEventListener('storage', storageUpdate);
    };
  }, [pathname]);

  return null;
}
