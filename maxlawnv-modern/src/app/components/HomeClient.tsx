"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

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
  return (
    <section id={id} className={`mx-auto w-full max-w-7xl px-4 md:px-6 ${className || defaultPadding} relative`}>
      <div className={`relative ${shadeClass}`}>{children}</div>
    </section>
  );
};

const Card: React.FC<React.PropsWithChildren<{ title: string; subtitle?: string }>> = ({ title, subtitle, children }) => (
  <motion.div variants={fadeUp} className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-white/3 to-transparent p-4 shadow-[0_12px_40px_rgba(0,0,0,0.6)] backdrop-blur-sm">
    <div className="h-1 w-12 rounded-full bg-[#d4af37] mb-4" />
    <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
    {subtitle ? <p className="mt-1 text-sm text-white/70">{subtitle}</p> : null}
    <div className="mt-4 text-sm leading-relaxed text-white/80">{children}</div>
  </motion.div>
);

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
  React.useEffect(() => {
    let raf: number | null = null;
    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        document.querySelectorAll<HTMLElement>('[data-parallax-speed]').forEach(el => {
          const speed = parseFloat(el.dataset.parallaxSpeed || '0');
          el.style.transform = `translateY(${(scrolled * speed).toFixed(2)}px)`;
        });
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); if (raf) cancelAnimationFrame(raf); };
  }, []);
  // Map load state for skeleton shimmer
  const [mapLoaded, setMapLoaded] = React.useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0e0e0e] to-[#1a1a1a] text-white font-['Inter']">
      <Section id="home" className="relative overflow-hidden py-0 md:py-4 min-h-screen flex items-center">
        <motion.div
          className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 w-full"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInScale}
        >
          <motion.div
            variants={fadeInScale}
            className="relative overflow-hidden rounded-3xl py-10 px-6 md:px-12 mb-2 border border-white/10 bg-neutral-900/40 backdrop-blur-sm"
          >
            <motion.div
              variants={heroStagger}
              className="grid grid-cols-1 md:grid-cols-2 items-center gap-10"
            >
              <motion.div variants={fadeUpSoft} className="order-2 md:order-1 flex items-center justify-center md:justify-start">
                <div className="relative w-60 md:w-[430px]">
                  <motion.div variants={fadeUpSoft}>
                    <Image src="/home-banner-attorney.png" alt="Las Vegas attorney Marc A. Saggese – personal injury and criminal defense" width={400} height={500} priority className="relative rounded-2xl object-cover" />
                  </motion.div>
                </div>
              </motion.div>
              <motion.div variants={fadeUpSoft} className="order-1 md:order-2 text-center md:text-left">
                <motion.h1 variants={fadeUpSoft} className="font-['Playfair_Display'] font-extrabold text-4xl md:text-6xl leading-[0.95] tracking-tight text-white">
                  Las Vegas Personal Injury & Criminal Defense Lawyer
                  <span className="block text-[0.8em] mt-4 text-[#d4af37] font-serif tracking-tight">Marc A. Saggese</span>
                </motion.h1>
                <motion.p variants={fadeUpSoft} className="mt-6 text-base md:text-xl text-white/80 max-w-2xl">
                  Award‑winning trial lawyer defending the accused and advocating for the injured across Clark County. <strong className="text-[#d4af37] font-medium">Free consultation</strong>. No fee unless we win injury cases.
                </motion.p>
                <motion.div variants={fadeUpSoft} className="mt-8 flex flex-col sm:flex-row items-center md:items-start gap-5 justify-center md:justify-start">
                  <a href="tel:17027788883" className="inline-flex items-center gap-2 rounded-2xl bg-[#d4af37] px-7 py-4 text-lg font-semibold text-[#0e0e0e] transition-colors hover:bg-[#c5a467] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d4af37] focus:ring-offset-neutral-900">Call (702) 778‑8883</a>
                  <Link href="/contact" className="inline-flex items-center rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-lg text-white/90 transition hover:border-[#d4af37]/60 hover:bg-white/10">Request a Consultation</Link>
                </motion.div>
                <motion.ul variants={fadeUpSoft} className="mt-7 flex flex-wrap gap-4 text-sm text-white/70">
                  <li className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-[#d4af37]" />Free consultation</li>
                  <li className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-[#d4af37]" />Trial‑ready</li>
                  <li className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-[#d4af37]" />Spanish available</li>
                </motion.ul>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </Section>

      <div className="section-sep" aria-hidden>
        <svg viewBox="0 0 1200 36" preserveAspectRatio="none"><path d="M0,36 L1200,0 L1200,36 Z" fill="#0f0f0f" opacity="0.6"/></svg>
      </div>

      <Section id="awards" className="py-8 md:py-12">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
          <motion.h2 variants={fadeUp} className="text-center text-4xl md:text-5xl font-['Playfair_Display'] font-bold text-[#d4af37] mb-6">Awards & Recognition</motion.h2>
          <motion.p variants={fadeUp} className="text-center max-w-3xl mx-auto text-lg md:text-xl text-white/80 mb-10">Industry and peer distinctions highlighting commitment to client advocacy and ethical excellence.</motion.p>
          <motion.div variants={fadeUp} className="relative overflow-hidden" aria-label="Legal industry awards">
            <div className="flex animate-scroll gap-8">
              <div className="flex gap-8 min-w-max" aria-hidden={false}>
                <Image src="/awards/Client-Champion.png" alt="Client Champion award badge" width={120} height={150} className="object-contain rounded-xl p-3 border border-[#d4af37]/25 bg-white/5" />
                <Image src="/awards/Lawyers-badge.png" alt="Lawyers top rating badge" width={120} height={150} className="object-contain rounded-xl p-3 border border-[#d4af37]/25 bg-white/5" />
                <Image src="/awards/top-100.png" alt="Top 100 trial lawyers badge" width={120} height={150} className="object-contain rounded-xl p-3 border border-[#d4af37]/25 bg-white/5" />
                <Image src="/awards/new-updated-badge-1.png" alt="Excellence in practice badge 1" width={120} height={150} className="object-contain rounded-xl p-3 border border-[#d4af37]/25 bg-white/5" />
                <Image src="/awards/new-updated-badge-2.png" alt="Excellence in practice badge 2" width={120} height={150} className="object-contain rounded-xl p-3 border border-[#d4af37]/25 bg-white/5" />
                <Image src="/awards/new-updated-badge-3.png" alt="Excellence in practice badge 3" width={120} height={150} className="object-contain rounded-xl p-3 border border-[#d4af37]/25 bg-white/5" />
              </div>
              <div className="flex gap-8 min-w-max" aria-hidden>
                <Image src="/awards/new-updated-badge-4.png" alt="" width={120} height={150} className="object-contain rounded-xl p-3 border border-[#d4af37]/15 bg-white/5" />
                <Image src="/awards/new-updated-badge-5.png" alt="" width={120} height={150} className="object-contain rounded-xl p-3 border border-[#d4af37]/15 bg-white/5" />
                <Image src="/awards/new-updated-badge-6.jpg" alt="" width={120} height={150} className="object-contain rounded-xl p-3 border border-[#d4af37]/15 bg-white/5" />
                <Image src="/awards/new-updated-badge-7.png" alt="" width={120} height={150} className="object-contain rounded-xl p-3 border border-[#d4af37]/15 bg-white/5" />
                <Image src="/awards/new-updated-badge-8.png" alt="" width={120} height={150} className="object-contain rounded-xl p-3 border border-[#d4af37]/15 bg-white/5" />
                <Image src="/awards/new-updated-badge-9.png" alt="" width={120} height={150} className="object-contain rounded-xl p-3 border border-[#d4af37]/15 bg-white/5" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Section>

      <Section id="media" className="py-6 md:py-8">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="text-center">
          <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-['Playfair_Display'] font-semibold text-white mb-4">As Seen On</motion.h2>
          <motion.p variants={fadeUp} className="text-white/75 max-w-2xl mx-auto mb-6">Media appearances discussing high‑profile Nevada legal issues.</motion.p>
          <motion.div variants={fadeUp} className="mx-auto flex w-full max-w-4xl items-center justify-center gap-8 flex-wrap" aria-label="Media outlets">
            <Image src="/shows/insideeditions.png" alt="Inside Edition appearance" width={160} height={48} className="object-contain" />
            <Image src="/shows/Face-to-Face-o.jpg" alt="Face to Face interview" width={160} height={48} className="object-contain" />
            <Image src="/shows/The-Defenders-o.jpg" alt="The Defenders TV segment" width={160} height={48} className="object-contain" />
            <Image src="/shows/Review-Journal-o.jpg" alt="Las Vegas Review-Journal coverage" width={160} height={48} className="object-contain" />
          </motion.div>
        </motion.div>
      </Section>

      <Section id="practice">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
          <motion.h2 variants={fadeUp} className="text-3xl font-bold">Practice Areas</motion.h2>
          <motion.p variants={fadeUp} className="mt-2 max-w-prose text-white/75">Focused on outcomes that matter. Explore key Nevada personal injury and criminal defense matters we handle.</motion.p>
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
        </motion.div>
      </Section>

      <Section id="results">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
          <motion.h2 variants={fadeUp} className="text-3xl font-bold">Representative Results</motion.h2>
          <motion.p variants={fadeUp} className="mt-2 max-w-prose text-white/75">Past results do not guarantee similar outcomes; every case is unique.</motion.p>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card title="$XXX,XXX Settlement" subtitle="Auto Collision">Rear‑end collision; disputed liability. Coordinated medical care, negotiated policy‑limit settlement.</Card>
            <Card title="Felony Reduced" subtitle="Drug Possession">Challenged stop and search; key evidence suppressed. Felony reduced to misdemeanor.</Card>
            <Card title="Case Dismissed" subtitle="DUI (1st)">Identified testing issues & procedural defects; dismissal prior to trial.</Card>
          </div>
        </motion.div>
      </Section>

      <Section id="about">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
          <motion.h2 variants={fadeUp} className="text-3xl font-['Playfair_Display'] font-semibold text-center mb-4">Meet Your Lawyer</motion.h2>
          <motion.div variants={fadeUp} className="mt-6 grid grid-cols-1 items-center gap-8 md:grid-cols-[240px,1fr]">
            <div className="flex justify-center items-center">
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
      </Section>

      <Section id="mission">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
          <motion.h2 variants={fadeUp} className="text-center text-sm font-semibold tracking-widest text-[#d4af37] mb-2">GETTING THE RESULTS YOU WANT</motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-center text-white/75 max-w-2xl mx-auto">Our practice rests on these principles:</motion.p>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3 max-w-3xl mx-auto">
            {['Integrity','Compassion','Service'].map(p => (
              <motion.div key={p} variants={fadeUp} className="rounded-xl bg-white/3 p-6 text-center shadow-lg"><h5 className="text-lg font-semibold text-white">{p}</h5></motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      <Section id="contact">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
          <motion.h2 variants={fadeUp} className="text-3xl font-['Playfair_Display'] font-semibold text-center">Speak With an Experienced Lawyer Today</motion.h2>
          <motion.p variants={fadeUp} className="mt-3 text-center max-w-2xl mx-auto text-white/75">Learn how we help Nevada injury victims and defendants. Call <a href="tel:17027788883" className="underline" style={{ textDecorationColor: BRAND.accent }}>(702) 778‑8883</a>.</motion.p>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            <motion.div variants={fadeUp} className="md:col-span-2">
              <motion.form variants={fadeUp} onSubmit={e => { e.preventDefault(); alert('Thanks! We\'ll reach out shortly.'); }} className="rounded-2xl border border-white/10 bg-white/5 p-6" aria-label="Free consultation form">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <label className="text-sm font-semibold">First name <span className="text-[#d4af37]">*</span>
                    <input name="firstName" autoComplete="given-name" aria-required required className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm" placeholder="Jane" />
                  </label>
                  <label className="text-sm font-semibold">Last name <span className="text-[#d4af37]">*</span>
                    <input name="lastName" autoComplete="family-name" aria-required required className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm" placeholder="Doe" />
                  </label>
                  <label className="text-sm font-semibold md:col-span-2">Email <span className="text-[#d4af37]">*</span>
                    <input type="email" name="email" autoComplete="email" aria-required required className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm" placeholder="you@example.com" />
                  </label>
                  <label className="text-sm font-semibold">Phone
                    <input name="phone" autoComplete="tel" className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm" placeholder="(702) 555‑0123" />
                  </label>
                  <label className="text-sm font-semibold md:col-span-2">Brief description <span className="text-[#d4af37]">*</span>
                    <textarea name="message" aria-required required rows={5} className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm" placeholder="Briefly describe your matter" />
                  </label>
                  <div className="flex items-start gap-2 md:col-span-2">
                    <input id="consent" name="consent" type="checkbox" className="mt-1" required />
                    <label htmlFor="consent" className="text-sm font-semibold">I have read the disclaimer. <span className="text-white/60">(Submitting does not create an attorney‑client relationship)</span></label>
                  </div>
                  <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden />
                  <button type="submit" className="mt-2 w-full rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-3 text-sm font-semibold text-[#0e0e0e]">Request a free consultation</button>
                </div>
              </motion.form>
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/80 flex flex-col gap-4">
              <h3 className="text-base font-semibold">Contact Information</h3>
              <address className="not-italic text-white/80">
                The Law Offices of Saggese & Associates<br />732 S. 6th Street Suite 201<br />Las Vegas, NV 89101
              </address>
              <p className="text-white/80">Phone: <a href="tel:17027788883" className="underline" style={{ textDecorationColor: BRAND.accent }}>(702) 778‑8883</a></p>
              <p className="text-white/80">Fax: 702-778-8884</p>
              <div className="mt-2">
                <h4 className="text-sm font-semibold text-white/75">Connect</h4>
    <ul className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-3" aria-label="Social links">
                  {['facebook','twitter','linkedin','avvo','email'].map(s => (
                    <li key={s} className="list-none">
                      <a
                        href="#"
                        aria-label={`Visit our ${s} page`}
      className="rounded-full bg-white/6 px-3 py-1.5 text-xs font-medium tracking-wide capitalize hover:bg-white/10 transition min-w-[70px] text-center"
                      >
                        {s}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 text-sm text-white/60">Office hours: Mon–Fri 8:00–5:00 • Sat–Sun Closed</div>
              <div className="mt-4 relative w-full h-40 md:h-48 rounded-xl overflow-hidden border border-white/10" aria-label="Office location on map">
                {!mapLoaded && (
                  <div className="absolute inset-0 animate-pulse bg-[linear-gradient(110deg,#2a2a2a,45%,#3a3a3a,55%,#2a2a2a)] bg-[length:200%_100%]" aria-hidden />
                )}
                <iframe
                  title="Office location map"
                  aria-label="Google map showing office location"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  onLoad={() => setMapLoaded(true)}
                  className={`w-full h-full transition-opacity duration-500 ${mapLoaded ? 'opacity-100' : 'opacity-0'}`}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3212.7606809079157!2d-115.1462139236927!3d36.1608364724385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c37be7b8c0c7%3A0x3dc32c9f3e909fd4!2s732%20S%206th%20St%20Suite%20201%2C%20Las%20Vegas%2C%20NV%2089101!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                  allowFullScreen
                />
              </div>
              <div className="mt-2 text-[10px] tracking-wide uppercase text-white/30">Map data © {new Date().getFullYear()} Google</div>
            </motion.div>
          </div>
        </motion.div>
      </Section>

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
  );
}
