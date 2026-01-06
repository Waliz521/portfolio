import { coreCompetencies, skillCategories, tools } from "../data/skills";
import { CircularProgress } from "./CircularProgress";

export function Skills() {
  // Get technology names for core competencies
  const coreTechs = coreCompetencies.map(comp => comp.label);
  
  // Find Enterprise Web GIS stack and get technology names
  const enterpriseStack = skillCategories.find(cat => cat.title === "Enterprise Web GIS");
  const enterpriseTechs = enterpriseStack ? enterpriseStack.items.map(item => item.label) : [];
  
  // Find Web GIS Development stack and get technology names
  const webGISStack = skillCategories.find(cat => cat.title === "Web GIS Development");
  const webGISTechs = webGISStack ? webGISStack.items.map(item => item.label) : [];

  return (
    <section id="skills" className="section skills">
      <div className="site-wrapper">
        <div className="section__heading">
          <p className="section__eyebrow">Technical expertise</p>
          <h2>Tools & capabilities</h2>
        </div>

        <div className="skills__layout">
          <div className="skills__column skills__column--circles">
            <h3>Core competencies</h3>
            <CircularProgress 
              technologies={coreTechs}
              label="Core Expertise"
              size={230}
            />
          </div>

          <div className="skills__column skills__column--circles">
            <h3>Specialist stacks</h3>
            <div className="skills__circles">
              <CircularProgress 
                technologies={enterpriseTechs}
                label={enterpriseStack?.title || "Enterprise Web GIS"}
                size={180}
              />
              <CircularProgress 
                technologies={webGISTechs}
                label={webGISStack?.title || "Web GIS Development"}
                size={180}
              />
            </div>
          </div>

          <div className="skills__column">
            <h3>Tools & technologies</h3>
            <ul className="skills__chips">
              {tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


