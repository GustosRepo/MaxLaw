import React from 'react'
import Link from 'next/link'
import { SITE_URL } from '@/lib/constants'
import PracticeStructuredData from '../../practice/PracticeStructuredData'

export const metadata = {
  title: 'Las Vegas Juvenile Defense Lawyer | Saggese & Associates',
  description: 'Juvenile defense prioritizing rehabilitation, diversion & Drug offenses. Free consultation (702) 778-8883.',
  keywords: [
    'las vegas juvenile defense lawyer',
    'juvenile diversion nevada',
    'juvenile Drug offenses las vegas'
  ],
  alternates: { canonical: `${SITE_URL}/criminal-defense/juvenile-crimes` },
  openGraph: { title: 'Las Vegas Juvenile Defense Lawyer', description: 'Rehabilitation & diversion focused juvenile defense.', url: `${SITE_URL}/criminal-defense/juvenile-crimes`, type: 'article' },
  twitter: { card: 'summary', title: 'Juvenile Defense Lawyer', description: 'Diversion & rehabilitation strategies.' }
}

export default function JuvenileCrimesPage() {
  return (
  <>

      <header className="mb-6">
        <div className="relative inline-block">
          <h1 className="text-3xl sm:text-4xl font-['Playfair_Display'] font-bold text-[#d4af37] mb-2">Juvenile Crimes Defense</h1>
          <span className="accent-underline w-full rounded-full" aria-hidden />
        </div>
        <p className="text-white/75 mt-3">We represent juveniles with an emphasis on rehabilitation and protecting futures while providing strong legal advocacy.</p>
      </header>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-8">
        <article className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg card-hover">
          <p className="mb-4 text-white/90 leading-relaxed">Juvenile cases require a different approach than adult criminal cases. We prioritize rehabilitation, family involvement, and legal strategies that reduce the long-term impact on education and employment prospects.</p>

          <ul className="list-disc pl-5 text-white/80 mb-4">
            <li>Assess eligibility for diversion, counseling, or informal resolution</li>
            <li>Seek sealing or restricted records when allowed by statute</li>
            <li>Advocate at adjudication and detention hearings to avoid unnecessary confinement</li>
          </ul>

          <h3 className="mt-4 text-lg font-semibold text-white">Parent guidance</h3>
          <p className="text-white/80 leading-relaxed mb-3">Parents should preserve records, participate in recommended services, and follow counsel's guidance to maximize the likelihood of favorable outcomes for their child.</p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="tel:17027788883" className="inline-block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-3 text-sm font-semibold text-[#0e0e0e] cta-glow">Call (702) 778‑8883</a>
            <Link href="/contact" className="inline-block rounded-2xl border border-white/10 px-5 py-3 text-sm text-white/90 cta-glow">Request a free consultation</Link>
          </div>
        </article>

        <aside className="rounded-2xl border border-white/10 bg-white/4 p-4 shadow-lg">
          <div className="mb-3 text-sm font-semibold text-white">Quick facts</div>
          <p className="text-sm text-white/80">Juvenile proceedings emphasize rehabilitation — options often include diversion, counseling, or limited adjudications.</p>

          <div className="mt-4 grid gap-3">
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Primary goal</div>
              <div className="text-lg font-semibold text-[#d4af37]">Rehabilitation</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Possible outcome</div>
              <div className="text-lg font-semibold text-[#d4af37]">Diversion / sealed record</div>
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
        <p className="text-white/80 leading-relaxed mb-3">If your child is involved in the juvenile system, avoid admissions and work with counsel to explore diversion and rehabilitative options.</p>
        <p className="text-white/80 leading-relaxed">Call our office or submit the contact form to schedule a consultation.</p>
      </section>

  {/* Footer removed */}
      <PracticeStructuredData
        slug="/criminal-defense/juvenile-crimes"
        serviceType="Las Vegas Juvenile Defense Lawyer"
        description="Juvenile defense prioritizing rehabilitation, diversion & Drug offenses. Free consultation."
        keywords={['las vegas juvenile defense lawyer','juvenile diversion nevada']}
        faqs={[
          { question: 'Can juvenile records be sealed?', answer: 'Many juvenile adjudications can be sealed—timelines depend on the offense and completion of terms.' },
          { question: 'Is diversion available?', answer: 'Frequently yes—counseling, education or informal supervision can replace formal adjudication.' }
        ]}
      />
    </>
  )
}
