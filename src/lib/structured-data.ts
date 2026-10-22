import {
  FIRM_NAME,
  FIRM_ADDRESS_LINE1,
  FIRM_CITY,
  FIRM_STATE,
  FIRM_ZIP,
  FIRM_PHONE_E164,
  SITE_URL,
} from './constants'

export const BUSINESS_ID = `${SITE_URL}/#organization`
export const ATTORNEY_ID = `${SITE_URL}/about/marc-a-saggese#person`

export function serializeJsonLd(data: Record<string, unknown>): string {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}

export function createFaqPageData(
  url: string,
  faqs: { question: string; answer: string }[],
) {
  return {
    '@type': 'FAQPage',
    '@id': `${url}#webpage`,
    url,
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  }
}

const address = {
  '@type': 'PostalAddress',
  streetAddress: FIRM_ADDRESS_LINE1,
  addressLocality: FIRM_CITY,
  addressRegion: FIRM_STATE,
  postalCode: FIRM_ZIP,
  addressCountry: 'US',
}

const services = [
  { name: 'Injury Consultation', serviceType: 'Injury Law', description: 'Free consultation for injury cases' },
  { name: 'Criminal Defense Consultation', serviceType: 'Criminal Defense Law', description: 'Criminal defense legal consultation' },
  { name: 'Car Accident Consultation', serviceType: 'Car Accident Law', description: 'Free consultation for injured car accident victims' },
  { name: 'Motorcycle Accident Consultation', serviceType: 'Motorcycle Accident Law', description: 'Free consultation for motorcycle accident injury cases' },
  { name: 'Truck Accident Consultation', serviceType: 'Truck Accident Law', description: 'Free consultation for commercial truck accident injury cases' },
  { name: 'Wrongful Death Law', serviceType: 'Wrongful Death Law' },
]

// LegalService inherits LocalBusiness and Organization. Use one firm identity
// everywhere, with page-specific service descriptions on separate Service nodes.
export const legalServiceData = {
  '@id': BUSINESS_ID,
  name: FIRM_NAME,
  description: 'Las Vegas injury and criminal defense law firm helping injured, not-at-fault victims and clients facing criminal charges',
  url: SITE_URL,
  logo: `${SITE_URL}/home-logo.png`,
  image: `${SITE_URL}/home-logo.png`,
  telephone: FIRM_PHONE_E164,
  email: 'info@maxlawnv.com',
  address,
  // Existing generators disagree on coordinates. Omit optional geo until verified.
  openingHours: 'Mo-Fr 08:00-17:00',
  areaServed: { '@type': 'State', name: 'Nevada' },
  priceRange: 'Free Consultation',
  founder: { '@type': 'Person', '@id': ATTORNEY_ID, name: 'Marc A. Saggese' },
  // This firm profile is linked in the site's visible media section.
  sameAs: ['https://www.facebook.com/SaggeseAndAssociates'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Legal Services',
    itemListElement: services.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        ...service,
        provider: { '@id': BUSINESS_ID },
      },
    })),
  },
}

export const attorneyData = {
  '@id': ATTORNEY_ID,
  name: 'Marc A. Saggese',
  jobTitle: 'Attorney',
  description: 'Experienced Las Vegas attorney specializing in injury and criminal defense law',
  url: `${SITE_URL}/about/marc-a-saggese`,
  telephone: FIRM_PHONE_E164,
  email: 'info@maxlawnv.com',
  worksFor: { '@id': BUSINESS_ID },
  address,
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Columbus School of Law, The Catholic University of America',
  },
  knowsAbout: ['Injury Law', 'Criminal Defense Law', 'Nevada Law', 'Trial Advocacy'],
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'Law Degree',
  },
  sameAs: [
    'https://www.linkedin.com/in/marc-saggese-4a84a34b/',
    'https://www.avvo.com/attorneys/89101-nv-marc-saggese-563159.html',
  ],
}
