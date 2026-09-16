import React from 'react'
// Removed <Head>; using Next.js metadata & structured data component
import PracticeStructuredData from '../PracticeStructuredData'
import { SITE_URL } from '@/lib/constants'
import Link from 'next/link'
import { PracticeBreadcrumbs, PracticeFaqSection, type PracticeFaq } from '../PracticePageExtras'

export const metadata = {
  title: 'Las Vegas Brain & Spine Injury Lawyer | Saggese & Associates',
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
    answer: 'Yes. Loss of consciousness is not required, and symptoms are not always obvious at the scene. Documenting symptoms, treatment, follow-up appointments, and changes in work, mobility, or daily activities can help create a clearer medical timeline.'
  },
  {
    question: 'What records can be important in a brain or spine injury claim?',
    answer: 'Records may include emergency care records, imaging, specialist evaluations, rehabilitation notes, symptom timelines, work restrictions, and documentation of daily-life limitations. These materials can help document the injury, treatment, and ongoing effects.'
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
        <p className="text-white/75 mt-3">Catastrophic brain and spinal injuries change lives. We coordinate medical experts, rehabilitation planning, and long-term recovery strategies to protect your future.</p>
      </header>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-8">
        <article className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg card-hover">
          <p className="mb-4 text-white/90 leading-relaxed">
            Brain and spine injuries can follow car, truck, or motorcycle crashes, pedestrian or bicycle collisions, falls on property, and other incidents that jolt or impact the head, neck, or back. These claims may involve a concussion or other traumatic brain injury, as well as injuries to the vertebrae, discs, nerves, or spinal cord. Loss of consciousness is not required, and symptoms are not always obvious at the scene.
          </p>

          <p className="mb-4 text-white/90 leading-relaxed">
            Brain and spine injury claims often require detailed medical documentation, specialist input, rehabilitation records, and a clear timeline of symptoms. We focus on how the injury affects work, mobility, daily activities, potential future treatment needs, and long-term quality of life.
          </p>

          <h2 className="mt-4 text-xl font-semibold text-white">Brain and Spine Injury Case Factors</h2>
          <ul className="mt-3 space-y-3 text-white/80">
            <li><span className="stat-number">•</span> Medical records, specialist evaluations, rehabilitation plans, and symptom timelines can shape the value of a claim.</li>
            <li><span className="stat-number">•</span> Brain and spine injuries may arise from major crashes, falls, unsafe products, or other serious incidents.</li>
            <li><span className="stat-number">•</span> Long-term care needs, work limitations, and daily-life changes should be documented carefully.</li>
          </ul>

          <p className="mt-4 text-white/80 leading-relaxed">Our attorneys work with neurologists, physiatrists, and vocational experts to develop settlement structures or trial strategies that reflect long-term needs.</p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="tel:17027788883" className="inline-block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-3 text-sm font-semibold text-[#0e0e0e] shadow-md">Call (702) 778‑8883</a>
            <Link href="/contact" className="inline-block rounded-2xl border border-white/10 px-5 py-3 text-sm text-white/90 text-center">Request a free consultation</Link>
          </div>

        </article>

        <aside className="rounded-2xl border border-white/10 bg-white/4 p-4 shadow-lg">
          <div className="mb-3 text-sm font-semibold text-white">Catastrophic injury impact</div>
          <p className="text-sm text-white/80">Brain and spine injuries require comprehensive legal advocacy to address lifetime care needs and financial security.</p>

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
        <h2 className="text-lg font-semibold text-white mb-3">How we help</h2>
        <p className="text-white/80 leading-relaxed mb-3">We retain top medical experts, create life-care plans, and pursue damages for rehabilitation, assistive technology, and long-term support services.</p>
        <p className="text-white/80 leading-relaxed">Call <a href="tel:17027788883" className="inline-flex items-center rounded-xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-3 py-1.5 text-sm font-bold text-[#0e0e0e] no-underline shadow-[0_8px_22px_rgba(212,175,55,0.18)]">702-778-8883</a> or use our contact form.</p>
      </section>

      <PracticeFaqSection title="Brain and Spine Injury Questions" faqs={brainSpineFaqs} />

  {/* Footer removed */}
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
