const EXPECTED_ACTION = 'contact_submit';

export class RecaptchaError extends Error {
  constructor(message: string, public status: number) { super(message); }
}

const unavailable = () => new RecaptchaError('Spam verification is unavailable. Please try again or call (702) 778-8883.', 503);
const rejected = () => new RecaptchaError('Spam verification failed. Please try again or call (702) 778-8883.', 403);

export async function verifyRecaptcha(token: unknown) {
  if (typeof token !== 'string' || !token.trim() || token.length > 4096) throw rejected();
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const minimumScore = Number(process.env.RECAPTCHA_MIN_SCORE || '0.5');
  const hostnames = (process.env.RECAPTCHA_ALLOWED_HOSTNAMES || 'maxlawnv.com,www.maxlawnv.com')
    .split(',').map(host => host.trim().toLowerCase()).filter(Boolean);
  if (process.env.NODE_ENV !== 'production') hostnames.push('localhost', '127.0.0.1');
  if (!secret || !hostnames.length || !Number.isFinite(minimumScore) || minimumScore < 0 || minimumScore > 1) throw unavailable();

  let result: Record<string, unknown>;
  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret, response: token }),
      cache: 'no-store',
      signal: AbortSignal.timeout(5000),
    });
    if (!response.ok) throw unavailable();
    result = await response.json();
    if (!result || typeof result !== 'object' || Array.isArray(result)) throw unavailable();
  } catch { throw unavailable(); }

  if (result.success !== true || result.action !== EXPECTED_ACTION ||
      typeof result.score !== 'number' || !Number.isFinite(result.score) ||
      result.score < minimumScore || result.score > 1 ||
      typeof result.hostname !== 'string' || !hostnames.includes(result.hostname.toLowerCase())) {
    throw rejected();
  }
}
