import { personalInfo } from "../data/personal";
import { AnimatedTitle } from "./AnimatedTitle";
import { FaMapMarkerAlt, FaCircle } from "react-icons/fa";

export function AboutSection() {
  return (
    <section id="about" className="about-section section">
      <div className="site-wrapper">
        <div className="section__heading">
          <div className="section__eyebrow">About</div>
          <h2>
            <AnimatedTitle text="WEBGIS Developer and Geospatial Analyst" />
          </h2>
        </div>
        <div className="about__content">
          <div className="about__text">
            <p className="about__intro">{personalInfo.intro}</p>
            <div className="about__details">
              <div className="about__detail-item">
                <h3>Location</h3>
                <p>
                  {personalInfo.location}
                  <FaMapMarkerAlt className="about__icon" />
                </p>
              </div>
              <div className="about__detail-item">
                <h3>Status</h3>
                <p>
                  {personalInfo.availability}
                  <FaCircle className="about__icon about__icon--status" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

