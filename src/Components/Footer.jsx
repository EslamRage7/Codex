import { useLanguage } from "../context/LanguageContext";

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-logo" data-aos="fade-up" data-aos-delay="0">
          CODEX
        </div>

        <div className="footer-tagline" data-aos="fade-up" data-aos-delay="100">
          {t.footer.tagline}
        </div>
        <div className="divider" />
        <div className="footer-side" data-aos="fade-up" data-aos-delay="200">
          <nav className="footer-nav">
            <a href="#">{t.footer.links.home}</a>
            <a href="#">{t.footer.links.services}</a>
            <a href="#">{t.footer.links.portfolio}</a>
            <a href="#">{t.footer.links.contact}</a>
          </nav>
          <div className="footer-contact">
            <span className="footer-email">{t.footer.email}</span>
            <span>{t.footer.location}</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom" data-aos="fade-up" data-aos-delay="300">
        <a href="#">{t.footer.copyright}</a>
      </div>
    </footer>
  );
}
export default Footer;

