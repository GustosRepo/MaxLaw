"use client";

import Link from 'next/link';
import {
  CRIMINAL_DEFENSE_CASE_TYPES,
  PERSONAL_INJURY_CASE_TYPES,
  type CaseTopic,
} from '../../lib/constants';

export default function PracticeCardsLite() {
  const topicHref = (topic: CaseTopic) => topic.href || `/contact?case=${encodeURIComponent(topic.label)}`;
  const injuryPreview = PERSONAL_INJURY_CASE_TYPES.slice(0, 5);
  const defensePreview = CRIMINAL_DEFENSE_CASE_TYPES.slice(0, 4);

  const renderPreview = (title: string, topics: CaseTopic[], allTopics: CaseTopic[]) => (
    <div className="rounded-xl border border-white/15 bg-black/40 p-4">
      <h3 className="text-base font-semibold text-white">{title}</h3>
      <ul className="mt-2 space-y-1 text-base text-white/70">
        {topics.map(topic => (
          <li key={topic.label}>
            <Link href={topicHref(topic)} className="hover:text-[#d4af37]">
              {topic.label}
            </Link>
          </li>
        ))}
      </ul>
      {allTopics.length > topics.length && (
        <details className="mt-3 rounded-lg border border-white/10 bg-black/25 p-3 text-sm text-white/70">
          <summary className="cursor-pointer font-semibold text-white">More case types</summary>
          <ul className="mt-3 space-y-1.5">
            {allTopics.slice(topics.length).map(topic => (
              <li key={topic.label}>
                <Link href={topicHref(topic)} className="hover:text-[#d4af37]">
                  {topic.label}
                </Link>
              </li>
            ))}
          </ul>
        </details>
      )}
    </div>
  );

  return (
    <section className="mx-auto w-full max-w-5xl space-y-6 px-4">
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-semibold text-white">Accident & Injury Help</h2>
        <p className="text-sm text-white/70">Clear next steps for injured, not-at-fault accident victims.</p>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {renderPreview('Injury', injuryPreview, PERSONAL_INJURY_CASE_TYPES)}
        {renderPreview('Criminal Defense', defensePreview, CRIMINAL_DEFENSE_CASE_TYPES)}
        <div className="rounded-xl border border-white/15 bg-black/40 p-4">
          <h3 className="text-base font-semibold text-white">Need Help Now?</h3>
          <div className="mt-3 grid grid-cols-1 gap-2">
            <a href="tel:17027788883" className="rounded-xl bg-[#d4af37] px-4 py-3 text-center text-sm font-semibold text-black">Call (702) 778-8883</a>
            <Link href="/contact" className="rounded-xl border border-white/15 px-4 py-3 text-center text-sm text-white/85">Request Consultation</Link>
          </div>
        </div>
        <Link href="/practice" className="block text-center text-sm text-[#d4af37] underline underline-offset-2">
          View all practice areas
        </Link>
      </div>
    </section>
  );
}
