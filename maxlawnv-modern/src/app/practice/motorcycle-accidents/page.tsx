import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Motorcycle Accidents | Saggese & Associates',
  description: 'Motorcycle accident representation — helmet law, lane-splitting, and complex injury claims. We fight for motorcyclists.'
}

export default function MotorcycleAccidentsPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <style>{`
          /* standardized practice page styles */
          @keyframes underlineIn { from { transform: scaleX(0); } to { transform: scaleX(1); } }
          .accent-underline { display:block; height:6px; background:linear-gradient(90deg,#d4af37,#c5a467); transform-origin:left; animation:underlineIn .6s ease forwards; }
          .stat-number { color:#d4af37; font-weight:700; font-size:1.25rem; }
          .card-hover { transition:transform .26s ease, box-shadow .26s ease; }
          .card-hover:hover { transform:translateY(-6px); box-shadow:0 22px 60px rgba(0,0,0,0.6); }
          .cta-glow { transition:box-shadow .28s, transform .22s; }
          .cta-glow:hover { box-shadow: 0 18px 48px rgba(212,175,55,0.18); transform: translateY(-3px) scale(1.02); }
        `}</style>
      </Head>

      {/* Content only — provided by PracticeLayout */}
      <header className="mb-6">
        <div className="relative inline-block">
          <h1 className="text-4xl font-['Playfair_Display'] font-bold text-[#d4af37] mb-2">Motorcycle Accidents</h1>
          <span className="accent-underline w-full rounded-full" aria-hidden />
        </div>
        <p className="text-white/75 mt-3">Motorcyclists face unique risks and bias after crashes. We aggressively protect riders' rights and pursue full compensation.</p>
      </header>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-8">
        <article className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg card-hover">
          <p className="mb-4 text-white/90 leading-relaxed">
            From catastrophic injuries to property loss, motorcycle crashes often create complex claims. We investigate helmet use, visibility, road conditions, and driver negligence to build thorough cases for riders.
          </p>

          <p className="mb-4 text-white/90 leading-relaxed">
            Motorcyclists face unique risks and bias after crashes. We aggressively protect riders' rights and pursue full compensation with specialized advocacy that understands motorcycle dynamics.
          </p>

          <h3 className="mt-4 text-lg font-semibold text-white">Facts about motorcycle accidents</h3>
          <ul className="mt-3 space-y-3 text-white/80">
            <li><span className="stat-number">•</span> Motorcyclists are <strong className="text-[#d4af37]">29 times</strong> more likely to die in a crash than car occupants.</li>
            <li><span className="stat-number">•</span> Over <strong className="text-[#d4af37]">80%</strong> of motorcycle crashes result in injury or death.</li>
            <li><span className="stat-number">•</span> Head injuries account for <strong className="text-[#d4af37]">56%</strong> of motorcycle fatalities.</li>
            <li><span className="stat-number">•</span> Left-turn accidents are the most common cause of motorcycle collisions.</li>
            <li><span className="stat-number">•</span> Lane-splitting and visibility issues contribute to many crashes.</li>
          </ul>

          <p className="mt-4 text-white/80 leading-relaxed">Our team has experience with motorcycle dynamics, expert reconstruction, and presenting evidence to overcome bias against riders.</p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="tel:17027788883" className="inline-block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-3 text-sm font-semibold text-[#0e0e0e] shadow-md">Call (702) 778‑8883</a>
            <Link href="/contact" className="inline-block rounded-2xl border border-white/10 px-5 py-3 text-sm text-white/90 text-center">Request a free consultation</Link>
          </div>

        </article>

        <aside className="rounded-2xl border border-white/10 bg-white/4 p-4 shadow-lg">
          <div className="mb-3 text-sm font-semibold text-white">Motorcycle safety matters</div>
          <p className="text-sm text-white/80">Riders face unique challenges on the road. Understanding the risks and having proper legal representation is crucial for fair compensation.</p>

          <div className="mt-4 grid gap-3">
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Fatality risk</div>
              <div className="text-lg font-semibold text-[#d4af37]">29x higher</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Injury rate</div>
              <div className="text-lg font-semibold text-[#d4af37]">80%+</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Head injuries</div>
              <div className="text-lg font-semibold text-[#d4af37]">56%</div>
            </div>
          </div>
        </aside>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg mb-8">
        <h3 className="text-lg font-semibold text-white mb-3">How we help</h3>
        <p className="text-white/80 leading-relaxed mb-3">We preserve evidence, retain reconstruction experts, and consult medical specialists to prove cause and quantify damages for injured riders.</p>
        <p className="text-white/80 leading-relaxed">Call <a href="tel:17027788883" className="underline" style={{ textDecorationColor: '#d4af37' }}>702-778-8883</a> or use our contact form.</p>
      </section>

      <footer className="text-sm text-white/60">© {new Date().getFullYear()} The Law Offices of Saggese & Associates. All rights reserved.</footer>
    </>
  )
}
