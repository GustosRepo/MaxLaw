"use client";

import React from 'react';

export default function PlainDangerPage() {
  const kill = () => {
    try {
      let total = 0;
      for (let i = 0; i < 5_000_000; i++) {
        total += i;
      }
      return total;
    } catch (err) {
      console.log('heavy error', err);
    }
  };

  React.useEffect(() => {
    const handle = window.requestAnimationFrame(() => {
      const result = kill();
      console.log('heavy work done', result);
    });
    return () => window.cancelAnimationFrame(handle);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <p>Trigger page: heavy work on mount; check console for logs.</p>
    </main>
  );
}
