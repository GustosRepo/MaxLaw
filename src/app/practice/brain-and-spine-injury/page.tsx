import React from 'react'
import PracticeStructuredData from '../PracticeStructuredData'
import { SITE_URL } from '@/lib/constants'
import Link from 'next/link'
import { PracticeBreadcrumbs, PracticeFaqSection, type PracticeFaq } from '../PracticePageExtras'

export const metadata = {
  title: { absolute: 'Las Vegas Brain & Spine Injury Lawyer | Saggese & Associates' },
  description: 'Traumatic brain & spinal cord injury attorneys in Las Vegas — life‑care planning, medical experts & full compensation pursuit. Free consultation.',
  alternates: { canonical: `${SITE_URL}/practice/brain-and-spine-injury` },
  openGraph: {
    title: 'Las Vegas Brain & Spine Injury Lawyer',
    description: 'Life‑changing TBI & spinal injury advocacy. Free consultation.',
    url: `${SITE_URL}/practice/brain-and-spine-injury`,
    type: 'article'
  },
  twitter: {
    card: 'summary',
    title: 'Las Vegas Brain & Spine Injury Lawyer',
    description: 'Life‑changing TBI & spinal injury advocacy. Free consultation.'
  }
}

const brainSpineFaqs: PracticeFaq[] = [
  {
    question: 'Can brain or spine injury symptoms appear after the scene of an accident?',
    answer: 'Some brain injury symptoms emerge hours or days later, and a concussion does not require loss of consciousness. A medical professional should evaluate new or worsening symptoms. Keep treatment and follow-up records to help document when symptoms began and how they changed.'
  },
  {
    question: 'What records can be important in a brain or spine injury claim?',
    answer: 'Useful records can include emergency care notes, imaging reports, specialist evaluations, rehabilitation recommendations, work restrictions, and a dated account of changes in daily activities. Earlier medical records may also help distinguish a new injury or aggravation from a prior condition.'
  },
  {
    question: 'What types of incidents can lead to brain or spine injuries?',
    answer: 'Brain and spine injuries can follow car, truck, or motorcycle crashes, pedestrian or bicycle collisions, falls on property, product-related incidents, or other events that jolt or impact the head, neck, or back.',
    links: [
      { text: 'car', href: '/practice/car-accidents' },
      { text: 'truck', href: '/practice/truck-accidents' },
      { text: 'falls on property', href: '/practice/premises-liability' },
      { text: 'product-related incidents', href: '/practice/product-liability' }
    ]
  },
  {
    question: 'Is a spine injury the same as a spinal cord injury?',
    answer: 'The terms are not interchangeable. The spinal cord is nerve tissue within the spine. A medical diagnosis is needed to identify what structures were injured and whether the cord was damaged; the severity and future effects cannot be assumed from the label alone.'
  },
  {
    question: 'How are future treatment costs evaluated in an injury claim?',
    answer: 'Future losses need evidence connecting them to the incident. Treatment recommendations, rehabilitation assessments, work restrictions, and appropriate expert opinions can help support projected needs. A diagnosis alone does not establish a fixed settlement amount or guarantee payment for every proposed expense.'
  }
]

