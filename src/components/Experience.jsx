import { experienceTimeline, educationHistory } from "../data/experience";
import { upworkProfileUrl, upworkStats } from "../data/testimonials";
import { FaCheckCircle } from "react-icons/fa";

export function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="site-wrapper">
        <div className="section__heading">
          <p className="section__eyebrow">Background</p>
          <h2>Experience & education</h2>
        </div>

        <div className="experience__layout">
          <div className="experience__main">
            <h3 className="experience__section-title">Professional Experience</h3>
            <div className="experience__timeline-wrapper">
              <div className="experience__timeline-line"></div>
              <div className="experience__cards">
                {experienceTimeline.map((item, index) => {
                  const isCurrent = item.period.includes("Present");
                  return (
                    <div key={`${item.company}-${index}`} className="experience__card-wrapper">
                      <div className={`experience__timeline-dot ${isCurrent ? "experience__timeline-dot--current" : ""}`}>
                        {isCurrent && <div className="experience__timeline-dot-pulse"></div>}
                      </div>
                      <article className="experience-card glass-panel">
                        <div className="experience-card__header">
                          <div className="experience-card__meta">
                            <span className="experience-card__period">{item.period}</span>
                            {item.location && (
                              <span className="experience-card__location">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M6 0C3.24 0 1 2.24 1 5c0 3.5 5 7 5 7s5-3.5 5-7c0-2.76-2.24-5-5-5zm0 6.75c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" fill="currentColor"/>
                                </svg>
                                {item.location}
                              </span>
                            )}
                          </div>
                          <h4 className="experience-card__company">{item.company}</h4>
                          <p className="experience-card__role">{item.role}</p>
                        </div>
                        <div className="experience-card__body">
                          <p className="experience-card__description">{item.description}</p>
                        </div>
                        {item.company === "Upwork" && (
                          <div className="experience-card__upwork-section">
                            <div className="experience-card__upwork-badges">
                              <span className="experience-card__upwork-badge">
                                <FaCheckCircle />
                                {upworkStats.jobSuccess} Job Success
                              </span>
                              <span className="experience-card__upwork-badge experience-card__upwork-badge--top-rated">
                                Top Rated
                              </span>
                            </div>
                            <div className="experience-card__upwork-stats">
                              <div className="experience-card__upwork-stat">
                                <span className="experience-card__upwork-stat-label">Total Earnings</span>
                                <span className="experience-card__upwork-stat-value">{upworkStats.totalEarnings}</span>
                              </div>
                              <div className="experience-card__upwork-stat">
                                <span className="experience-card__upwork-stat-label">Jobs Completed</span>
                                <span className="experience-card__upwork-stat-value">{upworkStats.totalJobs}</span>
                              </div>
                              <div className="experience-card__upwork-stat">
                                <span className="experience-card__upwork-stat-label">Hours Worked</span>
                                <span className="experience-card__upwork-stat-value">{upworkStats.totalHours}</span>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="experience-card__upwork-link"
                              onClick={() => window.open(upworkProfileUrl, '_blank', 'noopener,noreferrer')}
                            >
                              View Upwork Profile →
                            </button>
                          </div>
                        )}
                      </article>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="experience__sidebar">
            <h3 className="experience__section-title">Education</h3>
            <div className="education__cards">
              {educationHistory.map((item) => (
                <article key={item.title} className="education-card glass-panel">
                  <span className="education-card__period">{item.years}</span>
                  <h4 className="education-card__title">{item.title}</h4>
                  <p className="education-card__institution">{item.institution}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


