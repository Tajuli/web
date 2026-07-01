import styles from "./Services.module.css";

const services = [
  {
    title: "Facebook Marketing",
    icon: "🚀",
    description:
      "Reach your target audience, build brand awareness, and generate high-quality leads with strategic Facebook marketing campaigns.",
  },
  {
    title: "Google Ads",
    icon: "🔍",
    description:
      "Get your business in front of active customers searching for your products or services with high-converting Google Ads.",
  },
  {
    title: "TikTok Marketing",
    icon: "🎵",
    description:
      "Reach a highly engaged audience through creative TikTok campaigns that increase brand awareness and conversions.",
  },
  {
    title: "SEO Services",
    icon: "📈",
    description:
      "Improve your search rankings and drive long-term organic traffic that helps your business grow consistently.",
  },
  {
    title: "Website Design & Development",
    icon: "🌐",
    description:
      "Modern, responsive and conversion-focused websites designed to turn visitors into loyal customers.",
  },
  {
    title: "Software & App Development",
    icon: "💻",
    description:
      "Custom software and mobile applications built to automate business processes and scale your growth.",
  },
  {
    title: "Video Advertisement Production",
    icon: "🎬",
    description:
      "Professional promotional videos that capture attention and maximize the performance of your marketing campaigns.",
  },
  {
    title: "Social Media Management",
    icon: "📱",
    description:
      "Complete social media management including planning, posting, engagement and performance optimization.",
  },
  {
    title: "Content Creation & Branding",
    icon: "✍️",
    description:
      "Build a memorable brand through compelling content, visual identity and messaging that creates lasting trust.",
  },
];

export default function Services() {
  return (
    <section id="services" className={`section ${styles.section}`}>
      <div className="site-container">
        <div className="section-head">
          <p className="eyebrow">OUR SERVICES</p>

          <h2 className="section-title">Services We're Offering</h2>

          <p className={styles.subtitle}>
            We help brands grow with data-driven strategies, creative solutions,
            and performance-focused digital marketing.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <article key={service.title} className={styles.card}>
              <div className={styles.content}>
                <div className={styles.iconWrap}>
                  <span className={styles.icon}>{service.icon}</span>
                </div>

                <div className={styles.textArea}>
                  <h3 className={styles.title}>{service.title}</h3>

                  <p className={styles.description}>
                    {service.description}
                  </p>
                </div>
              </div>

              <a
                href="#contact"
                className={styles.arrow}
                aria-label={service.title}
              >
                →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
