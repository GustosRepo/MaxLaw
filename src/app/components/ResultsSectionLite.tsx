"use client";

import React from 'react';
import { CASE_RESULTS } from '../../lib/client-proof';
import { TOTAL_RECOVERED_DISPLAY } from '../../lib/constants';



export default function ResultsSectionLite() {
  return (
    <section className="mx-auto w-full max-w-5xl space-y-6 px-4">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-semibold text-white">Selected Case Results</h2>
        <p className="text-sm text-white/70"><strong className="text-[#d4af37]">{TOTAL_RECOVERED_DISPLAY}</strong>*</p>
        <p className="text-xs text-white/50">Representative recoveries. Past results do not guarantee future outcomes.</p>
      </div>
      <div className="grid grid-cols-2 gap-3 text-sm text-white/80">
        {CASE_RESULTS.map(r => (
          <div key={r.label} className="rounded-xl border border-white/15 bg-black/40 p-4 text-center">
            <div className="text-lg font-bold text-[#d4af37]">{r.amount}</div>
            <div className="mt-1 text-[10px] uppercase tracking-wide text-white/60">{r.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
