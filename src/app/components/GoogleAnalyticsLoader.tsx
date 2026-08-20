"use client";

import React from "react";

const GA_ID = "G-1FSZHPMBHS";
const GA_SRC = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export default function GoogleAnalyticsLoader() {
  React.useEffect(() => {
    if (document.querySelector(`script[src="${GA_SRC}"]`)) return;

    let loaded = false;

    const loadAnalytics = () => {
      if (loaded) return;
      loaded = true;

      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag(...args: unknown[]) {
        window.dataLayer?.push(args);
      };
      window.gtag("js", new Date());
      window.gtag("config", GA_ID);

      const script = document.createElement("script");
      script.src = GA_SRC;
      script.async = true;
      document.head.appendChild(script);
      cleanup();
    };

    const timer = window.setTimeout(loadAnalytics, 8000);

    const cleanup = () => {
      window.removeEventListener("pointerdown", loadAnalytics);
      window.removeEventListener("keydown", loadAnalytics);
      window.removeEventListener("touchstart", loadAnalytics);
      window.clearTimeout(timer);
    };

    window.addEventListener("pointerdown", loadAnalytics, { once: true, passive: true });
    window.addEventListener("keydown", loadAnalytics, { once: true });
    window.addEventListener("touchstart", loadAnalytics, { once: true, passive: true });

    return cleanup;
  }, []);

  return null;
}
