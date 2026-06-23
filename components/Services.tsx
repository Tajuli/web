const services = [
  { no: "01", title: "SEO & Organic Growth", text: "Technical SEO, service page architecture, authority building and local visibility systems designed to generate qualified traffic over time.", bullets: ["Technical + on-page SEO", "Service page architecture", "Local SEO & trust signals"] },
  { no: "02", title: "Paid Ads & Lead Generation", text: "Google and Meta campaigns structured around lower CPL, better lead quality and landing pages built to convert traffic into enquiries.", bullets: ["Google & Meta campaigns", "Landing page alignment", "Lead quality optimisation"] },
  { no: "03", title: "Premium Website Design", text: "Websites and landing pages that feel premium, build trust fast and support the actual business goal instead of just looking nice.", bullets: ["Conversion-first UX", "Premium visual systems", "Faster mobile experience"] },
  { no: "04", title: "CRO & Funnel Optimisation", text: "We refine your offer presentation, CTA flow, page structure and trust elements to improve conversion without wasting traffic.", bullets: ["CTA & flow optimisation", "Offer clarity improvements", "A/B thinking & iteration"] }
];

export default function Services() {
  return (
    <section id="services" className="section section-v3 section-v3-services">
      <div className="site-container">
        <div className="section-head">
          <p className="eyebrow">Our services</p>
          <h2 className="section-title">The growth stack behind premium websites, qualified leads and stronger conversion performance.</h2>
          <p className="section-text">PrimeDigitor brings strategy, execution and optimisation together so your marketing doesn’t feel fragmented across channels.</p>
        </div>
        <div className="services-v3-grid">
          {services.map((service) => (
            <article key={service.no} className="service-v3-card">
              <div className="service-v3-top"><span className="service-v3-no">{service.no}</span><h3>{service.title}</h3></div>
              <p>{service.text}</p>
              <ul>{service.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
