"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

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

// === Luxury Brand palette ===
const BRAND = {
  accent: "#d4af37", // metallic gold
  accentSecondary: "#c5a467", // warm gold
  onAccent: "#0e0e0e", // dark text on gold
  dark: "#0e0e0e", // deep black
  darkSecondary: "#1a1a1a", // charcoal
  light: "#f5f5f4", // off-white
  border: "#2d2d2d", // subtle border
};

const Section: React.FC<React.PropsWithChildren<{ id?: string; className?: string }>> = ({ id, className, children }) => {
  // reduce vertical spacing site-wide; hero uses custom larger padding
  // tightened default padding to close gaps between sections
  const defaultPadding = "py-6 md:py-10";
  // subtle per-section shading to help separate content visually (hero stays full-bleed)
  const shadeClass = id && id !== 'home'
    ? `rounded-3xl p-4 backdrop-blur-sm border border-white/6 shadow-[0_10px_30px_rgba(0,0,0,0.55)] ${
        id === 'awards' ? 'bg-white/3' : id === 'practice' ? 'bg-white/4' : id === 'results' ? 'bg-white/5' : id === 'about' ? 'bg-white/6' : id === 'testimonials' ? 'bg-white/5' : id === 'contact' ? 'bg-white/3' : 'bg-white/3'
      }`
    : '';

  return (
    <section id={id} className={`mx-auto w-full max-w-7xl px-4 md:px-6 ${className || defaultPadding} relative`}>
      {id !== 'home' && (
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
          <div className="absolute inset-0 bg-gradient-to-br from-[#0e0e0e] via-[#141414] to-[#0f0f0f]" />
          <div className="absolute left-1/3 top-0 h-[28rem] w-[60vw] -translate-x-1/3 rounded-full bg-[#d4af37]/6 blur-3xl" />
          <div className="absolute right-0 bottom-0 h-[22rem] w-[50%] translate-x-1/8 rounded-full bg-[#c5a467]/5 blur-3xl" />
          <div className="absolute inset-0" style={{ mixBlendMode: 'multiply', background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.6), transparent 60%)' }} />
        </div>
      )}

      {/* content panel to create card-like sections */}
      <div className={`relative ${shadeClass}`}>{children}</div>
    </section>
  );
};

const Card: React.FC<React.PropsWithChildren<{ title: string; subtitle?: string }>> = ({ title, subtitle, children }) => (
  <motion.div variants={fadeUp} className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-white/3 to-transparent p-4 shadow-[0_12px_40px_rgba(0,0,0,0.6)] backdrop-blur-sm transform-gpu transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_18px_64px_rgba(212,175,55,0.12)] group">
    {/* subtle gold badge */}
    <div className="absolute -top-3 -right-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[#d4af37] to-[#c5a467] text-[#0e0e0e] text-sm font-bold border border-white/10 opacity-95">✦</div>
    <div className="h-1 w-12 rounded-full bg-[#d4af37] mb-4 transition-all duration-300 group-hover:w-20" />
    <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
    {subtitle ? <p className="mt-1 text-sm text-white/70">{subtitle}</p> : null}
    <div className="mt-4 text-sm leading-relaxed text-white/80">{children}</div>
  </motion.div>
);

// Animated accent title with underline flourish
const AccentTitle: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className }) => (
  <motion.h2 variants={fadeUp} className={`inline-block ${className || ''}`}>
    <span className="relative z-10">{children}</span>
    <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="origin-left mt-3 h-1 rounded-full bg-gradient-to-r from-[#d4af37] to-[#c5a467] w-full" />
  </motion.h2>
);

// helper to create URL-friendly slugs
const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

