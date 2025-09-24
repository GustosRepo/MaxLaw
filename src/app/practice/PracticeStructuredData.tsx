import {
  FIRM_NAME,
  FIRM_ADDRESS_LINE1,
  FIRM_CITY,
  FIRM_STATE,
  FIRM_ZIP,
  FIRM_PHONE_E164,
  SITE_URL,
  FIRM_LAT,
  FIRM_LNG
} from '@/lib/constants';

interface PracticeStructuredDataProps {
  slug: string;
  serviceType: string;
  keywords?: string[];
  description?: string;
  imagePath?: string;
  faqs?: { question: string; answer: string }[];
  ratingValueEnvVar?: string; // default NEXT_PUBLIC_REVIEW_RATING
  reviewCountEnvVar?: string; // default NEXT_PUBLIC_REVIEW_COUNT
}

// Server component emitting JSON-LD for a practice/service page.
export default function PracticeStructuredData({
  slug,
  serviceType,
  keywords = [],
  description,
  imagePath = '/home-logo.png',
  faqs = [],
  ratingValueEnvVar = 'NEXT_PUBLIC_REVIEW_RATING',
  reviewCountEnvVar = 'NEXT_PUBLIC_REVIEW_COUNT'
}: PracticeStructuredDataProps) {
  const url = SITE_URL + slug;
  const ratingVal = typeof process !== 'undefined' ? process.env[ratingValueEnvVar] : undefined;
  const ratingCount = typeof process !== 'undefined' ? process.env[reviewCountEnvVar] : undefined;
  interface LegalServiceSchema {
    '@context': string;
    '@type': string | string[];
    name: string;
    url: string;
    image: string;
    description?: string;
    areaServed?: (string)[];
    serviceType: string;
    keywords?: string;
    telephone: string;
    address: {
      '@type': 'PostalAddress';
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      addressCountry: string;
    };
    geo?: {
      '@type': 'GeoCoordinates';
      latitude?: number;
      longitude?: number;
    };
    potentialAction?: {
      '@type': string;
      target: string;
      name: string;
    };
  }

  const data: LegalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: FIRM_NAME,
    url,
    image: SITE_URL + imagePath,
    description: description || undefined,
    areaServed: [FIRM_CITY, 'Clark County', 'Nevada'],
    serviceType,
    keywords: keywords.length ? keywords.join(', ') : undefined,
    telephone: FIRM_PHONE_E164,
    address: {
      '@type': 'PostalAddress',
      streetAddress: FIRM_ADDRESS_LINE1,
      addressLocality: FIRM_CITY,
      addressRegion: FIRM_STATE,
      postalCode: FIRM_ZIP,
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: FIRM_LAT,
      longitude: FIRM_LNG,
    },
    potentialAction: {
      '@type': 'ContactAction',
      target: `${SITE_URL}/contact`,
      name: 'Free Consultation'
    }
  };

  if (ratingVal && ratingCount) {
    (data as LegalServiceSchema & { aggregateRating?: { '@type': 'AggregateRating'; ratingValue: number; reviewCount: number } }).aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: Number(ratingVal),
      reviewCount: Number(ratingCount)
    };
  }

  if (faqs.length) {
    (data as LegalServiceSchema & { mainEntity?: unknown; ['@type']?: string | string[] }).mainEntity = faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer }
    }));
    (data as LegalServiceSchema & { ['@type']?: string | string[] })['@type'] = ['LegalService', 'FAQPage'];
  }

  // Clean undefined keys
  (Object.keys(data) as (keyof LegalServiceSchema)[]).forEach((k) => {
    if (data[k] === undefined) {
      delete (data as Partial<LegalServiceSchema>)[k];
    }
  });

  return (
    <script
      type="application/ld+json"
      // Using JSON.stringify with replacer & spacing = 0 for minified output
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
