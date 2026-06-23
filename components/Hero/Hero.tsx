"use client";

import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

const rotatingWords = [
  "SEO that ranks",
  "Ads that convert",
  "Websites that sell",
  "Funnels that scale",
];

const slides = [
  {
    tag: "SEO Growth",
    title: "Organic visibility that compounds month after month.",
    desc:
      "Technical SEO, content strategy and authority building aligned to bring qualified traffic and long-term search growth.",
    metric: "+184%",
    metricLabel: "Organic traffic growth",
    chip1: "Technical SEO",
    chip2: "Content Strategy",
    chip3: "Authority Building",
  },
  {
    tag: "Paid Media",
    title: "Performance campaigns built for pipeline, not vanity clicks.",
    desc:
      "Google Ads and Meta campaigns structured around better lead quality, stronger ROAS and lower cost per acquisition.",
    metric: "4.8x",
    metricLabel: "Average ROAS",
    chip1: "Google Ads",
    chip2: "Meta Ads",
    chip3: "Lead Funnels",
  },
  {
    tag: "Web + CRO",
    title: "Premium websites that turn attention into enquiries.",
    desc:
      "Fast, conversion-focused websites and landing pages designed to make your brand look premium and convert visitors into leads.",
    metric: "+44%",
    metricLabel: "Landing page CVR lift",
    chip1: "UI/UX",
    chip2: "CRO",
    chip3: "Web Design",
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
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 3400);

    return () => {
      clearInterval(wordTimer);
      clearInterval(slideTimer);
    };
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.gridOverlay} />
      <div className={`${styles.glow} ${styles.glowA}`} />
      <div className={`${styles.glow} ${styles.glowB}`} />
      <div className={`${styles.glow} ${styles.glowC}`} />

      <div className={`site-container ${styles.heroGrid}`}>
        {/* LEFT */}
        <div className={`${styles.copyCol} ${mounted ? styles.reveal : ""}`}>
          <div className={styles.kickerWrap}>
            <span className={styles.kickerDot} />
            <p className={styles.kicker}>PrimeDigitor • Premium Growth Marketing Agency</p>
          </div>

          <h1 className={styles.title}>
            We build <span>brand growth</span>
            <br />
            that turns traffic into revenue.
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
            PrimeDigitor helps ambitious brands grow through SEO, paid ads,
            premium websites and conversion-focused funnels—so your marketing
            stops feeling fragmented and starts producing qualified leads,
            stronger trust and measurable revenue growth.
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

        {/* RIGHT */}
        <div className={`${styles.visualCol} ${mounted ? styles.revealRight : ""}`}>
          <div className={styles.sliderShell}>
            <div className={styles.sliderTop}>
              <span className={styles.sliderEyebrow}>Growth Stack</span>

              <div className={styles.dots}>
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
            </div>

            <div className={styles.slideStack}>
              {slides.map((slide, index) => {
                const offset = (index - activeSlide + slides.length) % slides.length;

                let stateClass = styles.cardBack;
                if (offset === 0) stateClass = styles.cardActive;
                else if (offset === 1) stateClass = styles.cardNext;
                else stateClass = styles.cardBack;

                return (
                  <article
                    key={slide.title}
                    className={`${styles.slideCard} ${stateClass}`}
                  >
                    <div className={styles.cardHeader}>
                      <span className={styles.cardTag}>{slide.tag}</span>
                    </div>

                    <div className={styles.cardBody}>
                      <div className={styles.cardLeft}>
                        <h3>{slide.title}</h3>
                        <p>{slide.desc}</p>

                        <div className={styles.chips}>
                          <span>{slide.chip1}</span>
                          <span>{slide.chip2}</span>
                          <span>{slide.chip3}</span>
                        </div>
                      </div>

                      <div className={styles.metricCard}>
                        <span>Result Snapshot</span>
                        <strong>{slide.metric}</strong>
                        <small>{slide.metricLabel}</small>
                      </div>
                    </div>

                    <div className={styles.cardVisual}>
                      <div className={styles.visualPanelLarge}>
                        <div className={styles.visualPanelHeader}>
                          <span>Performance Trend</span>
                          <span>Live</span>
                        </div>

                        <div className={styles.lineChart}>
                          <span className={styles.lineA}></span>
                          <span className={styles.lineB}></span>
                        </div>
                      </div>

                      <div className={styles.visualPanelRow}>
                        <div className={styles.visualMini}>
                          <span>Lead Quality</span>
                          <strong>+58%</strong>
                        </div>
                        <div className={styles.visualMini}>
                          <span>Cost Per Lead</span>
                          <strong>-31%</strong>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
