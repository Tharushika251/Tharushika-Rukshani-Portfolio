import { useEffect, useState } from "react";
import { FiArrowDown, FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile, about } from "../data.js";

function useTypewriter(words, speed = 80, pause = 1400) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let timeout;
    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => i + 1);
    } else {
      timeout = setTimeout(
        () =>
          setText(
            deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)
          ),
        deleting ? speed / 2 : speed
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(profile.roles);
  const heroPhoto = about.photo;
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <span className="blob blob--1" />
        <span className="blob blob--2" />
      </div>
      <div className="container hero__inner">
        <div className="hero__text">
          <span className="pill">
            <span className="pill__dot" /> Open to entry-level opportunities
          </span>
          <h1>
            Hi, I'm <span className="gradient-text">{profile.name}</span>
          </h1>
          <p className="hero__role">
            <span>{typed}</span>
            <span className="cursor" aria-hidden="true">|</span>
          </p>
          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__cta">
            <a href="#projects" className="btn btn--primary">
              View my work <FiArrowDown />
            </a>
            <a href={profile.cv} download className="btn btn--ghost">
              <FiDownload /> Download CV
            </a>
          </div>

          <div className="socials">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <FiMail />
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="avatar-ring">
            {!photoFailed ? (
              <img
                src={profile.photo.src}
                alt={profile.photo.alt}
                onError={() => setPhotoFailed(true)}
              />
            ) : (
              <div className="avatar-fallback" aria-label={profile.name}>
                {profile.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
