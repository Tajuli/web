import styles from "./Services.module.css";

const services = [
  {
    title: "Facebook Marketing",
    icon: "🚀",
    description:
      "Reach your target audience, build brand awareness, and drive quality leads with result-driven Facebook ad campaigns.",
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
      "Engage a highly active audience on TikTok with creative campaigns that drive brand visibility and boost conversions.",
  },
  {
    title: "SEO Services",
    icon: "📈",
    description:
      "Improve your search engine rankings and drive consistent organic traffic that brings long-term business growth.",
  },
  {
    title: "Website Design & Development",
    icon: "🌐",
    description:
      "Get modern, responsive, and user-friendly websites designed to convert visitors into loyal customers.",
  },
  {
    title: "Software & App Development",
    icon: "💻",
    description:
      "We build custom software and mobile applications that solve business problems and scale your company.",
  },
  {
    title: "Video Advertisement Production",
    icon: "🎬",
    description:
      "High-quality promo videos that capture attention and maximize the performance of your marketing campaigns.",
  },
  {
    title: "Social Media Management",
    icon: "📱",
    description:
      "We manage your social media with strategic content planning, publishing, audience engagement and growth.",
  },
  {
    title: "Content Creation & Branding",
    icon: "✍️",
    description:
      "From powerful content to strong branding, we create identities that build trust and leave a lasting impact.",
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
            We help brands grow with data-driven strategies, creative
            solutions, and performance-focused digital marketing.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <article className={styles.card} key={service.title}>
              <div className={styles.top}>
                <div className={styles.iconBox}>
                  <span className={styles.icon}>{service.icon}</span>
                </div>

                <div className={styles.content}>
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
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M13 7L18 12L13 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
