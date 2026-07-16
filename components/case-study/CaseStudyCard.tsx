"use client";

import Link from "next/link";
import styles from "./CaseStudyCard.module.css";

type CaseStudyCardProps = {
  slug: string;
  title: string;
  category: string;
  image: string;
  logo?: string;
  description?: string;
  featured?: boolean;
};

export default function CaseStudyCard({
  slug,
  title,
  category,
  image,
  logo,
  description,
  featured = true,
}: CaseStudyCardProps) {
  return (
    <Link
      href={`/case-studies/${slug}`}
      className={styles.card}
      aria-label={`View ${title} case study`}
    >
      <article className={styles.inner}>
        <div
          className={styles.thumbnail}
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className={styles.overlay} />

          {featured && (
            <span className={styles.badge}>
              Featured
            </span>
          )}

          {logo && (
            <div className={styles.logo}>
              {logo}
            </div>
          )}
        </div>

        <div className={styles.content}>
          <span className={styles.category}>
            {category}
          </span>

          <h3>{title}</h3>

          {description && (
            <p>{description}</p>
          )}

          <div className={styles.footer}>
            <span className={styles.link}>
              View Case Study
            </span>

            <span className={styles.arrow}>
              →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
