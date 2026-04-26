import { Link } from "react-router-dom";
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
            <Link to="/">{t.footer.links.home}</Link>
            <Link to="/services">{t.footer.links.services}</Link>
            <Link to="/portfolio">{t.footer.links.portfolio}</Link>
            <Link to="/contact">{t.footer.links.contact}</Link>
          </nav>
          <div className="footer-contact">
            <a
              href="mailto:eslamrageh41@gmail.com"
              className="footer-email text-decoration-none">
              {t.footer.email}
            </a>
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
