"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./BlogCard.module.css";
import type { Blog } from "@/data/blogs";

type Props = {
  blog: Blog;
  featured?: boolean;
  large?: boolean;
};

export default function BlogCard({
  blog,
  featured = false,
  large = false,
}: Props) {
  if (featured) {
    return (
      <Link
        href={`/blogs/${blog.slug}`}
        className={`${styles.heroCard} ${
          large ? styles.largeHero : styles.smallHero
        }`}
      >
        <Image
  src={blog.coverImage}
  alt={blog.title}
  fill
  priority={large}
  className={styles.heroImage}
  sizes="(max-width:1100px) 100vw, 66vw"
/>

        <div className={styles.overlay} />

        <div className={styles.heroContent}>
          <span className={styles.category}>
            {blog.category}
          </span>

          <h2 className={styles.heroTitle}>
            {blog.title}
          </h2>

          <div className={styles.heroMeta}>
            <span>{blog.author}</span>

            <span>•</span>

            <span>{blog.publishedAt}</span>

            <span>•</span>

            <span>{blog.readingTime}</span>
          </div>
        </div>
      </Link>
    );
  }

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
  sizes="(max-width:768px) 100vw, (max-width:1100px) 50vw, 33vw"
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
