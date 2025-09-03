import React from 'react'
import Link from 'next/link'
import { SITE_URL } from '@/lib/constants'
import PracticeStructuredData from '../PracticeStructuredData'

export const metadata = {
  title: 'Las Vegas Elder Abuse Lawyer | Saggese & Associates',
  description: 'Las Vegas elder abuse & nursing home neglect lawyer protecting seniors from physical, emotional & financial abuse. Free consultation (702) 778‑8883.',
  keywords: [
    'las vegas elder abuse lawyer',
    'nursing home neglect attorney nevada',
    'elder financial abuse claim',
    'senior neglect lawyer las vegas'
  ],
  alternates: { canonical: `${SITE_URL}/practice/elder-abuse` },
  openGraph: {
    title: 'Las Vegas Elder Abuse Lawyer',
    description: 'Nursing home & caretaker abuse claims – free consultation.',
    url: `${SITE_URL}/practice/elder-abuse`,
    type: 'article'
  },
  twitter: {
    card: 'summary',
    title: 'Las Vegas Elder Abuse Lawyer',
    description: 'Protecting vulnerable seniors. Free consultation (702) 778‑8883.'
  }
}

export default function ElderAbusePage() {
  return (
    <>
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

      {/* Content only — PracticeLayout provides the outer main/container */}
      <header className="mb-6">
        <div className="relative inline-block">
          <h1 className="text-4xl font-['Playfair_Display'] font-bold text-[#d4af37] mb-2">Elder Abuse</h1>
          <span className="accent-underline w-full rounded-full" aria-hidden />
        </div>
        <p className="text-white/75 mt-3">Abuse or neglect of seniors is unacceptable. We represent families seeking accountability for physical, emotional, or financial abuse.</p>
      </header>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-8">
        <article className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg card-hover">
          <p className="mb-4 text-white/90 leading-relaxed">
            We investigate patterns of neglect, financial exploitation, and physical abuse in care facilities. Our firm works with medical and forensic experts to document harm and seek justice.
          </p>

          <p className="mb-4 text-white/90 leading-relaxed">
            Abuse or neglect of seniors is unacceptable. We represent families seeking accountability for physical, emotional, or financial abuse with comprehensive investigation and advocacy.
          </p>

          <h3 className="mt-4 text-lg font-semibold text-white">Facts about elder abuse</h3>
          <ul className="mt-3 space-y-3 text-white/80">
            <li><span className="stat-number">•</span> Approximately <strong className="text-[#d4af37]">1 in 6</strong> seniors experience some form of abuse.</li>
            <li><span className="stat-number">•</span> <strong className="text-[#d4af37]">Financial abuse</strong> is the most common form of elder mistreatment.</li>
            <li><span className="stat-number">•</span> Only <strong className="text-[#d4af37]">1 in 24</strong> cases of elder abuse are reported.</li>
            <li><span className="stat-number">•</span> Nursing home residents are particularly vulnerable to abuse.</li>
            <li><span className="stat-number">•</span> Early intervention can prevent further harm and secure justice.</li>
          </ul>

          <p className="mt-4 text-white/80 leading-relaxed">We pursue damages, removal of abusive caretakers, and remedial actions to secure the safety and well-being of elder clients.</p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="tel:17027788883" className="inline-block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-3 text-sm font-semibold text-[#0e0e0e] shadow-md">Call (702) 778‑8883</a>
            <Link href="/contact" className="inline-block rounded-2xl border border-white/10 px-5 py-3 text-sm text-white/90 text-center">Request a free consultation</Link>
          </div>

        </article>

        <aside className="rounded-2xl border border-white/10 bg-white/4 p-4 shadow-lg">
          <div className="mb-3 text-sm font-semibold text-white">Protecting vulnerable seniors</div>
          <p className="text-sm text-white/80">Elder abuse cases require immediate action and specialized expertise to protect vulnerable victims and families.</p>

          <div className="mt-4 grid gap-3">
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Abuse rate</div>
              <div className="text-lg font-semibold text-[#d4af37]">1 in 6</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Reported cases</div>
              <div className="text-lg font-semibold text-[#d4af37]">1 in 24</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Most common</div>
              <div className="text-lg font-semibold text-[#d4af37]">Financial</div>
            </div>
          </div>
        </aside>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg mb-8">
        <h3 className="text-lg font-semibold text-white mb-3">How we help</h3>
        <p className="text-white/80 leading-relaxed mb-3">We collect medical records, financial audits, and staff logs to document abuse and pursue recovery for victims and families.</p>
        <p className="text-white/80 leading-relaxed">Call <a href="tel:17027788883" className="underline" style={{ textDecorationColor: '#d4af37' }}>702-778-8883</a> or use our contact form.</p>
      </section>

  {/* Footer removed */}
      <PracticeStructuredData
        slug="/practice/elder-abuse"
        serviceType="Las Vegas Elder Abuse Lawyer"
        description="Las Vegas elder abuse & nursing home neglect lawyer protecting seniors from abuse. Free consultation."
        keywords={['las vegas elder abuse lawyer','nursing home neglect attorney','elder financial abuse claim']}
        faqs={[
          { question: 'What are common signs of elder abuse?', answer: 'Unexplained injuries, withdrawal, sudden financial changes, poor hygiene, or fearfulness around caregivers.' },
          { question: 'Who can be liable for elder abuse?', answer: 'Individual caregivers, facility operators, financial advisors, or other parties enabling or committing misconduct.' }
        ]}
      />
    </>
  )
}
