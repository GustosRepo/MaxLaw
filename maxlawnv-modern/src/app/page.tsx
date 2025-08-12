"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";

// Drop this file in a Next.js App Router project as app/page.tsx
// TailwindCSS recommended. Install: npm i framer-motion
// Optional: replace placeholders (logo, photos) and hook the form to /api/contact

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

// === Brand palette (serious, premium law firm) ===
const BRAND = {
  accent: "#bfa76a", // gold
  onAccent: "#23272e", // dark text on gold
  dark: "#181c23", // deep navy/charcoal
  light: "#f5f5f4", // off-white
  border: "#2d313a", // subtle border
};

const Section: React.FC<React.PropsWithChildren<{ id?: string; className?: string }>> = ({ id, className, children }) => (
  <section id={id} className={`mx-auto w-full max-w-7xl px-4 md:px-6 ${className || "py-16 md:py-24"}`}>{children}</section>
);

const Card: React.FC<React.PropsWithChildren<{ title: string; subtitle?: string }>> = ({ title, subtitle, children }) => (
  <motion.div variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur">
    <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
    {subtitle ? <p className="mt-1 text-sm text-white/70">{subtitle}</p> : null}
    <div className="mt-4 text-sm leading-relaxed text-white/80">{children}</div>
  </motion.div>
);

