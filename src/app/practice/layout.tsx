"use client"

import React from 'react'
import PracticeNav from '../../components/PracticeNav'
// Removed unused usePathname import.

export default function PracticeLayout({ children }: { children: React.ReactNode }) {

  // Navigation link data lives in PracticeNav; removed unused arrays.

  // navigation data is handled by the shared PracticeNav component

  return (
    <>
      <style>{`
        /* Global practice area styles + micro-interactions */
        @keyframes underlineIn { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        .accent-underline { display:block; height:6px; background:linear-gradient(90deg,#d4af37,#c5a467); transform-origin:left; animation:underlineIn .6s ease forwards; }

        .card-hover { transition:transform .26s ease, box-shadow .26s ease; }
        .card-hover:hover { transform:translateY(-6px); box-shadow:0 22px 60px rgba(0,0,0,0.6); }

        .cta-glow { transition:box-shadow .28s, transform .22s; }
        .cta-glow:hover { box-shadow: 0 18px 48px rgba(212,175,55,0.18); transform: translateY(-3px) scale(1.02); }

        /* Sidebar */
        .practice-aside { position:sticky; top:96px; }
        .nav-link { display:flex; align-items:center; gap:0.75rem; padding:.6rem .8rem; border-radius:.6rem; color:rgba(255,255,255,.9); text-decoration:none; }
        .nav-link:hover { background:linear-gradient(90deg, rgba(212,175,55,0.03), rgba(255,255,255,0.02)); transform:translateX(4px); }
        .nav-active { background:linear-gradient(90deg, rgba(212,175,55,0.07), rgba(255,255,255,0.02)); border-left:3px solid #d4af37; padding-left:0.6rem; }

        /* Particle-ish subtle background */
        .practice-bg { position:absolute; inset:0; pointer-events:none; background-image: radial-gradient(circle at 20% 20%, rgba(212,175,55,0.03) 0, transparent 8%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.01) 0, transparent 6%); mix-blend-mode:overlay; opacity:0.9; }

        /* Gold shimmer used on card hover (reusable) */
        .gold-sheen { position:absolute; top:-30%; left:-40%; width:120%; height:120%; transform:rotate(25deg) translateX(-20%); background: linear-gradient(90deg, rgba(212,175,55,0.08), rgba(255,255,255,0.02), rgba(212,175,55,0.06)); filter:blur(32px); opacity:0; transition:opacity .9s ease, transform .9s ease; pointer-events:none; }
        .card-hover:hover .gold-sheen { opacity:1; transform:rotate(25deg) translateX(0%); }

        /* responsive tweaks */
        @media (min-width:768px) {
          .practice-grid { grid-template-columns: 320px 1fr; }
        }
      `}</style>

      <main className="min-h-screen bg-gradient-to-br from-[#0e0e0e] to-[#1a1a1a] text-white font-['Inter'] py-12 relative overflow-hidden">
        <div className="practice-bg" aria-hidden />
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="mb-6"><PracticeNav /></div>
          <div className="space-y-10 max-w-5xl mx-auto">{children}</div>
        </div>
      </main>
    </>
  )
}
