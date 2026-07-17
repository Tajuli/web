import type { MetadataRoute } from "next";
import { getAllBlogs } from "@/data/blogs";
import { getAllServices } from "@/data/services";
import { caseStudies } from "@/data/caseStudies";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages: MetadataRoute.Sitemap = ["/", "/blogs", "/case-studies", "/#services", "/#about", "/#contact"].map((path) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency: path === "/blogs" ? "daily" : "weekly",
    priority: path === "/" ? 1 : 0.8,
  }));
  const servicePages = getAllServices().map((service) => ({ url: absoluteUrl(`/services/${service.slug}`), lastModified: service.lastUpdated ? new Date(service.lastUpdated) : now, changeFrequency: "monthly" as const, priority: 0.9 }));
  const blogPages = getAllBlogs().map((blog) => ({ url: absoluteUrl(`/blogs/${blog.slug}`), lastModified: new Date(blog.publishedAt), changeFrequency: "monthly" as const, priority: blog.featured ? 0.9 : 0.75 }));
  const caseStudyPages = caseStudies.filter((study) => study.published).map((study) => ({ url: absoluteUrl(`/case-studies/${study.slug}`), lastModified: new Date(study.completedAt || study.createdAt), changeFrequency: "monthly" as const, priority: study.featured ? 0.85 : 0.7 }));
  return [...staticPages, ...servicePages, ...blogPages, ...caseStudyPages];
}
