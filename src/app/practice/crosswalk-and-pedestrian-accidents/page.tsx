import React from 'react'
import Link from 'next/link'
import { SITE_URL } from '@/lib/constants'
import PracticeStructuredData from '../PracticeStructuredData'
import { PracticeBreadcrumbs } from '../PracticePageExtras'

export const metadata = {
  title: 'Las Vegas Pedestrian Accident Lawyer | Saggese & Associates',
  description: 'Las Vegas pedestrian & crosswalk accident lawyer protecting injured pedestrians. Free consultation (702) 778‑8883.',
  keywords: [
    'las vegas pedestrian accident lawyer',
    'crosswalk injury attorney nevada',
    'pedestrian hit by car claim',
    'las vegas crosswalk accident attorney'
  ],
  alternates: { canonical: `${SITE_URL}/practice/crosswalk-and-pedestrian-accidents` },
  openGraph: {
    title: 'Las Vegas Pedestrian Accident Lawyer',
    description: 'Crosswalk & pedestrian injury claims – free consultation.',
    url: `${SITE_URL}/practice/crosswalk-and-pedestrian-accidents`,
    type: 'article'
  },
  twitter: {
    card: 'summary',
    title: 'Las Vegas Pedestrian Accident Lawyer',
    description: 'Injured in a crosswalk? Free consultation (702) 778‑8883.'
  }
}

export default function PedestrianAccidentsPage() {
  return (
    <>
      <PracticeBreadcrumbs current="Crosswalk & Pedestrian Accidents" href="/practice/crosswalk-and-pedestrian-accidents" />

      {/* Content only — provided by PracticeLayout */}
      <header className="mb-6">
        <div className="relative inline-block">
          <h1 className="text-3xl sm:text-4xl font-['Playfair_Display'] font-bold text-[#d4af37] mb-2">Las Vegas Pedestrian Accident Lawyer</h1>
          <span className="accent-underline w-full rounded-full" aria-hidden />
        </div>
        <p className="text-white/75 mt-3">Pedestrians are vulnerable. We investigate visibility, right-of-way, signage, and driver behavior to establish liability and protect your recovery.</p>
      </header>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-8">
        <article className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg card-hover">
          <p className="mb-4 text-white/90 leading-relaxed">
            Crosswalk incidents often hinge on subtle factors like sightlines, distraction, and vehicle speed. We work with reconstruction experts and local authorities to recreate events and preserve evidence.
          </p>

          <p className="mb-4 text-white/90 leading-relaxed">
            Pedestrians are vulnerable road users who deserve protection. We investigate visibility, right-of-way, signage, and driver behavior to establish liability and protect your recovery.
          </p>

          <h2 className="mt-4 text-xl font-semibold text-white">Pedestrian Accident Case Factors</h2>
          <ul className="mt-3 space-y-3 text-white/80">
            <li><span className="stat-number">•</span> Visibility, right-of-way, signage, speed, and driver attention can affect liability.</li>
            <li><span className="stat-number">•</span> Police reports, witness statements, photos, and traffic or surveillance video can help preserve evidence.</li>
            <li><span className="stat-number">•</span> Pedestrian crashes may involve severe injuries, including <Link href="/practice/brain-and-spine-injury" className="text-[#d4af37] underline-offset-4 hover:underline">brain or spine injuries</Link>.</li>
          </ul>

          <p className="mt-4 text-white/80 leading-relaxed">Beyond individual claims, pedestrian cases may require careful scene review, witness follow-up, and medical documentation.</p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="tel:17027788883" className="inline-block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-3 text-sm font-semibold text-[#0e0e0e] shadow-md">Call (702) 778‑8883</a>
            <Link href="/contact" className="inline-block rounded-2xl border border-white/10 px-5 py-3 text-sm text-white/90 text-center">Request a free consultation</Link>
          </div>

        </article>

        <aside className="rounded-2xl border border-white/10 bg-white/4 p-4 shadow-lg">
          <div className="mb-3 text-sm font-semibold text-white">Pedestrian safety</div>
          <p className="text-sm text-white/80">Vulnerable road users need careful case development and early evidence preservation.</p>

          <div className="mt-4 grid gap-3">
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Evidence</div>
              <div className="text-lg font-semibold text-[#d4af37]">Video / Witnesses</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Case focus</div>
              <div className="text-lg font-semibold text-[#d4af37]">Crosswalks</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Related page</div>
              <Link href="/practice/car-accidents" className="text-lg font-semibold text-[#d4af37] underline-offset-4 hover:underline">Car Crashes</Link>
            </div>
          </div>
        </aside>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg mb-8">
        <h3 className="text-lg font-semibold text-white mb-3">How we help</h3>
        <p className="text-white/80 leading-relaxed mb-3">We preserve witness statements, traffic camera footage, and scene reports to identify the cause and pursue full compensation for injured pedestrians.</p>
        <p className="text-white/80 leading-relaxed">Call <a href="tel:17027788883" className="inline-flex items-center rounded-xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-3 py-1.5 text-sm font-bold text-[#0e0e0e] no-underline shadow-[0_8px_22px_rgba(212,175,55,0.18)]">702-778-8883</a> or use our contact form.</p>
      </section>

  {/* Footer removed */}
      <PracticeStructuredData
        slug="/practice/crosswalk-and-pedestrian-accidents"
        serviceType="Las Vegas Pedestrian Accident Lawyer"
        description="Las Vegas pedestrian & crosswalk accident lawyer protecting injured pedestrians. Free consultation."
        keywords={['las vegas pedestrian accident lawyer','crosswalk injury attorney','pedestrian hit by car claim las vegas']}
      />
    </>
  )
}
