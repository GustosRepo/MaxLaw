import React from 'react'
import Link from 'next/link'
import { SITE_URL } from '@/lib/constants'
import PracticeStructuredData from '../../practice/PracticeStructuredData'

export const metadata = {
  title: 'Las Vegas Domestic Violence Defense Lawyer | Saggese & Associates',
  description: 'Domestic violence defense focusing on protection orders, credibility & evidence review. Free consult (702) 778-8883.',
  keywords: [
    'las vegas domestic violence lawyer',
    'dv defense attorney nevada',
    'protection order hearing representation'
  ],
  alternates: { canonical: `${SITE_URL}/criminal-defense/domestic-violence` },
  openGraph: { title: 'Las Vegas Domestic Violence Defense Lawyer', description: 'Defense for protection orders & criminal allegations.', url: `${SITE_URL}/criminal-defense/domestic-violence`, type: 'article' },
  twitter: { card: 'summary', title: 'Domestic Violence Defense Lawyer', description: 'Credibility & evidence focused defense.' }
}

export default function DomesticViolencePage() {
  return (
  <>
      {/* Content only — PracticeLayout provides the outer wrapper and sidebar */}

      <header className="mb-6">
        <div className="relative inline-block">
          <h1 className="text-3xl sm:text-4xl font-['Playfair_Display'] font-bold text-[#d4af37] mb-2">Domestic Violence Defense</h1>
          <span className="accent-underline w-full rounded-full" aria-hidden />
        </div>
        <p className="text-white/75 mt-3">Domestic violence allegations can impact family, employment, and freedom. We approach these cases with sensitivity and strong advocacy.</p>
      </header>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-8">
        <article className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg card-hover">
          <p className="mb-4 text-white/90 leading-relaxed">
            Allegations of domestic violence often carry significant collateral consequences beyond the criminal case, including protection orders, custody complications, and employment issues. We approach these matters with both strategic defense work and sensitivity to family dynamics.
          </p>

          <p className="mb-4 text-white/90 leading-relaxed">
            Our team investigates the incident, reviews medical and police reports, and interviews witnesses and experts to test the credibility of allegations. We also coordinate with family law attorneys when necessary to minimize collateral harm.
          </p>

          <h3 className="mt-4 text-lg font-semibold text-white">Defense priorities</h3>
          <ul className="mt-3 space-y-3 text-white/80">
            <li><span className="stat-number">•</span> Challenge timing and credibility of statements</li>
            <li><span className="stat-number">•</span> Represent clients at protection order hearings</li>
            <li><span className="stat-number">•</span> Seek reduced charges, diversion, or dismissal where appropriate</li>
          </ul>

          <h3 className="mt-4 text-lg font-semibold text-white">Frequently asked questions</h3>
          <ul className="mt-3 space-y-2 text-white/80">
            <li><strong>Will a protection order be issued automatically?</strong> Temporary orders can be entered quickly; we can represent you at hearings to contest or modify those orders.</li>
            <li><strong>Can I see my children?</strong> Custody and visitation may be affected; we coordinate with family law counsel to protect parental rights where possible.</li>
          </ul>

          <p className="mt-4 text-white/80 leading-relaxed">Avoid contacting alleged victims and preserve any relevant messages or documentation. Contact counsel immediately so we can act promptly and effectively.</p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="tel:17027788883" className="inline-block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-3 text-sm font-semibold text-[#0e0e0e] shadow-md cta-glow">Call (702) 778‑8883</a>
            <Link href="/contact" className="inline-block rounded-2xl border border-white/10 px-5 py-3 text-sm text-white/90 text-center cta-glow">Request a free consultation</Link>
          </div>
        </article>

        <aside className="rounded-2xl border border-white/10 bg-white/4 p-4 shadow-lg">
          <div className="mb-3 text-sm font-semibold text-white">Quick facts</div>
          <p className="text-sm text-white/80">Protection orders and criminal charges can have serious, long-term consequences; swift legal action is critical.</p>

          <div className="mt-4 grid gap-3">
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Protection orders</div>
              <div className="text-lg font-semibold text-[#d4af37]">Immediate effect</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Common outcomes</div>
              <div className="text-lg font-semibold text-[#d4af37]">Dismissal / plea / diversion</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Consultation</div>
              <div className="text-lg font-semibold text-[#d4af37]">Free</div>
            </div>
          </div>
        </aside>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg mb-8">
        <h3 className="text-lg font-semibold text-white mb-3">Next steps</h3>
        <p className="text-white/80 leading-relaxed mb-3">Preserve evidence, limit communication, and consult counsel immediately. We will assess options and take swift action to protect your rights and family interests.</p>
        <p className="text-white/80 leading-relaxed">Call our office at <a href="tel:17027788883" className="underline" style={{ textDecorationColor: '#d4af37' }}>702-778-8883</a> or submit the contact form to request a consultation.</p>
      </section>

  {/* Footer removed */}
      <PracticeStructuredData
        slug="/criminal-defense/domestic-violence"
        serviceType="Las Vegas Domestic Violence Defense Lawyer"
        description="Domestic violence defense focusing on protection orders, credibility & evidence review. Free consultation."
        keywords={['las vegas domestic violence lawyer','protection order hearing representation']}
        faqs={[
          { question: 'Will I automatically get a protection order?', answer: 'Temporary orders can issue quickly; hearings allow challenges—early representation matters.' },
          { question: 'Can charges be dismissed?', answer: 'Inconsistencies, lack of evidence, or credibility issues can support dismissal or reduction.' }
        ]}
      />
    </>
  )
}
