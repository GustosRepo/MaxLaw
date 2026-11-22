import type { Metadata } from 'next';
import HomeClient from './components/HomeClient';
import StructuredData, { legalServiceData, attorneyData } from './components/StructuredData';
import { FIRM_NAME, SITE_URL } from '@/lib/constants';
import { BUSINESS_ID, WEBSITE_ID } from '@/lib/structured-data';

const description = 'Saggese & Associates represents clients in personal injury and criminal defense matters in Las Vegas. Request a free initial consultation.';

export const metadata: Metadata = {
  title: {
    absolute: 'Las Vegas Injury Lawyer & Criminal Defense Attorney | Max Law',
  },
  description,
  keywords: 'injury lawyer las vegas, injury law firm las vegas, injury attorney las vegas, car accident attorney las vegas, car accident lawyer las vegas, injury lawyer near me, lawyer las vegas',
  alternates: { canonical: 'https://www.maxlawnv.com/' },
  openGraph: {
    type: 'website',
    url: 'https://www.maxlawnv.com/',
    title: 'Las Vegas Injury Lawyer & Criminal Defense Attorney | Max Law',
    description,
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
    title: 'Las Vegas Injury Lawyer & Criminal Defense Attorney',
    description,
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
      <StructuredData type="WebSite" data={{
        '@id': WEBSITE_ID,
        url: `${SITE_URL}/`,
        name: 'Max Law',
        alternateName: FIRM_NAME,
        publisher: { '@id': BUSINESS_ID },
      }} />
      <HomeClient />
    </>
  );
}
