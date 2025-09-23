import React from 'react'
import Link from 'next/link'
import { SITE_URL } from '@/lib/constants'
import PracticeStructuredData from '../../practice/PracticeStructuredData'

export const metadata = {
  title: 'Las Vegas Larceny & Theft Defense Lawyer | Saggese & Associates',
  description: 'Larceny & theft defense—challenge intent, value & identification. Free consultation (702) 778-8883.',
  keywords: [
    'las vegas theft lawyer',
    'larceny defense attorney nevada',
    'shoplifting lawyer las vegas'
  ],
  alternates: { canonical: `${SITE_URL}/criminal-defense/larceny` },
  openGraph: { title: 'Las Vegas Larceny & Theft Defense Lawyer', description: 'Intent & valuation focused defense.', url: `${SITE_URL}/criminal-defense/larceny`, type: 'article' },
  twitter: { card: 'summary', title: 'Theft Defense Lawyer', description: 'Value & intent challenges—free consult.' }
}

export default function LarcenyPage() {
  return (
  <>

      <header className="mb-6">
        <div className="relative inline-block">
          <h1 className="text-3xl sm:text-4xl font-['Playfair_Display'] font-bold text-[#d4af37] mb-2">Larceny & Theft Defense</h1>
          <span className="accent-underline w-full rounded-full" aria-hidden />
        </div>
        <p className="text-white/75 mt-3">We defend clients against larceny and other theft offenses, tailoring strategy to the unique facts of the case.</p>
      </header>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-8">
        <article className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg card-hover">
          <p className="mb-4 text-white/90 leading-relaxed">Larceny cases depend on the value of the property and the defendant's intent. We review evidence to determine whether the elements of the offense are satisfied and pursue resolution strategies accordingly.</p>

          <ul className="list-disc pl-5 text-white/80 mb-4">
            <li>Value-based analysis to determine offense degree</li>
            <li>Challenge intent and identity where appropriate</li>
            <li>Negotiate restitution, diversion, or reduced charges</li>
          </ul>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="tel:17027788883" className="inline-block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-3 text-sm font-semibold text-[#0e0e0e] cta-glow">Call (702) 778‑8883</a>
            <Link href="/contact" className="inline-block rounded-2xl border border-white/10 px-5 py-3 text-sm text-white/90 cta-glow">Request a free consultation</Link>
          </div>
        </article>

        <aside className="rounded-2xl border border-white/10 bg-white/4 p-4 shadow-lg">
          <div className="mb-3 text-sm font-semibold text-white">Quick facts</div>
          <p className="text-sm text-white/80">Larceny charges turn on value and intent; we examine evidence to identify defenses.</p>

          <div className="mt-4 grid gap-3">
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Typical resolution</div>
              <div className="text-lg font-semibold text-[#d4af37]">Plea / diversion</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Common defense</div>
              <div className="text-lg font-semibold text-[#d4af37]">No intent</div>
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
        <p className="text-white/80 leading-relaxed mb-3">Preserve receipts and avoid admissions; contact counsel to discuss options and defenses.</p>
        <p className="text-white/80 leading-relaxed">Call <a href="tel:17027788883" className="underline" style={{ textDecorationColor: '#d4af37' }}>702-778-8883</a> or use the contact form.</p>
      </section>

  {/* Footer removed */}
      <PracticeStructuredData
        slug="/criminal-defense/larceny"
        serviceType="Las Vegas Larceny & Theft Defense Lawyer"
        description="Larceny & theft defense—challenge intent, value & identification. Free consultation."
        keywords={['las vegas theft lawyer','larceny defense attorney nevada']}
        faqs={[
          { question: 'Can theft charges be reduced?', answer: 'Yes—value disputes, restitution or weak intent evidence can support reduction.' },
          { question: 'What if property was returned?', answer: 'Return can mitigate penalties and aid negotiation, though it does not erase the charge automatically.' }
        ]}
      />
    </>
  )
}
