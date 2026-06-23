const reasons = [
  { title: "Performance + premium design together", text: "We don’t separate good-looking websites from business outcomes. The design has to convert." },
  { title: "Built for service businesses and lead generation", text: "The site, pages and campaigns are structured around enquiries, trust and actual buying intent." },
  { title: "Faster execution, cleaner communication", text: "You get strategic clarity and execution speed without the usual agency mess." },
  { title: "Local understanding, global presentation", text: "PrimeDigitor is positioned to feel polished internationally while still understanding local business realities." }
];

export default function WhyChoose() {
  return (
    <section id="clients" className="section section-v3 section-v3-why">
      <div className="site-container">
        <div className="section-head">
          <p className="eyebrow">Why PrimeDigitor</p>
          <h2 className="section-title">A stronger trust layer explaining why brands would choose you over a generic freelancer or agency.</h2>
        </div>
        <div className="why-v3-grid">
          {reasons.map((reason) => (
            <article key={reason.title} className="why-v3-card">
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
