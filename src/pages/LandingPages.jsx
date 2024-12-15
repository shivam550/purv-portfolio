import React, { useState } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { GiHamburgerMenu } from "react-icons/gi";

import "../App.css";

const LandingPages = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Responsive Navbar */}
      <nav className="w-full bg-trans flex justify-between items-center px-8 py-6">
        <div className="logo">
          <h5 className="text-xl font-bold">Logo</h5>
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex gap-6">
          <a href="#hero" className="text-lg hover:text-orange-500 transition">
            Home
          </a>
          <a href="#about" className="text-lg hover:text-orange-500 transition">
            About
          </a>
          <a
            href="#experience"
            className="text-lg hover:text-orange-500 transition"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="text-lg hover:text-orange-500 transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-lg hover:text-orange-500 transition"
          >
            Contact
          </a>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="block sm:hidden">
          <GiHamburgerMenu
            className="text-2xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div
            className="absolute top-16 right-4 bg-orange-500 rounded-lg shadow-lg flex flex-col gap-4 p-4 text-white w-40 z-10"
          >
            <a
              href="#hero"
              className="hover:text-black transition"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-black transition"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#experience"
              className="hover:text-black transition"
              onClick={() => setMenuOpen(false)}
            >
              Experience
            </a>
            <a
              href="#projects"
              className="hover:text-black transition"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-black transition"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* Sections */}
      <section className="hero-bg" id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default LandingPages;
