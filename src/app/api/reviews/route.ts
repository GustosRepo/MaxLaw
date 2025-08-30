import { NextResponse } from 'next/server';

interface RawReview {
  author_name: string;
  profile_photo_url: string;
  rating: number;
  text: string;
  relative_time_description: string;
  time: number;
  language: string;
  author_url?: string;
}

interface PlaceDetailsResult {
  status: string;
  error_message?: string;
  result: {
    rating: number;
    user_ratings_total: number;
    url?: string;
    reviews?: RawReview[];
  };
}

// Simple in-memory cache (resets on redeploy)
interface CachedPayload {
  success: true;
  rating: number;
  total: number;
  url?: string;
  reviews: Array<{
    author: string;
    profilePhoto: string;
    rating: number;
    text: string;
    relativeTime: string;
    time: number;
    language: string;
    authorUrl?: string;
  }>;
  fetchedAt: string;
}

let cached: { timestamp: number; data: CachedPayload } | null = null;
const CACHE_TTL_MS = 1000 * 60 * 30; // 30 minutes

export async function GET() {
  const placeId = process.env.GOOGLE_PLACE_ID; // Server-side only
  const apiKey = process.env.GOOGLE_PLACES_API_KEY; // Keep secret

  if (!placeId || !apiKey) {
    return NextResponse.json({
      success: false,
      error: 'Missing GOOGLE_PLACE_ID or GOOGLE_PLACES_API_KEY environment variables.'
    }, { status: 500 });
  }

  if (cached && (Date.now() - cached.timestamp) < CACHE_TTL_MS) {
    return NextResponse.json({ source: 'cache', ...cached.data });
  }

  try {
    const fields = 'reviews,rating,user_ratings_total,url';
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(placeId)}&fields=${fields}&key=${apiKey}`;
    const res = await fetch(url, { next: { revalidate: 1800 } });
  const json: PlaceDetailsResult = await res.json();

    if (json.status !== 'OK') {
      return NextResponse.json({ success: false, error: json.status, details: json.error_message }, { status: 500 });
    }

    const reviews = (json.result.reviews || [])
      .sort((a, b) => (b.time || 0) - (a.time || 0))
      .slice(0, 6)
      .map(r => ({
        author: r.author_name,
        profilePhoto: r.profile_photo_url,
        rating: r.rating,
        text: r.text,
        relativeTime: r.relative_time_description,
        time: r.time,
        language: r.language,
        authorUrl: r.author_url,
      }));

    const payload: CachedPayload = {
      success: true,
      rating: json.result.rating,
      total: json.result.user_ratings_total,
      url: json.result.url,
      reviews,
      fetchedAt: new Date().toISOString()
    };
    cached = { timestamp: Date.now(), data: payload };
    return NextResponse.json(payload, { status: 200 });
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Unknown error';
    return NextResponse.json({ success: false, error: 'FETCH_ERROR', details: message }, { status: 500 });
  }
}
