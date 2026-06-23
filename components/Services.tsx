const services = [
  { title:"SEO & Organic Growth", text:"Technical SEO, authority growth, service pages, content systems and local search optimisation that compound over time." },
  { title:"Performance Marketing", text:"Meta and Google campaign systems focused on qualified leads, stronger economics and scalable acquisition." },
  { title:"Website Design & CRO", text:"Premium websites and landing pages built around trust, clarity, speed and conversion intent." },
  { title:"Creative & Brand Systems", text:"Messaging, ad creatives, content planning and campaign assets that keep your brand sharp across channels." }
];

export default function Services() {
  return (
    <section id="services" className="section section-dark">
      <div className="site-container">
        <div className="section-head">
          <p className="eyebrow">Our services</p>
          <h2 className="section-title">A sharper marketing stack for brands that want growth, not random tactics.</h2>
          <p className="section-text">We bring strategy, design, paid media, SEO and CRO together so your website, traffic and lead generation system actually work as one.</p>
        </div>
        <div className="services-grid premium-services-grid">
          {services.map((service, index) => (
            <article key={service.title} className="service-card premium-service-card">
              <div className="service-number">0{index + 1}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <div className="service-tagline">Strategy • Execution • Optimisation</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
