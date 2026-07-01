import styles from "./Services.module.css";

import {
  Megaphone,
  Search,
  Music4,
  ChartNoAxesCombined,
  Globe,
  LaptopMinimal,
  Clapperboard,
  Smartphone,
  PenTool,
} from "lucide-react";

const services = [
  {
    title: "Facebook Marketing",
    icon: Megaphone,
    description:
      "Reach your ideal customers through powerful Facebook advertising campaigns that increase leads, engagement and sales.",
  },
  {
    title: "Google Ads",
    icon: Search,
    description:
      "Appear in front of customers actively searching for your products or services with high-converting Google Ads.",
  },
  {
    title: "TikTok Marketing",
    icon: Music4,
    description:
      "Create engaging TikTok campaigns that increase brand awareness, audience engagement and business growth.",
  },
  {
    title: "SEO Services",
    icon: ChartNoAxesCombined,
    description:
      "Improve search rankings, increase organic traffic and generate long-term business growth through SEO.",
  },
  {
    title: "Website Design & Development",
    icon: Globe,
    description:
      "Beautiful, fast and responsive websites designed to provide the best user experience and maximize conversions.",
  },
  {
    title: "Software & App Development",
    icon: LaptopMinimal,
    description:
      "Custom software and mobile applications built to streamline your business and support future growth.",
  },
  {
    title: "Video Advertisement Production",
    icon: Clapperboard,
    description:
      "Professional promotional videos that capture attention and increase the effectiveness of your marketing campaigns.",
  },
  {
    title: "Social Media Management",
    icon: Smartphone,
    description:
      "Complete social media management including content planning, publishing, engagement and performance tracking.",
  },
  {
    title: "Content Creation & Branding",
    icon: PenTool,
    description:
      "Creative branding and content strategies that build trust, strengthen identity and grow your business.",
  },
];

export default function Services() {
  return (
    <section id="services" className={`section ${styles.section}`}>
      <div className="site-container">
        <div className="section-head">
          <p className="eyebrow">OUR SERVICES</p>

          <h2 className="section-title">
            Services We're Offering
          </h2>

          <p className={styles.subtitle}>
            We help businesses grow through strategic digital marketing,
            creative branding, modern websites and powerful software solutions.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article key={service.title} className={styles.card}>
                <div className={styles.top}>
                  <div className={styles.iconBox}>
                    <Icon
                      className={styles.icon}
                      size={40}
                      strokeWidth={1.8}
                    />
                  </div>

                  <div className={styles.content}>
                    <h3 className={styles.title}>
                      {service.title}
                    </h3>

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
            );
          })}
        </div>
      </div>
    </section>
  );
}
