"use client";

import Link from "next/link";
import styles from "./Services.module.css";

const services = [
  {
    slug: "facebook-marketing",
    title: "Facebook Marketing",
    icon: "🚀",
    description:
      "Reach the right audience with high-converting Facebook & Instagram advertising campaigns.",
  },
  {
    slug: "google-ads",
    title: "Google Ads",
    icon: "🔍",
    description:
      "Generate quality leads through Search, Display, Shopping and YouTube advertising.",
  },
  {
    slug: "tiktok-marketing",
    title: "TikTok Marketing",
    icon: "🎵",
    description:
      "Grow your brand with creative TikTok campaigns that capture attention and engagement.",
  },
  {
    slug: "seo",
    title: "SEO Services",
    icon: "📈",
    description:
      "Improve your Google rankings and drive consistent organic traffic to your website.",
  },
  {
    slug: "website-development",
    title: "Website Design & Development",
    icon: "🌐",
    description:
      "Modern, responsive websites built for performance, user experience and conversions.",
  },
  {
    slug: "software-development",
    title: "Software & App Development",
    icon: "💻",
    description:
      "Custom software and mobile applications designed around your business goals.",
  },
  {
  slug: "video-production",
  title: "Video Advertisement Production",
  icon: "🎬",
  description:
    "Professional commercial videos that increase engagement and maximize ad performance.",
},
  {
    slug: "social-media-management",
    title: "Social Media Management",
    icon: "📱",
    description:
      "Complete content planning, publishing and audience management across social platforms.",
  },
  {
  slug: "content-branding",
  title: "Content Creation & Branding",
  icon: "✍️",
  description:
    "Creative content and branding solutions that build trust and strengthen your identity.",
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
            <article
              key={service.slug}
              className={styles.card}
              onTouchStart={(e) => {
                e.currentTarget.classList.add(styles.touchHover);
              }}
              onTouchEnd={(e) => {
                e.currentTarget.classList.remove(styles.touchHover);
              }}
              onTouchCancel={(e) => {
                e.currentTarget.classList.remove(styles.touchHover);
              }}
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

              <Link
                href={`/services/${service.slug}`}
                className={styles.link}
              >
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
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
