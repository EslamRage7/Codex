import "./css/Navbar.css";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { FaGlobeAfrica } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

import { useLanguage } from "../context/LanguageContext";

import egyptFlag from "../assets/flag-eg.svg";
import gbFlag from "../assets/flag-gb.svg";

function Navbar() {
  const { t, isArabic, setLanguage } = useLanguage();
  const navLinkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";
  const currentLanguageLabel = isArabic ? "AR" : "En";

  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const languageMenuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        languageMenuRef.current &&
        !languageMenuRef.current.contains(event.target)
      ) {
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (language) => {
    setLanguage(language);
    setIsLanguageOpen(false);
  };

  return (
    <nav
      className={`navbar navbar-expand-md navbar-dark mt-3 mt-lg-4 sticky-top ${
        isScrolled ? "navbar--scrolled" : ""
      }`}
      data-bs-theme="dark">
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
          aria-label={t.navbar.menuLabel}>
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
            <div className="lang-menu" ref={languageMenuRef}>
              <button
                type="button"
                className="btn btn-nav btn-lang"
                onClick={() => setIsLanguageOpen((prev) => !prev)}
                aria-label={t.navbar.toggleLabel}
                aria-expanded={isLanguageOpen}
                aria-haspopup="menu">
                <FaGlobeAfrica className="lang-globe" aria-hidden="true" />
                <span className={`lang-code ${isArabic ? "me-2" : "ms-2"}`}>
                  {currentLanguageLabel} <IoMdArrowDropdown />
                </span>
              </button>

              <div
                className={`lang-dropdown  ${isLanguageOpen ? "is-open" : ""}`}
                role="menu">
                <button
                  type="button"
                  className={`lang-option ${isArabic ? "is-active" : ""}`}
                  onClick={() => handleLanguageChange("ar")}
                  role="menuitem">
                  <img src={egyptFlag} alt="Egypt flag" className="lang-flag" />
                  <span>AR</span>
                </button>
                <button
                  type="button"
                  className={`lang-option mt-2 ${!isArabic ? "is-active" : ""}`}
                  onClick={() => handleLanguageChange("en")}
                  role="menuitem">
                  <img
                    src={gbFlag}
                    alt="United Kingdom flag"
                    className="lang-flag"
                  />
                  <span>En</span>
                </button>
              </div>
            </div>
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
