"use client";

import React from 'react'
import Link from 'next/link'
import Breadcrumbs from '../../components/Breadcrumbs'
import StructuredData from '../../components/StructuredData'

export default function CarAccidentsPageClient() {
  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Practice Areas', href: '/practice' },
    { name: 'Car Accidents', href: '/practice/car-accidents' }
  ];

  const carAccidentServiceData = {
    name: "Car Accident Legal Services",
    description: "Professional legal representation for car accident victims in Las Vegas, Nevada.",
    url: "https://www.maxlawnv.com/practice/car-accidents",
    provider: {
      "@type": "LegalService",
      "name": "The Law Offices of Saggese & Associates"
    },
    areaServed: "Las Vegas, Nevada"
  };

  return (
    <>
      <StructuredData type="LegalService" data={carAccidentServiceData} />
      
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
          <h1 className="text-2xl md:text-3xl font-['Playfair_Display'] font-bold text-[#bfa76a]">Car Accidents</h1>
          <div className="mt-3 w-32"><span className="accent-underline" /></div>
          <p className="mt-3 text-white/80">Experienced representation for motor vehicle accidents throughout Las Vegas and Clark County.</p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <main className="md:col-span-2 space-y-6">
          <article className="rounded-2xl p-6 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Motor Vehicle Accident Representation</h2>
            <p className="text-white/80 mb-4">
              When you're injured in a car accident, you need an attorney who understands the complex factors that contribute to crashes and the serious injuries that result. At The Law Offices of Saggese & Associates, we have extensive experience handling all types of motor vehicle accidents throughout Las Vegas and Nevada.
            </p>
            
            <h3 className="text-lg font-semibold mb-3">Common Types of Car Accidents We Handle</h3>
            <ul className="list-disc list-inside text-white/80 space-y-2 mb-4">
              <li>Rear-end collisions</li>
              <li>Head-on crashes</li>
              <li>T-bone accidents</li>
              <li>Multi-vehicle accidents</li>
              <li>Hit and run accidents</li>
              <li>Drunk driving accidents</li>
              <li>Distracted driving crashes</li>
              <li>Rollover accidents</li>
            </ul>

            <h3 className="text-lg font-semibold mb-3">Nevada Car Accident Statistics</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-white/5 p-4 rounded-lg">
                <div className="stat-number">15,000+</div>
                <div className="text-sm text-white/70">Annual crashes in Clark County</div>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <div className="stat-number">200+</div>
                <div className="text-sm text-white/70">Traffic fatalities per year</div>
              </div>
            </div>

            <h3 className="text-lg font-semibold mb-3">Our Approach</h3>
            <p className="text-white/80 mb-4">
              We thoroughly investigate every accident, working with accident reconstruction experts, medical professionals, and other specialists to build the strongest possible case. Our goal is to secure maximum compensation for your medical expenses, lost wages, pain and suffering, and other damages.
            </p>

            <div className="bg-gradient-to-r from-[#d4af37]/10 to-[#c5a467]/10 border border-[#d4af37]/20 rounded-lg p-4">
              <h4 className="font-semibold text-[#d4af37] mb-2">Free Consultation Available</h4>
              <p className="text-white/80 text-sm">
                Don't wait to seek legal help. Nevada's statute of limitations for personal injury claims is two years from the date of the accident.
              </p>
            </div>
          </article>
        </main>

        <aside className="space-y-6">
          <div className="rounded-2xl p-6 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-[#bfa76a]">Take Action Now</h3>
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
              <li><Link href="/practice/motorcycle-accidents" className="text-white/80 hover:text-[#d4af37] underline">Motorcycle Accidents</Link></li>
              <li><Link href="/practice/truck-accidents" className="text-white/80 hover:text-[#d4af37] underline">Truck Accidents</Link></li>
              <li><Link href="/practice/crosswalk-and-pedestrian-accidents" className="text-white/80 hover:text-[#d4af37] underline">Pedestrian Accidents</Link></li>
              <li><Link href="/practice/commercial-vehicle-accidents" className="text-white/80 hover:text-[#d4af37] underline">Commercial Vehicle Accidents</Link></li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}
