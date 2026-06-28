import type { Metadata } from "next";
import BlogCard from "@/components/blogs/BlogCard";
import {
  getAllBlogs,
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

  const heroMain = blogs[0];
  const heroSide = blogs.slice(1, 3);

  const recentPosts = blogs.slice(3);

  const mostRead = [...blogs]
    .sort((a, b) => (b.readTime ?? 0) - (a.readTime ?? 0))
    .slice(0, 5);

  return (
    <main className={styles.page}>
      {/* ================= HERO ================= */}

      <section className={styles.heroGrid}>
        {/* Left Large */}
        {heroMain && (
          <div className={styles.heroLarge}>
            <BlogCard
              blog={heroMain}
              featured
            />
          </div>
        )}

        {/* Right */}
        <div className={styles.heroRight}>
          {heroSide.map((blog) => (
            <BlogCard
              key={blog.slug}
              blog={blog}
              compact
            />
          ))}
        </div>
      </section>

      {/* ================= CONTENT ================= */}

      <section className={styles.content}>
        {/* LEFT */}

        <div className={styles.left}>
          <div className={styles.sectionHeader}>
            <h2>Recent Posts</h2>
          </div>

          <div className={styles.postsGrid}>
            {recentPosts.map((blog) => (
              <BlogCard
                key={blog.slug}
                blog={blog}
              />
            ))}
          </div>

          <div className={styles.pagination}>
            <button className={styles.active}>
              1
            </button>

            <button>2</button>

            <button>3</button>

            <button>...</button>

            <button>8</button>

            <button>&gt;</button>
          </div>
        </div>

        {/* RIGHT */}

        <aside className={styles.sidebar}>
          <h2 className={styles.sidebarTitle}>
            Most Read
          </h2>

          <div className={styles.sidebarList}>
            {mostRead.map((blog) => (
              <BlogCard
                key={blog.slug}
                blog={blog}
                horizontal
              />
            ))}
          </div>
        </aside>
      </section>
    </main>
  );
}
