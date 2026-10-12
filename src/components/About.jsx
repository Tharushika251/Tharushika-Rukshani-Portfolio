import { useState } from "react";
import { about, profile } from "../data.js";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

function Photo({ photo }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="photo-placeholder" role="img" aria-label={photo.alt}>
        <span>Your photo</span>
        <small>Add /public{photo.src}</small>
      </div>
    );
  }
  return (
    <img
      src={photo.src}
      alt={photo.alt}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

export default function About() {
  const { photo, paragraphs, highlights } = about;

  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="About me"
          title="A little about who I am"
          subtitle="Software engineer in the making, curious by nature, and always learning."
        />

        <div className="about">
          <Reveal className="about__photo-col">
            <div className="about__photo-wrap">
              <div className="about__photo">
                <Photo photo={photo} />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="about__content">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            <ul className="facts">
              <li>
                <strong>Location:</strong> {profile.location}
              </li>
              <li>
                <strong>Email:</strong> <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <strong>Phone:</strong> <a href={`tel:${profile.phone.replace(/-/g, "")}`}>{profile.phone}</a>
              </li>
              <li>
                <strong>Languages:</strong> English, Sinhala
              </li>
            </ul>

            <div className="stats">
              {highlights.map((h) => (
                <div className="stat" key={h.label}>
                  <span className="stat__value">{h.value}</span>
                  <span className="stat__label">{h.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}