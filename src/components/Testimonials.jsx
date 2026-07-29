import { useState } from "react";
import { Link } from "react-router-dom";
import {
  testimonials,
  upworkProfileUrl,
  getTestimonialsByCategory,
  isFreelanceInProgress,
} from "../data/testimonials";
import { FaStar } from "react-icons/fa";

const FREELANCE_STATUS_FILTERS = [
  { id: "all", label: "All" },
  { id: "completed", label: "Completed" },
  { id: "in-progress", label: "In progress" },
];

export function Testimonials({
  limit,
  heading = "Client work & testimonials",
  eyebrow = "/ Freelance Projects",
  showViewAll = false,
  showStatusFilter = false,
  variant = "full",
  category,
  excludeIds = [],
}) {
  const [statusFilter, setStatusFilter] = useState("all");

  let testimonialList = testimonials;

  // Filter by category if provided
  if (category) {
    testimonialList = getTestimonialsByCategory(category, {
      status: showStatusFilter && category === "freelance" ? statusFilter : "all",
    });
  }
  
  // Exclude specific project IDs if provided
  if (excludeIds.length > 0) {
    testimonialList = testimonialList.filter((testimonial) => !excludeIds.includes(testimonial.id));
  }
  
  if (variant === "marquee" && category === "freelance") {
    testimonialList = testimonialList.filter(
      (t) => typeof t.testimonial === "string" && t.testimonial.trim().length > 0
    );
  } else if (variant === "spotlight" && category === "freelance") {
    testimonialList = [...testimonialList].sort((a, b) => {
      const weight = (t) =>
        (t.testimonial ? 4 : 0) + (t.rating ? 2 : 0) + (isFreelanceInProgress(t) ? 0 : 1);
      return weight(b) - weight(a);
    });
  }

  if (typeof limit === "number") {
    testimonialList = testimonialList.slice(0, limit);
  }

  const isSpotlight = variant === "spotlight";
  const isMarquee = variant === "marquee";
  const marqueeItems =
    isMarquee && testimonialList.length > 0
      ? [...testimonialList, ...testimonialList]
      : testimonialList;
  const marqueeDuration = Math.max(28, testimonialList.length * 9);

  const freelanceStatusCounts =
    showStatusFilter && category === "freelance"
      ? FREELANCE_STATUS_FILTERS.reduce((counts, filter) => {
          counts[filter.id] = getTestimonialsByCategory("freelance", {
            status: filter.id,
          }).length;
          return counts;
        }, {})
      : null;

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={i < Math.floor(rating) ? "testimonial-card__star testimonial-card__star--filled" : "testimonial-card__star"}
      />
    ));
  };

  const renderSpotlightCard = (testimonial, keySuffix = "") => (
    <Link
      key={`${testimonial.id}${keySuffix}`}
      to={`/project/${testimonial.id}`}
      className="testimonial-spotlight-link"
    >
      <article className="testimonial-spotlight glass-panel">
        {testimonial.testimonial ? (
          <blockquote className="testimonial-spotlight__quote">
            &ldquo;{testimonial.testimonial}&rdquo;
          </blockquote>
        ) : isFreelanceInProgress(testimonial) ? (
          <p className="testimonial-spotlight__in-progress">Active Upwork contract</p>
        ) : (
          <p className="testimonial-spotlight__in-progress">Review pending</p>
        )}

        <footer className="testimonial-spotlight__footer">
          <h3 className="testimonial-spotlight__title">{testimonial.title}</h3>
          <div className="testimonial-spotlight__rating">
            <div className="testimonial-spotlight__stars">
              {testimonial.rating ? renderStars(testimonial.rating) : renderStars(0)}
            </div>
            {testimonial.rating ? (
              <span className="testimonial-spotlight__rating-value">{testimonial.rating}</span>
            ) : (
              <span className="testimonial-spotlight__rating-value testimonial-spotlight__rating-value--pending">
                Pending review
              </span>
            )}
          </div>
        </footer>
      </article>
    </Link>
  );

  return (
    <section
      id="testimonials"
      className={`section testimonials${isMarquee ? " testimonials--marquee" : ""}`}
    >
      <div className="site-wrapper">
        <div className="section__heading">
          <p className="section__eyebrow">{eyebrow}</p>
          <h2>{heading}</h2>
        </div>

        {showStatusFilter && category === "freelance" && (
          <div className="testimonials__status-filters" role="tablist" aria-label="Filter freelance projects by status">
            {FREELANCE_STATUS_FILTERS.map((filter) => (
              <button
                key={filter.id}
                type="button"
                role="tab"
                aria-selected={statusFilter === filter.id}
                className={`testimonials__status-filter ${
                  statusFilter === filter.id ? "testimonials__status-filter--active" : ""
                }`}
                onClick={() => setStatusFilter(filter.id)}
              >
                <span className="testimonials__status-filter-label">{filter.label}</span>
                <span className="testimonials__status-filter-count">
                  ({freelanceStatusCounts[filter.id]})
                </span>
              </button>
            ))}
          </div>
        )}

        {testimonialList.length === 0 ? (
          <p className="testimonials__empty">
            {isMarquee ? "No client reviews to show yet." : "No freelance projects match this filter."}
          </p>
        ) : isMarquee ? null : isSpotlight ? (
        <div className="testimonials__spotlight-grid">
          {testimonialList.map((testimonial) => renderSpotlightCard(testimonial))}
        </div>
        ) : (
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
                    <div className="testimonial-card__title-actions">
                      {isFreelanceInProgress(testimonial) && (
                        <span className="testimonial-card__status-badge">In progress</span>
                      )}
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
                    <span className="testimonial-card__rating-value testimonial-card__rating-value--pending">
                      Pending review
                    </span>
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
        )}

        {!isMarquee && showViewAll && (
          <div className="testimonials__cta">
            <Link className="btn btn--ghost" to="/projects">
              {category === "client-work" ? "View all client work" : "View all freelance projects"}
            </Link>
          </div>
        )}
      </div>

      {testimonialList.length > 0 && isMarquee && (
        <div
          className="testimonials-marquee"
          style={{ "--marquee-duration": `${marqueeDuration}s` }}
          role="region"
          aria-label="Client reviews"
        >
          <div className="testimonials-marquee__track">
            {marqueeItems.map((testimonial, index) =>
              renderSpotlightCard(testimonial, `-marquee-${index}`)
            )}
          </div>
        </div>
      )}

      {isMarquee && showViewAll && (
        <div className="site-wrapper">
          <div className="testimonials__cta">
            <Link className="btn btn--ghost" to="/projects">
              View all freelance projects
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}

