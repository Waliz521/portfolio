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
        limit={3}
        variant="home"
        showViewAll
        eyebrow="/ projects"
      />
      <Testimonials
        eyebrow="/ Freelance Work"
        heading="What clients say"
        category="freelance"
        variant="marquee"
        showViewAll={true}
      />
      <CallToAction />
    </>
  );
}


