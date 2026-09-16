import React from 'react'
// Removed Head; relying on exported metadata & structured data
import { SITE_URL } from '@/lib/constants'
import PracticeStructuredData from '../PracticeStructuredData'
import Link from 'next/link'
import { PracticeBreadcrumbs, PracticeFaqSection, type PracticeFaq } from '../PracticePageExtras'

export const metadata = {
  title: 'Las Vegas Wrongful Death Lawyer | Saggese & Associates',
  description: 'Compassionate Las Vegas wrongful death attorneys pursuing justice & financial security for families. Free consultation – call (702) 778‑8883.',
  alternates: { canonical: `${SITE_URL}/practice/wrongful-death` },
  openGraph: {
    title: 'Las Vegas Wrongful Death Lawyer',
    description: 'Justice & compensation for Nevada families — free consultation.',
    url: `${SITE_URL}/practice/wrongful-death`,
    type: 'article'
  },
  twitter: {
    card: 'summary',
    title: 'Las Vegas Wrongful Death Lawyer',
    description: 'Compassionate wrongful death representation for Nevada families.'
  }
}

const wrongfulDeathFaqs: PracticeFaq[] = [
  {
    question: 'What types of incidents may involve a wrongful death claim?',
    answer: 'Fatal incidents may overlap with serious vehicle crashes, truck accidents, unsafe property claims, workplace incidents, or defective product cases. The underlying circumstances and available evidence help determine which areas of the case need to be investigated.',
    links: [
      { text: 'truck accidents', href: '/practice/truck-accidents' },
      { text: 'unsafe property claims', href: '/practice/premises-liability' },
      { text: 'defective product cases', href: '/practice/product-liability' }
    ]
  },
  {
    question: 'What information can help document a fatal incident?',
    answer: 'Relevant information may include incident reports, medical records, available photos or video, witness information, insurance correspondence, and other records connected to the incident. Preserving available documentation can help create a clearer record of what happened.'
  }
]

export default function WrongfulDeathPage() {
  return (
    <>
      <PracticeBreadcrumbs current="Wrongful Death" href="/practice/wrongful-death" />

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-8">
        <article className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg card-hover">
          <header className="mb-6">
            <div className="relative inline-block">
              <h1 className="text-3xl sm:text-4xl font-['Playfair_Display'] font-bold text-[#d4af37] mb-2">Las Vegas Wrongful Death Lawyer</h1>
              <span className="accent-underline w-full rounded-full" aria-hidden />
            </div>
            <p className="text-white/75 mt-3">Our firm provides compassionate representation for families who have lost a loved one due to another's negligence or wrongful act.</p>
          </header>

          <p className="mb-4 text-white/90 leading-relaxed">
            Wrongful death occurs when someone dies due to the negligent or intentional act of another person or entity. These tragic cases require compassionate yet aggressive legal representation.
          </p>

          <p className="mb-4 text-white/90 leading-relaxed">
            In Nevada, wrongful death claims can be filed by the decedent's spouse, children, parents, or estate representatives. The goal is to provide financial security for surviving family members.
          </p>

          <h2 className="mt-4 text-xl font-semibold text-white">Understanding Wrongful Death Claims</h2>
          <ul className="mt-3 space-y-3 text-white/80">
            <li><span className="stat-number">•</span> Common causes include serious vehicle crashes, workplace incidents, unsafe property claims, and defective products.</li>
            <li><span className="stat-number">•</span> We handle administrative burdens with care and sensitivity.</li>
          </ul>

          <p className="mt-4 text-white/80 leading-relaxed">
            Fatal incidents may overlap with <Link href="/practice/truck-accidents" className="text-[#d4af37] underline-offset-4 hover:underline">truck accidents</Link>, <Link href="/practice/premises-liability" className="text-[#d4af37] underline-offset-4 hover:underline">unsafe property claims</Link>, or <Link href="/practice/product-liability" className="text-[#d4af37] underline-offset-4 hover:underline">defective product cases</Link>.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="tel:17027788883" className="inline-block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-3 text-sm font-semibold text-[#0e0e0e] cta-glow">Call (702) 778‑8883</a>
            <Link href="/contact" className="inline-block rounded-2xl border border-white/10 px-5 py-3 text-sm text-white/90 text-center cta-glow">Request a free consultation</Link>
          </div>
        </article>

        <aside className="rounded-2xl border border-white/10 bg-white/4 p-4 shadow-lg">
          <div className="mb-3 text-sm font-semibold text-white">Wrongful Death Support</div>
          <p className="text-sm text-white/80 mb-4">Understanding your rights and the legal process is crucial during this difficult time.</p>

          <div className="mt-4 grid gap-3">
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Approach</div>
              <div className="text-lg font-semibold text-[#d4af37]">Careful</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Evidence</div>
              <div className="text-lg font-semibold text-[#d4af37]">Preserved</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Goal</div>
              <div className="text-lg font-semibold text-[#d4af37]">Accountability</div>
            </div>
          </div>
        </aside>
      </section>

      {/* How we help section */}
      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg mt-8">
        <h2 className="text-xl font-semibold text-white mb-3">How We Help</h2>
        <p className="text-white/80 leading-relaxed mb-3">We manage wrongful death claims and fight for compensation for losses and future needs of surviving family members, while handling administrative burdens with care.</p>
        <p className="text-white/80 leading-relaxed">Call <a href="tel:17027788883" className="inline-flex items-center rounded-xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-3 py-1.5 text-sm font-bold text-[#0e0e0e] no-underline shadow-[0_8px_22px_rgba(212,175,55,0.18)]">702-778-8883</a> or use our contact form.</p>
      </section>

      <PracticeFaqSection title="Wrongful Death Questions" faqs={wrongfulDeathFaqs} />

      <PracticeStructuredData
        slug="/practice/wrongful-death"
        serviceType="Las Vegas Wrongful Death Lawyer"
        description="Compassionate Las Vegas wrongful death attorneys pursuing justice & financial security for families. Free consultation – call (702) 778‑8883."
        keywords={['las vegas wrongful death lawyer','nevada wrongful death attorney','fatal accident claim']}
        faqs={wrongfulDeathFaqs}
      />
    </>
  )
}
