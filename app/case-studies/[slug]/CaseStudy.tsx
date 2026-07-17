"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

import styles from "./CaseStudy.module.css";
import type { CaseStudy as CaseStudyType } from "@/data/caseStudies";

interface Props {
  caseStudy: CaseStudyType;
}

export default function CaseStudy({ caseStudy }: Props) {
  const stats = useMemo(() => {
    return caseStudy.metrics?.slice(0, 4) ?? [];
  }, [caseStudy]);

  return (
    <main className={styles.page}>
      {/* =====================================
          HERO
      ===================================== */}

      <section className={styles.hero}>
        <div className="site-container">
          <Link
            href="/case-studies"
            className={styles.backButton}
          >
            ← Back to Case Studies
          </Link>

          <div className={styles.heroGrid}>
            {/* Left */}
            <div className={styles.heroContent}>
              <span className={styles.badge}>
                {caseStudy.category}
              </span>

              <h1>{caseStudy.title}</h1>

              <p className={styles.description}>
                {caseStudy.shortDescription}
              </p>

              <div className={styles.meta}>
                <div className={styles.metaCard}>
                  <span>Client</span>
                  <strong>{caseStudy.client}</strong>
                </div>

                <div className={styles.metaCard}>
                  <span>Industry</span>
                  <strong>{caseStudy.industry}</strong>
                </div>

                <div className={styles.metaCard}>
                  <span>Completed</span>
                  <strong>{caseStudy.completedAt}</strong>
                </div>

                <div className={styles.metaCard}>
                  <span>Services</span>
                  <strong>
                    {caseStudy.services.length}
                  </strong>
                </div>
              </div>

              <div className={styles.heroButtons}>
                <Link
                  href="/contact"
                  className={styles.primaryBtn}
                >
                  Get Free Consultation
                </Link>

                <Link
                  href="/website-audit"
                  className={styles.secondaryBtn}
                >
                  Free Website Audit
                </Link>
              </div>
            </div>

            {/* Right */}
            <div className={styles.heroImageWrap}>
              <div className={styles.heroImage}>
                <Image
                  src={caseStudy.coverImage}
                  alt={caseStudy.title}
                  fill
                  priority
                  className={styles.image}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          RESULTS
      ===================================== */}

      {stats.length > 0 && (
        <section className={styles.statsSection}>
          <div className="site-container">
            <div className={styles.statsGrid}>
              {stats.map((item) => (
                <div
                  key={item.label}
                  className={styles.statCard}
                >
                  <h3>{item.value}</h3>

                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =====================================
          CONTENT
      ===================================== */}

      <section className={styles.content}>
        <div className="site-container">
          <div className={styles.contentWrapper}>
            {/* ===========================
                MAIN CONTENT
            =========================== */}

            <article className={styles.article}>
              <section className={styles.section}>
                <span className={styles.sectionTag}>
                  OVERVIEW
                </span>

                <h2>Project Overview</h2>

                <p>{caseStudy.description}</p>
              </section>

              <section className={styles.section}>
                <span className={styles.sectionTag}>
                  CHALLENGE
                </span>

                <h2>The Challenge</h2>

                <div className={styles.highlightBox}>
                  <p>{caseStudy.challenge}</p>
                </div>
              </section>

              <section className={styles.section}>
                <span className={styles.sectionTag}>
                  SOLUTION
                </span>

                <h2>Our Strategy</h2>

                <div className={styles.solutionBox}>
                  <p>{caseStudy.solution}</p>
                </div>
              </section>

              <section className={styles.section}>
                <span className={styles.sectionTag}>
                  PROCESS
                </span>

                <h2>Project Process</h2>

                <div className={styles.timeline}>
                  <div className={styles.timelineItem}>
                    <span>01</span>
                    <h4>Research</h4>
                  </div>

                  <div className={styles.timelineItem}>
                    <span>02</span>
                    <h4>Planning</h4>
                  </div>

                  <div className={styles.timelineItem}>
                    <span>03</span>
                    <h4>Execution</h4>
                  </div>

                  <div className={styles.timelineItem}>
                    <span>04</span>
                    <h4>Optimization</h4>
                  </div>

                  <div className={styles.timelineItem}>
                    <span>05</span>
                    <h4>Results</h4>
                  </div>
                </div>
              </section>
                            <section className={styles.section}>
                <span className={styles.sectionTag}>
                  SERVICES
                </span>

                <h2>Services Delivered</h2>

                <div className={styles.serviceGrid}>
                  {caseStudy.services.map((service) => (
                    <div
                      key={service}
                      className={styles.serviceCard}
                    >
                      <div className={styles.serviceIcon}>
                        ✓
                      </div>

                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </section>

              {caseStudy.technologies &&
                caseStudy.technologies.length > 0 && (
                  <section className={styles.section}>
                    <span className={styles.sectionTag}>
                      TECHNOLOGY
                    </span>

                    <h2>Tools & Technologies</h2>

                    <div className={styles.techGrid}>
                      {caseStudy.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={styles.techBadge}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </section>
                )}

              <section className={styles.section}>
                <span className={styles.sectionTag}>
                  RESULTS
                </span>

                <h2>Project Outcomes</h2>

                <div className={styles.resultGrid}>
                  {caseStudy.results.map((result) => (
                    <div
                      key={result}
                      className={styles.resultCard}
                    >
                      <div
                        className={styles.resultCheck}
                      >
                        ✓
                      </div>

                      <p>{result}</p>
                    </div>
                  ))}
                </div>
              </section>

              {caseStudy.gallery &&
                caseStudy.gallery.length > 0 && (
                  <section className={styles.section}>
                    <span className={styles.sectionTag}>
                      GALLERY
                    </span>

                    <h2>Project Showcase</h2>

                    <div className={styles.gallery}>
                      {caseStudy.gallery.map(
                        (image, index) => (
                          <div
                            key={index}
                            className={
                              styles.galleryItem
                            }
                          >
                            <Image
                              src={image}
                              alt={`${caseStudy.title} ${
                                index + 1
                              }`}
                              fill
                              className={styles.image}
                            />

                            <div
                              className={
                                styles.galleryOverlay
                              }
                            >
                              View
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </section>
                )}

              {caseStudy.testimonial && (
                <section
                  className={styles.testimonialSection}
                >
                  <div
                    className={
                      styles.testimonialCard
                    }
                  >
                    <div
                      className={
                        styles.quoteIcon
                      }
                    >
                      "
                    </div>

                    <blockquote>
                      {
                        caseStudy.testimonial
                          .quote
                      }
                    </blockquote>

                    <h4>
                      {
                        caseStudy.testimonial
                          .name
                      }
                    </h4>

                    <span>
                      {
                        caseStudy.testimonial
                          .designation
                      }
                    </span>
                  </div>
                </section>
              )}
            </article>

            {/* ======================
                SIDEBAR
            ====================== */}

            <aside className={styles.sidebar}>
              <div className={styles.sticky}>
                <div className={styles.infoCard}>
                  <h3>Project Summary</h3>

                  <div
                    className={styles.infoRow}
                  >
                    <span>Client</span>
                    <strong>
                      {caseStudy.client}
                    </strong>
                  </div>

                  <div
                    className={styles.infoRow}
                  >
                    <span>Industry</span>
                    <strong>
                      {caseStudy.industry}
                    </strong>
                  </div>

                  <div
                    className={styles.infoRow}
                  >
                    <span>Completed</span>
                    <strong>
                      {caseStudy.completedAt}
                    </strong>
                  </div>

                  <div
                    className={styles.infoRow}
                  >
                    <span>Category</span>
                    <strong>
                      {caseStudy.category}
                    </strong>
                  </div>
                </div>

                <div className={styles.ctaCard}>
                  <h3>
                    Ready to Grow Your
                    Business?
                  </h3>

                  <p>
                    Let's discuss how
                    PrimeDigitor can help
                    you generate more
                    leads, sales and brand
                    visibility.
                  </p>

                  <Link
                    href="/contact"
                    className={
                      styles.primaryBtn
                    }
                  >
                    Start Your Project
                  </Link>

                  <Link
                    href="/website-audit"
                    className={
                      styles.secondaryBtn
                    }
                  >
                    Free Website Audit
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ======================
          BOTTOM CTA
      ====================== */}

      <section className={styles.bottomCta}>
        <div className="site-container">
          <div className={styles.bottomCtaCard}>
            <span>LET'S WORK TOGETHER</span>

            <h2>
              Ready to Become Our Next
              Success Story?
            </h2>

            <p>
              Whether you need digital
              marketing, SEO, web
              development or branding,
              we're ready to help your
              business grow.
            </p>

            <div
              className={
                styles.bottomButtons
              }
            >
              <Link
                href="/contact"
                className={
                  styles.primaryBtn
                }
              >
                Get Free Consultation
              </Link>

              <Link
                href="/services"
                className={
                  styles.secondaryBtn
                }
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
