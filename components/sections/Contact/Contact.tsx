"use client";

import { useState } from "react";
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Something went wrong."
        );
      }

      setSuccess(
        "🎉 Thank you! Your inquiry has been sent successfully."
      );

      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    } catch (err) {
      setError(
        err instanceof Error ? err.message :
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  /* ===== Mobile Touch Hover ===== */

  const handleTouch = (
    e: React.TouchEvent<HTMLElement>
  ) => {
    e.currentTarget.classList.add(styles.touchHover);
  };

  const handleTouchEnd = (
    e: React.TouchEvent<HTMLElement>
  ) => {
    e.currentTarget.classList.remove(styles.touchHover);
  };

  return (
    <section
      id="contact"
      className={`section ${styles.section}`}
    >
      <div className="site-container">

        <div className={styles.header}>
          <span className={styles.badge}>
            LET&apos;S WORK TOGETHER
          </span>

          <h2 className="section-title">
            Ready to Find the Fastest Path to More Qualified Inquiries?
          </h2>

          <p className="section-text">
            Share your website, target market, and growth goal. We will review the clearest next step—SEO, Google Ads, Meta Ads, local SEO, a conversion-focused website, or a complete digital growth plan.
          </p>
        </div>

        {/* Contact Options */}

        <div className={styles.optionGrid}>

          <a
            href="https://wa.me/8801832729052?text=Hello%20PrimeDigitor!%20I'm%20interested%20in%20your%20services.%20I'd%20like%20to%20discuss%20my%20project."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.optionCard}
            onTouchStart={handleTouch}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchEnd}
          >
            <div className={styles.icon}>
              <MessageCircle size={30} />
            </div>

            <h3>Chat on WhatsApp</h3>

            <p>
              Fastest way to discuss your project, request an audit, or scope next steps with our team.
            </p>

            <span>
              Start Chat
              <ArrowRight size={18} />
            </span>
          </a>

          <a
            href="mailto:hello@primedigitor.com"
            className={styles.optionCard}
            onTouchStart={handleTouch}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchEnd}
          >
            <div className={styles.icon}>
              <Mail size={30} />
            </div>

            <h3>Email Us</h3>

            <p>
              Send your requirements anytime. We review every inquiry and reply within 24 hours.
            </p>

            <span>
              Send Email
              <ArrowRight size={18} />
            </span>
          </a>

          <a
            href="#contact-form"
            className={styles.optionCard}
            onTouchStart={handleTouch}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchEnd}
          >
            <div className={styles.icon}>
              <Calendar size={30} />
            </div>

            <h3>Free Consultation</h3>

            <p>
              Request a no-pressure strategy review before you commit to any service.
            </p>

            <span>
              Free Strategy Call
            </span>
          </a>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.left}>
            <h3>
              Why Businesses Choose PrimeDigitor
            </h3>

            <p>
              We connect strategy, creative, tracking, and conversion-focused execution so your marketing is easier to measure and easier to improve.
            </p>

            <div className={styles.featureList}>
                            <div className={styles.feature}>
                <CheckCircle size={20} />
                <span>Custom Growth Roadmap</span>
              </div>

              <div className={styles.feature}>
                <CheckCircle size={20} />
                <span>Transparent Pricing</span>
              </div>

              <div className={styles.feature}>
                <CheckCircle size={20} />
                <span>Conversion Tracking Focus</span>
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

            <div className={styles.stats}>
              <div className={styles.statCard}>
                <TrendingUp size={34} />
                <strong>Growth</strong>
                <span>Performance Driven</span>
              </div>

              <div className={styles.statCard}>
                <Clock3 size={34} />
                <strong>Within 24h</strong>
                <span>Average Response</span>
              </div>

              <div className={styles.statCard}>
                <Globe size={34} />
                <strong>Worldwide</strong>
                <span>Remote Services</span>
              </div>
            </div>
          </div>

          {/* Right */}

          <div className={styles.right}>
            <div id="contact-form" className={styles.formCard}>
              <span className={styles.formBadge}>
                SEND AN INQUIRY
              </span>

              <h3>
                Get a Free Growth Audit
              </h3>

              <p>
                Tell us what you want to improve. We will review your website, offer, and current marketing before recommending next steps.
              </p>

              <form onSubmit={handleSubmit} aria-label="Project inquiry form">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name" aria-label="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address" aria-label="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <input
                  type="text"
                  name="company"
                  placeholder="Company / Website URL (Optional)" aria-label="Company or website optional"
                  value={formData.company}
                  onChange={handleChange}
                />

                <textarea
                  rows={6}
                  name="message"
                  placeholder="Tell us your target location, current challenge, and the outcome you want—calls, forms, bookings, store visits, or sales." aria-label="Project goals and requirements"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />

                {success && (
                  <div className={styles.success}>
                    {success}
                  </div>
                )}

                {error && (
                  <div className={styles.error}>
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  className={`btn btn-primary ${styles.submitBtn}`}
                  disabled={loading}
                >
                  {loading ? (
                    "Sending..."
                  ) : (
                    <>
                      Request My Free Audit
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
