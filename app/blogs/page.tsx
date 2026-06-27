import type { Metadata } from "next";
import Blogs from "@/components/Blog/Blogs/Blogs";

export const metadata: Metadata = {
  title: "Digital Marketing Blog | PrimeDigitor",
  description:
    "Explore expert articles on SEO, Google Ads, Meta Ads, Content Marketing, Digital Strategy, and online business growth from PrimeDigitor.",
  keywords: [
    "Digital Marketing",
    "SEO",
    "Google Ads",
    "Meta Ads",
    "Content Marketing",
    "PrimeDigitor",
    "Marketing Blog",
    "Bangladesh Digital Marketing",
  ],
  openGraph: {
    title: "Digital Marketing Blog | PrimeDigitor",
    description:
      "Latest articles on SEO, Google Ads, Meta Ads, Content Marketing, and digital growth.",
    type: "website",
    url: "https://primedigitor.com/blogs",
    siteName: "PrimeDigitor",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Blog | PrimeDigitor",
    description:
      "Read expert insights on SEO, PPC, Meta Ads, and Digital Marketing.",
  },
  alternates: {
    canonical: "https://primedigitor.com/blogs",
  },
};

export default function BlogsPage() {
  return <Blogs />;
}
