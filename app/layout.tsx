import "./globals.css";
import type { Metadata } from "next";
import CrispChat from "@/components/CrispChat/CrispChat";
import Navbar from "@/components/sections/Navbar/Navbar";
import Footer from "@/components/sections/Footer/Footer";

import { createMetadata } from "@/lib/seo";
import { JsonLd, organizationSchema, professionalServiceSchema, websiteSchema } from "@/lib/jsonLd";

export const metadata: Metadata = createMetadata({
  title: "Digital Marketing Agency in Bangladesh",
  description: "PrimeDigitor helps businesses generate qualified leads with SEO, local SEO, Google Ads, Facebook Ads, website development, content marketing, branding, and software solutions.",
  path: "/",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <JsonLd data={[organizationSchema(), websiteSchema(), professionalServiceSchema()]} />
        {children}
        <Footer />

        <CrispChat />
      </body>
    </html>
  );
}
