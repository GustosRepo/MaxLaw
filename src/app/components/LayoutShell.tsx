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
  const [isMobile, setIsMobile] = React.useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(max-width: 767px)').matches;
  });

  React.useEffect(() => {
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
    return isMobile ? <LiteNavbar /> : <Navbar />;
  }, [isMobile, lite, nav]);

  const footer = React.useMemo(() => {
    if (lite) return <LiteFooter />;
    return isMobile ? <LiteFooter /> : <Footer />;
  }, [isMobile, lite]);

  return (
    <>
      {header}
      {children}
      {footer}
    </>
  );
}
