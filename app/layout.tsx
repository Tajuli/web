import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PrimeDigitor | Digital Marketing Agency in Bangladesh",
  description:
    "PrimeDigitor is a performance-driven digital marketing agency helping brands grow with SEO, paid ads, web design, content systems and conversion strategy.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
