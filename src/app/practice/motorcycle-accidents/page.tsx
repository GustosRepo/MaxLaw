import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { SITE_URL } from '@/lib/constants'
import PracticeStructuredData from '../PracticeStructuredData'

const MotorcycleAccidentsPageClient = dynamic(() => import('./MotorcycleAccidentsPageClient'))

export const metadata: Metadata = {
  title: 'Las Vegas Motorcycle Accident Lawyer | Saggese & Associates',
  description: 'Las Vegas motorcycle crash & injury lawyers — helmet law knowledge, severe injury claims & insurer negotiation. Free consultation (702) 778‑8883.',
  keywords: ['Las Vegas motorcycle accident lawyer','Nevada motorcycle attorney','motorcycle crash injury claim'],
  alternates: { canonical: `${SITE_URL}/practice/motorcycle-accidents` },
  openGraph: {
    title: 'Las Vegas Motorcycle Accident Lawyer | Saggese & Associates',
    description: 'Helmet law, reconstruction & severe injury advocacy. Free consultation.',
    url: `${SITE_URL}/practice/motorcycle-accidents`,
    images: [{ url: `${SITE_URL}/og-motorcycle-accidents.jpg`, width: 1200, height: 630, alt: 'Las Vegas Motorcycle Accident Lawyer' }],
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Las Vegas Motorcycle Accident Lawyer',
    description: 'Motorcycle crash injury advocacy — free consultation.',
    images: [`${SITE_URL}/og-motorcycle-accidents.jpg`]
  }
};

export default function MotorcycleAccidentsPage() {
  return (
    <>
      <MotorcycleAccidentsPageClient />
      <PracticeStructuredData
        slug="/practice/motorcycle-accidents"
        serviceType="Las Vegas Motorcycle Accident Lawyer"
        description="Las Vegas motorcycle crash & injury lawyers — helmet law knowledge, severe injury claims & insurer negotiation. Free consultation."
        keywords={['las vegas motorcycle accident lawyer','motorcycle injury claim','biker crash attorney']}
        imagePath="/og-motorcycle-accidents.jpg"
        faqs={[
          { question: 'Do I have to wear a helmet in Nevada?', answer: 'Yes. Nevada law requires approved helmets for most motorcycle riders and passengers.' },
          { question: 'How long do I have to file a motorcycle accident claim?', answer: 'In Nevada, the statute of limitations for most injury claims is two years from the date of the crash.' }
        ]}
      />
    </>
  );
}
