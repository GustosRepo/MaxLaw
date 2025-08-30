"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface Review {
  author: string;
  profilePhoto: string;
  rating: number;
  text: string;
  relativeTime: string;
  time: number;
  language: string;
  authorUrl?: string;
}

interface ReviewsResponse {
  success: boolean;
  rating?: number;
  total?: number;
  url?: string;
  reviews?: Review[];
  error?: string;
}

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function GoogleReviews() {
  const [data, setData] = React.useState<ReviewsResponse | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    let active = true;
    (async () => {
      try {
        const res = await fetch('/api/reviews');
        const json = await res.json();
        if (!active) return;
        if (json.success) {
          setData(json);
        } else {
          setError(json.error || 'Failed to load reviews');
        }
      } catch (e: any) {
        if (active) setError(e.message || 'Network error');
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => { active = false; };
  }, []);

  return (
    <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/3 to-transparent p-6 md:p-8 backdrop-blur-sm">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h2 className="text-2xl md:text-3xl font-['Playfair_Display'] font-bold text-[#d4af37] flex items-center gap-3">
          <span>Client Reviews</span>
          <span className="inline-flex items-center gap-1 text-sm font-normal text-white/70">
            <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="#d4af37"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.548 8.279L12 18.896l-7.484 4.517 1.548-8.279L0 9.306l8.332-1.151z"/></svg>
            {data?.rating ? <span>{data.rating.toFixed(1)} / 5</span> : null}
          </span>
        </h2>
        {data?.total && (
          <div className="text-white/60 text-sm">{data.total} Google reviews</div>
        )}
      </div>
      {loading && (
        <div className="grid gap-4 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-40 rounded-2xl bg-white/5 animate-pulse" />
          ))}
        </div>
      )}
      {error && !loading && (
        <div className="text-sm text-red-300">{error}</div>
      )}
      {!loading && !error && data?.reviews && (
        <motion.ul initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid gap-6 md:grid-cols-3">
          {data.reviews.map(r => (
            <motion.li variants={fade} key={r.time} className="relative rounded-2xl border border-white/10 bg-white/5 p-4 text-sm flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <img src={r.profilePhoto} alt="" className="h-10 w-10 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-white leading-tight">{r.author}</p>
                  <p className="text-[11px] uppercase tracking-wide text-white/50">{r.relativeTime}</p>
                </div>
              </div>
              <div className="flex items-center gap-1" aria-label={`Rated ${r.rating} out of 5`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i < r.rating ? '#d4af37' : 'none'} stroke="#d4af37" strokeWidth="1.5"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.548 8.279L12 18.896l-7.484 4.517 1.548-8.279L0 9.306l8.332-1.151z"/></svg>
                ))}
              </div>
              <p className="text-white/70 line-clamp-6 leading-relaxed">{r.text}</p>
              {r.authorUrl && (
                <a href={r.authorUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-[#d4af37] underline decoration-dotted">View on Google</a>
              )}
            </motion.li>
          ))}
        </motion.ul>
      )}
      <p className="mt-6 text-[11px] tracking-wide text-white/40">
        Reviews provided via Google Places API. Star ratings and excerpts are unedited. Google and the Google logo are trademarks of Google LLC.
      </p>
      {data?.url && (
        <div className="mt-4">
          <a href={data.url} target="_blank" rel="noopener noreferrer" className="inline-block text-xs font-semibold text-[#d4af37] underline">
            See all reviews on Google
          </a>
        </div>
      )}
    </div>
  );
}
