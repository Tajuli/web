"use client";

import styles from "./Services.module.css";
import {
  ArrowRight,
  Facebook,
  Search,
  Globe,
  Code2,
  Clapperboard,
  Megaphone,
  PenTool,
  TrendingUp,
  MonitorSmartphone,
} from "lucide-react";

const services = [
  {
    icon: <Facebook size={28} strokeWidth={2} />,
    title: "Facebook Marketing",
    description:
      "Reach your ideal audience with high-converting Meta advertising campaigns that generate quality leads and sales.",
  },
  {
    icon: <Search size={28} strokeWidth={2} />,
    title: "Google Ads",
    description:
      "Capture customers actively searching for your products and services with optimized Google Ads campaigns.",
  },
  {
    icon: <TrendingUp size={28} strokeWidth={2} />,
    title: "TikTok Marketing",
    description:
      "Grow your brand through engaging short-form content and strategic TikTok advertising campaigns.",
  },
  {
    icon: <Search size={28} strokeWidth={2} />,
    title: "SEO Services",
    description:
      "Improve search rankings, drive organic traffic and build long-term online visibility for your business.",
  },
  {
    icon: <Globe size={28} strokeWidth={2} />,
    title: "Website Design & Development",
    description:
      "Modern, responsive and high-performance websites built to convert visitors into loyal customers.",
  },
  {
    icon: <Code2 size={28} strokeWidth={2} />,
    title: "Software & App Development",
    description:
      "Custom software solutions and mobile applications tailored to streamline your business operations.",
  },
  {
    icon: <Clapperboard size={28} strokeWidth={2} />,
    title: "Video Advertisement Production",
    description:
      "Creative promotional videos designed to maximize engagement and improve marketing performance.",
  },
  {
    icon: <MonitorSmartphone size={28} strokeWidth={2} />,
    title: "Social Media Management",
    description:
      "Complete social media management including content planning, publishing and audience engagement.",
  },
  {
    icon: <PenTool size={28} strokeWidth={2} />,
    title: "Content Creation & Branding",
    description:
      "Professional branding, graphic design and content creation that strengthen your business identity.",
  },
];

export default function Services() {
  return (
    <section className={styles.services} id="services">
      <div className="container">
        <div className={styles.heading}>
          <span className={styles.subTitle}>OUR SERVICES</span>

          <h2>
            Services <span>We're Offering</span>
          </h2>

          <p>
            We help businesses grow through powerful digital marketing,
            creative design and innovative technology solutions tailored to
            achieve measurable results.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <article className={styles.card} key={index}>
              <div className={styles.iconBox}>{service.icon}</div>

              <div className={styles.content}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>

              <div className={styles.arrow}>
                <ArrowRight size={18} strokeWidth={2.5} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
