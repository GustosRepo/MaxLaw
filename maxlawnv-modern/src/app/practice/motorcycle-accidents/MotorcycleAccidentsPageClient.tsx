"use client";

import React from 'react'
import Link from 'next/link'
import Breadcrumbs from '../../components/Breadcrumbs'
import StructuredData from '../../components/StructuredData'

export default function MotorcycleAccidentsPageClient() {
  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Practice Areas', href: '/practice' },
    { name: 'Motorcycle Accidents', href: '/practice/motorcycle-accidents' }
  ];

  const motorcycleServiceData = {
    name: "Motorcycle Accident Legal Services",
    description: "Specialized legal representation for motorcycle accident victims in Las Vegas, Nevada.",
    url: "https://www.maxlawnv.com/practice/motorcycle-accidents",
    provider: {
      "@type": "LegalService",
      "name": "The Law Offices of Saggese & Associates"
    },
    areaServed: "Las Vegas, Nevada"
  };

  return (
    <>
      <StructuredData type="LegalService" data={motorcycleServiceData} />
      
      <style jsx>{`
        /* standardized practice page styles */
        @keyframes underlineIn { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        .accent-underline { display:block; height:6px; background:linear-gradient(90deg,#d4af37,#c5a467); transform-origin:left; animation:underlineIn .6s ease forwards; }
        .stat-number { color:#d4af37; font-weight:700; font-size:1.25rem; }
        .card-hover { transition:transform .26s ease, box-shadow .26s ease; }
        .card-hover:hover { transform:translateY(-6px); box-shadow:0 22px 60px rgba(0,0,0,0.6); }
        .cta-glow { transition:box-shadow .28s, transform .22s; }
        .cta-glow:hover { box-shadow: 0 18px 48px rgba(212,175,55,0.18); transform: translateY(-3px) scale(1.02); }
      `}</style>

      <Breadcrumbs items={breadcrumbItems} />

      {/* Content only — PracticeLayout provides outer main and container */}
      <header className="mb-6">
        <div className="rounded-3xl p-6 md:p-8 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg">
          <h1 className="text-2xl md:text-3xl font-['Playfair_Display'] font-bold text-[#bfa76a]">Motorcycle Accidents</h1>
          <div className="mt-3 w-32"><span className="accent-underline" /></div>
          <p className="mt-3 text-white/80">Dedicated representation for motorcycle accident victims throughout Nevada.</p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <main className="md:col-span-2 space-y-6">
          <article className="rounded-2xl p-6 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Fighting for Motorcyclists' Rights</h2>
            <p className="text-white/80 mb-4">
              Motorcycle accidents often result in more severe injuries than car accidents due to the lack of protection riders have. Unfortunately, motorcyclists also face unfair bias and stereotyping that can affect how their cases are handled. At The Law Offices of Saggese & Associates, we understand these unique challenges and fight aggressively for motorcyclists' rights.
            </p>
            
            <h3 className="text-lg font-semibold mb-3">Nevada Motorcycle Laws We Navigate</h3>
            <ul className="list-disc list-inside text-white/80 space-y-2 mb-4">
              <li>Helmet requirements for riders under 21</li>
              <li>Lane splitting regulations</li>
              <li>Right-of-way laws</li>
              <li>Insurance requirements</li>
              <li>Licensing and endorsement rules</li>
              <li>Equipment and modification standards</li>
            </ul>

            <h3 className="text-lg font-semibold mb-3">Common Motorcycle Accident Causes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <ul className="list-disc list-inside text-white/80 space-y-1">
                <li>Left-turn accidents</li>
                <li>Lane-changing collisions</li>
                <li>Rear-end crashes</li>
                <li>Road hazards</li>
              </ul>
              <ul className="list-disc list-inside text-white/80 space-y-1">
                <li>Speeding drivers</li>
                <li>Distracted driving</li>
                <li>Impaired driving</li>
                <li>Poor road conditions</li>
              </ul>
            </div>

            <h3 className="text-lg font-semibold mb-3">Serious Injuries We Handle</h3>
            <p className="text-white/80 mb-4">
              Motorcycle accidents frequently result in catastrophic injuries including traumatic brain injuries, spinal cord damage, road rash, broken bones, and internal injuries. We work with medical experts to fully document your injuries and ensure you receive compensation for current and future medical needs.
            </p>

            <div className="bg-gradient-to-r from-[#d4af37]/10 to-[#c5a467]/10 border border-[#d4af37]/20 rounded-lg p-4">
              <h4 className="font-semibold text-[#d4af37] mb-2">Don't Let Insurance Companies Minimize Your Claim</h4>
              <p className="text-white/80 text-sm">
                Insurance companies often try to blame motorcyclists for accidents. We investigate thoroughly and fight these unfair tactics to get you the compensation you deserve.
              </p>
            </div>
          </article>
        </main>

        <aside className="space-y-6">
          <div className="rounded-2xl p-6 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-[#bfa76a]">Get Help Today</h3>
            <div className="space-y-3">
              <Link href="/contact" className="block w-full text-center rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-4 py-3 font-semibold text-[#0e0e0e] cta-glow">
                Free Consultation
              </Link>
              <a href="tel:17027788883" className="block w-full text-center rounded-2xl border border-[#d4af37] px-4 py-3 font-semibold text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0e0e0e] transition-colors">
                Call (702) 778‑8883
              </a>
            </div>
          </div>

          <div className="rounded-2xl p-6 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-[#bfa76a]">Related Practice Areas</h3>
            <ul className="space-y-2">
              <li><Link href="/practice/car-accidents" className="text-white/80 hover:text-[#d4af37] underline">Car Accidents</Link></li>
              <li><Link href="/practice/truck-accidents" className="text-white/80 hover:text-[#d4af37] underline">Truck Accidents</Link></li>
              <li><Link href="/practice/crosswalk-and-pedestrian-accidents" className="text-white/80 hover:text-[#d4af37] underline">Pedestrian Accidents</Link></li>
              <li><Link href="/practice/product-liability" className="text-white/80 hover:text-[#d4af37] underline">Product Liability</Link></li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}
