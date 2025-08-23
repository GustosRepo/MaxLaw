import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export const metadata = {
  title: 'Wrongful Death | Saggese & Associates',
  description: 'Representation for families after a wrongful death — compassionate advocacy to pursue justice and compensation.'
}

export default function WrongfulDeathPage() {
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

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-8">
        <article className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg card-hover">
          <header className="mb-6">
            <div className="relative inline-block">
              <h1 className="text-4xl font-['Playfair_Display'] font-bold text-[#d4af37] mb-2">Wrongful Death</h1>
              <span className="accent-underline w-full rounded-full" aria-hidden />
            </div>
            <p className="text-white/75 mt-3">Our firm provides compassionate representation for families who have lost a loved one due to another's negligence or wrongful act.</p>
          </header>

          <p className="mb-4 text-white/90 leading-relaxed">
            Wrongful death occurs when someone dies due to the negligent or intentional act of another person or entity. These tragic cases require compassionate yet aggressive legal representation.
          </p>

          <p className="mb-4 text-white/90 leading-relaxed">
            In Nevada, wrongful death claims can be filed by the decedent's spouse, children, parents, or estate representatives. The goal is to provide financial security for surviving family members.
          </p>

          <h3 className="mt-4 text-lg font-semibold text-white">Understanding Wrongful Death Claims</h3>
          <ul className="mt-3 space-y-3 text-white/80">
            <li><span className="stat-number">•</span> Common causes include medical malpractice, car accidents, workplace incidents, and defective products.</li>
            <li><span className="stat-number">•</span> Nevada allows <strong className="text-[#d4af37]">2-4 years</strong> statute of limitations for wrongful death claims.</li>
            <li><span className="stat-number">•</span> Average settlements often exceed <strong className="text-[#d4af37]">$1M+</strong> for wrongful death cases.</li>
            <li><span className="stat-number">•</span> We handle administrative burdens with care and sensitivity.</li>
          </ul>

          <p className="mt-4 text-white/80 leading-relaxed">We pursue claims for funeral expenses, loss of companionship, and financial support. Our attorneys handle delicate matters with sensitivity while seeking full accountability.</p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="tel:17027788883" className="inline-block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-3 text-sm font-semibold text-[#0e0e0e] cta-glow">Call (702) 778‑8883</a>
            <Link href="/contact" className="inline-block rounded-2xl border border-white/10 px-5 py-3 text-sm text-white/90 text-center cta-glow">Request a free consultation</Link>
          </div>
        </article>

        <aside className="rounded-2xl border border-white/10 bg-white/4 p-4 shadow-lg">
          <div className="mb-3 text-sm font-semibold text-white">Wrongful Death Facts</div>
          <p className="text-sm text-white/80 mb-4">Understanding your rights and the legal process is crucial during this difficult time.</p>

          <div className="mt-4 grid gap-3">
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Statute of limitations</div>
              <div className="text-lg font-semibold text-[#d4af37]">2-4 years</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Average settlement</div>
              <div className="text-lg font-semibold text-[#d4af37]">$1M+</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Cases settled</div>
              <div className="text-lg font-semibold text-[#d4af37]">95%</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Our fee structure</div>
              <div className="text-lg font-semibold text-[#d4af37]">No Fee</div>
            </div>
          </div>
        </aside>
      </section>

      {/* How we help section */}
      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg mt-8">
        <h3 className="text-lg font-semibold text-white mb-3">How we help</h3>
        <p className="text-white/80 leading-relaxed mb-3">We manage wrongful death claims and fight for compensation for losses and future needs of surviving family members, while handling administrative burdens with care.</p>
        <p className="text-white/80 leading-relaxed">Call <a href="tel:17027788883" className="underline" style={{ textDecorationColor: '#d4af37' }}>702-778-8883</a> or use our contact form.</p>
      </section>
    </>
  )
}
