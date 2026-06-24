"use client";

import styles from "./Hero.module.css";

const services = [
  "Programmatic Media Buying",
  "Search Engine Marketing",
  "Social Media Buying",
  "Direct Digital Media",
];

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`site-container ${styles.heroInner}`}>
        {/* LEFT CONTENT */}
        <div className={styles.content}>
          <p className={styles.eyebrow}>PrimeDigitor • Digital Marketing Agency</p>

          <h1 className={styles.title}>
            We don’t chase vanity metrics.
            <br />
            <span>We focus on real business growth.</span>
          </h1>

          <p className={styles.text}>
            PrimeDigitor helps ambitious brands grow through SEO, paid media,
            social campaigns, and high-converting websites — with strategy,
            execution, and performance all under one roof.
          </p>

          <div className={styles.actions}>
            <a href="#contact" className="btn btn-primary">
              Book a Free Call
            </a>
            <a href="#services" className={`btn btn-secondary ${styles.secondaryBtn}`}>
              Explore Services
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.visual}>
          <div className={styles.heroCard}>
            <div className={styles.cardTop}>
              <span className={styles.badge}>Growth Services</span>
              <h3>Media planning, performance marketing & creative execution.</h3>
            </div>

            <div className={styles.serviceList}>
              {services.map((service) => (
                <div key={service} className={styles.serviceItem}>
                  <span className={styles.serviceDot} />
                  <p>{service}</p>
                </div>
              ))}
            </div>

            <div className={styles.cardBottom}>
              <div className={styles.metric}>
                <strong>120+</strong>
                <span>Campaigns Managed</span>
              </div>
              <div className={styles.metric}>
                <strong>98%</strong>
                <span>Client Retention</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
