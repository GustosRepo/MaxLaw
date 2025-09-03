import React from 'react'
import { SITE_URL } from '@/lib/constants'
import PracticeStructuredData from '../PracticeStructuredData'
import Link from 'next/link'

export const metadata = {
  title: 'Las Vegas Medical Malpractice Lawyer | Saggese & Associates',
  description: 'Surgical errors, misdiagnosis & hospital negligence — Las Vegas medical malpractice attorneys pursuing full compensation. Free consultation (702) 778‑8883.',
  alternates: { canonical: `${SITE_URL}/practice/medical-malpractice` },
  openGraph: {
    title: 'Las Vegas Medical Malpractice Lawyer',
    description: 'Misdiagnosis, surgical & hospital negligence claims — free consultation.',
    url: `${SITE_URL}/practice/medical-malpractice`,
    type: 'article'
  }
}

export default function MedicalMalpracticePage() {
  return (
    <>
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
  </>

      {/* Content only — PracticeLayout provides outer main/container */}
      <header className="mb-6">
        <div className="relative inline-block">
          <h1 className="text-4xl font-['Playfair_Display'] font-bold text-[#d4af37] mb-2">Medical Malpractice</h1>
          <span className="accent-underline w-full rounded-full" aria-hidden />
        </div>
        <p className="text-white/75 mt-3">Negligent medical treatment can have devastating consequences. We coordinate with medical experts to prove standards of care were breached.</p>
      </header>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-8">
        <article className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg card-hover">
          <p className="mb-4 text-white/90 leading-relaxed">
            Medical malpractice cases require expert testimony and thorough records review. Our attorneys work with specialists to establish causation and pursue damages for injury or wrongful death.
          </p>

          <p className="mb-4 text-white/90 leading-relaxed">
            Negligent medical treatment can have devastating consequences. We coordinate with medical experts to prove standards of care were breached with comprehensive investigation and advocacy.
          </p>

          <h3 className="mt-4 text-lg font-semibold text-white">Facts about medical malpractice</h3>
          <ul className="mt-3 space-y-3 text-white/80">
            <li><span className="stat-number">•</span> Medical errors cause an estimated <strong className="text-[#d4af37]">250,000</strong> deaths annually.</li>
            <li><span className="stat-number">•</span> <strong className="text-[#d4af37]">Diagnostic errors</strong> are the leading cause of malpractice claims.</li>
            <li><span className="stat-number">•</span> Surgical errors affect <strong className="text-[#d4af37]">1 in 3,000</strong> procedures.</li>
            <li><span className="stat-number">•</span> Expert testimony is required to prove medical negligence.</li>
            <li><span className="stat-number">•</span> Early investigation preserves crucial evidence and testimony.</li>
          </ul>

          <p className="mt-4 text-white/80 leading-relaxed">We handle surgical errors, medication mistakes, delayed diagnosis, and hospital negligence with sensitivity and tenacity.</p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="tel:17027788883" className="inline-block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-3 text-sm font-semibold text-[#0e0e0e] shadow-md">Call (702) 778‑8883</a>
            <Link href="/contact" className="inline-block rounded-2xl border border-white/10 px-5 py-3 text-sm text-white/90 text-center">Request a free consultation</Link>
          </div>

        </article>

        <aside className="rounded-2xl border border-white/10 bg-white/4 p-4 shadow-lg">
          <div className="mb-3 text-sm font-semibold text-white">Medical negligence impact</div>
          <p className="text-sm text-white/80">Medical errors have serious consequences. Expert medical testimony and thorough investigation are essential for success.</p>

          <div className="mt-4 grid gap-3">
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Annual deaths</div>
              <div className="text-lg font-semibold text-[#d4af37]">250,000</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Leading cause</div>
              <div className="text-lg font-semibold text-[#d4af37]">Diagnosis</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Surgery errors</div>
              <div className="text-lg font-semibold text-[#d4af37]">1 in 3,000</div>
            </div>
          </div>
        </aside>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg mb-8">
        <h3 className="text-lg font-semibold text-white mb-3">How we help</h3>
        <p className="text-white/80 leading-relaxed mb-3">We consult medical experts, review records, and build strong claims that reflect both immediate and long-term harm from negligent medical care.</p>
        <p className="text-white/80 leading-relaxed">Call <a href="tel:17027788883" className="underline" style={{ textDecorationColor: '#d4af37' }}>702-778-8883</a> or use our contact form.</p>
      </section>

  {/* Footer removed */}
      <PracticeStructuredData
        slug="/practice/medical-malpractice"
        serviceType="Las Vegas Medical Malpractice Lawyer"
        description="Surgical errors, misdiagnosis & hospital negligence — Las Vegas medical malpractice attorneys pursuing full compensation. Free consultation."
        keywords={['las vegas medical malpractice lawyer','nevada misdiagnosis attorney','surgical error lawyer']}
        faqs={[
          { question: 'How long do I have to file a malpractice claim in Nevada?', answer: 'Generally 1 year from discovery and no more than 3 years from the act, with limited exceptions.' },
          { question: 'Do I need an expert affidavit?', answer: 'Yes, Nevada typically requires an expert affidavit to support the allegations of negligence.' }
        ]}
      />
    </>
  )
}