export default function BrainSpineInjuryPage() {
  return (
    <>
      <PracticeBreadcrumbs current="Brain & Spine Injury" href="/practice/brain-and-spine-injury" />

      {/* Content only — PracticeLayout provides the outer main/container */}
      <header className="mb-6">
        <div className="relative inline-block">
          <h1 className="text-3xl sm:text-4xl font-['Playfair_Display'] font-bold text-[#d4af37] mb-2">Las Vegas Brain & Spine Injury Lawyer</h1>
          <span className="accent-underline w-full rounded-full" aria-hidden />
        </div>
        <p className="text-white/75 mt-3">Brain and spine injuries can affect work, independence, and family life. We examine responsibility for the incident, medical documentation, and the support needed for recovery.</p>
      </header>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-8">
        <article className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg card-hover">
          <p className="mb-4 text-white/90 leading-relaxed">
            A brain or spine injury claim involves more than naming a diagnosis. The evidence must connect the incident to the injury and explain its effect on daily life. These injuries can follow <Link href="/practice/car-accidents" className="text-[#d4af37] underline-offset-4 hover:underline">car accidents</Link>, truck or motorcycle crashes, or <Link href="/practice/premises-liability" className="text-[#d4af37] underline-offset-4 hover:underline">falls on unsafe property</Link>. The cause of the incident and the resulting injury are separate parts of the investigation.
          </p>

          <p className="mb-4 text-white/90 leading-relaxed">
            For a Las Vegas injury claim, useful information includes what happened, who may be responsible, the treatment received, and any restrictions on work or ordinary activities. Existing health conditions and earlier injuries should be considered alongside the new medical findings, rather than left out of the timeline.
          </p>

          <h2 className="mt-6 text-xl font-semibold text-white">Traumatic Brain Injuries After a Crash or Fall</h2>
          <p className="mt-3 text-white/80 leading-relaxed">
            A concussion is a form of traumatic brain injury. A person can have a concussion without losing consciousness, and symptoms may become noticeable after the event. Changes in memory, concentration, balance, or sleep should be discussed with a medical professional. Medical evaluation establishes the diagnosis; a legal claim also requires evidence of responsibility and the connection to the incident.
          </p>
          <p className="mt-3 text-white/80 leading-relaxed">
            Medical care comes first. After a head injury, call 911 for danger signs such as a worsening headache, repeated vomiting, a seizure, or difficulty waking. The <a href="https://www.cdc.gov/traumatic-brain-injury/signs-symptoms/" className="text-[#d4af37] underline">CDC explains concussion symptoms and emergency warning signs</a>.
          </p>

          <h2 className="mt-6 text-xl font-semibold text-white">Spine and Spinal Cord Injuries</h2>
          <p className="mt-3 text-white/80 leading-relaxed">
            The spinal cord carries nerve signals between the brain and body. Damage can affect movement or sensation, but the extent and effects vary. A spine injury and spinal cord damage should not be treated as interchangeable diagnoses. Records should identify the affected structures, treatment, and functional restrictions. A suspected spinal cord injury is a medical emergency; seek immediate medical attention.
          </p>

          <h2 className="mt-6 text-xl font-semibold text-white">Records That Explain the Injury and Its Impact</h2>
          <ul className="mt-3 space-y-3 text-white/80">
            <li><strong className="text-white">Treatment timeline:</strong> emergency records, imaging reports, specialist findings, rehabilitation notes, and follow-up recommendations.</li>
            <li><strong className="text-white">Work and income:</strong> medical restrictions, missed shifts, wage records, and changes in the tasks a person can perform.</li>
            <li><strong className="text-white">Daily activities:</strong> dated notes about mobility, concentration, household tasks, and help needed from others.</li>
            <li><strong className="text-white">Future needs:</strong> supported recommendations for continued treatment, rehabilitation, equipment, or assistance, rather than an assumed lifetime cost.</li>
          </ul>

          <h2 className="mt-6 text-xl font-semibold text-white">Evaluating Losses in a Nevada Injury Claim</h2>
          <p className="mt-3 text-white/80 leading-relaxed">
            Depending on liability and the evidence, losses may include medical expenses, lost earnings, reduced future earning capacity, and pain and suffering. Future losses need support; a serious diagnosis does not establish a preset award. Medical and vocational opinions can help explain projected care and work limitations. Our <Link href="/practice/insurance-settlements-and-checks" className="text-[#d4af37] underline-offset-4 hover:underline">settlement and payment guide</Link> explains why an offered amount and the amount a client ultimately receives can differ.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="tel:17027788883" className="inline-block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-3 text-sm font-semibold text-[#0e0e0e] shadow-md">Call (702) 778‑8883</a>
            <Link href="/contact" className="inline-block rounded-2xl border border-white/10 px-5 py-3 text-sm text-white/90 text-center">Request a free consultation</Link>
          </div>

        </article>

        <aside className="rounded-2xl border border-white/10 bg-white/4 p-4 shadow-lg">
          <div className="mb-3 text-sm font-semibold text-white">Catastrophic injury impact</div>
          <p className="text-sm text-white/80">Document the diagnosis, the cause of the injury, and changes in daily life. Future care needs require individual medical and financial evidence.</p>

          <div className="mt-4 grid gap-3">
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Medical proof</div>
              <div className="text-lg font-semibold text-[#d4af37]">Records</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Planning</div>
              <div className="text-lg font-semibold text-[#d4af37]">Long-Term</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Related page</div>
              <Link href="/practice/truck-accidents" className="text-lg font-semibold text-[#d4af37] underline-offset-4 hover:underline">Truck Crashes</Link>
            </div>
          </div>
        </aside>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg mb-8">
        <h2 className="text-xl font-semibold text-white mb-3">Preparing for a Brain or Spine Injury Consultation</h2>
        <p className="text-white/80 leading-relaxed mb-3">Bring the records you already have: incident or crash information, treatment paperwork, insurance correspondence, and any work restrictions. A short timeline of symptoms and daily-life changes can help explain the questions that need further investigation. We review the incident evidence, medical documentation, and claimed losses to evaluate the next legal steps.</p>
        <p className="text-white/80 leading-relaxed">Call <a href="tel:17027788883" className="inline-flex items-center rounded-xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-3 py-1.5 text-sm font-bold text-[#0e0e0e] no-underline shadow-[0_8px_22px_rgba(212,175,55,0.18)]">702-778-8883</a> or use our contact form.</p>
      </section>

      <PracticeFaqSection title="Brain and Spine Injury Questions" faqs={brainSpineFaqs} />

      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg mb-8">
        <h2 className="text-xl font-semibold text-white mb-3">Medical and Legal Sources</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm text-white/80">
          <li><a href="https://www.cdc.gov/traumatic-brain-injury/signs-symptoms/" className="text-[#d4af37] underline">CDC: concussion symptoms and danger signs</a></li>
          <li><a href="https://medlineplus.gov/ency/article/000799.htm" className="text-[#d4af37] underline">MedlinePlus: traumatic brain injury</a></li>
          <li><a href="https://medlineplus.gov/spinalcordinjuries.html" className="text-[#d4af37] underline">MedlinePlus: spinal cord injuries</a></li>
          <li><a href="https://ag.nv.gov/uploadedfiles/agnvgov/content/issues/09292021_nv-jury-instructions-civil-2018-pdf-version.pdf#page=81" className="text-[#d4af37] underline">Nevada civil jury instructions, 2018 edition: damages</a></li>
        </ul>
      </section>

      <PracticeStructuredData
        slug="/practice/brain-and-spine-injury"
        serviceType="Las Vegas Brain and Spine Injury Lawyer"
        description="Traumatic brain & spinal cord injury attorneys in Las Vegas — life‑care planning, medical experts & full compensation pursuit. Free consultation."
        keywords={['las vegas brain injury lawyer','spinal cord injury attorney','tbi lawyer nevada']}
        faqs={brainSpineFaqs}
      />
    </>
  )
}
