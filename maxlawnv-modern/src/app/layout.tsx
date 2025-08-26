import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.maxlawnv.com'),
  title: {
    template: '%s | The Law Offices of Saggese & Associates',
    default: 'Las Vegas Personal Injury & Criminal Defense Lawyer | Saggese & Associates',
  },
  description: 'Award-winning Las Vegas law firm specializing in personal injury and criminal defense. Free consultations, no fees unless we win. Call (702) 778-8883.',
  keywords: ['Las Vegas lawyer', 'personal injury attorney', 'criminal defense lawyer', 'Nevada law firm', 'Clark County attorney', 'Marc Saggese'],
  authors: [{ name: 'The Law Offices of Saggese & Associates' }],
  creator: 'The Law Offices of Saggese & Associates',
  publisher: 'The Law Offices of Saggese & Associates',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: 'your-google-verification-code',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.maxlawnv.com',
    siteName: 'The Law Offices of Saggese & Associates',
    title: 'Las Vegas Personal Injury & Criminal Defense Lawyer',
    description: 'Award-winning Las Vegas law firm specializing in personal injury and criminal defense. Free consultations available.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Law Offices of Saggese & Associates - Las Vegas Lawyers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Las Vegas Personal Injury & Criminal Defense Lawyer',
    description: 'Award-winning law firm. Free consultations. Call (702) 778-8883.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.maxlawnv.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
