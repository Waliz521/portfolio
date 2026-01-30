import { useState, useEffect, useRef, useCallback } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { getTestimonialById, upworkProfileUrl } from "../data/testimonials";
import { getProjectById } from "../data/projects";
import { FaStar, FaArrowLeft, FaTimes, FaSearchPlus, FaSearchMinus, FaRedo } from "react-icons/fa";

export function ProjectDetailPage() {
  const { id } = useParams();
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const panRef = useRef({ x: 0, y: 0 });
  const imageRef = useRef(null);
  
  // Keep refs in sync with state
  useEffect(() => {
    panRef.current = pan;
  }, [pan]);
  
  // Try to find project in both testimonials (freelance) and projects (pet projects)
  let project = getTestimonialById(id) || getProjectById(id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const isFreelanceProject = project.platform !== undefined;

  // Reset zoom and pan when modal opens/closes
  useEffect(() => {
    if (isImageModalOpen) {
      setZoom(1);
      setPan({ x: 0, y: 0 });
    }
  }, [isImageModalOpen]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isImageModalOpen) {
        setIsImageModalOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isImageModalOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isImageModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isImageModalOpen]);

  // Handle mouse wheel zoom
  const handleWheel = useCallback((e) => {
    if (!isImageModalOpen) return;
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setZoom((prevZoom) => {
      const newZoom = Math.max(0.5, Math.min(5, prevZoom + delta));
      return newZoom;
    });
  }, [isImageModalOpen]);

  // Handle mouse drag for panning
  const handleMouseDown = useCallback((e) => {
    if (zoom > 1) {
      setIsDragging(true);
      dragStartRef.current = { 
        x: e.clientX - panRef.current.x * zoom, 
        y: e.clientY - panRef.current.y * zoom 
      };
    }
  }, [zoom]);

  const handleMouseMove = useCallback((e) => {
    if (isDragging && zoom > 1) {
      setPan({
        x: (e.clientX - dragStartRef.current.x) / zoom,
        y: (e.clientY - dragStartRef.current.y) / zoom,
      });
    }
  }, [isDragging, zoom]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Zoom controls
  const handleZoomIn = useCallback(() => {
    setZoom((prevZoom) => Math.min(5, prevZoom + 0.25));
  }, []);

  const handleZoomOut = useCallback(() => {
    setZoom((prevZoom) => {
      const newZoom = Math.max(0.5, prevZoom - 0.25);
      if (newZoom <= 1) {
        setPan({ x: 0, y: 0 });
      }
      return newZoom;
    });
  }, []);

  const handleResetZoom = useCallback(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, []);

  // Add wheel event listener when modal is open
  useEffect(() => {
    if (isImageModalOpen) {
      const modalElement = document.querySelector('.image-modal');
      if (modalElement) {
        modalElement.addEventListener("wheel", handleWheel, { passive: false });
      }
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      return () => {
        if (modalElement) {
          modalElement.removeEventListener("wheel", handleWheel);
        }
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isImageModalOpen, handleWheel, handleMouseMove, handleMouseUp]);

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
          {/* Image Modal/Lightbox */}
          {project.image && isImageModalOpen && (
            <div 
              className="image-modal"
              onClick={() => {
                // Always allow closing by clicking outside, even when zoomed
                setIsImageModalOpen(false);
              }}
            >
              <button 
                className="image-modal__close"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsImageModalOpen(false);
                }}
                aria-label="Close image (ESC)"
                title="Close (ESC or click outside)"
              >
                <FaTimes />
              </button>
              
              {/* Instructions */}
              <div className="image-modal__instructions">
                <p>Click outside image or press ESC to close • Scroll to zoom • Drag when zoomed</p>
              </div>
              
              {/* Zoom Controls */}
              <div className="image-modal__controls">
                <button
                  className="image-modal__control-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleZoomIn();
                  }}
                  aria-label="Zoom in"
                  title="Zoom in (Mouse wheel up)"
                >
                  <FaSearchPlus />
                </button>
                <button
                  className="image-modal__control-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleZoomOut();
                  }}
                  aria-label="Zoom out"
                  title="Zoom out (Mouse wheel down)"
                >
                  <FaSearchMinus />
                </button>
                <button
                  className="image-modal__control-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleResetZoom();
                  }}
                  aria-label="Reset zoom"
                  title="Reset zoom"
                >
                  <FaRedo />
                </button>
                <div className="image-modal__zoom-level">
                  {Math.round(zoom * 100)}%
                </div>
              </div>

              <div 
                className="image-modal__content"
                onClick={(e) => {
                  // Only stop propagation if clicking on the image itself, not the container
                  if (e.target === imageRef.current || e.target.closest('img')) {
                    e.stopPropagation();
                  }
                }}
                onMouseDown={handleMouseDown}
                style={{ cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
              >
                <img 
                  ref={imageRef}
                  src={project.image} 
                  alt={project.title}
                  className="image-modal__img"
                  style={{
                    transform: `scale(${zoom}) translate(${pan.x}px, ${pan.y}px)`,
                    transformOrigin: 'center center',
                    transition: isDragging ? 'none' : 'transform 0.1s ease-out',
                    maxWidth: zoom > 1 ? 'none' : '95vw',
                    maxHeight: zoom > 1 ? 'none' : '95vh',
                  }}
                  draggable={false}
                />
              </div>
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

          {project.image && (
            <div 
              className="project-detail__image project-detail__image--clickable"
              onClick={() => setIsImageModalOpen(true)}
            >
              <img src={project.image} alt={project.title} loading="lazy" />
            </div>
          )}
        </article>
      </div>
    </div>
  );
}

