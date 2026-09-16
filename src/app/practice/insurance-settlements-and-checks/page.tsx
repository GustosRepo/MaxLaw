import React from 'react'
import Link from 'next/link'
import { SITE_URL } from '@/lib/constants'
import PracticeStructuredData from '../PracticeStructuredData'
import { PracticeBreadcrumbs } from '../PracticePageExtras'

export const metadata = {
  title: 'Las Vegas Insurance Settlement Lawyer | Saggese & Associates',
  description: 'Las Vegas insurance settlement lawyer negotiating fair payouts, lien reduction & proper disbursement. Free consultation (702) 778‑8883.',
  keywords: [
    'las vegas insurance settlement lawyer',
    'injury settlement process nevada',
    'lien reduction attorney',
    'injury settlement timeline'
  ],
  alternates: { canonical: `${SITE_URL}/practice/insurance-settlements-and-checks` },
  openGraph: { title: 'Las Vegas Insurance Settlement Lawyer', description: 'Negotiating payouts, lien reductions & structured settlements.', url: `${SITE_URL}/practice/insurance-settlements-and-checks`, type: 'article' },
  twitter: { card: 'summary', title: 'Insurance Settlement Lawyer', description: 'Need help with a settlement? Free consultation.' }
}

export default function InsuranceSettlementsPage() {
  return (
    <>
      <PracticeBreadcrumbs current="Insurance Settlements & Checks" href="/practice/insurance-settlements-and-checks" />

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-8">
        <article className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg card-hover">
          <header className="mb-6">
            <div className="relative inline-block">
              <h1 className="text-3xl sm:text-4xl font-['Playfair_Display'] font-bold text-[#d4af37] mb-2">Insurance Settlements & Checks</h1>
              <span className="accent-underline w-full rounded-full" aria-hidden />
            </div>
            <p className="text-white/75 mt-3">Insurer settlement processes can be confusing. We ensure settlements are fair and checks are properly structured to cover medical liens and future needs.</p>
          </header>

          <p className="mb-4 text-white/90 leading-relaxed">
            Insurance settlement processes involve complex negotiations between multiple parties including insurance companies, medical providers, and legal representatives. Understanding the process is crucial for fair compensation.
          </p>

          <p className="mb-4 text-white/90 leading-relaxed">
            Insurance companies often attempt to minimize payouts. We review settlement offers, negotiate structured settlements when appropriate, and ensure medical liens and subrogation are handled correctly.
          </p>

          <h2 className="mt-4 text-lg font-semibold text-white">Settlement oversight</h2>
          <ul className="mt-3 space-y-3 text-white/80">
            <li><span className="stat-number">•</span> Settlement structures can vary from lump sum to structured payments.</li>
            <li><span className="stat-number">•</span> Medical liens may need to be reviewed before funds are distributed.</li>
            <li><span className="stat-number">•</span> Settlement timing can depend on insurer processing, releases, and lien resolution.</li>
            <li><span className="stat-number">•</span> Tax questions should be reviewed with an appropriate tax professional.</li>
          </ul>

          <p className="mt-4 text-white/80 leading-relaxed">We advise on settlement taxes, lien negotiations, and whether a lump-sum or structured option best serves your long-term needs.</p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="tel:17027788883" className="inline-block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-3 text-sm font-semibold text-[#0e0e0e] cta-glow">Call (702) 778‑8883</a>
            <Link href="/contact" className="inline-block rounded-2xl border border-white/10 px-5 py-3 text-sm text-white/90 text-center cta-glow">Request a free consultation</Link>
          </div>
        </article>

        <aside className="rounded-2xl border border-white/10 bg-white/4 p-4 shadow-lg">
          <div className="mb-3 text-sm font-semibold text-white">Settlement Facts</div>
          <p className="text-sm text-white/80 mb-4">Understanding settlement components ensures you receive fair compensation for your injuries.</p>

          <div className="mt-4 grid gap-3">
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Lien review</div>
              <div className="text-lg font-semibold text-[#d4af37]">Important</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Processing</div>
              <div className="text-lg font-semibold text-[#d4af37]">Varies</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Documentation</div>
              <div className="text-lg font-semibold text-[#d4af37]">Reviewed</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Transparency</div>
              <div className="text-lg font-semibold text-[#d4af37]">Clear</div>
            </div>
          </div>
        </aside>
      </section>

      {/* How we help section */}
  <section className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg mt-8">
        <h2 className="text-lg font-semibold text-white mb-3">How we help</h2>
        <p className="text-white/80 leading-relaxed mb-3">We review offers, negotiate lien reductions, and ensure settlement proceeds are properly disbursed to cover medical care and future needs.</p>
        <p className="text-white/80 leading-relaxed">Call <a href="tel:17027788883" className="inline-flex items-center rounded-xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-3 py-1.5 text-sm font-bold text-[#0e0e0e] no-underline shadow-[0_8px_22px_rgba(212,175,55,0.18)]">702-778-8883</a> or use our contact form.</p>
      </section>
      <PracticeStructuredData
        slug="/practice/insurance-settlements-and-checks"
        serviceType="Las Vegas Insurance Settlement Lawyer"
        description="Las Vegas insurance settlement lawyer negotiating fair payouts, lien reduction & proper disbursement. Free consultation."
        keywords={['las vegas insurance settlement lawyer','lien reduction attorney','injury settlement timeline']}
      />
    </>
  )
}
