import React from 'react'
import Link from 'next/link'
import PracticeStructuredData from '../../practice/PracticeStructuredData'

const title = 'Las Vegas Sexual Assault Defense Lawyer | Saggese & Associates'
const description = 'Strategic and discreet Las Vegas sexual assault defense attorneys – challenging evidence, protecting your rights, and guiding you through every stage.'
const keywords = [
  'Las Vegas sexual assault lawyer',
  'sexual assault defense attorney',
  'Nevada sex crime lawyer',
  'sexual assault charges defense',
  'Las Vegas sex offense attorney',
  'false accusation sexual assault defense',
  'sex crime legal representation'
]

export const metadata = {
  title,
  description,
  keywords,
  alternates: { canonical: 'https://www.maxlawnv.com/criminal-defense/sexual-assault' },
  openGraph: {
    type: 'website',
    url: 'https://www.maxlawnv.com/criminal-defense/sexual-assault',
    title,
    description
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description
  }
}

export default function SexualAssaultPage() {
  const faqs = [
    {
      question: 'What should I do if I learn I am under investigation?',
      answer: 'Do not make any statements or attend interviews without counsel. Early legal intervention protects your rights and guides evidence strategy.'
    },
    {
      question: 'How are sexual assault allegations defended?',
      answer: 'We examine consent communications, forensic collection timing, potential contamination, digital messages, and motives for fabrication or exaggeration.'
    },
    {
      question: 'Will my case go to trial?',
      answer: 'Many cases resolve before trial through evidentiary challenges or negotiated outcomes, but we prepare each case as if it will be tried.'
    },
    {
      question: 'Can false accusations be challenged?',
      answer: 'Yes. We investigate inconsistencies, ulterior motives, prior statements, and objective digital or forensic evidence to expose weaknesses.'
    }
  ]

  return (
    <>

      <header className="mb-6">
        <div className="relative inline-block">
          <h1 className="text-3xl sm:text-4xl font-['Playfair_Display'] font-bold text-[#d4af37] mb-2">Sexual Assault Defense</h1>
          <span className="accent-underline w-full rounded-full" aria-hidden />
        </div>
        <p className="text-white/75 mt-3">Allegations of sexual assault demand a precise, discreet, and immediate defense response—our team acts quickly to safeguard your rights and future.</p>
      </header>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-8">
        <article className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg card-hover">
          <p className="mb-4 text-white/90 leading-relaxed">Sexual assault cases are complex and emotionally charged. We scrutinize investigative procedure, forensic protocols, digital evidence integrity, and witness motivations.</p>

          <h3 className="mt-4 text-lg font-semibold text-white">Defense priorities</h3>
          <ul className="list-disc pl-5 text-white/80 mb-4">
            <li>Evaluate forensic collection timing & contamination risks</li>
            <li>Challenge unreliable or suggestive identification processes</li>
            <li>Analyze consent communication & documented context</li>
            <li>Investigate motives for fabrication or exaggeration</li>
          </ul>

          <p className="text-white/80 leading-relaxed mb-4">We coordinate early with independent experts including DNA review, toxicology, and digital communications assessment.</p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="tel:17027788883" className="cta-glow inline-block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-3 text-sm font-semibold text-[#0e0e0e]">Call (702) 778‑8883</a>
              <Link href="/contact" className="cta-glow inline-block rounded-2xl border border-white/10 px-5 py-3 text-sm text-white/90">Request a confidential consultation</Link>
            </div>
        </article>

        <aside className="rounded-2xl border border-white/10 bg-white/4 p-4 shadow-lg">
          <div className="mb-3 text-sm font-semibold text-white">Core focus areas</div>
          <p className="text-sm text-white/80">Precision evidence analysis and proactive defense framing are critical.</p>

          <div className="mt-4 grid gap-3">
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Approach</div>
              <div className="text-lg font-semibold text-[#d4af37]">Evidence integrity</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Priority</div>
              <div className="text-lg font-semibold text-[#d4af37]">Early intervention</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Consultation</div>
              <div className="text-lg font-semibold text-[#d4af37]">Confidential</div>
            </div>
          </div>
        </aside>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg mb-8">
        <h3 className="text-lg font-semibold text-white mb-3">Next steps</h3>
        <p className="text-white/80 leading-relaxed mb-3">If you or a loved one is under investigation—or has been charged—do not make statements before consulting counsel. We guide you through interviews, evidence preservation, and strategic response.</p>
        <p className="text-white/80 leading-relaxed">Call <a href="tel:17027788883" className="underline" style={{ textDecorationColor: '#d4af37' }}>702-778-8883</a> or submit a confidential contact form.</p>
      </section>

      <PracticeStructuredData
        slug="criminal-defense/sexual-assault"
        serviceType="Las Vegas Sexual Assault Defense Lawyer"
        description={description}
        keywords={keywords}
        faqs={faqs}
      />

  {/* Footer removed */}
    </>
  )
}
