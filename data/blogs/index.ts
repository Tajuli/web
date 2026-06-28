
export interface Blog {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  author: string;
  publishedAt: string;
  readingTime: string;
  featured?: boolean;
  tags: string[];
  seoTitle?: string;
  seoDescription?: string;
}

export const blogs: Blog[] = [
  {
    slug: "seo-for-small-business-2026",

    title: "SEO for Small Businesses: Complete Guide for 2026",

    excerpt:
      "Learn how small businesses can rank higher on Google with practical SEO strategies that actually work in 2026.",

    coverImage: "/images/blogs/seo-guide.jpg",

    category: "SEO",

    author: "PrimeDigitor",

    publishedAt: "June 20, 2026",

    readingTime: "8 min read",

    featured: true,

    tags: [
      "SEO",
      "Google",
      "Search Engine",
      "Marketing",
      "Small Business",
    ],

    seoTitle:
      "SEO Guide for Small Businesses (2026) | PrimeDigitor",

    seoDescription:
      "Improve your Google rankings with this complete SEO guide for small businesses.",

    content: `
<h2>Introduction</h2>

<p>
SEO continues to be one of the highest ROI digital marketing channels.
Businesses that invest in search engine optimization receive long-term,
consistent traffic without paying for every click.
</p>

<h2>Why SEO Matters</h2>

<p>
More than 90% of online experiences begin with a search engine.
If your website isn't ranking, your competitors are getting those customers.
</p>

<h2>Best Practices</h2>

<ul>
<li>Create high-quality content.</li>
<li>Optimize page speed.</li>
<li>Use proper heading hierarchy.</li>
<li>Target search intent.</li>
<li>Build quality backlinks.</li>
</ul>

<h2>Conclusion</h2>

<p>
SEO is a long-term investment. Businesses that stay consistent usually
see significant growth over time.
</p>
`,
  },

  {
    slug: "google-ads-vs-facebook-ads",

    title: "Google Ads vs Facebook Ads: Which One Should You Choose?",

    excerpt:
      "Compare Google Ads and Facebook Ads to determine which platform is right for your business.",

    coverImage: "/images/blogs/google-facebook.jpg",

    category: "Paid Marketing",

    author: "PrimeDigitor",

    publishedAt: "June 18, 2026",

    readingTime: "7 min read",

    tags: [
      "Google Ads",
      "Facebook Ads",
      "PPC",
      "Meta",
    ],

    seoTitle:
      "Google Ads vs Facebook Ads Comparison",

    seoDescription:
      "Discover the differences between Google Ads and Facebook Ads.",

    content: `
<h2>Google Ads</h2>

<p>
Google Ads captures users with purchase intent.
</p>

<h2>Facebook Ads</h2>

<p>
Facebook Ads are excellent for awareness,
retargeting and audience building.
</p>

<h2>Which One Wins?</h2>

<p>
The answer depends on your business goals,
industry and budget.
</p>
`,
  },

  {
    slug: "local-seo-checklist",

    title: "Local SEO Checklist for Service Businesses",

    excerpt:
      "Everything you need to improve local rankings and generate more calls.",

    coverImage: "/images/blogs/local-seo.jpg",

    category: "SEO",

    author: "PrimeDigitor",

    publishedAt: "June 15, 2026",

    readingTime: "6 min read",

    tags: [
      "Local SEO",
      "Google Business Profile",
      "SEO",
    ],

    content: `
<h2>Optimize Google Business Profile</h2>

<p>
Complete every section of your profile.
</p>

<h2>Collect Reviews</h2>

<p>
Positive reviews improve trust and rankings.
</p>
`,
  },

  {
    slug: "website-speed-guide",

    title: "Website Speed Optimization Guide",

    excerpt:
      "A faster website improves SEO, conversions and user experience.",

    coverImage: "/images/blogs/speed.jpg",

    category: "Web Development",

    author: "PrimeDigitor",

    publishedAt: "June 12, 2026",

    readingTime: "9 min read",

    tags: [
      "Performance",
      "Core Web Vitals",
      "Next.js",
    ],

    content: `
<h2>Speed Matters</h2>

<p>
Even one second of delay can reduce conversions.
</p>

<h2>Optimization Tips</h2>

<ul>
<li>Compress images</li>
<li>Lazy load assets</li>
<li>Use caching</li>
<li>Optimize fonts</li>
</ul>
`,
  },

  {
    slug: "content-marketing-strategy",

    title: "Content Marketing Strategy That Generates Leads",

    excerpt:
      "Learn how content marketing helps attract high-quality customers.",

    coverImage: "/images/blogs/content.jpg",

    category: "Content Marketing",

    author: "PrimeDigitor",

    publishedAt: "June 8, 2026",

    readingTime: "8 min read",

    tags: [
      "Content",
      "Marketing",
      "Lead Generation",
    ],

    content: `
<h2>Start with Audience Research</h2>

<p>
Understand customer pain points before creating content.
</p>

<h2>Create Helpful Content</h2>

<p>
Educational content consistently performs better.
</p>
`,
  },

  {
    slug: "social-media-growth",

    title: "Social Media Growth Tips for Brands",

    excerpt:
      "Build a stronger online presence using proven social media strategies.",

    coverImage: "/images/blogs/social.jpg",

    category: "Social Media",

    author: "PrimeDigitor",

    publishedAt: "June 5, 2026",

    readingTime: "5 min read",

    tags: [
      "Social Media",
      "Instagram",
      "Facebook",
      "Branding",
    ],

    content: `
<h2>Consistency Wins</h2>

<p>
Posting consistently builds trust and engagement.
</p>

<h2>Measure Everything</h2>

<p>
Track engagement and improve your strategy every month.
</p>
`,
  },
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