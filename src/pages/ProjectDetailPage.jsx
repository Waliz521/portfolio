import { useParams, Link, Navigate } from "react-router-dom";
import { getTestimonialById, upworkProfileUrl } from "../data/testimonials";
import { FaStar, FaArrowLeft } from "react-icons/fa";

export function ProjectDetailPage() {
  const { id } = useParams();
  const project = getTestimonialById(id);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={i < Math.floor(rating) ? "project-detail__star project-detail__star--filled" : "project-detail__star"}
      />
    ));
  };

  return (
    <div className="project-detail">
      <div className="site-wrapper">
        <Link to="/" className="project-detail__back">
          <FaArrowLeft />
          <span>Back to Home</span>
        </Link>

        <article className="project-detail__content glass-panel">
          <div className="project-detail__header">
            <div className="project-detail__title-row">
              <h1>{project.title}</h1>
              <a
                href={upworkProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-detail__platform"
              >
                {project.platform}
              </a>
            </div>

            {project.clientName && (
              <div className="project-detail__client">
                <span className="project-detail__client-label">Client:</span>
                <span className="project-detail__client-name">{project.clientName}</span>
                {project.clientLocation && (
                  <span className="project-detail__client-location">, {project.clientLocation}</span>
                )}
              </div>
            )}
            
            <div className="project-detail__rating">
              <div className="project-detail__stars">
                {renderStars(project.rating)}
              </div>
              <span className="project-detail__rating-value">{project.rating}</span>
            </div>

            <div className="project-detail__meta">
              <div className="project-detail__meta-item">
                <span className="project-detail__meta-label">Project Period</span>
                <span className="project-detail__meta-value">{project.dateRange}</span>
              </div>
              <div className="project-detail__meta-item">
                <span className="project-detail__meta-label">Total Amount</span>
                <span className="project-detail__meta-value project-detail__meta-value--highlight">
                  {project.amount}
                </span>
              </div>
              {project.paymentType === "hourly" && (
                <>
                  <div className="project-detail__meta-item">
                    <span className="project-detail__meta-label">Hourly Rate</span>
                    <span className="project-detail__meta-value">{project.hourlyRate}</span>
                  </div>
                  <div className="project-detail__meta-item">
                    <span className="project-detail__meta-label">Total Hours</span>
                    <span className="project-detail__meta-value">{project.totalHours}</span>
                  </div>
                </>
              )}
              {project.paymentType === "fixed" && (
                <div className="project-detail__meta-item">
                  <span className="project-detail__meta-label">Payment Type</span>
                  <span className="project-detail__meta-value">Fixed Price</span>
                </div>
              )}
            </div>
          </div>

          {project.testimonial && (
            <div className="project-detail__testimonial">
              <h3>Client Feedback</h3>
              <div className="project-detail__quote-box">
                <div className="project-detail__quote-icon">"</div>
                <p className="project-detail__quote">{project.testimonial}</p>
              </div>
            </div>
          )}

          <div className="project-detail__body">
            {project.detailedDescription ? (
              <div className="project-detail__section">
                <h2>Project Overview</h2>
                <p>{project.detailedDescription}</p>
              </div>
            ) : (
              <div className="project-detail__section">
                <h2>Project Overview</h2>
                <p className="project-detail__placeholder">
                  Detailed project description will be added here. This section will explain what was actually done in this project, 
                  as the title may not fully capture the scope of work.
                </p>
              </div>
            )}

            {project.technologies && project.technologies.length > 0 && (
              <div className="project-detail__section">
                <h2>Technologies & Tools</h2>
                <ul className="project-detail__tech-list">
                  {project.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.challenges && (
              <div className="project-detail__section">
                <h2>Challenges</h2>
                <p>{project.challenges}</p>
              </div>
            )}

            {project.solutions && (
              <div className="project-detail__section">
                <h2>Solutions</h2>
                <p>{project.solutions}</p>
              </div>
            )}

            {project.results && (
              <div className="project-detail__section">
                <h2>Results & Impact</h2>
                <p>{project.results}</p>
              </div>
            )}
          </div>
        </article>
      </div>
    </div>
  );
}

