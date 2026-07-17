"use client";

import Link from "next/link";
import styles from "./Services.module.css";

const services = [
  {
    slug: "facebook-marketing",
    title: "Facebook Marketing",
    icon: "🚀",
    description:
      "Reach buyers with Meta campaigns built for lead quality, retargeting, and measurable cost per inquiry.",
  },
  {
    slug: "google-ads",
    title: "Google Ads",
    icon: "🔍",
    description:
      "Capture high-intent demand with Google Ads structured around keywords, landing pages, and conversion tracking.",
  },
  {
    slug: "tiktok-marketing",
    title: "TikTok Marketing",
    icon: "🎵",
    description:
      "Turn attention into action with TikTok creatives, testing plans, and campaigns aligned with your offer.",
  },
  {
    slug: "seo",
    title: "SEO Services",
    icon: "📈",
    description:
      "Improve rankings, local visibility, and organic traffic with technical SEO, content, and conversion-focused pages.",
  },
  {
    slug: "website-development",
    title: "Website Design & Development",
    icon: "🌐",
    description:
      "Fast, responsive websites planned around trust, speed, clear messaging, and more contact form submissions.",
  },
  {
    slug: "software-development",
    title: "Software & App Development",
    icon: "💻",
    description:
      "Custom software and mobile apps that streamline operations, improve customer experience, and support growth.",
  },
  {
  slug: "video-production",
  title: "Video Advertisement Production",
  icon: "🎬",
  description:
    "Professional ad videos that make offers clearer, build trust faster, and improve paid campaign performance.",
},
  {
    slug: "social-media-management",
    title: "Social Media Management",
    icon: "📱",
    description:
      "Consistent social content, publishing, and audience management that keeps your brand active and credible.",
  },
  {
  slug: "content-branding",
  title: "Content Creation & Branding",
  icon: "✍️",
  description:
    "Messaging, visuals, and brand content that communicate your value clearly and make prospects more confident.",
},
];

export default function Services() {
  return (
    <section id="services" className={`section ${styles.section}`}>
      <div className="site-container">
        <div className="section-head">
          <p className="eyebrow">Our Services</p>

          <h2 className="section-title">
            Choose the Right Growth Channel for Your Next Qualified Lead
          </h2>

          <p className={styles.subtitle}>
            Compare the channels your business can use now, then connect each one to a clear path from visitor to inquiry—from ads and SEO to websites, software, content, and branding.
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
                <span>See If This Fits</span>

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
