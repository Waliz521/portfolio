import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export function Projects({
  limit,
  heading = "Selected geospatial experiments",
  eyebrow = "/ Pet Projects",
  showViewAll = false,
}) {
  const projectList = typeof limit === "number" ? projects.slice(0, limit) : projects;

  return (
    <section id="projects" className="section projects">
      <div className="site-wrapper">
        <div className="section__heading">
          <p className="section__eyebrow">{eyebrow}</p>
          <h2>{heading}</h2>
        </div>

        <div className="projects__grid">
          {projectList.map((project) => (
            <article key={project.title} className="project-card">
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
                <div className="project-card__links">
                  {project.links.map((link) => (
                    <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
                      {link.label}
                    </a>
                  ))}
                </div>
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
      </div>
    </section>
  );
}


