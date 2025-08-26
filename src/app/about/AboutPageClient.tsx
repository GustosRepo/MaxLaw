"use client";

import React from 'react'
import Link from 'next/link'
import Breadcrumbs from '../components/Breadcrumbs'
import StructuredData from '../components/StructuredData'

// Note: This metadata will be handled by layout or parent component
// since this is now a client component
export default function AboutPage() {
  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' }
  ];

  return (
    <>
      <StructuredData 
        type="LegalService" 
        data={{
          name: "The Law Offices of Saggese & Associates",
          description: "Experienced Las Vegas law firm specializing in personal injury and criminal defense cases.",
          url: "https://www.maxlawnv.com/about",
          areaServed: "Las Vegas, Nevada",
          founder: "Marc A. Saggese"
        }}
      />
      
      <style jsx>{`
        @keyframes underlineIn { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        .accent-underline { display:block; height:6px; background:linear-gradient(90deg,#d4af37,#c5a467); transform-origin:left; animation:underlineIn .6s ease forwards; }
        .card-hover { transition:transform .26s ease, box-shadow .26s ease; }
        .card-hover:hover { transform:translateY(-6px); box-shadow:0 22px 60px rgba(0,0,0,0.6); }
        .gold-small { color:#d4af37 }
        .stagger-grid { display:grid; grid-template-columns: 1fr; gap:1.25rem; }
        .stagger-grid .card { will-change: transform; }
        .stagger-grid .card:nth-child(even) { padding-top: 0.5rem; }
        @media (min-width:768px) {
          .stagger-grid { grid-template-columns: repeat(2, 1fr); gap:1.5rem; }
          .stagger-grid .card { transition: transform .45s cubic-bezier(.2,.8,.2,1), box-shadow .28s ease; }
          .stagger-grid .card:nth-child(odd) { transform: translateY(0); }
          .stagger-grid .card:nth-child(even) { transform: translateY(36px); }
          .stagger-grid .card:hover { transform: translateY(calc(-6px + var(--stagger-offset,0))) scale(1.01); box-shadow:0 30px 80px rgba(0,0,0,0.6); }
        }
        .accent-underline { display:block; height:6px; background:linear-gradient(90deg,#d4af37,#c5a467); transform-origin:left; animation:underlineIn .6s ease forwards; border-radius:4px }
        .custom-bg { background-image: radial-gradient(circle at 8% 12%, rgba(191,167,106,0.03), transparent 6%), radial-gradient(circle at 90% 80%, rgba(255,255,255,0.02), transparent 22%), linear-gradient(180deg,#0e0e0e,#0f0f0f); background-size:cover }
        .card-hover { transition:transform .32s cubic-bezier(.2,.9,.3,1), box-shadow .28s ease, border-color .22s ease; will-change:transform }
        .card-hover:hover { transform:translateY(-8px) scale(1.01); box-shadow:0 34px 90px rgba(0,0,0,0.65); border-color:rgba(212,175,55,0.12) }
        .watermark { font-weight:900; color:rgba(255,255,255,0.06); letter-spacing:-2px; pointer-events:none }
        .lead { color: rgba(233,230,224,0.92); font-size:1.02rem }
        .muted { color: rgba(255,255,255,0.68) }
        @keyframes pulseGold { 0% { box-shadow:0 8px 24px rgba(212,175,55,0.12)} 50% { box-shadow:0 10px 34px rgba(212,175,55,0.18)} 100% { box-shadow:0 8px 24px rgba(212,175,55,0.12)} }
        .cta-pulse:hover { animation: pulseGold 1.6s infinite; }
      `}</style>

      <main className="min-h-screen custom-bg bg-gradient-to-br from-[#0e0e0e] to-[#0f0f0f] text-white font-[var(--font-inter)] py-12">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          
          <Breadcrumbs items={breadcrumbItems} />
          
          {/* Styled about header with subtle watermark and CTAs */}
          <div className="mb-8">
            <div className="relative rounded-3xl p-6 md:p-8 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg overflow-hidden">
              <div className="absolute -right-12 -top-6 text-[5.5rem] md:text-[8rem] font-black text-white/6 select-none pointer-events-none leading-none hidden md:block">Saggese</div>
              <div className="relative z-10">
                <h1 className="text-2xl md:text-3xl font-[var(--font-playfair)] font-bold text-[#bfa76a]">About the Firm</h1>
                <div className="mt-3 w-32"><span className="accent-underline" /></div>
                <p className="mt-3 text-sm text-white/80 max-w-3xl">The Law Offices of Saggese & Associates provides experienced representation in personal injury and criminal defense. We focus on individualized service, trial readiness, and protecting client rights through every stage of a case.</p>

                <div className="mt-4 flex items-center gap-3">
                  <a href="tel:17027788883" className="inline-block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-4 py-2 text-sm font-semibold text-[#0e0e0e] shadow-[0_10px_30px_rgba(212,175,55,0.2)]">Call (702) 778‑8883</a>
                  <Link href="/contact" className="inline-block rounded-2xl border border-white/10 px-4 py-2 text-sm text-white/90">Request Consultation</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Main content columns: left content, right narrow aside on md+ */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <main className="md:col-span-2 space-y-6">
              <article className="rounded-2xl p-6 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg">
                <h2 className="text-3xl md:text-4xl font-[var(--font-playfair)] font-bold text-white mb-3">Firm Overview</h2>
                <p className="text-white/80 mb-3">The Law Offices of Saggese & Associates was founded by Attorney Marc Anthony Saggese, who has been practicing law in Las Vegas since 1999. The firm represents clients facing criminal charges and individuals who have suffered a personal injury in an accident.</p>
                <p className="text-white/80 mb-3">Marc actively litigates cases, conducts jury trials, and has represented more than 2,500 clients. He has served as a pro tempore judge for the Las Vegas Municipal Court System and as a Traffic Court magistrate.</p>
                <h3 className="mt-6 text-2xl font-semibold">Media & Publications</h3>
                <p className="text-white/80 mb-3">Marc has appeared on Fox & Friends, On the Record with Greta Van Susteren, Court TV, and CBS’s 48 Hours to provide legal insight and analysis. He is a weekly contributing writer for the Las Vegas Review‑Journal and has been profiled in the Las Vegas Review‑Journal and Las Vegas Magazine.</p>
                <p className="text-white/80"><Link href="/about/marc-a-saggese" className="underline text-[#d4af37]">Learn more about Marc: Marc A. Saggese, Esq.</Link></p>
              </article>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-2xl p-6 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg">
                  <h3 className="text-2xl font-[var(--font-playfair)] font-bold mb-3">Biography (Selected)</h3>
                  <p className="text-white/80">Originally from Utica, New York, Marc obtained his Bachelor of Arts in Political Science from the State University of New York in 1995, graduating cum laude. He earned his Juris Doctor from The Catholic University of America, Columbus School of Law in 1999.</p>
                  <p className="text-white/80 mt-3">Marc was admitted to the Judge Advocate General (JAG) Corps in 2000, where he served as a Captain in the United States Army, undertaking litigation work for the Department of Justice. In 2003, after forming his own firm, Marc devoted his practice to civil and criminal matters.</p>
                </div>

                <div className="rounded-2xl p-6 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg">
                  <h3 className="text-2xl font-[var(--font-playfair)] font-bold mb-3">Awards & Recognition</h3>
                  <ul className="list-disc list-inside text-white/90">
                    <li>American Institute of Personal Injury Attorneys – named among the “10 Best Attorneys.”</li>
                    <li>Desert Companion Magazine – recognized among “the Valley’s Top Lawyers.”</li>
                    <li>Best of Las Vegas – Silver & Bronze (2017) and Silver (2018) awards.</li>
                  </ul>
                  <p className="text-xs text-white/60 mt-3">Past results, awards, or recognitions do not guarantee similar outcomes. Each case is unique.</p>
                </div>
              </div>

              <div className="rounded-2xl p-6 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg">
                <h3 className="text-2xl font-[var(--font-playfair)] font-bold mb-3">Education & Bar Admissions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/90">
                  <div>
                    <h4 className="font-semibold mb-2">Education</h4>
                    <ul className="list-disc pl-5">
                      <li>The Catholic University of America, Columbus School of Law — Juris Doctor, May 1999</li>
                      <li>State University of New York, College at Cortland — B.A., cum laude, Political Science, August 1995</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Bar Admissions</h4>
                    <ul className="list-disc pl-5">
                      <li>The Supreme Court, State of Nevada — Attorney and Counselor at Law (1999)</li>
                      <li>The United States Court of Military Appeals for the Armed Forces — Appellate Attorney (2000)</li>
                      <li>Other federal and state admissions</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="rounded-2xl p-6 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg">
                <h3 className="text-2xl font-[var(--font-playfair)] font-bold mb-4">Frequently Asked Questions</h3>
                <FAQ />
              </div>
            </main>

            <aside className="md:col-span-1 space-y-6">
              <div className="rounded-2xl p-6 bg-gradient-to-br from-white/4 to-transparent border border-white/8 shadow-lg text-center">
                <div className="text-sm font-semibold text-white mb-2">Contact</div>
                <div className="text-white/80 mb-4">Free consultation • Same‑day appointments</div>
                <a href="tel:17027788883" className="block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-4 py-3 text-sm font-semibold text-[#0e0e0e] mb-3">Call (702) 778‑8883</a>
                <Link href="/contact" className="block rounded-2xl border border-white/10 px-4 py-3 text-sm text-white/90">Request a consultation</Link>
              </div>

              <div className="rounded-2xl p-6 bg-gradient-to-br from-white/5 to-transparent border border-white/8 shadow-lg">
                <div className="text-sm font-semibold text-white mb-2">Office</div>
                <address className="not-italic text-white/80">
                  <div>The Law Offices of Saggese & Associates</div>
                  <div>732 S. 6th Street, Suite 201</div>
                  <div>Las Vegas, NV 89101</div>
                </address>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}

// Small FAQ component for the about page
function FAQ() {
  const faqs = [
    { q: 'What types of cases do you handle?', a: 'We handle personal injury and criminal defense matters with trial-ready representation for serious cases.' },
    { q: 'Do you offer free consultations?', a: 'Yes — we provide free initial consultations to discuss your case and options.' },
    { q: 'How do I schedule a consultation?', a: 'Call our office at (702) 778‑8883 or use the contact form to request an appointment.' },
  ];
  const [open, setOpen] = React.useState<number | null>(0);

  // Create FAQ structured data
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <>
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <div className="space-y-3">
        {faqs.map((f, i) => (
          <div key={i} className="border border-white/6 rounded-lg overflow-hidden">
            <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between px-4 py-3 text-left">
              <span className="font-medium">{f.q}</span>
              <span className={`ml-4 transition-transform ${open === i ? 'rotate-180' : 'rotate-0'}`}>▾</span>
            </button>
            {open === i && <div className="px-4 pb-4 text-white/80">{f.a}</div>}
          </div>
        ))}
      </div>
    </>
  );
}
