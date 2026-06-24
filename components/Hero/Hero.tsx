"use client";

import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

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

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.gridOverlay} />
      <div className={`${styles.glow} ${styles.glowA}`} />
      <div className={`${styles.glow} ${styles.glowB}`} />

      <div className={`site-container ${styles.heroInner}`}>
        <div className={styles.heroMain}>
          {/* LEFT */}
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

          {/* RIGHT - MOTION POSTER CARD */}
          <div className={`${styles.right} ${mounted ? styles.revealRight : ""}`}>
            <div className={styles.posterShell}>
              <div className={styles.posterGrid}></div>

              <div className={styles.posterGlowA}></div>
              <div className={styles.posterGlowB}></div>

              <div className={styles.posterRing}></div>
              <div className={styles.posterRingSmall}></div>
              <div className={styles.posterLine}></div>

              <div className={styles.posterBadge}>
                <span className={styles.posterBadgeDot}></span>
                PrimeDigitor Growth System
              </div>

              <div className={styles.posterTop}>
                <p className={styles.posterEyebrow}>Performance Marketing</p>

                <div className={styles.posterWords}>
                  <span className={styles.posterWord}>Strategy</span>
                  <span className={styles.posterWord}>Traffic</span>
                  <span className={styles.posterWord}>Conversion</span>
                </div>

                <p className={styles.posterText}>
                  SEO, paid acquisition and conversion-focused web experiences
                  built to help ambitious brands scale with clarity.
                </p>
              </div>

              {/* floating chips */}
              <div className={`${styles.posterChip} ${styles.chipOne}`}>
                Search Visibility
              </div>
              <div className={`${styles.posterChip} ${styles.chipTwo}`}>
                Paid Growth
              </div>
              <div className={`${styles.posterChip} ${styles.chipThree}`}>
                Website Conversion
              </div>

              {/* bottom footer */}
              <div className={styles.posterFooter}>
                <div className={styles.posterMeta}>
                  <span>SEO</span>
                  <span>Paid Ads</span>
                  <span>Web Design</span>
                </div>

                <a href="#work" className={styles.posterLink}>
                  View Case Studies
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M7 17L17 7M17 7H8.5M17 7V15.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
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
