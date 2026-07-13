import styles from "./About.module.css";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Results-Driven Digital Marketing",
  "Modern Website Development",
  "Transparent Communication",
  "Long-Term Business Partnership",
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="site-container">
        <div className={styles.wrapper}>
          {/* Left Content */}
          <div className={styles.content}>
            <span className="eyebrow">About Us</span>

            <h2 className="section-title">
              Helping Businesses Grow Through Strategy, Creativity & Technology
            </h2>

            <p className="section-text">
              PrimeDigitor is a modern digital marketing and web development
              agency dedicated to helping businesses build a strong online
              presence and achieve sustainable growth. We combine strategic
              thinking, creative execution, and modern technology to deliver
              solutions that generate measurable business results.
            </p>

            <p className="section-text">
              Whether you're launching a new brand or scaling an existing
              business, our goal is simple — create effective digital strategies
              tailored to your unique objectives, not generic one-size-fits-all
              solutions.
            </p>

            <div className={styles.highlights}>
              {highlights.map((item) => (
                <div key={item} className={styles.item}>
                  <CheckCircle2 size={20} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Founder Card */}
          <div className={`glass-card ${styles.card}`}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/founder.jpg"
                alt="Muhammad Tajul Islam"
                width={220}
                height={220}
                className={styles.image}
              />
            </div>

            <h3>Muhammad Tajul Islam</h3>

            <span className={styles.role}>
              Founder & CEO
            </span>

            <p>
              PrimeDigitor was founded with a vision to help businesses grow
              through data-driven digital marketing, modern websites, and
              practical digital solutions. Every project receives direct founder
              involvement to ensure quality, transparency, and long-term
              success.
            </p>

            <a href="#contact" className="btn btn-primary">
              Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
