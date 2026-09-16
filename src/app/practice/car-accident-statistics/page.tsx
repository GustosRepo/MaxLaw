import React from 'react'
import Link from 'next/link'
import { SITE_URL } from '@/lib/constants'
import StructuredData from '../../components/StructuredData'
import { PracticeBreadcrumbs } from '../PracticePageExtras'

export const metadata = {
  title: 'Las Vegas & Nevada Car Accident Statistics | Saggese & Associates',
  description: 'Review sourced Nevada and Clark County crash fatality statistics, pedestrian and motorcycle trends, and official traffic-safety data sources for Las Vegas-area drivers.',
  keywords: [
    'las vegas car accident statistics',
    'nevada car accident statistics',
    'nevada crash data',
    'auto collision stats nevada'
  ],
  alternates: { canonical: `${SITE_URL}/practice/car-accident-statistics` },
  openGraph: {
    title: 'Las Vegas & Nevada Car Accident Statistics',
    description: 'Sourced Nevada and Clark County crash fatality statistics for Las Vegas-area drivers.',
    url: `${SITE_URL}/practice/car-accident-statistics`,
    type: 'article'
  },
  twitter: { card: 'summary', title: 'Las Vegas & Nevada Car Accident Statistics', description: 'Sourced Nevada and Clark County crash fatality statistics.' }
}

const nevadaFatalityStats = [
  { value: '417', label: 'traffic fatalities' },
  { value: '108', label: 'pedestrian fatalities' },
  { value: '89', label: 'motorcyclist fatalities' },
  { value: '15', label: 'pedalcyclist fatalities' },
]

const clarkCountyStats = [
  { year: '2024', fatalities: '296', crashes: '270', note: 'state-reported fatality and fatal-crash figures' },
  { year: '2025', fatalities: '235', crashes: '229', note: 'preliminary state-reported fatality and fatal-crash figures' },
]

const sourceLinks = [
  {
    name: 'NHTSA FARS Encyclopedia',
    href: 'https://www-fars.nhtsa.dot.gov/States/StatesCrashesAndAllVictims.aspx',
    description: 'Finalized statewide 2024 Nevada fatality figures.',
  },
  {
    name: 'Nevada Department of Transportation Crash Data and Tools',
    href: 'https://www.dot.nv.gov/safety/crash-data-and-tools',
    description: 'Official Nevada crash data hub and public data resources.',
  },
  {
    name: 'Zero Fatalities Nevada Crash Data',
    href: 'https://zerofatalitiesnv.com/nevadacrashdata/',
    description: 'Nevada traffic-safety dashboards, crash facts, and fatal reports.',
  },
  {
    name: 'Nevada Office of Traffic Safety 2024-2025 State Fatal Report',
    href: 'https://zerofatalitiesnv.com/app/uploads/2026/04/2024-2025-STATE-FATAL-REPORT-4.6.26.pdf',
    description: 'State-reported Clark County and preliminary 2025 fatality figures, dated April 6, 2026.',
  },
]

