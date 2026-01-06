import { Link } from "react-router-dom";
import { navigationLinks } from "../data/navigation";
import { contactDetails } from "../data/contact";
import { personalInfo } from "../data/personal";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer__content">
        <div>
          <h3>Get in touch</h3>
          <ul className="footer__list">
            <li>
              <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
            </li>
            <li>
              <a href={`tel:${contactDetails.phone.replace(/\s|\+/g, "")}`}>{contactDetails.phone}</a>
            </li>
            <li>{contactDetails.location}</li>
          </ul>
        </div>

        <div>
          <h3>Quick links</h3>
          <ul className="footer__list">
            {navigationLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Connect</h3>
          <div className="footer__social">
            <a href={contactDetails.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href={contactDetails.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <p className="footer__credits">© 2025 {personalInfo.name}. All rights reserved.</p>
    </footer>
  );
}


