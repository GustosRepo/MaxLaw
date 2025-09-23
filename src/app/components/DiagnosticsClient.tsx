"use client";
import React from 'react';

/**
 * Global diagnostics + lite-mode toggle.
 * Enable with ?diag=1 for overlay logs, ?lite=1 for reduced visual effects (mobile crash triage).
 */
export default function DiagnosticsClient(){
  const [diag,setDiag]=React.useState(false);
  const [logs,setLogs]=React.useState<string[]>([]);
  const push=(m:string)=> setLogs(l=>{const entry=`${Date.now()%100000}:${m}`; return [...l.slice(-80),entry];});
  const [position,setPosition]=React.useState<'bl'|'br'|'tl'|'tr'>('bl');

  React.useEffect(()=>{
    try{
      const sp=new URLSearchParams(window.location.search);
      // Accept either ?diag or ?diag=1 and persist to localStorage so internal client navigation keeps it.
      if(sp.has('diag')) {
        setDiag(true);
        try { localStorage.setItem('diag','1'); } catch {}
      } else {
        try { if(localStorage.getItem('diag')==='1') setDiag(true); } catch {}
      }
      // Lite mode toggle
      if(sp.get('lite')) {
        document.documentElement.classList.add('lite');
        document.body.classList.add('lite');
      }
  const pos = sp.get('diagpos');
  if(pos === 'bl' || pos === 'br' || pos === 'tl' || pos === 'tr') setPosition(pos);
    }catch{}
  },[]);

  React.useEffect(()=>{ if(!diag) return; push('global-diag-start');
    const onScroll=()=>{ if(window.scrollY%250<2) push('scroll:'+window.scrollY); };
    const onError=(e:ErrorEvent)=> push('error:'+ (e.message||'unknown'));
    const onRej=(e:PromiseRejectionEvent)=> push('rejection:'+(e.reason && (e.reason as { message?: string }).message || 'unknown'));
    window.addEventListener('scroll',onScroll,{passive:true});
    window.addEventListener('error',onError);
    window.addEventListener('unhandledrejection',onRej);
    type PerfWithMemory = Performance & { memory?: { usedJSHeapSize:number; totalJSHeapSize:number; jsHeapSizeLimit:number } };
    let memInterval: ReturnType<typeof setInterval> | undefined;
    try {
      const perf: PerfWithMemory = performance as PerfWithMemory;
      if(perf && perf.memory){
        memInterval = setInterval(()=>{
          const m = perf.memory!;
          push(`mem:${Math.round(m.usedJSHeapSize/1048576)}MB/${Math.round(m.totalJSHeapSize/1048576)}MB`);
        },5000);
      }
    } catch {}
    return ()=>{window.removeEventListener('scroll',onScroll);window.removeEventListener('error',onError);window.removeEventListener('unhandledrejection',onRej); if(memInterval) clearInterval(memInterval); };
  },[diag]);

  React.useEffect(()=>{
    const handler=(e:KeyboardEvent)=>{
      if(e.shiftKey && e.altKey && e.key.toLowerCase()==='d'){
        setDiag(d=>{const n=!d; try { if(n) localStorage.setItem('diag','1'); else localStorage.removeItem('diag'); } catch {}; return n;});
      }
    };
    window.addEventListener('keydown',handler);
    return ()=> window.removeEventListener('keydown',handler);
  },[]);

  if(!diag) return null; // Nothing rendered if diagnostics disabled
  const basePosClasses = {
    bl: 'bottom-2 left-2',
    br: 'bottom-2 right-2',
    tl: 'top-2 left-2',
    tr: 'top-2 right-2'
  }[position];
  return (
    <div className={`fixed ${basePosClasses} z-[9999] w-[260px] max-h-[50vh] overflow-auto rounded-lg border border-white/20 bg-black/85 p-2 text-[10px] font-mono text-white/70`}> 
      <div className="mb-1 flex justify-between"><span className="font-semibold text-white">GLOBAL</span><button onClick={()=>setLogs([])} className="underline">clear</button></div>
      {logs.slice().reverse().map(l=> <div key={l}>{l}</div>)}
    </div>
  );
}
