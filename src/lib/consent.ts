export type ConsentChoice = 'accepted' | 'rejected';
export const CONSENT_KEY = 'maxlaw-cookie-consent';
export const CONSENT_EVENT = 'maxlaw-consent-change';
export const PREFERENCES_EVENT = 'maxlaw-cookie-preferences';
let sessionChoice: ConsentChoice | null = null;

export function getConsentChoice(): ConsentChoice | null {
  if (typeof window === 'undefined') return null;
  try {
    const stored = window.localStorage.getItem(CONSENT_KEY);
    return stored === 'accepted' || stored === 'rejected' ? stored : sessionChoice;
  } catch { return sessionChoice; }
}

export function saveConsentChoice(choice: ConsentChoice) {
  try { window.localStorage.setItem(CONSENT_KEY, choice); sessionChoice = null; }
  catch { sessionChoice = choice; }
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

export function clearAnalyticsCookies() {
  const parts = window.location.hostname.split('.');
  const domains = ['', ...parts.map((_, index) => '.' + parts.slice(index).join('.'))];
  for (const cookie of document.cookie.split(';')) {
    const name = cookie.split('=')[0].trim();
    if (!/^_ga(?:_|$)|^_gid$|^_gat(?:_|$)/.test(name)) continue;
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/;${domain ? ` domain=${domain};` : ''}`;
    }
  }
}
