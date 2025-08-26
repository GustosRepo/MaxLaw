import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

const MediaPageClient = dynamic(() => import('./MediaPageClient'));

export const metadata: Metadata = {
  title: 'Media & Press | The Law Offices of Saggese & Associates',
  description: 'Recent media appearances, press coverage, and news featuring The Law Offices of Saggese & Associates. Stay updated on our latest cases and legal insights.',
  keywords: 'Las Vegas lawyer media, attorney press coverage, legal news, Saggese Associates press, Nevada law firm news, attorney interviews',
  alternates: { canonical: 'https://www.maxlawnv.com/media' },
  openGraph: {
    title: 'Media & Press Coverage',
    description: 'Latest media appearances and press coverage of The Law Offices of Saggese & Associates.',
    url: 'https://www.maxlawnv.com/media',
    images: ['/og-media.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Media & Press | Saggese & Associates',
    description: 'Stay updated on our latest media appearances and legal insights.',
    images: ['/og-media.jpg'],
  },
};

export default function MediaPage() {
  return <MediaPageClient />;
}
