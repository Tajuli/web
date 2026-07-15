"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import styles from "./CaseStudiesPage.module.css";
import { caseStudies } from "@/data/caseStudies";


function AutoResizeTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [fontSize, setFontSize] = useState(46);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    let size = 46;
    el.style.fontSize = `${size}px`;

    while (size > 30) {
      const lineHeight = parseFloat(
        getComputedStyle(el).lineHeight
      );

      const lines = Math.round(
        el.scrollHeight / lineHeight
      );

      if (lines <= 2) break;

      size -= 2;
      el.style.fontSize = `${size}px`;
    }

    setFontSize(size);
  }, [children]);

  return (
    <h3
      ref={ref}
      style={{
        fontSize,
        lineHeight: 1.15,
      }}
    >
      {children}
    </h3>
  );
}
export default function FeaturedSlider() {
  const featuredStudies = caseStudies.filter(
    (study) => study.featured
  );

  const [selectedIndex, setSelectedIndex] =
    useState(0);

  const autoplay = Autoplay({
    delay: 5000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  });

  const [emblaRef, emblaApi] =
    useEmblaCarousel(
      {
        loop: true,
        align: "start",
        skipSnaps: false,
        duration: 30,
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
      setSelectedIndex(
        emblaApi.selectedScrollSnap()
      );
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

          <h2>
            Our Best Success Stories
          </h2>

          <p>
            Explore our featured projects and
            discover how strategic digital
            solutions delivered measurable
            business growth.
          </p>
        </div>

        <div className={styles.sliderWrapper}>

          <button
            className={styles.prevButton}
            onClick={scrollPrev}
            type="button"
            aria-label="Previous"
          >
            ←
          </button>

          <button
            className={styles.nextButton}
            onClick={scrollNext}
            type="button"
            aria-label="Next"
          >
            →
          </button>

          <div
            className={styles.embla}
            ref={emblaRef}
          >
            <div className={styles.emblaContainer}>
                            {featuredStudies.map((study) => (
                <div
                  key={study.slug}
                  className={styles.emblaSlide}
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
                        width={1600}
                        height={900}
                        priority
                        quality={95}
                        className={styles.image}
                      />
                    </div>

                    {/* Content */}
                    <div className={styles.featuredContent}>
                      <span className={styles.category}>
                        {study.category}
                      </span>

                      <AutoResizeTitle>
    {study.title}
</AutoResizeTitle>

                      <p>
                        {study.shortDescription}
                      </p>

                      <div
                        className={styles.featuredMeta}
                      >
                        <span>
                          {study.client}
                        </span>

                        <span
                          className={styles.readMore}
                        >
                          Read Full Case Study →
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className={styles.dots}>
            {featuredStudies.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${
                  index + 1
                }`}
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
