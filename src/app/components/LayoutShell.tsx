"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import Navbar from './Navbar';
import LiteNavbar from './LiteNavbar';
import { useLiteMode } from './LiteModeContext';
import ClientErrorBoundary from './ClientErrorBoundary';

const Footer = dynamic(() => import('./Footer'), { loading: () => null });
const LiteFooter = dynamic(() => import('./LiteFooter'), { loading: () => null });
const CookieConsentBanner = dynamic(() => import('./CookieConsentBanner'), { loading: () => null });

interface LayoutShellProps {
  children: React.ReactNode;
}

export default function LayoutShell({ children }: LayoutShellProps) {
  const { lite, nav } = useLiteMode();
  const [isMobile, setIsMobile] = React.useState(false);
  const [isHydrated, setIsHydrated] = React.useState(false);
  const [showCookieConsent, setShowCookieConsent] = React.useState(false);

  React.useEffect(() => {
    setIsHydrated(true);
    if (typeof window === 'undefined') return;
    const mql = window.matchMedia('(max-width: 767px)');
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
  }, []);

  React.useEffect(() => {
    const timer = window.setTimeout(() => setShowCookieConsent(true), 3500);
    return () => window.clearTimeout(timer);
  }, []);

  const header = React.useMemo(() => {
    if (lite) {
      return nav ? <LiteNavbar /> : null;
    }
    // Always render Navbar on server and during initial hydration
    if (!isHydrated) {
      return <Navbar />;
    }
    return isMobile ? <LiteNavbar /> : <Navbar />;
  }, [isMobile, lite, nav, isHydrated]);

  const footer = React.useMemo(() => {
    if (lite) return <LiteFooter />;
    // Always render Footer on server and during initial hydration
    if (!isHydrated) {
      return <Footer />;
    }
    return isMobile ? <LiteFooter /> : <Footer />;
  }, [isMobile, lite, isHydrated]);

  return (
    <ClientErrorBoundary>
      {header}
      {children}
      {footer}
      {showCookieConsent && <CookieConsentBanner />}
    </ClientErrorBoundary>
  );
}
