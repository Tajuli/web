const stats = [
  { value: "+184%", label: "Organic growth lift" },
  { value: "4.3x", label: "Average ROAS" },
  { value: "-31%", label: "Lower CPL" },
];

export default function Hero() {
  return (
    <section id="hero" className="hero-v3">
      <div className="hero-v3-glow hero-v3-glow-a" />
      <div className="hero-v3-glow hero-v3-glow-b" />
      <div className="site-container hero-v3-grid">
        <div className="hero-v3-copy">
          <p className="hero-kicker">PrimeDigitor • Growth-Driven Digital Marketing</p>
          <h1 className="hero-v3-title">
            Premium digital marketing systems for brands that want <span>real growth</span>, not random tactics.
          </h1>
          <p className="hero-v3-text">
            We combine strategy, SEO, paid acquisition, web design and conversion thinking into one
            performance system—so your website, traffic and lead flow actually work together.
          </p>
          <div className="hero-v3-actions">
            <a href="#contact" className="btn btn-primary">Book a Strategy Call</a>
            <a href="#work" className="btn btn-secondary">See Our Work</a>
          </div>
          <div className="hero-v3-mini-proof">
            {stats.map((item) => (
              <div key={item.label} className="hero-v3-mini-proof-item">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-v3-visual">
          <div className="hero-v3-dashboard">
            <div className="dashboard-top">
              <div>
                <p>Campaign Snapshot</p>
                <h3>Growth Engine Overview</h3>
              </div>
              <div className="dashboard-badge">Live</div>
            </div>
            <div className="dashboard-panels">
              <div className="dashboard-panel large"><span>Organic Pipeline</span><strong>+162%</strong></div>
              <div className="dashboard-panel"><span>ROAS</span><strong>4.1x</strong></div>
              <div className="dashboard-panel"><span>Qualified Leads</span><strong>+93%</strong></div>
            </div>
            <div className="dashboard-chart">
              <div className="dashboard-chart-head"><span>Performance trend</span><strong>Last 90 days</strong></div>
              <div className="dashboard-bars">
                <span style={{height:"34%"}} /><span style={{height:"42%"}} /><span style={{height:"49%"}} />
                <span style={{height:"63%"}} /><span style={{height:"76%"}} /><span style={{height:"84%"}} />
                <span style={{height:"96%"}} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
