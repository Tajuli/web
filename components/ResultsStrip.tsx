const results = [
  { value: "4.1x", label: "Average ROAS" },
  { value: "+162%", label: "Organic traffic growth" },
  { value: "-31%", label: "Lower CPL" },
  { value: "+67%", label: "CTA click uplift" }
];

export default function ResultsStrip() {
  return (
    <section className="results-strip">
      <div className="site-container results-strip-grid">
        {results.map((item) => (
          <div key={item.label} className="results-item">
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
