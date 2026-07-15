"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import styles from "./CaseStudiesPage.module.css";
import { caseStudies } from "@/data/caseStudies";

export default function FeaturedSlider() {
  const featuredStudies = caseStudies.filter(
    (study) => study.featured
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const autoplay = Autoplay({
    delay: 5000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
      duration: 30,
    },
    [autoplay]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
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
    <section className={styles.featuredSection}>
      <div className="site-container">
        <div className={styles.sectionHeading}>
          <span>Featured Case Studies</span>

          <h2>Our Best Success Stories</h2>

          <p>
            Explore our featured projects and discover how
            strategic digital solutions delivered measurable
            business growth.
          </p>
        </div>
                <div className={styles.sliderWrapper}>
          {/* Previous Button */}
          <button
            type="button"
            className={styles.prevButton}
            onClick={scrollPrev}
            aria-label="Previous Case Study"
          >
            ←
          </button>

          {/* Next Button */}
          <button
            type="button"
            className={styles.nextButton}
            onClick={scrollNext}
            aria-label="Next Case Study"
          >
            →
          </button>

          {/* Embla Viewport */}
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
                    {/* Image */}
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

                    {/* Content */}
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
                            {/* Pagination Dots */}
          <div className={styles.dots}>
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
