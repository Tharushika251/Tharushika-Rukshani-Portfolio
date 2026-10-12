import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projects } from "../data.js";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

export default function Projects() {
  return (
    <section id="projects" className="section section--alt">
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          subtitle="A selection of academic and personal projects across the full stack."
        />

        <div className="projects-grid">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 80} className={p.featured ? "project--featured" : ""}>
              <article className="card project">
                <div className="project__top">
                  <span className="badge">{p.date}</span>
                  {p.featured && <span className="badge badge--accent">Featured</span>}
                </div>
                <h3>{p.title}</h3>
                <p className="project__sub">{p.subtitle}</p>
                <p className="project__desc">{p.description}</p>
                <div className="tags">
                  {p.tech.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                {(p.github || p.live) && (
                  <div className="project__links">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer">
                        <FiGithub /> Code
                      </a>
                    )}
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noreferrer">
                        <FiExternalLink /> Live demo
                      </a>
                    )}
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
