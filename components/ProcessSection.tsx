const steps = [
  { no: "01", title: "Discover & Position", text: "We clarify the offer, audience, messaging angle and growth priorities before building anything." },
  { no: "02", title: "Build the Funnel Layer", text: "Pages, ads, content and trust elements are structured into one system instead of scattered pieces." },
  { no: "03", title: "Launch, Optimise & Scale", text: "After launch, we refine weak points, improve conversion performance and scale what is already working." }
];

export default function ProcessSection() {
  return (
    <section id="process" className="section section-v3 section-v3-process">
      <div className="site-container">
        <div className="section-head">
          <p className="eyebrow">Our process</p>
          <h2 className="section-title">A cleaner process section built like a strategic roadmap, not a generic card list.</h2>
        </div>
        <div className="process-v3-line">
          {steps.map((step) => (
            <article key={step.no} className="process-v3-card">
              <div className="process-v3-step">{step.no}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
