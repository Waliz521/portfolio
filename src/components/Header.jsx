import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiMenu, FiX, FiSun } from "react-icons/fi";
import { navigationLinks } from "../data/navigation";
import { personalInfo } from "../data/personal";

/** Earth icon – shown when Dune theme is active (click to switch to dark). */
function EarthIcon({ size = 18 }) {
  return (
    <img 
      src="/images/earth.png" 
      alt="Earth icon" 
      style={{ width: `${size}px`, height: `${size}px`, objectFit: 'contain' }}
    />
  );
}

const THEME_KEY = "portfolio-theme";
const SCROLL_THRESHOLD = 20;

function getInitialTheme() {
  if (typeof window === "undefined") return "dark";
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === "dune" || stored === "dark") return stored;
  if (stored === "light") return "dune"; /* migrated from old light theme */
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "dune" : "dark";
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
    
    // Update favicon based on theme
    const faviconLink = document.getElementById("favicon");
    const appleTouchIcon = document.getElementById("apple-touch-icon");
    
    if (faviconLink && appleTouchIcon) {
      const faviconPath = theme === "dune" 
        ? "/images/travel.png"  // Dune theme favicon
        : "/images/globe_12273551.png";  // Dark theme favicon
      
      faviconLink.setAttribute("href", faviconPath);
      appleTouchIcon.setAttribute("href", faviconPath);
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    // Start transparent; only show pill after user has scrolled
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "dune" : "dark"));
  };

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
            <button
              type="button"
              className="nav__icon-btn nav__icon-btn--theme"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to Dune palette theme" : "Switch to dark theme"}
            >
              {theme === "dark" ? (
                <img 
                  src="/images/fremen.png" 
                  alt="Fremen icon" 
                  style={{ width: '18px', height: '18px', objectFit: 'contain' }}
                />
              ) : (
                <EarthIcon size={18} />
              )}
            </button>
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


