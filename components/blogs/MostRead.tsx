import Link from "next/link";
import Image from "next/image";
import styles from "./MostRead.module.css";
import type { Blog } from "@/data/blogs";

type Props = {
  blogs: Blog[];
};

export default function MostRead({ blogs }: Props) {
  return (
    <section className={styles.sidebar}>
      <div className={styles.header}>
        <h3>Most Read</h3>
      </div>

      <div className={styles.list}>
        {blogs.map((blog, index) => (
          <Link
            key={blog.slug}
            href={`/blogs/${blog.slug}`}
            className={styles.item}
          >
            <div className={styles.thumb}>
              <Image
                src={blog.coverImage}
                alt={blog.title}
                fill
                className={styles.image}
                sizes="100px"
              />
            </div>

            <div className={styles.content}>
              <span className={styles.number}>
                {String(index + 1).padStart(2, "0")}
              </span>

              <h4>{blog.title}</h4>

              <div className={styles.meta}>
                <span>{blog.publishedAt}</span>
                <span>•</span>
                <span>{blog.readingTime}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
