import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import RelatedServices from "@/components/services/RelatedServices";

import { services } from "@/data/services";

import styles from "./ServiceDetail.module.css";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://primedigitor.com";

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const service =
    services[slug as keyof typeof services];

  if (!service) {
    return {
      title: "Service Not Found | PrimeDigitor",
    };
  }

  const url = `${SITE_URL}/services/${slug}`;

  return {
    title: service.seoTitle ?? service.title,

    description:
      service.seoDescription ??
      service.description,

    alternates: {
      canonical: url,
    },

    openGraph: {
      type: "website",

      url,

      title: service.title,

      description: service.description,

      images: [
        {
          url: `${SITE_URL}${service.heroImage}`,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title: service.title,

      description: service.description,

      images: [
        `${SITE_URL}${service.heroImage}`,
      ],
    },
  };
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

  const pageUrl =
    `${SITE_URL}/services/${slug}`;

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
                    Why Choose {service.title}?
                  </h2>

                  <p className={styles.sectionText}>
                    {service.description}
                  </p>

                  <p className={styles.sectionText}>
                    Every business has unique goals.
                    That's why we create customized,
                    data-driven strategies focused on
                    measurable growth, stronger brand
                    visibility, higher-quality leads,
                    and long-term business success.
                  </p>

                </div>

                {/* RIGHT */}

                <div className={styles.overviewContent}>

                  <h2 className={styles.sectionTitle}>
                    Why Businesses Choose PrimeDigitor
                  </h2>

                  <p className={styles.sectionText}>
                    We combine creativity, marketing
                    expertise, and performance-focused
                    strategies to maximize every
                    advertising investment and deliver
                    sustainable business growth.
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
                      What's Included
                    </h2>

                    <p className={styles.featuresText}>
                      Everything you need to achieve
                      better results and sustainable
                      business growth.
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
                      A transparent workflow designed
                      to deliver measurable results
                      from planning to execution.
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
                      Proven Results
                    </h2>

                    <p className={styles.statsText}>
                      Numbers that reflect our
                      commitment to quality,
                      performance, and long-term
                      client success.
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
                      Everything you need to know
                      before getting started with our
                      service.
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
        🚀 Limited Free Strategy Session
      </div>

      <div className={styles.ctaContent}>

        <h2>
          Ready to Scale Your Business Faster?
        </h2>

        <p>
          Stop wasting budget on marketing that doesn't convert.
          Get a custom growth strategy from our experts and
          discover how to generate more leads, more sales, and
          sustainable long-term growth.
        </p>

        <div className={styles.ctaStats}>

          <div className={styles.stat}>
            <strong>24h</strong>
            <span>Response Time</span>
          </div>

          <div className={styles.stat}>
            <strong>100%</strong>
            <span>Custom Strategy</span>
          </div>

          <div className={styles.stat}>
            <strong>Free</strong>
            <span>Consultation</span>
          </div>

        </div>

        <div className={styles.ctaActions}>

          <Link
            href="/#contact"
            className={styles.ctaButton}
          >
            Contact With Us →
          </Link>

          <Link
            href="/#services"
            className={styles.secondaryButton}
          >
            View Our Services
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

        {/* ================= SERVICE SCHEMA ================= */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",

              "@type": "Service",

              name: service.title,

              description:
                service.description,

              image:
                `${SITE_URL}${service.heroImage}`,

              serviceType:
                service.category,

              url: pageUrl,

              provider: {
                "@type": "Organization",

                name: "PrimeDigitor",

                url: SITE_URL,
              },

              areaServed: {
                "@type": "Country",

                name: "Bangladesh",
              },
            }),
          }}
        />

        {/* ================= FAQ SCHEMA ================= */}

        {service.faqs.length > 0 && (

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({

                "@context":
                  "https://schema.org",

                "@type":
                  "FAQPage",

                mainEntity:

                  service.faqs.map(
                    (faq) => ({

                      "@type":
                        "Question",

                      name:
                        faq.question,

                      acceptedAnswer: {

                        "@type":
                          "Answer",

                        text:
                          faq.answer,

                      },

                    })
                  ),

              }),
            }}
          />

        )}

      </main>

    </>
  );
}
