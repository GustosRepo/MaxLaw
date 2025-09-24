import type { Metadata } from 'next';
import HomeClient from './components/HomeClient';
import StructuredData, { legalServiceData, attorneyData, organizationData } from './components/StructuredData';

export const metadata: Metadata = {
  title: 'Las Vegas Personal Injury & Criminal Defense Lawyer | Saggese & Associates',
  description: 'Award-winning Las Vegas law firm handling personal injury and criminal defense matters. Free consultations. No fees unless we win. Call (702) 778-8883.',
  keywords: 'Las Vegas lawyer, personal injury attorney, criminal defense, Nevada law firm, Clark County attorney, Marc Saggese, car accident lawyer, DUI defense',
  alternates: { canonical: 'https://www.maxlawnv.com/' },
  openGraph: {
    type: 'website',
    url: 'https://www.maxlawnv.com/',
    title: 'Las Vegas Personal Injury & Criminal Defense Lawyer | Saggese & Associates',
    description: 'Award-winning Las Vegas law firm handling personal injury and criminal defense matters. Free consultations. No fees unless we win.',
    images: [
      {
        url: 'https://www.maxlawnv.com/home-logo.png',
        width: 14400,
        height: 7200,
        alt: 'The Law Offices of Saggese & Associates logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Las Vegas Personal Injury & Criminal Defense Lawyer',
    description: 'Free consultations. No fees unless we win. Call (702) 778-8883.',
    images: ['https://www.maxlawnv.com/home-logo.png'],
  },
  icons: {
    icon: 'https://www.maxlawnv.com/icon.png',
    shortcut: 'https://www.maxlawnv.com/icon.png',
    apple: 'https://www.maxlawnv.com/icon.png',
  },
};

// Accept searchParams to enable a lightweight "safe mode" for crash isolation: /?safe=1
// App Router passes searchParams as a plain object of string | string[] values.
// Relax the type to avoid constraint issues with Next's internal PageProps generic.
export default function HomePage() {
  return (
    <>
      <StructuredData type="LegalService" data={legalServiceData} />
      <StructuredData type="Person" data={attorneyData} />
      <StructuredData type="Organization" data={organizationData} />
      <HomeClient />
    </>
  );
}
