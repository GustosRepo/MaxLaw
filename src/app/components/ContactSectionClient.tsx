"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import LazyMap from './LazyMap';
import {
  FIRM_ADDRESS_LINE1,
  FIRM_ADDRESS_LINE2,
  FIRM_PHONE_DISPLAY,
  FIRM_PHONE_E164,
} from '../../lib/constants';

const ContactFormInner = dynamic(() => import('./ContactFormInner'), {
  ssr: false,
  loading: () => (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center text-sm text-white/65">
      Loading secure form…
    </div>
  ),
});

export default function ContactSectionClient() {
  const [showForm, setShowForm] = React.useState(false);
  const [mapRevealed, setMapRevealed] = React.useState(false);

  React.useEffect(() => {
    try {
      if (window.matchMedia('(min-width: 768px)').matches) {
        setShowForm(true);
      }
    } catch {
      /* ignore matchMedia failures */
    }
  }, []);

  return (
    <div className="mt-0 grid grid-cols-1 gap-8 md:grid-cols-3">
      <div className="md:col-span-2 space-y-4">
        {!showForm && (
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <h3 className="text-lg font-semibold text-white">Quick Consultation Intake</h3>
            <p className="mt-2 text-sm text-white/70">
              Share a few details about your matter. It takes about two minutes and stays confidential.
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
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/80 flex flex-col gap-4">
        <h3 className="text-base font-semibold">Contact Information</h3>
        <address className="not-italic text-white/80">
          The Law Offices of Saggese & Associates<br />{FIRM_ADDRESS_LINE1}<br />{FIRM_ADDRESS_LINE2}
        </address>
        <a href={`tel:${FIRM_PHONE_E164}`} className="inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-3 text-xl font-bold leading-tight text-[#0e0e0e] no-underline shadow-[0_10px_30px_rgba(212,175,55,0.2)] transition hover:scale-[1.02] hover:shadow-[0_14px_36px_rgba(212,175,55,0.28)]">{FIRM_PHONE_DISPLAY}</a>
        <p className="text-white/70">24-hour calls available</p>
        <p className="text-white/80">Fax: 702-778-8884</p>
        <div className="mt-2">
          <h4 className="text-sm font-semibold text-white/75">Connect</h4>
          <ul className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-3" aria-label="Social links">
            {[
              { name: 'LinkedIn', href: 'https://www.linkedin.com/in/marc-saggese-4a84a34b/?original_referer=https%3A%2F%2Fwww.maxlawnv.com%2F' },
              { name: 'Avvo', href: 'https://www.avvo.com/attorneys/89101-nv-marc-saggese-563159.html' },
            ].map(s => (
              <li key={s.name} className="list-none">
                <a href={s.href} target="_blank" rel="noopener noreferrer nofollow" aria-label={`Visit our ${s.name} profile (opens in new tab)`} className="rounded-full bg-white/6 px-4 py-1.5 text-xs font-medium tracking-wide hover:bg-white/10 transition text-center inline-flex items-center gap-1">
                  {s.name}
                  <span aria-hidden className="text-[10px] opacity-60">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4 text-sm text-white/60">Office hours: Mon–Fri 8:00–5:00 • Sat–Sun Closed</div>
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
          <button onClick={() => setMapRevealed(true)} className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70 hover:bg-white/10">Load map</button>
        ) : (
          <>
            <LazyMap />
            <div className="mt-2 text-[10px] tracking-wide uppercase text-white/30">Map data © {new Date().getFullYear()} Google</div>
          </>
        )}
      </div>
    </div>
  );
}
