import { skills, softSkills } from "../data.js";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies & strengths"
          subtitle="The tools I use to design, build, test and ship software."
        />

        <div className="skills-grid">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 60}>
              <div className="card skill-card">
                <h3>{group.category}</h3>
                <div className="tags">
                  {group.items.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="soft">
            <h3>Soft skills</h3>
            <div className="soft__grid">
              {softSkills.map((s) => (
                <div className="soft__item" key={s}>
                  <span className="check" aria-hidden="true">✓</span>
                  {s}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
