import React from 'react'
// Removed <Head>; using Next.js metadata & structured data component
import PracticeStructuredData from '../PracticeStructuredData'
import { SITE_URL } from '@/lib/constants'
import Link from 'next/link'

export const metadata = {
  title: 'Las Vegas Brain & Spine Injury Lawyer | Saggese & Associates',
  description: 'Traumatic brain & spinal cord injury attorneys in Las Vegas — life‑care planning, medical experts & full compensation pursuit. Free consultation.',
  alternates: { canonical: `${SITE_URL}/practice/brain-and-spine-injury` },
  openGraph: {
    title: 'Las Vegas Brain & Spine Injury Lawyer',
    description: 'Life‑changing TBI & spinal injury advocacy. Free consultation.',
    url: `${SITE_URL}/practice/brain-and-spine-injury`,
    type: 'article'
  }
}

export default function BrainSpineInjuryPage() {
  return (
    <>

      {/* Content only — PracticeLayout provides the outer main/container */}
      <header className="mb-6">
        <div className="relative inline-block">
          <h1 className="text-4xl font-['Playfair_Display'] font-bold text-[#d4af37] mb-2">Brain & Spine Injury</h1>
          <span className="accent-underline w-full rounded-full" aria-hidden />
        </div>
        <p className="text-white/75 mt-3">Catastrophic brain and spinal injuries change lives. We coordinate medical experts, rehabilitation planning, and long-term recovery strategies to protect your future.</p>
      </header>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-8">
        <article className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg card-hover">
          <p className="mb-4 text-white/90 leading-relaxed">
            These injuries often require lifelong care and complex damages calculations. We document current and future medical needs, lost earning capacity, and life-care planning to seek full compensation.
          </p>

          <p className="mb-4 text-white/90 leading-relaxed">
            Catastrophic brain and spinal injuries change lives. We coordinate medical experts, rehabilitation planning, and long-term recovery strategies to protect your future with specialized advocacy.
          </p>

          <h3 className="mt-4 text-lg font-semibold text-white">Facts about brain & spine injuries</h3>
          <ul className="mt-3 space-y-3 text-white/80">
            <li><span className="stat-number">•</span> <strong className="text-[#d4af37]">2.87 million</strong> TBI-related deaths, hospitalizations, and ER visits occur annually.</li>
            <li><span className="stat-number">•</span> Spinal cord injuries affect approximately <strong className="text-[#d4af37]">17,000</strong> people per year.</li>
            <li><span className="stat-number">•</span> Lifetime costs can exceed <strong className="text-[#d4af37]">$5 million</strong> for severe injuries.</li>
            <li><span className="stat-number">•</span> Motor vehicle accidents cause <strong className="text-[#d4af37]">38%</strong> of spinal cord injuries.</li>
            <li><span className="stat-number">•</span> Early intervention improves long-term outcomes significantly.</li>
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
              <div className="text-xs text-white/75">TBI incidents</div>
              <div className="text-lg font-semibold text-[#d4af37]">2.87M</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">SCI annual</div>
              <div className="text-lg font-semibold text-[#d4af37]">17,000</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Lifetime costs</div>
              <div className="text-lg font-semibold text-[#d4af37]">$5M+</div>
            </div>
          </div>
        </aside>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg mb-8">
        <h3 className="text-lg font-semibold text-white mb-3">How we help</h3>
        <p className="text-white/80 leading-relaxed mb-3">We retain top medical experts, create life-care plans, and pursue damages for rehabilitation, assistive technology, and long-term support services.</p>
        <p className="text-white/80 leading-relaxed">Call <a href="tel:17027788883" className="underline" style={{ textDecorationColor: '#d4af37' }}>702-778-8883</a> or use our contact form.</p>
      </section>

  {/* Footer removed */}
      <PracticeStructuredData
        slug="/practice/brain-and-spine-injury"
        serviceType="Las Vegas Brain and Spine Injury Lawyer"
        description="Traumatic brain & spinal cord injury attorneys in Las Vegas — life‑care planning, medical experts & full compensation pursuit. Free consultation."
        keywords={['las vegas brain injury lawyer','spinal cord injury attorney','tbi lawyer nevada']}
      />
    </>
  )
}
