"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";

const bgImages = ["/images/hero/hero-2.png"];

const resultCards = [
  { value: "+184%", label: "Organic Growth" },
  { value: "4.8x", label: "ROAS" },
  { value: "-31%", label: "CPL" },
  { value: "2,450+", label: "Leads Generated" },
  { value: "120+", label: "Campaigns" },
  { value: "98%", label: "Client Retention" },
  { value: "+72%", label: "Conversion Rate" },
  { value: "3.9x", label: "Revenue Growth" },
  { value: "850K+", label: "Ad Impressions" },
  { value: "41%", label: "Cost Savings" },
];

export default function Hero() {
  const [activeBg, setActiveBg] = useState(0);
  const [mounted, setMounted] = useState(false);

  const sliderRef = useRef<HTMLDivElement | null>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);
  const autoSlideRef = useRef<number | null>(null);

  useEffect(() => {
    setMounted(true);

    const timer = setInterval(() => {
      setActiveBg((prev) => (prev + 1) % bgImages.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  // infinite loop + auto slide
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const oneSetWidth = slider.scrollWidth / 3;

    // start from middle set for seamless both-side drag
    slider.scrollLeft = oneSetWidth;

    const handleLoop = () => {
      if (!slider) return;

      if (slider.scrollLeft <= oneSetWidth * 0.15) {
        slider.scrollLeft += oneSetWidth;
      } else if (slider.scrollLeft >= oneSetWidth * 1.85) {
        slider.scrollLeft -= oneSetWidth;
      }
    };

    const startAutoSlide = () => {
      stopAutoSlide();

      autoSlideRef.current = window.setInterval(() => {
        if (!slider || isDown.current) return;
        slider.scrollLeft += 1;
        handleLoop();
      }, 16); // ~60fps smooth
    };

    const stopAutoSlide = () => {
      if (autoSlideRef.current) {
        window.clearInterval(autoSlideRef.current);
        autoSlideRef.current = null;
      }
    };

    slider.addEventListener("scroll", handleLoop);
    startAutoSlide();

    const handleMouseEnter = () => stopAutoSlide();
    const handleMouseLeaveAuto = () => {
      if (!isDown.current) startAutoSlide();
    };

    slider.addEventListener("mouseenter", handleMouseEnter);
    slider.addEventListener("mouseleave", handleMouseLeaveAuto);

    return () => {
      slider.removeEventListener("scroll", handleLoop);
      slider.removeEventListener("mouseenter", handleMouseEnter);
      slider.removeEventListener("mouseleave", handleMouseLeaveAuto);
      stopAutoSlide();
    };
  }, []);

  const pauseAuto = () => {
    if (autoSlideRef.current) {
      window.clearInterval(autoSlideRef.current);
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
      {/* Full background slider */}
      <div className={styles.bgSlider}>
        {bgImages.map((img, index) => (
          <div
            key={img}
            className={`${styles.bgSlide} ${
              index === activeBg ? styles.bgSlideActive : ""
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      {/* FULL HERO DARK OVERLAY */}
      <div className={styles.bgOverlay} />

      {/* decorative overlays */}
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
                  We help ambitious brands grow with SEO, paid ads and
                  high-converting websites.
                </p>
              </div>

              <div className={styles.leftBottom}>
                <div className={styles.actions}>
                  <a
                    href="#contact"
                    className={`btn btn-primary ${styles.primaryBtn}`}
                  >
                    Book a Free Call
                  </a>
                  <a
                    href="#work"
                    className={`btn btn-secondary ${styles.secondaryBtn}`}
                  >
                    See Our Work
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom result cards slider */}
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
                <div key={`${item.label}-${index}`} className={styles.resultCard}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