export default function MaxLawnVPrototype() {
  return (
    <>
      <Head>
        <title>Las Vegas Personal Injury & Criminal Defense Lawyer | Saggese & Associates</title>
        <meta name="description" content="Award-winning Las Vegas law firm specializing in personal injury and criminal defense. Free consultations. No fees unless we win. Call (702) 778-8883." />
        <meta name="keywords" content="Las Vegas lawyer, personal injury, criminal defense, attorney, law firm, Saggese, legal help, free consultation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="https://www.maxlawnv.com/" />
        <link rel="alternate" href="https://www.maxlawnv.com/" hrefLang="en" />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Las Vegas Personal Injury & Criminal Defense Lawyer | Saggese & Associates" />
        <meta property="og:description" content="Award-winning Las Vegas law firm specializing in personal injury and criminal defense. Free consultations. No fees unless we win." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.maxlawnv.com/" />
        <meta property="og:image" content="/logo2.png" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Las Vegas Personal Injury & Criminal Defense Lawyer | Saggese & Associates" />
        <meta name="twitter:description" content="Award-winning Las Vegas law firm specializing in personal injury and criminal defense. Free consultations. No fees unless we win." />
        <meta name="twitter:image" content="/logo2.png" />
        {/* Structured Data: LocalBusiness & LegalService */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': ['LegalService', 'LocalBusiness'],
          name: 'Saggese & Associates',
          image: 'https://www.maxlawnv.com/logo2.png',
          url: 'https://www.maxlawnv.com/',
          telephone: '+1-702-778-8883',
          email: 'marc@maxlawnv.com',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '732 S. 6th Street',
            addressLocality: 'Las Vegas',
            addressRegion: 'NV',
            postalCode: '89101',
            addressCountry: 'US',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 36.1619,
            longitude: -115.1401
          },
          openingHours: 'Mo-Fr 08:00-17:00',
          priceRange: '$$',
          sameAs: [
            'https://www.facebook.com/MaxLawNV',
            'https://www.linkedin.com/company/saggese-associates/'
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-702-778-8883',
            contactType: 'customer service',
            areaServed: 'US',
            availableLanguage: ['English', 'Spanish']
          },
          logo: 'https://www.maxlawnv.com/logo2.png',
          description: 'Award-winning Las Vegas law firm specializing in personal injury and criminal defense. Free consultations. No fees unless we win.'
        }) }} />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-[#181c23] to-[#23272e] text-white font-sans">
        {/* ===== Hero ===== */}
        <Section id="home" className="relative overflow-hidden py-28 md:py-40">
          <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden>
            <div className="absolute inset-0 bg-gradient-to-br from-[#23272e] via-[#181c23] to-[#23272e]" />
            <div className="absolute left-1/2 top-0 h-[32rem] w-[90vw] -translate-x-1/2 rounded-full bg-[#bfa76a]/10 blur-3xl" />
          </div>
          <div className="relative grid grid-cols-1 items-center gap-16 md:grid-cols-2">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={stagger}>
              <motion.h1 variants={fadeUp} className="text-balance text-5xl md:text-6xl font-serif font-bold leading-tight text-white drop-shadow-lg">
                Las Vegas <span className="text-[#bfa76a]">Personal Injury</span> & <span className="text-[#bfa76a]">Criminal Defense</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="mt-6 max-w-prose text-lg text-white/80 font-light">
                Trusted, experienced, and relentless. Start with a confidential, no‑obligation consultation.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4">
                <a href="#contact" className="rounded-2xl px-6 py-3 text-base font-bold shadow bg-[#bfa76a] text-[#23272e] hover:bg-[#d6c08a] transition">Request Consultation</a>
                <a href="tel:17027788883" className="rounded-2xl border px-6 py-3 text-base font-bold text-white border-[#bfa76a] hover:bg-[#bfa76a]/10 transition">Call (702) 778‑8883</a>
              </motion.div>
              <motion.ul variants={fadeUp} className="mt-8 grid max-w-xl grid-cols-1 gap-3 text-base text-white/70 md:grid-cols-2">
                <li className="flex items-center gap-2">• No fees unless we win (PI)</li>
                <li className="flex items-center gap-2">• 1:1 attorney attention</li>
                <li className="flex items-center gap-2">• Same‑day appointments</li>
                <li className="flex items-center gap-2">• Español available</li>
              </motion.ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}
              className="relative order-first aspect-[4/3] overflow-visible rounded-3xl border-2 border-[#bfa76a]/30 shadow-xl md:order-none flex items-end justify-center bg-black">
              <Image src="/lvbg.jpg" alt="Las Vegas at night" fill priority className="object-cover w-full h-full rounded-2xl opacity-80" style={{ zIndex: 1 }} />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/80 via-black/40 to-transparent" style={{ zIndex: 2 }} />
              <Image src="/home-banner-attorney.png" alt="Attorney portrait" width={340} height={600} className="relative z-10 object-contain h-[420px] md:h-[520px] w-auto drop-shadow-2xl" />
            </motion.div>
          </div>
        </Section>

        {/* ===== Practice Areas ===== */}
        <Section id="practice">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-3xl font-bold">Practice Areas</motion.h2>
            <motion.p variants={fadeUp} className="mt-2 max-w-prose text-white/75">Focused on outcomes that matter. Here are the matters we handle most often.</motion.p>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              <Card title="Personal Injury" subtitle="Car, Truck & Rideshare Accidents; Slip & Fall; Wrongful Death">
                We help injured Nevadans pursue medical care and compensation. Free case evaluations. No fees unless we win.
                <div className="mt-4">
                  <a href="#contact" className="inline-block rounded-xl border px-4 py-2 text-sm font-semibold hover:bg-white/10" style={{ borderColor: BRAND.accent }}>Get a Free Case Review</a>
                </div>
              </Card>
              <Card title="Criminal Defense" subtitle="DUI; Drug Charges; Domestic; Records Sealing">
                Strategic, trial‑tested defense from arraignment through resolution. Flat‑fee and payment options available.
                <div className="mt-4">
                  <a href="#contact" className="inline-block rounded-xl border px-4 py-2 text-sm font-semibold hover:bg-white/10" style={{ borderColor: BRAND.accent }}>Talk to a Defense Attorney</a>
                </div>
              </Card>
            </div>
          </motion.div>
        </Section>

        {/* ===== Results / Social Proof ===== */}
        <Section id="results">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-3xl font-bold">Representative Results</motion.h2>
            <motion.p variants={fadeUp} className="mt-2 max-w-prose text-white/75">
              Past results do not guarantee similar outcomes. Every case is different.
            </motion.p>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              <Card title="$XXX,XXX Settlement" subtitle="Auto Collision">
                Rear‑end collision with disputed liability. Coordinated medical care, negotiated policy‑limit settlement.
              </Card>
              <Card title="Felony Reduced" subtitle="Drug Possession">
                Challenged stop and search, secured suppression of key evidence. Felony reduced to misdemeanor.
              </Card>
              <Card title="Case Dismissed" subtitle="DUI (1st)">
                Identified breath test issues and procedural defects. Prosecutor dismissed prior to trial.
              </Card>
            </div>
          </motion.div>
        </Section>

        {/* ===== Attorney Bio ===== */}
        <Section id="about">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-3xl font-bold">Meet Your Lawyer</motion.h2>
            <motion.div variants={fadeUp} className="mt-6 grid grid-cols-1 items-start gap-8 md:grid-cols-[240px,1fr]">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl border border-white/10 bg-neutral-800"></div>
              <div>
                <h3 className="text-xl font-semibold">Marc A. Saggese</h3>
                <p className="mt-2 max-w-prose text-white/75">
                  Founder of The Law Offices of Saggese & Associates. Practicing law in Las Vegas since 1999. Trial‑tested in both personal injury and criminal defense matters.
                </p>
                <ul className="mt-4 grid grid-cols-1 gap-2 text-sm text-white/70 md:grid-cols-2">
                  <li>• Free consultations</li>
                  <li>• Same‑day appointments when available</li>
                  <li>• Evening/weekend by appointment</li>
                  <li>• Habla Español</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </Section>

        {/* ===== Testimonials ===== */}
        <Section id="testimonials">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-3xl font-bold">Client Feedback</motion.h2>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              {[1,2,3].map((i) => (
                <motion.blockquote key={i} variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/80">
                  <p>“Clear, direct, and effective. I always knew where my case stood.”</p>
                  <footer className="mt-3 text-white/60">— Verified Client</footer>
                </motion.blockquote>
              ))}
            </div>
          </motion.div>
        </Section>

        {/* ===== Contact ===== */}
        <Section id="contact">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-3xl font-bold">Request a Free Consultation</motion.h2>
            <motion.p variants={fadeUp} className="mt-2 max-w-prose text-white/75">
              Call <a href="tel:17027788883" className="underline underline-offset-4" style={{ textDecorationColor: BRAND.accent }}>(702) 778‑8883</a> or send a message below.
            </motion.p>
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
              <motion.form variants={fadeUp} onSubmit={(e) => { e.preventDefault(); alert("Thanks! We’ll reach out shortly."); }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <label className="text-sm">First name
                    <input required className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm outline-none ring-emerald-400/40 placeholder:text-white/40 focus:ring" placeholder="Jane" />
                  </label>
                  <label className="text-sm">Last name
                    <input required className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm outline-none ring-emerald-400/40 placeholder:text-white/40 focus:ring" placeholder="Doe" />
                  </label>
                  <label className="text-sm md:col-span-2">Email
                    <input type="email" required className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm outline-none ring-emerald-400/40 placeholder:text-white/40 focus:ring" placeholder="you@example.com" />
                  </label>
                  <label className="text-sm md:col-span-2">Phone
                    <input className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm outline-none ring-emerald-400/40 placeholder:text-white/40 focus:ring" placeholder="(702) 555‑0123" />
                  </label>
                  <label className="text-sm md:col-span-2">How can we help?
                    <textarea rows={5} className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm outline-none ring-emerald-400/40 placeholder:text-white/40 focus:ring" placeholder="Briefly describe your matter" />
                  </label>
                  <div className="flex items-start gap-2 md:col-span-2">
                    <input id="consent" type="checkbox" className="mt-1" required />
                    <label htmlFor="consent" className="text-xs text-white/70">I understand that submitting this form does not create an attorney‑client relationship.</label>
                  </div>
                  <button type="submit" className="mt-2 w-full rounded-2xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-neutral-900 hover:bg-emerald-300 md:w-auto">Send Message</button>
                </div>
              </motion.form>

              <motion.div variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/80">
                <h3 className="text-base font-semibold">Office</h3>
                <p className="mt-2">732 S. 6th Street • Las Vegas, NV 89101</p>
                <p className="mt-1">Mon–Fri 8:00–5:00 • Sat–Sun Closed</p>
                <a href="mailto:marc@maxlawnv.com" className="mt-3 inline-block underline underline-offset-4" style={{ textDecorationColor: BRAND.accent }}>marc@maxlawnv.com</a>
                <div className="mt-6 h-56 w-full overflow-hidden rounded-xl border border-white/10 bg-neutral-900">
                  {/* Embed map or static image */}
                  <div className="grid h-full place-items-center text-white/60">Map Placeholder</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </Section>

        {/* ===== Footer ===== */}
        <footer className="border-t border-white/10 py-10">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
            <p className="text-sm text-white/60">© {new Date().getFullYear()} The Law Offices of Saggese & Associates. All rights reserved.</p>
            <div className="flex items-center gap-4 text-sm text-white/70">
              <a href="#privacy" className="hover:text-white/90">Privacy</a>
              <a href="#disclaimer" className="hover:text-white/90">Disclaimer</a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
