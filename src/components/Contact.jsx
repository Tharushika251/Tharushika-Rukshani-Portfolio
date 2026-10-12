import { useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { profile } from "../data.js";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "", _gotcha: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Please enter a valid email.";
    if (form.message.trim().length < 10) next.message = "Message should be at least 10 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;
    if (!validate()) return;

    setStatus("sending");
    try {
      const res = await fetch(profile.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _gotcha: form._gotcha, // hidden spam trap
          _subject: `Portfolio enquiry from ${form.name}`,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm({ name: "", email: "", message: "", _gotcha: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section section--alt">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's work together"
          subtitle="I'm currently looking for an entry-level software development or IT role. Say hello!"
        />

        <div className="contact">
          <Reveal>
            <div className="contact__info">
              <a className="contact__row" href={`mailto:${profile.email}`}>
                <span className="contact__icon"><FiMail /></span>
                <span>
                  <small>Email</small>
                  {profile.email}
                </span>
              </a>
              <a className="contact__row" href={`tel:${profile.phone.replace(/-/g, "")}`}>
                <span className="contact__icon"><FiPhone /></span>
                <span>
                  <small>Phone</small>
                  {profile.phone}
                </span>
              </a>
              <div className="contact__row">
                <span className="contact__icon"><FiMapPin /></span>
                <span>
                  <small>Location</small>
                  {profile.location}
                </span>
              </div>
              <div className="socials socials--left">
                <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <FiGithub />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <FiLinkedin />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form className="card form" onSubmit={onSubmit} noValidate>
              <label>
                Name
                <input name="name" value={form.name} onChange={onChange} placeholder="Your name" />
                {errors.name && <span className="error">{errors.name}</span>}
              </label>
              <label>
                Email
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="you@example.com"
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </label>
              <label>
                Message
                <textarea
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={onChange}
                  placeholder="How can I help you?"
                />
                {errors.message && <span className="error">{errors.message}</span>}
              </label>

              {/* Hidden spam trap: real visitors never see or fill this */}
              <input
                type="text"
                name="_gotcha"
                value={form._gotcha}
                onChange={onChange}
                tabIndex={-1}
                autoComplete="off"
                className="hp-field"
                aria-hidden="true"
              />

              <button type="submit" className="btn btn--primary" disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : <>Send message <FiSend /></>}
              </button>

              {status === "success" && (
                <p className="form-status form-status--success" role="status">
                  Thank you! Your message has been sent. I'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="form-status form-status--error" role="alert">
                  Sorry, something went wrong. Please try again or email me directly at{" "}
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}