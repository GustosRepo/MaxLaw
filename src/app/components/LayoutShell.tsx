"use client";

import React from 'react';
import Navbar from './Navbar';
import LiteNavbar from './LiteNavbar';
import Footer from './Footer';
import DiagnosticsClient from './DiagnosticsClient';
import { Analytics } from '@vercel/analytics/react';
import { useLiteMode } from './LiteModeContext';

interface LayoutShellProps {
  children: React.ReactNode;
}

export default function LayoutShell({ children }: LayoutShellProps) {
  const { lite, nav } = useLiteMode();

  return (
    <>
      {lite ? (nav ? <LiteNavbar /> : null) : <Navbar />}
      {children}
      {!lite && <Footer />}
      {!lite && <DiagnosticsClient />}
      {!lite && process.env.NODE_ENV === 'production' && <Analytics />}
    </>
  );
}
