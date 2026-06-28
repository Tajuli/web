import styles from "./Services.module.css";

const services = [
  {
    title: "Programmatic Media Buying",
    icon: "⚙️",
  },
  {
    title: "Search Engine Marketing & Shopping",
    icon: "🔎",
  },
  {
    title: "Social Media Buying",
    icon: "💬",
  },
  {
    title: "Direct Digital Media Buying",
    icon: "🤝",
  },
  {
    title: "Traditional Media Buying",
    icon: "📺",
  },
  {
    title: "Advanced Campaign Analytics",
    icon: "📈",
  },
];

export default function Services() {
  return (
    <section id="services" className={`section ${styles.section}`}>
      <div className="site-container">
        <div className="section-head">
          <p className="eyebrow">Our Services</p>
          <h2 className="section-title">
            Media buying, paid growth and performance services built to scale.
          </h2>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <article key={service.title} className={styles.card}>
              <div className={styles.iconWrap}>
                <span className={styles.icon}>{service.icon}</span>
              </div>

              <h3 className={styles.title}>{service.title}</h3>

              <a href="#contact" className={styles.btn}>
                LEARN MORE
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
