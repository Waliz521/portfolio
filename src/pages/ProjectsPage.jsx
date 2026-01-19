import { useState } from "react";
import { Projects } from "../components/Projects";
import { Testimonials } from "../components/Testimonials";
import { projects } from "../data/projects";
import { testimonials, getTestimonialsByCategory } from "../data/testimonials";

export function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("freelance");

  const freelanceCount = getTestimonialsByCategory("freelance").length;
  const clientWorkCount = getTestimonialsByCategory("client-work").length;

  const categories = [
    { id: "freelance", label: "Freelance", count: freelanceCount },
    { id: "pet-projects", label: "Pet Projects", count: projects.length },
    { id: "client-work", label: "Client Work", count: clientWorkCount },
  ];

  return (
    <div className="projects-page">
      <div className="site-wrapper">
        <div className="projects-page__header">
          <div className="section__heading">
            <p className="section__eyebrow">/ Portfolio</p>
            <h1>My Projects</h1>
          </div>

          <div className="projects-page__filters">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`projects-page__filter-btn ${
                  activeCategory === category.id ? "projects-page__filter-btn--active" : ""
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="projects-page__filter-label">{category.label}</span>
                <span className="projects-page__filter-count">({category.count})</span>
              </button>
            ))}
          </div>
        </div>

        <div className="projects-page__content">
          {activeCategory === "freelance" && (
            <Testimonials
              limit={undefined}
              heading="Freelance Projects"
              eyebrow="/ Freelance Work"
              showViewAll={false}
              category="freelance"
            />
          )}

          {activeCategory === "pet-projects" && (
            <Projects
              limit={undefined}
              heading="Pet Projects"
              eyebrow="/ Personal Projects"
              showViewAll={false}
              category="pet-projects"
            />
          )}

          {activeCategory === "client-work" && (
            <Testimonials
              limit={undefined}
              heading="Client Work"
              eyebrow="/ Client Projects"
              showViewAll={false}
              category="client-work"
            />
          )}
        </div>
      </div>
    </div>
  );
}