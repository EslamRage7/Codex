import "./css/Navbar.css";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import egyptFlag from "../assets/flag-eg.svg";
import gbFlag from "../assets/flag-gb.svg";

function Navbar() {
  const { t, isArabic, toggleLanguage } = useLanguage();
  const navLinkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-md navbar-dark mt-3 mt-lg-4 sticky-top ${
        isScrolled ? "navbar--scrolled" : ""
      }`}
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">
          CODEX
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label={t.navbar.menuLabel}
        >
          <span className="nav-toggler" aria-hidden="true">
            <span className="nav-toggler__bar" />
            <span className="nav-toggler__bar" />
            <span className="nav-toggler__bar" />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <li className="nav-item">
              <NavLink className={navLinkClass} to="/" end>
                {t.navbar.home}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={navLinkClass} to="/about">
                {t.navbar.about}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={navLinkClass} to="/services">
                {t.navbar.services}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={navLinkClass} to="/contact">
                {t.navbar.contact}
              </NavLink>
            </li>
          </ul>
          <div className="nav-actions">
            <button
              type="button"
              className="btn btn-nav btn-lang"
              onClick={toggleLanguage}
              aria-label={t.navbar.toggleLabel}
            >
              <span className={isArabic ? "ms-2" : "me-2"}>
                {isArabic ? "EN" : "AR"}
              </span>
              <img
                src={isArabic ? gbFlag : egyptFlag}
                alt={isArabic ? "United Kingdom flag" : "Egypt flag"}
                className="lang-flag"
              />
              <span className="visually-hidden">{t.navbar.toggle}</span>
            </button>
            <Link className="btn btn-nav" to="/">
              {t.navbar.getStarted}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
