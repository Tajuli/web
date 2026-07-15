import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import styles from "./CaseStudiesPage.module.css";
import FeaturedSlider from "./FeaturedSlider";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "Case Studies | PrimeDigitor",
  description:
    "Explore real client success stories and discover how PrimeDigitor helps businesses grow.",
};

const ITEMS_PER_PAGE = 6;

export default function CaseStudiesPage({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) {
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
            generate leads and grow online.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className={styles.introSection}>
        <div className="site-container">
          <div className={styles.intro}>
            <h2>Every business has a different growth story.</h2>

            <p>
              Explore our featured projects and discover how strategic
              digital marketing and development create measurable
              business growth.
            </p>
          </div>
        </div>
      </section>

      const featuredStudies = caseStudies.filter(
  (study) => study.featured
);

const allStudies = caseStudies.filter(
  (study) => !study.featured
);

const currentPage = Number(searchParams?.page ?? 1);

const totalPages = Math.ceil(
  allStudies.length / ITEMS_PER_PAGE
);

const paginatedStudies = allStudies.slice(
  (currentPage - 1) * ITEMS_PER_PAGE,
  currentPage * ITEMS_PER_PAGE
);

      {/* Featured Slider */}
      <FeaturedSlider />

      {/* All Case Studies */}
      <section className={styles.section}>
        <div className="site-container">
          <div className={styles.sectionHeading}>
            <span>All Case Studies</span>

            <h2>Browse Every Project</h2>

            <p>
              Explore every project we've worked on.
            </p>
          </div>

          <div className={styles.grid}>
            {paginatedStudies.map((study) => (
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

                <div className={styles.pagination}>

  <Link
    href={
      currentPage > 1
        ? `/case-studies?page=${currentPage - 1}`
        : "#"
    }
    className={`${styles.pageButton} ${
      currentPage === 1 ? styles.disabled : ""
    }`}
  >
    ← Previous
  </Link>

  <div className={styles.pageNumbers}>
    {Array.from(
      { length: totalPages },
      (_, index) => index + 1
    ).map((page) => (
      <Link
        key={page}
        href={`/case-studies?page=${page}`}
        className={`${styles.pageNumber} ${
          page === currentPage
            ? styles.activePage
            : ""
        }`}
      >
        {page}
      </Link>
    ))}
  </div>

  <Link
    href={
      currentPage < totalPages
        ? `/case-studies?page=${currentPage + 1}`
        : "#"
    }
    className={`${styles.pageButton} ${
      currentPage === totalPages
        ? styles.disabled
        : ""
    }`}
  >
    Next →
  </Link>

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
      <section className={styles.ctaSection}>
  <div className="site-container">
    <div className={styles.ctaBox}>
      <span className={styles.ctaBadge}>
        🚀 Let's Grow Together
      </span>

      <h2>
        Ready to Become Our Next Success Story?
      </h2>

      <p>
        Whether you need a high-converting website, SEO,
        Google Ads, Meta Ads, or a complete digital strategy,
        we're ready to help your business grow.
      </p>

      <div className={styles.ctaButtons}>
        <Link
          href="/#contact"
          className="btn btn-primary"
        >
          Get Free Website Audit
        </Link>

        <Link
          href="/#services"
          className="btn btn-secondary"
        >
          Explore Our Services
        </Link>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}
