import { FiAward, FiBookOpen } from "react-icons/fi";
import { courses, education } from "../data.js";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Education"
          title="Academic background"
          subtitle="Formal education and additional courses."
        />

        <div className="edu-grid">
          {education.map((e, i) => (
            <Reveal key={e.title} delay={i * 70}>
              <div className="card edu">
                <span className="edu__icon">
                  <FiBookOpen />
                </span>
                <div>
                  <h3>{e.title}</h3>
                  <p className="muted">{e.place}</p>
                  <span className="badge">{e.period}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="card edu edu--course">
            <span className="edu__icon">
              <FiAward />
            </span>
            <div>
              <h3>Courses & certifications</h3>
              {courses.map((c) => (
                <p className="muted" key={c.title}>
                  {c.title} — {c.provider}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
