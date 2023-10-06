import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

const Header = () => {
  return (
    <nav id="sidebar">
      <div className="sidebar-header">
        <Link to="/">
          <img
            className="img-fluid img-profile rounded-circle mx-auto mb-2"
            src="assets/img/profile.jpg"
            alt="..."
          />
          <h3>SAIFUNNISA KK</h3>
        </Link>
      </div>
      <ul className="list-unstyled components">
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/experience">Experience</Link>
        </li>

        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/education">Education</Link>
        </li>
        <li>
          <Link to="/interests">Recent projects</Link>
        </li>
        <li>
          <Link to="/certification">Achievements & Certifications</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
