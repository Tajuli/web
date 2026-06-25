"use client";

import styles from "./Works.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const works = [
  {
    tag: "Healthcare SEO + CRO",
    title:
      "A clinic growth system rebuilt around local visibility, trust and patient enquiry conversion.",
    text:
      "We restructured service pages, clarified the offer hierarchy and rebuilt conversion paths so search traffic could turn into enquiries more consistently.",
    metrics: ["+162% organic traffic", "+58% conversion rate", "3 new service funnels"],
  },
  {
    tag: "Lead Generation Ads",
    title:
      "Paid acquisition funnel redesigned to improve lead quality and lower cost per acquisition.",
    text:
      "The campaign structure, landing page flow and CTA architecture were rebuilt around stronger intent and cleaner conversion journeys.",
    metrics: ["4.1x ROAS", "-31% CPL", "+93% qualified leads"],
  },
  {
    tag: "Premium Website Redesign",
    title:
      "Brand site repositioned to feel more premium, more credible and more conversion-focused.",
    text:
      "We tightened messaging, improved visual hierarchy and introduced a cleaner user journey for decision-makers evaluating the service.",
    metrics: ["+44% engagement", "+67% CTA clicks", "Faster mobile UX"],
  },
];

export default function Works() {
  return (
    <section id="work" className={`section ${styles.worksSection}`}>
      <div className="site-container">
        <div className={styles.topbar}>
          <div className={styles.headingWrap}>
            <h2 className={styles.title}>Works.</h2>
            <p className={styles.subtitle}>THINGS WE&apos;VE MADE</p>
          </div>

          <a href="/work" className={styles.viewAllBtn}>
            View All
          </a>
        </div>

        <div className={styles.sliderWrap}>
          <button
            className={`${styles.navBtn} ${styles.prevBtn}`}
            aria-label="Previous slide"
          >
            ‹
          </button>

          <button
            className={`${styles.navBtn} ${styles.nextBtn}`}
            aria-label="Next slide"
          >
            ›
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: `.${styles.prevBtn}`,
              nextEl: `.${styles.nextBtn}`,
            }}
            autoplay={{
              delay: 3400,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            speed={900}
            spaceBetween={24}
            slidesPerView={1.08}
            breakpoints={{
              640: {
                slidesPerView: 1.25,
                spaceBetween: 18,
              },
              900: {
                slidesPerView: 2.1,
                spaceBetween: 22,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className={styles.worksSlider}
          >
            {works.map((work, index) => (
              <SwiperSlide key={work.title}>
                <article className={styles.workCard}>
                  <div className={styles.cardBg}>
                    <div className={styles.gridPattern} />
                    <div className={styles.glowOne} />
                    <div className={styles.glowTwo} />
                    <div className={styles.mockupWrap}>
                      <div className={styles.mockupCard} />
                      <div className={styles.mockupCard} />
                      <div className={styles.mockupCard} />
                      <div className={styles.mockupCard} />
                      <div className={styles.mockupCard} />
                      <div className={styles.mockupCard} />
                    </div>
                  </div>

                  <div className={styles.overlay} />

                  <div className={styles.cardContent}>
                    <span className={styles.tag}>{work.tag}</span>
                    <h3>{work.title}</h3>
                    <p>{work.text}</p>

                    <ul className={styles.metrics}>
                      {work.metrics.map((metric) => (
                        <li key={metric}>{metric}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.indexBadge}>
                    {(index + 1).toString().padStart(2, "0")}
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
