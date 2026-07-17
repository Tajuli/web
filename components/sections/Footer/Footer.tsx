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
              Turn Your Next Visitor Into
              <span> a Qualified Inquiry</span>
            </h2>

            <p>
              Get a free growth audit for SEO, paid ads, website development, local SEO, Google Business Profile optimization, or branding.
            </p>
          </div>

          <a href="#contact" className={styles.ctaButton}>
            Request Free Audit
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
              Bangladesh-based digital marketing agency helping businesses generate more qualified leads, improve local visibility, and grow with SEO, paid ads, websites, content, and branding.
            </p>

            <div className={styles.socials}>
              <a href="https://www.facebook.com/primedigitor" target="_blank" rel="noopener noreferrer" aria-label="PrimeDigitor on Facebook">
                <Facebook size={18} />
              </a>

              <a href="https://www.instagram.com/primedigitor" target="_blank" rel="noopener noreferrer" aria-label="PrimeDigitor on Instagram">
                <Instagram size={18} />
              </a>

              <a href="https://www.linkedin.com/company/primedigitor" target="_blank" rel="noopener noreferrer" aria-label="PrimeDigitor on LinkedIn">
                <Linkedin size={18} />
              </a>

              <a href="https://www.youtube.com/@primedigitor" target="_blank" rel="noopener noreferrer" aria-label="PrimeDigitor on YouTube">
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

            <p>Email: hello@primedigitor.com</p>

            <p>WhatsApp: +880 1832-729052</p>

            <p>Serving Bangladesh and international clients remotely</p>

            <a href="#contact" className={styles.contactBtn}>
              Request Free Audit
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
