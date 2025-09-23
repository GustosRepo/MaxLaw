"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Review {
  id: string;
  author: string;
  profilePhoto: string;
  rating: number;
  text: string;
  relativeTime: string;
  time: number;
  language: string;
  authorUrl?: string;
}

// Hardcoded review summary + selected real client testimonials (truncated where original source showed "More")
const REVIEW_SUMMARY = {
  rating: 5.0,
  total: 140, // approximate total pool; adjust as needed
};

const REVIEWS: Review[] = [
  {
    id: 'desiree-steward',
    author: 'Desiree Steward',
    profilePhoto: '/awards/Client-Champion.png',
    rating: 5,
    text: 'I had an excellent experience working with Marc Saggese. Professional, knowledgeable, and he explained everything clearly. I felt supported and confident throughout the process.',
    relativeTime: '3 weeks ago',
    time: Date.now() - 1000 * 60 * 60 * 24 * 21,
    language: 'en',
  },
  {
    id: 'melody-hernandez',
    author: 'Melody Hernandez',
    profilePhoto: '/awards/Lawyers-badge.png',
    rating: 5,
    text: 'Marc Saggese is the most phenomenal lawyer ever. When you think there’s no hope call Marc. He’s a miracle worker.',
    relativeTime: '3 weeks ago',
    time: Date.now() - 1000 * 60 * 60 * 24 * 21,
    language: 'en',
  },
  {
    id: 'jovani-tavizon',
    author: 'Jovani Tavizon',
    profilePhoto: '/awards/top-100.png',
    rating: 5,
    text: 'Highly recommend Saggese & Associates—very professional and always there to answer any questions. My family is grateful.',
    relativeTime: '3 months ago',
    time: Date.now() - 1000 * 60 * 60 * 24 * 90,
    language: 'en',
  },
  {
    id: 'victoria-spencer',
    author: 'Victoria Spencer',
    profilePhoto: '/awards/new-updated-badge-1.png',
    rating: 5,
    text: 'Multi‑car accident—Marc got me medical attention right away and handled everything. He set realistic expectations and still over‑delivered.',
    relativeTime: '4 years ago',
    time: Date.now() - 1000 * 60 * 60 * 24 * 365 * 4,
    language: 'en',
  },
  {
    id: 'alma-alvarez',
    author: 'Alma Alvarez',
    profilePhoto: '/awards/new-updated-badge-2.png',
    rating: 5,
    text: 'Best lawyers! Knowledgeable and will fight for you. Thank you for all you do to help our community.',
    relativeTime: '5 years ago',
    time: Date.now() - 1000 * 60 * 60 * 24 * 365 * 5,
    language: 'en',
  },
  {
    id: 'paul-mazurkiewicz',
    author: 'Paul Mazurkiewicz',
    profilePhoto: '/awards/new-updated-badge-3.png',
    rating: 5,
    text: 'Best lawyer in Vegas—thorough, detailed, and on your side from the consultation onward. Thank you Marc!',
    relativeTime: '4 years ago',
    time: Date.now() - 1000 * 60 * 60 * 24 * 365 * 4,
    language: 'en',
  },
  {
    id: 'patrick-williams',
    author: 'Patrick Williams',
    profilePhoto: '/awards/new-updated-badge-4.png',
    rating: 5,
    text: 'Stand‑up attorney who always has his clients’ backs. Best attorney I’ve had—he earned every bit of it.',
    relativeTime: '6 years ago',
    time: Date.now() - 1000 * 60 * 60 * 24 * 365 * 6,
    language: 'en',
  },
  {
    id: 'chaz-bautzer',
    author: 'Chaz Bautzer',
    profilePhoto: '/awards/new-updated-badge-5.png',
    rating: 5,
    text: 'Best attorney in town, hands down!',
    relativeTime: '8 years ago',
    time: Date.now() - 1000 * 60 * 60 * 24 * 365 * 8,
    language: 'en',
  },
  {
    id: 'joseph-coleman',
    author: 'Joseph Coleman',
    profilePhoto: '/awards/new-updated-badge-6.jpg',
    rating: 5,
    text: 'False accusations—Marc stood by me and exposed the truth. Grateful for his skill and persistence.',
    relativeTime: '9 years ago',
    time: Date.now() - 1000 * 60 * 60 * 24 * 365 * 9,
    language: 'en',
  },
];

// Client component with Framer Motion animations for staggered fade-in.

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function GoogleReviews() {
  const data = { rating: REVIEW_SUMMARY.rating, total: REVIEW_SUMMARY.total, reviews: REVIEWS };
  return (
    <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/3 to-transparent p-6 md:p-8 backdrop-blur-sm">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h2 className="text-2xl md:text-3xl font-['Playfair_Display'] font-bold text-[#d4af37] flex items-center gap-3">
          <span>Client Reviews</span>
          <span className="inline-flex items-center gap-1 text-sm font-normal text-white/70">
            <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="#d4af37"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.548 8.279L12 18.896l-7.484 4.517 1.548-8.279L0 9.306l8.332-1.151z"/></svg>
            <span>{data.rating.toFixed(1)} / 5</span>
          </span>
        </h2>
        <div className="text-white/60 text-sm">{data.total}+ client reviews</div>
      </div>
      <motion.ul
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-6 md:grid-cols-3"
      >
        {data.reviews.map(r => (
          <motion.li
            key={r.id}
            variants={fade}
            className="relative rounded-2xl border border-white/10 bg-white/5 p-4 text-sm flex flex-col gap-3"
          >
            <div className="flex items-center gap-3">
              <Image src={r.profilePhoto} alt="" width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
              <div>
                <p className="font-semibold text-white leading-tight">{r.author}</p>
                <p className="text-[11px] uppercase tracking-wide text-white/50">{r.relativeTime}</p>
              </div>
            </div>
            <div className="flex items-center gap-1" aria-label={`Rated ${r.rating} out of 5`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill={i < r.rating ? '#d4af37' : 'none'}
                  stroke="#d4af37"
                  strokeWidth="1.5"
                >
                  <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.548 8.279L12 18.896l-7.484 4.517 1.548-8.279L0 9.306l8.332-1.151z" />
                </svg>
              ))}
            </div>
            <p className="text-white/70 line-clamp-6 leading-relaxed">{r.text}</p>
          </motion.li>
        ))}
      </motion.ul>
      <p className="mt-6 text-[11px] tracking-wide text-white/40">
        Testimonials reflect individual experiences; results vary. Not a guarantee of outcome.
      </p>
    </div>
  );
}
