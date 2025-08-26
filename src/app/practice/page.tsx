"use client"

import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function PracticePage() {
  return (
    <>
      <Head>
        <title>Practice Areas — Saggese & Associates</title>
        <meta name="description" content="Practice areas: Personal Injury, Criminal Defense, DUI, and more — Saggese & Associates." />
        <style>{`
          @keyframes underlineIn { from { transform: scaleX(0); } to { transform: scaleX(1); } }
          .accent-underline { display:block; height:6px; background:linear-gradient(90deg,#d4af37,#c5a467); transform-origin:left; animation:underlineIn .6s ease forwards; border-radius:4px }
          .card-hover { transition:transform .32s cubic-bezier(.2,.9,.3,1), box-shadow .28s ease, border-color .22s ease; will-change:transform }
          .card-hover:hover { transform:translateY(-8px) scale(1.01); box-shadow:0 34px 90px rgba(0,0,0,0.65); border-color:rgba(212,175,55,0.12) }
          .watermark { font-weight:900; color:rgba(255,255,255,0.04); letter-spacing:-2px; pointer-events:none }
          .custom-bg { background-image: radial-gradient(circle at 8% 12%, rgba(191,167,106,0.03), transparent 6%), radial-gradient(circle at 90% 80%, rgba(255,255,255,0.02), transparent 22%), linear-gradient(180deg,#0e0e0e,#0f0f0f); }
        `}</style>
      </Head>

      <main className="min-h-screen custom-bg bg-gradient-to-br from-[#0e0e0e] to-[#0f0f0f] text-white font-['Inter'] py-12">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <section className="mb-8">
            <div className="relative rounded-3xl p-6 md:p-8 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg overflow-hidden">
              <div className="absolute -right-12 -top-6 text-[6rem] md:text-[9rem] font-black text-white/6 select-none pointer-events-none hidden md:block">Practice</div>
              <div className="relative z-10">
                <h1 className="text-2xl md:text-3xl font-['Playfair_Display'] font-bold text-[#bfa76a]">Practice Areas</h1>
                <div className="mt-3 w-36"><span className="accent-underline" /></div>
                <p className="mt-3 text-sm text-white/80 max-w-3xl">We represent clients in personal injury and criminal defense matters with trial-ready representation and focused client service. Below are some of our core practice areas.</p>

                <div className="mt-4 flex items-center gap-3">
                  <a href="tel:17027788883" className="inline-block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-4 py-2 text-sm font-semibold text-[#0e0e0e] shadow-[0_10px_30px_rgba(212,175,55,0.18)]">Call (702) 778‑8883</a>
                  <Link href="/contact" className="inline-block rounded-2xl border border-white/10 px-4 py-2 text-sm text-white/90">Request Consultation</Link>
                </div>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <main className="md:col-span-2 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'Personal Injury', href: '/practice/personal-injury', desc: 'Car accidents, premises liability, and catastrophic injury representation.' },
                  { title: 'Criminal Defense', href: '/criminal-defense', desc: 'DUI, assault, theft, drug offenses, and serious felony defense.' },
                  { title: 'DUI Defense', href: '/criminal-defense/dui', desc: 'Field sobriety, breath tests, and DMV hearings.' },
                  { title: 'Drug Crimes', href: '/criminal-defense/drugs', desc: 'Possession, distribution, and trafficking defense.' },
                ].map((p) => (
                  <Link key={p.title} href={p.href} className="block rounded-2xl p-5 bg-gradient-to-br from-white/3 to-transparent border border-white/8 card-hover">
                    <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                    <p className="text-sm text-white/80 mt-2">{p.desc}</p>
                    <div className="mt-4 text-xs text-white/70">Learn more →</div>
                  </Link>
                ))}
              </div>

              <div className="rounded-2xl p-6 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg">
                <h2 className="text-2xl font-['Playfair_Display'] font-bold mb-3">Why choose us?</h2>
                <ul className="text-sm text-white/90 list-disc list-inside">
                  <li>Combat-proven trial attorneys</li>
                  <li>Individualized case strategies</li>
                  <li>Transparent fee discussions</li>
                </ul>
              </div>
            </main>

            <aside className="space-y-6">
              <div className="rounded-2xl p-6 bg-gradient-to-br from-white/4 to-transparent border border-white/8 shadow-lg text-center">
                <div className="text-sm font-semibold text-white mb-2">Contact</div>
                <div className="text-white/80 mb-4">Free consultation • Same‑day appointments</div>
                <a href="tel:17027788883" className="block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-4 py-3 text-sm font-semibold text-[#0e0e0e] mb-3">Call (702) 778‑8883</a>
                <Link href="/contact" className="block rounded-2xl border border-white/10 px-4 py-3 text-sm text-white/90">Request a consultation</Link>
              </div>

              <div className="rounded-2xl p-4 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg text-sm text-white/80">
                <div className="font-semibold text-white mb-2">Quick Help</div>
                <div>Need immediate assistance? Call our office for same-day intake.</div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  )
}
