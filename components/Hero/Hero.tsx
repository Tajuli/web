"use client";

import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

const rotatingWords = [
  "SEO that ranks",
  "Ads that convert",
  "Websites that sell",
  "Funnels that scale",
];

const proofStats = [
  { value: "+184%", label: "Organic growth lift" },
  { value: "4.8x", label: "Average ROAS" },
  { value: "-31%", label: "Lower CPL" },
];

const floatingCards = [
  { label: "Leads This Month", value: "+52" },
  { label: "ROAS Lift", value: "4.8x" },
  { label: "SEO Visibility", value: "+162%" },
];

export default function Hero() {
  const [activeWord, setActiveWord] = useState(0);
  const [bars, setBars] = useState([36, 52, 66, 84, 72, 92]);

  useEffect(() => {
    const wordTimer = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % rotatingWords.length);
    }, 2200);

    const chartTimer = setInterval(() => {
      setBars((prev) =>
        prev.map(() => 35 + Math.floor(Math.random() * 60))
      );
    }, 1800);

    return () => {
      clearInterval(wordTimer);
      clearInterval(chartTimer);
    };
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      {/* background glows */}
      <div className={`${styles.glow} ${styles.glowA}`} />
      <div className={`${styles.glow} ${styles.glowB}`} />
      <div className={`${styles.glow} ${styles.glowC}`} />

      {/* subtle grid */}
      <div className={styles.gridOverlay} />

      <div className={`site-container ${styles.heroGrid}`}>
        {/* LEFT */}
        <div className={styles.copyCol}>
          <div className={styles.kickerWrap}>
            <span className={styles.kickerDot} />
            <p className={styles.kicker}>PrimeDigitor • Premium Growth Marketing Agency</p>
          </div>

          <h1 className={styles.title}>
            We build <span>growth systems</span> that turn traffic into revenue.
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
            <a href="#contact" className="btn btn-primary">
              Book Free Strategy Call
            </a>
            <a href="#work" className={`btn btn-secondary ${styles.secondaryBtn}`}>
              View Our Work
            </a>
          </div>

          <div className={styles.miniProof}>
            {proofStats.map((item) => (
              <div key={item.label} className={styles.miniProofItem}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.visualCol}>
          <div className={styles.dashboardShell}>
            {/* floating cards */}
            <div className={`${styles.floatCard} ${styles.floatCardOne}`}>
              <span>{floatingCards[0].label}</span>
              <strong>{floatingCards[0].value}</strong>
            </div>

            <div className={`${styles.floatCard} ${styles.floatCardTwo}`}>
              <span>{floatingCards[1].label}</span>
              <strong>{floatingCards[1].value}</strong>
            </div>

            <div className={`${styles.floatCard} ${styles.floatCardThree}`}>
              <span>{floatingCards[2].label}</span>
              <strong>{floatingCards[2].value}</strong>
            </div>

            <div className={styles.dashboard}>
              <div className={styles.dashboardTop}>
                <div>
                  <p>Campaign Snapshot</p>
                  <h3>Growth Engine Overview</h3>
                </div>
                <div className={styles.liveBadge}>Live</div>
              </div>

              <div className={styles.dashboardPanels}>
                <div className={`${styles.panel} ${styles.panelLarge}`}>
                  <span>Organic Pipeline</span>
                  <strong>+162%</strong>
                  <small>traffic & visibility growth</small>
                </div>

                <div className={styles.panel}>
                  <span>Lead Quality</span>
                  <strong>+58%</strong>
                  <small>higher intent enquiries</small>
                </div>

                <div className={styles.panel}>
                  <span>Cost Per Lead</span>
                  <strong>-31%</strong>
                  <small>campaign efficiency</small>
                </div>
              </div>

              <div className={styles.chart}>
                <div className={styles.chartHead}>
                  <span>6-Month Momentum</span>
                  <span>SEO + Ads + CRO</span>
                </div>

                <div className={styles.bars}>
                  {bars.map((height, index) => (
                    <span
                      key={index}
                      style={{
                        height: `${height}%`,
                        transition: "height .7s ease",
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className={styles.bottomStrip}>
                <div className={styles.bottomMetric}>
                  <span>Landing Page CVR</span>
                  <strong>+44%</strong>
                </div>
                <div className={styles.bottomMetric}>
                  <span>Search Visibility</span>
                  <strong>+186%</strong>
                </div>
                <div className={styles.bottomMetric}>
                  <span>Revenue Lift</span>
                  <strong>+224%</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
