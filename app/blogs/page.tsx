import type { Metadata } from "next";
import BlogCard from "@/components/blogs/BlogCard";
import {
  getAllBlogs,
  getFeaturedBlogs,
} from "@/data/blogs";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Blog | PrimeDigitor",
  description:
    "Read the latest insights on SEO, Web Development, Digital Marketing, Google Ads, Branding and Business Growth from PrimeDigitor.",

  openGraph: {
    title: "PrimeDigitor Blog",
    description:
      "Latest articles on SEO, marketing and web development.",
    type: "website",
  },
};

export default function BlogsPage() {
  const blogs = getAllBlogs();
  const featured = getFeaturedBlogs()[0];

  return (
    <main className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <span className={styles.eyebrow}>
          PRIME DIGITOR BLOG
        </span>

        <h1>
          Insights That Help
          <br />
          Your Business Grow
        </h1>

        <p>
          Actionable articles, practical strategies and
          industry insights on SEO, Google Ads,
          Web Development and Digital Marketing.
        </p>
      </section>

      {/* Featured */}
      {featured && (
        <section className={styles.featured}>
          <h2>Featured Article</h2>

          <BlogCard blog={featured} />
        </section>
      )}

      {/* Latest */}
      <section className={styles.latest}>
        <div className={styles.heading}>
          <h2>Latest Articles</h2>

          <span>
            {blogs.length} Articles
          </span>
        </div>

        <div className={styles.grid}>
          {blogs.map((blog) => (
            <BlogCard
              key={blog.slug}
              blog={blog}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
