const stories = [
  { quote: "PrimeDigitor turned a scattered marketing setup into a clear growth system. The website, messaging and campaign performance all improved together.", name: "Client Story / Healthcare Brand" },
  { quote: "The team approach felt strategic from day one. We finally had a site and ad funnel that looked premium and converted like it should.", name: "Client Story / B2B Services" }
];

export default function Stories() {
  return (
    <section id="stories" className="section section-blue">
      <div className="site-container">
        <div className="section-head">
          <p className="eyebrow">Stories</p>
          <h2 className="section-title">Proof, positioning and trust — all in one section.</h2>
        </div>
        <div className="stories-grid">
          {stories.map((story) => (
            <article key={story.name} className="story-card">
              <p className="story-quote">“{story.quote}”</p>
              <div className="story-author">{story.name}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
