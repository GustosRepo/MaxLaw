import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import LayoutShell from './components/LayoutShell';
import { LiteModeProvider } from './components/LiteModeContext';

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "600", "700"],
  preload: false,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
  preload: false,
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

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
        url: 'https://www.maxlawnv.com/home-logo.png?v=2',
        width: 1200,
        height: 630,
        alt: 'The Law Offices of Saggese & Associates logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Las Vegas Personal Injury & Criminal Defense Lawyer',
    description: 'Award-winning law firm. Free consultations. Call (702) 778-8883.',
    images: ['https://www.maxlawnv.com/home-logo.png?v=2'],
  },
  icons: {
  icon: '/icon.svg',
  shortcut: '/icon.svg',
  apple: '/icon.svg',
  },
  themeColor: '#0e0e0e',
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
      <head>
        <link rel="preload" as="image" href="/home-logo.png" />
      </head>
      <body className="antialiased">
        <LiteModeProvider>
          <LayoutShell>
            {children}
          </LayoutShell>
        </LiteModeProvider>
      </body>
    </html>
  );
}
