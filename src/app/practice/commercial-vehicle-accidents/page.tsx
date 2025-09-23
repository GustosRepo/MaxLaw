import React from 'react'
import Link from 'next/link'
import { SITE_URL } from '@/lib/constants'
import PracticeStructuredData from '../PracticeStructuredData'

export const metadata = {
  title: 'Las Vegas Commercial Vehicle Accident Lawyer | Saggese & Associates',
  description: 'Las Vegas commercial vehicle accident lawyer handling bus, van & fleet crashes with multi-party liability. Free consultation (702) 778‑8883.',
  keywords: [
    'las vegas commercial vehicle accident lawyer',
    'bus crash attorney nevada',
    'delivery van accident lawyer',
    'fleet liability attorney las vegas'
  ],
  alternates: { canonical: `${SITE_URL}/practice/commercial-vehicle-accidents` },
  openGraph: {
    title: 'Las Vegas Commercial Vehicle Accident Lawyer',
    description: 'Bus, fleet & commercial vehicle crash claims – free consultation.',
    url: `${SITE_URL}/practice/commercial-vehicle-accidents`,
    type: 'article'
  },
  twitter: { card: 'summary', title: 'Commercial Vehicle Accident Lawyer', description: 'Fleet or bus crash? Free consultation.' }
}

export default function CommercialVehicleAccidentsPage() {
  return (
    <>
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

      {/* Content only — PracticeLayout supplies the outer main/container */}

      <header className="mb-6">
        <div className="relative inline-block">
          <h1 className="text-3xl sm:text-4xl font-['Playfair_Display'] font-bold text-[#d4af37] mb-2">Commercial Vehicle Accidents</h1>
          <span className="accent-underline w-full rounded-full" aria-hidden />
        </div>
        <p className="text-white/75 mt-3">When a commercial vehicle is involved in a crash, liability can include the employer, dispatcher, or vehicle maintainer. We investigate corporate responsibility and safety practices.</p>
      </header>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-8">
        <article className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg card-hover">
          <p className="mb-4 text-white/90 leading-relaxed">
            When a commercial vehicle is involved in a crash, liability can include the employer, dispatcher, or vehicle maintainer. We investigate corporate responsibility and safety practices.
          </p>

          <p className="mb-4 text-white/90 leading-relaxed">
            We handle claims involving buses, ride-share vehicles, delivery vans, and municipal fleets. Our firm traces responsibility through hiring practices, training, and maintenance records to identify all at-fault parties.
          </p>

          <h3 className="mt-4 text-lg font-semibold text-white">Facts about commercial vehicle accidents</h3>
          <ul className="mt-3 space-y-3 text-white/80">
            <li><span className="stat-number">•</span> Commercial vehicles are involved in <strong className="text-[#d4af37]">450,000+</strong> accidents annually.</li>
            <li><span className="stat-number">•</span> <strong className="text-[#d4af37]">Multiple parties</strong> may be liable in commercial vehicle crashes.</li>
            <li><span className="stat-number">•</span> Employer liability often extends beyond the driver.</li>
            <li><span className="stat-number">•</span> Training and maintenance records are crucial evidence.</li>
            <li><span className="stat-number">•</span> Corporate negligence can increase damages significantly.</li>
          </ul>

          <p className="mt-4 text-white/80 leading-relaxed">Proving employer liability often requires document review and depositions; we are prepared to pursue comprehensive discovery to reveal negligence.</p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="tel:17027788883" className="inline-block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-3 text-sm font-semibold text-[#0e0e0e] shadow-md">Call (702) 778‑8883</a>
            <Link href="/contact" className="inline-block rounded-2xl border border-white/10 px-5 py-3 text-sm text-white/90 text-center">Request a free consultation</Link>
          </div>

        </article>

        <aside className="rounded-2xl border border-white/10 bg-white/4 p-4 shadow-lg">
          <div className="mb-3 text-sm font-semibold text-white">Corporate liability</div>
          <p className="text-sm text-white/80">Commercial vehicle accidents often involve complex liability chains requiring investigation of corporate practices and policies.</p>

          <div className="mt-4 grid gap-3">
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Annual accidents</div>
              <div className="text-lg font-semibold text-[#d4af37]">450,000+</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Liable parties</div>
              <div className="text-lg font-semibold text-[#d4af37]">Multiple</div>
            </div>
            <div className="rounded-lg bg-neutral-900 p-3 text-sm">
              <div className="text-xs text-white/75">Evidence types</div>
              <div className="text-lg font-semibold text-[#d4af37]">Extensive</div>
            </div>
          </div>
        </aside>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg mb-8">
        <h3 className="text-lg font-semibold text-white mb-3">How we help</h3>
        <p className="text-white/80 leading-relaxed mb-3">We pursue claims against employers and third parties when liability extends beyond the driver, and we coordinate with regulators when safety violations occur.</p>
        <p className="text-white/80 leading-relaxed">Call <a href="tel:17027788883" className="underline" style={{ textDecorationColor: '#d4af37' }}>702-778-8883</a> or use our contact form.</p>
      </section>

  {/* Footer removed */}
      <PracticeStructuredData
        slug="/practice/commercial-vehicle-accidents"
        serviceType="Las Vegas Commercial Vehicle Accident Lawyer"
        description="Las Vegas commercial vehicle accident lawyer handling bus, van & fleet crashes with multi-party liability. Free consultation."
        keywords={['las vegas commercial vehicle accident lawyer','bus crash attorney','delivery van accident lawyer']}
        faqs={[
          { question: 'Who may be liable in a commercial vehicle accident?', answer: 'Driver, employer, maintenance provider, parts manufacturer, or contractor dispatching the vehicle.' },
          { question: 'What evidence is critical?', answer: 'Maintenance logs, driver qualification file, telematics, hours-of-service, and corporate policies.' }
        ]}
      />
    </>
  )
}
