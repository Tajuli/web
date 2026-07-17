export const siteConfig = {
  name: "PrimeDigitor",
  legalName: "PrimeDigitor",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.primedigitor.com",
  description:
    "PrimeDigitor is a Bangladesh-based digital marketing agency helping businesses generate qualified leads with SEO, local SEO, Google Ads, Meta Ads, website development, content, branding, and software solutions.",
  locale: "en_US",
  twitterHandle: "@PrimeDigitor",
  email: "hello@primedigitor.com",
  phone: "+8801832729052",
  addressCountry: "BD",
  areaServed: ["Bangladesh", "Worldwide"],
  defaultImage: "/images/hero/hero.webp",
};

export function absoluteUrl(path = "/") {
  if (/^https?:\/\//i.test(path)) return path;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url.replace(/\/$/, "")}${normalizedPath}`;
}

export function pathFromUrl(path = "/") {
  if (/^https?:\/\//i.test(path)) return new URL(path).pathname;
  return path.startsWith("/") ? path : `/${path}`;
}

export function toIsoDate(date?: string) {
  if (!date) return undefined;
  const parsed = new Date(date);
  return Number.isNaN(parsed.getTime()) ? undefined : parsed.toISOString();
}
