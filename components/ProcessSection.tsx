const process = [
  { title:"Discovery & Positioning", text:"We define the offer, target audience, messaging angle and conversion priorities before touching the design." },
  { title:"Build the Funnel Layer", text:"Landing pages, service pages, ad structure and trust elements are designed to support one conversion system." },
  { title:"Optimise & Scale", text:"After launch, we refine based on performance, improve weak points and scale what already works." }
];

export default function ProcessSection() {
  return (
    <section id="process" className="section section-process">
      <div className="site-container">
        <div className="section-head">
          <p className="eyebrow">Our process</p>
          <h2 className="section-title">A cleaner, more strategic process section with stronger narrative flow.</h2>
        </div>
        <div className="process-grid">
          {process.map((item, index) => (
            <article key={item.title} className="process-card">
              <div className="process-step">0{index + 1}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
