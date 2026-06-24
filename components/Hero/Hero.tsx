"use client";

import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

const changingTexts = [
  "drives real business results.",
  "turns traffic into qualified leads.",
  "scales brands with measurable growth.",
  "converts clicks into revenue.",
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
  const [textIndex, setTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setTextIndex((prev) => (prev + 1) % changingTexts.length);
        setIsVisible(true);
      }, 320);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      {/* Single background image */}
      <div
        className={styles.bgImage}
        style={{ backgroundImage: "url('/images/hero/hero-1.png')" }}
      />

      {/* Decorative layers only */}
      <div className={styles.gridOverlay} />
      <div className={`${styles.glow} ${styles.glowA}`} />
      <div className={`${styles.glow} ${styles.glowB}`} />

      <div className={`site-container ${styles.heroInner}`}>
        <div className={styles.heroContent}>
          <div className={styles.kickerWrap}>
            <span className={styles.kickerDot} />
            <p className={styles.kicker}>
              PrimeDigitor • Digital Marketing Agency
            </p>
          </div>

          <h1 className={styles.title}>
            <span className={styles.titleStatic}>
              Growth-focused marketing that
            </span>

            <span className={styles.animatedLineWrap}>
              <span
                key={textIndex}
                className={`${styles.animatedLine} ${
                  isVisible ? styles.revealIn : styles.revealOut
                }`}
              >
                {changingTexts[textIndex]}
              </span>
            </span>
          </h1>

          <p className={styles.text}>
            We help ambitious brands grow with SEO, paid ads, conversion-focused
            strategy and high-performing websites.
          </p>

          <div className={styles.actions}>
            <a
              href="#contact"
              className={`btn btn-primary ${styles.primaryBtn}`}
            >
              Book a Free Strategy Call
            </a>
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
