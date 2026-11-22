import type { Metadata } from 'next';
import Link from 'next/link';
import {
  CRIMINAL_DEFENSE_PAGES, FIRM_NAME, FIRM_PHONE_DISPLAY, FIRM_PHONE_E164, SITE_URL,
} from '@/lib/constants';
import Breadcrumbs from '../components/Breadcrumbs';
import PracticeStructuredData from '../practice/PracticeStructuredData';

const title = 'Las Vegas Criminal Defense';
const description = 'Explore Las Vegas criminal defense services, find the court handling your case, and learn what to bring to a consultation with Saggese & Associates.';
const canonical = `${SITE_URL}/criminal-defense`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { title, description, url: canonical, type: 'website' },
  twitter: { card: 'summary', title, description },
};

const sourceLink = 'text-[#d4af37] underline underline-offset-4';
const panel = 'rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8';

export default function CriminalDefensePage() {
  return (
    <>
      <Breadcrumbs items={[
        { name: 'Home', href: '/' },
        { name: 'Practice Areas', href: '/practice' },
        { name: 'Criminal Defense', href: '/criminal-defense' },
      ]} />

      <header>
        <h1 className="text-3xl font-[var(--font-playfair)] font-bold text-[#d4af37] sm:text-4xl">{title}</h1>
        <p className="mt-4 max-w-3xl leading-relaxed text-white/85">
          {FIRM_NAME} represents people facing criminal charges in Las Vegas and the surrounding Clark County communities.{' '}
          <Link href="/about/marc-a-saggese" className={sourceLink}>Marc A. Saggese</Link> is the firm’s lead attorney.
        </p>
      </header>

      <section className={panel} aria-labelledby="defense-services">
        <h2 id="defense-services" className="text-xl font-semibold">Criminal defense services</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {CRIMINAL_DEFENSE_PAGES.map(({ title, href }) => (
            <li key={href}>
              <Link href={href} className="block rounded-lg border border-white/10 px-4 py-3 text-[#d4af37] underline-offset-4 hover:bg-white/5 hover:underline">
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <div className="grid gap-6 md:grid-cols-2">
        <section className={panel} aria-labelledby="find-your-court">
          <h2 id="find-your-court" className="text-xl font-semibold">Find the court handling your case</h2>
          <p className="mt-3 leading-relaxed text-white/80">
            Start with the court name, case number, and date on your citation or court notice. The Eighth Judicial District
            Court’s calendar lets you search by case number or party name. If you can’t find your hearing there, check with
            the court named on your paperwork.
          </p>
          <p className="mt-3"><a href="https://www.clarkcountycourts.us/courtfinder/" className={sourceLink}>District Court Finder</a></p>
        </section>

        <section className={panel} aria-labelledby="prepare-for-consultation">
          <h2 id="prepare-for-consultation" className="text-xl font-semibold">Prepare for a consultation</h2>
          <p className="mt-3 leading-relaxed text-white/80">
            If you have them, bring your citation or charging document, release paperwork, and any notices showing upcoming dates.
            For a DUI matter, bring any notices you received about your driver’s license as well.
          </p>
          <p className="mt-3 leading-relaxed text-white/80">You can request a consultation while you’re still gathering paperwork.</p>
        </section>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link href="/contact" className="rounded-xl bg-[#d4af37] px-5 py-3 text-sm font-semibold text-[#0e0e0e]">Request a free consultation</Link>
        <a href={`tel:${FIRM_PHONE_E164}`} className="rounded-xl border border-white/20 px-5 py-3 text-sm">Call {FIRM_PHONE_DISPLAY}</a>
      </div>

      <PracticeStructuredData slug="/criminal-defense" serviceType="Criminal Defense Law" description={description} />
    </>
  );
}