function StatCard({ value, label, detail }: { value: string; label: string; detail?: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-neutral-950/70 p-4">
      <div className="text-3xl font-bold text-[#d4af37]">{value}</div>
      <div className="mt-1 text-sm font-semibold text-white">{label}</div>
      {detail && <div className="mt-2 text-xs leading-relaxed text-white/60">{detail}</div>}
    </div>
  )
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
        <p className="text-white/75 mt-3">This page summarizes recent official Nevada and Clark County traffic-safety data. Fatality statistics describe broad roadway trends; they do not determine fault, liability, damages, case value, or the outcome of any individual case.</p>
      </header>

      <section className="space-y-8 mb-8">
        <article className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg card-hover">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white">2024 Nevada Traffic Fatalities</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/75">NHTSA FARS provides finalized statewide fatal-crash and fatality data. The figures below are final 2024 Nevada fatality counts from FARS.</p>
            </div>
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#d4af37]">Final FARS data</div>
          </div>
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {nevadaFatalityStats.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} detail="Nevada, 2024" />
            ))}
          </div>
          <p className="mt-4 text-xs leading-relaxed text-white/60">Source: NHTSA FARS Encyclopedia, 2024 Nevada statewide data.</p>
        </article>

        <article className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg card-hover">
          <h2 className="text-xl font-semibold text-white">Clark County Traffic Fatalities</h2>
          <p className="mt-2 text-sm leading-relaxed text-white/75">The Nevada Office of Traffic Safety publishes state and local fatality reports for current Nevada roadway-safety monitoring. The Clark County figures below come from the 2024-2025 State Fatal Report dated April 6, 2026.</p>
          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
            {clarkCountyStats.map((stat) => (
              <div key={stat.year} className="rounded-xl border border-white/10 bg-neutral-950/70 p-4">
                <div className="text-sm font-semibold uppercase tracking-[0.16em] text-[#d4af37]">{stat.year}</div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <StatCard value={stat.fatalities} label="traffic fatalities" detail="Clark County" />
                  <StatCard value={stat.crashes} label="fatal crashes" detail="Clark County" />
                </div>
                <p className="mt-3 text-xs leading-relaxed text-white/60">{stat.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs leading-relaxed text-white/60">Note: 2025 figures are preliminary and state-reported. Fatal crashes and traffic fatalities are different measures and are shown separately.</p>
        </article>

        <article className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg card-hover">
          <h2 className="text-xl font-semibold text-white">Pedestrian and Motorcycle Fatalities</h2>
          <p className="mt-2 text-sm leading-relaxed text-white/75">Clark County's 2024 state-reported fatalities included serious losses among vulnerable road users and motorcyclists.</p>
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <StatCard value="97" label="pedestrian fatalities" detail="Clark County, 2024 state-reported" />
            <StatCard value="62" label="motorcycle fatalities" detail="Clark County, 2024 state-reported" />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/75">For related information, see the firm's pages for <Link href="/practice/crosswalk-and-pedestrian-accidents" className="text-[#d4af37] underline-offset-4 hover:underline">pedestrian and crosswalk accidents</Link> and <Link href="/practice/motorcycle-accidents" className="text-[#d4af37] underline-offset-4 hover:underline">motorcycle accidents</Link>.</p>
        </article>

        <article className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg card-hover">
          <h2 className="text-xl font-semibold text-white">Understanding the Data</h2>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-white/80">
            <p>NHTSA FARS is the federal system for finalized fatal-crash and fatality data. Nevada OTS reports are useful for more current state and local context, including Clark County reporting.</p>
            <p>Preliminary state-reported totals may change when data is finalized. Fatality statistics also do not represent all crashes, all injuries, all insurance claims, or all people affected by collisions.</p>
          </div>
        </article>

        <article className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg card-hover">
          <h2 className="text-xl font-semibold text-white">What Crash Statistics Can and Cannot Show</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/80">Traffic statistics can show broad roadway-safety patterns and the scale of fatal crashes in Nevada and Clark County. They do not, by themselves, establish fault, negligence, liability, damages, case value, or what may happen in a specific claim.</p>
        </article>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Related Las Vegas Car Accident Resources</h2>
        <p className="text-white/80 leading-relaxed">If you were injured in a crash and need help understanding the claim process, visit the firm's <Link href="/practice/car-accidents" className="text-[#d4af37] underline-offset-4 hover:underline">Las Vegas car accident representation</Link> page.</p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <Link href="/practice/cell-phone-related-accidents" className="rounded-xl border border-white/10 px-3 py-2 text-white/80 hover:border-[#d4af37]/40 hover:text-[#d4af37]">Distracted Driving</Link>
          <Link href="/practice/underinsured-and-uninsured-accidents" className="rounded-xl border border-white/10 px-3 py-2 text-white/80 hover:border-[#d4af37]/40 hover:text-[#d4af37]">UM/UIM Accidents</Link>
          <Link href="/practice/crosswalk-and-pedestrian-accidents" className="rounded-xl border border-white/10 px-3 py-2 text-white/80 hover:border-[#d4af37]/40 hover:text-[#d4af37]">Pedestrian Accidents</Link>
          <Link href="/practice/motorcycle-accidents" className="rounded-xl border border-white/10 px-3 py-2 text-white/80 hover:border-[#d4af37]/40 hover:text-[#d4af37]">Motorcycle Accidents</Link>
        </div>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg mb-8">
        <h3 className="text-lg font-semibold text-white mb-3">How we help</h3>
        <p className="text-white/80 leading-relaxed mb-3">Saggese & Associates offers a free consultation to discuss your accident and help ensure you take the right legal steps. We will do everything possible to help you receive the compensation you deserve.</p>
        <p className="text-white/80 leading-relaxed">Call our law office at <a href="tel:17027788883" className="inline-flex items-center rounded-xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-3 py-1.5 text-sm font-bold text-[#0e0e0e] no-underline shadow-[0_8px_22px_rgba(212,175,55,0.18)]">702-778-8883</a> to speak with an attorney, or fill out our contact form to email us.</p>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Sources</h2>
        <ul className="space-y-3 text-sm text-white/80">
          {sourceLinks.map((source) => (
            <li key={source.href} className="rounded-xl border border-white/10 bg-neutral-950/60 p-4">
              <a href={source.href} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#d4af37] underline-offset-4 hover:underline">{source.name}</a>
              <p className="mt-1 leading-relaxed text-white/65">{source.description}</p>
            </li>
          ))}
        </ul>
      </section>

  {/* Footer removed: global footer handles copyright */}
      <StructuredData
        type="WebPage"
        data={{
          name: 'Las Vegas & Nevada Car Accident Statistics',
          url: `${SITE_URL}/practice/car-accident-statistics`,
          description: 'Sourced Nevada and Clark County crash fatality statistics, pedestrian and motorcycle trends, and official traffic-safety data sources for Las Vegas-area drivers.',
          about: ['Las Vegas car accident statistics', 'Nevada crash fatality data', 'Clark County traffic fatalities'],
          isPartOf: {
            '@type': 'WebSite',
            name: 'The Law Offices of Saggese & Associates',
            url: SITE_URL
          },
          citation: sourceLinks.map((source) => source.href)
        }}
      />
    </>
  )
}
