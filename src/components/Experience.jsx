import { experience } from "../data.js";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

export default function Experience() {
  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          subtitle="Hands-on industry experience with a distributed, Agile team."
        />
        <div className="timeline">
          {experience.map((job) => (
            <Reveal key={job.role + job.period}>
              <article className="timeline__item">
                <span className="timeline__dot" />
                <div className="card">
                  <div className="card__head">
                    <div>
                      <h3>{job.role}</h3>
                      <p className="muted">{job.company}</p>
                    </div>
                    <span className="badge">{job.period}</span>
                  </div>
                  <ul className="list">
                    {job.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                  <div className="tags">
                    {job.tech.map((t) => (
                      <span className="tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
