"use client"

import React from 'react'
import Head from 'next/head'

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact — Saggese & Associates</title>
        <meta name="description" content="Contact The Law Offices of Saggese & Associates — free consultation, phone, fax, and office address." />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-[#0e0e0e] to-[#0f0f0f] text-white font-['Inter'] py-12">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <section className="mb-6">
            <div className="rounded-3xl p-6 md:p-8 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg">
              <h1 className="text-2xl md:text-3xl font-['Playfair_Display'] font-bold text-[#bfa76a]">Contact</h1>
              <p className="mt-2 text-white/80">Schedule a free consultation or call <a href="tel:17027788883" className="underline">(702) 778‑8883</a>.</p>
            </div>
          </section>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <form onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll reach out shortly."); }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <label className="text-sm font-semibold">First name <span className="text-[#d4af37]">*</span>
                    <input required className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm outline-none placeholder:text-white/40 focus:ring" placeholder="Jane" />
                  </label>

                  <label className="text-sm font-semibold">Last name <span className="text-[#d4af37]">*</span>
                    <input required className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm outline-none placeholder:text-white/40 focus:ring" placeholder="Doe" />
                  </label>

                  <label className="text-sm font-semibold md:col-span-2">Email <span className="text-[#d4af37]">*</span>
                    <input type="email" required className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm outline-none placeholder:text-white/40 focus:ring" placeholder="you@example.com" />
                  </label>

                  <label className="text-sm font-semibold">Phone
                    <input className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm outline-none placeholder:text-white/40 focus:ring" placeholder="(702) 555‑0123" />
                  </label>

                  <label className="text-sm font-semibold md:col-span-2">Brief description of your legal issue <span className="text-[#d4af37]">*</span>
                    <textarea required rows={5} className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm outline-none placeholder:text-white/40 focus:ring" placeholder="Briefly describe your matter" />
                  </label>

                  <div className="flex items-start gap-2 md:col-span-2">
                    <input id="consent" type="checkbox" className="mt-1" required />
                    <label htmlFor="consent" className="text-sm font-semibold">I have read the disclaimer. <span className="text-white/60">(Submitting does not create an attorney‑client relationship)</span></label>
                  </div>

                  <button type="submit" className="mt-2 w-full rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-3 text-sm font-semibold text-[#0e0e0e] hover:scale-[1.01]">Request a free consultation</button>
                </div>
              </form>
            </div>

            <div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/80 flex flex-col gap-4">
                <h3 className="text-base font-semibold">Contact Information</h3>
                <p className="text-white/80">The Law Offices of Saggese & Associates</p>
                <p className="text-white/80">732 S. 6th Street Suite 201<br/>Las Vegas, NV 89101</p>
                <p className="text-white/80">Phone: <a href="tel:17027788883" className="underline">(702) 778‑8883</a></p>
                <p className="text-white/80">Fax: 702-778-8884</p>

                <div className="mt-2">
                  <h4 className="text-sm font-semibold text-white/75">Need instant help?</h4>
                  <ul className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-3" aria-label="Social links">
                    {[
                      { label: 'facebook', href: '#' },
                      { label: 'twitter', href: '#' },
                      { label: 'linkedin', href: '#' },
                      { label: 'avvo', href: '#' },
                      { label: 'email', href: 'mailto:marc@maxlawnv.com' },
                    ].map(item => (
                      <li key={item.label} className="list-none">
                        <a
                          href={item.href}
                          aria-label={`Visit our ${item.label} page`}
                          className="rounded-full bg-white/6 px-3 py-1.5 text-xs font-medium tracking-wide capitalize hover:bg-white/10 transition min-w-[70px] text-center"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 text-sm text-white/60">Office hours: Mon–Fri 8:00–5:00 • Sat–Sun Closed</div>

                <div className="mt-4">
                  <div className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-neutral-900/60">
                    {/* Skeleton while map loads */}
                    <div className="absolute inset-0 animate-pulse bg-[linear-gradient(110deg,#1e1e1e,25%,#262626,45%,#1e1e1e)] bg-[length:200%_100%]" aria-hidden />
                    <iframe
                      title="Map showing The Law Offices of Saggese & Associates location"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="relative z-10 h-64 w-full"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.098518839497!2d-115.1401!3d36.1619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c37f8e0b9c01%3A0x0000000000000000!2s732%20S%206th%20St%20Suite%20201%2C%20Las%20Vegas%2C%20NV%2089101!5e0!3m2!1sen!2sus!4v0000000000000"
                      allowFullScreen
                    />
                    <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl" aria-hidden />
                  </div>
                  <p className="mt-2 text-[11px] text-white/40">Map data © Google. <a href="https://maps.google.com/?q=732+S+6th+Street+Suite+201+Las+Vegas+NV+89101" className="underline" target="_blank" rel="noopener noreferrer">Open in Google Maps</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
