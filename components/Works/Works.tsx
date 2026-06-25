import styles from "./Works.module.css";

const works = [
  {
    title: "Kareems Dhaka",
    category: "Media Buying",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop",
    href: "#",
  },
  {
    title: "TST White House",
    category: "Media Buying",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1600&auto=format&fit=crop",
    href: "#",
  },
  {
    title: "Ai-Cha Bangladesh",
    category: "Media Buying",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop",
    href: "#",
  },
  {
    title: "Prime Dental Care",
    category: "Website Design",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1600&auto=format&fit=crop",
    href: "#",
  },
  {
    title: "Nova Properties",
    category: "Brand Identity",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop",
    href: "#",
  },
];

export default function Works() {
  return (
    <section id="work" className={`section ${styles.section}`}>
      <div className="site-container">
        <div className="section-head">
          <p className="eyebrow">Our work</p>
          <h2 className="section-title">
            Featured case-study style work designed to prove strategy,
            execution and results—not just aesthetics.
          </h2>
          <p className="section-text">
            This section is built to feel like a flagship chapter in the page,
            with clearer proof and stronger visual storytelling.
          </p>
        </div>

        <div className={styles.sliderShell}>
          <div className={styles.track}>
            {[...works, ...works].map((work, index) => (
              <a
                key={`${work.title}-${index}`}
                href={work.href}
                className={styles.slide}
              >
                <div
                  className={styles.slideBg}
                  style={{ backgroundImage: `url(${work.image})` }}
                />
                <div className={styles.overlay} />
                <div className={styles.slideContent}>
                  <h3>{work.title}</h3>
                  <p>{work.category}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
