import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export const metadata = {
  title: 'Truck Accidents | Saggese & Associates',
  description: 'Complex truck collision claims — multivehicle, commercial carriers, and catastrophic injury. We handle federal rules and large insurers.'
}

export default function TruckAccidentsPage() {
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

      {/* Content only — provided by PracticeLayout */}
      <header className="mb-6">
        <div className="relative inline-block">
          <h1 className="text-4xl font-['Playfair_Display'] font-bold text-[#d4af37] mb-2">Truck Accidents</h1>
          <span className="accent-underline w-full rounded-full" aria-hidden />
        </div>
        <p className="text-white/75 mt-3">Large trucks and commercial vehicles cause devastating injuries. We investigate hours-of-service, maintenance, and carrier liability to hold negligent parties accountable.</p>
      </header>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-8">
        <article className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg card-hover">
          <p className="mb-4 text-white/90 leading-relaxed">
            Truck collisions are often governed by federal regulations and involve multiple liable parties — drivers, trucking companies, mechanics, and manufacturers. Our firm has experience coordinating complex investigations and litigation against deep-pocketed defendants.
          </p>

          <p className="mb-4 text-white/90 leading-relaxed">
            Large trucks and commercial vehicles cause devastating injuries. We investigate hours-of-service, maintenance, and carrier liability to hold negligent parties accountable with regulatory and carrier investigations.
          </p>

          <h3 className="mt-4 text-lg font-semibold text-white">Facts about truck accidents</h3>
          <ul className="mt-3 space-y-3 text-white/80">
            <li><span className="stat-number">•</span> Commercial trucks are involved in over <strong className="text-[#d4af37]">500,000</strong> accidents annually.</li>
            <li><span className="stat-number">•</span> Truck accidents result in <strong className="text-[#d4af37]">5,000+</strong> fatalities each year.</li>
            <li><span className="stat-number">•</span> Driver fatigue contributes to <strong className="text-[#d4af37]">13%</strong> of commercial vehicle crashes.</li>
            <li><span className="stat-number">•</span> Brake problems account for <strong className="text-[#d4af37]">29%</strong> of truck accidents.</li>
            <li><span className="stat-number">•</span> Federal regulations govern hours-of-service and maintenance requirements.</li>
          </ul>

          <p className="mt-4 text-white/80 leading-relaxed">We subpoena driver logs, maintenance records, and GPS/ELD data to build a timeline and assign responsibility.</p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="tel:17027788883" className="inline-block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-3 text-sm font-semibold text-[#0e0e0e] shadow-md">Call (702) 778‑8883</a>
            <Link href="/contact" className="inline-block rounded-2xl border border-white/10 px-5 py-3 text-sm text-white/90 text-center">Request a free consultation</Link>
          </div>

        </article>

        <aside className="rounded-2xl border border-white/10 bg-white/4 p-4 shadow-lg">
          <div className="mb-3 text-sm font-semibold text-white">Truck accident complexity</div>
          <p className="text-sm text-white/80">Commercial vehicle accidents involve federal regulations, multiple parties, and complex liability chains requiring specialized legal expertise.</p>

          <div className="mt-4 grid gap-3">
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Annual accidents</div>
              <div className="text-lg font-semibold text-[#d4af37]">500,000+</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Fatalities</div>
              <div className="text-lg font-semibold text-[#d4af37]">5,000+</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Brake issues</div>
              <div className="text-lg font-semibold text-[#d4af37]">29%</div>
            </div>
          </div>
        </aside>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg mb-8">
        <h3 className="text-lg font-semibold text-white mb-3">How we help</h3>
        <p className="text-white/80 leading-relaxed mb-3">We engage accident reconstructionists and industry experts, obtain ELD and maintenance records, and pursue every available source of compensation.</p>
        <p className="text-white/80 leading-relaxed">Call <a href="tel:17027788883" className="underline" style={{ textDecorationColor: '#d4af37' }}>702-778-8883</a> or use our contact form.</p>
      </section>

      <footer className="text-sm text-white/60">© {new Date().getFullYear()} The Law Offices of Saggese & Associates. All rights reserved.</footer>
    </>
  )
}
