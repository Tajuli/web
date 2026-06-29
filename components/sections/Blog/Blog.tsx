import Image from "next/image";
import Link from "next/link";

import { blogs } from "@/data/blogs";

import styles from "./Blog.module.css";

export default function Blog() {
  const recentBlogs = blogs.slice(0, 3);

  return (
    <section id="blog" className="section">
      <div className="site-container">
        <div className="section-head">
          <div>
            <span className="eyebrow">BLOG</span>

            <h2 className="section-title">
              Insights & Marketing Guides
            </h2>

            <p className="section-subtitle">
              Practical SEO, Google Ads, website and digital marketing insights
              to help your business grow online.
            </p>
          </div>

          <Link href="/blogs" className="btn btn-outline">
            View All →
          </Link>
        </div>

        <div className={styles.grid}>
          {recentBlogs.map((blog) => (
            <article key={blog.slug} className={styles.card}>
              <Link
                href={`/blogs/${blog.slug}`}
                className={styles.imageWrapper}
              >
                <Image
                  src={blog.coverImage}
                  alt={blog.title}
                  width={800}
                  height={500}
                  className={styles.image}
                />
              </Link>

              <div className={styles.content}>
                <span className={styles.badge}>{blog.category}</span>

                <h3 className={styles.title}>
                  <Link href={`/blogs/${blog.slug}`}>
                    {blog.title}
                  </Link>
                </h3>

                <p className={styles.excerpt}>
                  {blog.excerpt}
                </p>

                <div className={styles.footer}>
                  <div className={styles.meta}>
                    <span>{blog.publishedAt}</span>
                    <span>•</span>
                    <span>{blog.readingTime}</span>
                  </div>

                  <Link
                    href={`/blogs/${blog.slug}`}
                    className={styles.readMore}
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
