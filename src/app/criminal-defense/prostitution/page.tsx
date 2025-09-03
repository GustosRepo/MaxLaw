import Link from 'next/link'
import { SITE_URL } from '@/lib/constants'
import PracticeStructuredData from '../../practice/PracticeStructuredData'

export const metadata = {
  title: 'Las Vegas Prostitution Defense Lawyer | Saggese & Associates',
  description: 'Discreet prostitution defense—challenge entrapment, intent & evidence. Free consultation (702) 778-8883.',
  keywords: [
    'las vegas prostitution defense lawyer',
    'solicitation defense attorney nevada',
    'entrapment defense las vegas'
  ],
  alternates: { canonical: `${SITE_URL}/criminal-defense/prostitution` },
  openGraph: { title: 'Las Vegas Prostitution Defense Lawyer', description: 'Discreet defense—entrapment & intent challenges.', url: `${SITE_URL}/criminal-defense/prostitution`, type: 'article' },
  twitter: { card: 'summary', title: 'Prostitution Defense Lawyer', description: 'Confidential strategy & defense—free consult.' }
}

export default function ProstitutionPage() {
  return (
    <>
      <header className="mb-6">
        <div className="relative inline-block">
          <h1 className="text-4xl font-['Playfair_Display'] font-bold text-[#d4af37] mb-2">Prostitution Defense</h1>
          <span className="accent-underline w-full rounded-full" aria-hidden />
        </div>
        <p className="text-white/75 mt-3">We defend clients facing prostitution and related charges with discretion and strategic representation.</p>
      </header>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg mb-8">
        <p className="text-white/80 leading-relaxed mb-3">Allegations of prostitution and related offenses can have sensitive consequences, including potential immigration issues, employment risk, and reputational harm. We treat these matters with discretion and aggressive representation when necessary.</p>

        <h3 className="mt-4 text-lg font-semibold text-white">Defense approaches</h3>
        <ul className="mt-3 list-disc pl-5 text-white/80 mb-3">
          <li>Investigate entrapment or inducement by law enforcement</li>
          <li>Challenge credibility of evidence and witness statements</li>
          <li>Negotiate resolution that minimizes collateral consequences</li>
        </ul>

        <p className="text-white/80 leading-relaxed mb-3">We often succeed by highlighting lack of intent, procedural defects, or by negotiating resolutions that prioritize confidentiality and minimal long-term impact.</p>

        <div className="mt-4 flex gap-3">
          <a href="tel:17027788883" className="inline-block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-3 text-sm font-semibold text-[#0e0e0e] cta-glow">Call (702) 778‑8883</a>
          <Link href="/contact" className="inline-block rounded-2xl border border-white/10 px-5 py-3 text-sm text-white/90 cta-glow">Request a free consultation</Link>
        </div>
      </section>

  {/* Footer removed */}
      <PracticeStructuredData
        slug="/criminal-defense/prostitution"
        serviceType="Las Vegas Prostitution Defense Lawyer"
        description="Discreet prostitution defense—challenge entrapment, intent & evidence. Free consultation."
        keywords={['las vegas prostitution defense lawyer','solicitation defense attorney nevada']}
        faqs={[
          { question: 'Is entrapment a defense?', answer: 'If law enforcement induced conduct you were not otherwise predisposed to commit, entrapment may apply.' },
          { question: 'Will this charge appear on background checks?', answer: 'Pending charges can appear; successful defense or negotiation can reduce long-term impact.' }
        ]}
      />
    </>
  )
}
