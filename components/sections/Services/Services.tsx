"use client";

import styles from "./Services.module.css";
import {
  FaFacebookF,
  FaGoogle,
  FaTiktok,
  FaSearch,
  FaGlobe,
  FaCode,
  FaVideo,
  FaBullhorn,
  FaPenNib,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    icon: <FaFacebookF />,
    title: "Facebook Marketing",
    description:
      "Reach your ideal audience through high-converting Meta advertising campaigns.",
  },
  {
    icon: <FaGoogle />,
    title: "Google Ads",
    description:
      "Generate qualified leads and sales with performance-driven Google Ads campaigns.",
  },
  {
    icon: <FaTiktok />,
    title: "TikTok Marketing",
    description:
      "Create engaging campaigns that boost visibility and connect with new audiences.",
  },
  {
    icon: <FaSearch />,
    title: "SEO Services",
    description:
      "Increase your search rankings and drive consistent organic traffic to your business.",
  },
  {
    icon: <FaGlobe />,
    title: "Website Design & Development",
    description:
      "Modern, responsive websites built to convert visitors into loyal customers.",
  },
  {
    icon: <FaCode />,
    title: "Software & App Development",
    description:
      "Custom software and mobile applications tailored to your business requirements.",
  },
  {
    icon: <FaVideo />,
    title: "Video Advertisement Production",
    description:
      "Professional promotional videos designed to maximize engagement and conversions.",
  },
  {
    icon: <FaBullhorn />,
    title: "Social Media Management",
    description:
      "Content planning, publishing and audience management for consistent brand growth.",
  },
  {
    icon: <FaPenNib />,
    title: "Content Creation & Branding",
    description:
      "Creative branding and compelling content that build trust and strengthen your identity.",
  },
];

export default function Services() {
  return (
    <section className={styles.services}>
      <div className="container">
        <div className={styles.heading}>
          <span className={styles.subTitle}>OUR SERVICES</span>

          <h2>
            Services <span>We're Offering</span>
          </h2>

          <p>
            We provide innovative digital solutions that help businesses grow,
            generate leads and build a strong online presence.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.iconBox}>{service.icon}</div>

              <div className={styles.content}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>

              <div className={styles.arrow}>
                <FaArrowRight />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
