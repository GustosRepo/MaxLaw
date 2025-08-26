import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

const CarAccidentsPageClient = dynamic(() => import('./CarAccidentsPageClient'))

export const metadata: Metadata = {
  title: 'Las Vegas Car Accident Lawyer | Saggese & Associates',
  description: 'Experienced Las Vegas car accident attorney. Free consultations. We pursue maximum compensation for injuries from motor vehicle crashes. Call (702) 778-8883.',
  keywords: 'Las Vegas car accident lawyer, auto accident attorney, motor vehicle accident, Nevada car crash lawyer, personal injury attorney',
  alternates: { canonical: 'https://www.maxlawnv.com/practice/car-accidents' },
  openGraph: {
    title: 'Las Vegas Car Accident Lawyer | Saggese & Associates',
    description: 'Get maximum compensation for your car accident injuries. Free consultation with experienced Las Vegas attorney.',
    url: 'https://www.maxlawnv.com/practice/car-accidents',
    images: ['/og-car-accidents.jpg'],
  },
};

export default function CarAccidentsPage() {
  return <CarAccidentsPageClient />;
}
