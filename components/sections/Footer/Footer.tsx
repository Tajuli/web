import styles from "./Footer.module.css";
import {
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="site-container">

        {/* CTA */}
        <div className={styles.cta}>
          <div>
            <span className={styles.badge}>
              🚀 Ready to Grow?
            </span>

            <h2>
              Let's Build Your
              <span> Next Growth Story</span>
            </h2>

            <p>
              Whether you need SEO, Paid Ads, Website Development or Branding,
              our team is ready to help your business grow faster.
            </p>
          </div>

          <a href="#contact" className={styles.ctaButton}>
            Book Free Consultation
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Main Grid */}
        <div className={styles.grid}>

          {/* Brand */}
          <div className={styles.brandCol}>
            <h3 className={styles.logo}>
              Prime<span>Digitor</span>
            </h3>

            <p>
              Premium Digital Marketing Agency helping businesses generate more
              leads, sales and long-term growth through modern marketing
              strategies.
            </p>

            <div className={styles.socials}>
              <a href="#">
                <Facebook size={18} />
              </a>

              <a href="#">
                <Instagram size={18} />
              </a>

              <a href="#">
                <Linkedin size={18} />
              </a>

              <a href="#">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4>Services</h4>

            <a href="/services/facebook-marketing">
              Facebook Marketing
            </a>

            <a href="/services/google-ads">
              Google Ads
            </a>

            <a href="/services/tiktok-marketing">
              TikTok Marketing
            </a>

            <a href="/services/seo">
              SEO Services
            </a>

            <a href="/services/website-development">
              Website Development
            </a>

            <a href="/services/software-development">
              Software & App Development
            </a>

            <a href="/services/video-production">
              Video Advertisement Production
            </a>

            <a href="/services/social-media-management">
              Social Media Management
            </a>

            <a href="/services/content-branding">
              Content Creation & Branding
            </a>
          </div>

          {/* Contact */}
          <div>
            <h4>Get In Touch</h4>

            <p>hello@primedigitor.com</p>

            <p>Available Worldwide</p>

            <a href="#contact" className={styles.contactBtn}>
              Start Your Project
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className={styles.bottom}>
          <p>
            © {new Date().getFullYear()} PrimeDigitor. All Rights Reserved.
          </p>

          <div className={styles.legal}>
            <a href="/privacy-policy">
              Privacy Policy
            </a>

            <a href="/terms">
              Terms
            </a>

            <a href="/cookies">
              Cookies
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
