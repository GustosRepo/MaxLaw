"use client";

import React from 'react';
import Navbar from './Navbar';
import LiteNavbar from './LiteNavbar';
import Footer from './Footer';
import LiteFooter from './LiteFooter';
import { useLiteMode } from './LiteModeContext';

interface LayoutShellProps {
  children: React.ReactNode;
}

export default function LayoutShell({ children }: LayoutShellProps) {
  const { lite, nav } = useLiteMode();
  const [isMobile, setIsMobile] = React.useState(false);
  const [isHydrated, setIsHydrated] = React.useState(false);

  React.useEffect(() => {
    setIsHydrated(true);
    if (typeof window === 'undefined') return;
    const mql = window.matchMedia('(max-width: 767px)');
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
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
    <>
      {header}
      {children}
      {footer}
    </>
  );
}
