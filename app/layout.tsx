import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.primedigitor.com"),

  title: {
    default: "PrimeDigitor | Digital Marketing Agency in Bangladesh",
    template: "%s | PrimeDigitor",
  },

  description:
    "PrimeDigitor is a premium digital marketing agency in Bangladesh specializing in SEO, Google Ads, Facebook Ads, Web Design, Content Marketing, Branding, and business growth solutions.",

  keywords: [
    "Digital Marketing Agency",
    "Digital Marketing Agency Bangladesh",
    "SEO Services",
    "SEO Agency Bangladesh",
    "Google Ads",
    "Facebook Ads",
    "Web Design",
    "Content Marketing",
    "Local SEO",
    "PrimeDigitor",
  ],

  authors: [
    {
      name: "PrimeDigitor",
      url: "https://www.primedigitor.com",
    },
  ],

  creator: "PrimeDigitor",
  publisher: "PrimeDigitor",
  category: "Digital Marketing",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.primedigitor.com",
    siteName: "PrimeDigitor",
    title: "PrimeDigitor | Digital Marketing Agency in Bangladesh",
    description:
      "Professional SEO, Google Ads, Facebook Ads, Website Design and Digital Marketing Services.",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "PrimeDigitor",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "PrimeDigitor | Digital Marketing Agency",
    description:
      "Professional SEO, Google Ads, Facebook Ads and Web Design Services.",
    images: ["/images/og-cover.jpg"],
  },

  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
    other: {
      "msvalidate.01": "YOUR_BING_VERIFICATION_CODE",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
