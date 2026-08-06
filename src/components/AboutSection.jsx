import { personalInfo } from "../data/personal";

function AboutPhoto() {
  if (personalInfo.aboutPhoto) {
    return (
      <img
        src={personalInfo.aboutPhoto}
        alt={`Portrait of ${personalInfo.name}`}
        className="about__photo-img"
        loading="lazy"
      />
    );
  }

  const initials = personalInfo.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="about__photo-placeholder" aria-hidden="true">
      <span>{initials}</span>
    </div>
  );
}

export function AboutSection() {
  const { about } = personalInfo;

  return (
    <section id="about" className="about-section section">
      <div className="site-wrapper">
        <div className="about__header">
          <h2 className="about__label">/ about me</h2>
          <span className="about__header-line" aria-hidden="true" />
        </div>

        <div className="about__grid">
          <div className="about__main">
            <p className="about__paragraph">{about.lead}</p>
            {about.personalNote ? (
              <p className="about__paragraph about__paragraph--last">{about.personalNote}</p>
            ) : null}
          </div>

          <figure className="about__photo-wrap">
            <AboutPhoto />
          </figure>
        </div>
      </div>
    </section>
  );
}
