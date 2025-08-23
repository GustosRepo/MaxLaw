import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export const metadata = {
  title: 'Sexual Assault Defense | Saggese & Associates',
  description: 'Defense for sexual assault and related charges. Compassionate, vigorous defense with respect for privacy.'
}

export default function SexualAssaultPage() {
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
          <h1 className="text-4xl font-['Playfair_Display'] font-bold text-[#d4af37] mb-2">Sexual Assault Defense</h1>
          <span className="accent-underline w-full rounded-full" aria-hidden />
        </div>
        <p className="text-white/75 mt-3">We provide experienced defense for sexual assault allegations, prioritizing privacy, due process, and aggressive advocacy.</p>
      </header>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-8">
        <article className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg card-hover">
          <p className="mb-4 text-white/90 leading-relaxed">Sexual assault matters demand both sensitivity and careful legal strategy. We investigate every element of the allegation, consult with experts where appropriate, and challenge investigative or evidentiary flaws.</p>

          <h3 className="mt-4 text-lg font-semibold text-white">Defense priorities</h3>
          <ul className="mt-3 space-y-2 text-white/80">
            <li>Assess forensic evidence and chain of custody</li>
            <li>Question witness reliability and timelines</li>
            <li>Protect privacy while pursuing vigorous defense</li>
          </ul>

          <h3 className="mt-4 text-lg font-semibold text-white">Frequently asked</h3>
          <ul className="mt-3 space-y-2 text-white/80">
            <li><strong>Will my case be public?</strong> We take steps to protect privacy where possible and advise on managing public exposure.</li>
            <li><strong>Is it possible to dismiss?</strong> Dismissal is possible when evidence is insufficient or procedurally defective; we evaluate all options vigorously.</li>
          </ul>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="tel:17027788883" className="inline-block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-3 text-sm font-semibold text-[#0e0e0e]">Call (702) 778‑8883</a>
            <Link href="/contact" className="inline-block rounded-2xl border border-white/10 px-5 py-3 text-sm text-white/90">Request a free consultation</Link>
          </div>
        </article>

        <aside className="rounded-2xl border border-white/10 bg-white/4 p-4 shadow-lg">
          <div className="mb-3 text-sm font-semibold text-white">Quick facts</div>
          <p className="text-sm text-white/80">These matters are sensitive; we protect privacy while building a robust defense.</p>

          <div className="mt-4 grid gap-3">
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Primary focus</div>
              <div className="text-lg font-semibold text-[#d4af37]">Privacy & due process</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Potential outcome</div>
              <div className="text-lg font-semibold text-[#d4af37]">Dismissal / trial</div>
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
        <p className="text-white/80 leading-relaxed mb-3">Preserve privacy, avoid contact with alleged victims, and consult counsel immediately. We will investigate and protect your rights.</p>
        <p className="text-white/80 leading-relaxed">Call our office at <a href="tel:17027788883" className="underline" style={{ textDecorationColor: '#d4af37' }}>702-778-8883</a> or submit the contact form to request a consultation.</p>
      </section>

      <footer className="text-sm text-white/60">© {new Date().getFullYear()} The Law Offices of Saggese & Associates.</footer>
    </>
  )
}
