import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export const metadata = {
  title: 'Theft Defense | Saggese & Associates',
  description: 'Skilled Las Vegas theft attorneys defending clients against shoplifting, larceny, and related theft charges.'
}

export default function TheftPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <style>{`
          @keyframes underlineIn { from { transform: scaleX(0); } to { transform: scaleX(1); } }
          .accent-underline { display:block; height:6px; background:linear-gradient(90deg,#d4af37,#c5a467); transform-origin:left; animation:underlineIn .6s ease forwards; }
          .stat-number { color:#d4af37; font-weight:700; font-size:1.25rem; }
          .card-hover { transition:transform .26s ease, box-shadow .26s ease; }
          .card-hover:hover { transform:translateY(-6px); box-shadow:0 22px 60px rgba(0,0,0,0.6); }
        `}</style>
      </Head>

      <header className="mb-6">
        <div className="relative inline-block">
          <h1 className="text-4xl font-['Playfair_Display'] font-bold text-[#d4af37] mb-2">Theft & Larceny Defense</h1>
          <span className="accent-underline w-full rounded-full" aria-hidden />
        </div>
        <p className="text-white/75 mt-3">Charges for theft can have long-lasting consequences — we provide aggressive defense and case-specific strategies.</p>
      </header>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-8">
        <article className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg card-hover">
          <p className="mb-4 text-white/90 leading-relaxed">We defend clients across the spectrum of theft offenses, from shoplifting and petty theft to grand larceny. Our lawyers evaluate the evidence, ownership claims, and the role of intent to determine the strongest path forward.</p>

          <h3 className="mt-4 text-lg font-semibold text-white">Key defense strategies</h3>
          <ul className="list-disc pl-5 text-white/80 mb-4">
            <li>Demonstrate lack of intent or mistaken belief of ownership</li>
            <li>Challenge identification and witness reliability</li>
            <li>Negotiate for diversion, restitution, or reduced charges where appropriate</li>
          </ul>

          <p className="text-white/80 leading-relaxed mb-4">In many lower-level theft cases, early negotiation and evidence review lead to favorable outcomes; for more serious allegations, we aggressively prepare for trial.</p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="tel:17027788883" className="inline-block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-3 text-sm font-semibold text-[#0e0e0e]">Call (702) 778‑8883</a>
            <Link href="/contact" className="inline-block rounded-2xl border border-white/10 px-5 py-3 text-sm text-white/90">Request a free consultation</Link>
          </div>
        </article>

        <aside className="rounded-2xl border border-white/10 bg-white/4 p-4 shadow-lg">
          <div className="mb-3 text-sm font-semibold text-white">Quick facts</div>
          <p className="text-sm text-white/80">From petty theft to grand larceny, charges depend on value and intent — early defense often reduces exposure.</p>

          <div className="mt-4 grid gap-3">
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Typical outcome</div>
              <div className="text-lg font-semibold text-[#d4af37]">Plea / diversion</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Key defense</div>
              <div className="text-lg font-semibold text-[#d4af37]">Lack of intent</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Consultation</div>
              <div className="text-lg font-semibold text-[#d4af37]">Free</div>
            </div>
          </div>
        </aside>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg mb-8">
        <h3 className="text-lg font-semibold text-white mb-3">Next steps</h3>
        <p className="text-white/80 leading-relaxed mb-3">If you're charged with theft, preserve receipts and avoid making statements without counsel. Contact us to discuss defenses and options.</p>
        <p className="text-white/80 leading-relaxed">Call <a href="tel:17027788883" className="underline" style={{ textDecorationColor: '#d4af37' }}>702-778-8883</a> or submit the contact form.</p>
      </section>

      <footer className="text-sm text-white/60">© {new Date().getFullYear()} The Law Offices of Saggese & Associates.</footer>
    </>
  )
}
