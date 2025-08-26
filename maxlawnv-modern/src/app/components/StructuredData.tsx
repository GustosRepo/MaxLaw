interface StructuredDataProps {
  type: 'LegalService' | 'Person' | 'Organization' | 'BreadcrumbList' | 'FAQPage'
  data: Record<string, unknown>
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseData = {
      '@context': 'https://schema.org',
      '@type': type,
      ...data
    }

    return JSON.stringify(baseData)
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: getStructuredData() }}
    />
  )
}

// Predefined structured data objects for common use cases
export const legalServiceData = {
  name: 'The Law Offices of Saggese & Associates',
  description: 'Las Vegas law firm specializing in personal injury and criminal defense cases',
  url: 'https://www.maxlawnv.com',
  telephone: '+1-702-778-8883',
  email: 'info@maxlawnv.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '732 S. 6th Street Suite 201',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89101',
    addressCountry: 'US'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 36.1608364724385,
    longitude: -115.1462139236927
  },
  openingHours: 'Mo-Fr 08:00-17:00',
  areaServed: {
    '@type': 'State',
    name: 'Nevada'
  },
  serviceType: ['Personal Injury Law', 'Criminal Defense Law'],
  priceRange: 'Free Consultation',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Legal Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Personal Injury Consultation',
          description: 'Free consultation for personal injury cases'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Criminal Defense Consultation',
          description: 'Criminal defense legal consultation'
        }
      }
    ]
  }
}

export const attorneyData = {
  name: 'Marc A. Saggese',
  jobTitle: 'Attorney',
  description: 'Experienced Las Vegas attorney specializing in personal injury and criminal defense law',
  url: 'https://www.maxlawnv.com/about/marc-a-saggese',
  telephone: '+1-702-778-8883',
  email: 'info@maxlawnv.com',
  worksFor: {
    '@type': 'Organization',
    name: 'The Law Offices of Saggese & Associates',
    url: 'https://www.maxlawnv.com'
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '732 S. 6th Street Suite 201',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89101',
    addressCountry: 'US'
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'University of Nevada, Las Vegas - William S. Boyd School of Law'
  },
  knowsAbout: ['Personal Injury Law', 'Criminal Defense Law', 'Nevada Law', 'Trial Advocacy'],
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'Law Degree'
  }
}

export const organizationData = {
  name: 'The Law Offices of Saggese & Associates',
  description: 'Premier Las Vegas law firm providing expert legal representation in personal injury and criminal defense matters',
  url: 'https://www.maxlawnv.com',
  logo: 'https://www.maxlawnv.com/logo.png',
  telephone: '+1-702-778-8883',
  email: 'info@maxlawnv.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '732 S. 6th Street Suite 201',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89101',
    addressCountry: 'US'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 36.1608364724385,
    longitude: -115.1462139236927
  },
  openingHours: 'Mo-Fr 08:00-17:00',
  founder: {
    '@type': 'Person',
    name: 'Marc A. Saggese'
  },
  areaServed: [
    {
      '@type': 'State',
      name: 'Nevada'
    },
    {
      '@type': 'City',
      name: 'Las Vegas'
    }
  ],
  sameAs: [
    'https://www.facebook.com/saggeselaw',
    'https://www.linkedin.com/company/saggese-associates',
    'https://www.avvo.com/attorneys/89101-nv-marc-saggese-1234567.html'
  ]
}
