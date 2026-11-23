import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_URL } from '@/lib/constants'
import { RESOURCES_PATH, rearEndCollisionGuide } from '@/lib/resources'
import Breadcrumbs from '../components/Breadcrumbs'

const title = 'Legal Resources'
const description = 'Practical guides about Nevada injury claims from The Law Offices of Saggese & Associates.'
const canonical = `${SITE_URL}${RESOURCES_PATH}`

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { type: 'website', title, description, url: canonical },
  twitter: { card: 'summary', title, description },
}

export default function ResourcesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Resources', href: RESOURCES_PATH }]} />
      <h1 className="mb-8 text-4xl font-bold text-[#d4af37] md:text-5xl">{title}</h1>
      <article className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
        <time dateTime={rearEndCollisionGuide.publishedDate} className="text-sm text-white/65">
          {rearEndCollisionGuide.publishedLabel}
        </time>
        <h2 className="mt-2 text-2xl font-semibold">
          <Link href={rearEndCollisionGuide.path} className="text-[#f1d47f] underline decoration-[#bfa76a] underline-offset-4 hover:text-white">
            {rearEndCollisionGuide.title}
          </Link>
        </h2>
        <p className="mt-3 text-lg leading-relaxed text-white/80">{rearEndCollisionGuide.description}</p>
      </article>
    </>
  )
}
