import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PrimeDigitor | Growth-Driven Digital Marketing Agency",
  description: "PrimeDigitor is a premium digital marketing agency focused on SEO, paid ads, web design, CRO and growth systems for ambitious brands."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
