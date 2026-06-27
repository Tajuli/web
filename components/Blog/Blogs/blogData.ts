import GoogleAds from "./Content/google-ads";
import MetaAds from "./Content/meta-ads";
import Marketing from "./Content/marketing";
import ContentMarketing from "./Content/content";

import { BlogPost } from "./types";

export const blogPosts: BlogPost[] = [
  {
    slug: "google-ads",

    title: "Google Ads Guide for Beginners",

    description:
      "Learn how to create profitable Google Ads campaigns from scratch.",

    excerpt:
      "Everything you need to know before launching your first Google Ads campaign.",

    category: "Google Ads",

    cover: "/images/blog/google-ads.jpg",

    author: "PrimeDigitor",

    publishedAt: "2026-06-27",

    readingTime: "8 min",

    featured: true,

    component: GoogleAds,
  },

  {
    slug: "meta-ads",

    title: "Meta Ads Complete Guide",

    description:
      "Learn Facebook & Instagram advertising step by step.",

    excerpt:
      "Everything about Meta Ads for modern businesses.",

    category: "Meta Ads",

    cover: "/images/blog/meta-ads.jpg",

    author: "PrimeDigitor",

    publishedAt: "2026-06-20",

    readingTime: "7 min",

    featured: true,

    component: MetaAds,
  },

  {
    slug: "digital-marketing",

    title: "Digital Marketing Strategy",

    description:
      "Build a successful digital marketing strategy in 2026.",

    excerpt:
      "The complete roadmap for growing your business online.",

    category: "Marketing",

    cover: "/images/blog/marketing.jpg",

    author: "PrimeDigitor",

    publishedAt: "2026-06-15",

    readingTime: "9 min",

    featured: true,

    component: Marketing,
  },

  {
    slug: "content-marketing",

    title: "Content Marketing That Converts",

    description:
      "Create content that attracts visitors and converts them into customers.",

    excerpt:
      "Learn proven content marketing strategies for long-term business growth.",

    category: "Content",

    cover: "/images/blog/content.jpg",

    author: "PrimeDigitor",

    publishedAt: "2026-06-10",

    readingTime: "10 min",

    featured: false,

    component: ContentMarketing,
  },
];
