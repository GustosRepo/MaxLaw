"use client";

import React from "react";
import Image from "next/image";

export default function MarcSaggesePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#181c23] to-[#23272e] text-white font-sans pb-16">
      <section className="mx-auto w-full max-w-3xl px-4 md:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          <Image src="/marcpage.jpg" alt="Marc A. Saggese, Esq." width={160} height={280} className="rounded-2xl shadow-xl border border-[#bfa76a]/40 bg-[#181c23] object-contain" />
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#bfa76a] mb-1">Marc A. Saggese, Esq.</h1>
            <p className="text-base text-white/80 mb-2">Founder & Lead Attorney<br />The Law Offices of Saggese & Associates</p>
            <div className="text-sm text-white/70 mb-2">
              <span className="block">Las Vegas, Nevada</span>
              <span className="block">Phone: <a href="tel:17027788883" className="underline">702-778-8883</a></span>
              <span className="block">Email: <a href="mailto:marc@maxlawnv.com" className="underline text-[#bfa76a]">marc@maxlawnv.com</a></span>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="bg-[#bfa76a]/20 text-[#bfa76a] px-2 py-1 rounded text-xs font-semibold">Personal Injury</span>
              <span className="bg-[#bfa76a]/20 text-[#bfa76a] px-2 py-1 rounded text-xs font-semibold">Criminal Defense</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <h2 className="text-lg font-bold mb-1">Bar Admissions</h2>
            <ul className="text-sm text-white/90 list-disc list-inside mb-2">
              <li>NV (1999)</li>
              <li>US Court of Military Appeals (2000)</li>
              <li>US Court of Appeals 5th (2001)</li>
              <li>GA (2003)</li>
              <li>US Court of Appeals 3rd (2006)</li>
              <li>US Court of Appeals 9th (2010)</li>
              <li>TX (2015)</li>
              <li>US Supreme Court (2019)</li>
            </ul>
            <h2 className="text-lg font-bold mb-1 mt-4">Education</h2>
            <ul className="text-sm text-white/90 list-disc list-inside">
              <li>J.D., Catholic Univ. of America, 1999</li>
              <li>B.A., SUNY Cortland, cum laude, 1995</li>
              <li>British Politics, Univ. of North London, 1993</li>
              <li>JAG Cert., US Army, 2000</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-1">Associations & Memberships</h2>
            <ul className="text-sm text-white/90 list-disc list-inside mb-2">
              <li>Texas State Bar</li>
              <li>National Association of Distinguished Counsel</li>
              <li>Rue Ratings' Best Attorneys of America</li>
              <li>Multi-Million Dollar Advocates Forum</li>
              <li>Million Dollar Advocates Forum</li>
              <li>National Academy Of Personal Injury Attorneys</li>
              <li>Clark County Bar Association</li>
              <li>Association of Trial Lawyers of America</li>
              <li>Phi Delta Phi, Kappa Delta Pi, Pi Sigma Alpha</li>
            </ul>
            <h2 className="text-lg font-bold mb-1 mt-4">Awards</h2>
            <ul className="text-sm text-white/90 list-disc list-inside">
              <li>Martindale Hubbell | Client Champion | Silver 2019</li>
              <li>"10 Best Attorneys" – AIPIA</li>
              <li>Desert Companion "Top Lawyers"</li>
              <li>Best of Las Vegas – Silver & Bronze</li>
            </ul>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-1">Professional Highlights</h2>
          <ul className="text-sm text-white/90 list-disc list-inside">
            <li>Practicing law since 1999</li>
            <li>Represented 2,500+ clients</li>
            <li>Pro tempore judge, Las Vegas Municipal Court</li>
            <li>Traffic Court magistrate</li>
            <li>Captain, JAG Corps, U.S. Army</li>
            <li>Litigation for U.S. DOJ</li>
            <li>Inspiration for CBS’s “The Defenders”</li>
            <li>Featured on Fox, Court TV, CBS, and more</li>
            <li>Weekly writer for Las Vegas Review‑Journal</li>
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-1">Contact & Office</h2>
          <address className="not-italic text-sm text-white/80">
            <div>The Law Offices of Saggese & Associates</div>
            <div>732 S. 6th Street Suite 201, Las Vegas, NV 89101</div>
            <div>Phone: <a href="tel:17027788883" className="underline">702-778-8883</a></div>
            <div>Fax: 702-778-8884</div>
            <div><a href="#" className="underline text-[#bfa76a]">Map & Directions</a></div>
          </address>
        </div>
        <footer className="text-xs text-white/60 flex flex-col md:flex-row md:justify-between gap-2 border-t border-[#bfa76a]/20 pt-4">
          <span>© 2019 by The Law Offices of Saggese and Associates. All rights reserved.</span>
          <span>
            <a href="#" className="underline">Disclaimer</a> | <a href="#" className="underline">Site Map</a>
          </span>
        </footer>
      </section>
    </main>
  );
}
