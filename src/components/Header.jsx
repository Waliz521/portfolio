import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { navigationLinks } from "../data/navigation";
import { contactDetails } from "../data/contact";
import { personalInfo } from "../data/personal";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="site-header site-header--gradient">
      <nav className="nav nav--maxmilkin">
        <a className="nav__brand nav__brand--maxmilkin" href="/">
          {personalInfo.name.toUpperCase()}
        </a>

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
          className={`nav__links nav__links--maxmilkin ${isOpen ? "nav__links--open" : ""}`}
        >
          <ul>
            {navigationLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive ? "nav__link nav__link--active nav__link--maxmilkin" : "nav__link nav__link--maxmilkin"
                  }
                  onClick={closeMenu}
                  end={link.to === "/"}
                >
                  {link.label.toUpperCase()}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}


