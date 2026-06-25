"use client";

import styles from "./Works.module.css";

const works = [
  {
    id: 1,
    title: "Kareems Dhaka",
    category: "Media Buying",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop",
    href: "#",
  },
  {
    id: 2,
    title: "TST WhiteHouse",
    category: "Media Buying",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1600&auto=format&fit=crop",
    href: "#",
  },
  {
    id: 3,
    title: "Ai-Cha Bangladesh",
    category: "Media Buying",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1600&auto=format&fit=crop",
    href: "#",
  },
];

export default function Works() {
  return (
    <section id="work" className={styles.section}>
      <div className="site-container">
        <div className={styles.topbar}>
          <div className={styles.headingWrap}>
            <h2 className={styles.title}>Works.</h2>
            <p className={styles.kicker}>THINGS WE&apos;VE MADE</p>
          </div>

          <a href="/work" className={styles.viewAll}>
            View All
          </a>
        </div>

        <div className={styles.grid}>
          {works.map((work, index) => (
            <article
              key={work.id}
              className={`${styles.card} ${
                index === 0 ? styles.cardLeft : ""
              }`}
            >
              <div
                className={styles.bg}
                style={{ backgroundImage: `url(${work.image})` }}
              />

              <div className={styles.overlay} />
              <div className={styles.softOverlay} />

              {index === 0 && (
                <button
                  className={`${styles.arrowBtn} ${styles.leftArrow}`}
                  aria-label="Previous project"
                  type="button"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
              )}

              {index === works.length - 1 && (
                <button
                  className={`${styles.arrowBtn} ${styles.rightArrow}`}
                  aria-label="Next project"
                  type="button"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              )}

              <div className={styles.content}>
                <h3>{work.title}</h3>
                <p>{work.category}</p>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.progressWrap}>
          <span className={styles.progressTrack} />
          <span className={styles.progressActive} />
        </div>
      </div>
    </section>
  );
}
