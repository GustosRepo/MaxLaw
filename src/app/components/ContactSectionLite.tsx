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
        <div className="space-y-3 text-sm">
          <p>Phone: <a href={`tel:${FIRM_PHONE_E164}`} className="text-[#d4af37] underline">{FIRM_PHONE_DISPLAY}</a></p>
          <p>Office: {FIRM_ADDRESS_LINE1}, {FIRM_ADDRESS_LINE2}</p>
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
