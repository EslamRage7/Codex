import "./css/Navbar.css";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
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
          aria-label="Toggle navigation"
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
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={navLinkClass} to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={navLinkClass} to="/services">
                services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={navLinkClass} to="/contact">
                contact
              </NavLink>
            </li>
          </ul>
          <Link className="btn btn-nav" to="/">
            get started
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
