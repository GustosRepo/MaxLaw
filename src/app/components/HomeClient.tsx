"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import HeroMediaRotator from './HeroMediaRotator';
import GoogleReviews from './GoogleReviews';
import AwardsSection from './AwardsSection';
import MediaSection from './MediaSection';
import ResultsSection from './ResultsSection';
import MissionSection from './MissionSection';
import { FIRM_PHONE_E164, FIRM_PHONE_DISPLAY, FIRM_NAME, FIRM_ADDRESS_LINE1, FIRM_ADDRESS_LINE2 } from '../../lib/constants';

const ContactSectionClient = dynamic(() => import('./ContactSectionClient'), { ssr: false, loading: () => <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center text-sm text-white/60">Loading…</div> });

const slugify = (s: string) => s.toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
const PERSONAL_INJURY_TOPICS = ['Car Accidents','Brain And Spine Injury','Wrongful Death'];
const CRIMINAL_DEFENSE_TOPICS = ['DUI','Domestic Violence','Record Sealing'];

const Section: React.FC<React.PropsWithChildren<{ id?: string; className?: string }>> = ({ id, className, children }) => (
  <section id={id} data-mobile-chunk className={`mx-auto w-full max-w-7xl px-4 md:px-6 ${className||''}`}>
    {children}
  </section>
);
const Card: React.FC<React.PropsWithChildren<{ title: string; subtitle?: string; titleClassName?: string; bodyClassName?: string }>> = ({ title, subtitle, titleClassName, bodyClassName, children }) => (
  <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 shadow-md">
    <h3 className={`text-lg font-semibold tracking-tight ${titleClassName||''}`}>{title}</h3>
    {subtitle && <p className="mt-1 text-sm text-white/60">{subtitle}</p>}
    <div className={`mt-4 text-sm leading-relaxed text-white/80 ${bodyClassName||''}`}>{children}</div>
  </div>
);
const TopicsAccordion: React.FC<{ title: string; topics: string[]; basePath?: string }> = ({ title, topics, basePath='/practice' }) => { const [open,setOpen]=React.useState(false); return (<div className="mt-4"><button onClick={()=>setOpen(o=>!o)} className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-sm font-semibold"><span>{open?`Hide ${title}`:`See ${title}`}</span><span className={`transition-transform ${open?'rotate-180':''}`}>▾</span></button>{open && (<ul className="mt-3 grid grid-cols-1 gap-2">{topics.map(t=> <li key={t}><Link href={`${basePath}/${slugify(t)}`} className="block rounded-lg px-3 py-2 text-sm hover:bg-white/5">{t}</Link></li>)}</ul>)}</div>); };

type SkipConfig = {
  results: boolean;
  awards: boolean;
  media: boolean;
  mission: boolean;
  reviews: boolean;
  about: boolean;
  contact: boolean;
};

export default function HomeClient(){
  const [safe,setSafe]=React.useState(false);
  const [diag,setDiag]=React.useState(false);
  const [defer,setDefer]=React.useState(true);
  const sentinelRef=React.useRef<HTMLDivElement|null>(null);
  const [diagLogs,setDiagLogs]=React.useState<string[]>([]);
  const [skipSections,setSkipSections]=React.useState<SkipConfig>({results:false,awards:false,media:false,mission:false,reviews:false,about:false,contact:false});
  const [visibleSections,setVisibleSections]=React.useState(0);
  const pushLog=React.useCallback((msg:string)=>{ if(!diag) return; setDiagLogs(l=>{ const entry=`${Date.now()%100000}:${msg}`; return [...l.slice(-40), entry];});},[diag]);
  const reviewSummary={rating:4.9,total:125};
  React.useEffect(()=>{
    try{
      const sp=new URLSearchParams(window.location.search);
      if(sp.has('safe')) setSafe(true);
      if(sp.has('diag')) { setDiag(true); try { localStorage.setItem('diag','1'); } catch {} }
      else { try { if(localStorage.getItem('diag')==='1') setDiag(true); } catch {} }
      const nextSkip={
        results: sp.has('skipresults')||sp.has('skipResults'),
        awards: sp.has('skipawards')||sp.has('skipAwards'),
        media: sp.has('skipmedia')||sp.has('skipMedia'),
        mission: sp.has('skipmission')||sp.has('skipMission'),
        reviews: sp.has('skipreviews')||sp.has('skipReviews'),
        about: sp.has('skipabout')||sp.has('skipAbout'),
        contact: sp.has('skipcontact')||sp.has('skipContact'),
      };
      setSkipSections(nextSkip);
      Object.entries(nextSkip).forEach(([key,val])=>{ if(val) pushLog(`flag:${key}`); });
    }catch{}
  },[pushLog]);
  React.useEffect(()=>{if(typeof window==='undefined')return; if(window.innerWidth>=768){setDefer(false);return;} let done=false; const show=()=>{if(!done){done=true;setDefer(false);pushLog('below-fold-mounted');}}; const to=setTimeout(()=>{pushLog('timeout->mount');show();},3000); if(sentinelRef.current&&'IntersectionObserver'in window){const obs=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){pushLog('sentinel-intersect');show();obs.disconnect();}})},{rootMargin:'140px 0px 0px 0px'}); obs.observe(sentinelRef.current);} return()=>clearTimeout(to);},[pushLog]);
  // Diagnostic instrumentation
  React.useEffect(()=>{ if(!diag) return; pushLog('diag-start');
    const onScroll=()=>{ if(!diag) return; if(window.scrollY%200<2){ pushLog(`scroll:${window.scrollY}`);} };
    const onError=(e:ErrorEvent)=>{ pushLog('error:'+ (e.message||'unknown')); };
    const onRejection=(e:PromiseRejectionEvent)=>{ pushLog('promise-rejection:'+ (e.reason && (e.reason as { message?: string }).message || 'unknown')); };
    window.addEventListener('scroll',onScroll,{passive:true});
    window.addEventListener('error',onError);
    window.addEventListener('unhandledrejection',onRejection);
    // Attempt memory sampling (Chromium only; Safari iOS lacks performance.memory)
    type PerfWithMemory = Performance & { memory?: { usedJSHeapSize:number; totalJSHeapSize:number; jsHeapSizeLimit:number } };
    let memInterval: ReturnType<typeof setInterval> | undefined;
    try {
      const perf: PerfWithMemory = performance as PerfWithMemory;
      if(perf.memory){
        memInterval = setInterval(()=>{
          const m = perf.memory!;
            pushLog(`mem:${Math.round(m.usedJSHeapSize/1048576)}MB/${Math.round(m.totalJSHeapSize/1048576)}MB`);
        },4000);
      }
    } catch {}
    return ()=>{
      window.removeEventListener('scroll',onScroll);
      window.removeEventListener('error',onError);
      window.removeEventListener('unhandledrejection',onRejection);
      if(memInterval) clearInterval(memInterval);
    };
  },[diag,pushLog]);

  const sectionQueue = React.useMemo(() => {
    const list: Array<{ key: string; node: React.ReactNode }> = [];
    if (!skipSections.results) list.push({ key: 'results', node: <ResultsSection /> });
    if (!skipSections.awards) list.push({ key: 'awards', node: <AwardsSection /> });
    if (!skipSections.media) list.push({ key: 'media', node: <MediaSection /> });
    if (!skipSections.mission) {
      list.push({
        key: 'mission',
        node: (
          <Section id="mission" className="py-12">
            <div className="max-w-5xl text-center mx-auto">
              <Card title="Our Mission" subtitle="Client‑first representation">
                <MissionSection />
              </Card>
            </div>
          </Section>
        ),
      });
    }
    if (!skipSections.reviews) {
      list.push({
        key: 'reviews',
        node: (
          <Section id="reviews" className="py-12">
            <div className="rounded-3xl border border-white/10 bg-white/[0.05] md:backdrop-blur-sm p-8 md:p-10 max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-6">Reviews</h2>
              <GoogleReviews />
            </div>
          </Section>
        ),
      });
    }
    if (!skipSections.about) {
      list.push({
        key: 'about',
        node: (
          <Section id="about" className="py-12">
            <div className="max-w-5xl mx-auto">
              <Card title="Meet Your Lawyer" subtitle="" titleClassName="text-2xl md:text-3xl text-center" bodyClassName="text-center">
                <div className="flex flex-col items-center">
                  <div className="relative w-72 h-96 md:w-80 md:h-[28rem]">
                    <Image src="/meet-your.jpg" alt="Attorney Marc A. Saggese" fill className="object-cover rounded-2xl border border-white/10 shadow-xl" />
                  </div>
                  <h4 className="mt-6 text-xl font-semibold">Marc A. Saggese</h4>
                  <p className="mt-3 max-w-2xl mx-auto text-white/75 leading-relaxed">Las Vegas attorney focusing on <strong className="text-[#d4af37]">personal injury</strong> and <strong className="text-[#d4af37]">criminal defense</strong>, blending decades of courtroom experience with client‑first strategy.</p>
                  <ul className="mt-6 flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm">
                    <li className="flex items-center"><span className="inline-block h-1.5 w-1.5 rounded-full bg-[#d4af37] mr-2"></span>Free consultations</li>
                    <li className="flex items-center"><span className="inline-block h-1.5 w-1.5 rounded-full bg-[#d4af37] mr-2"></span>Same-day when available</li>
                    <li className="flex items-center"><span className="inline-block h-1.5 w-1.5 rounded-full bg-[#d4af37] mr-2"></span>Evening/weekend by appt.</li>
                    <li className="flex items-center"><span className="inline-block h-1.5 w-1.5 rounded-full bg-[#d4af37] mr-2"></span>Se habla Español</li>
                  </ul>
                </div>
              </Card>
            </div>
          </Section>
        ),
      });
    }
    if (!skipSections.contact) {
      list.push({
        key: 'contact',
        node: (
          <Section id="contact" className="py-12">
            <div className="rounded-3xl border border-white/10 bg-white/[0.05] md:backdrop-blur-sm p-8 md:p-10 max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-6">Speak With an Experienced Lawyer Today</h2>
              <p className="text-center max-w-2xl mx-auto text-white/70">Call <a href={`tel:${FIRM_PHONE_E164}`} className="underline" style={{textDecorationColor:'#d4af37'}}>{FIRM_PHONE_DISPLAY}</a> or send a confidential message below.</p>
              <div className="mt-8"><ContactSectionClient /></div>
              <p className="mt-6 text-center text-xs text-white/30">Office: {FIRM_ADDRESS_LINE1}, {FIRM_ADDRESS_LINE2}</p>
            </div>
          </Section>
        ),
      });
    }
    return list;
  }, [skipSections]);

  React.useEffect(() => {
    if (defer) {
      setVisibleSections(0);
      return;
    }
    if (!sectionQueue.length) {
      setVisibleSections(0);
      return;
    }
    let cancelled = false;
    let timeout: number | undefined;
    const reveal = (index: number) => {
      if (cancelled || index >= sectionQueue.length) return;
      const key = sectionQueue[index]?.key;
      if (key) pushLog(`mount:${key}`);
      setVisibleSections(prev => (prev > index ? prev : index + 1));
      if (index + 1 < sectionQueue.length) {
        timeout = window.setTimeout(() => reveal(index + 1), 260);
      }
    };
    const raf = window.requestAnimationFrame(() => reveal(0));
    return () => {
      cancelled = true;
      if (timeout) window.clearTimeout(timeout);
      window.cancelAnimationFrame(raf);
    };
  }, [defer, sectionQueue, pushLog]);
  if (safe) {
    return (
      <main className="min-h-screen bg-[#080808] text-white flex items-center justify-center px-6">
        <div className="w-full max-w-md space-y-6 text-center">
          <h1 className="font-[var(--font-playfair)] text-3xl font-semibold tracking-tight text-white/95">
            {FIRM_NAME}
          </h1>
          <p className="text-sm leading-relaxed text-white/70">
            Mobile lite mode is active to keep things stable. Call or request a callback and we will reach out right away.
          </p>
          <div className="space-y-3">
            <a
              href={`tel:${FIRM_PHONE_E164}`}
              className="block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-5 py-3 text-sm font-semibold text-[#0e0e0e]"
            >
              Call {FIRM_PHONE_DISPLAY}
            </a>
            <Link
              href="/contact"
              className="block rounded-2xl border border-white/15 px-5 py-3 text-sm text-white/85"
            >
              Send a secure message
            </Link>
          </div>
          <p className="text-[11px] text-white/40">Lite mode active. For the full experience visit on desktop.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0e0e0e] to-[#161616] text-white font-[var(--font-inter)]">
      <Section id="home" className="relative overflow-hidden min-h-[90dvh] flex items-center py-12 sm:py-16">
        <div className="absolute inset-0"><HeroMediaRotator/><div className="absolute inset-0 bg-black/45"/></div>
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-8 md:gap-14">
            {/* Figure (desktop only) */}
            <div className="hidden md:block relative w-56 lg:w-64 xl:w-72 2xl:w-80 aspect-[365/815] self-end -mb-12 md:-mb-16">
              <Image
                src="/attorney-figure.png"
                alt="Lead attorney"
                fill
                sizes="(min-width:1280px) 20vw, (min-width:1024px) 25vw, 0px" /* 0 on mobile since hidden */
                className="object-contain object-bottom drop-shadow-[0_10px_18px_rgba(0,0,0,0.55)] select-none pointer-events-none"
                priority={false}
              />
            </div>
            {/* Hero copy */}
            <div className="text-center md:text-left flex-1">
              <h1 className="font-[var(--font-playfair)] text-3xl sm:text-4xl md:text-6xl font-extrabold leading-[0.95] tracking-tight">
                {FIRM_NAME}
                <span className="block text-[0.55em] mt-4 text-[#d4af37] font-serif font-normal">Personal Injury & Criminal Defense</span>
              </h1>
              <p className="mt-6 text-base sm:text-lg md:text-xl text-white/80 max-w-2xl md:max-w-xl mx-auto md:mx-0">Award‑winning representation. Free consultation. No fee unless we win injury cases.</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 md:justify-start justify-center">
                <a href={`tel:${FIRM_PHONE_E164}`} className="rounded-2xl bg-[#d4af37] px-7 py-4 text-base sm:text-lg font-semibold text-[#0e0e0e]">Call {FIRM_PHONE_DISPLAY}</a>
                <Link href="/contact" className="rounded-2xl border border-white/20 bg-white/5 px-7 py-4 text-base sm:text-lg text-white/90">Request Consultation</Link>
              </div>
              <ul className="mt-8 flex flex-wrap md:justify-start justify-center gap-4 text-xs text-white/60"><li>20+ Years Experience</li><li>Millions Recovered*</li><li>{reviewSummary.rating.toFixed(1)}★ ({reviewSummary.total}+ reviews)</li><li>24/7 Message Us</li></ul>
              <p className="mt-2 text-[10px] text-white/30">*Past results don’t guarantee future outcomes.</p>
            </div>
          </div>
        </div>
      </Section>
      <div ref={sentinelRef} className="h-1" aria-hidden />

      {defer && (
        <div className="mx-auto w-full max-w-7xl px-4 md:px-6 py-10 space-y-8" aria-label="Loading below-fold content">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center text-sm text-white/60">Loading additional content…</div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3" aria-hidden>{Array.from({length:6}).map((_,i)=><div key={i} className="aspect-[5/6] animate-pulse rounded-xl border border-white/10 bg-white/[0.07]"/> )}</div>
        </div>
      )}

      {!defer && (
        <>
          <Section id="practice" className="py-12">
            <div className="rounded-3xl border border-white/10 bg-white/[0.05] md:backdrop-blur-sm p-8 md:p-10 max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Practice Areas</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <Card title="Seriously Hurt?" subtitle="Personal Injury">We help injured Nevadans pursue medical care and compensation.<TopicsAccordion title="Injury Topics" topics={PERSONAL_INJURY_TOPICS} /></Card>
                <Card title="Arrested?" subtitle="Criminal Defense">Strategic, trial‑tested defense from arraignment through resolution.<TopicsAccordion title="Defense Topics" topics={CRIMINAL_DEFENSE_TOPICS} basePath="/criminal-defense" /></Card>
              </div>
            </div>
          </Section>

          {sectionQueue.slice(0, visibleSections).map(item => (
            <React.Fragment key={item.key}>{item.node}</React.Fragment>
          ))}
        </>
      )}
      {diag && (
        <div className="fixed bottom-2 right-2 z-[9999] max-h-[45vh] w-[260px] overflow-auto rounded-lg border border-white/20 bg-black/80 p-2 text-[10px] leading-snug font-mono text-white/70">
          <div className="mb-1 flex justify-between"><span className="font-semibold text-white/90">DIAG</span><button onClick={()=>setDiagLogs([])} className="text-[9px] underline">clear</button></div>
          {diagLogs.slice().reverse().map(l=> <div key={l}>{l}</div>)}
        </div>
      )}
    </main>
  );
}
