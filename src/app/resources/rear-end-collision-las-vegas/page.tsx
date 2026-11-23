import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FIRM_NAME, SITE_URL } from '@/lib/constants'
import { RESOURCES_PATH, rearEndCollisionGuide } from '@/lib/resources'
import { BUSINESS_ID, serializeJsonLd } from '@/lib/structured-data'
import Breadcrumbs from '../../components/Breadcrumbs'

const { path, title, description, publishedDate, publishedLabel } = rearEndCollisionGuide
const canonical = `${SITE_URL}${path}`
const photo = {
  src: '/content/car-accident2.png',
  width: 640,
  height: 426,
  alt: 'Two cars on a road after a rear-end collision',
}
const photoUrl = `${SITE_URL}${photo.src}`
const linkClass = 'text-[#f1d47f] underline underline-offset-4 hover:text-white'

export const metadata: Metadata = {
  title: { absolute: title },
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
  datePublished: publishedDate,
  publisher: { '@type': 'Organization', '@id': BUSINESS_ID, name: FIRM_NAME, url: SITE_URL },
}

export default function RearEndCollisionPage() {
  return (
    <>
      <Breadcrumbs items={[
        { name: 'Home', href: '/' },
        { name: 'Resources', href: RESOURCES_PATH },
        { name: 'Rear-End Collisions', href: path },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(articleData) }} />
      <article>
        <header className="mb-8 border-b border-white/10 pb-6">
          <h1 className="text-4xl leading-tight font-bold text-[#d4af37] md:text-5xl">{title}</h1>
          <p className="mt-4 text-sm text-white/70">
            Published by {FIRM_NAME} <span aria-hidden="true">·</span>{' '}
            <time dateTime={publishedDate}>{publishedLabel}</time>
          </p>
        </header>

        <div className="space-y-8 text-lg leading-relaxed text-white/85 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-white [&_section]:space-y-3">
          <p>
            After a rear-end crash, get to safety and seek medical care if you need it. Once you’re safe, save the incident number, any original photos or video, and the names of people who saw the crash. If an insurance adjuster calls, note who called and what they’re asking for. Those details can help you explain what happened if the drivers disagree.
          </p>

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

          <section>
            <h2>Who is at fault when someone hits you from behind?</h2>
            <p>
              Nevada law requires drivers to leave enough space for their speed, the amount of traffic, and road conditions. A lane change, a broken brake light, or an earlier impact in a chain reaction can affect how fault is assessed.{' '}
              <a href="https://www.leg.state.nv.us/NRS/NRS-484B.html#NRS484BSec127" className={linkClass}>Nevada’s following-distance rule (NRS 484B.127)</a>
            </p>
            <p>
              When Nevada’s comparative negligence rule applies, an injured person’s own negligence bars recovery if it exceeds the defendant’s negligence or the combined negligence of the defendants from whom they seek recovery. If the person can recover, their share of fault generally reduces the damages they can collect. A 20% share of fault, for example, generally reduces a qualifying award by 20%.{' '}
              <a href="https://www.leg.state.nv.us/NRS/NRS-041.html#NRS041Sec141" className={linkClass}>Nevada’s comparative negligence statute (NRS 41.141)</a>
            </p>
          </section>

          <section>
            <h2>What evidence is worth saving right away?</h2>
            <ul className="list-disc space-y-3 pl-6 marker:text-[#d4af37]">
              <li><strong className="text-white">The order of events.</strong> Write down what you remember while it’s fresh. If you felt two impacts, record which came first and where your vehicle was in relation to the others. Mark details you’re unsure about.</li>
              <li><strong className="text-white">Photos and video.</strong> If you can do so safely, take photos of the damage, lane markings, vehicle positions, and nearby signs. Export dashcam video before the device records over it and keep the original file. Note where you saw any nearby cameras and when the crash happened so you can ask the operator whether footage exists.</li>
              <li>
                <strong className="text-white">The incident number.</strong> Start with the agency listed on the officer’s paperwork. Follow that agency’s instructions for requesting a copy.{' '}
                <a href="https://www.lvmpd.com/about/bureaus/records-and-fingerprint-bureau/requesting-report-copies-with-lvmpd" className={linkClass}>LVMPD report copies</a>{' · '}
                <a href="https://www.nhp.nv.gov/crashes-citations/crash-report-request/" className={linkClass}>Nevada State Police crash reports</a>
              </li>
            </ul>
            <p>The crash report can help identify the vehicles and people involved. Photos, witness accounts, and video can fill in details about the sequence of impacts.</p>
          </section>

          <section>
            <h2>What should you ask when the other driver’s insurer calls?</h2>
            <p>
              Write down the adjuster’s name, company, claim number, and callback number. Ask what they need, whether they’re asking for a recorded statement, and whether they can send the request in writing. Check your own policy for separate notice and cooperation requirements. If you receive a release, ask which claims it would resolve before signing it.
            </p>
            <p>Keep the insurer’s letters with your treatment records, bills, and documentation of any missed work. If you speak with an attorney about a release or a fault dispute, bring the paperwork you already have.</p>
          </section>

          <div className="space-y-3 border-t border-white/10 pt-6">
            <p><Link href="/practice/car-accidents" className={linkClass}>Las Vegas car accident representation</Link></p>
            <p className="text-sm text-white/65">General information. Fault, insurance obligations, and available claims depend on the circumstances.</p>
          </div>
        </div>
      </article>
    </>
  )
}
