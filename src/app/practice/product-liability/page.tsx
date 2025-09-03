import React from 'react'
import Link from 'next/link'
import { SITE_URL } from '@/lib/constants'
import PracticeStructuredData from '../PracticeStructuredData'

export const metadata = {
  title: 'Las Vegas Product Liability Lawyer | Saggese & Associates',
  description: 'Las Vegas product liability lawyer handling defective product, design, manufacturing & warning defect claims. Free consultation (702) 778‑8883.',
  keywords: [
    'las vegas product liability lawyer',
    'defective product attorney nevada',
    'dangerous product claim',
    'design defect lawyer las vegas'
  ],
  alternates: { canonical: `${SITE_URL}/practice/product-liability` },
  openGraph: {
    title: 'Las Vegas Product Liability Lawyer',
    description: 'Defective product & design defect claims – free consultation.',
    url: `${SITE_URL}/practice/product-liability`,
    type: 'article'
  },
  twitter: {
    card: 'summary',
    title: 'Las Vegas Product Liability Lawyer',
    description: 'Injured by a defective product? Free consultation (702) 778‑8883.'
  }
}

export default function ProductLiabilityPage() {
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

      {/* Content only — PracticeLayout provides main/container */}
      <header className="mb-6">
        <div className="relative inline-block">
          <h1 className="text-4xl font-['Playfair_Display'] font-bold text-[#d4af37] mb-2">Product Liability</h1>
          <span className="accent-underline w-full rounded-full" aria-hidden />
        </div>
        <p className="text-white/75 mt-3">Defective products can cause catastrophic injuries. We hold manufacturers accountable for design, manufacturing, and warning defects.</p>
      </header>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-8">
        <article className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg card-hover">
          <p className="mb-4 text-white/90 leading-relaxed">
            Product liability cases often require engineering experts, testing, and detailed discovery to show how a product failed and who is responsible. We coordinate recalls, expert testing, and litigation strategies to protect clients.
          </p>

          <p className="mb-4 text-white/90 leading-relaxed">
            Defective products can cause catastrophic injuries. We hold manufacturers accountable for design, manufacturing, and warning defects with comprehensive investigation and expert testimony.
          </p>

          <h3 className="mt-4 text-lg font-semibold text-white">Facts about product liability</h3>
          <ul className="mt-3 space-y-3 text-white/80">
            <li><span className="stat-number">•</span> Product defects cause over <strong className="text-[#d4af37]">22 million</strong> injuries annually.</li>
            <li><span className="stat-number">•</span> <strong className="text-[#d4af37]">Design defects</strong> affect entire product lines.</li>
            <li><span className="stat-number">•</span> Manufacturing defects occur during <strong className="text-[#d4af37]">production</strong>.</li>
            <li><span className="stat-number">•</span> Warning defects involve <strong className="text-[#d4af37]">inadequate instructions</strong>.</li>
            <li><span className="stat-number">•</span> Multiple parties may be liable in the supply chain.</li>
          </ul>

          <p className="mt-4 text-white/80 leading-relaxed">Design defects, manufacturing defects, and inadequate warnings — we evaluate claims to find the strongest legal theories for recovery.</p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="tel:17027788883" className="inline-block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-3 text-sm font-semibold text-[#0e0e0e] shadow-md">Call (702) 778‑8883</a>
            <Link href="/contact" className="inline-block rounded-2xl border border-white/10 px-5 py-3 text-sm text-white/90 text-center">Request a free consultation</Link>
          </div>

        </article>

        <aside className="rounded-2xl border border-white/10 bg-white/4 p-4 shadow-lg">
          <div className="mb-3 text-sm font-semibold text-white">Product defect types</div>
          <p className="text-sm text-white/80">Understanding different defect categories helps build stronger cases against manufacturers and suppliers.</p>

          <div className="mt-4 grid gap-3">
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Annual injuries</div>
              <div className="text-lg font-semibold text-[#d4af37]">22M+</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Defect types</div>
              <div className="text-lg font-semibold text-[#d4af37]">3 main</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Liable parties</div>
              <div className="text-lg font-semibold text-[#d4af37]">Multiple</div>
            </div>
          </div>
        </aside>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg mb-8">
        <h3 className="text-lg font-semibold text-white mb-3">How we help</h3>
        <p className="text-white/80 leading-relaxed mb-3">We preserve the product, retain experts, and pursue full recovery from manufacturers and distributors responsible for dangerous products.</p>
        <p className="text-white/80 leading-relaxed">Call <a href="tel:17027788883" className="underline" style={{ textDecorationColor: '#d4af37' }}>702-778-8883</a> or use our contact form.</p>
      </section>

  {/* Footer removed */}
      <PracticeStructuredData
        slug="/practice/product-liability"
        serviceType="Las Vegas Product Liability Lawyer"
        description="Las Vegas product liability lawyer handling defective product, design, manufacturing & warning defect claims. Free consultation."
        keywords={['las vegas product liability lawyer','defective product attorney','design defect lawyer nevada']}
        faqs={[
          { question: 'What is a product defect?', answer: 'A defect may arise from unsafe design, manufacturing errors, or inadequate warnings/instructions making the product unreasonably dangerous.' },
          { question: 'Who can be liable?', answer: 'Manufacturers, component makers, distributors, and retailers across the supply chain may share liability.' }
        ]}
      />
    </>
  )
}
