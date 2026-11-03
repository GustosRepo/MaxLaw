import { getConsentChoice } from './consent';

export const GA_ID = 'G-1FSZHPMBHS';
export const GA_SRC = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    [key: `ga-disable-${string}`]: boolean;
  }
}

export function initializeAnalytics() {
  if (getConsentChoice() !== 'accepted') return;
  window[`ga-disable-${GA_ID}`] = false;
  if (document.querySelector('script[data-maxlaw-analytics]')) return;
  window.dataLayer = window.dataLayer || [];
  // gtag consumes Arguments objects, rather than plain arrays.
  window.gtag = function () {
    // Google's queue expects an Arguments object; a rest-parameter array is not equivalent.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer?.push(arguments);
  };
  window.gtag('consent', 'default', {
    analytics_storage: 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied',
  });
  window.gtag('js', new Date());
  window.gtag('config', GA_ID, {
    send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false,
    page_location: window.location.origin + window.location.pathname,
    page_referrer: document.referrer ? document.referrer.split(/[?#]/)[0] : '',
  });
  const script = document.createElement('script');
  script.src = GA_SRC;
  script.async = true;
  script.dataset.maxlawAnalytics = 'true';
  document.head.appendChild(script);
}

export function trackPageView() {
  if (getConsentChoice() !== 'accepted') return;
  initializeAnalytics();
  window.gtag?.('event', 'page_view', {
    // Intake query strings and fragments must not enter analytics.
    page_location: window.location.origin + window.location.pathname,
    page_referrer: document.referrer ? document.referrer.split(/[?#]/)[0] : '',
  });
}

export function trackLead(formName: 'consultation' | 'press', submissionId: string) {
  try {
    if (getConsentChoice() !== 'accepted') return;
    initializeAnalytics();
    // No names, email, phone, message, injury details or case type are sent.
    window.gtag?.('event', formName === 'press' ? 'press_inquiry' : 'generate_lead', {
      form_name: formName, submission_id: submissionId,
      page_location: window.location.origin + window.location.pathname,
    });
  } catch { /* A blocked or broken analytics script must not fail an accepted inquiry. */ }
}
