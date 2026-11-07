import React from 'react'
import Link from 'next/link'
import { SITE_URL } from '@/lib/constants'
import PracticeStructuredData from '../PracticeStructuredData'
import { PracticeBreadcrumbs } from '../PracticePageExtras'

export const metadata = {
  title: { absolute: 'Las Vegas Insurance Settlement Lawyer | Saggese & Associates' },
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
            <p className="text-white/75 mt-3">An offer, a signed release, and a payment to the client are different stages of an injury settlement. Understand what the agreement resolves, which deductions may apply, and what remains to be done before funds are distributed.</p>
          </header>

          <p className="mb-4 text-white/90 leading-relaxed">
            After an injury, an insurance offer needs to be considered alongside the evidence, available coverage, treatment needs, and terms of the proposed agreement. If the injury followed a crash, our <Link href="/practice/car-accidents" className="text-[#d4af37] underline">Las Vegas car accident representation</Link> page explains the underlying claim and investigation. This page focuses on offers, releases, expenses, and settlement proceeds.
          </p>

          <p className="mb-4 text-white/90 leading-relaxed">
            We review settlement offers and the questions that affect an injury claim&apos;s resolution. A quoted settlement amount does not, by itself, show the amount a client will receive or establish that every related bill has been resolved.
          </p>

          <h2 className="mt-6 text-lg font-semibold text-white">Before Accepting an Offer or Signing a Release</h2>
          <p className="mt-3 text-white/80 leading-relaxed">A settlement generally exchanges payment for resolving the claims covered by the agreement. Read who is being released, which claims are included, and whether the document addresses injury claims, vehicle damage, or both. Do not assume a release can be reopened if treatment later costs more than expected. The decision whether to settle belongs to the client; the agreement&apos;s scope and any applicable exceptions need to be considered before signing.</p>

          <h2 className="mt-6 text-lg font-semibold text-white">Gross Settlement and the Client&apos;s Share</h2>
          <p className="mt-3 text-white/80 leading-relaxed">The gross amount is the total settlement. The client&apos;s share can differ after applicable attorney fees, case expenses, and payments to others with valid claims to the funds. An estimate should identify the proposed deductions rather than treating the gross offer as take-home money.</p>
          <p className="mt-3 text-white/80 leading-relaxed">Under Nevada Rule 1.5(c), a contingency agreement must explain fee calculation, expense deductions, and responsibility for expenses regardless of outcome. The rule also requires a closing written statement showing the outcome and, if there is a recovery, the client&apos;s remittance and how it was calculated. Review your own agreement rather than assuming a standard fee percentage.</p>

          <h2 className="mt-6 text-lg font-semibold text-white">Medical Bills, Liens, and Reimbursement Claims</h2>
          <p className="mt-3 text-white/80 leading-relaxed">A medical bill, a provider&apos;s asserted lien, and an insurer&apos;s reimbursement request are not interchangeable. Identify who is requesting payment, the supporting documents, and whether the claim actually relates to the injury. The validity and amount of an asserted obligation require review; a reduction is not guaranteed.</p>
          <p className="mt-3 text-white/80 leading-relaxed">Medicare is one example with its own recovery process. CMS explains that Medicare may recover injury-related conditional payments after a settlement, judgment, or other payment. An interim conditional-payment total can change as further related payments are identified. That process should not be treated as a rule for every private health plan or every medical bill.</p>

          <h2 className="mt-6 text-lg font-semibold text-white">Why Payment and Distribution Timing Can Differ</h2>
          <p className="mt-3 text-white/80 leading-relaxed">The agreement&apos;s payment conditions, receipt and collection of funds, and unresolved claims to proceeds can affect the steps before distribution. There is no single timeline covering every injury settlement. Nevada Rule 1.15 requires prompt delivery of funds a person is entitled to receive. If interests are disputed, the disputed portion remains separate while the dispute is resolved; undisputed portions must be distributed promptly.</p>

          <h2 className="mt-6 text-lg font-semibold text-white">Questions to Ask About a Proposed Settlement</h2>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-white/80">
            <li>Which claims and parties does the release cover?</li>
            <li>What evidence supports the offer and any future-loss assumptions?</li>
            <li>What fees, expenses, or third-party payments are included in the estimated deductions?</li>
            <li>Which balances or reimbursement claims are still being checked or disputed?</li>
            <li>What payment conditions remain, and when will an updated distribution estimate be available?</li>
            <li>Is payment a lump sum or periodic payments, and what does the agreement require?</li>
          </ul>

          <p className="mt-4 text-white/80 leading-relaxed">Tax treatment depends on the nature of the payment. IRS guidance distinguishes physical-injury compensation from other categories, including punitive damages. Do not assume every payment is tax-free; review the allocation and reporting questions with an appropriate tax professional.</p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="tel:17027788883" className="inline-block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-3 text-sm font-semibold text-[#0e0e0e] cta-glow">Call (702) 778‑8883</a>
            <Link href="/contact" className="inline-block rounded-2xl border border-white/10 px-5 py-3 text-sm text-white/90 text-center cta-glow">Request a free consultation</Link>
          </div>
        </article>

        <aside className="rounded-2xl border border-white/10 bg-white/4 p-4 shadow-lg">
          <div className="mb-3 text-sm font-semibold text-white">Settlement Facts</div>
          <p className="text-sm text-white/80 mb-4">Review the agreement, proposed deductions, and unresolved obligations together. Neither an offer nor a timeline guarantees a particular outcome.</p>

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
        <p className="text-white/80 leading-relaxed mb-3">We review injury settlement offers, address questions about asserted liens and reimbursement, and explain the proposed distribution. The available options depend on the claim, supporting records, and engagement terms.</p>
        <p className="text-white/80 leading-relaxed">Call <a href="tel:17027788883" className="inline-flex items-center rounded-xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-3 py-1.5 text-sm font-bold text-[#0e0e0e] no-underline shadow-[0_8px_22px_rgba(212,175,55,0.18)]">702-778-8883</a> or use our contact form.</p>
      </section>
      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 mt-8">
        <h2 className="text-lg font-semibold text-white mb-3">Settlement Resources</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm text-white/80">
          <li><a href="https://www.leg.state.nv.us/CourtRules/RPC.html" className="text-[#d4af37] underline">Nevada Rules of Professional Conduct: Rules 1.2, 1.5, and 1.15</a></li>
          <li><a href="https://www.americanbar.org/groups/public_education/resources/law_issues_for_consumers/personal-injury/injury-settle/" className="text-[#d4af37] underline">American Bar Association: settling an injury claim and releases</a></li>
          <li><a href="https://www.cms.gov/medicare/coordination-benefits-recovery/attorney-services/conditional-payment-information" className="text-[#d4af37] underline">CMS: Medicare conditional payments</a></li>
          <li><a href="https://www.irs.gov/government-entities/tax-implications-of-settlements-and-judgments" className="text-[#d4af37] underline">IRS: tax treatment of settlements and judgments</a></li>
        </ul>
        <p className="mt-3 text-xs text-white/60">General information; an agreement&apos;s terms and applicable law determine the details of a particular settlement.</p>
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
