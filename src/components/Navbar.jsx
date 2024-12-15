import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <nav>
      <div className="w-full h-auto bg-trans flex justify-between items-center px-8 py-6">
        <div className="logo">
          <h5>Logo</h5>
        </div>

        {/* Navbar for large screens */}
        <div className="nav-menu hidden sm:flex gap-4">
          <div className="nav-item">
            <Link className="nav-link" to="hero">Home</Link>
          </div>
          <div className="nav-item">
            <Link className="nav-link" to="about">About</Link>
          </div>
          <div className="nav-item">
            <Link className="nav-link" to="experience">Experience</Link>
          </div>
          <div className="nav-item">
            <Link className="nav-link" to="projects">Project</Link>
          </div>
          <div className="nav-item">
            <Link className="nav-link" to="contact">Contact</Link>
          </div>
        </div>

        {/* Hamburger menu for mobile screens */}
        <div className="block sm:hidden">
          <GiHamburgerMenu
            className="text-2xl cursor-pointer"
            onClick={() => setActive(!active)}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {active && (
        <div
          className="fixed top-12 right-3 z-10 rounded-xl shadow-md text-end w-40 p-8 bg-orange-500 transform transition-all duration-300 ease-in-out"
        >
          <div className="nav-item">
            <Link
              className="nav-link"
              to="#hero"
              onClick={() => setActive(false)}
            >
              Home
            </Link>
          </div>
          <div className="nav-item">
            <Link
              className="nav-link"
              to="#about"
              onClick={() => setActive(false)}
            >
              About
            </Link>
          </div>
          <div className="nav-item">
            <Link
              className="nav-link"
              to="#experience"
              onClick={() => setActive(false)}
            >
              Experience
            </Link>
          </div>
          <div className="nav-item">
            <Link
              className="nav-link"
              to="#projects"
              onClick={() => setActive(false)}
            >
              Project
            </Link>
          </div>
          <div className="nav-item">
            <Link
              className="nav-link"
              to="#contact"
              onClick={() => setActive(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
