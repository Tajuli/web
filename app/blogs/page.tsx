import type { Metadata } from "next";
import BlogCard from "@/components/blogs/BlogCard";
import MostRead from "@/components/blogs/MostRead";

import {
  getAllBlogs,
  getFeaturedBlogs,
} from "@/data/blogs";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Blog | PrimeDigitor",
  description:
    "Read the latest insights on SEO, Web Development, Digital Marketing, Google Ads and Business Growth from PrimeDigitor.",
};

export default function BlogsPage() {
  const blogs = getAllBlogs();
  const featured = getFeaturedBlogs();

  const heroMain = featured[0];
  const heroRight = featured.slice(1, 3);

  return (
    <main className={styles.page}>
      {/* ================= HERO ================= */}

      <section className={styles.heroGrid}>
        {heroMain && (
          <div className={styles.heroLarge}>
            <BlogCard
              blog={heroMain}
              featured
              large
            />
          </div>
        )}

        <div className={styles.heroSide}>
          {heroRight.map((blog) => (
            <BlogCard
              key={blog.slug}
              blog={blog}
              featured
            />
          ))}
        </div>
      </section>

      {/* ================= CONTENT ================= */}

      <section className={styles.content}>
        {/* LEFT */}

        <div className={styles.left}>
          <div className={styles.sectionTitle}>
            <h2>Recent Posts</h2>
          </div>

          <div className={styles.grid}>
            {blogs.map((blog) => (
              <BlogCard
                key={blog.slug}
                blog={blog}
              />
            ))}
          </div>

          {/* Pagination */}

          <div className={styles.pagination}>
            <button className={styles.active}>
              1
            </button>

            <button>2</button>

            <button>3</button>

            <button>...</button>

            <button>8</button>

            <button>›</button>
          </div>
        </div>

        {/* RIGHT */}

        <aside className={styles.sidebar}>
          <MostRead blogs={blogs.slice(0, 5)} />
        </aside>
      </section>
    </main>
  );
}
