const services = [
  { title: "SEO & Organic Growth", text: "Technical SEO, content systems, on-page optimisation and authority growth designed to build compounding search traffic." },
  { title: "Performance Marketing", text: "Meta, Google and funnel-focused paid campaigns with sharper targeting, landing page alignment and scalable acquisition." },
  { title: "Website Design & CRO", text: "Premium websites and conversion-focused landing pages built to increase trust, engagement and qualified enquiries." },
  { title: "Content & Brand Systems", text: "Messaging, creative direction, content planning and campaign assets that make your brand feel consistent everywhere." }
];

export default function Services() {
  return (
    <section id="services" className="section section-dark">
      <div className="site-container">
        <div className="section-head">
          <p className="eyebrow">Our services</p>
          <h2 className="section-title">Growth systems built around traffic, trust and conversion.</h2>
          <p className="section-text">
            We combine strategy, creative, media buying and UX so every part of your marketing stack works together.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, i) => (
            <article key={service.title} className="service-card">
              <div className="service-number">0{i + 1}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <div className="service-link">Strategy • Execution • Optimisation</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
