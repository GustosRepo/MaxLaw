import React from 'react'
import Link from 'next/link'
import { SITE_URL } from '@/lib/constants'
import PracticeStructuredData from '../../practice/PracticeStructuredData'

export const metadata = {
  title: 'Las Vegas Forgery & Fraud Defense Lawyer | Saggese & Associates',
  description: 'Forgery & fraud defense—challenge intent, provenance & chain of custody. Free consultation (702) 778-8883.',
  keywords: [
    'las vegas forgery lawyer',
    'fraud defense attorney nevada',
    'document fraud defense'
  ],
  alternates: { canonical: `${SITE_URL}/criminal-defense/forgery` },
  openGraph: { title: 'Las Vegas Forgery & Fraud Defense Lawyer', description: 'Intent & provenance focused defense.', url: `${SITE_URL}/criminal-defense/forgery`, type: 'article' },
  twitter: { card: 'summary', title: 'Forgery Defense Lawyer', description: 'Intent & provenance challenges—free consult.' }
}

export default function ForgeryPage() {
  return (
  <>

      <header className="mb-6">
        <div className="relative inline-block">
          <h1 className="text-3xl sm:text-4xl font-['Playfair_Display'] font-bold text-[#d4af37] mb-2">Forgery & Fraud Defense</h1>
          <span className="accent-underline w-full rounded-full" aria-hidden />
        </div>
        <p className="text-white/75 mt-3">We defend allegations of forgery, identity theft, and related fraud offenses with careful investigation and strategic representation.</p>
      </header>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-8">
        <article className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg card-hover">
          <p className="mb-4 text-white/90 leading-relaxed">Forgery allegations often hinge on the defendant's intent and the provenance of documents. We conduct a careful review of signatures, endorsements, and document history to identify discrepancies and defenses.</p>

          <ul className="list-disc pl-5 text-white/80 mb-4">
            <li>Detailed review of documentary and forensic evidence</li>
            <li>Investigate chain of custody and witness credibility</li>
            <li>Negotiate to limit civil and criminal exposure where possible</li>
          </ul>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="tel:17027788883" className="inline-block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-3 text-sm font-semibold text-[#0e0e0e] cta-glow">Call (702) 778‑8883</a>
            <Link href="/contact" className="inline-block rounded-2xl border border-white/10 px-5 py-3 text-sm text-white/90 cta-glow">Request a free consultation</Link>
          </div>
        </article>

        <aside className="rounded-2xl border border-white/10 bg-white/4 p-4 shadow-lg">
          <div className="mb-3 text-sm font-semibold text-white">Quick facts</div>
          <p className="text-sm text-white/80">Forgery cases often depend on intent and document provenance; early investigation is critical.</p>

          <div className="mt-4 grid gap-3">
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Primary focus</div>
              <div className="text-lg font-semibold text-[#d4af37]">Intent & provenance</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Potential outcome</div>
              <div className="text-lg font-semibold text-[#d4af37]">Negotiation / trial</div>
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
        <p className="text-white/80 leading-relaxed mb-3">Preserve documents and avoid admissions without counsel. We will evaluate evidence and pursue the best available defenses.</p>
        <p className="text-white/80 leading-relaxed">Call our office at <a href="tel:17027788883" className="underline" style={{ textDecorationColor: '#d4af37' }}>702-778-8883</a> or submit the contact form.</p>
      </section>

  {/* Footer removed */}
      <PracticeStructuredData
        slug="/criminal-defense/forgery"
        serviceType="Las Vegas Forgery & Fraud Defense Lawyer"
        description="Forgery & fraud defense—challenge intent, provenance & chain of custody. Free consultation."
        keywords={['las vegas forgery lawyer','fraud defense attorney nevada']}
        faqs={[
          { question: 'How is intent proven in forgery?', answer: 'Prosecutors rely on circumstantial evidence—lack of clear intent can undermine the charge.' },
          { question: 'Can forgery charges be reduced?', answer: 'Yes—weak provenance or cooperation may result in reduced charges or diversion.' }
        ]}
      />
    </>
  )
}
