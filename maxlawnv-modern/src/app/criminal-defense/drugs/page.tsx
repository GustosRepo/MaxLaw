import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export const metadata = {
  title: 'Drug Crimes Defense | Saggese & Associates',
  description: 'Defense for possession, distribution, and trafficking charges. Protect your rights with experienced counsel.'
}

export default function DrugsPage() {
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
        `}</style>
      </Head>

      {/* Content only — PracticeLayout provides the outer wrapper and sidebar */}

      <header className="mb-6">
        <div className="relative inline-block">
          <h1 className="text-4xl font-['Playfair_Display'] font-bold text-[#d4af37] mb-2">Drug Crimes Defense</h1>
          <span className="accent-underline w-full rounded-full" aria-hidden />
        </div>
        <p className="text-white/75 mt-3">We defend clients against possession, distribution, and trafficking charges with tailored strategies and aggressive representation.</p>
      </header>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-8">
        <article className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg card-hover">
          <p className="mb-4 text-white/90 leading-relaxed">
            Drug charges span from simple possession to distribution and trafficking. Each charge demands a careful review of the facts, including how evidence was obtained, lab testing procedures, and whether proper protocols were followed.
          </p>

          <p className="mb-4 text-white/90 leading-relaxed">
            Our practice includes challenging unlawful searches, testing reliability, and negotiating treatment-based alternatives when appropriate. For serious allegations, we coordinate with experts and prepare a trial-ready defense.
          </p>

          <h3 className="mt-4 text-lg font-semibold text-white">Common defenses</h3>
          <ul className="mt-3 space-y-3 text-white/80">
            <li><span className="stat-number">•</span> Challenging the legality of searches and seizures</li>
            <li><span className="stat-number">•</span> Attacking chain of custody or lab testing procedures</li>
            <li><span className="stat-number">•</span> Negotiating diversion or treatment in lieu of incarceration</li>
          </ul>

          <h3 className="mt-4 text-lg font-semibold text-white">What to do if you're contacted or arrested</h3>
          <p className="text-white/80 leading-relaxed mb-3">Do not consent to searches without counsel, preserve communications and notes, and contact an attorney immediately to preserve suppression issues and other defenses.</p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="tel:17027788883" className="inline-block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-3 text-sm font-semibold text-[#0e0e0e] shadow-md">Call (702) 778‑8883</a>
            <Link href="/contact" className="inline-block rounded-2xl border border-white/10 px-5 py-3 text-sm text-white/90 text-center">Request a free consultation</Link>
          </div>
        </article>

        <aside className="rounded-2xl border border-white/10 bg-white/4 p-4 shadow-lg">
          <div className="mb-3 text-sm font-semibold text-white">Quick facts</div>
          <p className="text-sm text-white/80">Drug cases often turn on search legality and laboratory evidence; early counsel helps preserve challenges and alternatives.</p>

          <div className="mt-4 grid gap-3">
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Common resolution</div>
              <div className="text-lg font-semibold text-[#d4af37]">Diversion / plea</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Evidence focus</div>
              <div className="text-lg font-semibold text-[#d4af37]">Search & lab testing</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Consultation</div>
              <div className="text-lg font-semibold text-[#d4af37]">Free</div>
            </div>
          </div>
        </aside>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg mb-8">
        <h3 className="text-lg font-semibold text-white mb-3">Next steps</h3>
        <p className="text-white/80 leading-relaxed mb-3">Preserve evidence, do not consent to searches without counsel, and call an attorney immediately. We will review options and act quickly to protect your rights.</p>
        <p className="text-white/80 leading-relaxed">Call our office at <a href="tel:17027788883" className="underline" style={{ textDecorationColor: '#d4af37' }}>702-778-8883</a> or submit the contact form to request a consultation.</p>
      </section>

      <footer className="text-sm text-white/60">© {new Date().getFullYear()} The Law Offices of Saggese & Associates. All rights reserved.</footer>
    </>
  )
}
