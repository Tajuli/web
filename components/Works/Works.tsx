import styles from "./Works.module.css";

const works = [
  {
    id: 1,
    title: "Kareems Dhaka",
    category: "Media Buying",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop",
    href: "#",
  },
  {
    id: 2,
    title: "TST White House",
    category: "Media Buying",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1400&auto=format&fit=crop",
    href: "#",
  },
  {
    id: 3,
    title: "Ai-Cha Bangladesh",
    category: "Media Buying",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1400&auto=format&fit=crop",
    href: "#",
  },
];

export default function Works() {
  return (
    <section id="work" className={styles.section}>
      <div className="site-container">
        <div className={styles.topRow}>
          <div className={styles.headingWrap}>
            <h2 className={styles.title}>Works.</h2>
            <p className={styles.kicker}>THINGS WE&apos;VE MADE</p>
          </div>

          <a href="/work" className={styles.viewAllBtn}>
            View All
          </a>
        </div>

        <div className={styles.grid}>
          {works.map((work) => (
            <a key={work.id} href={work.href} className={styles.card}>
              <div
                className={styles.bg}
                style={{ backgroundImage: `url(${work.image})` }}
              />

              <div className={styles.overlay} />

              <div className={styles.content}>
                <h3>{work.title}</h3>
                <p>{work.category}</p>
              </div>

              <div className={styles.arrow}>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 16L16 8M16 8H9.5M16 8V14.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
