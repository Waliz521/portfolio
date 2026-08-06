import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ClientsMap } from "../components/ClientsMap";
import { getFreelanceClientMapPoints } from "../data/freelanceClientMap";

function scrollToMapView() {
  document.getElementById("clients-map-view")?.scrollIntoView({ block: "start", behavior: "instant" });
}

export function ClientsMapPage() {
  const count = getFreelanceClientMapPoints().length;

  useEffect(() => {
    scrollToMapView();
    const raf = requestAnimationFrame(scrollToMapView);
    const timer = window.setTimeout(scrollToMapView, 200);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(timer);
    };
  }, []);

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
            <Link className="btn btn--ghost clients-map-page__back" to="/#testimonials">
              ← Freelance work
            </Link>
          </div>
        </header>
        <div className="clients-map-page__map-wrap">
          <ClientsMap id="clients-map-view" className="clients-map-page__map glass-panel" />
        </div>
      </div>
    </div>
  );
}
