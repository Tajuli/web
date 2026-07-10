"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import styles from "./FAQ.module.css";

const faqs = [
  {
    q: "What services does PrimeDigitor provide?",
    a: "We specialize in Website Design & Development, SEO, Google Ads, Facebook Ads, Branding, UI/UX Design and Digital Marketing strategies that help businesses generate more leads and sales.",
  },
  {
    q: "How long does it take to build a website?",
    a: "Most business websites are completed within 2–4 weeks depending on the project scope, content availability and required features.",
  },
  {
    q: "Do you redesign existing websites?",
    a: "Yes. We can redesign your existing website with a modern UI, faster loading speed, better SEO structure and improved conversion rate.",
  },
  {
    q: "Will my website be mobile responsive?",
    a: "Absolutely. Every website we build is fully responsive and optimized for desktop, tablet and mobile devices.",
  },
  {
    q: "Do you provide SEO after launching the website?",
    a: "Yes. We offer Technical SEO, On-Page SEO, Content Optimization and Monthly SEO plans to help your website rank higher on Google.",
  },
  {
    q: "Can you manage Google & Facebook Ads?",
    a: "Yes. We create, optimize and manage Google Ads and Meta Ads campaigns focused on maximizing ROI and generating quality leads.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section id="faq" className={`section ${styles.section}`}>
      <div className={`site-container ${styles.wrapper}`}>
        {/* Left Side */}
        <div className={styles.left}>
          <h2 className={styles.title}>FAQs</h2>

          <p className={styles.description}>
            Everything you need to know about our services.
            <br />
            Can't find the answer you're looking for?
            <br />
            Please contact our team.
          </p>
        </div>

        {/* Right Side */}
        <div className={styles.right}>
          {faqs.map((faq, index) => {
            const active = open === index;

            return (
              <div
                key={index}
                className={`${styles.item} ${
                  active ? styles.active : ""
                }`}
              >
                <button
                  className={styles.question}
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.q}</span>

                  <div className={styles.icon}>
                    {active ? <Minus size={22} /> : <Plus size={22} />}
                  </div>
                </button>

                <div
                  className={`${styles.answerWrapper} ${
                    active ? styles.show : ""
                  }`}
                >
                  <p className={styles.answer}>{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
