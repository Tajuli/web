import type { MetadataRoute } from "next";
import { getAllBlogs } from "@/data/blogs";

const BASE_URL = "https://www.primedigitor.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static Pages
  const pages = [
    "",
    "/about",
    "/services",
    "/works",
    "/blogs",
    "/contact",
  ];

  const staticPages: MetadataRoute.Sitemap = pages.map((page) => ({
    url: `${BASE_URL}${page}`,
    lastModified: now,
    changeFrequency:
      page === "/blogs"
        ? "daily"
        : page === ""
        ? "weekly"
        : "monthly",
    priority:
      page === ""
        ? 1
        : page === "/blogs"
        ? 0.95
        : 0.8,
  }));

  // Dynamic Blog Pages
  const blogPages: MetadataRoute.Sitemap = getAllBlogs().map((blog) => ({
    url: `${BASE_URL}/blogs/${blog.slug}`,
    lastModified: blog.publishedAt
      ? new Date(blog.publishedAt)
      : now,
    changeFrequency: "monthly",
    priority: blog.featured ? 0.9 : 0.8,
  }));

  return [...staticPages, ...blogPages];
}
