import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import RelatedServices from "@/components/services/RelatedServices";

import { services } from "@/data/services";
import { createMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbSchema, faqSchema, serviceSchema, webpageSchema } from "@/lib/jsonLd";

import styles from "./ServiceDetail.module.css";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};


export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug as keyof typeof services];

  if (!service) {
    return createMetadata({ title: "Service Not Found", path: `/services/${slug}`, noIndex: true });
  }

  return createMetadata({
    title: service.seoTitle ?? service.title,
    description: service.seoDescription ?? service.description,
    path: `/services/${slug}`,
    image: service.heroImage,
    keywords: service.metaKeywords,
  });
}

export default async function ServicePage({
  params,
}: Props) {
  const { slug } = await params;

  const service =
    services[slug as keyof typeof services];

  if (!service) {
    notFound();
  }

  return (
    <>

      <main className={styles.page}>

        {/* ================= HERO ================= */}

        <section className={styles.hero}>
          <Image
            src={service.heroImage}
            alt={service.title}
            width={1600}
            height={900}
            priority
            className={styles.heroBanner}
          />
        </section>

        {/* ================= OVERVIEW ================= */}

        <section className={styles.overviewSection}>
          <div className={styles.container}>

            <article>

              <section className={styles.overview}>

                {/* LEFT */}

                <div className={styles.overviewContent}>

                  <h2 className={styles.sectionTitle}>
                    Is {service.title} the Right Growth Channel?
                  </h2>

                  <p className={styles.sectionText}>
                    {service.description}
                  </p>

                  <p className={styles.sectionText}>
                    Every business has different goals, competition, and buyer intent. We review your current website, offer, tracking, and sales process before recommending a practical plan focused on qualified inquiries and measurable growth.
                  </p>

                </div>

                {/* RIGHT */}

                <div className={styles.overviewContent}>

                  <h2 className={styles.sectionTitle}>
                    Why Businesses Choose PrimeDigitor
                  </h2>

                  <p className={styles.sectionText}>
                    We combine strategy, creative, technical execution, tracking, and transparent reporting so every campaign or website improvement has a clear business purpose.
                  </p>

                  <div className={styles.benefitList}>

                    {service.benefits.map(
                      (benefit, index) => (

                        <div
                          key={index}
                          className={styles.benefitItem}
                        >

                          <span className={styles.check}>
                            ✓
                          </span>

                          <span>
                            {benefit}
                          </span>

                        </div>

                      )
                    )}

                  </div>

                </div>

              </section>

            </article>

          </div>
        </section>

        {/* ================= WHAT'S INCLUDED ================= */}

        <section className={styles.featuresSection}>

          <div className={styles.container}>

            <article>

              {service.features.length > 0 && (

                <section className={styles.features}>

                  <div className={styles.featuresHeader}>

                    <h2 className={styles.featuresTitle}>
                      What&apos;s Included
                    </h2>

                    <p className={styles.featuresText}>
                      Core deliverables designed to improve visibility, trust, conversion paths, and lead quality.
                    </p>

                  </div>

                  <div className={styles.featuresGrid}>
                                        {service.features.map(
                      (feature, index) => (

                        <div
                          key={index}
                          className={styles.featureCard}
                        >

                          <div className={styles.featureIcon}>
                            {String(index + 1).padStart(2, "0")}
                          </div>

                          <h3 className={styles.featureTitle}>
                            {feature.title}
                          </h3>

                          <p className={styles.featureDescription}>
                            {feature.description}
                          </p>

                          <div className={styles.featureLine} />

                        </div>

                      )
                    )}

                  </div>

                </section>

              )}

            </article>

          </div>

        </section>

        {/* ================= PROCESS ================= */}

        <section className={styles.processSection}>

          <div className={styles.container}>

            <article>

              {service.process.length > 0 && (

                <section className={styles.process}>

                  <div className={styles.processHeader}>

                    <h2 className={styles.processTitle}>
                      Our Working Process
                    </h2>

                    <p className={styles.processText}>
                      A transparent workflow that moves from research and strategy to launch, measurement, and continuous improvement.
                    </p>

                  </div>

                  <div className={styles.timeline}>

                    {service.process.map(
                      (step, index) => (

                        <div
                          key={index}
                          className={styles.timelineItem}
                        >

                          <div className={styles.timelineNumber}>
                            {index + 1}
                          </div>

                          <div className={styles.timelineCard}>

                            <h3>
                              {step.title}
                            </h3>

                            <p>
                              {step.description}
                            </p>

                          </div>

                        </div>

                      )
                    )}

                  </div>

                </section>

              )}

            </article>

          </div>

        </section>

        {/* ================= PROVEN RESULTS ================= */}

        <section className={styles.statsWrapper}>

          <div className={styles.container}>

            <article>

              {service.stats.length > 0 && (

                <section className={styles.statsSection}>

                  <div className={styles.statsHeader}>

                    <h2 className={styles.statsTitle}>
                      Performance Metrics We Improve
                    </h2>

                    <p className={styles.statsText}>
                      Performance indicators commonly used to evaluate whether campaigns, websites, and growth systems are moving in the right direction.
                    </p>

                  </div>

                  <div className={styles.statsGrid}>

                    {service.stats.map(
                      (item, index) => (

                        <div
                          key={index}
                          className={styles.statCard}
                        >

                          <span className={styles.statNumber}>
                            {item.value}
                          </span>

                          <span className={styles.statLabel}>
                            {item.label}
                          </span>

                        </div>

                      )
                    )}

                  </div>

                </section>

              )}

            </article>

          </div>

        </section>

                {/* ================= FAQ ================= */}

        <section className={styles.faqWrapper}>

          <div className={styles.container}>

            <article>

              {service.faqs.length > 0 && (

                <section className={styles.faqSection}>

                  <div className={styles.faqHeader}>

                    <h2 className={styles.faqTitle}>
                      Frequently Asked Questions
                    </h2>

                    <p className={styles.faqText}>
                      Answers to common questions about fit, process, timeline, and what happens before you start.
                    </p>

                  </div>

                  <div className={styles.faq}>

                    {service.faqs.map(
                      (faq, index) => (

                        <details
                          key={index}
                          className={styles.faqItem}
                        >

                          <summary>
                            {faq.question}
                          </summary>

                          <p>
                            {faq.answer}
                          </p>

                        </details>

                      )
                    )}

                  </div>

                </section>

              )}

            </article>

          </div>

        </section>

        {/* ================= PREMIUM CTA ================= */}

<section className={styles.ctaWrapper}>
  <div className={styles.container}>
    <section className={styles.cta}>

      <div className={styles.ctaGlow}></div>
      <div className={styles.ctaGlow2}></div>

      <div className={styles.ctaBadge}>
        🚀 Free Strategy Fit Review
      </div>

      <div className={styles.ctaContent}>

        <h2>
          Ready to See If This Service Fits Your Growth Goals?
        </h2>

        <p>
          Tell us what you want to improve. We will review your current digital presence and recommend whether this service, another channel, or a website conversion improvement should come first.
        </p>

        <div className={styles.ctaStats}>

          <div className={styles.stat}>
            <strong>24h</strong>
            <span>Response Time</span>
          </div>

          <div className={styles.stat}>
            <strong>Custom</strong>
            <span>Strategy Review</span>
          </div>

          <div className={styles.stat}>
            <strong>Free</strong>
            <span>Consultation</span>
          </div>

        </div>

        <div className={styles.ctaActions}>

          <Link
            href="/#contact"
            className="btn btn-primary"
          >
            Request Free Audit →
          </Link>

          <Link
            href="/#services"
            className={styles.secondaryButton}
          >
            Compare Services
          </Link>

        </div>

      </div>

    </section>
  </div>
</section>

        {/* ================= RELATED SERVICES ================= */}

        <section className={styles.relatedWrapper}>

          <div className={styles.container}>

            <article>

              {service.related.length > 0 && (

                <section className={styles.related}>

                  <h2 className={styles.sectionTitle}>
                    Related Services
                  </h2>

                  <RelatedServices
                    currentSlug={slug}
                    related={service.related}
                  />

                </section>

              )}

            </article>

          </div>

        </section>

        <JsonLd
          data={[
            serviceSchema(service),
            webpageSchema(service.title, service.seoDescription ?? service.description, `/services/${slug}`),
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Services", path: "/#services" },
              { name: service.title, path: `/services/${slug}` },
            ]),
            ...(service.faqs.length > 0 ? [faqSchema(service.faqs)] : []),
          ]}
        />

      </main>

    </>
  );
}
