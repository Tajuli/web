import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Navbar from "@/components/sections/Navbar/Navbar";
import Footer from "@/components/sections/Footer/Footer";

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
    title: service.seoTitle || service.title,

    description:
      service.seoDescription ||
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
      <Navbar />

      <main className={styles.page}>
        {/* ================= HERO ================= */}

        <section className={styles.hero}>
          <span className={styles.category}>
            {service.category}
          </span>

          <h1>{service.title}</h1>

          <p>{service.subtitle}</p>

          <div className={styles.meta}>
            <span>PrimeDigitor</span>

            <span>Professional Service</span>

            <span>Updated 2026</span>
          </div>

          <Image
            src={service.heroImage}
            alt={service.title}
            width={1200}
            height={700}
            priority
            className={styles.cover}
          />
        </section>

        {/* ================= ARTICLE ================= */}

        <article className={styles.article}>

                    {/* ================= OVERVIEW ================= */}

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              Overview
            </h2>

            <p className={styles.sectionSubtitle}>
              {service.description}
            </p>

            <div className={styles.content}>
              <p>{service.description}</p>
            </div>
          </section>

          {/* ================= FEATURES ================= */}

          {service.features?.length > 0 && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                What's Included
              </h2>

              <div className={styles.grid}>
                {service.features.map(
                  (feature, index) => (
                    <div
                      key={index}
                      className={styles.card}
                    >
                      <div
                        className={
                          styles.cardIcon
                        }
                      >
                        ✓
                      </div>

                      <h3
                        className={
                          styles.cardTitle
                        }
                      >
                        {feature.title}
                      </h3>

                      <p
                        className={
                          styles.cardText
                        }
                      >
                        {feature.description}
                      </p>
                    </div>
                  )
                )}
              </div>
            </section>
          )}

          {/* ================= BENEFITS ================= */}

          {service.benefits?.length > 0 && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Why Choose This Service?
              </h2>

              <ul className={styles.checkList}>
                {service.benefits.map(
                  (benefit, index) => (
                    <li key={index}>
                      {benefit}
                    </li>
                  )
                )}
              </ul>
            </section>
          )}

          {/* ================= PROCESS ================= */}

          {service.process?.length > 0 && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Our Process
              </h2>

              <div className={styles.process}>
                {service.process.map(
                  (step, index) => (
                    <div
                      key={index}
                      className={
                        styles.processItem
                      }
                    >
                      <div
                        className={
                          styles.processNumber
                        }
                      >
                        {String(
                          index + 1
                        ).padStart(2, "0")}
                      </div>

                      <h3>{step.title}</h3>

                      <p>
                        {step.description}
                      </p>
                    </div>
                  )
                )}
              </div>
            </section>
          )}

          {/* ================= STATS ================= */}

          {service.stats?.length > 0 && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Our Results
              </h2>

              <div className={styles.stats}>
                {service.stats.map(
                  (item, index) => (
                    <div
                      key={index}
                      className={
                        styles.statCard
                      }
                    >
                      <span
                        className={
                          styles.statNumber
                        }
                      >
                        {item.value}
                      </span>

                      <span
                        className={
                          styles.statLabel
                        }
                      >
                        {item.label}
                      </span>
                    </div>
                  )
                )}
              </div>
            </section>
          )}
                    {/* ================= FAQ ================= */}

          {service.faqs?.length > 0 && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Frequently Asked Questions
              </h2>

              <div className={styles.faq}>
                {service.faqs.map((faq, index) => (
                  <details
                    key={index}
                    className={styles.faqItem}
                  >
                    <summary>{faq.question}</summary>

                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* ================= CTA ================= */}

          <section className={styles.cta}>
            <div className={styles.ctaContent}>
              <h2>
                Ready to Grow Your Business?
              </h2>

              <p>
                Let's discuss your goals and build a
                strategy that delivers measurable
                results.
              </p>

              <Link
                href="/contact"
                className={styles.ctaButton}
              >
                Get Free Consultation
              </Link>
            </div>
          </section>

          {/* ================= RELATED SERVICES ================= */}

          {service.related?.length > 0 && (
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

        {/* ================= STRUCTURED DATA ================= */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",

              "@type": "Service",

              name: service.title,

              description:
                service.description,

              image: `${SITE_URL}${service.heroImage}`,

              provider: {
                "@type": "Organization",

                name: "PrimeDigitor",

                url: SITE_URL,
              },

              areaServed: {
                "@type": "Country",

                name: "Bangladesh",
              },

              serviceType:
                service.category,

              url: pageUrl,
            }),
          }}
        />

        {service.faqs?.length > 0 && (
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

                      name: faq.question,

                      acceptedAnswer: {
                        "@type":
                          "Answer",

                        text: faq.answer,
                      },
                    })
                  ),
              }),
            }}
          />
        )}
      </main>

      <Footer />
    </>
  );
}
