"use client";

import { useState } from "react";
import styles from "./Works.module.css";

const works = [
  {
    title: "Paiker Imports",
    category: "Media Buying",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop",
    logo: "BYD",
  },
  {
    title: "Cube Holdings Ltd",
    category: "Media Buying",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1600&auto=format&fit=crop",
    logo: "Cube",
  },
  {
    title: "Maven Autos",
    category: "Media Buying",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1600&auto=format&fit=crop",
    logo: "MV",
  },
  {
    title: "Prime Realty",
    category: "Lead Generation",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
    logo: "PR",
  },
  {
    title: "Nova Residence",
    category: "Creative Campaign",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
    logo: "NR",
  },
];

export default function Works() {
  const [current, setCurrent] = useState(1);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? works.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === works.length - 1 ? 0 : prev + 1));
  };

  const getVisibleSlides = () => {
    const prevIndex = current === 0 ? works.length - 1 : current - 1;
    const nextIndex = current === works.length - 1 ? 0 : current + 1;

    return [
      { ...works[prevIndex], position: "left", key: `left-${prevIndex}` },
      { ...works[current], position: "center", key: `center-${current}` },
      { ...works[nextIndex], position: "right", key: `right-${nextIndex}` },
    ];
  };

  const visibleSlides = getVisibleSlides();

  return (
    <section id="work" className={`section ${styles.section}`}>
      <div className="site-container">
        <div className="section-head">
          <p className="eyebrow">Our Work</p>
          <h2 className="section-title">
            Campaigns, creatives and media buying that actually move brands.
          </h2>
          <p className="section-text">
            A premium portfolio slider styled like the reference layout with
            large visual cards, centered copy and smooth navigation.
          </p>
        </div>

        <div className={styles.sliderWrap}>
          <button
            className={`${styles.navBtn} ${styles.prevBtn}`}
            onClick={prevSlide}
            aria-label="Previous work"
          >
            ‹
          </button>

          <div className={styles.sliderViewport}>
            {visibleSlides.map((item) => (
              <article
                key={item.key}
                className={`${styles.workCard} ${
                  item.position === "center" ? styles.activeCard : ""
                }`}
              >
                <div
                  className={styles.cardBg}
                  style={{ backgroundImage: `url(${item.image})` }}
                />

                <div className={styles.overlay} />

                <div className={styles.cardTop}>
                  <div className={styles.logoBadge}>{item.logo}</div>
                </div>

                <div className={styles.cardContent}>
                  <h3>{item.title}</h3>
                  <p>{item.category}</p>
                </div>
              </article>
            ))}
          </div>

          <button
            className={`${styles.navBtn} ${styles.nextBtn}`}
            onClick={nextSlide}
            aria-label="Next work"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
