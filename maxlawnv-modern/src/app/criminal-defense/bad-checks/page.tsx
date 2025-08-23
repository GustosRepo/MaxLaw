import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export const metadata = {
  title: 'Bad Checks Defense | Saggese & Associates',
  description: 'Defense for bad check and negotiable instrument charges. Protect your financial and criminal exposure.'
}

export default function BadChecksPage() {
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
        `}</style>
      </Head>

      {/* Content only — PracticeLayout provides the outer wrapper and sidebar */}

      <header className="mb-6">
        <div className="relative inline-block">
          <h1 className="text-4xl font-['Playfair_Display'] font-bold text-[#d4af37] mb-2">Bad Checks & Financial Offenses</h1>
          <span className="accent-underline w-full rounded-full" aria-hidden />
        </div>
        <p className="text-white/75 mt-3">Allegations involving bad checks can lead to criminal charges and civil exposure; swift, experienced counsel matters.</p>
      </header>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-8">
        <article className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg card-hover">
          <p className="mb-4 text-white/90 leading-relaxed">
            Many alleged bad-check matters start as bookkeeping mistakes, miscommunications, or civil disputes rather than intentional fraud. Prosecutors, however, can bring criminal charges that carry fines and possible jail time. We examine the underlying transaction, bank records, and communications to determine whether the elements of a crime are actually present.
          </p>

          <p className="mb-4 text-white/90 leading-relaxed">
            Example scenarios include a business dispute over payment, a forged endorsement, or a genuine accounting error. Our goal is to uncover documentary evidence that explains the circumstances and to identify procedural weaknesses in the prosecution's case.
          </p>

          <h3 className="mt-4 text-lg font-semibold text-white">Common defenses</h3>
          <ul className="mt-3 space-y-3 text-white/80">
            <li><span className="stat-number">•</span> Lack of intent — demonstrating the transaction was a mistake.</li>
            <li><span className="stat-number">•</span> Documentary proof of payment, endorsement, or a resolved dispute.</li>
            <li><span className="stat-number">•</span> Procedural issues, such as improper notice or chain-of-custody problems.</li>
          </ul>

          <h3 className="mt-4 text-lg font-semibold text-white">What to expect</h3>
          <p className="text-white/80 leading-relaxed mb-3">We often pursue early resolution through restitution, creditor negotiation, or diversion programs when appropriate. When charges cannot be resolved, we prepare a tailored defense for pretrial motions or trial.</p>

          <h3 className="mt-4 text-lg font-semibold text-white">Frequently asked questions</h3>
          <ul className="mt-3 space-y-2 text-white/80">
            <li className="leading-relaxed"><strong>Will I go to jail?</strong> Many bad-check cases are resolved without incarceration, but outcomes depend on the facts, prior record, and the dollar amount involved.</li>
            <li className="leading-relaxed"><strong>Can restitution resolve the case?</strong> Often restitution and negotiated agreements can avoid harsher penalties, but timely counsel is critical.</li>
          </ul>

          <p className="mt-4 text-white/80 leading-relaxed">If you’ve been contacted about an alleged bad check, preserve bank records and communications and call promptly so we can assess options and protect your interests.</p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="tel:17027788883" className="inline-block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-3 text-sm font-semibold text-[#0e0e0e] shadow-md">Call (702) 778‑8883</a>
            <Link href="/contact" className="inline-block rounded-2xl border border-white/10 px-5 py-3 text-sm text-white/90 text-center">Request a free consultation</Link>
          </div>
        </article>

        <aside className="rounded-2xl border border-white/10 bg-white/4 p-4 shadow-lg">
          <div className="mb-3 text-sm font-semibold text-white">Quick facts</div>
          <p className="text-sm text-white/80">Many bad-check matters can be resolved without criminal convictions; early legal help increases the chances of a favorable outcome.</p>

          <div className="mt-4 grid gap-3">
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Avg. resolution time</div>
              <div className="text-lg font-semibold text-[#d4af37]">30–90 days</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Common outcome</div>
              <div className="text-lg font-semibold text-[#d4af37]">Restitution / diversion</div>
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
        <p className="text-white/80 leading-relaxed mb-3">If you are under investigation or have been charged, preserve documents, avoid admissions, and call an attorney. We will review options and act quickly to protect your rights.</p>
        <p className="text-white/80 leading-relaxed">Call our office at <a href="tel:17027788883" className="underline" style={{ textDecorationColor: '#d4af37' }}>702-778-8883</a> or submit the contact form to request a consultation.</p>
      </section>

      <footer className="text-sm text-white/60">© {new Date().getFullYear()} The Law Offices of Saggese & Associates. All rights reserved.</footer>
    </>
  )
}
