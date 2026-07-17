import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { JsonLd, webpageSchema, breadcrumbSchema } from "@/lib/jsonLd";
import Link from "next/link";

import styles from "./CaseStudiesPage.module.css";
import FeaturedSlider from "./FeaturedSlider";
import CaseStudiesGrid from "./CaseStudiesGrid";

export const metadata: Metadata = createMetadata({
  title: "Digital Marketing Case Studies",
  description: "Explore PrimeDigitor case studies across websites, SEO, branding, paid advertising, and digital growth campaigns to see how projects are planned and delivered.",
  path: "/case-studies",
});
export default function CaseStudiesPage() {

  return (
    <main className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
  <div className="site-container">

    <h1 className={styles.title}>
      Real Projects.
      <br />
      Clear Strategy.
      <br />
      Practical Growth.
    </h1>

    <p className={styles.description}>
      See how PrimeDigitor approaches websites, SEO, paid campaigns, branding, and software projects with strategy, execution, and conversion-focused next steps.
    </p>

    <div className={styles.heroActions}>
      <Link href="/#contact" className={styles.primaryBtn}>
        Request Free Growth Audit
      </Link>

      <a
        href="https://wa.me/8801641572608?text=Hello%20PrimeDigitor!%20I'm%20interested%20in%20your%20services.%20I'd%20like%20to%20discuss%20my%20project."
        target="_blank"
        rel="noopener noreferrer"
        className={styles.secondaryBtn}
      >
        Chat on WhatsApp
      </a>
    </div>

  </div>
</section>

      {/* Featured Slider */}
      <FeaturedSlider />

      {/* All Case Studies */}
      <section className={styles.section}>
  <div className="site-container">
    <div className={styles.sectionHeading}>
      <span>All Case Studies</span>

      <h2>Browse Project Examples</h2>

      <p>
        Explore website, SEO, branding, digital marketing, and software projects to find the service path closest to your business goal.
      </p>
    </div>

    <CaseStudiesGrid />
  </div>
</section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="site-container">
          <div className={styles.ctaBox}>
            <span className={styles.ctaBadge}>
              🚀 Let's Grow Together
            </span>

            <h2>
              Ready to Plan Your Next Growth Project?
            </h2>

            <p>
              Whether you need a high-converting website,
              SEO, Google Ads, Meta Ads, branding or a
              complete digital strategy, PrimeDigitor is
              ready to help your business grow.
            </p>

            <div className={styles.ctaButtons}>
              <Link
                href="/#contact"
                className="btn btn-primary"
              >
                Request Free Growth Audit
              </Link>

              <Link
                href="/#services"
                className="btn btn-secondary"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
      <JsonLd data={[webpageSchema("Digital Marketing Case Studies", "PrimeDigitor client success stories across websites, SEO, branding, paid advertising, and digital growth campaigns.", "/case-studies"), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Case Studies", path: "/case-studies" }])]} />
    </main>
  );
}
