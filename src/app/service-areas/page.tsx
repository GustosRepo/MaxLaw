import React from 'react'
import StructuredData from '../components/StructuredData'
import Link from 'next/link'
import {
  CRIMINAL_DEFENSE_REPRESENTATION_TYPES,
  PERSONAL_INJURY_REPRESENTATION_TYPES,
} from '../../lib/constants'

export const metadata = {
  title: 'Las Vegas Service Areas | Saggese & Associates',
  description: 'Law firm serving Las Vegas Valley communities including Summerlin, Henderson, North Las Vegas, Spring Valley, Paradise, Enterprise & more. Injury & criminal defense.',
  alternates: { canonical: 'https://www.maxlawnv.com/service-areas' }
}

const AREAS = [
  'Las Vegas', 'Downtown Las Vegas', 'Arts District', 'Summerlin', 'Summerlin South', 'Henderson', 'Green Valley', 'Anthem', 'North Las Vegas', 'Aliante', 'Centennial Hills', 'Spring Valley', 'Paradise', 'Enterprise', 'Southern Highlands', 'Mountains Edge', 'Seven Hills', 'Rhodes Ranch', 'Silverado Ranch', 'The Strip', 'Whitney', 'Sunrise Manor', 'Winchester', 'Boulder City'
]

export default function ServiceAreasPage() {
  const areaStructured = {
    name: 'Service Areas – The Law Offices of Saggese & Associates',
    serviceType: ['Injury Law', 'Criminal Defense Law'],
    areaServed: AREAS.map(a => ({ '@type': 'City', name: a })),
    provider: { '@type': 'LegalService', name: 'The Law Offices of Saggese & Associates' },
    url: 'https://www.maxlawnv.com/service-areas',
    description: 'Comprehensive legal representation across the Las Vegas Valley in injury and criminal defense matters.'
  }

  return (
    <main className="min-h-screen custom-bg bg-gradient-to-br from-[#0e0e0e] to-[#0f0f0f] text-white font-[var(--font-inter)] py-12">
      <StructuredData type="LegalService" data={areaStructured} />
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-[var(--font-playfair)] font-bold text-[#d4af37]">Areas We Serve</h1>
          <div className="mt-3 mx-auto w-40 h-1.5 bg-gradient-to-r from-[#d4af37] to-[#c5a467] rounded-full" />
          <p className="mt-4 text-white/80 max-w-2xl mx-auto text-sm">We provide injury and criminal defense representation throughout the greater Las Vegas Valley. Below is a representative list of communities we regularly serve. If you do not see your area listed, contact us — we likely cover it.</p>
        </header>

        <section className="rounded-2xl p-6 md:p-8 bg-gradient-to-br from-white/5 to-transparent border border-white/10 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Primary Coverage</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
            {AREAS.map(a => (
              <li key={a} className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white/85 hover:bg-white/10 transition">{a}</li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-white/50">Listing for SEO/service disclosure purposes – we handle cases statewide as permitted by admission.</p>
        </section>

        <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-6 bg-gradient-to-br from-white/4 to-transparent border border-white/10">
            <h3 className="text-lg font-semibold mb-3">Injury Representation</h3>
            <ul className="grid grid-cols-1 gap-2 text-sm text-white/80 sm:grid-cols-2">
              {PERSONAL_INJURY_REPRESENTATION_TYPES.map((caseType) => (
                <li key={caseType.label} className="rounded-lg border border-white/10 bg-black/20 px-3 py-2">
                  {caseType.href ? (
                    <Link href={caseType.href} className="hover:text-[#d4af37] hover:underline">
                      {caseType.label}
                    </Link>
                  ) : (
                    caseType.label
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl p-6 bg-gradient-to-br from-white/4 to-transparent border border-white/10">
            <h3 className="text-lg font-semibold mb-3">Criminal Defense</h3>
            <ul className="grid grid-cols-1 gap-2 text-sm text-white/80 sm:grid-cols-2">
              {CRIMINAL_DEFENSE_REPRESENTATION_TYPES.map((caseType) => (
                <li key={caseType.label} className="rounded-lg border border-white/10 bg-black/20 px-3 py-2">{caseType.label}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-12 text-center">
          <h2 className="text-2xl font-[var(--font-playfair)] font-bold mb-4">Have a Case Outside These Areas?</h2>
          <p className="text-white/75 max-w-2xl mx-auto text-sm">We can evaluate matters across Nevada and coordinate with trusted local counsel when appropriate. Reach out — we will give you a direct, practical assessment.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:17027788883" className="rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-6 py-3 text-sm font-semibold text-[#0e0e0e] shadow-[0_10px_30px_rgba(212,175,55,0.2)]">Call (702) 778‑8883</a>
            <Link href="/contact" className="rounded-2xl border border-white/15 px-6 py-3 text-sm text-white/90">Request Consultation</Link>
          </div>
        </section>
      </div>
    </main>
  )
}
