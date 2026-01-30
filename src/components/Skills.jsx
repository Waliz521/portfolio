import { coreCompetencies, skillCategories, tools } from "../data/skills";

export function Skills() {
  // Find Enterprise Web GIS stack
  const enterpriseStack = skillCategories.find(cat => cat.title === "Enterprise Web GIS");
  
  // Find Web GIS Development stack
  const webGISStack = skillCategories.find(cat => cat.title === "Web GIS Development");

  return (
    <section id="skills" className="section skills">
      <div className="site-wrapper">
        <div className="section__heading">
          <p className="section__eyebrow">Technical expertise</p>
          <h2>Tools & capabilities</h2>
        </div>

        <div className="skills__dune-layout">
          {/* Core Competencies - Large flowing dune */}
          <div className="skills__dune skills__dune--primary">
            <div className="skills__dune-header">
              <h3 className="skills__dune-title">Core Competencies</h3>
              <div className="skills__dune-wave"></div>
            </div>
            <div className="skills__dune-content">
              {coreCompetencies.map((comp, index) => (
                <div key={comp.label} className="skills__dune-item" style={{ '--delay': `${index * 0.1}s` }}>
                  <span className="skills__dune-label">{comp.label}</span>
                  <div className="skills__dune-bar">
                    <div 
                      className="skills__dune-fill" 
                      style={{ width: comp.value }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Specialist Stacks - Two smaller dunes */}
          <div className="skills__dune-group">
            {enterpriseStack && (
              <div className="skills__dune skills__dune--secondary">
                <div className="skills__dune-header">
                  <h3 className="skills__dune-title">{enterpriseStack.title}</h3>
                  <div className="skills__dune-wave"></div>
                </div>
                <div className="skills__dune-content">
                  {enterpriseStack.items.map((item, index) => (
                    <div key={item.label} className="skills__dune-item" style={{ '--delay': `${index * 0.1}s` }}>
                      <span className="skills__dune-label">{item.label}</span>
                      <div className="skills__dune-bar">
                        <div 
                          className="skills__dune-fill" 
                          style={{ width: item.value }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {webGISStack && (
              <div className="skills__dune skills__dune--secondary">
                <div className="skills__dune-header">
                  <h3 className="skills__dune-title">{webGISStack.title}</h3>
                  <div className="skills__dune-wave"></div>
                </div>
                <div className="skills__dune-content">
                  {webGISStack.items.map((item, index) => (
                    <div key={item.label} className="skills__dune-item" style={{ '--delay': `${index * 0.1}s` }}>
                      <span className="skills__dune-label">{item.label}</span>
                      <div className="skills__dune-bar">
                        <div 
                          className="skills__dune-fill" 
                          style={{ width: item.value }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Tools & Technologies - Flowing sand chips */}
          <div className="skills__dune skills__dune--tools">
            <div className="skills__dune-header">
              <h3 className="skills__dune-title">Tools & Technologies</h3>
              <div className="skills__dune-wave"></div>
            </div>
            <div className="skills__dune-chips">
              {tools.map((tool, index) => (
                <span 
                  key={tool} 
                  className="skills__dune-chip"
                  style={{ '--delay': `${index * 0.05}s` }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


