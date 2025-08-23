import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Car Accidents | Saggese & Associates',
  description: 'Speak with a Las Vegas car accident attorney. Free consultations. We pursue maximum compensation for injuries from motor vehicle crashes.'
}

export default function CarAccidentsPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
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
      </Head>

      {/* Content only — PracticeLayout provides outer main and container */}
      <header className="mb-6">
        <div className="relative inline-block">
          <h1 className="text-4xl font-['Playfair_Display'] font-bold text-[#d4af37] mb-2">Car Accidents</h1>
          <span className="accent-underline w-full rounded-full" aria-hidden />
        </div>
        <p className="text-white/75 mt-3">Every car accident has the potential to cause serious harm. Learn what to do next and how we can help.</p>
      </header>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-8">
        <article className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg card-hover">
          <p className="mb-4 text-white/90 leading-relaxed">
            Every car accident has the potential to cause serious harm — every vehicle on the road is powerful enough to cause a tragedy, and even relatively minor collisions can still lead to serious injuries. It's important to remember that not all symptoms of an auto injury will be immediately apparent. That's why it's always a good idea to speak with a lawyer after a motor vehicle accident and assess your options.
          </p>

          <p className="mb-4 text-white/90 leading-relaxed">
            At The Law Offices of Saggese & Associates, we understand the stress that comes with a personal injury. We will help you bear the burden of this stress by taking care of your legal needs so you can focus on recovering from your accident. Analyzing your case, we will identify the responsible parties and seek to obtain the maximum available compensation for their negligence.
          </p>

          <h3 className="mt-4 text-lg font-semibold text-white">The Roads are Dangerous, but You Have a Right to Reasonable Safety</h3>
          <ul className="mt-3 space-y-3 text-white/80">
            <li><span className="stat-number">•</span> There are roughly <strong className="text-[#d4af37]">6 million</strong> auto accidents each year.</li>
            <li><span className="stat-number">•</span> Auto accidents are a leading cause of both injury and death in every age group.</li>
            <li><span className="stat-number">•</span> We work with car drivers, motorcyclists, bicyclists, and pedestrians.</li>
            <li><span className="stat-number">•</span> Single-vehicle accidents can involve faulty auto parts or road distractions.</li>
          </ul>

          <p className="mt-4 text-white/80 leading-relaxed">The sooner you get organized, the sooner you can obtain compensation for your injuries. Our lawyer can help you understand your legal options, and we are prepared to see your case through settlement or trial.</p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="tel:17027788883" className="inline-block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-3 text-sm font-semibold text-[#0e0e0e] shadow-md">Call (702) 778‑8883</a>
            <Link href="/contact" className="inline-block rounded-2xl border border-white/10 px-5 py-3 text-sm text-white/90 text-center">Request a free consultation</Link>
          </div>

        </article>

        <aside className="rounded-2xl border border-white/10 bg-white/4 p-4 shadow-lg">
          <div className="mb-3 text-sm font-semibold text-white">Free Case Evaluation</div>
          <p className="text-sm text-white/80">Same-day appointments available. We speak Spanish and will review your case at no cost to determine your best legal options.</p>

          <div className="mt-4 grid gap-3">
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Experience</div>
              <div className="text-lg font-semibold text-[#d4af37]">Decades</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Cases Won</div>
              <div className="text-lg font-semibold text-[#d4af37]">Thousands</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Consultation</div>
              <div className="text-lg font-semibold text-[#d4af37]">Free</div>
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
