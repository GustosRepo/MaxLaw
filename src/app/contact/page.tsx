import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

const ContactPageClient = dynamic(() => import('./ContactPageClient'));

export const metadata: Metadata = {
  title: 'Contact Our Las Vegas Law Firm',
  description: 'Contact The Law Offices of Saggese & Associates for a free consultation. Located in Las Vegas, Nevada. Call (702) 778-8883 or fill out our contact form.',
  keywords: 'contact Las Vegas lawyer, free consultation, Nevada attorney, law firm location, legal help Las Vegas',
  alternates: { canonical: 'https://www.maxlawnv.com/contact' },
  openGraph: {
    title: 'Contact Our Las Vegas Law Firm | Free Consultation',
    description: 'Get in touch with experienced Las Vegas attorneys. Free consultations available.',
    url: 'https://www.maxlawnv.com/contact',
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