// practice topics
const PERSONAL_INJURY_TOPICS = [
  'Car Accidents',
  'Car Accident Statistics',
  'Cell Phone-Related Accidents',
  'Underinsured And Uninsured Accidents',
  'Motorcycle Accidents',
  'Truck Accidents',
  'Commercial Vehicle Accidents',
  'Crosswalk And Pedestrian Accidents',
  'Premises Liability',
  'Product Liability',
  'Brain And Spine Injury',
  'Excessive Force',
  'Elder Abuse',
  'Medical Malpractice',
  'Wrongful Death',
  'Insurance Settlements And Checks',
];

const CRIMINAL_DEFENSE_TOPICS = [
  'DUI',
  'Prostitution',
  'Larceny',
  'Domestic Violence',
  'Drugs',
  'Theft',
  'Sexual Assault',
  'Burglary',
  'Forgery',
  'Bad Checks',
  'Murder',
  'Juvenile Crimes',
  'Record Sealing',
];

// small accordion component used inside Practice cards
const TopicsAccordion: React.FC<{ title: string; topics: string[]; basePath?: string }> = ({ title, topics, basePath = '/practice' }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="mt-4">
      <button
        onClick={() => setOpen((s) => !s)}
        aria-expanded={open}
        className="flex w-full items-center justify-between rounded-xl border border-white/8 bg-black/20 px-4 py-2 text-sm font-semibold hover:opacity-90"
      >
        <span>{open ? `Hide ${title} Topics` : `See ${title} Topics`}</span>
        <span className={`transform transition-transform ${open ? 'rotate-180' : 'rotate-0'}`}>▾</span>
      </button>

      <motion.ul
        initial={{ height: 0, opacity: 0 }}
        animate={open ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="overflow-hidden"
      >
        <div className="mt-3 grid grid-cols-1 gap-2">
          {topics.map((t) => (
            <li key={t} className="list-none">
              <Link
                href={`${basePath}/${slugify(t)}`}
                className="block rounded-lg px-3 py-2 text-sm hover:bg-white/5"
                aria-label={`Learn more about ${t}`}
              >
                {t}
              </Link>
            </li>
          ))}
        </div>
      </motion.ul>
    </div>
  );
};

