import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

const MotorcycleAccidentsPageClient = dynamic(() => import('./MotorcycleAccidentsPageClient'))

export const metadata: Metadata = {
  title: 'Las Vegas Motorcycle Accident Lawyer | Saggese & Associates',
  description: 'Expert motorcycle accident representation in Las Vegas. We understand helmet law, lane-splitting, and complex injury claims. Free consultation. Call (702) 778-8883.',
  keywords: 'Las Vegas motorcycle accident lawyer, Nevada motorcycle attorney, motorcycle crash lawyer, biker injury attorney',
  alternates: { canonical: 'https://www.maxlawnv.com/practice/motorcycle-accidents' },
  openGraph: {
    title: 'Las Vegas Motorcycle Accident Lawyer | Saggese & Associates',
    description: 'Expert representation for motorcycle accident victims. We fight for motorcyclists\' rights.',
    url: 'https://www.maxlawnv.com/practice/motorcycle-accidents',
    images: ['/og-motorcycle-accidents.jpg'],
  },
};

export default function MotorcycleAccidentsPage() {
  return <MotorcycleAccidentsPageClient />;
}
