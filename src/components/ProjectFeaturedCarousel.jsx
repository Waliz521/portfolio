import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight, FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

function getProjectLinks(linkList) {
  const github = linkList.find((link) => link.url.includes("github.com"));
  const live = linkList.find((link) => !link.url.includes("github.com"));
  return { github, live };
}

export function ProjectFeaturedCarousel({ projects }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const count = projects.length;

  const goTo = useCallback(
    (index) => {
      if (count === 0) return;
      setActiveIndex((index + count) % count);
    },
    [count]
  );

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    if (count <= 1) return undefined;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return undefined;

    const timer = window.setInterval(goNext, 7000);
    return () => window.clearInterval(timer);
  }, [count, goNext]);

  if (count === 0) return null;

  const project = projects[activeIndex];
  const blurb = project.summary ?? project.description;
  const { github, live } = getProjectLinks(project.links);

  return (
    <div className="projects-featured">
      <div className="projects-featured__stage">
        {projects.map((item, index) => (
          <div
            key={item.id}
            className={`projects-featured__slide${index === activeIndex ? " projects-featured__slide--active" : ""}`}
            aria-hidden={index !== activeIndex}
          >
            <img src={item.image} alt="" loading={index === 0 ? "eager" : "lazy"} />
          </div>
        ))}

        {count > 1 && (
          <>
            <button
              type="button"
              className="projects-featured__nav projects-featured__nav--prev"
              onClick={goPrev}
              aria-label="Previous project"
            >
              <FiChevronLeft aria-hidden />
            </button>
            <button
              type="button"
              className="projects-featured__nav projects-featured__nav--next"
              onClick={goNext}
              aria-label="Next project"
            >
              <FiChevronRight aria-hidden />
            </button>
          </>
        )}

        <div className="projects-featured__overlay">
          <Link to={`/project/${project.id}`} className="projects-featured__title">
            {project.title}
          </Link>
          <p className="projects-featured__summary">{blurb}</p>
          <p className="projects-featured__stack">{project.tags.join(", ")}</p>
          {(github || live) && (
            <a
              href={(github ?? live).url}
              target="_blank"
              rel="noreferrer"
              className="projects-featured__github"
              aria-label={github ? `${project.title} on GitHub` : `${project.title} live demo`}
            >
              {github ? <FaGithub aria-hidden /> : <FiExternalLink aria-hidden />}
            </a>
          )}
        </div>
      </div>

      {count > 1 && (
        <div className="projects-featured__dots" role="tablist" aria-label="Featured projects">
          {projects.map((item, index) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              className={`projects-featured__dot${index === activeIndex ? " projects-featured__dot--active" : ""}`}
              aria-selected={index === activeIndex}
              aria-label={`Show ${item.title}`}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
