"use client";

import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

const bgImages = [
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

const rotatingTexts = [
  "drives real business results.",
  "turns traffic into qualified leads.",
  "scales revenue with smart strategy.",
  "builds brands that actually convert.",
];

export default function Hero() {
  const [activeBg, setActiveBg] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [activeText, setActiveText] = useState(0);
  const [textVisible, setTextVisible] = useState(true);

  useEffect(() => {
    setMounted(true);

    const bgTimer = setInterval(() => {
      setActiveBg((prev) => (prev + 1) % bgImages.length);
    }, 5000);

    return () => clearInterval(bgTimer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextVisible(false);

      const timeout = setTimeout(() => {
        setActiveText((prev) => (prev + 1) % rotatingTexts.length);
        setTextVisible(true);
      }, 320);

      return () => clearTimeout(timeout);
    }, 2600);

    return () => clearInterval(interval);
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

      {/* Decorative layers only */}
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
              <span className={styles.titleStatic}>
                Growth-focused marketing
                <br />
                that
              </span>

              <span
                className={`${styles.titleDynamic} ${
                  textVisible ? styles.textIn : styles.textOut
                }`}
                key={activeText}
              >
                {rotatingTexts[activeText]}
              </span>
            </h1>

            <p className={styles.text}>
              We help ambitious brands grow with SEO, paid ads, content and
              high-converting websites that generate measurable revenue.
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