export default function MaxLawnVPrototype() {
  // parallax scroll effect for elements with data-parallax-speed
  React.useEffect(() => {
    let raf: number | null = null;
    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        document.querySelectorAll<HTMLElement>('[data-parallax-speed]').forEach((el) => {
          const speed = parseFloat(el.dataset.parallaxSpeed || '0');
          el.style.transform = `translateY(${(scrolled * speed).toFixed(2)}px)`;
        });
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); if (raf) cancelAnimationFrame(raf); };
  }, []);

  return (
    <>
      <Head>
        {/* UI flair styles: particles, modal, separators, micro-interactions */}
        <style>{`
          @keyframes floatY { 0% { transform: translateY(0);} 50% { transform: translateY(-10px);} 100% { transform: translateY(0);} }
          .particle { animation: floatY 6s ease-in-out infinite; opacity: .85; }
          .particle.small { width: 6px; height: 6px; border-radius: 999px; }
          .particle.mid { width: 10px; height: 10px; border-radius: 999px; }
          .particle.large { width: 18px; height: 18px; border-radius: 999px; }

          .modal-backdrop { background: rgba(3,3,3,0.72); backdrop-filter: blur(6px); }
          .modal-content { animation: pop 220ms cubic-bezier(.2,.9,.25,1); }
          @keyframes pop { from { transform: translateY(8px) scale(.98); opacity: 0 } to { transform: translateY(0) scale(1); opacity: 1 } }

          /* diagonal separator flourish */
          .section-sep { height: 36px; overflow: visible; }
          .section-sep svg { display: block; width: 100%; height: 36px; }

          /* CTA micro-interaction */
          .cta-glow { transition: box-shadow .28s, transform .22s; }
          .cta-glow:hover { box-shadow: 0 18px 48px rgba(212,175,55,0.18); transform: translateY(-3px) scale(1.01); }
        `}</style>
        <title>Las Vegas Personal Injury & Criminal Defense Lawyer | Saggese & Associates</title>
        <meta name="description" content="Award-winning Las Vegas law firm specializing in personal injury and criminal defense. Free consultations. No fees unless we win. Call (702) 778-8883." />
        <meta name="keywords" content="Las Vegas lawyer, personal injury, criminal defense, attorney, law firm, Saggese, legal help, free consultation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="https://www.maxlawnv.com/" />
        <link rel="alternate" href="https://www.maxlawnv.com/" hrefLang="en" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
        
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

      <main className="min-h-screen bg-gradient-to-br from-[#0e0e0e] to-[#1a1a1a] text-white font-['Inter']">
  {/* ===== Hero (reskinned to match About hero, smaller) ===== */}
  <Section id="home" className="relative overflow-hidden py-0 md:py-4">
          <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
            <div className="relative overflow-hidden rounded-3xl py-4 px-4 md:px-6 mb-2" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0))' }}>
              <div className="absolute inset-0 opacity-8 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0e0e0e] to-transparent" />
              </div>

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-6">
                <div className="order-2 md:order-1 flex items-center justify-center md:justify-start">
                  <div className="relative w-44 md:w-[280px]">
                    <div className="absolute inset-0 rounded-2xl blur-2xl" style={{ background: 'radial-gradient(ellipse at center, rgba(212,175,55,0.12), transparent 30%)' }} />
                    <Image src="/home-banner-attorney.png" alt="Attorney Marc A. Saggese" width={260} height={320} className="relative rounded-3xl shadow-[0_18px_48px_rgba(0,0,0,0.7)] object-cover" />
                  </div>
                </div>

                <div className="order-1 md:order-2 text-center md:text-left">
                  <div className="relative inline-block">
                    <motion.h1 variants={fadeUp} className="font-['Playfair_Display'] font-bold text-3xl md:text-5xl leading-[0.95] text-white tracking-tight">Marc A. Saggese</motion.h1>
                    <div className="absolute -right-20 -top-6 text-[5rem] md:text-[8rem] font-black text-white/6 select-none pointer-events-none leading-none">Saggese</div>
                  </div>

                  <motion.p variants={fadeUp} className="mt-2 text-base md:text-lg text-white/80 max-w-2xl">Trusted legal counsel for individuals and businesses in Las Vegas. Experienced in personal injury and criminal defense — trial-ready and client-focused.</motion.p>

                  <div className="mt-4 flex flex-col sm:flex-row items-center md:items-start gap-3 justify-center md:justify-start">
                    <a href="tel:17027788883" className="inline-block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-4 py-2 text-base font-semibold text-[#0e0e0e] shadow-[0_10px_30px_rgba(212,175,55,0.28)]">Schedule a Call</a>
                    <Link href="/contact" className="inline-block rounded-2xl border border-white/10 px-4 py-2 text-base text-white/90">Request a Consultation</Link>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-3 text-sm text-white/80">
                    <div>Free consultation</div>
                    <div>•</div>
                    <div>1:1 attorney attention</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

         {/* decorative diagonal separator */}
         <div className="section-sep" aria-hidden>
           <svg viewBox="0 0 1200 36" preserveAspectRatio="none"><path d="M0,36 L1200,0 L1200,36 Z" fill="#0f0f0f" opacity="0.6"/></svg>
         </div>
         
         {/* ===== Awards Carousel ===== */}
        <Section id="awards" className="py-8 md:py-12">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-center text-4xl md:text-5xl font-['Playfair_Display'] font-bold text-[#d4af37] mb-6 drop-shadow-[0_4px_12px_rgba(212,175,55,0.3)]">
              Awards & Recognition
            </motion.h2>
            <motion.p variants={fadeUp} className="text-center max-w-3xl mx-auto text-xl text-white/80 mb-12 font-['Inter'] leading-relaxed">
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
        </Section>

        {/* ===== As Seen On / Media ===== */}
        <Section id="media" className="py-6 md:py-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="text-center">
            <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-['Playfair_Display'] font-semibold text-white mb-4">As Seen On</motion.h2>
            <motion.p variants={fadeUp} className="text-white/75 max-w-2xl mx-auto mb-6">Attorney Marc Saggese has appeared on television and in media highlighting important legal matters.</motion.p>

            <motion.div variants={fadeUp} className="mx-auto flex w-full max-w-4xl items-center justify-center gap-8 flex-wrap">
              {/* Use solid neutral panels and isolation so the background gold tint doesn't bleed into logos */}
              <div className="flex items-center gap-3 rounded-xl bg-neutral-900 p-3 px-4 border border-white/10 shadow-lg isolate z-10">
                <Image src="/shows/insideeditions.png" alt="Inside Edition" width={160} height={48} className="object-contain" />
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-neutral-900 p-3 px-4 border border-white/10 shadow-lg isolate z-10">
                <Image src="/shows/Face-to-Face-o.jpg" alt="Face to Face" width={160} height={48} className="object-contain" />
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-neutral-900 p-3 px-4 border border-white/10 shadow-lg isolate z-10">
                <Image src="/shows/The-Defenders-o.jpg" alt="The Defenders" width={160} height={48} className="object-contain" />
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-neutral-900 p-3 px-4 border border-white/10 shadow-lg isolate z-10">
                <Image src="/shows/Review-Journal-o.jpg" alt="Review-Journal" width={160} height={48} className="object-contain" />
              </div>
            </motion.div>
          </motion.div>
        </Section>

        {/* ===== Practice Areas ===== */}
        <Section id="practice">
           <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
             <motion.h2 variants={fadeUp} className="text-3xl font-bold">Practice Areas</motion.h2>
             <motion.p variants={fadeUp} className="mt-2 max-w-prose text-white/75">Focused on outcomes that matter. Here are the matters we handle most often.</motion.p>
             <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
               <Card title="Seriously Hurt?" subtitle="Personal Injury — Experienced Legal Support">
                 We help injured Nevadans pursue medical care and compensation. Free case evaluations. No fees unless we win.
                <TopicsAccordion title="Personal Injury" topics={PERSONAL_INJURY_TOPICS} />
                 <div className="mt-4">
                   <a href="#contact" className="inline-block rounded-xl border px-4 py-2 text-sm font-semibold hover:bg-white/10" style={{ borderColor: BRAND.accent }}>Get a Free Case Review</a>
                 </div>
               </Card>

               <Card title="Arrested?" subtitle="Criminal Defense — Protect your rights">
                Strategic, trial‑tested defense from arraignment through resolution. Flat‑fee and payment options available.
                <TopicsAccordion title="Criminal Defense" topics={CRIMINAL_DEFENSE_TOPICS} basePath="/criminal-defense" />
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
            <motion.h2 variants={fadeUp} className="text-3xl font-['Playfair_Display'] font-semibold text-center mb-4">Meet Your Lawyer</motion.h2>
            <motion.div variants={fadeUp} className="mt-6 grid grid-cols-1 items-center gap-8 md:grid-cols-[240px,1fr]">
                <div className="flex justify-center items-center">
                  <div className="relative aspect-[1/1] w-96 h-96 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-neutral-900 via-neutral-800 to-black shadow-lg">
                    <Image
                      src="/meet-your.jpg"
                      alt="Marc A. Saggese, Attorney"
                      fill
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                  </div>
                </div>
              <div className="text-center md:text-center">
                <h3 className="text-2xl font-['Playfair_Display'] font-bold text-white">Marc A. Saggese</h3>
                <p className="mt-2 max-w-prose mx-auto text-lg text-white/80 leading-relaxed">
                  The Law Offices of Saggese &amp; Associates, located in Las Vegas, Nevada, practices law in the areas of <strong className="font-semibold text-[#d4af37]">personal injury</strong> and <strong className="font-semibold text-[#d4af37]">criminal defense</strong>. Our team blends years of experience in handling personal injury cases as well as providing defense from criminal charges ranging from petty theft to murder.
                </p>
                <p className="mt-4 max-w-prose mx-auto text-lg text-white/80 leading-relaxed">
                  In our <strong className="font-semibold text-[#d4af37]">decades of experience</strong>, we have earned a number of awards in recognition of our successful record. Among other awards, our firm has won <strong className="font-semibold text-[#d4af37]">Best of Las Vegas</strong> (Silver &amp; Bronze in 2017; Silver in 2018) and is proud to be recognized by the <strong className="font-semibold text-[#d4af37]">American Institute of Personal Injury Attorneys</strong> as being among the "<strong className="font-semibold text-[#d4af37]">10 Best Attorneys</strong>," and by <strong className="font-semibold text-[#d4af37]">Desert Companion Magazine</strong> as being among "<strong className="font-semibold text-[#d4af37]">the Valley's Top Lawyers</strong>."
                </p>
                <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-white/70 justify-center max-w-sm mx-auto">
                  <li className="flex items-center gap-3 justify-center">
                    <span className="h-2 w-2 rounded-full bg-[#d4af37]" />
                    Free consultations
                  </li>
                  <li className="flex items-center gap-3 justify-center">
                    <span className="h-2 w-2 rounded-full bg-[#d4af37]" />
                    Same‑day appointments when available
                  </li>
                  <li className="flex items-center gap-3 justify-center">
                    <span className="h-2 w-2 rounded-full bg-[#d4af37]" />
                    Evening/weekend by appointment
                  </li>
                  <li className="flex items-center gap-3 justify-center">
                    <span className="h-2 w-2 rounded-full bg-[#d4af37]" />
                    Habla Español
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </Section>


                        {/* Mission / Principles */}
                        <Section id="mission">
                          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
                            <motion.h2 variants={fadeUp} className="text-center text-sm font-semibold tracking-widest text-[#d4af37] mb-2">
                              GETTING THE RESULTS YOU WANT
                            </motion.h2>
                            <motion.p variants={fadeUp} className="mt-4 text-center text-white/75 max-w-2xl mx-auto">
                              At The Law Offices of Saggese & Associates, our practice is based on the following three principles:
                            </motion.p>
                            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3 max-w-3xl mx-auto">
                              <motion.div variants={fadeUp} className="rounded-xl bg-white/3 p-6 text-center shadow-lg">
                                <h5 className="text-lg font-semibold text-white">Integrity</h5>
                                <p className="mt-2 text-sm text-white/70">
                                  We earn our clients' confidence and trust by presenting a balanced analysis of all legal issues along with creative legal solutions.
                                </p>
                              </motion.div>
                              <motion.div variants={fadeUp} className="rounded-xl bg-white/3 p-6 text-center shadow-lg">
                                <h5 className="text-lg font-semibold text-white">Compassion</h5>
                                <p className="mt-2 text-sm text-white/70">
                                  For many clients, the legal issues they face have a profound effect on their lives. We approach each issue with compassion and understanding.
                                </p>
                              </motion.div>
                              <motion.div variants={fadeUp} className="rounded-xl bg-white/3 p-6 text-center shadow-lg">
                                <h5 className="text-lg font-semibold text-white">Service</h5>
                                <p className="mt-2 text-sm text-white/70">
                                  The practice of law begins and ends with service. We strive to deliver results that further our clients’ core values and goals.
                                </p>
                              </motion.div>
                            </div>
                          </motion.div>
                        </Section>

        {/* ===== Testimonials ===== 
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
        */}
        {/* ===== Contact ===== */}
        <Section id="contact">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-3xl font-['Playfair_Display'] font-semibold text-center">SPEAK WITH AN EXPERIENCED LAWYER TODAY</motion.h2>
            <motion.p variants={fadeUp} className="mt-3 text-center max-w-2xl mx-auto text-white/75">To learn more about how The Law Offices of Saggese & Associates can help people in Nevada who have suffered a personal injury and those who have been charged with a crime, schedule a free consultation or call <a href="tel:17027788883" className="underline" style={{ textDecorationColor: BRAND.accent }}>(702) 778‑8883</a>.</motion.p>

            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
              <motion.div variants={fadeUp} className="md:col-span-2">
                <motion.form variants={fadeUp} onSubmit={(e) => { e.preventDefault(); alert("Thanks! We’ll reach out shortly."); }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <label className="text-sm font-semibold">First name <span className="text-[#d4af37]">*</span>
                      <input aria-required required className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm outline-none ring-emerald-400/40 placeholder:text-white/40 focus:ring" placeholder="Jane" />
                    </label>

                    <label className="text-sm font-semibold">Last name <span className="text-[#d4af37]">*</span>
                      <input aria-required required className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm outline-none ring-emerald-400/40 placeholder:text-white/40 focus:ring" placeholder="Doe" />
                    </label>

                    <label className="text-sm font-semibold md:col-span-2">Email <span className="text-[#d4af37]">*</span>
                      <input type="email" aria-required required className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm outline-none ring-emerald-400/40 placeholder:text-white/40 focus:ring" placeholder="you@example.com" />
                    </label>

                    <label className="text-sm font-semibold">Phone
                      <input className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm outline-none ring-emerald-400/40 placeholder:text-white/40 focus:ring" placeholder="(702) 555‑0123" />
                    </label>

                    <label className="text-sm font-semibold md:col-span-2">Brief description of your legal issue <span className="text-[#d4af37]">*</span>
                      <textarea aria-required required rows={5} className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm outline-none ring-emerald-400/40 placeholder:text-white/40 focus:ring" placeholder="Briefly describe your matter" />
                    </label>

                    <div className="flex items-start gap-2 md:col-span-2">
                      <input id="consent" type="checkbox" className="mt-1" required />
                      <label htmlFor="consent" className="text-sm font-semibold">I have read the disclaimer. <span className="text-white/60">(Submitting does not create an attorney‑client relationship)</span></label>
                    </div>

                    <button type="submit" className="mt-2 w-full rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-3 text-sm font-semibold text-[#0e0e0e] hover:scale-[1.01]">Request a free consultation</button>
                  </div>
                </motion.form>
              </motion.div>

              <motion.div variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/80 flex flex-col gap-4">
                <h3 className="text-base font-semibold">Contact Information</h3>
                <p className="text-white/80">The Law Offices of Saggese & Associates</p>
                <p className="text-white/80">732 S. 6th Street Suite 201<br/>Las Vegas, NV 89101</p>
                <p className="text-white/80">Phone: <a href="tel:17027788883" className="underline" style={{ textDecorationColor: BRAND.accent }}>(702) 778‑8883</a></p>
                <p className="text-white/80">Fax: 702-778-8884</p>

                <div className="mt-2">
                  <h4 className="text-sm font-semibold text-white/75">Need instant help?</h4>
                  <div className="mt-3 flex items-center gap-3">
                    <a href="#" className="rounded-full bg-white/6 p-3">facebook</a>
                    <a href="#" className="rounded-full bg-white/6 p-3">twitter</a>
                    <a href="#" className="rounded-full bg-white/6 p-3">linkedin</a>
                    <a href="#" className="rounded-full bg-white/6 p-3">avvo</a>
                    <a href="mailto:marc@maxlawnv.com" className="rounded-full bg-white/6 p-3">email</a>
                  </div>
                </div>

                <div className="mt-4 text-sm text-white/60">Office hours: Mon–Fri 8:00–5:00 • Sat–Sun Closed</div>

                <div className="mt-4 h-40 w-full overflow-hidden rounded-xl border border-white/10 bg-neutral-900 grid place-items-center">Map Placeholder</div>
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
