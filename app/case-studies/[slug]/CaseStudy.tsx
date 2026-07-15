"use client";

import Image from "next/image";
import Link from "next/link";

import styles from "./CaseStudy.module.css";
import { CaseStudy } from "@/data/caseStudies";

interface Props {
  caseStudy: CaseStudy;
}

export default function CaseStudy({ caseStudy }: Props) {
  return (
    <main className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="site-container">
          <Link href="/case-studies" className={styles.back}>
            ← Back to Case Studies
          </Link>

          <span className={styles.category}>{caseStudy.category}</span>

          <h1>{caseStudy.title}</h1>

          <p>{caseStudy.shortDescription}</p>

          <div className={styles.meta}>
            <div>
              <strong>Client</strong>
              <span>{caseStudy.client}</span>
            </div>

            <div>
              <strong>Industry</strong>
              <span>{caseStudy.industry}</span>
            </div>

            <div>
              <strong>Completed</strong>
              <span>{caseStudy.completedAt}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Cover */}
      <section className={styles.coverSection}>
        <div className="site-container">
          <div className={styles.cover}>
            <Image
              src={caseStudy.coverImage}
              alt={caseStudy.title}
              fill
              className={styles.coverImage}
              priority
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className={styles.contentSection}>
        <div className="site-container">
          <div className={styles.wrapper}>
            {/* Main */}
            <div className={styles.main}>
              <section>
                <h2>Project Overview</h2>
                <p>{caseStudy.description}</p>
              </section>

              <section>
                <h2>The Challenge</h2>
                <p>{caseStudy.challenge}</p>
              </section>

              <section>
                <h2>Our Solution</h2>
                <p>{caseStudy.solution}</p>
              </section>

              <section>
                <h2>Services Provided</h2>

                <ul className={styles.list}>
                  {caseStudy.services.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              </section>

              {caseStudy.technologies &&
                caseStudy.technologies.length > 0 && (
                  <section>
                    <h2>Technologies Used</h2>

                    <div className={styles.tags}>
                      {caseStudy.technologies.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  </section>
                )}

              <section>
                <h2>Results</h2>

                <ul className={styles.list}>
                  {caseStudy.results.map((result) => (
                    <li key={result}>{result}</li>
                  ))}
                </ul>
              </section>

              {caseStudy.gallery &&
                caseStudy.gallery.length > 0 && (
                  <section>
                    <h2>Project Gallery</h2>

                    <div className={styles.gallery}>
                      {caseStudy.gallery.map((image, index) => (
                        <div
                          key={index}
                          className={styles.galleryItem}
                        >
                          <Image
                            src={image}
                            alt={`${caseStudy.title} ${index + 1}`}
                            fill
                            className={styles.galleryImage}
                          />
                        </div>
                      ))}
                    </div>
                  </section>
                )}
            </div>

            {/* Sidebar */}
            <aside className={styles.sidebar}>
              {caseStudy.metrics &&
                caseStudy.metrics.length > 0 && (
                  <div className={styles.card}>
                    <h3>Project Highlights</h3>

                    <div className={styles.metrics}>
                      {caseStudy.metrics.map((metric) => (
                        <div key={metric.label}>
                          <strong>{metric.value}</strong>
                          <span>{metric.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              {caseStudy.testimonial && (
                <div className={styles.card}>
                  <h3>Client Feedback</h3>

                  <blockquote>
                    "{caseStudy.testimonial.quote}"
                  </blockquote>

                  <strong>
                    {caseStudy.testimonial.name}
                  </strong>

                  <span>
                    {caseStudy.testimonial.designation}
                  </span>
                </div>
              )}

              <div className={styles.card}>
                <h3>Need Similar Results?</h3>

                <p>
                  Let's discuss how PrimeDigitor can help
                  grow your business with tailored digital
                  solutions.
                </p>

                <Link
                  href="/contact"
                  className={styles.button}
                >
                  Get Free Consultation
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
