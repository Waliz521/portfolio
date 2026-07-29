import { Link } from "react-router-dom";
import { FiMail } from "react-icons/fi";
import { personalInfo } from "../data/personal";
import HeroGlobe from "./HeroGlobe";

export function Hero() {
  const firstName = personalInfo.firstName ?? personalInfo.name.split(" ")[0];

  return (
    <section id="home" className="hero hero--intro">
      <div className="site-wrapper hero__inner">
        <div className="hero__visual">
          <HeroGlobe />
        </div>

        <div className="hero__content">
          <h1 className="hero__title">
            hi, <span className="hero__name">{firstName.toLowerCase()}</span> here.
          </h1>
          <p className="hero__lead">{personalInfo.heroIntro}</p>
          <div className="hero__actions">
            <Link to="/contact" className="btn hero__cta">
              <FiMail aria-hidden />
              Say hi!
            </Link>
          </div>
          <div className="hero__meta">
            <span>{personalInfo.title}</span>
            <span className="hero__meta-dot" aria-hidden>
              ·
            </span>
            <span>{personalInfo.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
