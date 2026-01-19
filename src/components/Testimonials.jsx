import { Link } from "react-router-dom";
import { testimonials, upworkProfileUrl, getTestimonialsByCategory } from "../data/testimonials";
import { FaStar } from "react-icons/fa";

export function Testimonials({
  limit,
  heading = "Client work & testimonials",
  eyebrow = "/ Freelance Projects",
  showViewAll = false,
  category,
  excludeIds = [],
}) {
  let testimonialList = testimonials;
  
  // Filter by category if provided
  if (category) {
    testimonialList = getTestimonialsByCategory(category);
  }
  
  // Exclude specific project IDs if provided
  if (excludeIds.length > 0) {
    testimonialList = testimonialList.filter((testimonial) => !excludeIds.includes(testimonial.id));
  }
  
  // Apply limit if provided
  if (typeof limit === "number") {
    testimonialList = testimonialList.slice(0, limit);
  }

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
              {testimonial.image && (
                <div className="testimonial-card__image">
                  <img src={testimonial.image} alt={testimonial.title} loading="lazy" />
                </div>
              )}
              <div className="testimonial-card__header">
                <div className="testimonial-card__title-row">
                  <h3>{testimonial.title}</h3>
                  {testimonial.category !== "client-work" && (
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
                  )}
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
                    {testimonial.rating ? renderStars(testimonial.rating) : renderStars(0)}
                  </div>
                  {testimonial.rating ? (
                    <span className="testimonial-card__rating-value">{testimonial.rating}</span>
                  ) : (
                    <span className="testimonial-card__rating-value" style={{ fontStyle: 'italic', opacity: 0.7 }}>Loading rating...</span>
                  )}
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
                {testimonial.category === "freelance" && testimonial.amount && (
                  <div className="testimonial-card__detail-item">
                    <span className="testimonial-card__detail-label">Amount</span>
                    <span className="testimonial-card__detail-value testimonial-card__detail-value--highlight">
                      {testimonial.amount}
                    </span>
                  </div>
                )}
                {testimonial.category === "freelance" && testimonial.paymentType === "hourly" && (
                  <>
                    {testimonial.hourlyRate && (
                      <div className="testimonial-card__detail-item">
                        <span className="testimonial-card__detail-label">Rate</span>
                        <span className="testimonial-card__detail-value">{testimonial.hourlyRate}</span>
                      </div>
                    )}
                    {testimonial.totalHours && (
                      <div className="testimonial-card__detail-item">
                        <span className="testimonial-card__detail-label">Hours</span>
                        <span className="testimonial-card__detail-value">{testimonial.totalHours}</span>
                      </div>
                    )}
                  </>
                )}
                {testimonial.category === "freelance" && testimonial.paymentType === "fixed" && (
                  <div className="testimonial-card__detail-item">
                    <span className="testimonial-card__detail-label">Type</span>
                    <span className="testimonial-card__detail-value">Fixed price</span>
                  </div>
                )}
                {testimonial.category === "client-work" && (
                  <div className="testimonial-card__detail-item">
                    <span className="testimonial-card__detail-label">Type</span>
                    <span className="testimonial-card__detail-value">Client Project (Oil Spill Mapping & GIS Data Collection - Sudan & South Sudan)</span>
                  </div>
                )}
              </div>

              {testimonial.category !== "client-work" && (
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
              )}
            </article>
            </Link>
          ))}
        </div>

        {showViewAll && (
          <div className="testimonials__cta">
            <Link className="btn btn--ghost" to="/projects">
              {category === "client-work" ? "View all client work" : "View all freelance projects"}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

