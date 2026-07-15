"use client";

import { useCallback, useEffect, useState } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import styles from "./CaseStudiesPage.module.css";
import { caseStudies } from "@/data/caseStudies";

// If you need page metadata, move it to layout.tsx or generateMetadata.
// Client Components can't export `metadata`.

export default function CaseStudiesPage() {
  const featuredStudies = caseStudies.filter((study) => study.featured);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
    },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
      }),
    ]
  );

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    onSelect();

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <main className={styles.page}>
      {/* ================= HERO ================= */}

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

      {/* ================= INTRO ================= */}

      <section className={styles.introSection}>
        <div className="site-container">
          <div className={styles.intro}>
            <h2>Every business has a different growth story.</h2>

            <p>
              Some businesses needed a premium website. Others needed more
              qualified leads, higher ROAS, stronger SEO, or a complete
              digital transformation. These case studies showcase our
              strategy, execution, and measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FEATURED SLIDER ================= */}

      <section className={styles.featuredSection}>
        <div className="site-container">
          <div className={styles.sectionHeading}>
            <span>Featured Case Studies</span>

            <h2>Our Best Success Stories</h2>

            <p>
              Explore our featured projects and discover how strategic
              digital solutions delivered measurable business growth.
            </p>
          </div>
                    <div className={styles.sliderWrapper}>
            {/* Navigation */}
            <button
              type="button"
              className={styles.prevButton}
              onClick={scrollPrev}
              aria-label="Previous Case Study"
            >
              ←
            </button>

            <button
              type="button"
              className={styles.nextButton}
              onClick={scrollNext}
              aria-label="Next Case Study"
            >
              →
            </button>

            {/* Embla */}
            <div className={styles.embla} ref={emblaRef}>
              <div className={styles.emblaContainer}>
                {featuredStudies.map((study) => (
                  <div
                    className={styles.emblaSlide}
                    key={study.slug}
                  >
                    <Link
                      href={`/case-studies/${study.slug}`}
                      className={styles.featuredCard}
                    >
                      <div className={styles.featuredImage}>
                        <Image
                          src={study.coverImage}
                          alt={study.title}
                          fill
                          priority
                          className={styles.image}
                          sizes="100vw"
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
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination */}
            <div className={styles.dots}>
              {featuredStudies.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => scrollTo(index)}
                  className={`${styles.dot} ${
                    index === selectedIndex
                      ? styles.dotActive
                      : ""
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= ALL CASE STUDIES ================= */}

      <section className={styles.section}>
        <div className="site-container">
          <div className={styles.sectionHeading}>
            <span>All Case Studies</span>

            <h2>Browse Every Project</h2>

            <p>
              Explore our complete portfolio of websites,
              mobile applications, branding, SEO,
              performance marketing and digital growth projects.
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
                    sizes="(max-width:768px) 100vw,
                           (max-width:1200px) 50vw,
                           33vw"
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
