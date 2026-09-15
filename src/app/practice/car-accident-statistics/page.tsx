import React from 'react'
import Link from 'next/link'
import { SITE_URL } from '@/lib/constants'
import StructuredData from '../../components/StructuredData'
import { PracticeBreadcrumbs } from '../PracticePageExtras'

export const metadata = {
  title: 'Las Vegas & Nevada Car Accident Statistics | Saggese & Associates',
  description: 'Review Las Vegas and Nevada car accident statistics, common crash factors, and why evidence preservation can matter after a serious collision.',
  keywords: [
    'las vegas car accident statistics',
    'nevada car accident statistics',
    'nevada crash data',
    'auto collision stats nevada'
  ],
  alternates: { canonical: `${SITE_URL}/practice/car-accident-statistics` },
  openGraph: {
    title: 'Las Vegas & Nevada Car Accident Statistics',
    description: 'Crash data insights, common crash factors, and evidence-preservation guidance.',
    url: `${SITE_URL}/practice/car-accident-statistics`,
    type: 'article'
  },
  twitter: { card: 'summary', title: 'Las Vegas & Nevada Car Accident Statistics', description: 'Crash data insights and evidence-preservation guidance.' }
}

export default function CarAccidentStatsPage() {
  return (
    <>
      <PracticeBreadcrumbs current="Car Accident Statistics" href="/practice/car-accident-statistics" />

      {/* Content only — PracticeLayout provides the outer wrapper and sidebar */}

      <header className="mb-6">
        <div className="relative inline-block">
          <h1 className="text-3xl sm:text-4xl font-['Playfair_Display'] font-bold text-[#d4af37] mb-2">Las Vegas &amp; Nevada Car Accident Statistics</h1>
          <span className="accent-underline w-full rounded-full" aria-hidden />
        </div>
        <p className="text-white/75 mt-3">This page summarizes Las Vegas and Nevada car accident statistics, common crash factors, and why evidence preservation can matter after a serious collision.</p>
      </header>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-8">
        <article className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg card-hover">
          <p className="mb-4 text-white/90 leading-relaxed">
            At Saggese & Associates we know how devastating motor vehicle accidents can be. Even though crashes are common, a serious collision is unexpected, and the injuries can be life-altering or, tragically, fatal.
          </p>

          <p className="mb-4 text-white/90 leading-relaxed">
            Our firm has experience prosecuting claims against careless drivers, fleets, and manufacturers whose vehicles failed to meet crashworthiness standards. We aggressively preserve evidence and pursue maximum compensation for injured clients.
          </p>

          <h2 className="mt-4 text-xl font-semibold text-white">Common Crash Factors</h2>
          <ul className="mt-3 space-y-3 text-white/80">
            <li><span className="stat-number">•</span> Auto accidents are a leading cause of injury and death in all age groups.</li>
            <li><span className="stat-number">•</span> Distracted driving — including cellphone use — and aggressive driving remain major contributors to crashes.</li>
            <li><span className="stat-number">•</span> Alcohol, speeding, driver inattention, and vehicle-condition issues can affect how a crash is evaluated.</li>
            <li><span className="stat-number">•</span> Evidence preservation can help connect crash factors to fault, injury, and insurance coverage.</li>
          </ul>

          <p className="mt-4 text-white/80 leading-relaxed">If you are seriously injured, contact Saggese & Associates promptly. Early involvement helps document and preserve evidence and gives your case its best chance for a full recovery. For legal help after a serious crash, visit our <Link href="/practice/car-accidents" className="text-[#d4af37] underline-offset-4 hover:underline">Las Vegas car accident attorney</Link> page.</p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="tel:17027788883" className="inline-block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-3 text-sm font-semibold text-[#0e0e0e] shadow-md">Call (702) 778‑8883</a>
            <Link href="/contact" className="inline-block rounded-2xl border border-white/10 px-5 py-3 text-sm text-white/90 text-center">Request a free consultation</Link>
          </div>

        </article>

        <aside className="rounded-2xl border border-white/10 bg-white/4 p-4 shadow-lg">
          <div className="mb-3 text-sm font-semibold text-white">Why statistics matter</div>
          <p className="text-sm text-white/80">Crash data and case evidence can help explain why preserving records quickly matters after a serious collision.</p>

          <div className="mt-4 grid gap-3">
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Crash factors</div>
              <div className="text-lg font-semibold text-[#d4af37]">Reviewed</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Evidence</div>
              <div className="text-lg font-semibold text-[#d4af37]">Preserved</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Legal help</div>
              <Link href="/practice/car-accidents" className="text-lg font-semibold text-[#d4af37] underline-offset-4 hover:underline">Car Accidents</Link>
            </div>
          </div>
        </aside>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg mb-8">
        <h3 className="text-lg font-semibold text-white mb-3">How we help</h3>
        <p className="text-white/80 leading-relaxed mb-3">Saggese & Associates offers a free consultation to discuss your accident and help ensure you take the right legal steps. We will do everything possible to help you receive the compensation you deserve.</p>
        <p className="text-white/80 leading-relaxed">Call our law office at <a href="tel:17027788883" className="inline-flex items-center rounded-xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-3 py-1.5 text-sm font-bold text-[#0e0e0e] no-underline shadow-[0_8px_22px_rgba(212,175,55,0.18)]">702-778-8883</a> to speak with an attorney, or fill out our contact form to email us.</p>
      </section>

  {/* Footer removed: global footer handles copyright */}
      <StructuredData
        type="WebPage"
        data={{
          name: 'Las Vegas & Nevada Car Accident Statistics',
          url: `${SITE_URL}/practice/car-accident-statistics`,
          description: 'Informational Las Vegas and Nevada car accident statistics, common crash factors, and evidence-preservation guidance for serious collisions.',
          about: ['Las Vegas car accident statistics', 'Nevada crash data', 'traffic collision evidence preservation'],
          isPartOf: {
            '@type': 'WebSite',
            name: 'The Law Offices of Saggese & Associates',
            url: SITE_URL
          }
        }}
      />
    </>
  )
}
