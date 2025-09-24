import React from 'react'
import Link from 'next/link'
import { SITE_URL } from '@/lib/constants'
import PracticeStructuredData from '../PracticeStructuredData'

export const metadata = {
  title: 'Las Vegas Excessive Force Injury Lawyer | Saggese & Associates',
  description: 'Injured by excessive force? We investigate, preserve evidence & pursue accountability. Free consultation (702) 778-8883.',
  keywords: [
    'las vegas excessive force lawyer',
    'excessive force injury attorney',
    'civil rights injury lawyer las vegas'
  ],
  alternates: { canonical: `${SITE_URL}/practice/excessive-force` },
  openGraph: { title: 'Las Vegas Excessive Force Injury Lawyer', description: 'We pursue accountability for injuries from excessive force.', url: `${SITE_URL}/practice/excessive-force`, type: 'article' },
  twitter: { card: 'summary', title: 'Excessive Force Injury Lawyer', description: 'Free case evaluation today.' }
}

export default function ExcessiveForcePage() {
  return (
    <>

      {/* Content only — PracticeLayout provides the outer main/container */}
      <header className="mb-6">
        <div className="relative inline-block">
          <h1 className="text-3xl sm:text-4xl font-['Playfair_Display'] font-bold text-[#d4af37] mb-2">Excessive Force</h1>
          <span className="accent-underline w-full rounded-full" aria-hidden />
        </div>
        <p className="text-white/75 mt-3">When force used by officers or security exceeds legal bounds, victims deserve justice. We bring claims to hold responsible parties accountable.</p>
      </header>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-8">
        <article className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg card-hover">
          <p className="mb-4 text-white/90 leading-relaxed">
            Civil rights and state-law claims can overlap in cases of excessive force. We coordinate investigations, obtain body-cam footage, and represent clients in both administrative and civil proceedings.
          </p>

          <p className="mb-4 text-white/90 leading-relaxed">
            When force used by officers or security exceeds legal bounds, victims deserve justice. We bring claims to hold responsible parties accountable with thorough investigation and advocacy.
          </p>

          <h3 className="mt-4 text-lg font-semibold text-white">Facts about excessive force</h3>
          <ul className="mt-3 space-y-3 text-white/80">
            <li><span className="stat-number">•</span> Police use of force incidents are reported in <strong className="text-[#d4af37]">1.6%</strong> of arrests.</li>
            <li><span className="stat-number">•</span> <strong className="text-[#d4af37]">Body cameras</strong> provide crucial evidence in excessive force cases.</li>
            <li><span className="stat-number">•</span> Civil rights violations can result in <strong className="text-[#d4af37]">federal claims</strong>.</li>
            <li><span className="stat-number">•</span> Witness testimony and video evidence are critical for success.</li>
            <li><span className="stat-number">•</span> Quick action is essential to preserve evidence and testimony.</li>
          </ul>

          <p className="mt-4 text-white/80 leading-relaxed">We pursue monetary damages, injunctive relief, and policy changes where appropriate to prevent future harm.</p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="tel:17027788883" className="inline-block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-3 text-sm font-semibold text-[#0e0e0e] shadow-md">Call (702) 778‑8883</a>
            <Link href="/contact" className="inline-block rounded-2xl border border-white/10 px-5 py-3 text-sm text-white/90 text-center">Request a free consultation</Link>
          </div>

        </article>

        <aside className="rounded-2xl border border-white/10 bg-white/4 p-4 shadow-lg">
          <div className="mb-3 text-sm font-semibold text-white">Civil rights protection</div>
          <p className="text-sm text-white/80">Excessive force cases require immediate action to preserve evidence and protect constitutional rights.</p>

          <div className="mt-4 grid gap-3">
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Force incidents</div>
              <div className="text-lg font-semibold text-[#d4af37]">1.6%</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Evidence</div>
              <div className="text-lg font-semibold text-[#d4af37]">Critical</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Action needed</div>
              <div className="text-lg font-semibold text-[#d4af37]">Immediate</div>
            </div>
          </div>
        </aside>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg mb-8">
        <h3 className="text-lg font-semibold text-white mb-3">How we help</h3>
        <p className="text-white/80 leading-relaxed mb-3">We gather witness accounts, video evidence, and medical records to document abuse of force and seek appropriate remedies.</p>
        <p className="text-white/80 leading-relaxed">Call <a href="tel:17027788883" className="underline" style={{ textDecorationColor: '#d4af37' }}>702-778-8883</a> or use our contact form.</p>
      </section>

  {/* Footer removed */}
      <PracticeStructuredData
        slug="/practice/excessive-force"
        serviceType="Las Vegas Excessive Force Injury Lawyer"
        description="Injured by excessive force? We investigate, preserve evidence & pursue accountability. Free consultation."
        keywords={['las vegas excessive force lawyer','civil rights injury lawyer las vegas']}
        faqs={[
          { question: 'What counts as excessive force?', answer: 'Force that is unreasonable or disproportionate to the situation, causing unnecessary injury.' },
          { question: 'How soon should I act?', answer: 'Immediately—evidence such as video, witness statements, and medical findings should be preserved early.' }
        ]}
      />
    </>
  )
}
