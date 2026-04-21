function Footer() {
  return (
    <footer className="footer">
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
