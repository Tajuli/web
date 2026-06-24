"use client";

import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

const heroBgImages = [
  "/images/hero-bg-1.jpg",
  "/images/hero-bg-2.jpg",
  "/images/hero-bg-3.jpg",
];

const resultCards = [
  { value: "+184%", label: "Organic Growth" },
  { value: "4.8x", label: "ROAS" },
  { value: "-31%", label: "CPL" },
  { value: "2,450+", label: "Leads Generated" },
  { value: "120+", label: "Campaigns" },
  { value: "98%", label: "Client Retention" },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [activeBg, setActiveBg] = useState(0);

  useEffect(() => {
    setMounted(true);

    const bgTimer = setInterval(() => {
      setActiveBg((prev) => (prev + 1) % heroBgImages.length);
    }, 4000);

    return () => clearInterval(bgTimer);
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      {/* Auto changing background images */}
      <div className={styles.bgSlider}>
        {heroBgImages.map((img, index) => (
          <div
            key={img}
            className={`${styles.bgSlide} ${
              index === activeBg ? styles.bgSlideActive : ""
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      {/* dark overlay */}
      <div className={styles.heroOverlay} />

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

        {/* Bottom result cards */}
        <div className={styles.resultRow}>
          {resultCards.map((item) => (
            <div key={item.label} className={styles.resultCard}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
