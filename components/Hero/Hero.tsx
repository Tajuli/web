import styles from "./Hero.module.css";

const stats = [
  { value: "+184%", label: "Organic growth lift" },
  { value: "4.3x", label: "Average ROAS" },
  { value: "-31%", label: "Lower CPL" },
];

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`${styles.glow} ${styles.glowA}`} />
      <div className={`${styles.glow} ${styles.glowB}`} />

      <div className={`site-container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className={styles.kicker}>PrimeDigitor • Growth-Driven Digital Marketing</p>
          <h1 className={styles.title}>
            Premium digital marketing systems for brands that want <span>real growth</span>, not random tactics.
          </h1>
          <p className={styles.text}>
            We combine strategy, SEO, paid acquisition, web design and conversion thinking into one
            performance system—so your website, traffic and lead flow actually work together.
          </p>

          <div className={styles.actions}>
            <a href="#contact" className="btn btn-primary">Book a Strategy Call</a>
            <a href="#work" className="btn btn-secondary">See Our Work</a>
          </div>

          <div className={styles.miniProof}>
            {stats.map((item) => (
              <div key={item.label} className={styles.miniProofItem}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.dashboard}>
            <div className={styles.dashboardTop}>
              <div>
                <p>Campaign Snapshot</p>
                <h3>Growth Engine Overview</h3>
              </div>
              <div className={styles.badge}>Live</div>
            </div>

            <div className={styles.dashboardPanels}>
              <div className={`${styles.dashboardPanel} ${styles.large}`}>
                <span>Organic Pipeline</span>
                <strong>+162%</strong>
              </div>
              <div className={styles.dashboardPanel}>
                <span>Lead Quality</span>
                <strong>+58%</strong>
              </div>
              <div className={styles.dashboardPanel}>
                <span>CPL</span>
                <strong>-31%</strong>
              </div>
            </div>

            <div className={styles.chart}>
              <div className={styles.chartHead}>
                <span>6-Month Trend</span>
                <span>Search + Ads + CRO</span>
              </div>
              <div className={styles.bars}>
                <span style={{ height: "38%" }} />
                <span style={{ height: "52%" }} />
                <span style={{ height: "68%" }} />
                <span style={{ height: "82%" }} />
                <span style={{ height: "74%" }} />
                <span style={{ height: "92%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
