import React from 'react'
import Link from 'next/link'
import Breadcrumbs from '../../components/Breadcrumbs'

export default function CarAccidentsPageClient() {
  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Practice Areas', href: '/practice' },
    { name: 'Car Accidents', href: '/practice/car-accidents' }
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />

      {/* Content only — PracticeLayout provides outer main and container */}
      <header className="mb-6">
        <div className="rounded-3xl p-6 md:p-8 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg">
          <h1 className="text-2xl md:text-3xl font-['Playfair_Display'] font-bold text-[#bfa76a]">Las Vegas Car Accident Attorney</h1>
          <div className="mt-3 w-32"><span className="accent-underline" /></div>
          <p className="mt-3 text-white/80">Injured and not at fault? Get focused help with medical treatment questions, insurance claims, and compensation after a Las Vegas crash.</p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <main className="md:col-span-2 space-y-6">
          <article className="rounded-2xl p-6 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Car Accident Attorney for Injured Las Vegas Drivers</h2>
            <p className="text-white/80 mb-4">
              When you're injured in a car accident, you need an attorney who understands how crashes, medical care, insurance coverage, and fault disputes affect your claim. At The Law Offices of Saggese & Associates, we help injured Las Vegas drivers and passengers understand their options after a serious collision.
            </p>
            <p className="text-white/80 mb-4">
              The best calls for the firm are from people who were hurt and were not at fault. If that describes your crash, call for a free consultation before giving detailed statements to insurance companies.
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

            <h3 className="text-lg font-semibold mb-3">How We Help After a Crash</h3>
            <ul className="list-disc list-inside text-white/80 space-y-2 mb-4">
              <li>Review how the accident happened and who may be responsible</li>
              <li>Discuss medical treatment options after an injury</li>
              <li>Deal with insurance claim issues and coverage questions</li>
              <li>Document injuries, lost income, and other damages</li>
              <li>Prepare the case for settlement or litigation when needed</li>
            </ul>

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

          <section className="rounded-2xl p-6 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Car Accident Questions</h2>
            <div className="space-y-5">
              <div>
                <h3 className="text-base font-semibold text-[#bfa76a]">Can you help me find medical treatment after a car accident?</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">Yes. If you are injured after a Las Vegas car accident, the firm can discuss treatment options and help you understand how medical care may relate to your injury claim.</p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#bfa76a]">What if I was not at fault for the crash?</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">If another driver caused the accident, a car accident attorney can review the facts, insurance coverage, medical treatment, and possible compensation.</p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#bfa76a]">How much does a car accident consultation cost?</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">The initial consultation is free. For injury cases, there is no fee unless the firm wins or resolves your case.</p>
              </div>
            </div>
          </section>
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
              <li><Link href="/practice/underinsured-and-uninsured-accidents" className="text-white/80 hover:text-[#d4af37] underline">Uninsured & Underinsured Accidents</Link></li>
              <li><Link href="/practice/crosswalk-and-pedestrian-accidents" className="text-white/80 hover:text-[#d4af37] underline">Pedestrian Accidents</Link></li>
              <li><Link href="/practice/commercial-vehicle-accidents" className="text-white/80 hover:text-[#d4af37] underline">Commercial Vehicle Accidents</Link></li>
              <li><Link href="/practice/wrongful-death" className="text-white/80 hover:text-[#d4af37] underline">Wrongful Death</Link></li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}
