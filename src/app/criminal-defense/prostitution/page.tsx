import React from 'react'
import Link from 'next/link'
import { SITE_URL } from '@/lib/constants'
import PracticeStructuredData from '../../practice/PracticeStructuredData'

export const metadata = {
  title: 'Las Vegas Prostitution Defense Lawyer | Saggese & Associates',
  description: 'Discreet prostitution defense—challenge entrapment, intent & evidence. Free consultation (702) 778-8883.',
  keywords: [
    'las vegas prostitution defense lawyer',
    'solicitation defense attorney nevada',
    'entrapment defense las vegas'
  ],
  alternates: { canonical: `${SITE_URL}/criminal-defense/prostitution` },
  openGraph: { title: 'Las Vegas Prostitution Defense Lawyer', description: 'Discreet defense—entrapment & intent challenges.', url: `${SITE_URL}/criminal-defense/prostitution`, type: 'article' },
  twitter: { card: 'summary', title: 'Prostitution Defense Lawyer', description: 'Confidential strategy & defense—free consult.' }
}

export default function ProstitutionPage() {
  return (
  <>
      {/* Content only — PracticeLayout provides the outer wrapper and sidebar */}

      <header className="mb-6">
        <div className="relative inline-block">
          <h1 className="text-3xl sm:text-4xl font-['Playfair_Display'] font-bold text-[#d4af37] mb-2">Prostitution & Solicitation Defense</h1>
          <span className="accent-underline w-full rounded-full" aria-hidden />
        </div>
        <p className="text-white/75 mt-3">Discreet representation in prostitution, solicitation and related vice enforcement matters across Clark County.</p>
      </header>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-8">
        <article className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg card-hover">
          <p className="mb-4 text-white/90 leading-relaxed">
            Allegations of prostitution or solicitation can impact employment, licensing, immigration status and personal reputation. We focus on early evidence review, constitutional defenses, and strategic negotiation to mitigate exposure and collateral consequences.
          </p>

          <h3 className="mt-4 text-lg font-semibold text-white">Defense approaches</h3>
          <ul className="mt-3 space-y-3 text-white/80">
            <li><span className="stat-number">•</span> Evaluating potential entrapment or inducement tactics</li>
            <li><span className="stat-number">•</span> Challenging credibility, intent and surveillance interpretations</li>
            <li><span className="stat-number">•</span> Seeking reduction, diversion or dismissal where eligible</li>
          </ul>

          <h3 className="mt-6 text-lg font-semibold text-white">Confidential strategy</h3>
          <p className="text-white/80 leading-relaxed mb-4">Many cases resolve favorably by focusing on lack of intent, procedural defects, privacy issues, or evidentiary weaknesses. We prioritize outcomes that minimize long‑term record and reputational impact.</p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="tel:17027788883" className="inline-block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-3 text-sm font-semibold text-[#0e0e0e] shadow-md cta-glow">Call (702) 778‑8883</a>
            <Link href="/contact" className="inline-block rounded-2xl border border-white/10 px-5 py-3 text-sm text-white/90 text-center cta-glow">Request a free consultation</Link>
          </div>
        </article>

        <aside className="rounded-2xl border border-white/10 bg-white/4 p-4 shadow-lg">
          <div className="mb-3 text-sm font-semibold text-white">Quick facts</div>
          <p className="text-sm text-white/80">Vice enforcement operations are often recorded; early review can surface entrapment issues or gaps in proof of intent.</p>

          <div className="mt-4 grid gap-3">
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Typical resolutions</div>
              <div className="text-lg font-semibold text-[#d4af37]">Reduction / diversion</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Primary focus</div>
              <div className="text-lg font-semibold text-[#d4af37]">Entrapment / intent</div>
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
        <p className="text-white/80 leading-relaxed mb-3">Avoid discussing the matter with investigators beyond providing identification; do not consent to searches without counsel. Preserve any communications or digital evidence.</p>
        <p className="text-white/80 leading-relaxed">Call our office at <a href="tel:17027788883" className="underline" style={{ textDecorationColor: '#d4af37' }}>702-778-8883</a> or submit the contact form to request a confidential consultation.</p>
      </section>

      <PracticeStructuredData
        slug="/criminal-defense/prostitution"
        serviceType="Las Vegas Prostitution Defense Lawyer"
        description="Discreet prostitution defense—challenge entrapment, intent & evidence. Free consultation."
        keywords={['las vegas prostitution defense lawyer','solicitation defense attorney nevada']}
        faqs={[
          { question: 'Is entrapment a defense?', answer: 'If law enforcement induced conduct you were not otherwise predisposed to commit, entrapment may apply.' },
          { question: 'Will this charge appear on background checks?', answer: 'Pending charges can appear; successful defense or negotiation can reduce long-term impact.' }
        ]}
      />
    </>
  )
}
