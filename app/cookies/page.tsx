import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbSchema, webpageSchema } from "@/lib/jsonLd";

export const metadata: Metadata = createMetadata({
  title: "Cookie Policy",
  description: "Learn how PrimeDigitor may use essential, analytics, and communication cookies on this website.",
  path: "/cookies",
});

export default function CookiePolicyPage() {
  return (
    <main className="legal-page site-container">
      <h1>Cookie Policy</h1>
      <p>PrimeDigitor may use cookies or similar technologies to keep the website secure, understand performance, and support communication tools.</p>
      <p>You can control cookies through your browser settings. Disabling some cookies may affect website features such as chat or analytics.</p>
      <p>For cookie-related questions, contact hello@primedigitor.com.</p>
      <JsonLd data={[webpageSchema("Cookie Policy", "How PrimeDigitor may use essential, analytics, and communication cookies.", "/cookies"), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Cookies", path: "/cookies" }])]} />
    </main>
  );
}
