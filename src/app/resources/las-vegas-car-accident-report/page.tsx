import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FIRM_NAME, FIRM_PHONE_DISPLAY, FIRM_PHONE_E164, SITE_URL } from '@/lib/constants'
import { RESOURCES_PATH, carAccidentReportGuide, rearEndCollisionGuide } from '@/lib/resources'
import { BUSINESS_ID, serializeJsonLd } from '@/lib/structured-data'
import Breadcrumbs from '../../components/Breadcrumbs'

const { path, title, description, date, dateLabel } = carAccidentReportGuide
const canonical = `${SITE_URL}${path}`
const photo = {
  src: '/content/car_accident.png',
  width: 640,
  height: 427,
  alt: 'A person looking at two damaged cars after a collision',
}
const photoUrl = `${SITE_URL}${photo.src}`
const linkClass = 'text-[#f1d47f] underline underline-offset-4 hover:text-white'

export const metadata: Metadata = {
  title: { absolute: `${title} | Max Law` },
  description,
  authors: [],
  alternates: { canonical },
  openGraph: {
    type: 'article',
    title,
    description,
    url: canonical,
    siteName: FIRM_NAME,
    images: [{ url: photoUrl, width: photo.width, height: photo.height, alt: photo.alt }],
  },
  twitter: { card: 'summary_large_image', title, description, images: [photoUrl] },
}

const articleData = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  '@id': `${canonical}#article`,
  mainEntityOfPage: canonical,
  url: canonical,
  headline: title,
  description,
  image: photoUrl,
  publisher: { '@type': 'Organization', '@id': BUSINESS_ID, name: FIRM_NAME, url: SITE_URL },
}

const agencies = [
  {
    name: 'Las Vegas Metropolitan Police Department (LVMPD)',
    url: 'https://www.lvmpd.com/about/bureaus/records-and-fingerprint-bureau/requesting-report-copies-with-lvmpd',
    instructions: 'Request a Traffic Collision Report online, in person, or by mail. Have your LVMPD event number and valid photo ID ready. If you’re requesting a report for someone else, check LVMPD’s authorization requirements.',
  },
  {
    name: 'Nevada State Police Highway Patrol (NHP)',
    url: 'https://www.nhp.nv.gov/crashes-citations/crash-report-request',
    instructions: 'Follow the link to CrashDocs from the Highway Patrol page. Enter the crash number with its NHP prefix, the crash date, and the last name of someone involved. The Southern Command office handles requests for fatal crash reports and crash photos in the Las Vegas area.',
  },
  {
    name: 'Henderson Police Department',
    url: 'https://www.cityofhenderson.com/government/departments/police/police-records/request-records',
    instructions: 'Choose “Request Traffic Accident Reports” on the city’s records page. Henderson says its online crash reports become available after the investigation closes.',
  },
  {
    name: 'North Las Vegas Police Department',
    url: 'https://www.cityofnorthlasvegas.com/residents/police/police-records',
    instructions: 'Use the LexisNexis BuyCrash link labeled for accident reports on the city’s Police Records page.',
  },
]

