import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      {/* Navbar */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </nav>

      {/* Dynamic Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer>
        <p>© 2025 Your Portfolio</p>
      </footer>
    </div>
  );
};

export default Layout;