function Footer() {
  return (
    <footer className="footer">
      <div className="accent-shape">
        <svg
          viewBox="0 0 160 200"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M80 0 Q200 80 160 200 L160 0 Z"
            fill="rgba(80,90,200,0.25)"
          />
          <path
            d="M120 0 Q240 100 200 200 L160 200 Q200 100 160 0 Z"
            fill="rgba(60,70,180,0.15)"
          />
        </svg>
      </div>

      <div className="footer-main">
        <div className="footer-logo" data-aos="fade-up" data-aos-delay="0">
          CODEX
        </div>

        <div className="footer-tagline" data-aos="fade-up" data-aos-delay="100">
          Empowering Businesses With Premium Software And Design Solutions.
        </div>
        <div className="divider" />
        <div className="footer-side" data-aos="fade-up" data-aos-delay="200">
          <nav className="footer-nav">
            <a href="#">Home</a>
            <a href="#">Services</a>
            <a href="#">Portfolio</a>
            <a href="#">Contact</a>
          </nav>
          <div className="footer-contact">
            <span className="footer-email">Hello@Codex.Com</span>
            <span>Riyadh, KSA</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom" data-aos="fade-up" data-aos-delay="300">
        <a href="#">2026 Codex. All Rights Reserved.</a>
      </div>
    </footer>
  );
}
export default Footer;
