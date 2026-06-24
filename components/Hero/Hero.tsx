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
  { value: "-31%", label: "Lower CPL" },
  { value: "2,450+", label: "Leads Generated" },
  { value: "120+", label: "Campaigns Managed" },
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
      {/* Background slider */}
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

      {/* Decorative overlays */}
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
                    PrimeDigitor • SEO, Paid Ads & Web Growth
                  </p>
                </div>

                <h1 className={styles.title}>
                  We build <span>growth systems</span> that bring more leads,
                  better conversions and measurable revenue.
                </h1>

                <p className={styles.text}>
                  PrimeDigitor helps ambitious brands grow with SEO, paid ads,
                  conversion-focused websites and performance-driven marketing
                  strategies built to scale.
                </p>
              </div>

              <div className={styles.leftBottom}>
                <div className={styles.actions}>
                  <a
                    href="#contact"
                    className={`btn btn-primary ${styles.primaryBtn}`}
                  >
                    Book a Free Strategy Call
                  </a>
                </div>

                <div className={styles.trustLine}>
                  <span className={styles.trustItem}>SEO Growth</span>
                  <span className={styles.trustDivider} />
                  <span className={styles.trustItem}>Paid Ads</span>
                  <span className={styles.trustDivider} />
                  <span className={styles.trustItem}>High-Converting Websites</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Result cards */}
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
