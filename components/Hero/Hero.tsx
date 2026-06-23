"use client";

import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

const rotatingWords = [
  "SEO that ranks",
  "Ads that convert",
  "Websites that sell",
  "Funnels that scale",
];

const heroSlides = [
  {
    label: "SEO Growth",
    title: "Organic traffic that compounds every month",
    stat: "+184%",
    sub: "Visibility & traffic growth",
    points: ["Technical SEO", "Content strategy", "Authority growth"],
  },
  {
    label: "Paid Ads",
    title: "Performance campaigns built for qualified leads",
    stat: "4.8x",
    sub: "Average ROAS across campaigns",
    points: ["Google Ads", "Meta Ads", "Lead generation funnels"],
  },
  {
    label: "Web + CRO",
    title: "Premium websites that turn attention into enquiries",
    stat: "+44%",
    sub: "Landing page conversion lift",
    points: ["Conversion-first design", "Fast UX", "High-intent CTAs"],
  },
];

const proofStats = [
  { value: "+184%", label: "Organic growth lift" },
  { value: "4.8x", label: "Average ROAS" },
  { value: "-31%", label: "Lower CPL" },
];

export default function Hero() {
  const [activeWord, setActiveWord] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const wordTimer = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % rotatingWords.length);
    }, 2200);

    const slideTimer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3200);

    return () => {
      clearInterval(wordTimer);
      clearInterval(slideTimer);
    };
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.noise} />
      <div className={styles.gridOverlay} />
      <div className={`${styles.glow} ${styles.glowA}`} />
      <div className={`${styles.glow} ${styles.glowB}`} />
      <div className={`${styles.glow} ${styles.glowC}`} />

      <div className={`site-container ${styles.heroGrid}`}>
        {/* LEFT CONTENT */}
        <div className={`${styles.copyCol} ${mounted ? styles.reveal : ""}`}>
          <div className={styles.kickerWrap}>
            <span className={styles.kickerDot} />
            <p className={styles.kicker}>PrimeDigitor • Growth Marketing Agency</p>
          </div>

          <h1 className={styles.title}>
            We turn <span>attention</span> into
            <br />
            pipeline, leads & revenue.
          </h1>

          <div className={styles.rotatorWrap}>
            <span className={styles.rotatorLabel}>Built for brands that need</span>
            <div className={styles.rotatorBox}>
              {rotatingWords.map((word, index) => (
                <span
                  key={word}
                  className={`${styles.rotatorWord} ${
                    index === activeWord ? styles.rotatorWordActive : ""
                  }`}
                >
                  {word}
                </span>
              ))}
            </div>
          </div>

          <p className={styles.text}>
            PrimeDigitor helps ambitious brands grow with SEO, paid ads,
            premium web experiences and conversion-focused funnels—so your
            marketing stops feeling scattered and starts producing measurable,
            repeatable growth.
          </p>

          <div className={styles.actions}>
            <a href="#contact" className={`btn btn-primary ${styles.primaryBtn}`}>
              Book Free Strategy Call
            </a>
            <a href="#work" className={`btn btn-secondary ${styles.secondaryBtn}`}>
              View Our Work
            </a>
          </div>

          <div className={styles.miniProof}>
            {proofStats.map((item, i) => (
              <div
                key={item.label}
                className={`${styles.miniProofItem} ${mounted ? styles.reveal : ""}`}
                style={{ transitionDelay: `${0.12 * i}s` }}
              >
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SLIDE SHOWCASE */}
        <div className={`${styles.visualCol} ${mounted ? styles.revealRight : ""}`}>
          <div className={styles.visualWrap}>
            <div className={styles.visualTopBar}>
              <span className={styles.visualTag}>Growth Stack</span>
              <div className={styles.dots}>
                {heroSlides.map((_, index) => (
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
            </div>

            <div className={styles.slideStage}>
              {heroSlides.map((slide, index) => {
                const offset = (index - activeSlide + heroSlides.length) % heroSlides.length;

                let cardClass = styles.slideCardBack;
                if (offset === 0) cardClass = styles.slideCardActive;
                else if (offset === 1) cardClass = styles.slideCardNext;
                else if (offset === 2) cardClass = styles.slideCardBack;

                return (
                  <article
                    key={slide.title}
                    className={`${styles.slideCard} ${cardClass}`}
                  >
                    <div className={styles.slideBadge}>{slide.label}</div>

                    <div className={styles.slideContent}>
                      <div className={styles.slideMain}>
                        <h3>{slide.title}</h3>
                        <p>{slide.sub}</p>

                        <ul className={styles.featureList}>
                          {slide.points.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      </div>

                      <div className={styles.slideStatBox}>
                        <span>Result Snapshot</span>
                        <strong>{slide.stat}</strong>
                        <small>{slide.sub}</small>
                      </div>
                    </div>

                    <div className={styles.mockChart}>
                      <div className={styles.chartLine} />
                      <div className={styles.chartBars}>
                        <span style={{ height: "34%" }} />
                        <span style={{ height: "48%" }} />
                        <span style={{ height: "56%" }} />
                        <span style={{ height: "74%" }} />
                        <span style={{ height: "68%" }} />
                        <span style={{ height: "88%" }} />
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className={styles.bottomStrip}>
              <div className={styles.bottomMetric}>
                <span>Search Visibility</span>
                <strong>+186%</strong>
              </div>
              <div className={styles.bottomMetric}>
                <span>Landing Page CVR</span>
                <strong>+44%</strong>
              </div>
              <div className={styles.bottomMetric}>
                <span>Revenue Lift</span>
                <strong>+224%</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
