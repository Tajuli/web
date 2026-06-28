"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./BlogCard.module.css";
import type { Blog } from "@/data/blogs";

type Props = {
  blog: Blog;
  featured?: boolean;
  compact?: boolean;
  horizontal?: boolean;
};

export default function BlogCard({
  blog,
  featured = false,
  compact = false,
  horizontal = false,
}: Props) {
  // ===========================
  // Horizontal Card (Sidebar)
  // ===========================
  if (horizontal) {
    return (
      <article className={styles.horizontal}>
        <Link href={`/blogs/${blog.slug}`} className={styles.horizontalImage}>
          <Image
            src={blog.coverImage}
            alt={blog.title}
            fill
            className={styles.image}
            sizes="120px"
          />
        </Link>

        <div className={styles.horizontalContent}>
          <span className={styles.category}>
            {blog.category}
          </span>

          <h3 className={styles.horizontalTitle}>
            <Link href={`/blogs/${blog.slug}`}>
              {blog.title}
            </Link>
          </h3>

          <div className={styles.meta}>
            <span>{blog.publishedAt}</span>

            <span className={styles.dot}>•</span>

            <span>{blog.readingTime}</span>
          </div>
        </div>
      </article>
    );
  }

  // ===========================
  // Featured / Compact Hero Card
  // ===========================
  if (featured || compact) {
    return (
      <article
        className={`${styles.heroCard} ${
          compact ? styles.compact : ""
        }`}
      >
        <Link href={`/blogs/${blog.slug}`} className={styles.heroLink}>
          <Image
            src={blog.coverImage}
            alt={blog.title}
            fill
            className={styles.heroImage}
            priority={featured}
          />

          <div className={styles.overlay} />

          <div className={styles.heroContent}>
            <span className={styles.category}>
              {blog.category}
            </span>

            <div className={styles.meta}>
              <span>{blog.publishedAt}</span>

              <span className={styles.dot}>•</span>

              <span>{blog.readingTime}</span>
            </div>

            <h2
              className={
                featured
                  ? styles.heroTitle
                  : styles.compactTitle
              }
            >
              {blog.title}
            </h2>
          </div>
        </Link>
      </article>
    );
  }

  // ===========================
  // Default Grid Card
  // ===========================
  return (
    <article className={styles.card}>
      <Link
        href={`/blogs/${blog.slug}`}
        className={styles.imageLink}
      >
        <div className={styles.imageWrapper}>
          <Image
            src={blog.coverImage}
            alt={blog.title}
            fill
            className={styles.image}
            sizes="(max-width:768px) 100vw, 33vw"
          />

          <span className={styles.category}>
            {blog.category}
          </span>
        </div>
      </Link>

      <div className={styles.content}>
        <div className={styles.meta}>
          <span>{blog.publishedAt}</span>

          <span className={styles.dot}>•</span>

          <span>{blog.readingTime}</span>
        </div>

        <h3 className={styles.title}>
          <Link href={`/blogs/${blog.slug}`}>
            {blog.title}
          </Link>
        </h3>

        <p className={styles.excerpt}>
          {blog.excerpt}
        </p>

        <div className={styles.footer}>
          <span className={styles.author}>
            {blog.author}
          </span>

          <Link
            href={`/blogs/${blog.slug}`}
            className={styles.button}
          >
            Read More
            <span className={styles.arrow}>→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
