import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export const metadata = {
  title: 'Underinsured & Uninsured Accidents | Saggese & Associates',
  description: 'When the at-fault driver lacks adequate insurance, we help you pursue available sources of recovery including UM/UIM and other parties.'
}

export default function UnderinsuredAccidentsPage() {
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
          <h1 className="text-4xl font-['Playfair_Display'] font-bold text-[#d4af37] mb-2">Underinsured & Uninsured Accidents</h1>
          <span className="accent-underline w-full rounded-full" aria-hidden />
        </div>
        <p className="text-white/75 mt-3">We represent clients when the responsible party has insufficient insurance or no insurance at all. Explore your recovery options, including uninsured/underinsured motorist coverage.</p>
      </header>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-8">
        <article className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg card-hover">
          <p className="mb-4 text-white/90 leading-relaxed">
            Insurance limits do not always match the severity of injuries. We evaluate your policies and pursue UM/UIM claims, third-party liability, and alternative sources of compensation to make you whole.
          </p>

          <p className="mb-4 text-white/90 leading-relaxed">
            When the at-fault driver lacks adequate insurance, we help you pursue available sources of recovery including UM/UIM and other parties with policy evaluation and strategy.
          </p>

          <h3 className="mt-4 text-lg font-semibold text-white">Facts about uninsured/underinsured drivers</h3>
          <ul className="mt-3 space-y-3 text-white/80">
            <li><span className="stat-number">•</span> <strong className="text-[#d4af37]">1 in 8</strong> drivers on the road are uninsured.</li>
            <li><span className="stat-number">•</span> In Nevada, <strong className="text-[#d4af37]">17.4%</strong> of drivers are uninsured.</li>
            <li><span className="stat-number">•</span> Many drivers carry only minimum liability coverage.</li>
            <li><span className="stat-number">•</span> UM/UIM coverage protects you from uninsured drivers.</li>
            <li><span className="stat-number">•</span> Your own insurance may provide additional coverage sources.</li>
          </ul>

          <p className="mt-4 text-white/80 leading-relaxed">Our attorneys review policy language, coordinate with coverage counsel, and negotiate or litigate aggressively to secure fair compensation.</p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="tel:17027788883" className="inline-block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-3 text-sm font-semibold text-[#0e0e0e] shadow-md">Call (702) 778‑8883</a>
            <Link href="/contact" className="inline-block rounded-2xl border border-white/10 px-5 py-3 text-sm text-white/90 text-center">Request a free consultation</Link>
          </div>

        </article>

        <aside className="rounded-2xl border border-white/10 bg-white/4 p-4 shadow-lg">
          <div className="mb-3 text-sm font-semibold text-white">Insurance coverage gaps</div>
          <p className="text-sm text-white/80">Many drivers lack adequate coverage. Understanding your own policy protections is crucial for full recovery.</p>

          <div className="mt-4 grid gap-3">
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Uninsured drivers</div>
              <div className="text-lg font-semibold text-[#d4af37]">1 in 8</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Nevada rate</div>
              <div className="text-lg font-semibold text-[#d4af37]">17.4%</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">UM/UIM claims</div>
              <div className="text-lg font-semibold text-[#d4af37]">Available</div>
            </div>
          </div>
        </aside>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg mb-8">
        <h3 className="text-lg font-semibold text-white mb-3">How we help</h3>
        <p className="text-white/80 leading-relaxed mb-3">We guide clients through UM/UIM claims, demand packages, and coordinating coverage disputes so you can maximize recovery despite low limits from an at-fault party.</p>
        <p className="text-white/80 leading-relaxed">Call <a href="tel:17027788883" className="underline" style={{ textDecorationColor: '#d4af37' }}>702-778-8883</a> or use our contact form.</p>
      </section>

      <footer className="text-sm text-white/60">© {new Date().getFullYear()} The Law Offices of Saggese & Associates. All rights reserved.</footer>
    </>
  )
}
