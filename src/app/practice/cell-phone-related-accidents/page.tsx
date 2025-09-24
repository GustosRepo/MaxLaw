import React from 'react'
import Link from 'next/link'
import { SITE_URL } from '@/lib/constants'
import PracticeStructuredData from '../PracticeStructuredData'

export const metadata = {
  title: 'Las Vegas Distracted Driving Lawyer | Saggese & Associates',
  description: 'Las Vegas distracted driving & cell phone accident lawyer preserving evidence to prove negligence. Free consultation (702) 778‑8883.',
  keywords: [
    'las vegas distracted driving lawyer',
    'cell phone accident attorney nevada',
    'texting and driving crash lawyer',
    'distracted driver claim las vegas'
  ],
  alternates: { canonical: `${SITE_URL}/practice/cell-phone-related-accidents` },
  openGraph: {
    title: 'Las Vegas Distracted Driving Lawyer',
    description: 'Cell phone & texting accident claims – free consultation.',
    url: `${SITE_URL}/practice/cell-phone-related-accidents`,
    type: 'article'
  },
  twitter: { card: 'summary', title: 'Distracted Driving Lawyer', description: 'Cell phone crash? Free consultation.' }
}

export default function CellPhoneAccidentsPage() {
  return (
    <>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-8">
        <article className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg card-hover">
          <header className="mb-6">
            <div className="relative inline-block">
              <h1 className="text-3xl sm:text-4xl font-['Playfair_Display'] font-bold text-[#d4af37] mb-2">Cell Phone-Related Accidents</h1>
              <span className="accent-underline w-full rounded-full" aria-hidden />
            </div>
            <p className="text-white/75 mt-3">Distracted driving from cell phone use causes preventable crashes. Our team preserves evidence and proves negligence.</p>
          </header>

          <p className="mb-4 text-white/90 leading-relaxed">
            Driving has always been a potentially dangerous activity, given the size and strength of every vehicle combined with the possibility of a malfunction or a driver error. Unfortunately, the risk of avoidable mistakes is getting higher and higher thanks to advances in technology and changes in how these new technologies are used.
          </p>

          <p className="mb-4 text-white/90 leading-relaxed">
            By now, texting and driving is an infamous hazard on the road, comparable to drunk driving without the alcohol. But texting is just one of the many ways that a smartphone can lead to distracted driving. Many people are tempted to check their email while driving, as well as the news and social media. And even more responsible drivers who are able to ignore these distractions often still rely on GPS maps and directions to navigate.
          </p>

          <div className="my-6 p-4 border-l-4 border-[#d4af37] bg-white/5 italic text-white/90">
            "A momentary glance can change a life. If another person's distraction caused your injury, prompt evidence preservation is essential."
          </div>

          <h3 className="mt-4 text-lg font-semibold text-white">An Experienced Firm to Hold Negligent Parties Accountable</h3>
          <ul className="mt-3 space-y-3 text-white/80">
            <li><span className="stat-number">•</span> Cell phone distraction causes <strong className="text-[#d4af37]">9 deaths</strong> daily in the US.</li>
            <li><span className="stat-number">•</span> Texting while driving increases crash risk by <strong className="text-[#d4af37]">23 times</strong>.</li>
            <li><span className="stat-number">•</span> Eyes are off the road for <strong className="text-[#d4af37]">5 seconds</strong> on average when texting.</li>
            <li><span className="stat-number">•</span> Nevada law prohibits texting while driving and requires hands-free devices.</li>
          </ul>

          <p className="mt-4 text-white/80 leading-relaxed">If you've been in a cellphone-related accident, The Law Offices of Saggese & Associates can help. Our attorneys will research the incident and carefully build the case that your injury was caused by another driver's negligence.</p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="tel:17027788883" className="inline-block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-3 text-sm font-semibold text-[#0e0e0e] cta-glow">Call (702) 778‑8883</a>
            <Link href="/contact" className="inline-block rounded-2xl border border-white/10 px-5 py-3 text-sm text-white/90 text-center cta-glow">Request a free consultation</Link>
          </div>
        </article>

        <aside className="rounded-2xl border border-white/10 bg-white/4 p-4 shadow-lg">
          <div className="mb-3 text-sm font-semibold text-white">Distracted Driving Facts</div>
          <p className="text-sm text-white/80 mb-4">Understanding the dangers helps prove negligence and secure compensation for victims.</p>

          <div className="mt-4 grid gap-3">
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Daily deaths</div>
              <div className="text-lg font-semibold text-[#d4af37]">9 deaths</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Eyes off road</div>
              <div className="text-lg font-semibold text-[#d4af37]">5 seconds</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Crash risk increase</div>
              <div className="text-lg font-semibold text-[#d4af37]">23x</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Evidence preservation</div>
              <div className="text-lg font-semibold text-[#d4af37]">Fast Action</div>
            </div>
          </div>
        </aside>
      </section>

      {/* How we help section */}
  <section className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg mt-8">
        <h3 className="text-lg font-semibold text-white mb-3">How we help</h3>
        <p className="text-white/80 leading-relaxed mb-3">Saggese & Associates offers a free consultation to review distracted driving claims and to preserve cellphone and telematics evidence early in the process.</p>
        <p className="text-white/80 leading-relaxed">Call <a href="tel:17027788883" className="underline" style={{ textDecorationColor: '#d4af37' }}>702-778-8883</a> or use our contact form to get started.</p>
      </section>
      <PracticeStructuredData
        slug="/practice/cell-phone-related-accidents"
        serviceType="Las Vegas Distracted Driving Lawyer"
        description="Las Vegas distracted driving & cell phone accident lawyer preserving evidence to prove negligence. Free consultation."
        keywords={['las vegas distracted driving lawyer','cell phone accident attorney','texting and driving crash lawyer']}
        faqs={[
          { question: 'What evidence proves distracted driving?', answer: 'Cell phone logs, telematics, surveillance video, eyewitness statements, and vehicle data downloads.' },
          { question: 'How fast should evidence be preserved?', answer: 'Immediately—some electronic logs and dash data overwrite within days.' }
        ]}
      />
    </>
  )
}
