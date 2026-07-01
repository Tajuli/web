"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Services.module.css";
import { useEffect, useRef, useState } from "react";
import styles from "./Services.module.css";

const services = [
  {
    title: "Facebook Marketing",
    icon: "🚀",
    description:
      "Reach the right audience with high-converting Facebook & Instagram advertising campaigns.",
  },
  {
    title: "Google Ads",
    icon: "🔍",
    description:
      "Generate quality leads through Search, Display, Shopping and YouTube advertising.",
  },
  {
    title: "TikTok Marketing",
    icon: "🎵",
    description:
      "Grow your brand with creative TikTok campaigns that capture attention and engagement.",
  },
  {
    title: "SEO Services",
    icon: "📈",
    description:
      "Improve your Google rankings and drive consistent organic traffic to your website.",
  },
  {
    title: "Website Design & Development",
    icon: "🌐",
    description:
      "Modern, responsive websites built for performance, user experience and conversions.",
  },
  {
    title: "Software & App Development",
    icon: "💻",
    description:
      "Custom software and mobile applications designed around your business goals.",
  },
  {
    title: "Video Advertisement Production",
    icon: "🎬",
    description:
      "Professional commercial videos that increase engagement and maximize ad performance.",
  },
  {
    title: "Social Media Management",
    icon: "📱",
    description:
      "Complete content planning, publishing and audience management across social platforms.",
  },
  {
    title: "Content Creation & Branding",
    icon: "✍️",
    description:
      "Creative content and branding solutions that build trust and strengthen your identity.",
  },
];

function ServiceCard({ service }: { service: (typeof services)[0] }) {
  const ref = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      setActive(entry.isIntersecting);
    },
    {
      threshold: 0.25,
      rootMargin: "0px 0px -10% 0px",
    }
  );

  const element = ref.current;

  if (element) {
    observer.observe(element);
  }

  return () => {
    if (element) observer.unobserve(element);
  };
}, []);
    return (
    <article
      ref={ref}
      className={`${styles.card} ${active ? styles.active : ""}`}
    >
      <div className={styles.iconWrap}>
        <span className={styles.icon}>{service.icon}</span>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{service.title}</h3>

        <p className={styles.description}>
          {service.description}
        </p>
      </div>

      <a href="#contact" className={styles.link}>
        <span>Learn More</span>

        <svg
          className={styles.arrow}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M5 12H19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />

          <path
            d="M13 6L19 12L13 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </article>
  );
}

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
            <ServiceCard
              key={service.title}
              service={service}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
