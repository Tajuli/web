"use client";

import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

const bgImages = [
  "/images/hero/hero-1.png",
  "/images/hero/hero-2.png",
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
  const [activeBg, setActiveBg] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const timer = setInterval(() => {
      setActiveBg((prev) => (prev + 1) % bgImages.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      {/* Background image slider */}
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

      {/* NO overlay */}
      <div className={styles.gridOverlay} />
      <div className={`${styles.glow} ${styles.glowA}`} />
      <div className={`${styles.glow} ${styles.glowB}`} />

      <div className={`site-container ${styles.heroInner}`}>
        <div className={styles.heroMain}>
          <div className={`${styles.heroContent} ${mounted ? styles.reveal : ""}`}>
            <div className={styles.kickerWrap}>
              <span className={styles.kickerDot} />
              <p className={styles.kicker}>
                PrimeDigitor • Digital Marketing Agency
              </p>
            </div>

            <h1 className={styles.title}>
              <span className={styles.titleLine}>Growth-focused marketing</span>
              <span className={styles.titleLine}>that drives</span>
              <span className={styles.titleLineAccent}>real business results.</span>
            </h1>

            <p className={styles.text}>
              We help ambitious brands scale with SEO, performance marketing,
              and conversion-focused websites that turn traffic into revenue.
            </p>

            <div className={styles.actions}>
              <a
                href="#contact"
                className={`btn btn-primary ${styles.primaryBtn}`}
              >
                Book a Free Call
              </a>
            </div>
          </div>
        </div>

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
