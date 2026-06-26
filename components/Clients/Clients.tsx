"use client";

import styles from "./Clients.module.css";

const logos = [
  "/clients/google.svg",
  "/clients/meta.svg",
  "/clients/shopify.svg",
  "/clients/wordpress.svg",
  "/clients/hubspot.svg",
  "/clients/mailchimp.svg",
  "/clients/woocommerce.svg",
  "/clients/semrush.svg",
];

export default function Clients() {
  const items = [...logos, ...logos];

  return (
    <section id="clients" className={styles.section}>
      <div className="container">

        <div className={styles.heading}>
          <span className={styles.eyebrow}>
            Trusted by Growing Brands
          </span>

          <h2>
            Businesses We Work With
          </h2>

          <p>
            From startups to established businesses, we help ambitious brands
            grow through strategic digital marketing, creative design, and
            measurable performance.
          </p>
        </div>

        <div className={styles.slider}>
          <div className={styles.track}>
            {items.map((logo, index) => (
              <div className={styles.card} key={index}>
                <img
                  src={logo}
                  alt="Client Logo"
                  className={styles.logo}
                />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            Ready to become our next success story?
          </p>

          <a href="#contact" className={styles.button}>
            Start Your Project
          </a>
        </div>

      </div>
    </section>
  );
}
