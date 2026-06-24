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

const glassMetrics = [
  { value: "+184%", label: "Organic Traffic" },
  { value: "4.8x", label: "Average ROAS" },
  { value: "-31%", label: "Cost Per Lead" },
];

const serviceTags = [
  "SEO",
  "Paid Ads",
  "Web Design",
  "Lead Gen",
  "Analytics",
  "Conversion",
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

          {/* RIGHT - NEW GLASS PANEL */}
          <div className={`${styles.right} ${mounted ? styles.revealRight : ""}`}>
            <div className={styles.glassPanel}>
              <div className={styles.glassPanelTop}>
                <div className={styles.glassBadge}>
                  <span className={styles.glassBadgeDot} />
                  <span>Growth Snapshot</span>
                </div>

                <div className={styles.glassMiniPill}>Performance Marketing</div>
              </div>

              <div className={styles.glassContent}>
                <div className={styles.glassCopy}>
                  <p className={styles.glassEyebrow}>Strategy • SEO • Paid Ads</p>

                  <h3 className={styles.glassTitle}>
                    A premium digital growth partner for brands that want
                    <span> measurable results.</span>
                  </h3>

                  <p className={styles.glassText}>
                    We combine SEO, paid media and high-converting web design to
                    build scalable growth systems for modern businesses.
                  </p>
                </div>

                <div className={styles.glassStatsGrid}>
                  {glassMetrics.map((item) => (
                    <div key={item.label} className={styles.glassStatCard}>
                      <strong>{item.value}</strong>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.glassChartCard}>
                  <div className={styles.chartHeader}>
                    <div>
                      <p className={styles.chartLabel}>Campaign Momentum</p>
                      <h4>Steady month-on-month growth</h4>
                    </div>
                    <span className={styles.chartGrowth}>+32%</span>
                  </div>

                  <div className={styles.chartBars}>
                    <span style={{ height: "36%" }} />
                    <span style={{ height: "52%" }} />
                    <span style={{ height: "46%" }} />
                    <span style={{ height: "68%" }} />
                    <span style={{ height: "58%" }} />
                    <span style={{ height: "82%" }} />
                    <span style={{ height: "100%" }} />
                  </div>
                </div>

                <div className={styles.serviceTags}>
                  {serviceTags.map((tag) => (
                    <span key={tag} className={styles.serviceTag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.panelGlowOne} />
              <div className={styles.panelGlowTwo} />
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
