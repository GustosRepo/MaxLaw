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

  React.useEffect(()=>{
    try{
      const sp=new URLSearchParams(window.location.search);
      if(sp.get('diag')) setDiag(true);
      if(sp.get('lite')) {
        document.documentElement.classList.add('lite');
        document.body.classList.add('lite');
      }
    }catch{}
  },[]);

  React.useEffect(()=>{ if(!diag) return; push('global-diag-start');
    const onScroll=()=>{ if(window.scrollY%250<2) push('scroll:'+window.scrollY); };
    const onError=(e:ErrorEvent)=> push('error:'+ (e.message||'unknown'));
    const onRej=(e:PromiseRejectionEvent)=> push('rejection:'+(e.reason?.message||'unknown'));
    window.addEventListener('scroll',onScroll,{passive:true});
    window.addEventListener('error',onError);
    window.addEventListener('unhandledrejection',onRej);
    let memInterval: any;
    try { const perf:any = performance; if(perf && perf.memory){ memInterval=setInterval(()=>{ const m=perf.memory; push(`mem:${Math.round(m.usedJSHeapSize/1024/1024)}MB/${Math.round(m.totalJSHeapSize/1024/1024)}MB`); },5000);} } catch{}
    return ()=>{window.removeEventListener('scroll',onScroll);window.removeEventListener('error',onError);window.removeEventListener('unhandledrejection',onRej); if(memInterval) clearInterval(memInterval); };
  },[diag]);

  if(!diag) return null;
  return (
    <div className="fixed bottom-2 left-2 z-[9999] w-[260px] max-h-[50vh] overflow-auto rounded-lg border border-white/20 bg-black/80 p-2 text-[10px] font-mono text-white/70">
      <div className="mb-1 flex justify-between"><span className="font-semibold text-white">GLOBAL</span><button onClick={()=>setLogs([])} className="underline">clear</button></div>
      {logs.slice().reverse().map(l=> <div key={l}>{l}</div>)}
    </div>
  );
}
