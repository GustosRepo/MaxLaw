import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function PlainPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <p>Plain baseline page. If this reloads, it is not the UI.</p>
    </main>
  );
}