export default function LasVegasCarAccidentReportPage() {
  return (
    <>
      <Breadcrumbs items={[
        { name: 'Home', href: '/' },
        { name: 'Resources', href: RESOURCES_PATH },
        { name: 'Las Vegas Car Accident Reports', href: path },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(articleData) }} />
      <article>
        <header className="mb-8 border-b border-white/10 pb-6">
          <h1 className="text-4xl leading-tight font-bold text-[#d4af37] md:text-5xl">{title}</h1>
          <p className="mt-4 text-sm text-white/70">
            {FIRM_NAME} <span aria-hidden="true">·</span>{' '}
            <time dateTime={date}>{dateLabel}</time>
          </p>
        </header>

        <div className="space-y-8 text-lg leading-relaxed text-white/85 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-white [&_section]:space-y-3">
          <p>
            To get a copy of a Las Vegas car accident report, request it from the police agency that investigated the crash. Look for the agency name and event or crash number on the officer’s card, citation, or information exchange sheet. If your paperwork says LVMPD, use Metro’s records page. If it says NHP, use the Nevada Highway Patrol request page.
          </p>

          <section>
            <h2>Where to request a crash report in the Las Vegas Valley</h2>
            <p>
              The City of Las Vegas and Clark County merged their police agencies to form LVMPD, which serves the city and unincorporated Clark County, including the Las Vegas Strip. Henderson and North Las Vegas have their own police departments. For a freeway crash on I-15 or another Nevada freeway, LVMPD directs you to Nevada State Police. Use the agency named on your crash paperwork to confirm where to request the report.{' '}
              <a href="https://library.municode.com/nv/las_vegas/codes/code_of_ordinances?nodeId=TIT2AD_CH2.24MEPODE" className={linkClass}>Las Vegas Municipal Code § 2.24.030</a>{' · '}
              <a href="https://library.municode.com/nv/clark_county/codes/code_of_ordinances?nodeId=TIT2ADPE_CH2.60LAVEMEPODE" className={linkClass}>Clark County Code § 2.60.010</a>{' · '}
              <a href="https://www.lvmpd.com/about/bureaus/records-and-fingerprint-bureau/filing-a-report" className={linkClass}>LVMPD jurisdiction guidance</a>
            </p>
            <ul className="space-y-3">
              {agencies.map(({ name, url, instructions }) => (
                <li key={name} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <h3 className="font-semibold"><a href={url} className={linkClass}>{name}</a></h3>
                  <p className="mt-1 text-base leading-relaxed">{instructions}</p>
                </li>
              ))}
            </ul>
            <p>Use the agency’s link to check current fees, eligibility, and release times before you pay.</p>
          </section>

          <section>
            <h2>What if you don’t have a report number?</h2>
            <p>Contact the records unit of the agency you believe investigated. Give the crash date and approximate time, the intersection or freeway exit, the names of people involved, and any license plate numbers you have. Ask whether those details are enough to locate the report and what identification you’ll need.</p>
            <p>If an online search comes back empty, ask whether the report is still being processed, whether you have the correct number, or whether the agency recorded only an information exchange. If you’ve already left Nevada, ask about online or mail delivery.</p>
          </section>

          <section>
            <h2>When does Nevada require DMV Form SR-1?</h2>
            <p>
              A police report request gets you a copy of an existing record. Nevada DMV Form SR-1 is a separate report the driver generally must file within <strong className="text-white">10 days after the crash</strong> if it occurred on a highway or on property the public can access and caused an injury, a death, or apparent damage of <strong className="text-white">$750 or more</strong> to any vehicle or item of property.{' '}
              <a href="https://www.leg.state.nv.us/nrs/NRS-484E.html#NRS484ESec070" className={linkClass}>NRS 484E.070</a>
            </p>
            <p>
              The officer-investigation exception applies when an officer investigated and the report includes the insurer’s name and address for each person involved, each policy number, and the coverage start and end dates. The statute also addresses physical incapacity and when the vehicle owner must file. If you’re unsure whether you need to file, contact the DMV promptly while you check on the police report.{' '}
              <a href="https://www.leg.state.nv.us/nrs/NRS-484E.html#NRS484ESec070" className={linkClass}>NRS 484E.070(3)–(5)</a>
            </p>
            <p>
              The DMV form explains how to sign and mail it and which attachments to include, such as proof of insurance, a repair estimate or total-loss statement when required, and physician statements for injuries. Nevada’s regulation generally requires the DMV to receive a required report within 10 days.{' '}
              <a href="https://dmv.nv.gov/pdfforms/sr1.pdf" className={linkClass}>Nevada DMV Form SR-1 (PDF)</a>{' · '}
              <a href="https://www.leg.state.nv.us/Division/Legal/LawLibrary/NAC/NAC-484E.html#NAC484ESec070" className={linkClass}>NAC 484E.070</a>
            </p>
            <p>
              Nevada also has an immediate police-notification rule. If no officer is present, drivers must promptly notify the nearest police or Highway Patrol office after an injury or fatal crash on a highway or on property the public can access. The same rule covers highway crashes that damage a vehicle or property someone was operating or attending. Check your insurance policy separately for notice requirements.{' '}
              <a href="https://www.leg.state.nv.us/nrs/NRS-484E.html#NRS484ESec030" className={linkClass}>NRS 484E.030</a>
            </p>
          </section>

          <section>
            <h2>What if the crash report contains a mistake?</h2>
            <p>Compare the names, plates, insurance details, and crash location with your records. If you spot an error, keep the original and ask the investigating agency how to submit a correction or supplemental information. Save any evidence that supports the correction.</p>
            <p>A report can identify witnesses and record what the officer observed. If the order of impacts is in dispute, save dashcam footage and photos alongside the report. Our <Link href={rearEndCollisionGuide.path} className={linkClass}>Las Vegas rear-end collision guide</Link> explains what to document.</p>
          </section>

          <figure>
            <Image
              src={photo.src}
              width={photo.width}
              height={photo.height}
              alt={photo.alt}
              sizes="(max-width: 680px) calc(100vw - 40px), 640px"
              className="h-auto w-full max-w-[640px] rounded-xl"
            />
            <figcaption className="mt-2 text-sm text-white/60">Illustrative photo</figcaption>
          </figure>

          <section className="border-t border-white/10 pt-6">
            <h2>Questions about a Las Vegas car accident claim?</h2>
            <p>
              If you were injured in a crash, {FIRM_NAME} can discuss how the report and other evidence may affect your <Link href="/practice/car-accidents" className={linkClass}>car accident claim</Link>. <Link href="/contact" className={linkClass}>Request a free consultation</Link> or call <a href={`tel:${FIRM_PHONE_E164}`} className={linkClass}>{FIRM_PHONE_DISPLAY}</a>.
            </p>
            <p className="text-sm text-white/65">General information. Reporting duties, access to records, and legal claims depend on the circumstances.</p>
          </section>
        </div>
      </article>
    </>
  )
}
