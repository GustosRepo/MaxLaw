import type { Metadata } from 'next';
import HomeClient from './components/HomeClient';
import StructuredData, { legalServiceData, attorneyData, organizationData } from './components/StructuredData';

export const metadata: Metadata = {
  title: {
    absolute: 'Las Vegas Car Accident Attorney & Personal Injury Lawyer | Max Law',
  },
  description: 'Injured in a Las Vegas car accident and not at fault? Max Law helps personal injury victims pursue compensation. Free consultation. No fee unless we win.',
  keywords: 'car accident attorney las vegas, car accident lawyer las vegas, personal injury lawyer las vegas, injury attorney, injury lawyer near me, lawyer las vegas',
  alternates: { canonical: 'https://www.maxlawnv.com/' },
  openGraph: {
    type: 'website',
    url: 'https://www.maxlawnv.com/',
    title: 'Las Vegas Car Accident Attorney & Personal Injury Lawyer | Max Law',
    description: 'Injured and not at fault? Free consultation for Las Vegas car accident and personal injury cases. No fee unless we win.',
    images: [
      {
    url: 'https://www.maxlawnv.com/home-logo.png?v=2',
    width: 1200,
    height: 630,
        alt: 'The Law Offices of Saggese & Associates logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Las Vegas Car Accident Attorney & Personal Injury Lawyer',
    description: 'Free consultation for injured, not-at-fault accident victims. No fee unless we win.',
  images: ['https://www.maxlawnv.com/home-logo.png?v=2'],
  },
  icons: {
  icon: 'https://www.maxlawnv.com/icon.svg',
  shortcut: 'https://www.maxlawnv.com/icon.svg',
  apple: 'https://www.maxlawnv.com/icon.svg',
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
