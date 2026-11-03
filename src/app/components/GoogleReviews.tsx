import { CLIENT_TESTIMONIALS } from '../../lib/client-proof';

export default function GoogleReviews() {
  return (
    <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/3 to-transparent p-6 md:p-8">
      <h2 className="mb-6 text-2xl font-bold text-[#d4af37] md:text-3xl">Client Reviews</h2>
      <ul className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 focus-visible:outline-2 focus-visible:outline-[#d4af37] md:grid md:grid-cols-3 md:overflow-visible" aria-label="Client reviews list" tabIndex={0}>
        {CLIENT_TESTIMONIALS.map(review => (
          <li key={review.id} className="w-[min(75vw,18rem)] shrink-0 snap-start rounded-2xl border border-white/10 bg-white/5 p-4 text-sm md:w-auto">
            <p className="font-semibold text-white">{review.author}</p>
            <p className="mt-3 leading-relaxed text-white/70">{review.text}</p>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-xs text-white/50">Testimonials reflect individual experiences; results vary. Not a guarantee of outcome.</p>
    </div>
  );
}
