import Link from "next/link";
import styles from "./Blog.module.css";
import { getAllBlogs } from "@/data/blogs";

export default function Blog() {
  const posts = getAllBlogs().slice(0, 3);

  return (
    <section id="blog" className={styles.blog}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>BLOG</span>

          <div className={styles.row}>
            <div>
              <h2>Insights & Marketing Guides</h2>

              <p>
                Practical SEO, advertising, and digital marketing tips to help
                your business grow online.
              </p>
            </div>

            <Link href="/blogs" className={styles.viewAll}>
              View All →
            </Link>
          </div>
        </div>

        <div className={styles.grid}>
          {posts.map((post) => (
            <article key={post.slug} className={styles.card}>
              <span className={styles.badge}>
                {post.category}
              </span>

              <h3>{post.title}</h3>

              <p>{post.excerpt}</p>

              <div className={styles.footer}>
                <span>{post.publishedAt}</span>

                <Link href={`/blogs/${post.slug}`}>
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
