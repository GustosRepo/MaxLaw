import React from 'react'
import Link from 'next/link'
import { SITE_URL } from '@/lib/constants'
import PracticeStructuredData from '../PracticeStructuredData'

export const metadata = {
  title: 'Las Vegas Premises Liability Lawyer | Saggese & Associates',
  description: 'Las Vegas premises liability lawyer for slip-and-fall, negligent security & dangerous property conditions. Free consultation (702) 778‑8883.',
  keywords: [
    'las vegas premises liability lawyer',
    'negligent security attorney nevada',
    'slip and fall lawyer las vegas',
    'dangerous property condition claim'
  ],
  alternates: { canonical: `${SITE_URL}/practice/premises-liability` },
  openGraph: {
    title: 'Las Vegas Premises Liability Lawyer',
    description: 'Slip-and-fall & negligent security claims – free consultation.',
    url: `${SITE_URL}/practice/premises-liability`,
    type: 'article'
  },
  twitter: {
    card: 'summary',
    title: 'Las Vegas Premises Liability Lawyer',
    description: 'Injured on unsafe property? Free consultation (702) 778‑8883.'
  }
}

export default function PremisesLiabilityPage() {
  return (
    <>
      <style>{`
        /* standardized practice page styles */
        @keyframes underlineIn { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        .accent-underline { display:block; height:6px; background:linear-gradient(90deg,#d4af37,#c5a467); transform-origin:left; animation:underlineIn .6s ease forwards; }
        .stat-number { color:#d4af37; font-weight:700; font-size:1.25rem; }
        .card-hover { transition:transform .26s ease, box-shadow .26s ease; }
        .card-hover:hover { transform:translateY(-6px); box-shadow:0 22px 60px rgba(0,0,0,0.6); }
        .cta-glow { transition:box-shadow .28s, transform .22s; }
        .cta-glow:hover { box-shadow: 0 18px 48px rgba(212,175,55,0.18); transform: translateY(-3px) scale(1.02); }
      `}</style>

      {/* Content only — PracticeLayout provides outer main/container */}
      <header className="mb-6">
        <div className="relative inline-block">
          <h1 className="text-3xl sm:text-4xl font-['Playfair_Display'] font-bold text-[#d4af37] mb-2">Premises Liability</h1>
          <span className="accent-underline w-full rounded-full" aria-hidden />
        </div>
        <p className="text-white/75 mt-3">Property owners must keep visitors safe. We pursue claims for slips, falls, negligent security, and other dangerous conditions.</p>
      </header>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-8">
        <article className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg card-hover">
          <p className="mb-4 text-white/90 leading-relaxed">
            Premises liability claims require proof that an owner knew or should have known about a hazardous condition. We investigate maintenance records, incident logs, and surveillance to establish liability.
          </p>

          <p className="mb-4 text-white/90 leading-relaxed">
            Property owners must keep visitors safe. We pursue claims for slips, falls, negligent security, and other dangerous conditions with thorough investigation and expert testimony.
          </p>

          <h3 className="mt-4 text-lg font-semibold text-white">Facts about premises liability</h3>
          <ul className="mt-3 space-y-3 text-white/80">
            <li><span className="stat-number">•</span> Slip-and-fall accidents account for over <strong className="text-[#d4af37]">1 million</strong> ER visits annually.</li>
            <li><span className="stat-number">•</span> <strong className="text-[#d4af37]">15%</strong> of all accidental deaths are from falls.</li>
            <li><span className="stat-number">•</span> Property owners may be liable for <strong className="text-[#d4af37]">inadequate security</strong>.</li>
            <li><span className="stat-number">•</span> Winter weather increases slip-and-fall risks significantly.</li>
            <li><span className="stat-number">•</span> Documentation of hazards is crucial for successful claims.</li>
          </ul>

          <p className="mt-4 text-white/80 leading-relaxed">Slip-and-fall, stairway accidents, store negligence, and poor lighting or maintenance — we handle these cases and work to recover medical expenses and losses.</p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="tel:17027788883" className="inline-block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-3 text-sm font-semibold text-[#0e0e0e] shadow-md">Call (702) 778‑8883</a>
            <Link href="/contact" className="inline-block rounded-2xl border border-white/10 px-5 py-3 text-sm text-white/90 text-center">Request a free consultation</Link>
          </div>

        </article>

        <aside className="rounded-2xl border border-white/10 bg-white/4 p-4 shadow-lg">
          <div className="mb-3 text-sm font-semibold text-white">Property owner duties</div>
          <p className="text-sm text-white/80">Owners must maintain safe conditions and address hazards promptly. Evidence preservation is critical in these cases.</p>

          <div className="mt-4 grid gap-3">
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">ER visits</div>
              <div className="text-lg font-semibold text-[#d4af37]">1M+</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Fall deaths</div>
              <div className="text-lg font-semibold text-[#d4af37]">15%</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Evidence</div>
              <div className="text-lg font-semibold text-[#d4af37]">Critical</div>
            </div>
          </div>
        </aside>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg mb-8">
        <h3 className="text-lg font-semibold text-white mb-3">How we help</h3>
        <p className="text-white/80 leading-relaxed mb-3">We work with safety experts, property managers, and witnesses to document hazardous conditions and present a compelling claim against negligent owners.</p>
        <p className="text-white/80 leading-relaxed">Call <a href="tel:17027788883" className="underline" style={{ textDecorationColor: '#d4af37' }}>702-778-8883</a> or use our contact form.</p>
      </section>

  {/* Footer removed */}
      <PracticeStructuredData
        slug="/practice/premises-liability"
        serviceType="Las Vegas Premises Liability Lawyer"
        description="Las Vegas premises liability lawyer for slip-and-fall, negligent security & dangerous property conditions. Free consultation."
        keywords={['las vegas premises liability lawyer','negligent security attorney','slip and fall lawyer las vegas']}
        faqs={[
          { question: 'What is premises liability?', answer: 'It is the responsibility of property owners to maintain safe conditions; injuries from hazards can create legal liability.' },
          { question: 'Do I need to prove the owner knew?', answer: 'You must show the owner knew or should have known about the dangerous condition and failed to fix or warn.' }
        ]}
      />
    </>
  )
}
