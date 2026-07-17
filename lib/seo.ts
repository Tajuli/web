import type { Metadata } from "next";
import { absoluteUrl, pathFromUrl, siteConfig, toIsoDate } from "./site";

type SeoInput = { title?: string; description?: string; path?: string; image?: string; type?: "website" | "article"; keywords?: string[]; publishedTime?: string; modifiedTime?: string; authors?: string[]; noIndex?: boolean };
const defaultKeywords = ["PrimeDigitor", "digital marketing agency Bangladesh", "SEO services Bangladesh", "Google Ads agency", "Facebook Ads agency", "website development Bangladesh"];
const cleanTitle = (title?: string) => (title || "Digital Marketing Agency in Bangladesh").replace(/\s*\|\s*PrimeDigitor$/i, "");

export function createMetadata(input: SeoInput = {}): Metadata {
  const title = cleanTitle(input.title);
  const description = input.description || siteConfig.description;
  const path = pathFromUrl(input.path || "/");
  const canonical = absoluteUrl(path);
  const image = absoluteUrl(input.image || siteConfig.defaultImage);
  const fullTitle = `${title} | ${siteConfig.name}`;
  const publishedTime = toIsoDate(input.publishedTime);
  const modifiedTime = toIsoDate(input.modifiedTime) || publishedTime;

  return {
    metadataBase: new URL(siteConfig.url),
    title: { default: fullTitle, template: `%s | ${siteConfig.name}` },
    description,
    keywords: [...defaultKeywords, ...(input.keywords || [])],
    authors: (input.authors?.length ? input.authors : [siteConfig.name]).map((name) => ({ name })),
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "Digital Marketing",
    alternates: { canonical },
    robots: { index: !input.noIndex, follow: !input.noIndex, googleBot: { index: !input.noIndex, follow: !input.noIndex, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
    openGraph: { type: input.type || "website", locale: siteConfig.locale, url: canonical, siteName: siteConfig.name, title: fullTitle, description, images: [{ url: image, width: 1200, height: 630, alt: fullTitle }], ...(input.type === "article" && { publishedTime, modifiedTime, authors: input.authors || [siteConfig.name] }) },
    twitter: { card: "summary_large_image", site: siteConfig.twitterHandle, creator: siteConfig.twitterHandle, title: fullTitle, description, images: [image] },
  };
}
