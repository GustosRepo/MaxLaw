import { serializeJsonLd } from '@/lib/structured-data'

export { legalServiceData, attorneyData } from '@/lib/structured-data'

interface StructuredDataProps {
  type: 'LegalService' | 'Service' | 'Person' | 'Organization' | 'BreadcrumbList' | 'FAQPage' | 'WebPage'
  data: Record<string, unknown>
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: serializeJsonLd({
          '@context': 'https://schema.org',
          '@type': type,
          ...data,
        }),
      }}
    />
  )
}
