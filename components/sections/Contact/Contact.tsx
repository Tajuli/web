"use client";

import styles from "./Contact.module.css";
import {
  MessageCircle,
  Mail,
  Calendar,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Clock3,
  Globe,
} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className={`section ${styles.section}`}>
      <div className="site-container">
        {/* Background */}
        <div className={styles.bgGlow}></div>
        <div className={styles.bgGlow2}></div>

        {/* Header */}
        <div className={styles.header}>
          <span className={styles.badge}>LET'S WORK TOGETHER</span>

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
              <MessageCircle size={30} />
            </div>

            <h3>Chat on WhatsApp</h3>

            <p>
              Fastest way to discuss your project.
              Average response within minutes.
            </p>

            <span>
              Start Chat
              <ArrowRight size={18} />
            </span>
          </a>

          <a
            href="mailto:hello@primedigitor.com"
            className={styles.optionCard}
          >
            <div className={styles.icon}>
              <Mail size={30} />
            </div>

            <h3>Email Us</h3>

            <p>
              Send your requirements anytime and
              we'll reply within 24 hours.
            </p>

            <span>
              Send Email
              <ArrowRight size={18} />
            </span>
          </a>

          <div className={styles.optionCard}>
            <div className={styles.icon}>
              <Calendar size={30} />
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
                <CheckCircle size={20} />
                <span>100% Custom Strategy</span>
              </div>

              <div className={styles.feature}>
                <CheckCircle size={20} />
                <span>Transparent Pricing</span>
              </div>

              <div className={styles.feature}>
                <CheckCircle size={20} />
                <span>ROI Focused Campaigns</span>
              </div>

              <div className={styles.feature}>
                <CheckCircle size={20} />
                <span>Dedicated Support</span>
              </div>

              <div className={styles.feature}>
                <CheckCircle size={20} />
                <span>Premium UI & UX</span>
              </div>

              <div className={styles.feature}>
                <CheckCircle size={20} />
                <span>Fast Delivery</span>
              </div>
            </div>

            {/* Stats */}

            <div className={styles.stats}>
              <div className={styles.statCard}>
                <TrendingUp size={34} />

                <strong>Growth</strong>

                <span>
                  Performance Driven
                </span>
              </div>

              <div className={styles.statCard}>
                <Clock3 size={34} />

                <strong>24 Hours</strong>

                <span>
                  Average Response
                </span>
              </div>

              <div className={styles.statCard}>
                <Globe size={34} />

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
                />

                <button
                  type="submit"
                  className={styles.submitBtn}
                >
                  Send Inquiry
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
