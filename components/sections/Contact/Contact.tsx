import styles from "./Contact.module.css";
import { MessageCircle, Mail, Globe, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className={`section ${styles.section}`}>
      <div className="site-container">
        <div className={styles.panel}>

          {/* Left */}
          <div className={styles.copy}>
            <p className="eyebrow">Contact</p>

            <h2 className="section-title">
              Let's Build Your
              <br />
              Next Growth Story.
            </h2>

            <p className="section-text">
              Whether you need a high-converting website, SEO, paid advertising,
              or a complete digital growth strategy, our team is ready to help
              your business grow faster.
            </p>

            <div className={styles.features}>
              <div>✓ Free Strategy Consultation</div>
              <div>✓ Reply Within 24 Hours</div>
              <div>✓ Available Worldwide</div>
              <div>✓ No Long-Term Contracts</div>
            </div>

            <div className={styles.actions}>
              <a
  href="https://wa.me/8801641572608?text=Hello%20PrimeDigitor!%20I'm%20interested%20in%20your%20services.%20I'd%20like%20to%20discuss%20my%20project%20and%20get%20a%20free%20consultation."
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-primary"
>
  <MessageCircle size={18} />
  Chat on WhatsApp
</a>
                <MessageCircle size={18} />
                Chat on WhatsApp
              <a
  href="mailto:hello@primedigitor.com?subject=Project Inquiry&body=Hello PrimeDigitor,%0A%0AI'm interested in your services."
  className="btn btn-secondary"
>
  <Mail size={18} />
  Email Us
</a>
            </div>
          </div>

          {/* Right */}
          <div className={styles.side}>
            <div className={styles.card}>

              <h3>Get In Touch</h3>

              <div className={styles.info}>

                <div className={styles.infoItem}>
                  <Mail size={18} />
                  <div>
                    <span>Email</span>
                    <strong>hello@primedigitor.com</strong>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <Globe size={18} />
                  <div>
                    <span>Availability</span>
                    <strong>Worldwide</strong>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <Clock size={18} />
                  <div>
                    <span>Response Time</span>
                    <strong>Within 24 Hours</strong>
                  </div>
                </div>

              </div>

              <div className={styles.tags}>
                <span>SEO</span>
                <span>Google Ads</span>
                <span>Facebook Ads</span>
                <span>Website</span>
                <span>Software</span>
                <span>Branding</span>
                <span>Content</span>
                <span>Social Media</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
