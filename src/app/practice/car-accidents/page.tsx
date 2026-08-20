import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { SITE_URL } from '@/lib/constants'
import PracticeStructuredData from '../PracticeStructuredData'

const CarAccidentsPageClient = dynamic(() => import('./CarAccidentsPageClient'))

export const metadata: Metadata = {
  title: 'Las Vegas Car Accident Attorney | Saggese & Associates',
  description: 'Injured in a Las Vegas car accident and not at fault? Talk with a car accident attorney about medical treatment, insurance claims, and compensation.',
  keywords: ['Las Vegas car accident attorney','car accident attorney las vegas','car accident lawyer las vegas','Nevada auto accident attorney','car crash injury claim','Las Vegas personal injury law firm'],
  alternates: { canonical: `${SITE_URL}/practice/car-accidents` },
  openGraph: {
    title: 'Las Vegas Car Accident Attorney | Saggese & Associates',
    description: 'Free consultation for injured, not-at-fault crash victims in Las Vegas.',
    url: `${SITE_URL}/practice/car-accidents`,
    images: [{ url: `${SITE_URL}/content/car-accident2.png`, width: 640, height: 426, alt: 'Las Vegas Car Accident Attorney' }],
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Las Vegas Car Accident Attorney',
    description: 'Injured and not at fault? Free car accident consultation.',
    images: [`${SITE_URL}/content/car-accident2.png`]
  }
};

export default function CarAccidentsPage() {
  return (
    <>
      <CarAccidentsPageClient />
      <PracticeStructuredData
        slug="/practice/car-accidents"
        serviceType="Las Vegas Car Accident Attorney"
        description="Las Vegas car accident attorney helping injured, not-at-fault crash victims with medical treatment questions, insurance claims, and compensation."
        keywords={['las vegas car accident attorney','car accident attorney las vegas','car accident lawyer las vegas','auto accident attorney','car crash injury claim','nevada personal injury lawyer']}
        imagePath="/content/car-accident2.png"
        faqs={[
          {
            question: 'Can you help me find medical treatment after a car accident?',
            answer: 'Yes. If you are injured after a Las Vegas car accident, the firm can discuss treatment options and help you understand how medical care may relate to your injury claim.'
          },
          {
            question: 'What if I was not at fault for the crash?',
            answer: 'If another driver caused the accident, a car accident attorney can review the facts, insurance coverage, medical treatment, and possible compensation.'
          },
          {
            question: 'How much does a car accident consultation cost?',
            answer: 'The initial consultation is free. For injury cases, there is no fee unless the firm wins or resolves your case.'
          }
        ]}
      />
    </>
  );
}
