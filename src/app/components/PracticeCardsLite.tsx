"use client";

import Link from 'next/link';

const PERSONAL_INJURY_TOPICS = [
  { label: 'Car Accidents', href: '/practice/car-accidents' },
  { label: 'Motorcycle Accidents', href: '/practice/motorcycle-accidents' },
  { label: 'Truck Accidents', href: '/practice/truck-accidents' },
  { label: 'Wrongful Death', href: '/practice/wrongful-death' },
];
const CRIMINAL_DEFENSE_TOPICS = ['DUI', 'Battery Domestic Violence', 'Drug Offenses'];

export default function PracticeCardsLite() {
  const renderList = (title: string, topics: { label: string; href: string }[]) => (
    <div className="rounded-xl border border-white/15 bg-black/40 p-4">
      <h3 className="text-base font-semibold text-white">{title}</h3>
      <ul className="mt-2 space-y-1 text-sm text-white/70">
        {topics.map(topic => (
          <li key={topic.href}>
            <Link href={topic.href} className="hover:text-[#d4af37]">
              {topic.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className="mx-auto w-full max-w-5xl space-y-6 px-4">
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-semibold text-white">Accident & Injury Help</h2>
        <p className="text-sm text-white/70">Clear next steps for injured, not-at-fault accident victims.</p>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {renderList('Personal Injury', PERSONAL_INJURY_TOPICS)}
        <div className="rounded-xl border border-white/15 bg-black/40 p-4">
          <h3 className="text-base font-semibold text-white">Need Help Now?</h3>
          <div className="mt-3 grid grid-cols-1 gap-2">
            <a href="tel:17027788883" className="rounded-xl bg-[#d4af37] px-4 py-3 text-center text-sm font-semibold text-black">Call (702) 778-8883</a>
            <Link href="/contact" className="rounded-xl border border-white/15 px-4 py-3 text-center text-sm text-white/85">Request Consultation</Link>
          </div>
        </div>
        <details className="rounded-xl border border-white/10 bg-black/25 p-4 text-sm text-white/70">
          <summary className="cursor-pointer font-semibold text-white">Other services</summary>
          <ul className="mt-3 space-y-1">
            {CRIMINAL_DEFENSE_TOPICS.map(topic => (
              <li key={topic}>
                <Link href={`/criminal-defense/${topic.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="hover:text-[#d4af37]">
                  {topic}
                </Link>
              </li>
            ))}
          </ul>
        </details>
        <Link href="/practice" className="block text-center text-sm text-[#d4af37] underline underline-offset-2">
          View all practice areas
        </Link>
      </div>
    </section>
  );
}
