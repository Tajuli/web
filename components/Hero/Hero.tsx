"use client";

import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

const slides = [
  {
    number: "01",
    tag: "SEO & Content Strategy",
    title: "Rank Higher.\nGet Discovered.",
    text: "Data-driven SEO that brings consistent organic growth.",
  },
  {
    number: "02",
    tag: "Paid Advertising",
    title: "More Leads.\nBetter ROI.",
    text: "Google & Meta campaigns built for qualified conversions.",
  },
  {
    number: "03",
    tag: "Web Design & CRO",
    title: "Websites That\nConvert.",
    text: "Premium websites designed to turn visitors into enquiries.",
  },
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
  const [activeSlide, setActiveSlide] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 3200);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.gridOverlay} />
      <div className={`${styles.glow} ${styles.glowA}`} />
      <div className={`${styles.glow} ${styles.glowB}`} />

      <div className={`site-container ${styles.heroInner}`}>
        {/* Top hero row */}
        <div className={styles.heroMain}>
          {/* LEFT */}
          <div className={`${styles.left} ${mounted ? styles.reveal : ""}`}>
            <div className={styles.kickerWrap}>
              <span className={styles.kickerDot} />
              <p className={styles.kicker}>PrimeDigitor • Digital Marketing Agency</p>
            </div>

            <h1 className={styles.title}>
              Growth-focused
              <br />
              marketing that
              <br />
              <span>delivers results.</span>
            </h1>

            <p className={styles.text}>
              We help ambitious brands grow with SEO, paid ads and
              high-converting websites.
            </p>

            <div className={styles.actions}>
              <a href="#contact" className={`btn btn-primary ${styles.primaryBtn}`}>
                Book a Free Call
              </a>
              <a href="#work" className={`btn btn-secondary ${styles.secondaryBtn}`}>
                See Our Work
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className={`${styles.right} ${mounted ? styles.revealRight : ""}`}>
            <div className={styles.sliderShell}>
              <div className={styles.sliderDots}>
                {slides.map((_, index) => (
                  <button
                    key={index}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`${styles.dot} ${
                      activeSlide === index ? styles.dotActive : ""
                    }`}
                    onClick={() => setActiveSlide(index)}
                  />
                ))}
              </div>

              <div className={styles.slideViewport}>
                {slides.map((slide, index) => (
                  <article
                    key={slide.number}
                    className={`${styles.slide} ${
                      index === activeSlide ? styles.slideActive : styles.slideHidden
                    }`}
                  >
                    <div className={styles.slideTop}>
                      <span className={styles.slideNumber}>{slide.number}</span>
                      <span className={styles.slideTag}>{slide.tag}</span>
                    </div>

                    <div className={styles.slideContent}>
                      <div className={styles.slideCopy}>
                        <h3>
                          {slide.title.split("\n").map((line, i) => (
                            <span key={i}>
                              {line}
                              <br />
                            </span>
                          ))}
                        </h3>
                        <p>{slide.text}</p>
                      </div>

                      <div className={styles.slideVisual}>
                        <div className={styles.lineChart}>
                          <span className={styles.line}></span>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
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
