import React from 'react'
import Link from 'next/link'
import Breadcrumbs from '../../components/Breadcrumbs'
import { TOTAL_RECOVERED_DISPLAY } from '@/lib/constants'

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
        <div className="md:col-span-2 space-y-6">
          <article className="rounded-2xl p-6 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Car Accident Attorney for Injured Las Vegas Drivers</h2>
            <p className="text-white/80 mb-4">
              When you're injured in a car accident, you need an attorney who understands how crashes, medical care, insurance coverage, and fault disputes affect your claim. At The Law Offices of Saggese & Associates, we help injured Las Vegas drivers and passengers understand their options after a serious collision.
            </p>
            <p className="text-white/80 mb-4">
              The best calls for the firm are from people who were hurt and were not at fault. If that describes your crash, call for a free consultation before giving detailed statements to insurance companies or signing paperwork you do not fully understand.
            </p>
            
            <h3 className="text-lg font-semibold mb-3">What to Do After a Las Vegas Crash</h3>
            <ul className="list-disc list-inside text-white/80 space-y-2 mb-4">
              <li>Get medical attention and follow through with recommended care</li>
              <li>Report the crash and keep the police report or incident number</li>
              <li>Take photos of vehicle damage, injuries, road conditions, and insurance information</li>
              <li>Save names and phone numbers for witnesses when possible</li>
              <li>Be careful with recorded statements before you understand your rights</li>
            </ul>

            <h3 className="text-lg font-semibold mb-3">Records After a Las Vegas Crash</h3>
            <p className="text-white/80 mb-4">
              Start with the agency named on your incident paperwork. Use the official <a href="https://www.lvmpd.com/about/bureaus/records-and-fingerprint-bureau/requesting-report-copies-with-lvmpd" className="text-[#d4af37] underline">LVMPD report-copy guidance</a> or <a href="https://www.nhp.nv.gov/crashes-citations/crash-report-request/" className="text-[#d4af37] underline">Nevada State Police crash-report instructions</a> for a crash that agency handled. Requesting an existing report is separate from reporting a crash or notifying an insurer. If you were visiting Las Vegas, keep copies of available photos, treatment records, witness details, and insurance correspondence together after returning home. Note possible camera locations promptly; footage may not be available or retained.
            </p>

            <h3 className="text-lg font-semibold mb-3">Common Types of Car Accidents We Handle</h3>
            <ul className="list-disc list-inside text-white/80 space-y-2 mb-4">
              <li>Rear-end collisions</li>
              <li>Head-on crashes</li>
              <li>T-bone accidents</li>
              <li>Multi-vehicle accidents</li>
              <li>Hit and run accidents</li>
              <li>Drunk driving accidents</li>
              <li><Link href="/practice/cell-phone-related-accidents" className="text-[#d4af37] underline">Distracted driving crashes</Link></li>
              <li>Rollover accidents</li>
            </ul>

            <h3 className="text-lg font-semibold mb-3">Insurance, Fault, and Evidence</h3>
            <p className="text-white/80 mb-4">
              Nevada injury claims often turn on proof: how the crash happened, what the police report says, what the vehicles and photos show, and how your medical records connect the collision to your injuries. A car accident lawyer can help organize that evidence, respond to insurance coverage questions, and evaluate whether uninsured or underinsured motorist coverage may matter.
            </p>
            <p className="text-white/80 mb-4">
              Insurance adjusters may ask for a recorded statement early. That request can feel routine, but it may affect how fault, injuries, and treatment are evaluated later. We help clients understand what information is needed, what should be documented, and when a claim should be prepared for negotiation or litigation.
            </p>

            <h3 className="text-lg font-semibold mb-3">When Fault Is Disputed</h3>
            <p className="text-white/80 mb-4">
              A dispute over fault does not automatically end an injury claim. Under <a href="https://www.leg.state.nv.us/NRS/NRS-041.html#NRS041Sec141" className="text-[#d4af37] underline">Nevada&apos;s comparative-negligence statute</a>, when that rule applies, an injured person&apos;s negligence must not exceed the negligence of the defendant, or combined defendants, from whom recovery is sought. A qualifying recovery is reduced by the injured person&apos;s share of negligence. Multiple-party cases and exceptions require individual analysis. Photos, witness accounts, and other evidence matter; an insurer&apos;s initial fault assessment is not a court judgment.
            </p>

            <div className="bg-gradient-to-r from-[#d4af37]/10 to-[#c5a467]/10 border border-[#d4af37]/20 rounded-lg p-4">
              <h4 className="font-semibold text-[#d4af37] mb-2">Free Consultation Available</h4>
              <p className="text-white/80 text-sm">
                <a href="https://www.leg.state.nv.us/NRS/NRS-011.html#NRS011Sec190" className="text-[#d4af37] underline">NRS 11.190(4)(e)</a> generally sets a two-year filing period for personal-injury actions based on another person&apos;s wrongful act or neglect. The starting date, the type of claim, and statutory exceptions can change the analysis. Insurance-policy claims and cases involving government parties can raise separate issues. Seek advice about your circumstances promptly; do not assume treatment or insurance discussions extend a filing deadline.
              </p>
            </div>
          </article>

          <section className="rounded-2xl p-6 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">How the Firm Builds a Car Accident Claim</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="text-base font-semibold text-[#bfa76a]">Medical Documentation</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">We discuss treatment options, help clients understand why consistent care matters, and organize records that show the effect of the injury on daily life and work.</p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#bfa76a]">Investigation</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">The firm reviews police reports, photos, witness information, insurance coverage, and available vehicle or scene evidence to clarify liability.</p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#bfa76a]">Insurance Negotiation</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">We prepare the claim around fault, injuries, treatment, lost income, and other losses before negotiating with the insurance company. For information about reviewing an offer and handling settlement proceeds, see our <Link href="/practice/insurance-settlements-and-checks" className="text-[#d4af37] underline">settlement offers and disbursement</Link> page.</p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#bfa76a]">Litigation Readiness</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">When a case cannot be resolved fairly, the firm prepares for litigation with a trial-ready approach shaped by the facts and available evidence.</p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl p-6 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Compensation and Supporting Records</h2>
            <p className="text-white/80 mb-4">Depending on liability and the evidence, an injury claim may include reasonable medical expenses, lost earnings, future medical needs or reduced earning capacity, and pain and suffering. Future losses require support; they are not assumed from the fact that a crash occurred. Each case turns on its own injuries, causation, and proof.</p>
            <p className="text-white/80 mb-4">Keep treatment records, bills, pay records, and information about missed work or everyday limitations. Repair estimates can help document a separate vehicle-damage issue. A lawyer can explain which losses fit the claim and whether medical or other expert evidence is needed. These possible categories do not establish a settlement value or guarantee a recovery.</p>
          </section>

          <section className="rounded-2xl p-6 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Why Saggese & Associates</h2>
            <p className="text-white/80 mb-4">
              <Link href="/about/marc-a-saggese" className="text-[#d4af37] underline-offset-4 hover:underline">Marc A. Saggese</Link> has practiced law in Las Vegas since 1999 and has represented more than 5,000 clients. The firm brings courtroom and trial experience to injury cases, with direct attention to the facts, medical documentation, and insurance issues that often shape the value of a claim.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-black/25 p-4">
                <div className="text-lg font-semibold text-[#d4af37]">Since 1999</div>
                <p className="mt-1 text-xs text-white/70">Practicing law in Las Vegas</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/25 p-4">
                <div className="text-lg font-semibold text-[#d4af37]">5,000+</div>
                <p className="mt-1 text-xs text-white/70">Clients represented</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/25 p-4">
                <div className="text-lg font-semibold text-[#d4af37]">{TOTAL_RECOVERED_DISPLAY}*</div>
                <p className="mt-1 text-xs text-white/70">Reported client recoveries</p>
              </div>
            </div>
            <p className="mt-3 text-xs text-white/50">*Past results do not guarantee future outcomes. Each case is unique.</p>
          </section>

          <section className="rounded-2xl p-6 bg-gradient-to-br from-white/3 to-transparent border border-white/8 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Preparing for a Car Accident Consultation</h2>
            <p className="text-white/80 mb-4">Write down the crash date and location, the agencies involved, and the main questions you want answered. Identify the photos, incident number, insurance letters, treatment records, and work information you already have, as well as records still missing. Ask which additional documents would be useful and how to provide sensitive records securely.</p>
            <h3 className="text-lg font-semibold mb-3">Attorney Fees and Case Expenses</h3>
            <p className="text-white/80">Attorney fees and case expenses are different. Nevada&apos;s written contingency-agreement rules address fee calculations, expense deductions, and expense responsibility if there is no recovery. Review the written terms for your matter before agreeing to representation.</p>
          </section>

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

          <section className="rounded-2xl p-6 border border-white/8">
            <h2 className="text-lg font-semibold mb-3">Legal and Local Resources</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm text-white/80">
              <li><a href="https://www.leg.state.nv.us/NRS/NRS-041.html#NRS041Sec141" className="text-[#d4af37] underline">NRS 41.141: comparative negligence</a></li>
              <li><a href="https://www.leg.state.nv.us/NRS/NRS-011.html" className="text-[#d4af37] underline">NRS Chapter 11: filing periods and exceptions</a></li>
              <li><a href="https://www.leg.state.nv.us/CourtRules/RPC.html" className="text-[#d4af37] underline">Nevada Rules of Professional Conduct, Rule 1.5: fees and expenses</a></li>
              <li><a href="https://ag.nv.gov/uploadedfiles/agnvgov/content/issues/09292021_nv-jury-instructions-civil-2018-pdf-version.pdf" className="text-[#d4af37] underline">Nevada civil jury instructions, 2018 edition: damages examples</a></li>
            </ul>
            <p className="mt-3 text-xs text-white/60">General information; the law and deadlines that apply depend on the particular claim.</p>
          </section>
        </div>

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
              <li><Link href="/practice/brain-and-spine-injury" className="text-white/80 hover:text-[#d4af37] underline">Brain &amp; Spine Injury</Link></li>
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
