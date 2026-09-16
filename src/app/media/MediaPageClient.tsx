"use client";

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FEATURED_MEDIA_APPEARANCES } from '../../lib/constants'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

// Note: Metadata handled by layout since this is a client component
export default function MediaPage() {
  return (
    <>
      <style jsx>{`
        .accent-underline { display:block; height:6px; background:linear-gradient(90deg,#d4af37,#c5a467); transform-origin:left; }
        .card-hover { transition:transform .32s cubic-bezier(.2,.9,.3,1), box-shadow .28s ease; }
        .card-hover:hover { transform:translateY(-8px) scale(1.01); box-shadow:0 34px 90px rgba(0,0,0,0.65); }
        .custom-bg { background-image: radial-gradient(circle at 8% 12%, rgba(191,167,106,0.03), transparent 6%), radial-gradient(circle at 90% 80%, rgba(255,255,255,0.02), transparent 22%), linear-gradient(180deg,#0e0e0e,#0f0f0f); }
        .badges-wrap { overflow:hidden; position:relative; padding:12px 0 }
        .badges-track { display:flex; gap:24px; align-items:center; animation:marquee 30s linear infinite }
        .badge-pill { height:64px; min-width:120px; display:flex; align-items:center; justify-content:center; padding:8px 12px; background:rgba(255,255,255,0.03); border-radius:10px; color:#fff; font-weight:600; font-size:13px }
        @keyframes marquee { 0% { transform:translateX(0) } 100% { transform:translateX(-50%) } }
        .social-media { display:flex; gap:10px; align-items:center; justify-content:center }
        .social-pill { display:inline-flex; align-items:center; justify-content:center; padding:6px 10px; background:rgba(255,255,255,0.02); border-radius:8px; font-size:13px; color:#fff; text-decoration:none }
        .media-wrap { display:flex; gap:16px; align-items:flex-start }
        .media-thumb { width:160px; height:100px; display:flex; align-items:center; justify-content:center; border-radius:8px; background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01)); color:#ddd; font-weight:600 }
        .media-info a.current { color:#d4af37; text-decoration:underline }
        .short-form-wrap { margin-top:24px }
        .short-contact-btn { display:inline-block; background:linear-gradient(90deg,#d4af37,#c5a467); color:#0e0e0e; padding:10px 14px; border-radius:12px; font-weight:600 }
        @media (max-width: 768px) {
          .media-wrap { flex-direction: column; }
          .media-thumb { width:100%; height:180px; }
          .media-info { text-align:left; }
          .badges-track { gap:16px; }
        }
      `}</style>

      <main className="min-h-screen custom-bg bg-gradient-to-br from-[#0e0e0e] to-[#0f0f0f] text-white font-[var(--font-inter)] py-12">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <section className="mb-8">
            <div className="relative rounded-3xl p-6 md:p-8 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg overflow-hidden">
              <div className="absolute -right-12 -top-6 text-[6rem] md:text-[9rem] font-black text-white/6 select-none pointer-events-none hidden md:block">Media</div>
              <div className="relative z-10">
                <h1 className="text-2xl md:text-3xl font-[var(--font-playfair)] font-bold text-[#bfa76a]">Media & Press</h1>
                <div className="mt-3 w-36"><span className="accent-underline" /></div>
                <p className="mt-3 text-sm text-white/80 max-w-3xl">Interviews, appearances, and media coverage featuring The Law Offices of Saggese & Associates. Select items are listed below.</p>
                <p className="mt-4 text-sm text-white/75">Weekly contributing writer for the Las Vegas Review-Journal and featured in the Las Vegas Review-Journal and Las Vegas Magazine.</p>
              </div>
            </div>
          </section>

          <section id="defenders" className="mb-10 rounded-3xl border border-[#d4af37]/30 bg-gradient-to-br from-[#191919] to-black/30 p-6 shadow-lg md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d4af37]">Featured television history</p>
            <h2 className="mt-2 text-2xl font-[var(--font-playfair)] font-bold text-white md:text-3xl">The Real Lawyer Behind CBS&apos;s <em>The Defenders</em></h2>
            <p className="mt-4 max-w-4xl text-base leading-relaxed text-white/80">CBS&apos;s 2010 prime-time legal drama <em>The Defenders</em>, starring Jim Belushi and Jerry O&apos;Connell, was based on real Las Vegas attorneys Michael Cristalli and Marc Saggese. Marc was the inspiration for Pete Kaczmarek, portrayed by Jerry O&apos;Connell, and worked with the show&apos;s writers to provide legal and story authenticity.</p>
            <p className="mt-3 max-w-4xl text-sm leading-relaxed text-white/65">The series ran for 18 episodes from September 22, 2010 through March 11, 2011. This page lists substantiated media appearances and coverage; video clips are not embedded unless an official source is available.</p>
          </section>

          <section className="mb-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8" aria-labelledby="television-appearances-heading">
            <h2 id="television-appearances-heading" className="text-2xl font-[var(--font-playfair)] font-bold text-[#d4af37]">Television & News Appearances</h2>
            <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURED_MEDIA_APPEARANCES.map((appearance) => (
                <li key={`${appearance.network}-${appearance.program}`} className="rounded-xl border border-[#d4af37]/20 bg-black/25 p-4">
                  <div className="text-xs font-bold uppercase tracking-[0.16em] text-[#d4af37]">{appearance.network}</div>
                  <div className="mt-2 text-base font-semibold leading-snug text-white">{appearance.program}</div>
                </li>
              ))}
            </ul>
            <ul className="mt-5 grid grid-cols-1 gap-3 text-base text-white/85 sm:grid-cols-2 lg:grid-cols-3">
              {['Fox & Friends', 'On the Record with Greta Van Susteren', 'Court TV', 'TruTV', "CBS's 48 Hours with Peter Van Sant", "CNN's The Burden of Proof", 'Catherine Crier Live', 'The Lineup with Kimberly Guilfoyle', 'KLAS-TV 8 News Now', 'KSNV NBC News 3', 'Fox 5 News'].map((appearance) => (
                <li key={appearance} className="rounded-xl border border-white/10 bg-black/20 px-4 py-3">{appearance}</li>
              ))}
            </ul>
          </section>

          {/* Awards & Recognition (copied) */}
          <div id="awards" className="py-8 md:py-12">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-center text-3xl md:text-5xl font-[var(--font-playfair)] font-bold text-[#d4af37] mb-6 drop-shadow-[0_4px_12px_rgba(212,175,55,0.3)]">
                Awards & Recognition
              </motion.h2>
              <motion.p variants={fadeUp} className="text-center max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-white/80 mb-12 font-[var(--font-inter)] leading-relaxed">
                Recognized by peers and industry organizations for excellence in legal representation and client advocacy.
              </motion.p>
              <motion.div variants={fadeUp} className="relative overflow-hidden">
                <div className="flex animate-scroll gap-8 hover:pause-animation">
                  {/* First set of awards */}
                  <div className="flex gap-8 min-w-max">
                    <Image src="/awards/Client-Champion.png" alt="Client Champion Award" width={120} height={150} className="object-contain bg-gradient-to-br from-white/10 to-[#d4af37]/5 rounded-xl p-3 shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-[#d4af37]/20 hover:shadow-[0_12px_48px_rgba(212,175,55,0.2)] transition-all duration-300" />
                    <Image src="/awards/Lawyers-badge.png" alt="Lawyers Badge" width={120} height={150} className="object-contain bg-gradient-to-br from-white/10 to-[#d4af37]/5 rounded-xl p-3 shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-[#d4af37]/20 hover:shadow-[0_12px_48px_rgba(212,175,55,0.2)] transition-all duration-300" />
                    <Image src="/awards/top-100.png" alt="Top 100 Award" width={120} height={150} className="object-contain bg-gradient-to-br from-white/10 to-[#d4af37]/5 rounded-xl p-3 shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-[#d4af37]/20 hover:shadow-[0_12px_48px_rgba(212,175,55,0.2)] transition-all duration-300" />
                    <Image src="/awards/new-updated-badge-1.png" alt="Professional Award" width={120} height={150} className="object-contain bg-gradient-to-br from-white/10 to-[#d4af37]/5 rounded-xl p-3 shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-[#d4af37]/20 hover:shadow-[0_12px_48px_rgba(212,175,55,0.2)] transition-all duration-300" />
                    <Image src="/awards/new-updated-badge-2.png" alt="Professional Award" width={120} height={150} className="object-contain bg-gradient-to-br from-white/10 to-[#d4af37]/5 rounded-xl p-3 shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-[#d4af37]/20 hover:shadow-[0_12px_48px_rgba(212,175,55,0.2)] transition-all duration-300" />
                    <Image src="/awards/new-updated-badge-3.png" alt="Professional Award" width={120} height={150} className="object-contain bg-gradient-to-br from-white/10 to-[#d4af37]/5 rounded-xl p-3 shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-[#d4af37]/20 hover:shadow-[0_12px_48px_rgba(212,175,55,0.2)] transition-all duration-300" />
                    <Image src="/awards/new-updated-badge-4.png" alt="Professional Award" width={120} height={150} className="object-contain bg-gradient-to-br from-white/10 to-[#d4af37]/5 rounded-xl p-3 shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-[#d4af37]/20 hover:shadow-[0_12px_48px_rgba(212,175,55,0.2)] transition-all duration-300" />
                    <Image src="/awards/new-updated-badge-5.png" alt="Professional Award" width={120} height={150} className="object-contain bg-gradient-to-br from-white/10 to-[#d4af37]/5 rounded-xl p-3 shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-[#d4af37]/20 hover:shadow-[0_12px_48px_rgba(212,175,55,0.2)] transition-all duration-300" />
                    <Image src="/awards/new-updated-badge-6.jpg" alt="Professional Award" width={120} height={150} className="object-contain bg-gradient-to-br from-white/10 to-[#d4af37]/5 rounded-xl p-3 shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-[#d4af37]/20 hover:shadow-[0_12px_48px_rgba(212,175,55,0.2)] transition-all duration-300" />
                    <Image src="/awards/new-updated-badge-7.png" alt="Professional Award" width={120} height={150} className="object-contain bg-gradient-to-br from-white/10 to-[#d4af37]/5 rounded-xl p-3 shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-[#d4af37]/20 hover:shadow-[0_12px_48px_rgba(212,175,55,0.2)] transition-all duration-300" />
                    <Image src="/awards/new-updated-badge-8.png" alt="Professional Award" width={120} height={150} className="object-contain bg-gradient-to-br from-white/10 to-[#d4af37]/5 rounded-xl p-3 shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-[#d4af37]/20 hover:shadow-[0_12px_48px_rgba(212,175,55,0.2)] transition-all duration-300" />
                    <Image src="/awards/new-updated-badge-9.png" alt="Professional Award" width={120} height={150} className="object-contain bg-gradient-to-br from-white/10 to-[#d4af37]/5 rounded-xl p-3 shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-[#d4af37]/20 hover:shadow-[0_12px_48px_rgba(212,175,55,0.2)] transition-all duration-300" />
                  </div>
                  {/* Duplicate set for seamless loop */}
                  <div className="flex gap-8 min-w-max">
                    <Image src="/awards/new-updated-badge-10.png" alt="Professional Award" width={120} height={150} className="object-contain bg-gradient-to-br from-white/10 to-[#d4af37]/5 rounded-xl p-3 shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-[#d4af37]/20 transition-all duration-300" />
                    <Image src="/awards/new-updated-badge-11.png" alt="Professional Award" width={120} height={150} className="object-contain bg-gradient-to-br from-white/10 to-[#d4af37]/5 rounded-xl p-3 shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-[#d4af37]/20 transition-all duration-300" />
                    <Image src="/awards/new-updated-badge-12.png" alt="Professional Award" width={120} height={150} className="object-contain bg-gradient-to-br from-white/10 to-[#d4af37]/5 rounded-xl p-3 shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-[#d4af37]/20 transition-all duration-300" />
                    <Image src="/awards/new-updated-badge-13.png" alt="Professional Award" width={120} height={150} className="object-contain bg-gradient-to-br from-white/10 to-[#d4af37]/5 rounded-xl p-3 shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-[#d4af37]/20 transition-all duration-300" />
                    <Image src="/awards/new-updated-badge-14.png" alt="Professional Award" width={120} height={150} className="object-contain bg-gradient-to-br from-white/10 to-[#d4af37]/5 rounded-xl p-3 shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-[#d4af37]/20 transition-all duration-300" />
                    <Image src="/awards/new-updated-badge-15.png" alt="Professional Award" width={120} height={150} className="object-contain bg-gradient-to-br from-white/10 to-[#d4af37]/5 rounded-xl p-3 shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-[#d4af37]/20 transition-all duration-300" />
                    <Image src="/awards/new-updated-badge-16.png" alt="Professional Award" width={120} height={150} className="object-contain bg-white/5 rounded-lg p-2 shadow-lg" />
                    <Image src="/awards/new-updated-badge-17.png" alt="Professional Award" width={120} height={150} className="object-contain bg_white/5 rounded-lg p-2 shadow-lg" />
                    <Image src="/awards/new-updated-badge-18.png" alt="Professional Award" width={120} height={150} className="object-contain bg_white/5 rounded-lg p-2 shadow-lg" />
                    <Image src="/awards/new-updated-badge-19.png" alt="Professional Award" width={120} height={150} className="object-contain bg_white/5 rounded-lg p-2 shadow-lg" />
                    <Image src="/awards/new-updated-badge-20.png" alt="Professional Award" width={120} height={150} className="object-contain bg_white/5 rounded-lg p-2 shadow-lg" />
                    <Image src="/awards/new-updated-badge-21.png" alt="Professional Award" width={120} height={150} className="object-contain bg_white/5 rounded-lg p-2 shadow-lg" />
                    <Image src="/awards/new-updated-badge-22.png" alt="Professional Award" width={120} height={150} className="object-contain bg_white/5 rounded-lg p-2 shadow-lg" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* social media / short contact row */}
          <div className="mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="social-media">
              <a className="social-pill" href="https://www.facebook.com/SaggeseAndAssociates" target="_blank" rel="noreferrer">Facebook</a>
              <a className="social-pill" href="https://twitter.com/maxlawnv" target="_blank" rel="noreferrer">Twitter</a>
              <a className="social-pill" href="https://www.linkedin.com/in/marc-saggese-4a84a34b/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="social-pill" href="https://www.avvo.com/attorneys/89101-nv-marc-saggese-563159.html" target="_blank" rel="noreferrer">Avvo</a>
            </div>

            <div className="short-form-wrap">
              <a href="/contact" className="short-contact-btn">Get in touch — Contact us</a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <main className="md:col-span-2 space-y-6">
              <div id="articles">
                {/* Media article list using available images from /public/content */}
                {(() => {
                  const availableImages = ['/content/boston-marathon.jpg', '/content/match.png', '/content/dui.png', '/content/car_accident.png','/content/car-accident2.png','/content/will.png','/content/drinking.png','/content/texting.png'] as const;
                  const articles = [
                    { title: 'ASK A LAWYER — Should The Boston Marathon Bomber be Sentenced to Death?', link: 'https://www.reviewjournal.com/life/ask-a-lawyer-should-the-boston-marathon-bomber-be-sentenced-to-death/', excerpt: 'How does a state sentence a terrorist to death when that state no longer has the death penalty?' },
                    { title: 'Ninth Circuit Takes New Look at Duty to Warn in Match Gone Bad', link: 'https://www.reviewjournal.com/news/after-surviving-nearly-fatal-attack-woman-sues-match-com/', excerpt: 'It has been seven years since Mary Kay Beckman was brutally stabbed and left for dead by a man she met on Match.com.' },
                    { title: 'DUI Checkpoints – Are They Legal and What are Your Rights?', link: 'https://www.reviewjournal.com/life/ask-a-lawyer-dui-checkpoints-are-they-legal-and-what-are-your-rights/', excerpt: 'They go by a number of different names: DUI checkpoints, administrative roadblocks, mobile checkpoints...' },
                    { title: 'Everything You Need to Know About Car Insurance', link: 'https://www.reviewjournal.com/life/ask-a-lawyer-everything-you-need-to-know-about-car-insurance/', excerpt: 'Practical guidance on car insurance coverage and claims.' },
                    { title: "What to Do If You're In A Car Accident", link: 'https://www.reviewjournal.com/life/ask-a-lawyer-what-to-do-if-youre-in-a-car-accident/', excerpt: 'Steps to take immediately after a collision to protect your claim.', internalHref: '/practice/car-accidents', internalLabel: 'Car accident representation' },
                    { title: 'The Importance of Having a Will', link: 'https://www.reviewjournal.com/life/ask-a-lawyer-the-importance-of-having-a-will/', excerpt: 'Why an estate plan matters and how to get started.' },
                    { title: 'Drinking and Driving in Nevada', link: 'https://www.reviewjournal.com/life/ask-a-lawyer-drinking-and-driving-in-nevada/', excerpt: 'Overview of Nevada DUI laws and potential defenses.' },
                    { title: 'Texting and Driving', link: 'https://www.reviewjournal.com/life/ask-a-lawyer-texting-and-driving/', excerpt: 'How distracted driving laws apply and what to know.' },
                  ];
                  return articles.map((a, i) => {
                    const img = availableImages[i % availableImages.length];
                    return (
                      <div key={a.title} className="rounded-2xl p-4 bg-gradient-to-br from-white/3 to-transparent border border-white/8 mb-4">
                        <div className="media-wrap">
                          <div className="media-thumb relative overflow-hidden">
                            <Image
                              src={img}
                              alt={a.title}
                              fill
                              sizes="160px"
                              className="object-cover rounded-md"
                              priority={i < 2}
                            />
                          </div>
                          <div className="media-info text-white/80">
                            <h3 className="text-lg font-semibold">{a.title}</h3>
                            <h4 className="text-sm mt-1 text-white/70"><a className="current" href={a.link} target="_blank" rel="noreferrer">Original Article</a></h4>
                            <p className="mt-2">{a.excerpt}</p>
                            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
                              <a href={a.link} target="_blank" rel="noreferrer" className="underline inline-block">Read More</a>
                              {a.internalHref && (
                                <Link href={a.internalHref} className="text-[#d4af37] underline underline-offset-4">
                                  {a.internalLabel}
                                </Link>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  });
                })()}
              </div>

              <div className="rounded-2xl p-6 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg">
                <h2 className="text-2xl font-[var(--font-playfair)] font-bold mb-3">Press Inquiries</h2>
                <p className="text-sm text-white/80">For media requests or interviews, contact the firm and we will respond promptly.</p>
              </div>
            </main>

            <aside className="space-y-6">
              <div className="rounded-2xl p-6 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg">
                <h3 className="text-base font-semibold mb-2">Short Contact</h3>
                <p className="text-sm text-white/80 mb-3">Quick intake for media & press.</p>
                <form onSubmit={(e) => { e.preventDefault(); alert('Thanks — we will be in touch.'); }} className="space-y-3">
                  <input className="w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm" placeholder="Name" />
                  <input className="w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm" placeholder="Email" />
                  <button className="w-full rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-4 py-2 text-sm font-semibold text-[#0e0e0e]">Submit</button>
                </form>
              </div>

              <div className="rounded-2xl p-4 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg text-sm text-white/80">
                <div className="font-semibold text-white mb-2">Contact Info</div>
                <div>The Law Offices of Saggese & Associates</div>
                <div>732 S. Sixth Street, Suite 200C</div>
                <div>Las Vegas, Nevada 89101</div>
                <div className="mt-3">
                  <a href="tel:17027788883" className="inline-flex items-center rounded-xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-4 py-2 text-sm font-bold text-[#0e0e0e] no-underline shadow-[0_8px_22px_rgba(212,175,55,0.18)]">Call 702-778-8883</a>
                </div>
                <div className="mt-3 w-full overflow-hidden rounded-xl border border-white/10 bg-neutral-900">
                  <div className="relative aspect-[4/3] w-full">
                    <iframe
                      title="Office Location Map"
                      aria-label="Map showing office location at 732 S. Sixth Street, Suite 200C, Las Vegas, Nevada 89101"
                      src="https://www.google.com/maps?q=732+S.+Sixth+Street,+Suite+200C,+Las+Vegas,+Nevada+89101&output=embed"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0 h-full w-full border-0"
                      allowFullScreen
                    />
                  </div>
                  <div className="mt-2 text-[11px] text-white/60 flex items-center justify-between">
                    <span>Interactive map</span>
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=732+S.+Sixth+Street,+Suite+200C,+Las+Vegas,+Nevada+89101"
                      target="_blank"
                      rel="noreferrer"
                      className="underline text-[#d4af37] hover:text-[#c5a467]"
                    >Directions</a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  )
}

// Carousel implementation removed — using the copied awards markup above.
