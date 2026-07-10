import styles from "./WhyChooseUs.module.css";
import {
  ShieldCheck,
  TrendingUp,
  Users,
  Headphones,
  Rocket,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: <TrendingUp size={34} />,
    title: "Results-Driven Strategy",
    description:
      "Every campaign is planned with measurable goals to maximize traffic, leads, and ROI.",
  },
  {
    icon: <BarChart3 size={34} />,
    title: "Transparent Reporting",
    description:
      "Track your campaign performance with clear reports and actionable insights.",
  },
  {
    icon: <Users size={34} />,
    title: "Experienced Team",
    description:
      "Our specialists combine creativity, marketing expertise, and technical skills.",
  },
  {
    icon: <ShieldCheck size={34} />,
    title: "Trusted Process",
    description:
      "We follow proven digital marketing frameworks that consistently deliver results.",
  },
  {
    icon: <Rocket size={34} />,
    title: "Fast Execution",
    description:
      "Launch campaigns quickly without sacrificing quality or attention to detail.",
  },
  {
    icon: <Headphones size={34} />,
    title: "Dedicated Support",
    description:
      "We're always available to answer questions and help your business grow.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section">
      <div className="site-container">
        <div className="section-head">
          <span className="eyebrow">Why Choose Us</span>

          <h2 className="section-title">
            Your Growth Partner, Not Just Another Digital Marketing Agency
          </h2>

          <p className="section-text">
            We focus on measurable business growth through data-driven marketing,
            modern technology, and long-term partnerships.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((item) => (
            <article key={item.title} className={`glass-card ${styles.card}`}>
              <div className={styles.icon}>{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <div className={styles.bottom}>
          <div className={`glass-card ${styles.stats}`}>
            <div>
              <strong>100%</strong>
              <span>Custom Strategy</span>
            </div>

            <div>
              <strong>24/7</strong>
              <span>Support</span>
            </div>

            <div>
              <strong>ROI</strong>
              <span>Focused Campaigns</span>
            </div>

            <div>
              <strong>SEO</strong>
              <span>Best Practices</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
