import React from 'react'
import Link from 'next/link'
import { SITE_URL } from '@/lib/constants'
import PracticeStructuredData from '../../practice/PracticeStructuredData'

export const metadata = {
  title: 'Las Vegas Drug Offenses Lawyer | Saggese & Associates',
  description: 'Drug Offenses & expungement guidance—eligibility analysis & petition filing. Free consultation (702) 778-8883.',
  keywords: [
    'las vegas Drug Offenses lawyer',
    'expungement attorney nevada',
    'seal criminal record las vegas'
  ],
  alternates: { canonical: `${SITE_URL}/criminal-defense/record-sealing` },
  openGraph: { title: 'Las Vegas Drug Offenses Lawyer', description: 'Eligibility review & petition filing.', url: `${SITE_URL}/criminal-defense/record-sealing`, type: 'article' },
  twitter: { card: 'summary', title: 'Drug Offenses Lawyer', description: 'Clear your record—free eligibility review.' }
}

export default function RecordSealingPage() {
  return (
  <>

      <header className="mb-6">
        <div className="relative inline-block">
          <h1 className="text-3xl sm:text-4xl font-['Playfair_Display'] font-bold text-[#d4af37] mb-2">Drug Offenses & Expungement</h1>
          <span className="accent-underline w-full rounded-full" aria-hidden />
        </div>
        <p className="text-white/75 mt-3">We help eligible clients clear or seal their records to reduce long-term barriers to employment, housing, and more.</p>
      </header>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-8">
        <article className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg card-hover">
          <p className="mb-4 text-white/90 leading-relaxed">Sealing or expunging a criminal record can remove barriers to employment, housing, and licensing. Eligibility depends on the charge, disposition, and statutory waiting periods; we help clients determine the best path forward.</p>

          <h3 className="mt-4 text-lg font-semibold text-white">Process overview</h3>
          <ol className="list-decimal pl-5 text-white/80 mb-4">
            <li>Eligibility review and document collection</li>
            <li>Preparation and filing of the petition with supporting evidence</li>
            <li>Representation at any required hearing and follow-up with record agencies</li>
          </ol>

          <p className="text-white/80 leading-relaxed mb-3">We aim to streamline the process and clearly explain timelines and likely outcomes so clients know what to expect at each step.</p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="tel:17027788883" className="inline-block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-3 text-sm font-semibold text-[#0e0e0e] cta-glow">Call (702) 778‑8883</a>
            <Link href="/contact" className="inline-block rounded-2xl border border-white/10 px-5 py-3 text-sm text-white/90 cta-glow">Request a free consultation</Link>
          </div>
        </article>

        <aside className="rounded-2xl border border-white/10 bg-white/4 p-4 shadow-lg">
          <div className="mb-3 text-sm font-semibold text-white">Quick facts</div>
          <p className="text-sm text-white/80">Sealing records can remove many collateral barriers; eligibility rules vary — we can help determine if you qualify.</p>

          <div className="mt-4 grid gap-3">
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Outcome</div>
              <div className="text-lg font-semibold text-[#d4af37]">Sealed / expunged</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Process time</div>
              <div className="text-lg font-semibold text-[#d4af37]">Varies</div>
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
        <p className="text-white/80 leading-relaxed mb-3">Contact us for an eligibility review. We will explain the process and help file the necessary petitions to pursue sealing or expungement.</p>
        <p className="text-white/80 leading-relaxed">Call our office at <a href="tel:17027788883" className="underline" style={{ textDecorationColor: '#d4af37' }}>702-778-8883</a> or submit the contact form.</p>
      </section>

  {/* Footer removed */}
      <PracticeStructuredData
        slug="/criminal-defense/record-sealing"
        serviceType="Las Vegas Drug Offenses Lawyer"
        description="Drug Offenses & expungement guidance—eligibility analysis & petition filing. Free consultation."
        keywords={['las vegas Drug Offenses lawyer','expungement attorney nevada']}
        faqs={[
          { question: 'How long before I can seal a record?', answer: 'Waiting periods depend on the offense and disposition—misdemeanors often shorter than felonies.' },
          { question: 'Does sealing erase my record?', answer: 'Sealed records are hidden from most public checks but remain accessible to certain agencies.' }
        ]}
      />
    </>
  )
}
