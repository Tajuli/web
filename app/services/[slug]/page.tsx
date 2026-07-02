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
      <Navbar />

      <main className={styles.page}>

        {/* ================= HERO ================= */}

        <section className={styles.hero}>

          <div className={styles.container}>

            <div className={styles.heroGrid}>

              {/* LEFT */}

              <div className={styles.heroContent}>

                <span className={styles.category}>
                  {service.category}
                </span>

                <h1 className={styles.title}>
                  {service.title}
                </h1>

                <p className={styles.subtitle}>
                  {service.subtitle}
                </p>

                <div className={styles.meta}>

                  <div className={styles.metaItem}>
                    <span className={styles.metaDot} />
                    PrimeDigitor
                  </div>

                  <div className={styles.metaItem}>
                    <span className={styles.metaDot} />
                    Professional Service
                  </div>

                  <div className={styles.metaItem}>
                    <span className={styles.metaDot} />
                    Updated 2026
                  </div>

                </div>

                <div className={styles.heroActions}>

                  <Link
                    href="/contact"
                    className={styles.primaryBtn}
                  >
                    Get Free Consultation
                  </Link>

                  <Link
                    href="/portfolio"
                    className={styles.secondaryBtn}
                  >
                    View Portfolio
                  </Link>

                </div>

              </div>

              {/* RIGHT */}

              <div className={styles.heroImage}>

                <div className={styles.imageWrap}>

                  <Image
                    src={service.heroImage}
                    alt={service.title}
                    width={700}
                    height={700}
                    priority
                    className={styles.cover}
                  />

                </div>

                <div className={styles.floating}>
                  <strong>
                    {service.stats?.[0]?.value ??
                      "500+"}
                  </strong>

                  <span>
                    {service.stats?.[0]?.label ??
                      "Successful Projects"}
                  </span>
                </div>

              </div>

            </div>

          </div>

        </section>

        <div className={styles.container}>

          <article>
            {/* ================= OVERVIEW ================= */}

<section className={styles.overview}>

  <div className={styles.overviewContent}>

    <h2 className={styles.sectionTitle}>
      Why Choose {service.title}?
    </h2>

    <p className={styles.sectionText}>
      {service.description}
    </p>

    <p className={styles.sectionText}>
      Every business has unique goals. That's why we
      create customized strategies focused on
      measurable growth, better customer acquisition,
      and long-term success. Our experienced team
      combines creativity, technology, and data-driven
      decisions to deliver outstanding results.
    </p>

  </div>

  <div className={styles.overviewCard}>

    <h3>What You'll Get</h3>

    <div className={styles.overviewList}>

      <div className={styles.overviewItem}>
        <span className={styles.check}>✓</span>

        <p>Dedicated Project Manager</p>
      </div>

      <div className={styles.overviewItem}>
        <span className={styles.check}>✓</span>

        <p>Custom Strategy & Planning</p>
      </div>

      <div className={styles.overviewItem}>
        <span className={styles.check}>✓</span>

        <p>Monthly Performance Reports</p>
      </div>

      <div className={styles.overviewItem}>
        <span className={styles.check}>✓</span>

        <p>Continuous Optimization</p>
      </div>

      <div className={styles.overviewItem}>
        <span className={styles.check}>✓</span>

        <p>ROI Focused Execution</p>
      </div>

    </div>

  </div>

</section>

{/* ================= FEATURES ================= */}

{service.features.length > 0 && (

<section className={styles.features}>

  <div className={styles.featuresHeader}>

    <h2 className={styles.featuresTitle}>
      What's Included
    </h2>

    <p className={styles.featuresText}>
      Everything you need to achieve better results
      and sustainable business growth.
    </p>

  </div>

  <div className={styles.featuresGrid}>

    {service.features.map((feature, index) => (

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

    ))}

  </div>

</section>

)}

{/* ================= BENEFITS ================= */}

{service.benefits.length > 0 && (

<section className={styles.benefits}>

  <div className={styles.benefitsGrid}>

    <div className={styles.benefitsContent}>

      <h2 className={styles.benefitsTitle}>
        Why Businesses Choose PrimeDigitor
      </h2>

      <p className={styles.benefitsText}>
        We combine experience, creativity, and
        performance-focused strategies to help
        businesses grow faster while maximizing
        every marketing investment.
      </p>

    </div>

    <div className={styles.benefitsList}>

      {service.benefits.map(
        (benefit, index) => (

        <div
          key={index}
          className={styles.benefitItem}
        >

          <div className={styles.benefitIcon}>
            ✓
          </div>

          <span>
            {benefit}
          </span>

        </div>

      ))}

    </div>

  </div>

</section>

)}

{/* ================= PROCESS ================= */}

{service.process.length > 0 && (

<section className={styles.processSection}>

  <div className={styles.processHeader}>

    <h2 className={styles.processTitle}>
      Our Working Process
    </h2>

    <p className={styles.processText}>
      A transparent workflow designed to deliver
      measurable results from planning to execution.
    </p>

  </div>

  <div className={styles.timeline}>

    {service.process.map((step, index) => (

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

    ))}

  </div>

</section>

)}
            {/* ================= STATS ================= */}

{service.stats.length > 0 && (

<section className={styles.statsSection}>

  <div className={styles.statsHeader}>

    <h2 className={styles.statsTitle}>
      Proven Results
    </h2>

    <p className={styles.statsText}>
      Numbers that reflect our commitment to quality,
      performance, and long-term client success.
    </p>

  </div>

  <div className={styles.statsGrid}>

    {service.stats.map((item, index) => (

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

    ))}

  </div>

</section>

)}

{/* ================= FAQ ================= */}

{service.faqs.length > 0 && (

<section className={styles.faqSection}>

  <div className={styles.faqHeader}>

    <h2 className={styles.faqTitle}>
      Frequently Asked Questions
    </h2>

    <p className={styles.faqText}>
      Everything you need to know before getting
      started with our service.
    </p>

  </div>

  <div className={styles.faq}>

    {service.faqs.map((faq, index) => (

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
      Let's discuss your business goals and build
      a strategy that delivers measurable growth,
      quality leads, and long-term success.
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

{/* ================= SERVICE SCHEMA ================= */}

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",

      "@type": "Service",

      name: service.title,

      description: service.description,

      image: `${SITE_URL}${service.heroImage}`,

      serviceType: service.category,

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

        service.faqs.map((faq) => ({

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

        })),

    }),
  }}
/>

)}

</main>

<Footer />

</>
);
}
