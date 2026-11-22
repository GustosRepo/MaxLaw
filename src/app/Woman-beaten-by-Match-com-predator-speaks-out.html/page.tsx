import type { Metadata } from 'next';
import Link from 'next/link';
import { BECKMAN_MEDIA_PATH, BECKMAN_MEDIA_TITLE, SITE_URL } from '../../lib/constants';

const canonical = `${SITE_URL}${BECKMAN_MEDIA_PATH}`;
const description = 'Coverage of Mary Kay Beckman’s 2013 lawsuit against Match.com and Marc Saggese’s role in the later Ninth Circuit appeal.';

export const metadata: Metadata = {
  title: BECKMAN_MEDIA_TITLE,
  description,
  alternates: { canonical },
  openGraph: { title: BECKMAN_MEDIA_TITLE, description, url: canonical },
  twitter: { card: 'summary', title: BECKMAN_MEDIA_TITLE, description },
};

export default function BeckmanMediaPage() {
  return (
    <main className="min-h-screen bg-[#0e0e0e] px-4 py-12 text-white md:px-6">
      <article className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-6 md:p-10">
        <Link href="/media" className="text-sm font-semibold text-[#d4af37] underline underline-offset-4">
          Back to Media &amp; Press
        </Link>
        <h1 className="mt-4 text-3xl font-[var(--font-playfair)] font-bold text-[#d4af37] md:text-4xl">
          {BECKMAN_MEDIA_TITLE}
        </h1>

        <section className="mt-8 space-y-3 leading-relaxed text-white/80">
          <h2 className="text-xl font-semibold text-white">Original lawsuit coverage</h2>
          <p>
            In January 2013, the Las Vegas Review-Journal reported that Mary Kay Beckman sued Match.com in federal court
            after surviving an attack by a man she met through the site. Beckman’s attorney, Marc Saggese, told the paper
            that Match.com’s advertising should warn users about the risks of meeting strangers online.
          </p>
          <p>
            <a href="https://www.reviewjournal.com/?p=510782" className="font-semibold text-[#d4af37] underline underline-offset-4">
              Read the Las Vegas Review-Journal’s original lawsuit coverage
            </a>
          </p>
        </section>

        <section className="mt-8 space-y-3 leading-relaxed text-white/80">
          <h2 className="text-xl font-semibold text-white">Later appellate coverage</h2>
          <p>
            Courthouse News Service covered the October 2018 oral argument before the Ninth Circuit. Saggese argued on
            Beckman’s behalf that Match.com had a duty to warn her in light of earlier complaints she alleged the company
            had received about the man. Match.com’s lawyer argued that the company owed her no duty to warn under Nevada law.
          </p>
          <p>
            <a href="https://www.courthousenews.com/ninth-circuit-takes-new-look-at-duty-to-warn-in-match-gone-bad/" className="font-semibold text-[#d4af37] underline underline-offset-4">
              Read Courthouse News Service’s appellate coverage
            </a>
          </p>
          <p>
            In November 2018, the Ninth Circuit upheld the dismissal of Beckman’s amended complaint.{' '}
            <a href="https://cdn.ca9.uscourts.gov/datastore/memoranda/2018/11/21/17-16043.pdf" className="text-[#d4af37] underline underline-offset-4">
              Read the court’s decision (PDF)
            </a>
          </p>
        </section>
      </article>
    </main>
  );
}
