import type { Metadata } from 'next';
import HomeClient from './components/HomeClient';

export const metadata: Metadata = {
  title: 'Las Vegas Personal Injury & Criminal Defense Lawyer | Saggese & Associates',
  description: 'Award-winning Las Vegas law firm handling personal injury and criminal defense matters. Free consultations. No fees unless we win. Call (702) 778-8883.',
  alternates: { canonical: 'https://www.maxlawnv.com/' },
  openGraph: {
    type: 'website',
    url: 'https://www.maxlawnv.com/',
    title: 'Las Vegas Personal Injury & Criminal Defense Lawyer | Saggese & Associates',
    description: 'Award-winning Las Vegas law firm handling personal injury and criminal defense matters. Free consultations. No fees unless we win.',
    images: [
      {
        url: 'https://www.maxlawnv.com/og-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Marc A. Saggese – Las Vegas Personal Injury & Criminal Defense Attorney',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Las Vegas Personal Injury & Criminal Defense Lawyer',
    description: 'Free consultations. No fees unless we win. Call (702) 778-8883.',
    images: ['https://www.maxlawnv.com/og-hero.jpg'],
  },
};

export default function HomePage() {
  return <HomeClient />;
}
