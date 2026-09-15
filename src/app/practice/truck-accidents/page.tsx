import React from 'react'
import { SITE_URL } from '@/lib/constants'
import PracticeStructuredData from '../PracticeStructuredData'
import Link from 'next/link'
import { PracticeBreadcrumbs } from '../PracticePageExtras'

export const metadata = {
  title: 'Las Vegas Truck Accident Lawyer | Saggese & Associates',
  description: 'Las Vegas truck accident lawyer for semi-truck, tractor-trailer, 18-wheeler, and large commercial truck crash claims. Free consultation.',
  alternates: { canonical: `${SITE_URL}/practice/truck-accidents` },
  openGraph: {
    title: 'Las Vegas Truck Accident Lawyer',
    description: 'Catastrophic commercial vehicle collisions — we handle federal regulations & carriers.',
    url: `${SITE_URL}/practice/truck-accidents`,
    type: 'article'
  }
}

export default function TruckAccidentsPage() {
  return (
    <>
      <PracticeBreadcrumbs current="Truck Accidents" href="/practice/truck-accidents" />
      {/* Content only — provided by PracticeLayout */}
      <header className="mb-6">
        <div className="relative inline-block">
          <h1 className="text-3xl sm:text-4xl font-['Playfair_Display'] font-bold text-[#d4af37] mb-2">Las Vegas Truck Accident Lawyer</h1>
          <span className="accent-underline w-full rounded-full" aria-hidden />
        </div>
        <p className="text-white/75 mt-3">Large truck crashes can cause devastating injuries. We investigate hours-of-service, maintenance, and carrier liability to hold negligent parties accountable.</p>
      </header>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-8">
        <article className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg card-hover">
          <p className="mb-4 text-white/90 leading-relaxed">
            Truck collisions are often governed by federal regulations and involve multiple liable parties — drivers, trucking companies, mechanics, and manufacturers. Our firm has experience coordinating complex investigations and litigation against deep-pocketed defendants.
          </p>

          <p className="mb-4 text-white/90 leading-relaxed">
            This page focuses on semi-trucks, tractor-trailers, 18-wheelers, and large commercial trucks. Claims involving delivery vans, buses, company cars, or other fleet vehicles may fit our <Link href="/practice/commercial-vehicle-accidents" className="text-[#d4af37] underline-offset-4 hover:underline">commercial vehicle accidents</Link> practice area.
          </p>

          <h2 className="mt-4 text-xl font-semibold text-white">Truck Accident Case Factors</h2>
          <ul className="mt-3 space-y-3 text-white/80">
            <li><span className="stat-number">•</span> Truck crashes may involve drivers, carriers, maintenance providers, cargo loaders, or parts manufacturers.</li>
            <li><span className="stat-number">•</span> Driver logs, ELD/ECM data, maintenance records, and inspection records can be important evidence.</li>
            <li><span className="stat-number">•</span> Serious truck crashes may involve <Link href="/practice/brain-and-spine-injury" className="text-[#d4af37] underline-offset-4 hover:underline">brain or spine injury</Link> claims.</li>
            <li><span className="stat-number">•</span> Federal regulations govern hours-of-service and maintenance requirements.</li>
          </ul>

          <p className="mt-4 text-white/80 leading-relaxed">We subpoena driver logs, maintenance records, and GPS/ELD data to build a timeline and assign responsibility. Fatal truck crashes may also require separate <Link href="/practice/wrongful-death" className="text-[#d4af37] underline-offset-4 hover:underline">wrongful death</Link> analysis.</p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="tel:17027788883" className="inline-block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-3 text-sm font-semibold text-[#0e0e0e] shadow-md">Call (702) 778‑8883</a>
            <Link href="/contact" className="inline-block rounded-2xl border border-white/10 px-5 py-3 text-sm text-white/90 text-center">Request a free consultation</Link>
          </div>

        </article>

        <aside className="rounded-2xl border border-white/10 bg-white/4 p-4 shadow-lg">
          <div className="mb-3 text-sm font-semibold text-white">Truck accident complexity</div>
          <p className="text-sm text-white/80">Truck accident claims can involve federal regulations, multiple parties, and complex liability chains.</p>

          <div className="mt-4 grid gap-3">
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Vehicle focus</div>
              <div className="text-lg font-semibold text-[#d4af37]">18-Wheelers</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Evidence</div>
              <div className="text-lg font-semibold text-[#d4af37]">ELD / Logs</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Related page</div>
              <Link href="/practice/commercial-vehicle-accidents" className="text-lg font-semibold text-[#d4af37] underline-offset-4 hover:underline">Fleet Vehicles</Link>
            </div>
          </div>
        </aside>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg mb-8">
        <h3 className="text-lg font-semibold text-white mb-3">How we help</h3>
        <p className="text-white/80 leading-relaxed mb-3">We engage accident reconstructionists and industry experts, obtain ELD and maintenance records, and pursue every available source of compensation.</p>
        <p className="text-white/80 leading-relaxed">Call <a href="tel:17027788883" className="inline-flex items-center rounded-xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-3 py-1.5 text-sm font-bold text-[#0e0e0e] no-underline shadow-[0_8px_22px_rgba(212,175,55,0.18)]">702-778-8883</a> or use our contact form.</p>
      </section>

  {/* Footer removed */}
      <PracticeStructuredData
        slug="/practice/truck-accidents"
        serviceType="Las Vegas Truck Accident Lawyer"
        description="Las Vegas truck accident lawyer for semi-truck, tractor-trailer, 18-wheeler, and large commercial truck crash claims. Free consultation."
        keywords={['las vegas truck accident lawyer','commercial vehicle collision attorney','18 wheeler crash nevada']}
      />
    </>
  )
}
