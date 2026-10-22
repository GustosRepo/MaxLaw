import { SITE_URL } from '@/lib/constants'
import {
  BUSINESS_ID,
  createFaqPageData,
  legalServiceData,
  serializeJsonLd,
} from '@/lib/structured-data'

interface PracticeStructuredDataProps {
  slug: string
  serviceType: string
  keywords?: string[]
  description?: string
  imagePath?: string
  // Supply only questions and answers that visitors can read on this page.
  faqs?: { question: string; answer: string }[]
}

export default function PracticeStructuredData({
  slug,
  serviceType,
  keywords = [],
  description,
  imagePath = '/home-logo.png',
  faqs = [],
}: PracticeStructuredDataProps) {
  const url = SITE_URL + slug
  const serviceId = `${url}#service`
  const page = {
    ...(faqs.length
      ? createFaqPageData(url, faqs)
      : {
          '@type': 'WebPage',
          '@id': `${url}#webpage`,
          url,
          mainEntity: { '@id': serviceId },
        }),
    name: serviceType,
    description,
    keywords: keywords.length ? keywords.join(', ') : undefined,
    about: { '@id': serviceId },
  }

  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'LegalService', ...legalServiceData },
      {
        '@type': 'Service',
        '@id': serviceId,
        name: serviceType,
        serviceType,
        url,
        image: SITE_URL + imagePath,
        description,
        areaServed: ['Las Vegas', 'Clark County', 'Nevada'],
        provider: { '@id': BUSINESS_ID },
        mainEntityOfPage: { '@id': page['@id'] },
        potentialAction: {
          '@type': 'CommunicateAction',
          target: `${SITE_URL}/contact`,
          name: 'Free Consultation',
        },
      },
      page,
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  )
}
