import React from 'react'
import Link from 'next/link'
import { SITE_URL } from '@/lib/constants'
import PracticeStructuredData from './PracticeStructuredData'

export const metadata = {
  title: 'Las Vegas Injury & Criminal Defense Lawyers | Practice Areas',
  description: 'Las Vegas personal injury & criminal defense lawyers handling car accidents, wrongful death, DUI defense, Drug Offenses & more. Free consultation.',
  keywords: [
    'las vegas personal injury lawyer',
    'las vegas criminal defense lawyer',
    'dui defense las vegas',
    'Drug Offenses lawyer las vegas'
  ],
  alternates: { canonical: `${SITE_URL}/practice` },
  openGraph: { title: 'Las Vegas Injury & Criminal Defense Lawyers', description: 'Explore our core personal injury and criminal defense practice areas.', url: `${SITE_URL}/practice`, type: 'website' },
  twitter: { card: 'summary', title: 'Las Vegas Law Firm Practice Areas', description: 'Injury & criminal defense representation.' }
}

export default function PracticePage() {
  return (
    <>
  <main className="min-h-screen custom-bg text-white font-['Inter'] py-12">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <section className="mb-8">
            <div className="relative rounded-3xl p-6 md:p-8 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg overflow-hidden">
              <div className="absolute -right-12 -top-6 text-[6rem] md:text-[9rem] font-black text-white/6 select-none pointer-events-none hidden md:block">Practice</div>
              <div className="relative z-10">
                <h1 className="text-2xl md:text-3xl font-['Playfair_Display'] font-bold text-[#bfa76a]">Practice Areas</h1>
                <div className="mt-3 w-36"><span className="accent-underline" /></div>
                <p className="mt-3 text-sm text-white/80 max-w-3xl">We represent clients in personal injury and criminal defense matters with trial-ready representation and focused client service. Below are some of our core practice areas.</p>

                <div className="mt-4 flex items-center gap-3">
                  <a href="tel:17027788883" className="btn-brand text-sm">Call (702) 778‑8883</a>
                  <Link href="/contact" className="btn-outline text-sm">Request Consultation</Link>
                </div>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <main className="md:col-span-2 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
{[
  { title: 'Car Accidents', href: '/practice/car-accidents', desc: 'Car accidents, premises liability, and catastrophic injury representation.' },
  { title: 'Brain & Spine Injury', href: '/practice/brain-and-spine-injury', desc: 'Serious injury, trauma, and long-term care cases.' },
  { title: 'Wrongful Death', href: '/practice/wrongful-death', desc: 'Representation for families in fatal accident cases.' },
  { title: 'Premises Liability', href: '/practice/premises-liability', desc: 'Slip and fall, unsafe property, and liability claims.' },
].map((p) => (
  <Link key={p.title} href={p.href}>
    <div className="block rounded-2xl p-5 bg-gradient-to-br from-white/3 to-transparent border border-white/8 card-hover">
      <h3 className="text-lg font-semibold text-white">{p.title}</h3>
      <p className="text-sm text-white/80 mt-2">{p.desc}</p>
      <div className="mt-4 text-xs text-white/70">Learn more →</div>
    </div>
  </Link>
))}
              </div>

              <div className="rounded-2xl p-6 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg">
                <h2 className="text-2xl font-['Playfair_Display'] font-bold mb-3">Why choose us?</h2>
                <ul className="text-sm text-white/90 list-disc list-inside">
                  <li>Combat-proven trial attorneys</li>
                  <li>Individualized case strategies</li>
                  <li>Transparent fee discussions</li>
                </ul>
              </div>
            </main>

            <aside className="space-y-6">
              <div className="rounded-2xl p-6 bg-gradient-to-br from-white/4 to-transparent border border-white/8 shadow-lg text-center">
                <div className="text-sm font-semibold text-white mb-2">Contact</div>
                <div className="text-white/80 mb-4">Free consultation • Same‑day appointments</div>
                <a href="tel:17027788883" className="block btn-brand text-sm mb-3">Call (702) 778‑8883</a>
                <Link href="/contact" className="block btn-outline text-sm">Request a consultation</Link>
              </div>

              <div className="rounded-2xl p-4 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg text-sm text-white/80">
                <div className="font-semibold text-white mb-2">Quick Help</div>
                <div>Need immediate assistance? Call our office for same-day intake.</div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <PracticeStructuredData
        slug="/practice"
        serviceType="Las Vegas Personal Injury & Criminal Defense Lawyers"
        description="Las Vegas personal injury & criminal defense lawyers handling car accidents, wrongful death, DUI defense, Drug Offenses & more. Free consultation."
        keywords={['las vegas personal injury lawyer','las vegas criminal defense lawyer','dui defense las vegas','Drug Offenses lawyer las vegas']}
        faqs={[
          { question: 'Do you offer free consultations?', answer: 'Yes. We provide free, no‑obligation consultations for injury and criminal matters.' },
          { question: 'What types of injury cases do you handle?', answer: 'Car, truck, motorcycle, premises liability, catastrophic injury, wrongful death and more.' }
        ]}
      />
    </>
  )
}
