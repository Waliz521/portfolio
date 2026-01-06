import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { contactDetails } from "../data/contact";

const contactItems = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: contactDetails.email,
    href: `mailto:${contactDetails.email}`,
  },
  {
    icon: <FaPhone />,
    label: "Phone",
    value: contactDetails.phone,
    href: `tel:${contactDetails.phone.replace(/\s|\+/g, "")}`,
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Location",
    value: contactDetails.location,
  },
];

export function ContactSection() {
  return (
    <section className="section contact">
      <div className="site-wrapper">
        <div className="section__heading">
          <p className="section__eyebrow">Let's connect</p>
          <h2>Start a new geospatial project together</h2>
        </div>

        <div className="contact__grid glass-panel">
          <div className="contact__details">
            <ul>
              {contactItems.map((item) => (
                <li key={item.label}>
                  <span className="contact__icon">{item.icon}</span>
                  <div>
                    <p className="contact__label">{item.label}</p>
                    {item.href ? (
                      <a href={item.href}>{item.value}</a>
                    ) : (
                      <p>{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="contact__links">
            <p>Prefer connecting through platforms you already use?</p>
            <div className="contact__social">
              <a href={contactDetails.github} target="_blank" rel="noreferrer">
                <FaGithub />
                GitHub
              </a>
              <a href={contactDetails.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin />
                LinkedIn
              </a>
            </div>
            <a className="btn btn--primary" href={contactDetails.resume} download>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


