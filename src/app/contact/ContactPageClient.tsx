"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import LazyMap from '../components/LazyMap';
import {
  FIRM_ADDRESS_LINE1,
  FIRM_ADDRESS_LINE2,
  FIRM_ADDRESS_FULL,
  FIRM_PHONE_DISPLAY,
  FIRM_PHONE_E164,
} from '../../lib/constants';

const ContactFormInner = dynamic(() => import('../components/ContactFormInner'), {
  ssr: false,
  loading: () => (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center text-sm text-white/65">
      Preparing secure form…
    </div>
  ),
});

export default function ContactPageClient() {
  const [showForm, setShowForm] = React.useState(false);
  const [mapRevealed, setMapRevealed] = React.useState(false);

  React.useEffect(() => {
    try {
      if (window.matchMedia('(min-width: 768px)').matches) {
        setShowForm(true);
      }
    } catch {
      /* ignore */
    }
  }, []);

  return (
    <main className="min-h-screen custom-bg text-white font-[var(--font-inter)] py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <section className="mb-6">
          <div className="rounded-3xl p-6 md:p-8 bg-black/40 md:bg-gradient-to-br md:from-white/3 md:to-transparent border border-white/8 shadow-lg">
            <h1 className="text-2xl md:text-3xl font-['Playfair_Display'] font-bold text-[#bfa76a]">Contact</h1>
            <p className="mt-2 text-white/80">Schedule a free consultation.</p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8">
              <a href={`tel:${FIRM_PHONE_E164}`} className="inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-3 text-base font-bold text-[#0e0e0e] no-underline shadow-[0_10px_30px_rgba(212,175,55,0.2)] transition hover:scale-[1.02] hover:shadow-[0_14px_36px_rgba(212,175,55,0.28)] sm:w-auto">Call {FIRM_PHONE_DISPLAY}</a>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-start">
          <div className="md:col-span-2 space-y-4">
            {!showForm && (
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <h2 className="text-lg font-semibold text-white">Send A Message</h2>
                <p className="mt-2 text-sm text-white/70">
                  Tell us about your situation. We’ll review and respond quickly—no obligation and confidential.
                </p>
                <button
                  onClick={() => setShowForm(true)}
                  className="mt-4 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-3 text-sm font-semibold text-[#0e0e0e]"
                >
                  Start the form
                </button>
              </div>
            )}
            {showForm && (
              <React.Suspense fallback={null}>
                <ContactFormInner />
              </React.Suspense>
            )}
          </div>

          <aside className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/80 space-y-4">
            <div>
              <h3 className="text-base font-semibold">Visit</h3>
              <address className="not-italic text-white/80">
                The Law Offices of Saggese & Associates<br />
                {FIRM_ADDRESS_LINE1}<br />
                {FIRM_ADDRESS_LINE2}
              </address>
            </div>
            <div>
              <h3 className="text-base font-semibold">Call</h3>
              <a href={`tel:${FIRM_PHONE_E164}`} className="mt-2 inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-3 text-xl font-bold leading-tight text-[#0e0e0e] no-underline shadow-[0_10px_30px_rgba(212,175,55,0.2)] transition hover:scale-[1.02] hover:shadow-[0_14px_36px_rgba(212,175,55,0.28)]">{FIRM_PHONE_DISPLAY}</a>
              <p className="mt-1 text-white/70">24-hour calls available</p>
            </div>
            <div>
              <h3 className="text-base font-semibold">Hours</h3>
              <p className="text-white/70">Mon–Fri 8:00–5:00 • Sat–Sun Closed</p>
            </div>
            <div>
              <h3 className="text-base font-semibold">Directions</h3>
              <div className="mt-3 relative h-32 rounded-xl overflow-hidden border border-white/10">
                <Image
                  src="/office-building.jpg"
                  alt="The Law Offices of Saggese & Associates office building"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  priority={false}
                />
              </div>
              {!mapRevealed ? (
                <button onClick={() => setMapRevealed(true)} className="mt-2 w-full rounded-xl bg-[#d4af37] px-4 py-3 text-base font-bold text-[#0e0e0e] shadow-[0_8px_22px_rgba(212,175,55,0.2)] hover:bg-[#e6c547]">Show office map</button>
              ) : (
                <>
                  <LazyMap title="Office location map" className="mt-3" />
                  <div className="mt-2 text-[10px] tracking-wide uppercase text-white/30">Map data © {new Date().getFullYear()} Google</div>
                </>
              )}
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=732+S.+Sixth+Street,+Suite+200C,+Las+Vegas,+Nevada+89101"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2 text-xs text-white/75 hover:bg-white/10"
              >
                Open in Maps
                <span aria-hidden>↗</span>
              </a>
            </div>
            <div>
              <h3 className="text-base font-semibold">Mail</h3>
              <p className="text-white/70">{FIRM_ADDRESS_FULL}</p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
