"use client";

import styles from "./Contact.module.css";
import {
  FiMessageCircle,
  FiMail,
  FiCalendar,
  FiCheckCircle,
  FiArrowRight,
  FiTrendingUp,
  FiClock,
  FiGlobe,
} from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className={`section ${styles.section}`}>
      <div className="site-container">

        {/* Background */}
        <div className={styles.bgGlow}></div>
        <div className={styles.bgGlow2}></div>

        {/* Header */}
        <div className={styles.header}>

          <span className={styles.badge}>
            LET'S WORK TOGETHER
          </span>

          <h2 className="section-title">
            Ready to Grow Your Business
            <br />
            With Premium Digital Marketing?
          </h2>

          <p className="section-text">
            Whether you need a high-converting website, SEO,
            Facebook Ads, Google Ads, branding or complete
            digital growth strategy — PrimeDigitor is ready
            to help you scale with confidence.
          </p>

        </div>

        {/* Contact Options */}

        <div className={styles.optionGrid}>

          <a
            href="https://wa.me/8801641572608?text=Hello%20PrimeDigitor!%20I'm%20interested%20in%20your%20services.%20I'd%20like%20to%20discuss%20my%20project."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.optionCard}
          >

            <div className={styles.icon}>
              <FiMessageCircle />
            </div>

            <h3>Chat on WhatsApp</h3>

            <p>
              Fastest way to discuss your project.
              Average response within minutes.
            </p>

            <span>
              Start Chat
              <FiArrowRight />
            </span>

          </a>

          <a
            href="mailto:hello@primedigitor.com"
            className={styles.optionCard}
          >

            <div className={styles.icon}>
              <FiMail />
            </div>

            <h3>Email Us</h3>

            <p>
              Send your requirements anytime and
              we'll reply within 24 hours.
            </p>

            <span>
              Send Email
              <FiArrowRight />
            </span>

          </a>

          <div className={styles.optionCard}>

            <div className={styles.icon}>
              <FiCalendar />
            </div>

            <h3>Free Consultation</h3>

            <p>
              Book a free strategy discussion
              before starting your project.
            </p>

            <span>
              Free Strategy Call
            </span>

          </div>

        </div>

        {/* Main Card */}

        <div className={styles.wrapper}>

          {/* Left */}

          <div className={styles.left}>

            <h3>
              Why Businesses Choose PrimeDigitor
            </h3>

            <p>
              We don't just build websites or run ads.
              We build complete digital growth systems
              designed to generate more leads,
              improve conversion rates and grow brands.
            </p>

            <div className={styles.featureList}>

              <div className={styles.feature}>
                <FiCheckCircle />
                <span>100% Custom Strategy</span>
              </div>

              <div className={styles.feature}>
                <FiCheckCircle />
                <span>Transparent Pricing</span>
              </div>

              <div className={styles.feature}>
                <FiCheckCircle />
                <span>ROI Focused Campaigns</span>
              </div>

              <div className={styles.feature}>
                <FiCheckCircle />
                <span>Dedicated Support</span>
              </div>

              <div className={styles.feature}>
                <FiCheckCircle />
                <span>Premium UI & UX</span>
              </div>

              <div className={styles.feature}>
                <FiCheckCircle />
                <span>Fast Delivery</span>
              </div>

            </div>

            {/* Stats */}

            <div className={styles.stats}>

              <div className={styles.statCard}>

                <FiTrendingUp />

                <strong>Growth</strong>

                <span>
                  Performance Driven
                </span>

              </div>

              <div className={styles.statCard}>

                <FiClock />

                <strong>24 Hours</strong>

                <span>
                  Average Response
                </span>

              </div>

              <div className={styles.statCard}>

                <FiGlobe />

                <strong>Worldwide</strong>

                <span>
                  Remote Services
                </span>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className={styles.right}>

            <div className={styles.formCard}>

              <span className={styles.formBadge}>
                SEND AN INQUIRY
              </span>

              <h3>
                Tell Us About Your Project
              </h3>

              <p>
                We'll review your requirements
                and recommend the best solution.
              </p>

              <form>

                <input
                  type="text"
                  placeholder="Your Name"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                />

                <input
                  type="text"
                  placeholder="Company (Optional)"
                />

                <textarea
                  rows={6}
                  placeholder="Describe your project..."
                ></textarea>

                <button
                  type="submit"
                  className={styles.submitBtn}
                >
                  Send Inquiry
                  <FiArrowRight />
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
