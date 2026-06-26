"use client";

import Link from "next/link";
import styles from "./Works.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const works = [
  {
    slug: "paiker-imports",
    title: "Paiker Imports",
    category: "Media Buying",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop",
    logo: "BYD",
  },
  {
    slug: "cube-holdings",
    title: "Cube Holdings Ltd",
    category: "Media Buying",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1600&auto=format&fit=crop",
    logo: "Cube",
  },
  {
    slug: "maven-autos",
    title: "Maven Autos",
    category: "Media Buying",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1600&auto=format&fit=crop",
    logo: "MV",
  },
  {
    slug: "prime-realty",
    title: "Prime Realty",
    category: "Lead Generation",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
    logo: "PR",
  },
  {
    slug: "nova-residence",
    title: "Nova Residence",
    category: "Creative Campaign",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
    logo: "NR",
  },
  {
    slug: "urban-horizon",
    title: "Urban Horizon",
    category: "Brand Campaign",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1600&auto=format&fit=crop",
    logo: "UH",
  },
];

export default function Works() {
  return (
    <section id="work" className={`section ${styles.section}`}>
      <div className="site-container">
        <div className="section-head">
          <p className="eyebrow">Our Work</p>
          <h2 className="section-title">
            Campaigns, creatives and media buying that move brands forward.
          </h2>
         /* <p className="section-text">
            Explore selected projects, campaigns and digital growth work from
            our portfolio.
          </p> */
        </div>

        <div className={styles.sliderWrap}>
          <button
            className={`${styles.navBtn} ${styles.prevBtn} works-prev`}
            aria-label="Previous work"
          >
            ‹
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            className={styles.worksSwiper}
            loop={true}
            speed={900}
            grabCursor={true}
            watchSlidesProgress={true}
            allowTouchMove={true}
            autoplay={{
              delay: 2800,
              disableOnInteraction: false,
              reverseDirection: true,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: ".works-prev",
              nextEl: ".works-next",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 14,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 18,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
          >
            {works.map((work) => (
              <SwiperSlide key={work.slug}>
                <Link
                  href={`/work/${work.slug}`}
                  className={styles.cardLink}
                  aria-label={`View ${work.title} case study`}
                >
                  <article className={styles.workCard}>
                    <div
                      className={styles.cardBg}
                      style={{ backgroundImage: `url(${work.image})` }}
                    />
                    <div className={styles.overlay} />

                    <div className={styles.cardTop}>
                      <div className={styles.logoBadge}>{work.logo}</div>
                    </div>

                    <div className={styles.cardContent}>
                      <h3>{work.title}</h3>
                      <p>{work.category}</p>
                    </div>
                  </article>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            className={`${styles.navBtn} ${styles.nextBtn} works-next`}
            aria-label="Next work"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
