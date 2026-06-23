const logos = ["PrimeCare", "Vertex Labs", "Mediora", "Lumen Growth", "Apex Build", "Northlane"];

export default function Clients() {
  return (
    <section id="clients" className="section section-dark">
      <div className="site-container">
        <div className="section-head">
          <p className="eyebrow">Clients</p>
          <h2 className="section-title">Built for brands that want performance and polish.</h2>
        </div>
        <div className="logo-marquee">
          <div className="logo-track">
            {[...logos, ...logos].map((logo, i) => <div className="logo-pill" key={logo + i}>{logo}</div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
