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
              agency committed to helping businesses build a powerful online
              presence and achieve sustainable growth. By combining strategic
              thinking, creative execution, and modern technology, we develop
              solutions that strengthen brands, generate qualified leads, and
              deliver measurable business results.
            </p>

            <p className="section-text">
              Every business has unique goals and challenges. That's why we
              create customized digital strategies instead of relying on generic
              marketing approaches. Whether you're launching a startup,
              expanding your company, or scaling an established brand, our team
              focuses on delivering solutions that create long-term value and
              measurable success.
            </p>

            <div className={styles.highlights}>
              {highlights.map((item) => (
                <div key={item} className={styles.item}>
                  <CheckCircle2 size={20} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Mission & Vision */}
            <div className={styles.missionVision}>
              <div className={`glass-card ${styles.infoCard}`}>
                <h3>Our Mission</h3>

                <p>
                  To empower businesses with strategic digital marketing,
                  high-performing websites, and innovative technology solutions
                  that drive measurable growth, strengthen brand presence, and
                  create long-term business success.
                </p>
              </div>

              <div className={`glass-card ${styles.infoCard}`}>
                <h3>Our Vision</h3>

                <p>
                  To become a globally trusted digital growth partner recognized
                  for delivering innovative marketing strategies, exceptional
                  web solutions, and measurable business results through
                  transparency, creativity, and continuous innovation.
                </p>
              </div>
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
              PrimeDigitor was founded with a clear vision—to help businesses
              grow through data-driven digital marketing, modern website
              development, and innovative digital solutions. Every project
              receives direct founder involvement, ensuring strategic thinking,
              transparency, quality execution, and long-term business success
              for every client.
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
