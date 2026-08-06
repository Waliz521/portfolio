import { Link } from "react-router-dom";
import { FiExternalLink, FiFolder } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { projects, getProjectsByCategory } from "../data/projects";
import { ProjectFeaturedCarousel } from "./ProjectFeaturedCarousel";

function getProjectLinks(linkList) {
  const github = linkList.find((link) => link.url.includes("github.com"));
  const live = linkList.find((link) => !link.url.includes("github.com"));
  return { github, live };
}

function CompactProjectCard({ project }) {
  const { github, live } = getProjectLinks(project.links);
  const blurb = project.summary ?? project.description;

  return (
    <article className="project-card project-card--compact">
      <div className="project-card__top">
        <FiFolder className="project-card__folder" aria-hidden />
        <div className="project-card__icon-links">
          {github && (
            <a
              href={github.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} source code on GitHub`}
            >
              <FaGithub aria-hidden />
            </a>
          )}
          {live && (
            <a
              href={live.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} live demo`}
            >
              <FiExternalLink aria-hidden />
            </a>
          )}
        </div>
      </div>
      <h3 className="project-card__title">
        <Link to={`/project/${project.id}`}>{project.title}</Link>
      </h3>
      <p className="project-card__summary">{blurb}</p>
      <p className="project-card__stack">{project.tags.join(", ")}</p>
    </article>
  );
}

export function Projects({
  limit,
  heading = "Selected geospatial experiments",
  eyebrow = "/ Pet Projects",
  showViewAll = false,
  category,
  variant = "full",
}) {
  const isHome = variant === "home";
  let projectList = projects;

  if (category) {
    projectList = getProjectsByCategory(category);
  }

  if (typeof limit === "number") {
    projectList = projectList.slice(0, limit);
  }

  return (
    <section
      id="projects"
      className={`section projects${isHome ? " projects--home" : ""}`}
    >
      <div className="site-wrapper">
        {isHome ? (
          <>
            <div className="projects__header-row">
              <p className="section__eyebrow projects__eyebrow">{eyebrow}</p>
              {showViewAll && (
                <Link className="projects__view-all" to="/projects">
                  View all projects →
                </Link>
              )}
            </div>
            <hr className="projects__divider" aria-hidden="true" />
            <ProjectFeaturedCarousel projects={projectList} />
            <div className="projects__grid projects__grid--compact">
              {projectList.map((project) => (
                <CompactProjectCard key={project.id || project.title} project={project} />
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="section__heading">
              <p className="section__eyebrow">{eyebrow}</p>
              <h2>{heading}</h2>
            </div>
            <div className="projects__grid">
              {projectList.map((project) => (
                <article key={project.id || project.title} className="project-card">
                  <Link
                    to={`/project/${project.id}`}
                    className="project-card-link"
                    aria-label={`View ${project.title} details`}
                  >
                    <div className="project-card__image">
                      <img src={project.image} alt={project.title} loading="lazy" />
                    </div>
                    <div className="project-card__body">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <ul className="project-card__tags">
                        {project.tags.map((tag) => (
                          <li key={tag}>{tag}</li>
                        ))}
                      </ul>
                    </div>
                  </Link>
                  <div className="project-card__links">
                    {project.links.map((link) => (
                      <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
                        {link.label}
                      </a>
                    ))}
                  </div>
                </article>
              ))}
            </div>
            {showViewAll && (
              <div className="projects__cta">
                <Link className="btn btn--ghost" to="/projects">
                  View all projects
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
