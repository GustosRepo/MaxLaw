import { NextResponse } from 'next/server';

// Simple in-memory cache (resets on redeploy)
let cached: { timestamp: number; data: any } | null = null;
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
    return NextResponse.json({ success: true, source: 'cache', ...cached.data });
  }

  try {
    const fields = 'reviews,rating,user_ratings_total,url';
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(placeId)}&fields=${fields}&key=${apiKey}`;
    const res = await fetch(url, { next: { revalidate: 1800 } });
    const json = await res.json();

    if (json.status !== 'OK') {
      return NextResponse.json({ success: false, error: json.status, details: json.error_message }, { status: 500 });
    }

    const reviews = (json.result.reviews || [])
      .sort((a: any, b: any) => (b.time || 0) - (a.time || 0))
      .slice(0, 6)
      .map((r: any) => ({
        author: r.author_name,
        profilePhoto: r.profile_photo_url,
        rating: r.rating,
        text: r.text,
        relativeTime: r.relative_time_description,
        time: r.time,
        language: r.language,
        authorUrl: r.author_url,
      }));

    const payload = {
      success: true,
      rating: json.result.rating,
      total: json.result.user_ratings_total,
      url: json.result.url,
      reviews,
      fetchedAt: new Date().toISOString()
    };
    cached = { timestamp: Date.now(), data: payload };
    return NextResponse.json(payload, { status: 200 });
  } catch (e: any) {
    return NextResponse.json({ success: false, error: 'FETCH_ERROR', details: e?.message }, { status: 500 });
  }
}
