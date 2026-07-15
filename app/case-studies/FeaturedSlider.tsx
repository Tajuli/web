"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { caseStudies } from "@/data/caseStudies";
import styles from "./FeaturedSlider.module.css";

export default function FeaturedSlider() {
  const featuredStudies = useMemo(
    () => caseStudies.filter((study) => study.featured),
    []
  );

  const autoplay = useMemo(
    () =>
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    []
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
      duration: 32,
    },
    [autoplay]
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
    <section className={styles.section}>
      <div className="site-container">

        <div className={styles.heading}>

          <span className={styles.badge}>
            Featured Case Studies
          </span>

          <h2>
            Our Best Success Stories
          </h2>

          <p>
            Discover how PrimeDigitor delivers
            measurable business growth through
            strategic digital marketing, branding
            and modern web development.
          </p>

        </div>

        <div className={styles.sliderWrapper}>

          <button
            className={`${styles.navButton} ${styles.prev}`}
            type="button"
            onClick={scrollPrev}
            aria-label="Previous Slide"
          >
            ←
          </button>

          <button
            className={`${styles.navButton} ${styles.next}`}
            type="button"
            onClick={scrollNext}
            aria-label="Next Slide"
          >
            →
          </button>

          <div
            className={styles.viewport}
            ref={emblaRef}
          >

            <div className={styles.container}>
                            {featuredStudies.map((study) => (
                <div
                  key={study.slug}
                  className={styles.slide}
                >
                  <article className={styles.showcase}>

                    {/* =========================
                        LEFT SIDE
                    ========================= */}

                    <div className={styles.showcaseMedia}>

                      <div className={styles.browserFrame}>

                        <div className={styles.browserBar}>

                          <div className={styles.browserDots}>
                            <span />
                            <span />
                            <span />
                          </div>

                        </div>

                        <div className={styles.browserBody}>

                          <Image
                            src={study.coverImage}
                            alt={study.title}
                            width={1600}
                            height={900}
                            priority={selectedIndex === 0}
                            quality={100}
                            className={styles.coverImage}
                          />

                        </div>

                      </div>

                    </div>

                    {/* =========================
                        RIGHT SIDE
                    ========================= */}

                    <div className={styles.showcaseContent}>

                      <span className={styles.category}>
                        {study.category}
                      </span>

                      <h3 className={styles.title}>
                        {study.title}
                      </h3>

                      <p className={styles.description}>
                        {study.shortDescription}
                      </p>

                      <div className={styles.meta}>

                        <span className={styles.client}>
                          {study.client}
                        </span>

                        <Link
                          href={`/case-studies/${study.slug}`}
                          className={styles.cta}
                        >
                          Read Full Case Study

                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7 17L17 7"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />

                            <path
                              d="M9 7H17V15"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>

                        </Link>

                      </div>

                    </div>

                  </article>
                </div>
              ))}
                          </div>
          </div>

          {/* =========================
              PAGINATION
          ========================= */}

          <div className={styles.pagination}>

            {featuredStudies.map((_, index) => (

              <button
                key={index}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => scrollTo(index)}
                className={`${styles.dot} ${
                  selectedIndex === index
                    ? styles.dotActive
                    : ""
                }`}
              />

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}
