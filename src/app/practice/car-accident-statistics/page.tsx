import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export const metadata = {
  title: 'Car Accident Statistics | Saggese & Associates',
  description: 'Statistics and facts about car accidents — learn why early legal help matters and how Saggese & Associates can support injured clients in Las Vegas.'
}

export default function CarAccidentStatsPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <style>{`
          /* small page-level flair consistent with site */
          @keyframes underlineIn { from { transform: scaleX(0); } to { transform: scaleX(1); } }
          .accent-underline { display:block; height:6px; background:linear-gradient(90deg,#d4af37,#c5a467); transform-origin:left; animation:underlineIn .6s ease forwards; }
          .stat-number { color:#d4af37; font-weight:700; font-size:1.25rem; }
          .card-hover { transition:transform .26s ease, box-shadow .26s ease; }
          .card-hover:hover { transform:translateY(-6px); box-shadow:0 22px 60px rgba(0,0,0,0.6); }
        `}</style>
      </Head>

      {/* Content only — PracticeLayout provides the outer wrapper and sidebar */}

      <header className="mb-6">
        <div className="relative inline-block">
          <h1 className="text-4xl font-['Playfair_Display'] font-bold text-[#d4af37] mb-2">Car Accident Statistics</h1>
          <span className="accent-underline w-full rounded-full" aria-hidden />
        </div>
        <p className="text-white/75 mt-3">At some point in their lives, most people experience a car or motor vehicle accident. Below are important facts and why early legal involvement matters.</p>
      </header>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-8">
        <article className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg card-hover">
          <p className="mb-4 text-white/90 leading-relaxed">
            At Saggese & Associates we know how devastating motor vehicle accidents can be. The number of car accidents increases every year — involving millions of Americans. Even though an accident is a common event, it is unanticipated, and the injuries can be life-altering or, tragically, fatal.
          </p>

          <p className="mb-4 text-white/90 leading-relaxed">
            Our firm has experience prosecuting claims against careless drivers, fleets, and manufacturers whose vehicles failed to meet crashworthiness standards. We aggressively preserve evidence and pursue maximum compensation for injured clients.
          </p>

          <h3 className="mt-4 text-lg font-semibold text-white">Facts about car accidents</h3>
          <ul className="mt-3 space-y-3 text-white/80">
            <li><span className="stat-number">•</span> Auto accidents are a leading cause of injury and death in all age groups.</li>
            <li><span className="stat-number">•</span> Approximately <strong className="text-[#d4af37]">6,000,000</strong> auto accidents occur each year.</li>
            <li><span className="stat-number">•</span> Over <strong className="text-[#d4af37]">3,150,000</strong> people were injured in these accidents annually.</li>
            <li><span className="stat-number">•</span> Each year approximately <strong className="text-[#d4af37]">40,000</strong> people lose their lives in automobile-related accidents.</li>
            <li><span className="stat-number">•</span> Alcohol is involved in roughly <strong className="text-[#d4af37]">40%</strong> of traffic fatalities.</li>
            <li><span className="stat-number">•</span> Speeding contributes to about <strong className="text-[#d4af37]">29%</strong> of vehicle accident fatalities.</li>
            <li><span className="stat-number">•</span> Young drivers (15–20) and older drivers (70+) have higher fatality rates than drivers aged 25–69.</li>
            <li><span className="stat-number">•</span> Distracted driving — including cellphone use — and aggressive driving remain major contributors to crashes.</li>
          </ul>

          <p className="mt-4 text-white/80 leading-relaxed">If you are seriously injured, contact Saggese & Associates promptly. Early involvement helps document and preserve evidence and gives your case its best chance for a full recovery.</p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="tel:17027788883" className="inline-block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-3 text-sm font-semibold text-[#0e0e0e] shadow-md">Call (702) 778‑8883</a>
            <Link href="/contact" className="inline-block rounded-2xl border border-white/10 px-5 py-3 text-sm text-white/90 text-center">Request a free consultation</Link>
          </div>

        </article>

        <aside className="rounded-2xl border border-white/10 bg-white/4 p-4 shadow-lg">
          <div className="mb-3 text-sm font-semibold text-white">Why statistics matter</div>
          <p className="text-sm text-white/80">Numbers tell a story: they show how preventable many crashes are and why preserving evidence quickly is essential to a successful claim.</p>

          <div className="mt-4 grid gap-3">
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Annual accidents</div>
              <div className="text-lg font-semibold text-[#d4af37]">~6,000,000</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Annual injuries</div>
              <div className="text-lg font-semibold text-[#d4af37]">~3,150,000</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Annual fatalities</div>
              <div className="text-lg font-semibold text-[#d4af37]">~40,000</div>
            </div>
          </div>
        </aside>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg mb-8">
        <h3 className="text-lg font-semibold text-white mb-3">How we help</h3>
        <p className="text-white/80 leading-relaxed mb-3">Saggese & Associates offers a free consultation to discuss your accident and help ensure you take the right legal steps. We will do everything possible to help you receive the compensation you deserve.</p>
        <p className="text-white/80 leading-relaxed">Call our law office at <a href="tel:17027788883" className="underline" style={{ textDecorationColor: '#d4af37' }}>702-778-8883</a> to speak with an attorney, or fill out our contact form to email us.</p>
      </section>

      <footer className="text-sm text-white/60">© {new Date().getFullYear()} The Law Offices of Saggese & Associates. All rights reserved.</footer>
    </>
  )
}
