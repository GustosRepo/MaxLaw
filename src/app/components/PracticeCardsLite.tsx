"use client";

import Link from 'next/link';

const PERSONAL_INJURY_TOPICS = ['Car Accidents', 'Brain & Spine Injury', 'Wrongful Death'];
const CRIMINAL_DEFENSE_TOPICS = ['DUI', 'Domestic Violence', 'Record Sealing'];

export default function PracticeCardsLite() {
  const renderList = (title: string, topics: string[], basePath: string) => (
    <div className="rounded-xl border border-white/15 bg-black/40 p-4">
      <h3 className="text-base font-semibold text-white">{title}</h3>
      <ul className="mt-2 space-y-1 text-sm text-white/70">
        {topics.map(topic => (
          <li key={topic}>
            <Link href={`${basePath}/${topic.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
              className="hover:text-[#d4af37]">
              {topic}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className="mx-auto w-full max-w-5xl space-y-6 px-4">
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-semibold text-white">Practice Areas</h2>
        <p className="text-sm text-white/70">Learn about our injury and criminal defense services.</p>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {renderList('Personal Injury', PERSONAL_INJURY_TOPICS, '/practice')}
        {renderList('Criminal Defense', CRIMINAL_DEFENSE_TOPICS, '/criminal-defense')}
        <Link href="/practice" className="block text-center text-sm text-[#d4af37] underline underline-offset-2">
          View all practice areas
        </Link>
      </div>
    </section>
  );
}
