import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import styles from "./CaseStudiesPage.module.css";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "Case Studies | PrimeDigitor",
  description:
    "Explore our case studies and discover how PrimeDigitor helps businesses grow through web development, digital marketing, branding, mobile apps, SEO, and performance marketing.",
};

export default function CaseStudiesPage() {
  const featuredStudies = caseStudies.filter((study) => study.featured);

  return (
    <main className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="site-container">
          <p className="eyebrow">CASE STUDIES</p>

          <h1 className={styles.title}>
            Real Results.
            <br />
            Real Growth.
            <br />
            Real Businesses.
          </h1>

          <p className={styles.description}>
            Discover how PrimeDigitor helps businesses increase traffic,
            generate more leads, improve conversions, and build stronger
            brands through data-driven digital strategies.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className={styles.introSection}>
        <div className="site-container">
          <div className={styles.intro}>
            <h2>Every business has a different growth story.</h2>

            <p>
              Some businesses needed a premium website. Others wanted more
              qualified leads, higher ROAS, stronger SEO, or a complete
              digital transformation. These case studies showcase our
              strategy, execution, and measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Featured */}
      {featuredStudies.length > 0 && (
        <section className={styles.featuredSection}>
          <div className="site-container">
            <div className={styles.sectionHeading}>
              <span>Featured Case Studies</span>

              <h2>Our Best Success Stories</h2>

              <p>
                Explore some of our most impactful projects and see how
                strategic digital solutions delivered measurable business
                growth.
              </p>
            </div>

            <div className={styles.featuredSlider}>
              {featuredStudies.map((study) => (
                <Link
                  key={study.slug}
                  href={`/case-studies/${study.slug}`}
                  className={styles.featuredCard}
                >
                  <div className={styles.featuredImage}>
                    <Image
                      src={study.coverImage}
                      alt={study.title}
                      fill
                      className={styles.image}
                      priority
                    />
                  </div>

                  <div className={styles.featuredContent}>
                    <span className={styles.category}>
                      {study.category}
                    </span>

                    <h3>{study.title}</h3>

                    <p>{study.shortDescription}</p>

                    <div className={styles.featuredMeta}>
                      <span>{study.client}</span>

                      <span className={styles.readMore}>
                        Read Full Case Study →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Case Studies */}
      <section className={styles.section}>
        <div className="site-container">
          <div className={styles.sectionHeading}>
            <span>All Case Studies</span>

            <h2>Browse Every Project</h2>

            <p>
              From startups to growing brands, explore every project we've
              worked on and the results we've achieved together.
            </p>
          </div>

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
