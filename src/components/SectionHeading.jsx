import Reveal from "./Reveal.jsx";

export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <Reveal>
      <div className="section-heading">
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </Reveal>
  );
}
