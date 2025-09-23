"use client";
import React from 'react';
import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import HeroMediaRotator from './HeroMediaRotator';
import GoogleReviews from './GoogleReviews';
import LazyMap from './LazyMap';
import {
  FIRM_ADDRESS_LINE1,
  FIRM_ADDRESS_LINE2,
  FIRM_PHONE_DISPLAY,
  FIRM_PHONE_E164,
  FIRM_NAME
} from '../../lib/constants';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

// Hero specific variants for a softer, slightly slower entrance
const heroStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};
const fadeUpSoft = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' as const } },
};
const fadeInScale = {
  hidden: { opacity: 0, scale: 0.98 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' as const } },
};

const BRAND = {
  accent: '#d4af37',
};

const Section: React.FC<React.PropsWithChildren<{ id?: string; className?: string }>> = ({ id, className, children }) => {
  const defaultPadding = 'py-6 md:py-10';
  const shadeClass = id && id !== 'home'
    ? 'rounded-3xl p-4 backdrop-blur-sm border border-white/6 shadow-[0_10px_30px_rgba(0,0,0,0.55)] bg-white/5'
    : '';
  // For the home section we want a full-bleed layout (no centered max width container)
  if (id === 'home') {
    return (
      <section id={id} className={`w-full ${className || defaultPadding} relative`}>
        {children}
      </section>
    );
  }

  return (
    <section id={id} className={`mx-auto w-full max-w-7xl px-4 md:px-6 ${className || defaultPadding} relative`}>
      <div className={`relative ${shadeClass}`}>{children}</div>
    </section>
  );
};

type MotionVariants = Record<string, unknown> | undefined;
// Helper ensures we only pass a valid Variants object (framer-motion) or nothing.
const Card: React.FC<React.PropsWithChildren<{ title: string; subtitle?: string; variantsOverride?: MotionVariants }>> = ({ title, subtitle, children, variantsOverride }) => {
  const motionProps = variantsOverride ? { variants: variantsOverride as Variants } : {};
  return (
    <motion.div
      /* Reduced visual effects on small screens: lighter shadow, no backdrop blur (saves GPU/memory on iOS). */
      {...motionProps}
      className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-white/3 to-transparent p-4 shadow-md md:shadow-[0_12px_40px_rgba(0,0,0,0.6)] md:backdrop-blur-sm"
    >
    <div className="h-1 w-12 rounded-full bg-[#d4af37] mb-4" />
    <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
    {subtitle ? <p className="mt-1 text-sm text-white/70">{subtitle}</p> : null}
    <div className="mt-4 text-sm leading-relaxed text-white/80">{children}</div>
  </motion.div>
  );
};

const slugify = (s: string) => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const PERSONAL_INJURY_TOPICS = ['Car Accidents','Car Accident Statistics','Cell Phone-Related Accidents','Underinsured And Uninsured Accidents','Motorcycle Accidents','Truck Accidents','Commercial Vehicle Accidents','Crosswalk And Pedestrian Accidents','Premises Liability','Product Liability','Brain And Spine Injury','Excessive Force','Elder Abuse','Medical Malpractice','Wrongful Death','Insurance Settlements And Checks'];
const CRIMINAL_DEFENSE_TOPICS = ['DUI','Prostitution','Larceny','Domestic Violence','Drugs','Theft','Sexual Assault','Burglary','Forgery','Bad Checks','Murder','Juvenile Crimes','Record Sealing'];

const TopicsAccordion: React.FC<{ title: string; topics: string[]; basePath?: string }> = ({ title, topics, basePath = '/practice' }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="mt-4">
      <button onClick={() => setOpen(o => !o)} aria-expanded={open} className="flex w-full items-center justify-between rounded-xl border border-white/8 bg-black/20 px-4 py-2 text-sm font-semibold hover:opacity-90">
        <span>{open ? `Hide ${title} Topics` : `See ${title} Topics`}</span>
        <span className={`transition-transform ${open ? 'rotate-180' : ''}`}>▾</span>
      </button>
      <motion.ul initial={{ height: 0, opacity: 0 }} animate={open ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
        <div className="mt-3 grid grid-cols-1 gap-2">
          {topics.map(t => (
            <li key={t} className="list-none">
              <Link href={`${basePath}/${slugify(t)}`} className="block rounded-lg px-3 py-2 text-sm hover:bg-white/5" aria-label={`Learn more about ${t}`}>{t}</Link>
            </li>
          ))}
        </div>
      </motion.ul>
    </div>
  );
};

export default function HomeClient() {
  const [safeMode, setSafeMode] = React.useState(false);
  // Add below-fold deferral state
  const [deferBelowFold, setDeferBelowFold] = React.useState(true);
  const sentinelRef = React.useRef<HTMLDivElement | null>(null);
  const isMobileRef = React.useRef(false);

  React.useEffect(() => {
    try {
      const sp = new URLSearchParams(window.location.search);
      const v = sp.get('safe');
      if (v !== null && v !== '0') setSafeMode(true);
    } catch { /* ignore */ }
  }, []);
  // Disable expensive motion & intersection observers on small screens (iOS crash mitigation)
  const [motionEnabled, setMotionEnabled] = React.useState(false);
  React.useEffect(() => {
    try {
      if (typeof window === 'undefined') return;
      const mql = window.matchMedia('(min-width: 768px)');
      if (mql.matches) setMotionEnabled(true);
    } catch { /* ignore */ }
  }, []);

  React.useEffect(() => {
    try {
      isMobileRef.current = typeof window !== 'undefined' && window.innerWidth < 768;
      if (!isMobileRef.current) {
        // Desktop: show everything immediately
        setDeferBelowFold(false);
        return;
      }
      // Mobile: defer heavy sections
      let done = false;
      const reveal = () => {
        if (done) return;
        done = true;
        setDeferBelowFold(false);
      };
      // Fallback timeout in case observer never fires (user idle at top)
      const to = setTimeout(reveal, 4000);

      if (sentinelRef.current && 'IntersectionObserver' in window) {
        const obs = new IntersectionObserver(
          (entries) => {
            for (const e of entries) {
              if (e.isIntersecting) {
                reveal();
                obs.disconnect();
                break;
              }
            }
          },
          { rootMargin: '200px 0px 0px 0px', threshold: 0 }
        );
        obs.observe(sentinelRef.current);
      } else {
        // No IO support -> just reveal after fallback timeout (already set)
      }
      return () => {
        clearTimeout(to);
      };
    } catch {
      setDeferBelowFold(false);
    }
  }, []);

  // Helpers so we don't repeat ternaries everywhere
  const initialStd = motionEnabled ? 'hidden' : undefined;
  const whileInViewStd = motionEnabled ? 'show' : undefined;
  const viewportHero = motionEnabled ? { once: true, amount: 0.5 } : undefined;
  const viewportStd = motionEnabled ? { once: true, amount: 0.2 } : undefined;
  // Helper: conditionally return variants object while keeping typing loose but not 'any'
  // Framer Motion Variants type is structural; using unknown avoids explicit any lint rule.
  const variantsOr = <T extends object>(v: T): T | undefined => (motionEnabled ? v : undefined);
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
  caseType: '',
  injurySeverity: '',
  medicalEstimate: '',
  chargeName: '',
  arrested: '',
  piSubtype: '',
  atFault: '',
  otherDriverInsurance: '',
  wereYouInjured: '',
  injuryList: '',
  passengers: '',
  vehicleDamageSeverity: '',
  financialAbility: '',
  });
  const ACCEPTED_CASE_TYPES = ['Personal Injury', 'Criminal Defense'];
  const [formStatus, setFormStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formMessage, setFormMessage] = React.useState('');
  const [reviewSummary, setReviewSummary] = React.useState<{ rating: number; total: number } | null>(null);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Block unsupported case types client-side
    if (!ACCEPTED_CASE_TYPES.includes(formData.caseType || '')) {
      setFormStatus('error');
      setFormMessage('We do not handle that matter. Please call for a referral or check our practice areas.');
      return;
    }
    setFormStatus('loading');

    try {
  const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus('success');
        setFormMessage('Thank you! We\'ll reach out to you shortly.');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
          consent: false,
          caseType: '',
          injurySeverity: '',
          medicalEstimate: '',
          chargeName: '',
          arrested: '',
          piSubtype: '',
          atFault: '',
          otherDriverInsurance: '',
          wereYouInjured: '',
          injuryList: '',
          passengers: '',
          vehicleDamageSeverity: '',
          financialAbility: '',
        });
      } else {
        setFormStatus('error');
        setFormMessage(result.error || 'Failed to send message. Please try again.');
      }
      } catch {
        setFormStatus('error');
        setFormMessage('Failed to send message. Please try again.');
      }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  // Temporarily fully disable parallax logic (suspected mobile crash source)
  React.useEffect(() => { /* disabled for debugging */ }, []);
  // Lightweight diagnostic: log first few scroll positions (mobile only) to narrow crash point
  React.useEffect(() => {
    try {
      if (typeof window === 'undefined') return;
      if (window.matchMedia('(min-width: 768px)').matches) return; // mobile only
      let count = 0;
      const handler = () => {
        if (count < 5) {
          // eslint-disable-next-line no-console
          console.log('[diag] scrollY', window.scrollY);
          count++;
          if (count >= 5) window.removeEventListener('scroll', handler);
        }
      };
      window.addEventListener('scroll', handler, { passive: true });
      return () => window.removeEventListener('scroll', handler);
    } catch { /* ignore */ }
  }, []);

  // Static review summary (API removed)
  React.useEffect(() => {
    setReviewSummary({ rating: 4.9, total: 125 });
  }, []);

  // --- Mobile focused optimizations below ---
  // Awards collapse state (mobile only UI enhancement)
  const [showAllAwards, setShowAllAwards] = React.useState(false);
  const toggleAwards = () => setShowAllAwards(s => !s);

  // Defer map even further on mobile behind a button (prevents observer + iframe until explicit intent)
  const [mapRevealed, setMapRevealed] = React.useState(false);

  if (safeMode) {
    // Ultra-minimal render: hero only + basic contact link, no large image sets / observers.
    // Used to confirm if iOS reload stems from below-the-fold heavy sections.
    // eslint-disable-next-line no-console
    console.log('[safe-mode] enabled');
    return (
      <main className="min-h-screen bg-gradient-to-br from-[#0e0e0e] to-[#1a1a1a] text-white font-[var(--font-inter)]">
        <Section id="home" className="relative overflow-hidden min-h-[100dvh] flex items-center py-8">
          <div className="relative z-10 mx-auto max-w-4xl px-6 w-full">
            <div className="absolute inset-0 -z-10">
              <HeroMediaRotator />
              <div className="absolute inset-0 bg-black/50" aria-hidden />
            </div>
            <h1 className="font-[var(--font-playfair)] font-extrabold text-4xl leading-[0.95] tracking-tight text-white text-center">
              {FIRM_NAME}
              <span className="block text-[0.6em] mt-4 text-[#d4af37] font-serif font-normal">Personal Injury & Criminal Defense</span>
            </h1>
            <p className="mt-6 text-base text-white/80 max-w-2xl mx-auto text-center">
              Award‑winning representation for Nevada injury victims and the accused. Free consultation. No fee unless we win injury cases.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-5 justify-center">
              <a href={`tel:${FIRM_PHONE_E164}`} className="inline-flex items-center gap-2 rounded-2xl bg-[#d4af37] px-7 py-4 text-lg font-semibold text-[#0e0e0e] hover:bg-[#c5a467]">Call {FIRM_PHONE_DISPLAY}</a>
              <Link href="/contact" className="inline-flex items-center rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-lg text-white/90 hover:border-[#d4af37]/60 hover:bg-white/10">Request Consultation</Link>
            </div>
            <p className="mt-10 text-center text-xs text-white/40">Safe mode active – heavy sections disabled for diagnostics. Append ?safe=1 to toggle.</p>
          </div>
        </Section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0e0e0e] to-[#1a1a1a] text-white font-[var(--font-inter)]">
      {/* HERO SECTION (unchanged) */}
      <Section id="home" className="relative overflow-hidden min-h-[100dvh] md:min-h-screen flex items-center py-8 md:py-16">
        <motion.div
          className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 w-full"
          initial={initialStd}
          whileInView={whileInViewStd}
          viewport={viewportHero}
          variants={variantsOr(fadeInScale)}
        >
          <motion.div
            variants={variantsOr(fadeInScale)}
            className="relative w-full mb-2"
          >
            {/* Full-bleed background */}
            <div className="absolute inset-0 -z-10">
              <HeroMediaRotator />
              <div className="absolute inset-0 bg-black/45 md:bg-black/40" aria-hidden />
            </div>
            <motion.div
              variants={variantsOr(heroStagger)}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 md:min-h-[520px] items-center md:items-stretch w-full px-6 md:px-12 pt-10 md:pt-14 pb-0"
            >
              <motion.div variants={variantsOr(fadeUpSoft)} className="order-2 md:order-1 hidden md:flex justify-center md:justify-start items-end h-full">
                <div className="relative w-60 md:w-[300px] h-full flex items-end">
                  <motion.div variants={variantsOr(fadeUpSoft)} className="w-full flex justify-center">
                    <Image src="/home-banner-attorney.png" alt="Las Vegas attorney Marc A. Saggese – personal injury and criminal defense" width={400} height={500} priority className="relative rounded-2xl object-cover shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)]" />
                  </motion.div>
                </div>
              </motion.div>
              <motion.div variants={variantsOr(fadeUpSoft)} className="order-1 md:order-2 text-center md:text-center">
                <motion.h1 variants={variantsOr(fadeUpSoft)} className="font-[var(--font-playfair)] font-extrabold text-4xl md:text-6xl leading-[0.95] tracking-tight text-white">
                  {FIRM_NAME}
                  <span className="block text-[0.55em] mt-4 text-[#d4af37] font-serif tracking-tight font-normal">Personal Injury & Criminal Defense</span>
                </motion.h1>
                <motion.p variants={variantsOr(fadeUpSoft)} className="mt-6 text-base md:text-xl text-white/80 max-w-2xl">
                  Award‑winning <strong className="text-[#d4af37] font-medium">personal injury</strong> lawyer helping the injured first, and defending the accused across Clark County. <strong className="text-[#d4af37] font-medium">Free consultation</strong>. No fee unless we win injury cases.
                </motion.p>
                <motion.div variants={variantsOr(fadeUpSoft)} className="mt-8 flex flex-col sm:flex-row items-center gap-5 justify-center">
                  <a href={`tel:${FIRM_PHONE_E164}`} className="inline-flex items-center gap-2 rounded-2xl bg-[#d4af37] px-7 py-4 text-lg font-semibold text-[#0e0e0e] transition-colors hover:bg-[#c5a467] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d4af37] focus:ring-offset-neutral-900">Call {FIRM_PHONE_DISPLAY}</a>
                  <Link href="/contact" className="inline-flex items-center rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-lg text-white/90 transition hover:border-[#d4af37]/60 hover:bg-white/10">Request a Consultation</Link>
                </motion.div>
                <motion.ul variants={variantsOr(fadeUpSoft)} className="mt-7 flex flex-wrap gap-4 text-sm text-white/70 justify-center">
                  <li className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-[#d4af37]" />Free consultation</li>
                  <li className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-[#d4af37]" />Trial‑ready</li>
                  <li className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-[#d4af37]" />Spanish available</li>
                </motion.ul>
                <motion.div variants={variantsOr(fadeUpSoft)} className="mt-8">
                  <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[11px] md:text-xs tracking-wide text-white/55 font-medium">
                    <li className="flex items-center gap-2"><span className="text-white font-semibold">20+</span><span>Years Experience</span></li>
                    <li className="flex items-center gap-2"><span className="text-white font-semibold">Millions</span><span>Recovered*</span></li>
                    {reviewSummary && (
                      <li className="flex items-center gap-2" aria-label={`Google rating ${reviewSummary.rating.toFixed(1)} out of 5`}>
                        <span className="text-white font-semibold">{reviewSummary.rating.toFixed(1)}</span>
                        <span>★ ({reviewSummary.total}+ reviews)</span>
                      </li>
                    )}
                    <li className="flex items-center gap-2"><span className="text-white font-semibold">24/7</span><span>Message Us</span></li>
                  </ul>
                  <p className="mt-3 text-[10px] text-center text-white/30">*Past results do not guarantee future outcomes.</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </Section>

      {/* Sentinel used only on mobile to trigger mounting of heavy sections */}
      <div ref={sentinelRef} aria-hidden className="h-1 w-full" />

      {safeMode && (
        <p className="mt-4 text-center text-xs text-white/40">
          Safe mode active – below‑fold sections intentionally disabled.
        </p>
      )}

      {!safeMode && deferBelowFold && (
        <div className="mx-auto w-full max-w-7xl px-4 md:px-6 py-8 space-y-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center text-sm text-white/60">
            Loading additional content…
          </div>
          <div className="grid grid-cols-3 gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-[5/6] animate-pulse rounded-xl border border-white/10 bg-white/[0.07]"
              />
            ))}
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5 text-xs text-white/50 text-center">
            Scroll a bit more – sections mount once stable (mobile optimization).
          </div>
        </div>
      )}

      {!safeMode && !deferBelowFold && (
        <>
          {/* Awards Section (unchanged inside) */}
          <Section id="awards" className="py-8 md:py-12">
            {/* Wrap root with conditional: no motion on mobile */}
            {motionEnabled ? (
              <motion.div initial={initialStd} whileInView={whileInViewStd} viewport={viewportStd} variants={variantsOr(stagger)}>
                <motion.h2 variants={variantsOr(fadeUp)} className="text-center text-4xl md:text-5xl font-['Playfair_Display'] font-bold text-[#d4af37] mb-4">Awards & Recognition</motion.h2>
                <motion.p variants={variantsOr(fadeUp)} className="text-center max-w-3xl mx-auto text-base md:text-xl text-white/75 mb-6">Selective industry distinctions (mobile trimmed for performance).</motion.p>
                <motion.div variants={variantsOr(fadeUp)} className="grid grid-cols-3 sm:grid-cols-4 md:flex md:flex-wrap md:gap-6 gap-4 justify-center" aria-label="Legal industry awards">
                  {[
                    { src: '/awards/Client-Champion.png', alt: 'Client Champion award badge' },
                    { src: '/awards/Lawyers-badge.png', alt: 'Lawyers top rating badge' },
                    { src: '/awards/top-100.png', alt: 'Top 100 trial lawyers badge' },
                    { src: '/awards/new-updated-badge-1.png', alt: 'Excellence in practice badge 1' },
                    { src: '/awards/new-updated-badge-2.png', alt: 'Excellence in practice badge 2' },
                    { src: '/awards/new-updated-badge-3.png', alt: 'Excellence in practice badge 3' },
                    { src: '/awards/new-updated-badge-4.png', alt: '' },
                    { src: '/awards/new-updated-badge-5.png', alt: '' },
                    { src: '/awards/new-updated-badge-6.jpg', alt: '' },
                    { src: '/awards/new-updated-badge-7.png', alt: '' },
                    { src: '/awards/new-updated-badge-8.png', alt: '' },
                    { src: '/awards/new-updated-badge-9.png', alt: '' },
                  ]
                    .filter((_, i) => showAllAwards || i < 6)
                    .map(img => (
                      <div key={img.src} className="flex items-center justify-center">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          width={110}
                          height={138}
                          loading="lazy"
                          sizes="(max-width:640px) 30vw, 110px"
                          className="object-contain rounded-xl p-2 border border-[#d4af37]/25 bg-white/5"
                        />
                      </div>
                    ))}
                </motion.div>
                <div className="mt-4 flex justify-center md:hidden">
                  <button
                    onClick={toggleAwards}
                    className="text-xs px-4 py-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/10"
                    aria-expanded={showAllAwards}
                  >
                    {showAllAwards ? 'Show fewer' : 'Show all'}
                  </button>
                </div>
              </motion.div>
            ) : (
              <div>
                <h2 className="text-center text-4xl md:text-5xl font-['Playfair_Display'] font-bold text-[#d4af37] mb-4">Awards & Recognition</h2>
                <p className="text-center max-w-3xl mx-auto text-base md:text-xl text-white/75 mb-6">Selective industry distinctions (mobile trimmed for performance).</p>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:flex md:flex-wrap md:gap-6 gap-4 justify-center" aria-label="Legal industry awards">
                  {[
                    { src: '/awards/Client-Champion.png', alt: 'Client Champion award badge' },
                    { src: '/awards/Lawyers-badge.png', alt: 'Lawyers top rating badge' },
                    { src: '/awards/top-100.png', alt: 'Top 100 trial lawyers badge' },
                    { src: '/awards/new-updated-badge-1.png', alt: 'Excellence in practice badge 1' },
                    { src: '/awards/new-updated-badge-2.png', alt: 'Excellence in practice badge 2' },
                    { src: '/awards/new-updated-badge-3.png', alt: 'Excellence in practice badge 3' },
                    { src: '/awards/new-updated-badge-4.png', alt: '' },
                    { src: '/awards/new-updated-badge-5.png', alt: '' },
                    { src: '/awards/new-updated-badge-6.jpg', alt: '' },
                    { src: '/awards/new-updated-badge-7.png', alt: '' },
                    { src: '/awards/new-updated-badge-8.png', alt: '' },
                    { src: '/awards/new-updated-badge-9.png', alt: '' },
                  ]
                    .filter((_, i) => showAllAwards || i < 6)
                    .map(img => (
                      <div key={img.src} className="flex items-center justify-center">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          width={110}
                          height={138}
                          loading="lazy"
                          sizes="(max-width:640px) 30vw, 110px"
                          className="object-contain rounded-xl p-2 border border-[#d4af37]/25 bg-white/5"
                        />
                      </div>
                    ))}
                </div>
                <div className="mt-4 flex justify-center md:hidden">
                  <button
                    onClick={toggleAwards}
                    className="text-xs px-4 py-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/10"
                    aria-expanded={showAllAwards}
                  >
                    {showAllAwards ? 'Show fewer' : 'Show all'}
                  </button>
                </div>
              </div>
            )}
          </Section>

          <Section id="media" className="py-6 md:py-8">
            {motionEnabled ? (
              <motion.div initial={initialStd} whileInView={whileInViewStd} viewport={viewportStd} variants={variantsOr(stagger)} className="text-center">
                <motion.h2 variants={variantsOr(fadeUp)} className="text-2xl md:text-3xl font-['Playfair_Display'] font-semibold text-white mb-4">As Seen On</motion.h2>
                <motion.p variants={variantsOr(fadeUp)} className="text-white/75 max-w-2xl mx-auto mb-6">Media appearances discussing high‑profile Nevada legal issues.</motion.p>
                <motion.div variants={variantsOr(fadeUp)} className="mx-auto flex w-full max-w-4xl items-center justify-center gap-6 flex-wrap" aria-label="Media outlets">
                  {[
                    { src: '/shows/insideeditions.png', alt: 'Inside Edition appearance' },
                    { src: '/shows/Face-to-Face-o.jpg', alt: 'Face to Face interview' },
                    { src: '/shows/The-Defenders-o.jpg', alt: 'The Defenders TV segment' },
                    { src: '/shows/Review-Journal-o.jpg', alt: 'Las Vegas Review-Journal coverage' },
                  ].map(m => (
                    <Image
                      key={m.src}
                      src={m.src}
                      alt={m.alt}
                      width={150}
                      height={44}
                      loading="lazy"
                      sizes="(max-width:640px) 40vw, 150px"
                      className="object-contain w-auto h-auto opacity-90"
                    />
                  ))}
                </motion.div>
              </motion.div>
            ) : (
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-['Playfair_Display'] font-semibold text-white mb-4">As Seen On</h2>
                <p className="text-white/75 max-w-2xl mx-auto mb-6">Media appearances discussing high‑profile Nevada legal issues.</p>
                <div className="mx-auto flex w-full max-w-4xl items-center justify-center gap-6 flex-wrap" aria-label="Media outlets">
                  {[
                    { src: '/shows/insideeditions.png', alt: 'Inside Edition appearance' },
                    { src: '/shows/Face-to-Face-o.jpg', alt: 'Face to Face interview' },
                    { src: '/shows/The-Defenders-o.jpg', alt: 'The Defenders TV segment' },
                    { src: '/shows/Review-Journal-o.jpg', alt: 'Las Vegas Review-Journal coverage' },
                  ].map(m => (
                    <Image
                      key={m.src}
                      src={m.src}
                      alt={m.alt}
                      width={150}
                      height={44}
                      loading="lazy"
                      sizes="(max-width:640px) 40vw, 150px"
                      className="object-contain w-auto h-auto opacity-90"
                    />
                  ))}
                </div>
              </div>
            )}
          </Section>

          <Section id="reviews" className="py-8 md:py-12">
            {/* GoogleReviews already guarded internally */}
            <GoogleReviews />
          </Section>

          <Section id="practice">
            {motionEnabled ? (
              <motion.div initial={initialStd} whileInView={whileInViewStd} viewport={viewportStd} variants={variantsOr(stagger)}>
                <motion.h2 variants={variantsOr(fadeUp)} className="text-3xl font-bold">Practice Areas</motion.h2>
                <motion.p variants={variantsOr(fadeUp)} className="mt-2 max-w-prose text-white/75">Focused on outcomes that matter. Explore key Nevada personal injury and criminal defense matters we handle.</motion.p>
                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                  <Card title="Seriously Hurt?" subtitle="Personal Injury — Experienced Legal Support" variantsOverride={variantsOr(fadeUp)}>
                    We help injured Nevadans pursue medical care and compensation. Free case evaluations. No fees unless we win.
                    <TopicsAccordion title="Personal Injury" topics={PERSONAL_INJURY_TOPICS} />
                    <div className="mt-4"><a href="#contact" className="inline-block rounded-xl border px-4 py-2 text-sm font-semibold hover:bg-white/10" style={{ borderColor: BRAND.accent }}>Get a Free Case Review</a></div>
                  </Card>
                  <Card title="Arrested?" subtitle="Criminal Defense — Protect your rights" variantsOverride={variantsOr(fadeUp)}>
                    Strategic, trial‑tested defense from arraignment through resolution. Flat‑fee and payment options available.
                    <TopicsAccordion title="Criminal Defense" topics={CRIMINAL_DEFENSE_TOPICS} basePath="/criminal-defense" />
                    <div className="mt-4"><a href="#contact" className="inline-block rounded-xl border px-4 py-2 text-sm font-semibold hover:bg-white/10" style={{ borderColor: BRAND.accent }}>Talk to a Defense Attorney</a></div>
                  </Card>
                </div>
              </motion.div>
            ) : (
              <div>
                <h2 className="text-3xl font-bold">Practice Areas</h2>
                <p className="mt-2 max-w-prose text-white/75">Focused on outcomes that matter. Explore key Nevada personal injury and criminal defense matters we handle.</p>
                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                  <Card title="Seriously Hurt?" subtitle="Personal Injury — Experienced Legal Support">
                    We help injured Nevadans pursue medical care and compensation. Free case evaluations. No fees unless we win.
                    <TopicsAccordion title="Personal Injury" topics={PERSONAL_INJURY_TOPICS} />
                    <div className="mt-4"><a href="#contact" className="inline-block rounded-xl border px-4 py-2 text-sm font-semibold hover:bg-white/10" style={{ borderColor: BRAND.accent }}>Get a Free Case Review</a></div>
                  </Card>
                  <Card title="Arrested?" subtitle="Criminal Defense — Protect your rights">
                    Strategic, trial‑tested defense from arraignment through resolution. Flat‑fee and payment options available.
                    <TopicsAccordion title="Criminal Defense" topics={CRIMINAL_DEFENSE_TOPICS} basePath="/criminal-defense" />
                    <div className="mt-4"><a href="#contact" className="inline-block rounded-xl border px-4 py-2 text-sm font-semibold hover:bg-white/10" style={{ borderColor: BRAND.accent }}>Talk to a Defense Attorney</a></div>
                  </Card>
                </div>
              </div>
            )}
          </Section>

          <Section id="results">
            {motionEnabled ? (
              <motion.div initial={initialStd} whileInView={whileInViewStd} viewport={viewportStd} variants={variantsOr(stagger)}>
                <motion.h2 variants={variantsOr(fadeUp)} className="text-3xl font-bold">Representative Results</motion.h2>
                <motion.p variants={variantsOr(fadeUp)} className="mt-2 max-w-prose text-white/75">Past results do not guarantee similar outcomes; every case is unique.</motion.p>
                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                  <Card title="$1M+ Settlement" subtitle="Auto Collision" variantsOverride={variantsOr(fadeUp)}>Rear‑end collision; disputed liability. Coordinated medical care, negotiated policy‑limit settlement.</Card>
                  <Card title="Felony Reduced" subtitle="Drug Possession" variantsOverride={variantsOr(fadeUp)}>Challenged stop and search; key evidence suppressed. Felony reduced to misdemeanor.</Card>
                  <Card title="Case Dismissed" subtitle="DUI (1st)" variantsOverride={variantsOr(fadeUp)}>Identified testing issues & procedural defects; dismissal prior to trial.</Card>
                </div>
              </motion.div>
            ) : (
              <div>
                <h2 className="text-3xl font-bold">Representative Results</h2>
                <p className="mt-2 max-w-prose text-white/75">Past results do not guarantee similar outcomes; every case is unique.</p>
                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                  <Card title="$1M+ Settlement" subtitle="Auto Collision">Rear‑end collision; disputed liability. Coordinated medical care, negotiated policy‑limit settlement.</Card>
                  <Card title="Felony Reduced" subtitle="Drug Possession">Challenged stop and search; key evidence suppressed. Felony reduced to misdemeanor.</Card>
                  <Card title="Case Dismissed" subtitle="DUI (1st)">Identified testing issues & procedural defects; dismissal prior to trial.</Card>
                </div>
              </div>
            )}
          </Section>

          <Section id="about">
            {motionEnabled ? (
              <motion.div initial={initialStd} whileInView={whileInViewStd} viewport={viewportStd} variants={variantsOr(stagger)}>
                <motion.h2 variants={variantsOr(fadeUp)} className="text-3xl font-['Playfair_Display'] font-semibold text-center mb-4">Meet Your Lawyer</motion.h2>
                <motion.div variants={variantsOr(fadeUp)} className="mt-6 grid grid-cols-1 items-center gap-8 md:grid-cols-[240px,1fr]">
                  <div className="hidden md:flex justify-center items-center">
                    <div className="relative aspect-[1/1] w-80 md:w-96 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-neutral-900 via-neutral-800 to-black shadow-lg">
                      <Image src="/meet-your.jpg" alt="Attorney Marc A. Saggese portrait" fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                  </div>
                  <div className="text-center md:text-center">
                    <h3 className="text-2xl font-['Playfair_Display'] font-bold text-white">Marc A. Saggese</h3>
                    <p className="mt-2 max-w-prose mx-auto text-lg text-white/80 leading-relaxed">Las Vegas attorney focusing on <strong className="text-[#d4af37]">personal injury</strong> and <strong className="text-[#d4af37]">criminal defense</strong>, blending decades of courtroom experience with client‑first strategy.</p>
                    <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-white/70 justify-center max-w-sm mx-auto" aria-label="Firm highlights">
                      <li className="flex items-center gap-3 justify-center"><span className="h-2 w-2 rounded-full bg-[#d4af37]" />Free consultations</li>
                      <li className="flex items-center gap-3 justify-center"><span className="h-2 w-2 rounded-full bg-[#d4af37]" />Same‑day when available</li>
                      <li className="flex items-center gap-3 justify-center"><span className="h-2 w-2 rounded-full bg-[#d4af37]" />Evening/weekend by appt.</li>
                      <li className="flex items-center gap-3 justify-center"><span className="h-2 w-2 rounded-full bg-[#d4af37]" />Se habla Español</li>
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ) : (
              <div>
                <h2 className="text-3xl font-['Playfair_Display'] font-semibold text-center mb-4">Meet Your Lawyer</h2>
                <div className="mt-6 grid grid-cols-1 items-center gap-8 md:grid-cols-[240px,1fr]">
                  <div className="hidden md:flex justify-center items-center">
                    <div className="relative aspect-[1/1] w-80 md:w-96 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-neutral-900 via-neutral-800 to-black shadow-lg">
                      <Image src="/meet-your.jpg" alt="Attorney Marc A. Saggese portrait" fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                  </div>
                  <div className="text-center md:text-center">
                    <h3 className="text-2xl font-['Playfair_Display'] font-bold text-white">Marc A. Saggese</h3>
                    <p className="mt-2 max-w-prose mx-auto text-lg text-white/80 leading-relaxed">Las Vegas attorney focusing on <strong className="text-[#d4af37]">personal injury</strong> and <strong className="text-[#d4af37]">criminal defense</strong>, blending decades of courtroom experience with client‑first strategy.</p>
                    <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-white/70 justify-center max-w-sm mx-auto" aria-label="Firm highlights">
                      <li className="flex items-center gap-3 justify-center"><span className="h-2 w-2 rounded-full bg-[#d4af37]" />Free consultations</li>
                      <li className="flex items-center gap-3 justify-center"><span className="h-2 w-2 rounded-full bg-[#d4af37]" />Same‑day when available</li>
                      <li className="flex items-center gap-3 justify-center"><span className="h-2 w-2 rounded-full bg-[#d4af37]" />Evening/weekend by appt.</li>
                      <li className="flex items-center gap-3 justify-center"><span className="h-2 w-2 rounded-full bg-[#d4af37]" />Se habla Español</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </Section>

          <Section id="mission">
            {motionEnabled ? (
              <motion.div initial={initialStd} whileInView={whileInViewStd} viewport={viewportStd} variants={variantsOr(stagger)}>
                <motion.h2 variants={variantsOr(fadeUp)} className="text-center text-sm font-semibold tracking-widest text-[#d4af37] mb-2">GETTING THE RESULTS YOU WANT</motion.h2>
                <motion.p variants={variantsOr(fadeUp)} className="mt-4 text-center text-white/75 max-w-2xl mx-auto">Our practice rests on these principles:</motion.p>
                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3 max-w-3xl mx-auto">
                  {['Integrity','Compassion','Service'].map(p => (
                    <motion.div key={p} variants={variantsOr(fadeUp)} className="rounded-xl bg-white/3 p-6 text-center shadow-lg"><h5 className="text-lg font-semibold text-white">{p}</h5></motion.div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <div>
                <h2 className="text-center text-sm font-semibold tracking-widest text-[#d4af37] mb-2">GETTING THE RESULTS YOU WANT</h2>
                <p className="mt-4 text-center text-white/75 max-w-2xl mx-auto">Our practice rests on these principles:</p>
                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3 max-w-3xl mx-auto">
                  {['Integrity','Compassion','Service'].map(p => (
                    <div key={p} className="rounded-xl bg-white/3 p-6 text-center shadow-lg"><h5 className="text-lg font-semibold text-white">{p}</h5></div>
                  ))}
                </div>
              </div>
            )}
          </Section>

          <Section id="contact">
            {/* Contact form keeps motion only if enabled */}
            {motionEnabled ? (
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
                <motion.h2 variants={fadeUp} className="text-3xl font-['Playfair_Display'] font-semibold text-center">Speak With an Experienced Lawyer Today</motion.h2>
                <motion.p variants={fadeUp} className="mt-3 text-center max-w-2xl mx-auto text-white/75">Learn how we help Nevada injury victims and defendants. Call <a href={`tel:${FIRM_PHONE_E164}`} className="underline" style={{ textDecorationColor: BRAND.accent }}>{FIRM_PHONE_DISPLAY}</a>.</motion.p>
                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
                  <motion.div variants={fadeUp} className="md:col-span-2">
                    <motion.form variants={fadeUp} onSubmit={handleFormSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6" aria-label="Free consultation form">
                      {formStatus === 'success' && (
                        <div className="mb-4 rounded-lg bg-green-900/20 border border-green-500/30 p-4 text-green-300">
                          {formMessage}
                        </div>
                      )}
                      
                      {formStatus === 'error' && (
                        <div className="mb-4 rounded-lg bg-red-900/20 border border-red-500/30 p-4 text-red-300">
                          {formMessage}
                        </div>
                      )}

                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="md:col-span-2">
                          <label className="text-sm font-semibold block mb-2">What type of matter is this? <span className="text-[#d4af37]">*</span></label>
                          <select
                            value={formData.caseType}
                            onChange={(e) => setFormData(prev => ({ ...prev, caseType: e.target.value }))}
                            required
                            className="w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm"
                          >
                            <option value="">Select a case type</option>
                            <option>Personal Injury</option>
                            <option>Criminal Defense</option>
                            <option>Family Law</option>
                            <option>Immigration</option>
                            <option>Business / Contract</option>
                            <option>Other</option>
                          </select>
                          {!ACCEPTED_CASE_TYPES.includes(formData.caseType || '') && formData.caseType !== '' && (
                            <div className="mt-2 text-sm text-yellow-300">We do not handle this matter. Please call for a referral.</div>
                          )}
                        </div>

                        {/* Conditional helper fields */}
                        {formData.caseType === 'Personal Injury' && (
                          <>
                            <label className="text-sm">Personal injury type
                              <select value={formData.piSubtype} onChange={(e) => setFormData(prev => ({ ...prev, piSubtype: e.target.value }))} className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm">
                                <option value="">Select</option>
                                <option value="Car Accident">Car Accident</option>
                                <option value="Slip and Fall">Slip and Fall</option>
                                <option value="Premises Liability">Premises Liability</option>
                                <option value="Medical Malpractice">Medical Malpractice</option>
                                <option value="Product Liability">Product Liability</option>
                                <option value="Other">Other</option>
                              </select>
                            </label>
                            <label className="text-sm">Injury severity
                              <select onChange={(e) => setFormData(prev => ({ ...prev, injurySeverity: e.target.value }))} className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm">
                                <option value="">Select</option>
                                <option value="minor">Minor (no hospitalization)</option>
                                <option value="moderate">Moderate (medical treatment)</option>
                                <option value="severe">Severe (hospitalization, long-term)</option>
                              </select>
                            </label>
                            <label className="text-sm">Estimated medical bills
                              <input name="medicalEstimate" value={formData.medicalEstimate} onChange={handleInputChange} className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm" placeholder="Estimated bills or 'unknown'" />
                            </label>
                            <label className="text-sm">Who was at-fault?
                              <input name="atFault" value={formData.atFault} onChange={handleInputChange} className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm" placeholder="Driver / Other party" />
                            </label>
                            <label className="text-sm">Did the other driver have insurance and do you have insurance?
                              <input name="otherDriverInsurance" value={formData.otherDriverInsurance} onChange={handleInputChange} className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm" placeholder="Other driver: yes/no/unknown; Yours: yes/no" />
                            </label>
                            <label className="text-sm">Were you injured during the accident?
                              <select value={formData.wereYouInjured} onChange={(e) => setFormData(prev => ({ ...prev, wereYouInjured: e.target.value }))} className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm">
                                <option value="">Select</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                              </select>
                            </label>
                            <label className="text-sm">What are the injuries that you have that you are currently aware of?
                              <input name="injuryList" value={formData.injuryList} onChange={handleInputChange} className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm" placeholder="List injuries" />
                            </label>
                            <label className="text-sm">Were there other passengers in your car? How many? Were they injured?
                              <input name="passengers" value={formData.passengers} onChange={handleInputChange} className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm" placeholder="e.g. 2; one injured" />
                            </label>
                            <label className="text-sm">How much damage was done to your vehicle? Minor, moderate or severe?
                              <select value={formData.vehicleDamageSeverity} onChange={(e) => setFormData(prev => ({ ...prev, vehicleDamageSeverity: e.target.value }))} className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm">
                                <option value="">Select</option>
                                <option value="minor">Minor</option>
                                <option value="moderate">Moderate</option>
                                <option value="severe">Severe</option>
                              </select>
                            </label>
                          </>
                        )}

                        {formData.caseType === 'Criminal Defense' && (
                          <>
                            <label className="text-sm">Were you arrested?
                              <select value={formData.arrested} onChange={(e) => setFormData(prev => ({ ...prev, arrested: e.target.value }))} className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm">
                                <option value="no">No</option>
                                <option value="yes">Yes</option>
                              </select>
                            </label>
                            <label className="text-sm">Charge (if known)
                              <input name="chargeName" value={formData.chargeName} onChange={handleInputChange} className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm" placeholder="e.g. DUI, theft" />
                            </label>
                            <label className="text-sm">Do you have the financial ability to retain private counsel?
                              <select value={formData.financialAbility} onChange={(e) => setFormData(prev => ({ ...prev, financialAbility: e.target.value }))} className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm">
                                <option value="">Select</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                              </select>
                            </label>
                          </>
                        )}
                        <label className="text-sm font-semibold">First name <span className="text-[#d4af37]">*</span>
                          <input name="firstName" value={formData.firstName} onChange={handleInputChange} autoComplete="given-name" aria-required required className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm" placeholder="Jane" />
                        </label>
                        <label className="text-sm font-semibold">Last name <span className="text-[#d4af37]">*</span>
                          <input name="lastName" value={formData.lastName} onChange={handleInputChange} autoComplete="family-name" aria-required required className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm" placeholder="Doe" />
                        </label>
                        <label className="text-sm font-semibold md:col-span-2">Email <span className="text-[#d4af37]">*</span>
                          <input type="email" name="email" value={formData.email} onChange={handleInputChange} autoComplete="email" aria-required required className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm" placeholder="you@example.com" />
                        </label>
                        <label className="text-sm font-semibold">Phone
                          <input name="phone" value={formData.phone} onChange={handleInputChange} autoComplete="tel" className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm" placeholder="(702) 555‑0123" />
                        </label>
                        <label className="text-sm font-semibold md:col-span-2">Brief description <span className="text-[#d4af37]">*</span>
                          <textarea name="message" value={formData.message} onChange={handleInputChange} aria-required required rows={5} className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm" placeholder="Briefly describe your matter" />
                        </label>
                        <div className="flex items-start gap-2 md:col-span-2">
                          <input id="consent" name="consent" type="checkbox" checked={formData.consent} onChange={handleInputChange} className="mt-1" required />
                          <label htmlFor="consent" className="text-sm font-semibold">I have read the disclaimer. <span className="text-white/60">(Submitting does not create an attorney‑client relationship)</span></label>
                        </div>
                        <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden />
                        <button type="submit" disabled={formStatus === 'loading'} className="mt-2 w-full rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-3 text-sm font-semibold text-[#0e0e0e] disabled:opacity-50 disabled:cursor-not-allowed">
                          {formStatus === 'loading' ? 'Sending...' : 'Request a free consultation'}
                        </button>
                      </div>
                    </motion.form>
                  </motion.div>
                  <motion.div variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/80 flex flex-col gap-4">
                    <h3 className="text-base font-semibold">Contact Information</h3>
                    <address className="not-italic text-white/80">
                      The Law Offices of Saggese & Associates<br />{FIRM_ADDRESS_LINE1}<br />{FIRM_ADDRESS_LINE2}
                    </address>
                    <p className="text-white/80">Phone: <a href={`tel:${FIRM_PHONE_E164}`} className="underline" style={{ textDecorationColor: BRAND.accent }}>{FIRM_PHONE_DISPLAY}</a></p>
                    <p className="text-white/80">Fax: 702-778-8884</p>
                    <div className="mt-2">
                      <h4 className="text-sm font-semibold text-white/75">Connect</h4>
                      <ul className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-3" aria-label="Social links">
                        {[
                          { name: 'LinkedIn', href: 'https://www.linkedin.com/in/marc-saggese-4a84a34b/?original_referer=https%3A%2F%2Fwww.maxlawnv.com%2F' },
                          { name: 'Avvo', href: 'https://www.avvo.com/attorneys/89101-nv-marc-saggese-563159.html' },
                        ].map(s => (
                          <li key={s.name} className="list-none">
                            <a
                              href={s.href}
                              target="_blank"
                              rel="noopener noreferrer nofollow"
                              aria-label={`Visit our ${s.name} profile (opens in new tab)`}
                              className="rounded-full bg-white/6 px-4 py-1.5 text-xs font-medium tracking-wide hover:bg-white/10 transition text-center inline-flex items-center gap-1"
                            >
                              {s.name}
                              <span aria-hidden className="text-[10px] opacity-60">↗</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4 text-sm text-white/60">Office hours: Mon–Fri 8:00–5:00 • Sat–Sun Closed</div>
                    {!mapRevealed ? (
                      <button
                        onClick={() => setMapRevealed(true)}
                        className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70 hover:bg-white/10"
                      >
                        Load map
                      </button>
                    ) : (
                      <>
                        <LazyMap />
                        <div className="mt-2 text-[10px] tracking-wide uppercase text-white/30">Map data © {new Date().getFullYear()} Google</div>
                      </>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ) : (
              <div>
                <h2 className="text-3xl font-['Playfair_Display'] font-semibold text-center">Speak With an Experienced Lawyer Today</h2>
                <p className="mt-3 text-center max-w-2xl mx-auto text-white/75">Learn how we help Nevada injury victims and defendants. Call <a href={`tel:${FIRM_PHONE_E164}`} className="underline" style={{ textDecorationColor: BRAND.accent }}>{FIRM_PHONE_DISPLAY}</a>.</p>
                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
                  <div className="md:col-span-2">
                    <form onSubmit={handleFormSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6" aria-label="Free consultation form">
                      {formStatus === 'success' && (
                        <div className="mb-4 rounded-lg bg-green-900/20 border border-green-500/30 p-4 text-green-300">
                          {formMessage}
                        </div>
                      )}
                      
                      {formStatus === 'error' && (
                        <div className="mb-4 rounded-lg bg-red-900/20 border border-red-500/30 p-4 text-red-300">
                          {formMessage}
                        </div>
                      )}

                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="md:col-span-2">
                          <label className="text-sm font-semibold block mb-2">What type of matter is this? <span className="text-[#d4af37]">*</span></label>
                          <select
                            value={formData.caseType}
                            onChange={(e) => setFormData(prev => ({ ...prev, caseType: e.target.value }))}
                            required
                            className="w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm"
                          >
                            <option value="">Select a case type</option>
                            <option>Personal Injury</option>
                            <option>Criminal Defense</option>
                            <option>Family Law</option>
                            <option>Immigration</option>
                            <option>Business / Contract</option>
                            <option>Other</option>
                          </select>
                          {!ACCEPTED_CASE_TYPES.includes(formData.caseType || '') && formData.caseType !== '' && (
                            <div className="mt-2 text-sm text-yellow-300">We do not handle this matter. Please call for a referral.</div>
                          )}
                        </div>

                        {/* Conditional helper fields */}
                        {formData.caseType === 'Personal Injury' && (
                          <>
                            <label className="text-sm">Personal injury type
                              <select value={formData.piSubtype} onChange={(e) => setFormData(prev => ({ ...prev, piSubtype: e.target.value }))} className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm">
                                <option value="">Select</option>
                                <option value="Car Accident">Car Accident</option>
                                <option value="Slip and Fall">Slip and Fall</option>
                                <option value="Premises Liability">Premises Liability</option>
                                <option value="Medical Malpractice">Medical Malpractice</option>
                                <option value="Product Liability">Product Liability</option>
                                <option value="Other">Other</option>
                              </select>
                            </label>
                            <label className="text-sm">Injury severity
                              <select onChange={(e) => setFormData(prev => ({ ...prev, injurySeverity: e.target.value }))} className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm">
                                <option value="">Select</option>
                                <option value="minor">Minor (no hospitalization)</option>
                                <option value="moderate">Moderate (medical treatment)</option>
                                <option value="severe">Severe (hospitalization, long-term)</option>
                              </select>
                            </label>
                            <label className="text-sm">Estimated medical bills
                              <input name="medicalEstimate" value={formData.medicalEstimate} onChange={handleInputChange} className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm" placeholder="Estimated bills or 'unknown'" />
                            </label>
                            <label className="text-sm">Who was at-fault?
                              <input name="atFault" value={formData.atFault} onChange={handleInputChange} className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm" placeholder="Driver / Other party" />
                            </label>
                            <label className="text-sm">Did the other driver have insurance and do you have insurance?
                              <input name="otherDriverInsurance" value={formData.otherDriverInsurance} onChange={handleInputChange} className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm" placeholder="Other driver: yes/no/unknown; Yours: yes/no" />
                            </label>
                            <label className="text-sm">Were you injured during the accident?
                              <select value={formData.wereYouInjured} onChange={(e) => setFormData(prev => ({ ...prev, wereYouInjured: e.target.value }))} className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm">
                                <option value="">Select</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                              </select>
                            </label>
                            <label className="text-sm">What are the injuries that you have that you are currently aware of?
                              <input name="injuryList" value={formData.injuryList} onChange={handleInputChange} className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm" placeholder="List injuries" />
                            </label>
                            <label className="text-sm">Were there other passengers in your car? How many? Were they injured?
                              <input name="passengers" value={formData.passengers} onChange={handleInputChange} className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm" placeholder="e.g. 2; one injured" />
                            </label>
                            <label className="text-sm">How much damage was done to your vehicle? Minor, moderate or severe?
                              <select value={formData.vehicleDamageSeverity} onChange={(e) => setFormData(prev => ({ ...prev, vehicleDamageSeverity: e.target.value }))} className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm">
                                <option value="">Select</option>
                                <option value="minor">Minor</option>
                                <option value="moderate">Moderate</option>
                                <option value="severe">Severe</option>
                              </select>
                            </label>
                          </>
                        )}

                        {formData.caseType === 'Criminal Defense' && (
                          <>
                            <label className="text-sm">Were you arrested?
                              <select value={formData.arrested} onChange={(e) => setFormData(prev => ({ ...prev, arrested: e.target.value }))} className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm">
                                <option value="no">No</option>
                                <option value="yes">Yes</option>
                              </select>
                            </label>
                            <label className="text-sm">Charge (if known)
                              <input name="chargeName" value={formData.chargeName} onChange={handleInputChange} className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm" placeholder="e.g. DUI, theft" />
                            </label>
                            <label className="text-sm">Do you have the financial ability to retain private counsel?
                              <select value={formData.financialAbility} onChange={(e) => setFormData(prev => ({ ...prev, financialAbility: e.target.value }))} className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm">
                                <option value="">Select</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                              </select>
                            </label>
                          </>
                        )}
                        <label className="text-sm font-semibold">First name <span className="text-[#d4af37]">*</span>
                          <input name="firstName" value={formData.firstName} onChange={handleInputChange} autoComplete="given-name" aria-required required className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm" placeholder="Jane" />
                        </label>
                        <label className="text-sm font-semibold">Last name <span className="text-[#d4af37]">*</span>
                          <input name="lastName" value={formData.lastName} onChange={handleInputChange} autoComplete="family-name" aria-required required className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm" placeholder="Doe" />
                        </label>
                        <label className="text-sm font-semibold md:col-span-2">Email <span className="text-[#d4af37]">*</span>
                          <input type="email" name="email" value={formData.email} onChange={handleInputChange} autoComplete="email" aria-required required className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm" placeholder="you@example.com" />
                        </label>
                        <label className="text-sm font-semibold">Phone
                          <input name="phone" value={formData.phone} onChange={handleInputChange} autoComplete="tel" className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm" placeholder="(702) 555‑0123" />
                        </label>
                        <label className="text-sm font-semibold md:col-span-2">Brief description <span className="text-[#d4af37]">*</span>
                          <textarea name="message" value={formData.message} onChange={handleInputChange} aria-required required rows={5} className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm" placeholder="Briefly describe your matter" />
                        </label>
                        <div className="flex items-start gap-2 md:col-span-2">
                          <input id="consent" name="consent" type="checkbox" checked={formData.consent} onChange={handleInputChange} className="mt-1" required />
                          <label htmlFor="consent" className="text-sm font-semibold">I have read the disclaimer. <span className="text-white/60">(Submitting does not create an attorney‑client relationship)</span></label>
                        </div>
                        <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden />
                        <button type="submit" disabled={formStatus === 'loading'} className="mt-2 w-full rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-3 text-sm font-semibold text-[#0e0e0e] disabled:opacity-50 disabled:cursor-not-allowed">
                          {formStatus === 'loading' ? 'Sending...' : 'Request a free consultation'}
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/80 flex flex-col gap-4">
                    <h3 className="text-base font-semibold">Contact Information</h3>
                    <address className="not-italic text-white/80">
                      The Law Offices of Saggese & Associates<br />{FIRM_ADDRESS_LINE1}<br />{FIRM_ADDRESS_LINE2}
                    </address>
                    <p className="text-white/80">Phone: <a href={`tel:${FIRM_PHONE_E164}`} className="underline" style={{ textDecorationColor: BRAND.accent }}>{FIRM_PHONE_DISPLAY}</a></p>
                    <p className="text-white/80">Fax: 702-778-8884</p>
                    <div className="mt-2">
                      <h4 className="text-sm font-semibold text-white/75">Connect</h4>
                      <ul className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-3" aria-label="Social links">
                        {[
                          { name: 'LinkedIn', href: 'https://www.linkedin.com/in/marc-saggese-4a84a34b/?original_referer=https%3A%2F%2Fwww.maxlawnv.com%2F' },
                          { name: 'Avvo', href: 'https://www.avvo.com/attorneys/89101-nv-marc-saggese-563159.html' },
                        ].map(s => (
                          <li key={s.name} className="list-none">
                            <a
                              href={s.href}
                              target="_blank"
                              rel="noopener noreferrer nofollow"
                              aria-label={`Visit our ${s.name} profile (opens in new tab)`}
                              className="rounded-full bg-white/6 px-4 py-1.5 text-xs font-medium tracking-wide hover:bg-white/10 transition text-center inline-flex items-center gap-1"
                            >
                              {s.name}
                              <span aria-hidden className="text-[10px] opacity-60">↗</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4 text-sm text-white/60">Office hours: Mon–Fri 8:00–5:00 • Sat–Sun Closed</div>
                    <LazyMap />
                    <div className="mt-2 text-[10px] tracking-wide uppercase text-white/30">Map data © {new Date().getFullYear()} Google</div>
                  </div>
                </div>
              </div>
            )}
          </Section>
        </>
      )}
    </main>
  );
}