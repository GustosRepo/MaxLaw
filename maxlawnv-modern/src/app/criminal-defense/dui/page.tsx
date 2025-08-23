import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export const metadata = {
  title: 'DUI Defense | Saggese & Associates',
  description: 'Experienced Las Vegas DUI defense attorneys. We protect your rights and work to minimize penalties and consequences.'
}

export default function DUIPage() {
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
          <h1 className="text-4xl font-['Playfair_Display'] font-bold text-[#d4af37] mb-2">DUI Defense</h1>
          <span className="accent-underline w-full rounded-full" aria-hidden />
        </div>
        <p className="text-white/75 mt-3">If you are charged with DUI, prompt action and experienced counsel can make a critical difference.</p>
      </header>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-8">
        <article className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg card-hover">
          <p className="mb-4 text-white/90 leading-relaxed">
            Our firm represents clients charged with DUI and related alcohol offenses. We review the stop, field sobriety tests, breath and blood testing procedures, and officer training records to identify weaknesses in the prosecution's case.
          </p>

          <p className="mb-4 text-white/90 leading-relaxed">
            Many successful defenses turn on lack of probable cause for the initial stop, improper maintenance or calibration of testing machines, or mistakes during sample collection. We also represent clients in the administrative DMV process to protect driving privileges.
          </p>

          <h3 className="mt-4 text-lg font-semibold text-white">Common defenses</h3>
          <ul className="mt-3 space-y-3 text-white/80">
            <li><span className="stat-number">•</span> Challenging probable cause for the traffic stop</li>
            <li><span className="stat-number">•</span> Questioning the reliability of field sobriety testing</li>
            <li><span className="stat-number">•</span> Attacking breath/blood testing procedures and chain of custody</li>
          </ul>

          <h3 className="mt-4 text-lg font-semibold text-white">Example scenario</h3>
          <p className="text-white/80 leading-relaxed mb-3">A driver involved in a minor collision was arrested after officers conducted a traffic stop without clear evidence of impairment. We examined dash-cam footage and police reports and identified inconsistencies that led to reduced charges.</p>

          <h3 className="mt-4 text-lg font-semibold text-white">Frequently asked questions</h3>
          <ul className="mt-3 space-y-2 text-white/80">
            <li><strong>Will I lose my license?</strong> Administrative suspension is possible, but prompt action and DMV representation can often preserve driving privileges.</li>
            <li><strong>Should I speak to police?</strong> Avoid detailed statements—consult counsel before answering questions that could be used against you.</li>
          </ul>

          <p className="mt-4 text-white/80 leading-relaxed">Call promptly after an arrest — early investigation and preservation of evidence often make the difference in these cases.</p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="tel:17027788883" className="inline-block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-3 text-sm font-semibold text-[#0e0e0e] shadow-md">Call (702) 778‑8883</a>
            <Link href="/contact" className="inline-block rounded-2xl border border-white/10 px-5 py-3 text-sm text-white/90 text-center">Request a free consultation</Link>
          </div>
        </article>

        <aside className="rounded-2xl border border-white/10 bg-white/4 p-4 shadow-lg">
          <div className="mb-3 text-sm font-semibold text-white">Quick facts</div>
          <p className="text-sm text-white/80">A DUI conviction can carry license suspension, fines, and jail; administrative steps may be time-sensitive.</p>

          <div className="mt-4 grid gap-3">
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Administrative deadline</div>
              <div className="text-lg font-semibold text-[#d4af37]">Short window</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Common outcomes</div>
              <div className="text-lg font-semibold text-[#d4af37]">Reduction / diversion</div>
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
        <p className="text-white/80 leading-relaxed mb-3">Do not consent to unnecessary searches and contact an attorney immediately. We will assess your case and move quickly to preserve evidence and administrative rights.</p>
        <p className="text-white/80 leading-relaxed">Call our office at <a href="tel:17027788883" className="underline" style={{ textDecorationColor: '#d4af37' }}>702-778-8883</a> or submit the contact form to request a consultation.</p>
      </section>

      <footer className="text-sm text-white/60">© {new Date().getFullYear()} The Law Offices of Saggese & Associates. All rights reserved.</footer>
    </>
  )
}
