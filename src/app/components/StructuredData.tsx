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
  description: 'Las Vegas personal injury law firm helping injured, not-at-fault accident victims with car accident, motorcycle accident, truck accident, and wrongful death cases',
  url: 'https://www.maxlawnv.com',
  telephone: '+1-702-778-8883',
  email: 'info@maxlawnv.com',
  address: {
    '@type': 'PostalAddress',
  streetAddress: '732 S 6th St #200c',
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
  serviceType: ['Personal Injury Law', 'Car Accident Law', 'Motorcycle Accident Law', 'Truck Accident Law', 'Wrongful Death Law'],
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
          name: 'Car Accident Consultation',
          description: 'Free consultation for injured car accident victims'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Motorcycle Accident Consultation',
          description: 'Free consultation for motorcycle accident injury cases'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Truck Accident Consultation',
          description: 'Free consultation for commercial truck accident injury cases'
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
  streetAddress: '732 S 6th St #200c',
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
  logo: 'https://www.maxlawnv.com/home-logo.png',
  telephone: '+1-702-778-8883',
  email: 'info@maxlawnv.com',
  address: {
    '@type': 'PostalAddress',
  streetAddress: '732 S 6th St #200c',
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
