"use client";

import React from 'react';

const REVIEWS = [
  {
    author: 'Desiree S.',
    text: 'Professional, knowledgeable, and supportive throughout my case.'
  },
  {
    author: 'Melody H.',
    text: 'When you think there’s no hope call Marc. He’s a miracle worker.'
  },
  {
    author: 'Patrick W.',
    text: 'Stand‑up attorney who always has his clients’ backs.'
  }
];

export default function ReviewsSectionLite() {
  return (
    <section className="mx-auto w-full max-w-5xl space-y-6 px-4">
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-semibold text-white">Client Reviews</h2>
        <p className="text-sm text-white/70">Feedback from people we’ve helped.</p>
      </div>
      <div className="overflow-hidden">
        <div className="flex min-w-max gap-4 animate-scroll hover:pause-animation">
          {[...REVIEWS, ...REVIEWS].map((review, idx) => (
            <div
              key={`${review.author}-${idx}`}
              className="w-60 rounded-xl border border-white/15 bg-black/35 p-4 text-sm text-white/80"
            >
              <div className="font-semibold text-white">{review.author}</div>
              <p className="mt-2 text-white/70">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
      <p className="text-center text-[11px] text-white/40">Testimonials reflect individual experiences; results vary.</p>
    </section>
  );
}
