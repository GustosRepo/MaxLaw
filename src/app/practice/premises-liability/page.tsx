import React from 'react'
import Link from 'next/link'
import { SITE_URL } from '@/lib/constants'
import PracticeStructuredData from '../PracticeStructuredData'
import { PracticeBreadcrumbs, PracticeFaqSection, type PracticeFaq } from '../PracticePageExtras'

export const metadata = {
  title: { absolute: 'Las Vegas Premises Liability Lawyer | Saggese & Associates' },
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

const premisesLiabilityFaqs: PracticeFaq[] = [
  {
    question: 'Is a slip and fall handled as a premises liability case?',
    answer: 'Often, yes. A claim may involve an unsafe property condition, but a fall alone does not establish liability. The investigation also considers who controlled the area, whether reasonable care was used, and how the condition caused the injury.'
  },
  {
    question: 'What evidence helps after an injury on unsafe property?',
    answer: 'Useful evidence may include photographs of the condition and surrounding area, incident reports, witness details, medical records, footwear or damaged items, and communications with the property owner. Video and inspection records may also matter, so preservation questions should be addressed promptly.'
  },
  {
    question: 'Should I contact a lawyer before speaking with an insurance adjuster?',
    answer: 'A consultation can help you understand requests for a recorded statement or a release, especially when the condition, responsibility, or injuries are disputed. Keep copies of correspondence and ask about applicable deadlines rather than assuming insurance discussions protect a claim.'
  },
  {
    question: 'Does an obvious hazard automatically prevent a Nevada property injury claim?',
    answer: 'No. Nevada law considers the surrounding circumstances and whether reasonable care was exercised; an obvious condition does not automatically resolve liability. The injured person’s own conduct can also affect the analysis.'
  },
  {
    question: 'How long do I have to bring a property injury claim in Nevada?',
    answer: 'NRS 11.190(4)(e) generally provides a two-year period for personal-injury actions based on another person’s wrongful act or neglect. The starting date, claim type, and exceptions require individual analysis. Seek advice promptly; do not assume ongoing treatment or insurance discussions extend the filing period.'
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
        <p className="text-white/75 mt-3">Injured in a fall or another unsafe-property incident? We examine the condition, who controlled the area, and the evidence connecting it to your injuries.</p>
      </header>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-8">
        <article className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg card-hover">
          <p className="mb-4 text-white/90 leading-relaxed">
            An injury at a Las Vegas store, hotel, apartment property, or parking area does not automatically make the property owner responsible. A premises liability claim examines control of the area, reasonable care, and whether an unsafe condition caused the harm. An owner, tenant, or another party may have different responsibilities; identifying the right party is part of the investigation.
          </p>

          <p className="mb-4 text-white/90 leading-relaxed">
            Records about the property and the injury serve different purposes. Inspection and maintenance evidence may explain the condition, while treatment records and work restrictions help show its consequences. An incident report can be useful without resolving every question about responsibility.
          </p>

          <h2 className="mt-4 text-xl font-semibold text-white">Slip and Fall Cases on Unsafe Property</h2>
          <p className="mt-3 text-white/80 leading-relaxed">
            A slip or trip may involve a spill, damaged flooring, an obstructed walkway, a stairway defect, or inadequate lighting. The investigation should identify the particular condition and how it contributed to the incident. Serious falls may also involve <Link href="/practice/brain-and-spine-injury" className="text-[#d4af37] underline-offset-4 hover:underline">brain or spine injuries</Link>, which need their own medical documentation.
          </p>

          <h2 className="mt-6 text-xl font-semibold text-white">Notice and Reasonable Care Under Nevada Law</h2>
          <p className="mt-3 text-white/80 leading-relaxed">
            How the hazard arose matters. A condition created by the business or its employees raises different notice questions from a spill left by another customer. In the latter situation, actual knowledge or evidence that the business should have discovered the hazard can be important. Inspection practices and recurring conditions may matter; notice is not simply whether someone admitted seeing the hazard.
          </p>
          <p className="mt-3 text-white/80 leading-relaxed">
            A hazard being visible does not automatically end the inquiry. In <a href="https://law.justia.com/cases/nevada/supreme-court/2012/128-nev-adv-op-no-71.html" className="text-[#d4af37] underline">Foster v. Costco</a>, the Nevada Supreme Court explained that obviousness is part of evaluating reasonable care and the surrounding circumstances. The injured person&apos;s own actions can also affect the case.
          </p>

          <h2 className="mt-6 text-xl font-semibold text-white">Evidence After a Las Vegas Property Injury</h2>
          <ul className="mt-3 space-y-3 text-white/80">
            <li><strong className="text-white">The location and condition:</strong> note the date, time, exact area, lighting, warnings, and what caused the fall. Take photographs only when it is safe to do so.</li>
            <li><strong className="text-white">Reports and witnesses:</strong> keep any incident-report number, communications, and witness contact information. Save original photos and messages.</li>
            <li><strong className="text-white">Video and property records:</strong> identify possible cameras and ask promptly about preserving relevant footage. Inspection logs, repairs, and earlier complaints may also help explain the condition.</li>
            <li><strong className="text-white">Injuries and losses:</strong> preserve treatment records, bills, work restrictions, and notes about daily activities affected by the injury.</li>
          </ul>
          <p className="mt-3 text-white/80 leading-relaxed">Video retention varies, and a request does not guarantee that footage is available or will be provided. A lawyer can assess appropriate preservation steps and requests for records.</p>

          <h2 className="mt-6 text-xl font-semibold text-white">Negligent Security and Hotel Property Claims</h2>
          <p className="mt-3 text-white/80 leading-relaxed">
            Security-related injuries require their own analysis of foreseeable risks, reasonable precautions, and the applicable duties. A criminal act on the property does not by itself establish owner liability. Some hotel and innkeeper claims involving another person&apos;s wrongful act fall under <a href="https://www.leg.state.nv.us/NRS/NRS-651.html#NRS651Sec015" className="text-[#d4af37] underline">NRS 651.015</a>, which contains specific foreseeability and due-care rules. These should not be treated as identical to a routine spill claim.
          </p>

          <h2 className="mt-6 text-xl font-semibold text-white">Injuries, Losses, and Disputed Fault</h2>
          <p className="mt-3 text-white/80 leading-relaxed">
            Depending on liability and proof, an injury claim may include medical expenses, lost earnings, and pain and suffering. Future losses require evidence. Medical records should explain the injury and treatment, while wage and other records support the financial effects.
          </p>
          <p className="mt-3 text-white/80 leading-relaxed">
            Under <a href="https://www.leg.state.nv.us/NRS/NRS-041.html#NRS041Sec141" className="text-[#d4af37] underline">NRS 41.141</a>, when comparative negligence applies, the injured person&apos;s negligence must not exceed that of the defendant or combined defendants from whom recovery is sought. A qualifying recovery is reduced by that person&apos;s share. Multiple-party cases and exceptions require individual analysis.
          </p>

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
          <p className="text-sm text-white/80">The condition, control of the area, notice where relevant, and the connection to the injury all matter. A fall alone does not decide responsibility.</p>

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
        <h2 className="text-xl font-semibold text-white mb-3">Preparing for a Premises Liability Consultation</h2>
        <p className="text-white/80 leading-relaxed mb-3">Bring the property name and location, incident details, photos, any report or witness information, treatment paperwork, and insurance correspondence you already have. We review the condition, potential responsibility, and documented injuries to identify the questions that need investigation. Learn more about <Link href="/about/marc-a-saggese" className="text-[#d4af37] underline-offset-4 hover:underline">Marc A. Saggese</Link> and the firm&apos;s background.</p>
        <p className="text-white/80 leading-relaxed">Call <a href="tel:17027788883" className="inline-flex items-center rounded-xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-3 py-1.5 text-sm font-bold text-[#0e0e0e] no-underline shadow-[0_8px_22px_rgba(212,175,55,0.18)]">702-778-8883</a> or use our contact form.</p>
      </section>

      <PracticeFaqSection title="Premises Liability Questions" faqs={premisesLiabilityFaqs} />

      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg mb-8">
        <h2 className="text-xl font-semibold text-white mb-3">Nevada Legal Sources</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm text-white/80">
          <li><a href="https://law.justia.com/cases/nevada/supreme-court/1993/22617-1.html" className="text-[#d4af37] underline">Sprague v. Lucky Stores: hazardous conditions and notice</a></li>
          <li><a href="https://law.justia.com/cases/nevada/supreme-court/2012/128-nev-adv-op-no-71.html" className="text-[#d4af37] underline">Foster v. Costco: reasonable care and obvious conditions</a></li>
          <li><a href="https://www.leg.state.nv.us/NRS/NRS-651.html#NRS651Sec015" className="text-[#d4af37] underline">NRS 651.015: covered innkeeper liability</a></li>
          <li><a href="https://www.leg.state.nv.us/NRS/NRS-041.html#NRS041Sec141" className="text-[#d4af37] underline">NRS 41.141: comparative negligence</a></li>
          <li><a href="https://www.leg.state.nv.us/NRS/NRS-011.html#NRS011Sec190" className="text-[#d4af37] underline">NRS 11.190: filing periods and exceptions</a></li>
          <li><a href="https://ag.nv.gov/uploadedfiles/agnvgov/content/issues/09292021_nv-jury-instructions-civil-2018-pdf-version.pdf#page=81" className="text-[#d4af37] underline">Nevada civil jury instructions, 2018 edition: damages</a></li>
        </ul>
      </section>

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
