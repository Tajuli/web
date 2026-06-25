"use client";

import styles from "./Works.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const works = [
  {
    title: "Kareems Dhaka",
    category: "Media Buying",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop",
    href: "#",
  },
  {
    title: "TST White House",
    category: "Media Buying",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1600&auto=format&fit=crop",
    href: "#",
  },
  {
    title: "Ai-Cha Bangladesh",
    category: "Media Buying",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop",
    href: "#",
  },
  {
    title: "Prime Dental Care",
    category: "Website Design",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1600&auto=format&fit=crop",
    href: "#",
  },
  {
    title: "Nova Properties",
    category: "Brand Identity",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop",
    href: "#",
  },
];

export default function Works() {
  return (
    <section id="work" className={styles.worksSection}>
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
              delay: 3200,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            speed={900}
            spaceBetween={24}
            slidesPerView={1.08}
            breakpoints={{
              640: {
                slidesPerView: 1.3,
                spaceBetween: 18,
              },
              900: {
                slidesPerView: 2.15,
                spaceBetween: 22,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className={styles.worksSlider}
          >
            {works.map((work) => (
              <SwiperSlide key={work.title}>
                <a href={work.href} className={styles.workCard}>
                  <div
                    className={styles.bg}
                    style={{ backgroundImage: `url(${work.image})` }}
                  />

                  <div className={styles.overlay} />

                  <div className={styles.cardContent}>
                    <h3>{work.title}</h3>
                    <p>{work.category}</p>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
