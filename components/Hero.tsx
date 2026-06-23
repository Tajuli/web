const stats = [
  { label: "Organic growth", value: "+184%" },
  { label: "Avg. ROAS", value: "4.3x" },
  { label: "Lead volume", value: "3.7x" },
  { label: "CAC reduction", value: "-29%" }
];

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />
      <div className="site-container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Growth systems for modern brands</p>
          <h1 className="hero-title">Digital marketing that feels <span>premium</span> and performs like a revenue engine.</h1>
          <p className="hero-text">
            PrimeDigitor helps service businesses, healthcare brands and growth-focused companies scale with high-converting websites, SEO systems, paid acquisition and conversion-led creative strategy.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">Book a Strategy Call</a>
            <a href="#work" className="btn btn-secondary">View Case Studies</a>
          </div>
          <div className="hero-proof-strip">
            <div>SEO</div><div>Paid Ads</div><div>Web Design</div><div>Lead Generation</div><div>CRO</div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-visual-shell">
            <div className="hero-visual-top">
              <div><p className="panel-kicker">Growth dashboard</p><h3>Performance Snapshot</h3></div>
              <div className="panel-chip">Live</div>
            </div>

            <div className="stats-grid">
              {stats.map((item) => (
                <div key={item.label} className="stat-box">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>

            <div className="hero-chart-card">
              <div className="chart-header"><span>Campaign Momentum</span><strong>Last 90 Days</strong></div>
              <div className="chart-bars">
                <span style={{height:"38%"}} />
                <span style={{height:"52%"}} />
                <span style={{height:"48%"}} />
                <span style={{height:"68%"}} />
                <span style={{height:"74%"}} />
                <span style={{height:"82%"}} />
                <span style={{height:"96%"}} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
