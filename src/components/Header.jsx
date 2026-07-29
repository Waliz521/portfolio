import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { navigationLinks } from "../data/navigation";
import { personalInfo } from "../data/personal";

const SCROLL_THRESHOLD = 20;

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const resumeUrl = "/resume/Zahak Wali Zahir - Resume.pdf";

  return (
    <header className="site-header">
      <div
        className={`site-header__pill${isScrolled ? " site-header__pill--scrolled" : ""}`}
        style={{ transform: "translateZ(0)", willChange: "transform" }}
      >
        <nav className="nav nav--pill">
          <Link className="nav__brand nav__brand--pill" to="/">
            {personalInfo.name.toUpperCase()}
          </Link>

          <ul className="nav-pill">
            {navigationLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) => {
                    const isCta = link.to === "/contact";
                    return [
                      "nav-pill__link",
                      isActive && "nav-pill__link--selected",
                      isCta && !isActive && "nav-pill__link--cta",
                    ]
                      .filter(Boolean)
                      .join(" ");
                  }}
                  onClick={closeMenu}
                  end={link.to === "/"}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="nav__actions">
            <a
              href={resumeUrl}
              className="nav__resume"
              target="_blank"
              rel="noreferrer"
              download
              onClick={closeMenu}
            >
              Resume
            </a>
          </div>

          <button
            className="nav__toggle"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
          >
            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>

          <div
            id="primary-navigation"
            className={`nav__links nav__links--pill ${isOpen ? "nav__links--open" : ""}`}
          >
            <ul className="nav-pill nav-pill--mobile">
              {navigationLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) => {
                      const isCta = link.to === "/contact";
                      return [
                        "nav-pill__link",
                        isActive && "nav-pill__link--selected",
                        isCta && !isActive && "nav-pill__link--cta",
                      ]
                        .filter(Boolean)
                        .join(" ");
                    }}
                    onClick={closeMenu}
                    end={link.to === "/"}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
