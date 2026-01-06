import { Hero } from "../components/Hero";
import { AboutSection } from "../components/AboutSection";
import { Projects } from "../components/Projects";
import { Testimonials } from "../components/Testimonials";
import { CallToAction } from "../components/CallToAction";

export function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <Projects
        limit={2}
        showViewAll
        eyebrow="/ Highlights"
        heading="Recent geospatial explorations"
      />
      <Testimonials
        eyebrow="/ Client Work"
        heading="Client work & testimonials"
      />
      <CallToAction />
    </>
  );
}


