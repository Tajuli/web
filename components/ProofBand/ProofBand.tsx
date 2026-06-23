import styles from "./ProofBand.module.css";

const items = [
  "SEO-led growth systems",
  "Conversion-first websites",
  "Google + Meta ad funnels",
  "Premium lead generation execution",
  "Strategy + design + performance",
];

export default function ProofBand() {
  return (
    <section className={styles.band}>
      <div className="site-container">
        <div className={styles.inner}>
          {items.map((item) => (
            <div key={item} className={styles.pill}>{item}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
