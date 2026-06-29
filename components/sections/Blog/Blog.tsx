import Link from "next/link";
import Image from "next/image";
import styles from "./Blog.module.css";
import { getAllBlogs } from "@/data/blogs";

export default function Blog() {
  const posts = getAllBlogs().slice(0, 3);

  return (
    <section className="section" id="blog">
      <div className="site-container">
        <div className="section-head">
          <span className="eyebrow">Recent Blogs</span>

          <h2 className="section-title">
            Insights, SEO Tips & Digital Marketing Guides
          </h2>

          <div className={styles.headerRow}>
            <div />

            <Link href="/blogs" className={styles.viewAll}>
              View All
            </Link>
          </div>
        </div>

        <div className={styles.blogGrid}>
          {posts.map((post) => (
            <article key={post.slug} className={`glass-card ${styles.card}`}>
              {post.image && (
                <div className={styles.imageWrap}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className={styles.image}
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                  />
                </div>
              )}

              <div className={styles.body}>
                <span className={styles.badge}>
                  {post.category}
                </span>

                <h3 className={styles.title}>
                  {post.title}
                </h3>

                <p className={styles.excerpt}>
                  {post.excerpt}
                </p>

                <div className={styles.footer}>
                  <span className={styles.date}>
                    {post.publishedAt}
                  </span>

                  <Link
                    href={`/blogs/${post.slug}`}
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
