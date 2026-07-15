import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import styles from "./CaseStudiesPage.module.css";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "Case Studies | PrimeDigitor",
  description:
    "Explore our case studies and discover how PrimeDigitor helps businesses grow through web development, digital marketing, branding, mobile apps, and performance-driven strategies.",
};

export default function CaseStudiesPage() {
  return (
    <main className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="site-container">
          <p className="eyebrow">CASE STUDIES</p>

          <h1 className={styles.title}>
            Real projects. Real strategies. Real business growth.
          </h1>

          <p className={styles.description}>
            Explore how we've helped businesses grow through web
            development, mobile apps, SEO, digital marketing, branding,
            and content strategy.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className={styles.section}>
        <div className="site-container">
          <div className={styles.grid}>
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className={styles.card}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={study.coverImage}
                    alt={study.title}
                    fill
                    className={styles.image}
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                  />

                  <span className={styles.category}>
                    {study.category}
                  </span>

                  {study.featured && (
                    <span className={styles.featured}>
                      Featured
                    </span>
                  )}
                </div>

                <div className={styles.content}>
                  <h2>{study.title}</h2>

                  <p>{study.shortDescription}</p>

                  <div className={styles.footer}>
                    <span>{study.client}</span>

                    <span className={styles.readMore}>
                      Read Case Study →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
