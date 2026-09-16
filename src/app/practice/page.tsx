import React from 'react'
import Link from 'next/link'
import { SITE_URL } from '@/lib/constants'
import PracticeStructuredData from './PracticeStructuredData'

export const metadata = {
  title: 'Las Vegas Injury & Criminal Defense Lawyers | Practice Areas',
  description: 'Explore injury and criminal defense practice areas at Saggese & Associates, including car accidents, slip and fall, wrongful death, DUI defense, and more.',
  keywords: [
    'las vegas injury lawyer',
    'las vegas criminal defense lawyer',
    'dui defense las vegas',
    'Drug Offenses lawyer las vegas'
  ],
  alternates: { canonical: `${SITE_URL}/practice` },
  openGraph: { title: 'Las Vegas Injury & Criminal Defense Lawyers', description: 'Explore our core injury and criminal defense practice areas.', url: `${SITE_URL}/practice`, type: 'website' },
  twitter: { card: 'summary', title: 'Las Vegas Law Firm Practice Areas', description: 'Injury & criminal defense representation.' }
}

export default function PracticePage() {
  return (
    <>
      <div className="min-h-screen custom-bg text-white font-[var(--font-inter)] py-12">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <section className="mb-8">
            <div className="relative rounded-3xl p-6 md:p-8 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg overflow-hidden">
              <div className="absolute -right-12 -top-6 text-[6rem] md:text-[9rem] font-black text-white/6 select-none pointer-events-none hidden md:block">Practice</div>
              <div className="relative z-10">
                <h1 className="text-2xl md:text-3xl font-['Playfair_Display'] font-bold text-[#bfa76a]">Practice Areas</h1>
                <div className="mt-3 w-36"><span className="accent-underline" /></div>
                <p className="mt-3 text-sm text-white/80 max-w-3xl">We represent clients in injury and criminal defense matters with trial-ready representation and focused client service. If you were hurt in a crash, start with our <Link href="/practice/car-accidents" className="text-[#d4af37] underline-offset-4 hover:underline">car accident cases</Link>. Below are some of our core practice areas.</p>

                <div className="mt-4 flex items-center gap-3">
                  <a href="tel:17027788883" className="inline-block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-4 py-2 text-sm font-semibold text-[#0e0e0e] shadow-[0_10px_30px_rgba(212,175,55,0.18)]">Call (702) 778‑8883</a>
                  <Link href="/contact" className="inline-block rounded-2xl border border-white/10 px-4 py-2 text-sm text-white/90">Request Consultation</Link>
                </div>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <section className="md:col-span-2 space-y-6">
              <div>
                <h2 className="text-xl font-['Playfair_Display'] font-bold text-[#bfa76a] mb-4">Injury Law</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
{[
  { title: 'Car Accidents', href: '/practice/car-accidents', desc: 'Representation after serious Las Vegas auto crashes.' },
  { title: 'Car Accident Statistics', href: '/practice/car-accident-statistics', desc: 'Crash data insights, common crash factors, and evidence-preservation guidance.' },
  { title: 'Cell Phone-Related Accidents', href: '/practice/cell-phone-related-accidents', desc: 'Cell phone & texting accident claims – free consultation.' },
  { title: 'Underinsured & Uninsured', href: '/practice/underinsured-and-uninsured-accidents', desc: 'UM/UIM & coverage gap claims – free consultation.' },
  { title: 'Premises Liability', href: '/practice/premises-liability', desc: 'Slip and fall, unsafe property, and liability claims.' },
  { title: 'Brain & Spine Injury', href: '/practice/brain-and-spine-injury', desc: 'Serious injury, trauma, and long-term care cases.' },
  { title: 'Wrongful Death', href: '/practice/wrongful-death', desc: 'Representation for families in fatal accident cases.' },
  { title: 'Motorcycle Accidents', href: '/practice/motorcycle-accidents', desc: 'Motorcycle crash cases involving severe injuries and rider-specific issues.' },
  { title: 'Truck Accidents', href: '/practice/truck-accidents', desc: 'Semi-truck, tractor-trailer, and 18-wheeler crash claims.' },
  { title: 'Commercial Vehicle Accidents', href: '/practice/commercial-vehicle-accidents', desc: 'Bus, fleet & commercial vehicle crash claims – free consultation.' },
  { title: 'Pedestrian Accidents', href: '/practice/crosswalk-and-pedestrian-accidents', desc: 'Crosswalk and pedestrian injury cases involving driver negligence.' },
  { title: 'Product Liability', href: '/practice/product-liability', desc: 'Defective product injury claims involving design, manufacturing, or warnings.' },
  { title: 'Excessive Force', href: '/practice/excessive-force', desc: 'We pursue accountability for injuries from excessive force.' },
  { title: 'Elder Abuse', href: '/practice/elder-abuse', desc: 'Nursing home & caretaker abuse claims – free consultation.' },
  { title: 'Insurance Settlements & Checks', href: '/practice/insurance-settlements-and-checks', desc: 'Negotiating payouts, lien reductions & structured settlements.' },
].map((p) => (
  <Link key={p.title} href={p.href}>
    <div className="block rounded-2xl p-5 bg-gradient-to-br from-white/3 to-transparent border border-white/8 card-hover">
      <h3 className="text-lg font-semibold text-white">{p.title}</h3>
      <p className="text-base text-white/80 mt-2">{p.desc}</p>
      <div className="mt-4 text-sm text-white/70">Learn more →</div>
    </div>
  </Link>
))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-['Playfair_Display'] font-bold text-[#bfa76a] mb-4">Criminal Defense</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
{[
  { title: 'DUI Defense', href: '/criminal-defense/dui', desc: 'DUI - Driving Under the Influence defense and license protection.' },
  { title: 'Domestic Violence', href: '/criminal-defense/domestic-violence', desc: 'Battery Domestic Violence and related charges.' },
  { title: 'Drug Offenses', href: '/criminal-defense/drugs', desc: 'Drug related offenses and controlled substance cases.' },
  { title: 'Homicide & Murder', href: '/criminal-defense/murder', desc: 'Homicide and serious criminal charges.' },
].map((p) => (
  <Link key={p.title} href={p.href}>
    <div className="block rounded-2xl p-5 bg-gradient-to-br from-white/3 to-transparent border border-white/8 card-hover">
      <h3 className="text-lg font-semibold text-white">{p.title}</h3>
      <p className="text-base text-white/80 mt-2">{p.desc}</p>
      <div className="mt-4 text-sm text-white/70">Learn more →</div>
    </div>
  </Link>
))}
                </div>
              </div>

              <div className="rounded-2xl p-6 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg">
                <h2 className="text-2xl font-['Playfair_Display'] font-bold mb-3">Why choose us?</h2>
                <ul className="text-sm text-white/90 list-disc list-inside">
                  <li>Combat-proven trial attorneys</li>
                  <li>Individualized case strategies</li>
                  <li>Transparent fee discussions</li>
                </ul>
              </div>
            </section>

            <aside className="space-y-6">
              <div className="rounded-2xl p-6 bg-gradient-to-br from-white/4 to-transparent border border-white/8 shadow-lg text-center">
                <div className="text-sm font-semibold text-white mb-2">Contact</div>
                <div className="text-white/80 mb-4">Free consultation • Same‑day appointments</div>
                <a href="tel:17027788883" className="block rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#c5a467] px-4 py-3 text-sm font-semibold text-[#0e0e0e] mb-3">Call (702) 778‑8883</a>
                <Link href="/contact" className="block rounded-2xl border border-white/10 px-4 py-3 text-sm text-white/90">Request a consultation</Link>
              </div>

              <div className="rounded-2xl p-4 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg text-sm text-white/80">
                <div className="font-semibold text-white mb-2">Quick Help</div>
                <div>Need immediate assistance? Call our office for same-day intake.</div>
              </div>
            </aside>
          </div>
        </div>
      </div>
      <PracticeStructuredData
        slug="/practice"
        serviceType="Las Vegas Injury & Criminal Defense Lawyers"
        description="Explore injury and criminal defense practice areas at Saggese & Associates, including car accidents, slip and fall, wrongful death, DUI defense, and more."
        keywords={['las vegas injury lawyer','las vegas criminal defense lawyer','dui defense las vegas','Drug Offenses lawyer las vegas']}
      />
    </>
  )
}
