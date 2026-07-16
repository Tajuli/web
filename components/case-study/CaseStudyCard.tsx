"use client";

import Link from "next/link";
import Image from "next/image";

import styles from "./CaseStudyCard.module.css";
import type { CaseStudy } from "@/data/caseStudies";

type Props = {
  study: CaseStudy;
};

export default function CaseStudyCard({ study }: Props) {
  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className={styles.card}
      aria-label={`View ${study.title} case study`}
    >
      <article className={styles.inner}>
        <div className={styles.thumbnail}>
          <Image
            src={study.coverImage}
            alt={study.title}
            fill
            className={styles.image}
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          />

          <div className={styles.overlay} />

          <span className={styles.category}>
            {study.category}
          </span>

          {study.featured && (
            <span className={styles.badge}>
              Featured
            </span>
          )}
        </div>

        <div className={styles.content}>
          <h3>{study.title}</h3>

          <p>{study.shortDescription}</p>

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
