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

type PageProps = {
  searchParams?: {
    page?: string;
  };
};

export default function CaseStudiesPage({
  searchParams,
}: PageProps) {
  // Show only NON-featured studies in the grid
  const allStudies = caseStudies;

  const currentPage = Math.max(
    1,
    Number(searchParams?.page ?? "1")
  );

  const totalPages = Math.max(
    1,
    Math.ceil(allStudies.length / ITEMS_PER_PAGE)
  );

  const paginatedStudies = allStudies.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <main className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="site-container">

          <h1 className={styles.title}>
            Real Results.
            <br />
            Real Growth.
            <br />
            Real Businesses.
          </h1>

          <p className={styles.description}>
            Discover how PrimeDigitor helps businesses
            increase traffic, generate leads and grow
            online through strategic digital marketing
            and development.
          </p>
        </div>
      </section>

      {/* Featured Slider */}
      <FeaturedSlider />

      {/* All Case Studies */}
      <section className={styles.section}>
        <div className="site-container">
          <div className={styles.sectionHeading}>
            <span>All Case Studies</span>

            <h2>Browse Every Project</h2>

            <p>
              Explore our complete portfolio of websites,
              SEO, branding, digital marketing and software
              development projects.
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

                <div className={styles.content}>
                  <h2>{study.title}</h2>

                  <p>{study.shortDescription}</p>

                  <div className={styles.footer}>

                    <span className={styles.readMore}>
                      Read Case Study →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
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
                      currentPage === page
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
          )}
        </div>
      </section>

      {/* CTA */}
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
              Whether you need a high-converting website,
              SEO, Google Ads, Meta Ads, branding or a
              complete digital strategy, PrimeDigitor is
              ready to help your business grow.
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
