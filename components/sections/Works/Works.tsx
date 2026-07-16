"use client";

import Link from "next/link";
import FeaturedSlider from "@/app/case-studies/FeaturedSlider";
import styles from "./Works.module.css";

export default function Works() {
  return (
    <section id="work" className={`section ${styles.section}`}>
      <div className="site-container">
        <div className="section-head">
          <p className="eyebrow">OUR CASE STUDIES</p>

          <h2 className="section-title">
            Explore how we've helped businesses grow through strategy,
            development, and digital marketing.
          </h2>
        </div>

        <div className={styles.sliderHeader}>
          <h3 className={styles.sliderTitle}>
            Featured Case Studies
          </h3>

          <Link
            href="/case-studies"
            className={styles.viewAll}
          >
            View All →
          </Link>
        </div>

        <FeaturedSlider />
      </div>
    </section>
  );
}
