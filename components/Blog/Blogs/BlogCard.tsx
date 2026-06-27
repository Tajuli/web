import Link from "next/link";
import styles from "./page.module.css";
import { BlogMeta } from "./types";

type Props = {
  blog: BlogMeta;
};

export default function BlogCard({ blog }: Props) {
  return (
    <Link href={`/blog/${blog.slug}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={blog.cover}
          alt={blog.title}
          className={styles.image}
        />

        <span className={styles.category}>
          {blog.category}
        </span>
      </div>

      <div className={styles.cardBody}>
        <div className={styles.meta}>
          <span>{blog.publishedAt}</span>
          <span>•</span>
          <span>{blog.readingTime}</span>
        </div>

        <h3>{blog.title}</h3>

        <p>{blog.excerpt}</p>

        <div className={styles.readMore}>
          Read Article →
        </div>
      </div>
    </Link>
  );
}
