import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbSchema, webpageSchema } from "@/lib/jsonLd";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description: "Learn how PrimeDigitor handles contact information and website analytics data.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <main className="legal-page site-container">
      <h1>Privacy Policy</h1>
      <p>PrimeDigitor collects only the information needed to respond to inquiries, provide services, and improve our website experience.</p>
      <p>Contact form submissions may include your name, email address, phone number, company details, and project requirements. We do not sell personal information.</p>
      <p>To request an update or deletion of your information, contact hello@primedigitor.com.</p>
      <JsonLd data={[webpageSchema("Privacy Policy", "How PrimeDigitor handles contact information and website analytics data.", "/privacy-policy"), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy-policy" }])]} />
    </main>
  );
}
