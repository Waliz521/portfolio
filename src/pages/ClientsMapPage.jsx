import { Link } from "react-router-dom";
import { ClientsMap } from "../components/ClientsMap";
import { getFreelanceClientMapPoints } from "../data/freelanceClientMap";

export function ClientsMapPage() {
  const count = getFreelanceClientMapPoints().length;

  return (
    <div className="clients-map-page">
      <div className="site-wrapper clients-map-page__inner">
        <header className="clients-map-page__header">
          <div className="section__heading">
            <p className="section__eyebrow">/ Freelance</p>
            <h1>Client locations</h1>
            <p className="clients-map-page__lead">
              Upwork contracts pinned by client region ({count} locations). Click a marker for project
              links back to this portfolio.
            </p>
            <Link className="btn btn--ghost clients-map-page__back" to="/projects">
              ← All projects
            </Link>
          </div>
        </header>
        <ClientsMap className="clients-map-page__map glass-panel" />
      </div>
    </div>
  );
}
