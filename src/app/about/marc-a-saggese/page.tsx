"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function MarcSaggesePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0e0e0e] to-[#111215] text-white font-sans pb-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <section className="rounded-3xl bg-gradient-to-br from-white/3 to-transparent border border-white/8 p-6 md:p-10 shadow-lg mt-8">
          <style>{`
            .accent-underline { display:block; height:6px; width:120px; background:linear-gradient(90deg,#bfa76a,#d4af37); transform-origin:left; }
            .card-hover { transition:transform .26s ease, box-shadow .26s ease; }
            .card-hover:hover { transform:translateY(-6px); box-shadow:0 22px 60px rgba(0,0,0,0.6); }
          `}</style>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="flex items-start justify-center md:justify-start">
              <div className="relative rounded-2xl overflow-hidden w-40 md:w-48">
                <div className="absolute inset-0 rounded-2xl blur-2xl" style={{ background: 'radial-gradient(ellipse at center, rgba(191,167,106,0.12), transparent 30%)' }} />
                <Image src="/marcpage.jpg" alt="Marc A. Saggese, Esq." width={320} height={520} className="relative rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.6)] border border-[#bfa76a]/20 object-cover bg-[#0f1011]" />
              </div>
            </div>

            <div className="md:col-span-2">
              <h1 className="text-2xl md:text-3xl font-serif font-bold text-[#bfa76a]">Marc A. Saggese, Esq.</h1>
              <div className="mt-2 mb-4">
                <span className="inline-block w-full md:w-auto"><span className="accent-underline" /></span>
              </div>

              <p className="text-sm text-white/80 mb-4">Founder & Lead Attorney — The Law Offices of Saggese & Associates. Trial-ready representation in personal injury and criminal defense; individualized attention and seasoned courtroom experience.</p>

              <div className="flex flex-wrap items-center gap-3 mb-4">
                <a href="tel:17027788883" className="inline-block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-4 py-2 text-sm font-semibold text-[#0e0e0e] shadow-[0_10px_30px_rgba(212,175,55,0.2)]">Call (702) 778‑8883</a>
                <Link href="/contact" className="inline-block rounded-2xl border border-white/10 px-4 py-2 text-sm text-white/90">Request Consultation</Link>
                <span className="ml-3 text-xs text-white/70">Free consultation • 1:1 attorney attention</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-2xl p-4 bg-gradient-to-br from-white/3 to-transparent border border-white/6 card-hover">
                  <h3 className="text-lg font-semibold text-white">Bar Admissions</h3>
                  <ul className="text-sm text-white/90 list-disc list-inside mt-2">
                    <li>NV (1999)</li>
                    <li>US Court of Military Appeals (2000)</li>
                    <li>US Court of Appeals (5th, 3rd, 9th)</li>
                    <li>TX (2015)</li>
                    <li>US Supreme Court (2019)</li>
                  </ul>
                </div>

                <div className="rounded-2xl p-4 bg-gradient-to-br from-white/3 to-transparent border border-white/6 card-hover">
                  <h3 className="text-lg font-semibold text-white">Education & Awards</h3>
                  <ul className="text-sm text-white/90 list-disc list-inside mt-2">
                    <li>J.D., Catholic Univ. of America, 1999</li>
                    <li>B.A., SUNY Cortland, cum laude, 1995</li>
                    <li>Martindale Hubbell | Client Champion | Silver 2019</li>
                    <li>"10 Best Attorneys" – AIPIA; Desert Companion Top Lawyers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="rounded-2xl p-6 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg">
              <h2 className="text-2xl font-['Playfair_Display'] font-bold mb-3">Professional Highlights</h2>
              <ul className="text-sm text-white/90 list-disc list-inside">
                <li>Practicing law since 1999; represented 2,500+ clients</li>
                <li>Pro tempore judge, Las Vegas Municipal Court; Traffic Court magistrate</li>
                <li>Captain, JAG Corps, U.S. Army; litigation for U.S. DOJ</li>
                <li>Featured on Fox, Court TV, CBS; weekly writer for Las Vegas Review‑Journal</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl p-6 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Associations & Memberships</h3>
                <ul className="text-sm text-white/90 list-disc list-inside">
                  <li>National Association of Distinguished Counsel</li>
                  <li>Multi-Million Dollar Advocates Forum</li>
                  <li>Clark County Bar Association</li>
                  <li>Association of Trial Lawyers of America</li>
                </ul>
              </div>

              <div className="rounded-2xl p-6 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Contact & Office</h3>
                <address className="not-italic text-sm text-white/80">
                  <div>The Law Offices of Saggese & Associates</div>
                  <div>732 S 6th St #200c, Las Vegas, NV 89101</div>
                  <div>Phone: <a href="tel:17027788883" className="underline">702-778-8883</a></div>
                  <div><a href="#" className="underline text-[#bfa76a]">Map & Directions</a></div>
                </address>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl p-6 bg-gradient-to-br from-white/4 to-transparent border border-white/8 shadow-lg text-center">
              <div className="text-sm font-semibold text-white mb-2">Ready to Talk?</div>
              <div className="text-white/80 mb-4">Free consultation • Same‑day appointments</div>
              <a href="tel:17027788883" className="block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#bfa76a] px-4 py-3 text-sm font-semibold text-[#0e0e0e] mb-3">Call (702) 778‑8883</a>
              <Link href="/contact" className="block rounded-2xl border border-white/10 px-4 py-3 text-sm text-white/90">Request a consultation</Link>
            </div>

            <div className="rounded-2xl p-4 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg text-sm text-white/80">
              <div className="font-semibold text-white mb-2">Quick Facts</div>
              <div>Trial-ready attorney with decades of litigation experience.</div>
            </div>
          </aside>
        </section>

        <footer className="text-xs text-white/60 flex flex-col md:flex-row md:justify-between gap-2 border-t border-[#bfa76a]/20 pt-6 mt-10">
          <span>© 2019 by The Law Offices of Saggese and Associates. All rights reserved.</span>
          <span>
            <a href="#" className="underline">Disclaimer</a> | <a href="#" className="underline">Site Map</a>
          </span>
        </footer>
      </div>
    </main>
  );
}
