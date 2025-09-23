import React from 'react'
import Link from 'next/link'
import PracticeStructuredData from '../../practice/PracticeStructuredData'

const title = 'Las Vegas Theft & Larceny Defense Lawyer | Saggese & Associates'
const description = 'Experienced Las Vegas theft and larceny defense attorneys handling shoplifting, grand larceny, and financial theft allegations with strategic negotiation and trial readiness.'
const keywords = [
  'Las Vegas theft lawyer',
  'larceny defense attorney',
  'shoplifting defense lawyer',
  'grand larceny attorney Nevada',
  'property crime defense Las Vegas',
  'theft charges lawyer',
  'petty theft defense attorney'
]

export const metadata = {
  title,
  description,
  keywords,
  alternates: { canonical: 'https://www.maxlawnv.com/criminal-defense/theft' },
  openGraph: {
    type: 'website',
    url: 'https://www.maxlawnv.com/criminal-defense/theft',
    title,
    description
  },
  twitter: { card: 'summary_large_image', title, description }
}

export default function TheftPage() {
  const faqs = [
    { question: 'What determines the severity of a theft charge?', answer: 'Primarily the alleged value involved, prior record, and circumstances. Early review of valuation evidence can reduce exposure.' },
    { question: 'Can theft charges be reduced or dismissed?', answer: 'Yes. Diversion, restitution, charge negotiation, or evidentiary challenges (intent, ownership, identity) can lead to reduced or dismissed counts.' },
    { question: 'Should I talk to store security or police?', answer: 'Do not provide statements beyond basic identification before consulting counsel—statements are often used to establish intent.' },
    { question: 'Is restitution helpful?', answer: 'Timely restitution in appropriate cases can support negotiation for reduced charges or dismissal pathways.' }
  ]

  return (
    <>

      <header className="mb-6">
        <div className="relative inline-block">
          <h1 className="text-3xl sm:text-4xl font-['Playfair_Display'] font-bold text-[#d4af37] mb-2">Theft & Larceny Defense</h1>
          <span className="accent-underline w-full rounded-full" aria-hidden />
        </div>
        <p className="text-white/75 mt-3">Charges for theft can have long-lasting consequences — we provide aggressive defense and case-specific strategies.</p>
      </header>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-8">
        <article className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg card-hover">
          <p className="mb-4 text-white/90 leading-relaxed">We defend clients across the spectrum of theft offenses, from shoplifting and petty theft to grand larceny. We evaluate evidence, ownership claims, valuation, and intent to determine the strongest path forward.</p>

          <h3 className="mt-4 text-lg font-semibold text-white">Key defense strategies</h3>
          <ul className="list-disc pl-5 text-white/80 mb-4">
            <li>Demonstrate lack of intent or mistaken belief of ownership</li>
            <li>Challenge identification and witness reliability</li>
            <li>Dispute valuation thresholds establishing felony levels</li>
            <li>Negotiate diversion, restitution, or reduced charges where appropriate</li>
          </ul>

          <p className="text-white/80 leading-relaxed mb-4">In many lower-level theft cases, early negotiation and evidence review lead to favorable outcomes; for more serious allegations, we aggressively prepare for trial.</p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="tel:17027788883" className="cta-glow inline-block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-3 text-sm font-semibold text-[#0e0e0e]">Call (702) 778‑8883</a>
            <Link href="/contact" className="cta-glow inline-block rounded-2xl border border-white/10 px-5 py-3 text-sm text-white/90">Request a free consultation</Link>
          </div>
        </article>

        <aside className="rounded-2xl border border-white/10 bg-white/4 p-4 shadow-lg">
          <div className="mb-3 text-sm font-semibold text-white">Quick facts</div>
          <p className="text-sm text-white/80">From petty theft to grand larceny, charges depend on value and intent—early defense often reduces exposure.</p>

          <div className="mt-4 grid gap-3">
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Typical outcome</div>
              <div className="text-lg font-semibold text-[#d4af37]">Plea / diversion</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Key defense</div>
              <div className="text-lg font-semibold text-[#d4af37]">Lack of intent</div>
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
        <p className="text-white/80 leading-relaxed mb-3">If you're charged with theft, preserve receipts and avoid making statements without counsel. Contact us to discuss defenses and options.</p>
        <p className="text-white/80 leading-relaxed">Call <a href="tel:17027788883" className="underline" style={{ textDecorationColor: '#d4af37' }}>702-778-8883</a> or submit the contact form.</p>
      </section>

      <PracticeStructuredData
        slug="criminal-defense/theft"
        serviceType="Las Vegas Theft & Larceny Defense Lawyer"
        description={description}
        keywords={keywords}
        faqs={faqs}
      />

  {/* Footer removed */}
    </>
  )
}
