import React from 'react'
import Link from 'next/link'
import { SITE_URL } from '@/lib/constants'
import PracticeStructuredData from '../PracticeStructuredData'
import { PracticeBreadcrumbs } from '../PracticePageExtras'

export const metadata = {
  title: 'Las Vegas Premises Liability & Slip and Fall Lawyer | Saggese & Associates',
  description: 'Las Vegas premises liability and slip-and-fall lawyer for unsafe property injuries, evidence preservation, medical documentation, and insurance claims.',
  keywords: [
    'las vegas premises liability lawyer',
    'negligent security attorney nevada',
    'slip and fall lawyer las vegas',
    'dangerous property condition claim'
  ],
  alternates: { canonical: `${SITE_URL}/practice/premises-liability` },
  openGraph: {
    title: 'Las Vegas Premises Liability & Slip and Fall Lawyer',
    description: 'Unsafe property, slip-and-fall, and negligent security claims.',
    url: `${SITE_URL}/practice/premises-liability`,
    type: 'article'
  },
  twitter: {
    card: 'summary',
    title: 'Las Vegas Premises Liability & Slip and Fall Lawyer',
    description: 'Injured on unsafe property? Free consultation (702) 778‑8883.'
  }
}

const premisesLiabilityFaqs = [
  {
    question: 'Is a slip and fall handled as a premises liability case?',
    answer: 'Often, yes. Slip and fall claims are commonly evaluated as premises liability matters when an unsafe property condition may have contributed to the injury.'
  },
  {
    question: 'What evidence helps after an injury on unsafe property?',
    answer: 'Photos or video of the condition, incident reports, witness names, medical records, footwear or damaged items, and any communication with the property owner can all be important.'
  },
  {
    question: 'Should I contact a lawyer before speaking with an insurance adjuster?',
    answer: 'YES. It is always wise to get legal guidance first, especially when who was at fault, whether or not the location had notice of the dangerous condition, medical treatment received as a result of the injury, or written/recorded statements are likely to be disputed.'
  }
]

export default function PremisesLiabilityPage() {
  return (
    <>
      <PracticeBreadcrumbs current="Premises Liability" href="/practice/premises-liability" />

      {/* Content only — PracticeLayout provides outer main/container */}
      <header className="mb-6">
        <div className="relative inline-block">
          <h1 className="text-3xl sm:text-4xl font-['Playfair_Display'] font-bold text-[#d4af37] mb-2">Las Vegas Premises Liability Lawyer</h1>
          <span className="accent-underline w-full rounded-full" aria-hidden />
        </div>
        <p className="text-white/75 mt-3">Property owners must keep visitors safe. We pursue claims for slips, falls, negligent security, and other dangerous conditions.</p>
      </header>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-8">
        <article className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg card-hover">
          <p className="mb-4 text-white/90 leading-relaxed">
            Premises liability claims require proof that an owner knew or should have known about a hazardous condition. We investigate maintenance records, incident logs, and surveillance to establish liability.
          </p>

          <p className="mb-4 text-white/90 leading-relaxed">
            Property owners must keep visitors safe. We pursue claims for slips, falls, negligent security, and other dangerous conditions with thorough investigation and expert testimony.
          </p>

          <h2 className="mt-4 text-xl font-semibold text-white">Slip and Fall Cases on Unsafe Property</h2>
          <p className="mt-3 text-white/80 leading-relaxed">
            Slip-and-fall, stairway accidents, store negligence, and poor lighting or maintenance are handled on this page. Serious falls may also involve <Link href="/practice/brain-and-spine-injury" className="text-[#d4af37] underline-offset-4 hover:underline">brain or spine injuries</Link>.
          </p>

          <h2 className="mt-6 text-xl font-semibold text-white">Premises Liability Case Factors</h2>
          <ul className="mt-3 space-y-3 text-white/80">
            <li><span className="stat-number">•</span> Property owners may be liable for inadequate security.</li>
            <li><span className="stat-number">•</span> Documentation of hazards is crucial for claims.</li>
            <li><span className="stat-number">•</span> Maintenance records, incident logs, and surveillance may help establish liability.</li>
          </ul>

          <p className="mt-4 text-white/80 leading-relaxed">
            When unsafe property conditions cause a fatal injury, the case may also involve a separate <Link href="/practice/wrongful-death" className="text-[#d4af37] underline-offset-4 hover:underline">wrongful death claim</Link>.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="tel:17027788883" className="inline-block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-3 text-sm font-semibold text-[#0e0e0e] shadow-md">Call (702) 778‑8883</a>
            <Link href="/contact" className="inline-block rounded-2xl border border-white/10 px-5 py-3 text-sm text-white/90 text-center">Request a free consultation</Link>
          </div>

        </article>

        <aside className="rounded-2xl border border-white/10 bg-white/4 p-4 shadow-lg">
          <div className="mb-3 text-sm font-semibold text-white">Property owner duties</div>
          <p className="text-sm text-white/80">Owners must maintain safe conditions and address hazards promptly. Evidence preservation is critical in these cases.</p>

          <div className="mt-4 grid gap-3">
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Case type</div>
              <div className="text-lg font-semibold text-[#d4af37]">Slip & Fall</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Key issue</div>
              <div className="text-lg font-semibold text-[#d4af37]">Notice</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Evidence</div>
              <div className="text-lg font-semibold text-[#d4af37]">Critical</div>
            </div>
          </div>
        </aside>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg mb-8">
        <h2 className="text-xl font-semibold text-white mb-3">How We Help</h2>
        <p className="text-white/80 leading-relaxed mb-3">We work with safety experts, property managers, and witnesses to document hazardous conditions and present a claim against negligent owners.</p>
        <p className="text-white/80 leading-relaxed">Call <a href="tel:17027788883" className="inline-flex items-center rounded-xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-3 py-1.5 text-sm font-bold text-[#0e0e0e] no-underline shadow-[0_8px_22px_rgba(212,175,55,0.18)]">702-778-8883</a> or use our contact form.</p>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">Premises Liability Questions</h2>
        <div className="space-y-5">
          {premisesLiabilityFaqs.map((faq) => (
            <div key={faq.question}>
              <h3 className="text-base font-semibold text-[#bfa76a]">{faq.question}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

  {/* Footer removed */}
      <PracticeStructuredData
        slug="/practice/premises-liability"
        serviceType="Las Vegas Premises Liability and Slip and Fall Lawyer"
        description="Las Vegas premises liability and slip-and-fall lawyer for unsafe property injuries, evidence preservation, medical documentation, and insurance claims."
        keywords={['las vegas premises liability lawyer','negligent security attorney','slip and fall lawyer las vegas']}
        faqs={premisesLiabilityFaqs}
      />
    </>
  )
}
