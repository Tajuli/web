export default function Footer() {
  return (
    <footer className="footer premium-footer">
      <div className="site-container footer-grid">
        <div>
          <div className="brand footer-brand">Prime<span>Digitor</span></div>
          <p className="footer-copy">Growth-focused digital marketing, premium websites, lead generation and conversion strategy.</p>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <a href="#services">SEO</a>
          <a href="#services">Paid Ads</a>
          <a href="#services">Web Design</a>
        </div>
        <div className="footer-col">
          <h4>Explore</h4>
          <a href="#work">Work</a>
          <a href="#stories">Stories</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <a href="#contact">Book a Call</a>
          <a href="mailto:hello@primedigitor.com">hello@primedigitor.com</a>
        </div>
      </div>
    </footer>
  );
}
