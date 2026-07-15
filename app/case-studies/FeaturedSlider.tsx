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
      duration: 35,
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

        {/* ===========================
            HEADER
        ============================ */}

        <div className={styles.heading}>

          <span className={styles.badge}>
            Featured Case Studies
          </span>

          <h2>
            Real Projects.
            <br />
            Real Business Growth.
          </h2>

          <p>
            Explore some of our featured projects covering
            web development, branding, SEO,
            paid advertising and mobile application
            development.
          </p>

        </div>

        {/* ===========================
            SLIDER
        ============================ */}

        <div className={styles.sliderArea}>

          <button
            type="button"
            aria-label="Previous"
            className={`${styles.navButton} ${styles.prev}`}
            onClick={scrollPrev}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Next"
            className={`${styles.navButton} ${styles.next}`}
            onClick={scrollNext}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div
            className={styles.viewport}
            ref={emblaRef}
          >
            <div className={styles.container}>

              {featuredStudies.map((study) => (

                <div
                  className={styles.slide}
                  key={study.slug}
                >

                  <article className={styles.card}>

                    {/* ===========================
                        IMAGE SIDE
                    ============================ */}

                    <div className={styles.imageSide}>

                      <div className={styles.imageWrapper}>

                        <Image
                          src={study.coverImage}
                          alt={study.title}
                          width={1600}
                          height={900}
                          quality={100}
                          priority={selectedIndex === 0}
                          className={styles.image}
                        />

                      </div>

                    </div>

                    {/* ===========================
                        CONTENT SIDE
                    ============================ */}

                    <div className={styles.contentSide}>

                      <span className={styles.category}>
                        {study.category}
                      </span>

                      <h3 className={styles.title}>
                        {study.title}
                      </h3>

                      <p className={styles.description}>
                        {study.shortDescription}
                      </p>

                      <div className={styles.infoArea}>

                        <div className={styles.clientBlock}>

                          <span className={styles.clientLabel}>
                            Client
                          </span>

                          <span className={styles.clientName}>
                            {study.client}
                          </span>

                        </div>
                                                <Link
                          href={`/case-studies/${study.slug}`}
                          className={styles.cta}
                        >
                          <span>Read Full Case Study</span>

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

          {/* ===========================
              PAGINATION
          ============================ */}

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
