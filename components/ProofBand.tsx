const items = [
  "SEO-led growth systems",
  "Conversion-first websites",
  "Google + Meta ad funnels",
  "Premium lead generation execution",
  "Strategy + design + performance"
];

export default function ProofBand() {
  return (
    <section className="proof-band">
      <div className="site-container">
        <div className="proof-band-inner">
          {items.map((item) => (
            <div key={item} className="proof-pill">{item}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
