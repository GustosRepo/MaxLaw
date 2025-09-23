import React from 'react'
import Link from 'next/link'
import { SITE_URL } from '@/lib/constants'
import PracticeStructuredData from '../../practice/PracticeStructuredData'

export const metadata = {
  title: 'Las Vegas Homicide & Murder Defense Lawyer | Saggese & Associates',
  description: 'Homicide & murder defense—strategic forensic review & trial-focused advocacy. Free consult (702) 778-8883.',
  keywords: [
    'las vegas murder defense lawyer',
    'homicide defense attorney nevada',
    'forensic evidence criminal defense'
  ],
  alternates: { canonical: `${SITE_URL}/criminal-defense/murder` },
  openGraph: { title: 'Las Vegas Homicide & Murder Defense Lawyer', description: 'Forensic & investigative focused defense.', url: `${SITE_URL}/criminal-defense/murder`, type: 'article' },
  twitter: { card: 'summary', title: 'Homicide Defense Lawyer', description: 'Strategic forensic review—free consult.' }
}

export default function MurderPage() {
  return (
  <>

      <header className="mb-6">
        <div className="relative inline-block">
          <h1 className="text-3xl sm:text-4xl font-['Playfair_Display'] font-bold text-[#d4af37] mb-2">Homicide & Murder Defense</h1>
          <span className="accent-underline w-full rounded-full" aria-hidden />
        </div>
        <p className="text-white/75 mt-3">When facing the most serious criminal accusations, you need experienced trial lawyers who will defend every right and avenue of defense.</p>
      </header>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-8">
        <article className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg card-hover">
          <p className="mb-4 text-white/90 leading-relaxed">Homicide and murder cases are the most serious criminal matters and often involve extensive investigations, forensic analysis, and multiple expert witnesses. We prepare comprehensive defenses that scrutinize evidence, chain of custody, and investigative procedures.</p>

          <h3 className="mt-4 text-lg font-semibold text-white">Our approach</h3>
          <ul className="mt-3 list-disc pl-5 text-white/80 mb-4">
            <li>Immediate coordination with forensic and investigative experts</li>
            <li>Detailed review of forensic evidence and witness statements</li>
            <li>Strategic litigation planning for pretrial motions and trial</li>
          </ul>

          <p className="text-white/80 leading-relaxed mb-3">Given the stakes, timely counsel is critical. We will preserve evidence, develop defenses, and coordinate a multidisciplinary strategy designed to protect your rights at every stage.</p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="tel:17027788883" className="inline-block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-3 text-sm font-semibold text-[#0e0e0e] cta-glow">Call (702) 778‑8883</a>
            <Link href="/contact" className="inline-block rounded-2xl border border-white/10 px-5 py-3 text-sm text-white/90 cta-glow">Request a free consultation</Link>
          </div>
        </article>

        <aside className="rounded-2xl border border-white/10 bg-white/4 p-4 shadow-lg">
          <div className="mb-3 text-sm font-semibold text-white">Quick facts</div>
          <p className="text-sm text-white/80">Homicide matters involve significant consequences and complex evidence; experienced trial counsel is essential.</p>

          <div className="mt-4 grid gap-3">
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Evidence focus</div>
              <div className="text-lg font-semibold text-[#d4af37]">Forensics & witnesses</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Potential outcome</div>
              <div className="text-lg font-semibold text-[#d4af37]">Trial / plea</div>
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
        <p className="text-white/80 leading-relaxed mb-3">If charged with a homicide offense, obtain counsel immediately. We will coordinate investigation and forensic review as part of a comprehensive defense.</p>
        <p className="text-white/80 leading-relaxed">Call our office at <a href="tel:17027788883" className="underline" style={{ textDecorationColor: '#d4af37' }}>702-778-8883</a> or submit the contact form to request a consultation.</p>
      </section>

  {/* Footer removed */}
      <PracticeStructuredData
        slug="/criminal-defense/murder"
        serviceType="Las Vegas Homicide & Murder Defense Lawyer"
        description="Homicide & murder defense—strategic forensic review & trial-focused advocacy. Free consultation."
        keywords={['las vegas murder defense lawyer','homicide defense attorney nevada']}
        faqs={[
          { question: 'When should a defense team get experts?', answer: 'Immediately—early forensic consultation preserves evidence and shapes strategy.' },
          { question: 'Can homicide charges be reduced?', answer: 'Yes—issues with intent, causation or evidence can reduce charges (e.g., to manslaughter).' }
        ]}
      />
    </>
  )
}
