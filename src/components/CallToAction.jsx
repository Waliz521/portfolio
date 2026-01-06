import { Link } from "react-router-dom";
import { cta } from "../data/personal";

export function CallToAction() {
  return (
    <section className="cta" aria-labelledby="cta-heading">
      <div className="cta__content">
        <h2 id="cta-heading">{cta.heading}</h2>
        <p>{cta.body}</p>
        <div className="cta__actions">
          <Link className="btn btn--primary" to={cta.primaryAction.to}>
            {cta.primaryAction.label}
          </Link>
          <Link className="btn btn--ghost" to={cta.secondaryAction.to}>
            {cta.secondaryAction.label}
          </Link>
        </div>
      </div>
    </section>
  );
}


