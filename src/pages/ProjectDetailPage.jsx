import { useParams, Link, Navigate } from "react-router-dom";
import { getTestimonialById, upworkProfileUrl } from "../data/testimonials";
import { getProjectById } from "../data/projects";
import { FaStar, FaArrowLeft } from "react-icons/fa";

export function ProjectDetailPage() {
  const { id } = useParams();
  // Try to find project in both testimonials (freelance) and projects (pet projects)
  let project = getTestimonialById(id) || getProjectById(id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const isFreelanceProject = project.platform !== undefined;

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
        <Link to="/projects" className="project-detail__back">
          <FaArrowLeft />
          <span>Back to Projects</span>
        </Link>

        <article className="project-detail__content glass-panel">
          {project.image && (
            <div className="project-detail__image">
              <img src={project.image} alt={project.title} loading="lazy" />
            </div>
          )}
          <div className="project-detail__header">
            <div className="project-detail__title-row">
              <h1>{project.title}</h1>
              {isFreelanceProject && project.platform && (
                <a
                  href={upworkProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-detail__platform"
                >
                  {project.platform}
                </a>
              )}
              {!isFreelanceProject && (
                <span className="project-detail__platform project-detail__platform--pet">
                  Pet Project
                </span>
              )}
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
            
            {project.rating && (
              <div className="project-detail__rating">
                <div className="project-detail__stars">
                  {renderStars(project.rating)}
                </div>
                <span className="project-detail__rating-value">{project.rating}</span>
              </div>
            )}

            {isFreelanceProject && (
              <div className="project-detail__meta">
                {project.dateRange && (
                  <div className="project-detail__meta-item">
                    <span className="project-detail__meta-label">Project Period</span>
                    <span className="project-detail__meta-value">{project.dateRange}</span>
                  </div>
                )}
                {project.amount && (
                  <div className="project-detail__meta-item">
                    <span className="project-detail__meta-label">Total Amount</span>
                    <span className="project-detail__meta-value project-detail__meta-value--highlight">
                      {project.amount}
                    </span>
                  </div>
                )}
                {project.paymentType === "hourly" && (
                  <>
                    {project.hourlyRate && (
                      <div className="project-detail__meta-item">
                        <span className="project-detail__meta-label">Hourly Rate</span>
                        <span className="project-detail__meta-value">{project.hourlyRate}</span>
                      </div>
                    )}
                    {project.totalHours && (
                      <div className="project-detail__meta-item">
                        <span className="project-detail__meta-label">Total Hours</span>
                        <span className="project-detail__meta-value">{project.totalHours}</span>
                      </div>
                    )}
                  </>
                )}
                {project.paymentType === "fixed" && (
                  <div className="project-detail__meta-item">
                    <span className="project-detail__meta-label">Payment Type</span>
                    <span className="project-detail__meta-value">Fixed Price</span>
                  </div>
                )}
              </div>
            )}

            {!isFreelanceProject && project.category === "client-work" && (
              <div className="project-detail__meta">
                {project.dateRange && (
                  <div className="project-detail__meta-item">
                    <span className="project-detail__meta-label">Project Period</span>
                    <span className="project-detail__meta-value">{project.dateRange}</span>
                  </div>
                )}
                <div className="project-detail__meta-item">
                  <span className="project-detail__meta-label">Project Type</span>
                  <span className="project-detail__meta-value">Client Work (Oil Spill Mapping & GIS Data Collection - Sudan & South Sudan)</span>
                </div>
                {project.clientName && (
                  <div className="project-detail__meta-item">
                    <span className="project-detail__meta-label">Client</span>
                    <span className="project-detail__meta-value">{project.clientName}</span>
                  </div>
                )}
              </div>
            )}

            {!isFreelanceProject && project.links && project.links.length > 0 && (
              <div className="project-detail__links">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-detail__link project-detail__link--primary"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {isFreelanceProject && project.testimonial && (
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

