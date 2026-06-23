const stats = [
  { label: "Organic Growth", value: "+184%" },
  { label: "Lead Volume", value: "3.7x" },
  { label: "Avg. ROAS", value: "4.3x" },
  { label: "CAC Reduction", value: "-29%" },
];

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="site-container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Digital growth partner</p>
          <h1 className="hero-title">
            We build <span>high-converting</span> digital experiences for ambitious brands.
          </h1>
          <p className="hero-text">
            PrimeDigitor helps growth-focused businesses scale with performance marketing, SEO,
            conversion-first websites and content systems that turn attention into pipeline.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">Start a Project</a>
            <a href="#work" className="btn btn-secondary">Explore Our Work</a>
          </div>

          <div className="hero-metrics">
            <div className="metric-card">
              <span>Paid Growth</span>
              <strong>Performance campaigns built for ROI, not vanity metrics.</strong>
            </div>
            <div className="metric-card">
              <span>Web + CRO</span>
              <strong>Landing pages and sites designed to convert traffic into leads.</strong>
            </div>
          </div>
        </div>

        <div className="hero-panel">
          <div className="hero-panel-shell">
            <div className="hero-panel-top">
              <div>
                <p className="panel-kicker">Performance Snapshot</p>
                <h3>Growth Engine Dashboard</h3>
              </div>
              <div className="panel-chip">Live Strategy</div>
            </div>

            <div className="stats-grid">
              {stats.map((item) => (
                <div key={item.label} className="stat-box">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
