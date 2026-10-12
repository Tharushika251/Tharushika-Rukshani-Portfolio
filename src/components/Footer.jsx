import { FiArrowUp } from "react-icons/fi";
import { profile } from "../data.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <a href="#home" className="to-top" aria-label="Back to top">
          <FiArrowUp />
        </a>
      </div>
    </footer>
  );
}
