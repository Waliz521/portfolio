import { coreCompetencies, skillCategories, tools } from "../data/skills";

export function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="site-wrapper">
        <div className="section__heading">
          <p className="section__eyebrow">Technical expertise</p>
          <h2>Tools & capabilities</h2>
        </div>

        <div className="skills__layout">
          <div className="skills__column">
            <h3>Core competencies</h3>
            <ul className="skills__list">
              {coreCompetencies.map((skill) => (
                <li key={skill.label}>
                  <div className="skills__info">
                    <span>{skill.label}</span>
                    <span>{skill.value}</span>
                  </div>
                  <div className="skills__bar">
                    <span style={{ width: skill.value }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="skills__column">
            <h3>Specialist stacks</h3>
            <div className="skills__groups">
              {skillCategories.map((category) => (
                <div key={category.title} className="skills__group">
                  <h4>{category.title}</h4>
                  <ul>
                    {category.items.map((item) => (
                      <li key={item.label}>
                        <div className="skills__info">
                          <span>{item.label}</span>
                          <span>{item.value}</span>
                        </div>
                        <div className="skills__bar">
                          <span style={{ width: item.value }} />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
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


