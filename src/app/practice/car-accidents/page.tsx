import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { SITE_URL } from '@/lib/constants'
import PracticeStructuredData from '../PracticeStructuredData'

const CarAccidentsPageClient = dynamic(() => import('./CarAccidentsPageClient'))

export const metadata: Metadata = {
  title: 'Las Vegas Car Accident Lawyer | Saggese & Associates',
  description: 'Experienced Las Vegas car accident lawyers pursuing maximum compensation for collision & injury victims. Free consultation – call (702) 778‑8883.',
  keywords: ['Las Vegas car accident lawyer','Nevada auto accident attorney','car crash injury claim','Las Vegas personal injury law firm'],
  alternates: { canonical: `${SITE_URL}/practice/car-accidents` },
  openGraph: {
    title: 'Las Vegas Car Accident Lawyer | Saggese & Associates',
    description: 'Pursuing maximum compensation for Nevada crash & injury victims. Free consultation.',
    url: `${SITE_URL}/practice/car-accidents`,
    images: [{ url: `${SITE_URL}/content/car-accident2.png`, width: 640, height: 426, alt: 'Las Vegas Car Accident Lawyer' }],
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Las Vegas Car Accident Lawyer',
    description: 'Injured in a crash? Free case review – Saggese & Associates.',
    images: [`${SITE_URL}/content/car-accident2.png`]
  }
};

export default function CarAccidentsPage() {
  return (
    <>
      <CarAccidentsPageClient />
      <PracticeStructuredData
        slug="/practice/car-accidents"
        serviceType="Las Vegas Car Accident Lawyer"
        description="Experienced Las Vegas car accident lawyers pursuing maximum compensation for collision & injury victims. Free consultation – call (702) 778‑8883."
        keywords={['las vegas car accident lawyer','auto accident attorney','car crash injury claim','nevada personal injury lawyer']}
        imagePath="/content/car-accident2.png"
      />
    </>
  );
}
