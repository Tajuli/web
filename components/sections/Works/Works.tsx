"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import styles from "./Works.module.css";

import CaseStudyCard from "@/components/case-study/CaseStudyCard";
import { caseStudies } from "@/data/caseStudies";

export default function Works() {
  return (
    <section id="work" className={`section ${styles.section}`}>
      <div className="site-container">
        {/* =========================
            Section Heading
        ========================== */}
        <div className="section-head">
          <p className="eyebrow">OUR CASE STUDIES</p>

          <h2 className="section-title">
            See real project examples before you contact us—websites, campaigns, branding, and digital systems built to support measurable business growth.
          </h2>
        </div>

        {/* =========================
            Slider Header
        ========================== */}

        <div className={styles.sliderHeader}>
          <h3 className={styles.sliderTitle}>
            Featured Case Studies
          </h3>

          <Link
            href="/case-studies"
            className={styles.viewAll}
          >
            View All Case Studies
          </Link>
        </div>

        {/* =========================
            Slider
        ========================== */}

        <div className={styles.sliderWrap}>
          <button
            className={`${styles.navBtn} ${styles.prevBtn} works-prev`}
            aria-label="Previous Case Study"
          >
            ‹
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            className={styles.worksSwiper}
            loop={caseStudies.length > 3}
            speed={900}
            grabCursor
            watchSlidesProgress
            allowTouchMove
            autoplay={{
              delay: 3200,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: ".works-prev",
              nextEl: ".works-next",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 18,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 22,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 28,
              },
            }}
          >
            {caseStudies.map((study) => (
              <SwiperSlide key={study.id}>
                <CaseStudyCard study={study} />
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            className={`${styles.navBtn} ${styles.nextBtn} works-next`}
            aria-label="Next Case Study"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
