import { Blog } from "./types";
export type { Blog } from "./types";
import seoGuide from "./articles/seo-for-small-business-2026";
import googleAds from "./articles/google-ads-vs-facebook-ads";
import localSeo from "./articles/local-seo-checklist";
import websiteSpeed from "./articles/website-speed-guide";
import contentMarketing from "./articles/content-marketing-strategy";
import socialMedia from "./articles/social-media-growth";

export const blogs: Blog[] = [
  seoGuide,
  googleAds,
  localSeo,
  websiteSpeed,
  contentMarketing,
  socialMedia,
];

export function getAllBlogs() {
  return blogs;
}

export function getFeaturedBlogs() {
  return blogs.filter((blog) => blog.featured);
}

export function getBlogBySlug(slug: string) {
  return blogs.find((blog) => blog.slug === slug);
}

export function getRelatedBlogs(
  slug: string,
  category: string,
  limit = 3
) {
  return blogs
    .filter(
      (blog) =>
        blog.slug !== slug &&
        blog.category === category
    )
    .slice(0, limit);
}
