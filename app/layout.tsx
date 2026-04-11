import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Footer } from "@/components/layout/Footer";
import { Ticker } from "@/components/ui/Ticker";
import { Modal } from "@/components/ui/Modal";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.bajus.org.bd'),

  title: {
    default: 'BAJUS — Bangladesh Bullion and Jewellers Association',
    template: '%s | BAJUS',
  },

  description:
    "Bangladesh's premier gold industry authority. Live gold prices in BDT, market insights, research, member directory, and investment data for bullion traders, jewellers & investors.",

  keywords: [
    'BAJUS', 'Bangladesh gold price', 'bullion Bangladesh',
    'jewellers association Bangladesh', 'gold rate today BDT',
    'সোনার দাম বাংলাদেশ', 'gold investment Bangladesh',
    '22 karat gold price Bangladesh', 'BAJUS member',
  ],

  authors: [{ name: 'BAJUS', url: 'https://www.bajus.org.bd' }],
  creator: 'Bangladesh Bullion and Jewellers Association',
  publisher: 'BAJUS',

  openGraph: {
    type: 'website',
    locale: 'en_BD',
    alternateLocale: 'bn_BD',
    url: 'https://www.bajus.org.bd',
    siteName: 'BAJUS',
    title: "BAJUS — Bangladesh's Premier Gold Industry Authority",
    description:
      'Live gold prices, market insights, research hub & member directory for Bangladesh\'s bullion and jewellery trade.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'BAJUS — Bangladesh Bullion and Jewellers Association',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@bajus_bd',
    creator: '@bajus_bd',
    title: "BAJUS — Bangladesh's Premier Gold Industry Authority",
    description:
      "Live gold prices in BDT, market data, research & member directory for Bangladesh's gold industry.",
    images: ['/opengraph-image'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: [
      { url: '/icon', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-icon', type: 'image/png', sizes: '180x180' },
    ],
    shortcut: '/icon',
  },

  manifest: '/manifest.json',

  alternates: {
    canonical: 'https://www.bajus.org.bd',
    languages: {
      'en-BD': 'https://www.bajus.org.bd/en',
      'bn-BD': 'https://www.bajus.org.bd/bn',
    },
  },

  verification: {
    google: 'REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_TOKEN',
  },

  category: 'finance',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${playfair.variable} antialiased font-sans flex flex-col min-h-screen relative`}
      >
        <Ticker />
        <Navbar />
        <MobileMenu />
        <div className="flex-grow flex flex-col">
          {children}
        </div>
        <Footer />
        <Modal />
      </body>
    </html>
  );
}
