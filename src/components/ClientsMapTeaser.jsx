import { Link } from "react-router-dom";
import { getFreelanceClientMapPoints } from "../data/freelanceClientMap";

export function ClientsMapTeaser({ variant = "default" }) {
  const n = getFreelanceClientMapPoints().length;
  const isProjects = variant === "projects";

  return (
    <section
      className={`section clients-map-teaser${isProjects ? " clients-map-teaser--projects" : ""}`}
      aria-labelledby="clients-map-teaser-heading"
    >
      <div className="site-wrapper">
        <div className="clients-map-teaser__panel glass-panel">
          <div className="section__heading section__heading--tight">
            <p className="section__eyebrow">/ Global reach</p>
            <h2 id="clients-map-teaser-heading">Where I&apos;ve worked with clients</h2>
            <p className="clients-map-teaser__text">
              An interactive map of freelance client regions—{n} locations across the US, UK, and
              Europe—linked to each contract write-up.
            </p>
            <Link className="btn btn--primary" to="/clients">
              Open client map
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
