"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";

const resultCards = [
  {
    value: "01",
    label: "Facebook Marketing",
    href: "/services/facebook-marketing",
  },
  {
    value: "02",
    label: "Google Ads",
    href: "/services/google-ads",
  },
  {
    value: "03",
    label: "TikTok Marketing",
    href: "/services/tiktok-marketing",
  },
  {
    value: "04",
    label: "SEO Services",
    href: "/services/seo",
  },
  {
    value: "05",
    label: "Website Design & Development",
    href: "/services/website-development",
  },
  {
    value: "06",
    label: "Software & App Development",
    href: "/services/software-development",
  },
  {
    value: "07",
    label: "Video Advertisement Production",
    href: "/services/video-advertisement",
  },
  {
    value: "08",
    label: "Social Media Management",
    href: "/services/social-media-management",
  },
  {
    value: "09",
    label: "Content Creation & Branding",
    href: "/services/content-creation-branding",
  },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  const sliderRef = useRef<HTMLDivElement | null>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);
  const autoSlideRef = useRef<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const oneSetWidth = slider.scrollWidth / 3;
    slider.scrollLeft = oneSetWidth;

    const handleLoop = () => {
      if (slider.scrollLeft <= oneSetWidth * 0.15) {
        slider.scrollLeft += oneSetWidth;
      } else if (slider.scrollLeft >= oneSetWidth * 1.85) {
        slider.scrollLeft -= oneSetWidth;
      }
    };

    const stopAutoSlide = () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
        autoSlideRef.current = null;
      }
    };

    const startAutoSlide = () => {
      stopAutoSlide();

      autoSlideRef.current = window.setInterval(() => {
        if (!slider || isDown.current) return;

        slider.scrollLeft += 1;
        handleLoop();
      }, 16);
    };

    slider.addEventListener("scroll", handleLoop);
    slider.addEventListener("mouseenter", stopAutoSlide);
    slider.addEventListener("mouseleave", startAutoSlide);

    startAutoSlide();

    return () => {
      slider.removeEventListener("scroll", handleLoop);
      slider.removeEventListener("mouseenter", stopAutoSlide);
      slider.removeEventListener("mouseleave", startAutoSlide);
      stopAutoSlide();
    };
  }, []);

  const pauseAuto = () => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
      autoSlideRef.current = null;
    }
  };

  const resumeAuto = () => {
    const slider = sliderRef.current;
    if (!slider || autoSlideRef.current) return;

    autoSlideRef.current = window.setInterval(() => {
      if (!slider || isDown.current) return;

      const oneSetWidth = slider.scrollWidth / 3;

      slider.scrollLeft += 1;

      if (slider.scrollLeft <= oneSetWidth * 0.15) {
        slider.scrollLeft += oneSetWidth;
      } else if (slider.scrollLeft >= oneSetWidth * 1.85) {
        slider.scrollLeft -= oneSetWidth;
      }
    }, 16);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const slider = sliderRef.current;
    if (!slider) return;

    isDown.current = true;
    pauseAuto();

    slider.classList.add(styles.dragging);

    startX.current = e.pageX - slider.offsetLeft;
    startScrollLeft.current = slider.scrollLeft;
  };

  const stopDragging = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    isDown.current = false;
    slider.classList.remove(styles.dragging);

    resumeAuto();
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const slider = sliderRef.current;
    if (!slider || !isDown.current) return;

    e.preventDefault();

    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX.current) * 1.25;

    slider.scrollLeft = startScrollLeft.current - walk;
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const slider = sliderRef.current;
    if (!slider) return;

    isDown.current = true;
    pauseAuto();

    startX.current = e.touches[0].pageX - slider.offsetLeft;
    startScrollLeft.current = slider.scrollLeft;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const slider = sliderRef.current;
    if (!slider || !isDown.current) return;

    const x = e.touches[0].pageX - slider.offsetLeft;
    const walk = (x - startX.current) * 1.25;

    slider.scrollLeft = startScrollLeft.current - walk;
  };

  const handleTouchEnd = () => {
    isDown.current = false;
    resumeAuto();
  };
    return (
    <section id="hero" className={styles.hero}>
      {/* Hero Background Image */}
      <div className={styles.heroImage}>
        <Image
          src="/images/hero/hero3d.webp"
          alt="PrimeDigitor Digital Marketing Agency"
          fill
          priority
          quality={100}
          className={styles.heroImg}
        />
      </div>

      {/* Dark Overlay */}
      <div className={styles.bgOverlay} />

      {/* Decorative Elements */}
      <div className={styles.gridOverlay} />
      <div className={`${styles.glow} ${styles.glowA}`} />
      <div className={`${styles.glow} ${styles.glowB}`} />

      <div className={`site-container ${styles.heroInner}`}>
        <div className={styles.heroMain}>
          <div className={`${styles.left} ${mounted ? styles.reveal : ""}`}>
            <div className={styles.leftInner}>
              <div className={styles.leftTop}>
                <div className={styles.kickerWrap}>
                  <span className={styles.kickerDot} />
                  <p className={styles.kicker}>
                    PrimeDigitor • Digital Marketing Agency
                  </p>
                </div>

                <h1 className={styles.title}>
                  Growth-focused marketing Agency that{" "}
                  <span>delivers results.</span>
                </h1>

                <p className={styles.text}>
                  We help ambitious brands grow with SEO, Paid Ads and
                  high-converting websites.
                </p>
              </div>

              <div className={styles.leftBottom}>
                <div className={styles.actions}>
                  <a
                    href="#services"
                    className={`btn btn-primary ${styles.primaryBtn}`}
                  >
                    Our Services
                  </a>

                  <a
                    href="https://wa.me/8801641572608?text=Hello%20PrimeDigitor!%20I'm%20interested%20in%20your%20services.%20I'd%20like%20to%20discuss%20my%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn btn-primary ${styles.primaryBtn}`}
                  >
                    Book a Free Call
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Result Cards */}
        <div className={styles.resultFrame}>
          <span
            className={`${styles.frameCorner} ${styles.frameTopLeft}`}
            aria-hidden="true"
          />
          <span
            className={`${styles.frameCorner} ${styles.frameTopRight}`}
            aria-hidden="true"
          />
          <span
            className={`${styles.frameCorner} ${styles.frameBottomLeft}`}
            aria-hidden="true"
          />
          <span
            className={`${styles.frameCorner} ${styles.frameBottomRight}`}
            aria-hidden="true"
          />

          <div
            ref={sliderRef}
            className={styles.resultSlider}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={stopDragging}
            onMouseLeave={stopDragging}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className={styles.resultTrack}>
              {[...resultCards, ...resultCards, ...resultCards].map(
                (item, index) => (
                  <Link
  key={`${item.label}-${index}`}
  href={item.href}
  className={styles.resultCard}
  onTouchStart={(e) => {
    e.currentTarget.classList.add(styles.touchHover);
  }}
  onTouchEnd={(e) => {
    e.currentTarget.classList.remove(styles.touchHover);
  }}
  onTouchCancel={(e) => {
    e.currentTarget.classList.remove(styles.touchHover);
  }}
>
  <strong>{item.value}</strong>
  <span>{item.label}</span>
</Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
