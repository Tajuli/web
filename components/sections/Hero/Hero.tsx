import Image from "next/image";
import styles from "./Hero.module.css";
import HeroSlider from "./HeroSlider";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroImage}>
        <Image
          src="/images/hero/hero4.webp"
          alt="PrimeDigitor digital marketing team helping businesses generate qualified leads"
          fill
          priority
          fetchPriority="high"
          quality={100}
          sizes="100vw"
          className={styles.heroImg}
        />
      </div>

      <div className={styles.bgOverlay} />
      <div className={styles.gridOverlay} />
      <div className={`${styles.glow} ${styles.glowA}`} />
      <div className={`${styles.glow} ${styles.glowB}`} />

      <div className={`site-container ${styles.heroInner}`}>
        <div className={styles.heroMain}>
          <div className={`${styles.left} ${styles.reveal}`}>
            <div className={styles.leftInner}>
              <div className={styles.leftTop}>
                <div className={styles.kickerWrap}>
                  <span className={styles.kickerDot} />
                  <p className={styles.kicker}>PrimeDigitor • Bangladesh Digital Growth Agency</p>
                </div>

                <h1 className={styles.title}>Turn SEO, Ads & Your Website Into More Qualified Leads</h1>

                <p className={styles.text}>
                  PrimeDigitor helps service businesses and growing brands convert search traffic, paid media, and website visitors into measurable inquiries, booked calls, and sales opportunities.
                </p>
              </div>

              <div className={styles.leftBottom}>
                <div className={styles.actions}>
                  <a href="#contact" className="btn btn-primary">
                    Request a Free Growth Audit
                  </a>

                  <a
                    href="https://wa.me/8801641572608?text=Hello%20PrimeDigitor!%20I'm%20interested%20in%20your%20services.%20I'd%20like%20to%20discuss%20my%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.resultFrame}>
          <span className={`${styles.frameCorner} ${styles.frameTopLeft}`} aria-hidden="true" />
          <span className={`${styles.frameCorner} ${styles.frameTopRight}`} aria-hidden="true" />
          <span className={`${styles.frameCorner} ${styles.frameBottomLeft}`} aria-hidden="true" />
          <span className={`${styles.frameCorner} ${styles.frameBottomRight}`} aria-hidden="true" />
          <HeroSlider />
        </div>
      </div>
    </section>
  );
}
