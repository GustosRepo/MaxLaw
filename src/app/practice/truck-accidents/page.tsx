import React from 'react'
import { SITE_URL } from '@/lib/constants'
import PracticeStructuredData from '../PracticeStructuredData'
import Link from 'next/link'

export const metadata = {
  title: 'Las Vegas Truck Accident Lawyer | Saggese & Associates',
  description: 'Complex commercial truck & 18-wheeler collision claims. Federal regs, multiple parties, catastrophic injuries. Free consultation (702) 778‑8883.',
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
      {/* Content only — provided by PracticeLayout */}
      <header className="mb-6">
        <div className="relative inline-block">
          <h1 className="text-3xl sm:text-4xl font-['Playfair_Display'] font-bold text-[#d4af37] mb-2">Truck Accidents</h1>
          <span className="accent-underline w-full rounded-full" aria-hidden />
        </div>
        <p className="text-white/75 mt-3">Large trucks and commercial vehicles cause devastating injuries. We investigate hours-of-service, maintenance, and carrier liability to hold negligent parties accountable.</p>
      </header>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-8">
        <article className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg card-hover">
          <p className="mb-4 text-white/90 leading-relaxed">
            Truck collisions are often governed by federal regulations and involve multiple liable parties — drivers, trucking companies, mechanics, and manufacturers. Our firm has experience coordinating complex investigations and litigation against deep-pocketed defendants.
          </p>

          <p className="mb-4 text-white/90 leading-relaxed">
            Large trucks and commercial vehicles cause devastating injuries. We investigate hours-of-service, maintenance, and carrier liability to hold negligent parties accountable with regulatory and carrier investigations.
          </p>

          <h3 className="mt-4 text-lg font-semibold text-white">Facts about truck accidents</h3>
          <ul className="mt-3 space-y-3 text-white/80">
            <li><span className="stat-number">•</span> Commercial trucks are involved in over <strong className="text-[#d4af37]">500,000</strong> accidents annually.</li>
            <li><span className="stat-number">•</span> Truck accidents result in <strong className="text-[#d4af37]">5,000+</strong> fatalities each year.</li>
            <li><span className="stat-number">•</span> Driver fatigue contributes to <strong className="text-[#d4af37]">13%</strong> of commercial vehicle crashes.</li>
            <li><span className="stat-number">•</span> Brake problems account for <strong className="text-[#d4af37]">29%</strong> of truck accidents.</li>
            <li><span className="stat-number">•</span> Federal regulations govern hours-of-service and maintenance requirements.</li>
          </ul>

          <p className="mt-4 text-white/80 leading-relaxed">We subpoena driver logs, maintenance records, and GPS/ELD data to build a timeline and assign responsibility.</p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="tel:17027788883" className="inline-block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-3 text-sm font-semibold text-[#0e0e0e] shadow-md">Call (702) 778‑8883</a>
            <Link href="/contact" className="inline-block rounded-2xl border border-white/10 px-5 py-3 text-sm text-white/90 text-center">Request a free consultation</Link>
          </div>

        </article>

        <aside className="rounded-2xl border border-white/10 bg-white/4 p-4 shadow-lg">
          <div className="mb-3 text-sm font-semibold text-white">Truck accident complexity</div>
          <p className="text-sm text-white/80">Commercial vehicle accidents involve federal regulations, multiple parties, and complex liability chains requiring specialized legal expertise.</p>

          <div className="mt-4 grid gap-3">
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Annual accidents</div>
              <div className="text-lg font-semibold text-[#d4af37]">500,000+</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Fatalities</div>
              <div className="text-lg font-semibold text-[#d4af37]">5,000+</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Brake issues</div>
              <div className="text-lg font-semibold text-[#d4af37]">29%</div>
            </div>
          </div>
        </aside>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg mb-8">
        <h3 className="text-lg font-semibold text-white mb-3">How we help</h3>
        <p className="text-white/80 leading-relaxed mb-3">We engage accident reconstructionists and industry experts, obtain ELD and maintenance records, and pursue every available source of compensation.</p>
        <p className="text-white/80 leading-relaxed">Call <a href="tel:17027788883" className="underline" style={{ textDecorationColor: '#d4af37' }}>702-778-8883</a> or use our contact form.</p>
      </section>

  {/* Footer removed */}
      <PracticeStructuredData
        slug="/practice/truck-accidents"
        serviceType="Las Vegas Truck Accident Lawyer"
        description="Complex commercial truck & 18-wheeler collision claims. Federal regs, multiple parties, catastrophic injuries. Free consultation."
        keywords={['las vegas truck accident lawyer','commercial vehicle collision attorney','18 wheeler crash nevada']}
        faqs={[
          { question: 'Who can be liable in a truck accident?', answer: 'Driver, carrier, maintenance provider, cargo loader, or parts manufacturer may share liability.' },
          { question: 'What evidence is critical?', answer: 'Driver logs, ELD/ECM data, maintenance & inspection records, and reconstruction analyses.' }
        ]}
      />
    </>
  )
}
