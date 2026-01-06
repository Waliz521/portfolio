import { Link } from "react-router-dom";
import { testimonials, upworkProfileUrl } from "../data/testimonials";
import { FaStar } from "react-icons/fa";

export function Testimonials({
  limit,
  heading = "Client work & testimonials",
  eyebrow = "/ Freelance Projects",
  showViewAll = false,
}) {
  const testimonialList = typeof limit === "number" ? testimonials.slice(0, limit) : testimonials;

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={i < Math.floor(rating) ? "testimonial-card__star testimonial-card__star--filled" : "testimonial-card__star"}
      />
    ));
  };

  return (
    <section id="testimonials" className="section testimonials">
      <div className="site-wrapper">
        <div className="section__heading">
          <p className="section__eyebrow">{eyebrow}</p>
          <h2>{heading}</h2>
        </div>

        <div className="testimonials__grid">
          {testimonialList.map((testimonial, index) => (
            <Link
              key={index}
              to={`/project/${testimonial.id}`}
              className="testimonial-card-link"
            >
              <article className="testimonial-card glass-panel">
              <div className="testimonial-card__header">
                <div className="testimonial-card__title-row">
                  <h3>{testimonial.title}</h3>
                  <button
                    type="button"
                    className="testimonial-card__platform"
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      window.open(upworkProfileUrl, '_blank', 'noopener,noreferrer');
                    }}
                  >
                    {testimonial.platform}
                  </button>
                </div>
                {testimonial.clientName && (
                  <div className="testimonial-card__client">
                    <span className="testimonial-card__client-name">{testimonial.clientName}</span>
                    {testimonial.clientLocation && (
                      <span className="testimonial-card__client-location">, {testimonial.clientLocation}</span>
                    )}
                  </div>
                )}
                <div className="testimonial-card__rating">
                  <div className="testimonial-card__stars">
                    {renderStars(testimonial.rating)}
                  </div>
                  <span className="testimonial-card__rating-value">{testimonial.rating}</span>
                </div>
              </div>

              {testimonial.description && (
                <div className="testimonial-card__description">
                  <p>{testimonial.description}</p>
                </div>
              )}

              <div className="testimonial-card__details">
                <div className="testimonial-card__detail-item">
                  <span className="testimonial-card__detail-label">Period</span>
                  <span className="testimonial-card__detail-value">{testimonial.dateRange}</span>
                </div>
                <div className="testimonial-card__detail-item">
                  <span className="testimonial-card__detail-label">Amount</span>
                  <span className="testimonial-card__detail-value testimonial-card__detail-value--highlight">
                    {testimonial.amount}
                  </span>
                </div>
                {testimonial.paymentType === "hourly" && (
                  <>
                    <div className="testimonial-card__detail-item">
                      <span className="testimonial-card__detail-label">Rate</span>
                      <span className="testimonial-card__detail-value">{testimonial.hourlyRate}</span>
                    </div>
                    <div className="testimonial-card__detail-item">
                      <span className="testimonial-card__detail-label">Hours</span>
                      <span className="testimonial-card__detail-value">{testimonial.totalHours}</span>
                    </div>
                  </>
                )}
                {testimonial.paymentType === "fixed" && (
                  <div className="testimonial-card__detail-item">
                    <span className="testimonial-card__detail-label">Type</span>
                    <span className="testimonial-card__detail-value">Fixed price</span>
                  </div>
                )}
              </div>

              <div className="testimonial-card__feedback">
                <div className="testimonial-card__quote-icon">"</div>
                {testimonial.testimonial ? (
                  <p className="testimonial-card__quote">{testimonial.testimonial}</p>
                ) : (
                  <p className="testimonial-card__quote testimonial-card__quote--empty">
                    Client feedback will be displayed here when available from client
                  </p>
                )}
              </div>
            </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

