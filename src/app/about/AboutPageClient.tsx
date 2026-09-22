"use client";

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumbs from '../components/Breadcrumbs'
import StructuredData from '../components/StructuredData'
import GoogleReviews from '../components/GoogleReviews';
import { MARC_AWARDS, MARC_HEADSHOT_SRC, TOTAL_RECOVERED_DISPLAY } from '../../lib/constants';

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
          description: "Experienced Las Vegas law firm specializing in injury and criminal defense cases.",
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

        .pill { border:1px solid rgba(255,255,255,.12); background:linear-gradient(180deg,rgba(255,255,255,.05),transparent); border-radius:999px; padding:.35rem .75rem; font-size:.8rem }
        .kpi { display:flex; flex-direction:column; align-items:center; justify-content:center; padding:1rem; border:1px solid rgba(255,255,255,.08); border-radius:1rem; background:linear-gradient(180deg,rgba(255,255,255,.04),transparent) }
        .kpi b { font-size:1.6rem; letter-spacing:-.02em }
        .badge { border:1px dashed rgba(255,255,255,.18); padding:.5rem .75rem; border-radius:.6rem; font-size:.8rem; background:rgba(255,255,255,.03) }
        .tick::before{ content:'✓'; margin-right:.5rem; color:#d4af37 }
        .timeline { position:relative; }
        .timeline:before { content:''; position:absolute; left:1.05rem; top:.25rem; bottom:.25rem; width:2px; background:linear-gradient(#d4af37, rgba(212,175,55,.15)); }
        .timeline .step { position:relative; padding-left:2.5rem; margin:1rem 0; }
        .timeline .dot { position:absolute; left:.65rem; top:.25rem; width:.9rem; height:.9rem; border-radius:999px; background:#d4af37; box-shadow:0 0 0 4px rgba(212,175,55,.18) }
        .quote { font-size:1.05rem; line-height:1.6; color:rgba(255,255,255,.88) }
        .quote:before { content:'“'; color:#d4af37; margin-right:.25rem; }
        .quote:after { content:'”'; color:#d4af37; margin-left:.25rem; }
        .carousel { position:relative; overflow:hidden; }
        .carousel-item { transition:opacity .35s ease; }
      `}</style>

      <main className="min-h-screen custom-bg bg-gradient-to-br from-[#0e0e0e] to-[#0f0f0f] text-white font-[var(--font-inter)] py-12 text-center">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex justify-center mb-4">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
          
          {/* Styled about header with subtle watermark and CTAs */}
          <div className="mb-8">
            <div className="relative rounded-3xl p-6 md:p-8 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg overflow-hidden">
              <div className="absolute -right-12 -top-6 text-[5.5rem] md:text-[8rem] font-black text-white/6 select-none pointer-events-none leading-none hidden md:block">Saggese</div>
              <div className="relative z-10 text-center">
                <h1 className="text-2xl md:text-3xl font-[var(--font-playfair)] font-bold text-[#bfa76a]">About the Firm</h1>
                <div className="mt-3 w-32"><span className="accent-underline" /></div>
                <p className="mt-3 text-sm text-white/80 max-w-3xl mx-auto">The Law Offices of Saggese & Associates provides experienced representation in injury and criminal defense. We focus on individualized service, trial readiness, and protecting client rights through every stage of a case.</p>
                <div className="mt-4 flex items-center gap-3 justify-center">
                  <a href="tel:17027788883" className="inline-block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-4 py-2 text-sm font-semibold text-[#0e0e0e] shadow-[0_10px_30px_rgba(212,175,55,0.2)]">Call (702) 778‑8883</a>
                  <Link href="/contact" className="inline-block rounded-2xl border border-white/10 px-4 py-2 text-sm text-white/90">Request Consultation</Link>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  <span className="pill">Over 25 years serving Las Vegas</span>
                  <span className="pill">Trial‑ready representation</span>
                  <span className="pill">Free consultation</span>
                </div>
              </div>
            </div>
          </div>

          <section className="mb-10 overflow-hidden rounded-3xl border border-[#d4af37]/20 bg-gradient-to-br from-white/[0.06] to-transparent p-6 text-left shadow-lg md:p-8">
            <div className="grid grid-cols-1 gap-7 md:grid-cols-[minmax(240px,320px)_1fr] md:items-center">
              <div className="mx-auto w-full max-w-[280px] md:max-w-none">
                <div className="relative aspect-[1320/1604] overflow-hidden rounded-2xl border border-[#d4af37]/20 bg-black/40 shadow-[0_28px_70px_rgba(0,0,0,0.45)]">
                  <Image
                    src={MARC_HEADSHOT_SRC}
                    alt="Marc A. Saggese"
                    fill
                    sizes="(min-width: 768px) 320px, 80vw"
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d4af37]">Founder & Lead Attorney</p>
                <h2 className="mt-2 text-3xl font-[var(--font-playfair)] font-bold text-white md:text-4xl">Marc A. Saggese, Esq.</h2>
                <p className="mt-4 text-base leading-relaxed text-white/82">Marc Anthony Saggese founded The Law Offices of Saggese and Associates and has been practicing law in Las Vegas since 1999. The firm represents those facing criminal charges, as well as those who have experienced an injury in an accident.</p>
                <p className="mt-3 text-base leading-relaxed text-white/78">Marc actively litigates cases, conducts jury trials and has represented more than 5,000 clients. He has also served as a pro tempore judge for the Las Vegas Municipal Court System, as well as a Small Claims Court judge and Traffic Court magistrate.</p>
                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <div className="kpi"><b>1999</b><span className="text-sm text-white/70">Practicing since</span></div>
                  <div className="kpi"><b>5,000+</b><span className="text-sm text-white/70">Clients represented</span></div>
                  <div className="kpi"><b>25+</b><span className="text-sm text-white/70">Years experience</span></div>
                </div>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a href="tel:17027788883" className="inline-flex justify-center rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-3 text-sm font-semibold text-[#0e0e0e] shadow-[0_10px_30px_rgba(212,175,55,0.2)]">Call (702) 778‑8883</a>
                  <Link href="/about/marc-a-saggese" className="inline-flex justify-center rounded-2xl border border-white/12 px-5 py-3 text-sm font-semibold text-white/90">Full Marc Bio</Link>
                </div>
              </div>
            </div>
          </section>

          {/* Main content unified centered column */}
          <div className="space-y-10 max-w-4xl mx-auto">
            <main className="space-y-8">
              <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-6 text-center">
                <div className="kpi"><b>5,000+</b><span className="text-white/70 text-sm">Clients represented</span></div>
                <div className="kpi"><b>1999</b><span className="text-white/70 text-sm">Practicing since</span></div>
                <div className="kpi"><b>24/7</b><span className="text-white/70 text-sm">Case intake</span></div>
                <div className="kpi"><b>Free</b><span className="text-white/70 text-sm">Initial consult</span></div>
              </section>

              <article className="rounded-2xl p-6 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg text-center">
                <h2 className="text-3xl md:text-4xl font-[var(--font-playfair)] font-bold text-white mb-3 text-center">Firm Overview</h2>
                <p className="text-white/80 mb-3">The Law Offices of Saggese and Associates was founded by Attorney Marc Anthony Saggese, who has been practicing law in Las Vegas since 1999. Our firm represents those facing criminal charges, as well as those who have experienced an injury in an accident.</p>
                <p className="text-white/80 mb-3">Marc actively litigates cases, conducts jury trials and has represented more than 5,000 clients. In addition, for years he was a pro tempore judge for the Las Vegas Municipal Court System, as well as a Small Claims Court judge and Traffic Court magistrate.</p>
                <h3 className="mt-6 text-2xl font-semibold">Media & Publications</h3>
                <p className="text-white/80 mb-3">Marc has appeared on Fox and Friends, On the Record with Greta VanSusteren, Court TV and CBS&apos;s 48 Hours to provide legal insight and analysis. He is a weekly contributing writer for the Las Vegas Review Journal and has been profiled in the Las Vegas Review Journal and Las Vegas Magazine.</p>
                <p className="text-white/80"><Link href="/about/marc-a-saggese" className="underline text-[#d4af37]">Learn more about Marc: Marc A. Saggese, Esq.</Link></p>
              </article>

              <section className="rounded-2xl p-6 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg text-center">
                <h3 className="text-2xl font-[var(--font-playfair)] font-bold mb-3">Why Clients Choose Us</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/85 text-center">
                  <div className="tick">Direct access to counsel — not just case managers.</div>
                  <div className="tick">Aggressive, trial‑ready posture from day one.</div>
                  <div className="tick">Clear communication and case transparency.</div>
                  <div className="tick">No fee unless we win injury cases.</div>
                </div>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-2xl p-6 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg text-center">
                  <h3 className="text-2xl font-[var(--font-playfair)] font-bold mb-3">Biography</h3>
                  <p className="text-white/80">Marc obtained his Bachelor of Arts in political science from the State University of New York in 1995, graduating with honors. Marc continued on to earn his Juris Doctor from the Catholic University of America, Columbus School of Law, in Washington, DC, in 1999.</p>
                  <p className="text-white/80 mt-3">Marc was admitted to the Judge Advocate General Corps in 2000 where he served as a Captain in the United States Army, undertaking litigation work for the Department of Justice. Upon forming his own firm in 2003, Marc devoted his practice to civil and criminal matters, finding that passionate defense work was how he best served his community.</p>
                  <p className="text-white/80 mt-3">In 2010, after building a distinguished reputation through trials, his skills of persuasion and tenacious style in the courtroom caught the attention of Hollywood. Marc became the inspiration for Pete Kaczmarek, portrayed by Jerry O&apos;Connell, in the CBS primetime television drama <em>&quot;The Defenders.&quot;</em> He worked alongside the show&apos;s writers to provide legal authenticity to scenes and storylines, and episodes were based on clients or issues he had previously litigated.</p>
                </div>

                <div className="rounded-2xl p-6 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg text-center">
                  <h3 className="text-2xl font-[var(--font-playfair)] font-bold mb-3">Awards & Recognition</h3>
                  <ul className="grid grid-cols-1 gap-3 text-left text-sm leading-relaxed text-white/90 md:grid-cols-2">
                    {MARC_AWARDS.map((award, index) => (
                      <li key={`${award}-${index}`} className="rounded-xl border border-white/10 bg-black/25 px-4 py-3">{award}</li>
                    ))}
                  </ul>
                  <p className="text-xs text-white/60 mt-3">Past results, awards, or recognitions do not guarantee similar outcomes. Each case is unique.</p>
                </div>
              </div>

              <section className="rounded-2xl p-6 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg text-center">
                <h3 className="text-2xl font-[var(--font-playfair)] font-bold mb-3">Case Types & Results</h3>
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  <Link href="/practice/car-accidents" className="badge hover:border-[#d4af37]/45 hover:text-[#d4af37]">Auto Accidents</Link>
                  <span className="badge">Slip & Fall</span>
                  <span className="badge">DUI Defense</span>
                  <span className="badge">Domestic Matters</span>
                  <span className="badge">Felonies & Misdemeanors</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white/90">
                  <div className="kpi"><b>{TOTAL_RECOVERED_DISPLAY}</b><span className="text-sm text-white/70">Reported client recoveries*</span></div>
                  <div className="kpi"><b>1000s</b><span className="text-sm text-white/70">of hearings & motions</span></div>
                  <div className="kpi"><b>Top</b><span className="text-sm text-white/70">Local media legal analyst</span></div>
                </div>
                <p className="text-xs text-white/60 mt-3">*Past results do not guarantee similar outcomes.
                </p>
              </section>

              <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch text-center">
                <div className="rounded-2xl p-6 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg text-center">
                  <h3 className="text-2xl font-[var(--font-playfair)] font-bold mb-3">What Working With Us Looks Like</h3>
                  <div className="timeline">
                    <div className="step">
                      <span className="dot"></span>
                      <div className="font-semibold">1) Free Case Review</div>
                      <div className="text-white/75 text-sm">We evaluate your case and outline strategy.
                      </div>
                    </div>
                    <div className="step">
                      <span className="dot"></span>
                      <div className="font-semibold">2) Evidence & Investigation</div>
                      <div className="text-white/75 text-sm">We gather police reports, medical records, and witness statements.</div>
                    </div>
                    <div className="step">
                      <span className="dot"></span>
                      <div className="font-semibold">3) Negotiation or Trial</div>
                      <div className="text-white/75 text-sm">We pursue the best possible outcome — settlement or verdict.</div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl p-6 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg text-center">
                  <h3 className="text-2xl font-[var(--font-playfair)] font-bold mb-3">Your Attorney</h3>
                  <div className="flex items-center gap-4 justify-center">
                    <Image
                      src={MARC_HEADSHOT_SRC}
                      alt="Marc A. Saggese"
                      width={80}
                      height={80}
                      className="w-20 h-20 rounded-xl object-cover border border-white/10"
                    />
                    <div>
                      <div className="text-xl font-semibold">Marc A. Saggese, Esq.</div>
                      <div className="text-white/70 text-sm">Lead Trial Attorney</div>
                      <Link href="/about/marc-a-saggese" className="text-[#d4af37] underline text-sm">Full bio & media</Link>
                    </div>
                  </div>
                  <p className="text-white/80 mt-4">Marc has tried numerous cases to verdict and regularly appears as a legal commentator. Clients value his direct, hands‑on approach to each case.</p>
                </div>
              </section>

              {/* Social proof: testimonials + FAQ */}
                <section className="rounded-2xl p-6 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg text-center">
                <h3 className="text-2xl font-[var(--font-playfair)] font-bold mb-4">What Clients Say</h3>
                <GoogleReviews />
                </section>

              <div className="rounded-2xl p-6 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg mt-6 text-center">
                <h3 className="text-2xl font-[var(--font-playfair)] font-bold mb-4 text-center">Frequently Asked Questions</h3>
                <FAQ />
              </div>
            </main>
            <div className="rounded-2xl p-6 md:p-8 bg-gradient-to-r from-[#d4af37]/15 via-[#c5a467]/10 to-transparent border border-white/10 text-center">
              <div className="text-xl md:text-2xl font-semibold mb-2">Injured or facing charges? Get answers today.</div>
              <div className="text-white/80 mb-4">Free, confidential consultation — no strings attached.</div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="tel:17027788883" className="inline-block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-3 text-sm font-semibold text-[#0e0e0e]">Call (702) 778‑8883</a>
                <Link href="/contact" className="inline-block rounded-2xl border border-white/10 px-5 py-3 text-sm text-white/90">Request Consultation</Link>
              </div>
            </div>
            {/* Removed secondary contact/office grid to avoid duplicate CTAs */}
          </div>
        </div>
      </main>
    </>
  );
}

// Small FAQ component for the about page
function FAQ() {
  const faqs = [
    { q: 'What types of cases do you handle?', a: 'We handle injury and criminal defense matters with trial-ready representation for serious cases.' },
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
            <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between px-4 py-3">
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
