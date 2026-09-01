"use client";

import React from 'react';
import {
  FIRM_ADDRESS_LINE1,
  FIRM_ADDRESS_LINE2,
  FIRM_PHONE_DISPLAY,
  FIRM_PHONE_E164,
} from '../../lib/constants';

export default function ContactSectionLite() {
  return (
    <section className="mx-auto w-full max-w-5xl space-y-6 px-4">
      <div className="rounded-2xl border border-white/15 bg-black/45 p-6 text-white/80 space-y-4">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-semibold text-white">Speak With an Experienced Lawyer Today</h2>
          <p className="text-sm text-white/70">
            Call or send a brief note and our team will respond promptly.
          </p>
        </div>
        <div className="space-y-3 text-base">
          <a href={`tel:${FIRM_PHONE_E164}`} className="inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-3 text-xl font-bold text-[#0e0e0e] no-underline shadow-[0_10px_30px_rgba(212,175,55,0.2)]">Call {FIRM_PHONE_DISPLAY}</a>
          <p className="text-white/70">24-hour calls available</p>
          <p>Office: {FIRM_ADDRESS_LINE1}, {FIRM_ADDRESS_LINE2}</p>
          <p>Fax: 702-778-8884</p>
          <p>Office hours: Mon-Fri 8:00-5:00, Sat-Sun Closed</p>
          <p className="text-xs text-white/50">Submitting a message does not create an attorney-client relationship.</p>
        </div>
        <a
          href="/contact"
          className="block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-3 text-sm font-semibold text-[#0e0e0e] text-center"
        >
          Request a Consultation
        </a>
      </div>
    </section>
  );
}
