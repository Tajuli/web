import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbSchema, webpageSchema } from "@/lib/jsonLd";

export const metadata: Metadata = createMetadata({
  title: "Terms of Service",
  description: "Review the general terms for using PrimeDigitor's website and requesting digital marketing services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <main className="legal-page site-container">
      <h1>Terms of Service</h1>
      <p>By using this website or submitting an inquiry, you agree to provide accurate information and use the website lawfully.</p>
      <p>Service scopes, timelines, deliverables, and pricing are confirmed in written proposals or agreements before work begins.</p>
      <p>Website content is provided for general information and does not guarantee specific marketing results.</p>
      <JsonLd data={[webpageSchema("Terms of Service", "General terms for using PrimeDigitor's website and requesting services.", "/terms"), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Terms", path: "/terms" }])]} />
    </main>
  );
}
