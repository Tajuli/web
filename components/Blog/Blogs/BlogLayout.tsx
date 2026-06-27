import styles from "./page.module.css";
import Link from "next/link";
import { BlogMeta } from "./types";

type Props = {
  blog: BlogMeta;
  children: React.ReactNode;
};

export default function BlogLayout({
  blog,
  children,
}: Props) {
  return (
    <article className={styles.blogPage}>
      <div className={styles.container}>
        <nav className={styles.breadcrumb}>
          <Link href="/">Home</Link>

          <span>/</span>

          <Link href="/blog">Blog</Link>

          <span>/</span>

          <span>{blog.title}</span>
        </nav>

        <header className={styles.hero}>
          <span className={styles.heroCategory}>
            {blog.category}
          </span>

          <h1>{blog.title}</h1>

          <p className={styles.description}>
            {blog.description}
          </p>

          <div className={styles.info}>
            <span>{blog.author}</span>

            <span>•</span>

            <span>{blog.publishedAt}</span>

            <span>•</span>

            <span>{blog.readingTime}</span>
          </div>

          <img
            src={blog.cover}
            alt={blog.title}
            className={styles.cover}
          />
        </header>

        <section className={styles.content}>
          {children}
        </section>

        <footer className={styles.footer}>
          <div className={styles.cta}>
            <h2>Need Help Growing Your Business?</h2>

            <p>
              PrimeDigitor helps businesses grow through
              SEO, Google Ads, Meta Ads, and Web Design.
            </p>

            <Link href="/#contact">
              Contact Us
            </Link>
          </div>
        </footer>
      </div>
    </article>
  );
}
