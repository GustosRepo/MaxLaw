import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

const AboutPageClient = dynamic(() => import('./AboutPageClient'));

export const metadata: Metadata = {
  title: 'About Our Las Vegas Law Firm',
  description: 'Learn about The Law Offices of Saggese & Associates, a premier Las Vegas law firm specializing in personal injury and criminal defense. Meet attorney Marc A. Saggese.',
  keywords: 'Las Vegas law firm, attorney Marc Saggese, personal injury lawyers, criminal defense attorneys, Nevada legal experience, law firm history, attorney biography',
  alternates: { canonical: 'https://www.maxlawnv.com/about' },
  openGraph: {
    title: 'About The Law Offices of Saggese & Associates',
    description: 'Experienced Las Vegas attorneys dedicated to personal injury and criminal defense cases.',
    url: 'https://www.maxlawnv.com/about',
    images: ['/og-about.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Our Las Vegas Law Firm',
    description: 'Meet the experienced attorneys at Saggese & Associates.',
    images: ['/og-about.jpg'],
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
