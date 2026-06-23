const logos = ["PrimeCare","Vertex Labs","Mediora","Lumen Growth","Apex Build","Northlane"];

export default function Clients() {
  return (
    <section id="clients" className="section section-dark">
      <div className="site-container">
        <div className="section-head">
          <p className="eyebrow">Clients & trust</p>
          <h2 className="section-title">More than logos — a cleaner proof layer for trust and credibility.</h2>
          <p className="section-text">Replace these placeholders with real client logos, industries, results snapshots or featured wins.</p>
        </div>

        <div className="logo-marquee premium-logo-marquee">
          <div className="logo-track">
            {[...logos, ...logos].map((logo, index) => (
              <div key={`${logo}-${index}`} className="logo-pill premium-logo-pill">{logo}</div>
            ))}
          </div>
        </div>

        <div className="trust-grid">
          <div className="trust-card"><span>Lead generation</span><strong>Built around qualified enquiries, not empty traffic.</strong></div>
          <div className="trust-card"><span>Conversion design</span><strong>Every section is designed to reduce friction and improve action.</strong></div>
          <div className="trust-card"><span>Growth strategy</span><strong>SEO, paid ads and CRO aligned under one performance system.</strong></div>
        </div>
      </div>
    </section>
  );
}
