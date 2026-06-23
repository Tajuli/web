const works = [
  { tag: "Healthcare SEO + CRO", title: "A clinic growth system rebuilt around local visibility, trust and patient enquiry conversion.", text: "We restructured service pages, clarified the offer hierarchy and rebuilt conversion paths so search traffic could turn into enquiries more consistently.", metrics: ["+162% organic traffic", "+58% conversion rate", "3 new service funnels"] },
  { tag: "Lead Generation Ads", title: "Paid acquisition funnel redesigned to improve lead quality and lower cost per acquisition.", text: "The campaign structure, landing page flow and CTA architecture were rebuilt around stronger intent and cleaner conversion journeys.", metrics: ["4.1x ROAS", "-31% CPL", "+93% qualified leads"] },
  { tag: "Premium Website Redesign", title: "Brand site repositioned to feel more premium, more credible and more conversion-focused.", text: "We tightened messaging, improved visual hierarchy and introduced a cleaner user journey for decision-makers evaluating the service.", metrics: ["+44% engagement", "+67% CTA clicks", "Faster mobile UX"] }
];

export default function Works() {
  return (
    <section id="work" className="section section-v3 section-v3-work">
      <div className="site-container">
        <div className="section-head">
          <p className="eyebrow">Our work</p>
          <h2 className="section-title">Featured case-study style work designed to prove strategy, execution and results—not just aesthetics.</h2>
          <p className="section-text">This section is built to feel like a flagship chapter in the page, with clearer proof and stronger visual storytelling.</p>
        </div>
        <div className="works-v3-stack">
          {works.map((work, index) => (
            <article key={work.title} className={`work-v3-card ${index === 0 ? "work-v3-card-featured" : ""}`}>
              <div className="work-v3-visual">
                <div className="work-v3-browser">
                  <div className="work-v3-browser-top"><span /><span /><span /></div>
                  <div className="work-v3-browser-body">
                    <div className="browser-block large" />
                    <div className="browser-row"><div className="browser-block" /><div className="browser-block" /></div>
                    <div className="browser-row three"><div className="browser-block small" /><div className="browser-block small" /><div className="browser-block small" /></div>
                  </div>
                </div>
              </div>
              <div className="work-v3-copy">
                <p className="work-v3-tag">{work.tag}</p>
                <h3>{work.title}</h3>
                <p>{work.text}</p>
                <ul>{work.metrics.map((metric) => <li key={metric}>{metric}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
