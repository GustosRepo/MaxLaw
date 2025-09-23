import React from 'react';

// Pure server component: static list of sample outcomes.
// Avoid promises / data fetching for now; can be replaced with real data later.

const results = [
  { amount: '$2.1M', label: 'Motor Vehicle Collision' },
  { amount: '$980K', label: 'Premises Liability' },
  { amount: '$750K', label: 'Commercial Truck Crash' },
  { amount: '$450K', label: 'Defective Product' },
];

export default function ResultsSection(){
  return (
    <section id="results" className="py-12 px-4 sm:px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Selected Case Results</h2>
      <ul className="mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {results.map(r => (
          <li key={r.label} className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-4 text-center">
            <div className="text-xl font-bold text-[#d4af37]">{r.amount}</div>
            <div className="mt-1 text-[11px] uppercase tracking-wide text-white/60 leading-snug">{r.label}</div>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-center text-xs text-white/40 max-w-md mx-auto">Past results do not guarantee future outcomes. Amounts reflect gross settlements/verdicts before fees, costs, liens.</p>
    </section>
  );
}
