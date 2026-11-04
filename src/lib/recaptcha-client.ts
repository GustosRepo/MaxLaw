export const RECAPTCHA_ACTION = 'contact_submit';

interface Recaptcha {
  ready(callback: () => void): void;
  execute(siteKey: string, options: { action: string }): Promise<string>;
}

declare global {
  interface Window { grecaptcha?: Recaptcha; }
}

let scriptPromise: Promise<Recaptcha> | undefined;

function loadRecaptcha(siteKey: string): Promise<Recaptcha> {
  if (window.grecaptcha?.execute) {
    return new Promise((resolve, reject) => {
      const timer = window.setTimeout(() => reject(new Error('Spam verification timed out. Please try again.')), 10_000);
      window.grecaptcha!.ready(() => {
        window.clearTimeout(timer);
        resolve(window.grecaptcha!);
      });
    });
  }
  if (scriptPromise) return scriptPromise;
  const pending = new Promise<Recaptcha>((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(siteKey)}`;
    script.async = true;
    script.dataset.maxlawRecaptcha = 'true';
    const timer = window.setTimeout(fail, 10_000);
    function fail() {
      window.clearTimeout(timer);
      script.remove();
      reject(new Error('Spam verification could not load. Please try again or call (702) 778-8883.'));
    }
    script.onerror = fail;
    script.onload = () => {
      if (!window.grecaptcha?.ready) return fail();
      window.grecaptcha.ready(() => {
        window.clearTimeout(timer);
        if (!window.grecaptcha?.execute) return fail();
        resolve(window.grecaptcha);
      });
    };
    document.head.appendChild(script);
  });
  scriptPromise = pending.catch(error => { scriptPromise = undefined; throw error; });
  return scriptPromise;
}

export async function getRecaptchaToken() {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  if (!siteKey) throw new Error('Spam verification is unavailable. Please call (702) 778-8883.');
  const recaptcha = await loadRecaptcha(siteKey);
  // Generate a fresh, single-use token on every submission attempt.
  let timeout: ReturnType<typeof setTimeout> | undefined;
  try {
    const token = await Promise.race([
      recaptcha.execute(siteKey, { action: RECAPTCHA_ACTION }),
      new Promise<never>((_, reject) => {
        timeout = setTimeout(() => reject(new Error('Spam verification timed out. Please try again.')), 10_000);
      }),
    ]);
    if (typeof token !== 'string' || !token) throw new Error('Please try spam verification again.');
    return token;
  } catch {
    throw new Error('Spam verification failed. Please try again or call (702) 778-8883.');
  } finally { clearTimeout(timeout); }
}
