"use client";

import React from 'react';

interface LiteModeContextValue {
  lite: boolean;
  setLite: (value: boolean) => void;
  nav: boolean;
}

const LiteModeContext = React.createContext<LiteModeContextValue | undefined>(undefined);

export function LiteModeProvider({ children }: { children: React.ReactNode }) {
  const [lite, setLite] = React.useState(false);
  const [nav, setNav] = React.useState(false);

  React.useEffect(() => {
    try {
      const sp = new URLSearchParams(window.location.search);
      const stored = localStorage.getItem('lite') === '1';
      const fromQuery = sp.has('lite') || sp.has('safe');
      const next = fromQuery || stored;
      setLite(next);
      if (fromQuery) {
        localStorage.setItem('lite', '1');
      }
      const navEnabled = sp.has('nav') || localStorage.getItem('lite-nav') === '1';
      setNav(navEnabled);
      if (sp.has('nav')) {
        localStorage.setItem('lite-nav', '1');
      }
    } catch {
      // ignore
    }
  }, []);

  return (
    <LiteModeContext.Provider value={{ lite, setLite, nav }}>
      {children}
    </LiteModeContext.Provider>
  );
}

export function useLiteMode() {
  const ctx = React.useContext(LiteModeContext);
  if (!ctx) {
    return { lite: false, setLite: () => {}, nav: false };
  }
  return ctx;
}
