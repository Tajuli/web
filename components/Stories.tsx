const stories = [
  { quote: "PrimeDigitor helped turn a scattered digital setup into a clearer growth system. The website, messaging and lead flow finally started working together.", name: "Healthcare Brand Story" },
  { quote: "The redesign didn’t just look more premium—it gave us a stronger structure for converting traffic into actual enquiries.", name: "B2B Services Story" }
];

export default function Stories() {
  return (
    <section id="stories" className="section section-v3 section-v3-stories">
      <div className="site-container">
        <div className="section-head">
          <p className="eyebrow">Stories</p>
          <h2 className="section-title">Testimonials redesigned as premium story blocks instead of generic quote cards.</h2>
        </div>
        <div className="stories-v3-grid">
          {stories.map((story, index) => (
            <article key={story.name} className={`story-v3-card ${index === 0 ? "story-v3-card-featured" : ""}`}>
              <p className="story-v3-quote">“{story.quote}”</p>
              <div className="story-v3-author">{story.name}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
