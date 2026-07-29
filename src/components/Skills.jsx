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

        <div className="skills__panel-layout">
          {/* Core Competencies - Large panel */}
          <div className="skills__panel skills__panel--primary">
            <div className="skills__panel-header">
              <h3 className="skills__panel-title">Core Competencies</h3>
              <div className="skills__panel-wave"></div>
            </div>
            <div className="skills__panel-content">
              {coreCompetencies.map((comp, index) => (
                <div key={comp.label} className="skills__panel-item" style={{ '--delay': `${index * 0.1}s` }}>
                  <span className="skills__panel-label">{comp.label}</span>
                  <div className="skills__panel-bar">
                    <div 
                      className="skills__panel-fill" 
                      style={{ width: comp.value }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Specialist Stacks - Two stack panels */}
          <div className="skills__panel-group">
            {enterpriseStack && (
              <div className="skills__panel skills__panel--secondary">
                <div className="skills__panel-header">
                  <h3 className="skills__panel-title">{enterpriseStack.title}</h3>
                  <div className="skills__panel-wave"></div>
                </div>
                <div className="skills__panel-content">
                  {enterpriseStack.items.map((item, index) => (
                    <div key={item.label} className="skills__panel-item" style={{ '--delay': `${index * 0.1}s` }}>
                      <span className="skills__panel-label">{item.label}</span>
                      <div className="skills__panel-bar">
                        <div 
                          className="skills__panel-fill" 
                          style={{ width: item.value }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {webGISStack && (
              <div className="skills__panel skills__panel--secondary">
                <div className="skills__panel-header">
                  <h3 className="skills__panel-title">{webGISStack.title}</h3>
                  <div className="skills__panel-wave"></div>
                </div>
                <div className="skills__panel-content">
                  {webGISStack.items.map((item, index) => (
                    <div key={item.label} className="skills__panel-item" style={{ '--delay': `${index * 0.1}s` }}>
                      <span className="skills__panel-label">{item.label}</span>
                      <div className="skills__panel-bar">
                        <div 
                          className="skills__panel-fill" 
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
          <div className="skills__panel skills__panel--tools">
            <div className="skills__panel-header">
              <h3 className="skills__panel-title">Tools & Technologies</h3>
              <div className="skills__panel-wave"></div>
            </div>
            <div className="skills__panel-chips">
              {tools.map((tool, index) => (
                <span 
                  key={tool} 
                  className="skills__panel-chip"
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


