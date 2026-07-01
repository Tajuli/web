import styles from "./Services.module.css";

const services = [
  {
    title: "Facebook Marketing",
    icon: "🚀",
  },
  {
    title: "Google Ads",
    icon: "🔍",
  },
  {
    title: "TikTok Marketing",
    icon: "🎵",
  },
  {
    title: "SEO Services",
    icon: "📈",
  },
  {
    title: "Website Design & Development",
    icon: "🌐",
  },
  {
    title: "Software & App Development",
    icon: "💻",
  },
  {
    title: "Video Advertisement Production",
    icon: "🎬",
  },
  {
    title: "Social Media Management",
    icon: "📱",
  },
  {
    title: "Content Creation & Branding",
    icon: "✍️",
  },
];

export default function Services() {
  return (
    <section id="services" className={`section ${styles.section}`}>
      <div className="site-container">

        <div className="section-head">
          <p className="eyebrow">Our Services</p>

          <h2 className="section-title">
            Digital Marketing & Business Growth Solutions
          </h2>

          <p className={styles.subtitle}>
            Everything you need to grow your business online—from advertising
            and branding to websites, software and content.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <article key={service.title} className={styles.card}>

              <div className={styles.iconWrap}>
                <span className={styles.icon}>{service.icon}</span>
              </div>

              <h3 className={styles.title}>{service.title}</h3>

              <a href="#contact" className={styles.btn}>
                Get Started →
              </a>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
