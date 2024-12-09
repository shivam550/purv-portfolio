import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'



import "../App.css"

const LandingPages = () => {
    return (
        <div>
            <Navbar />
            <section className='hero-bg'>
                <Hero />
            </section>
            <About />
            <Experience />
            <Projects />
            <Contact />
        </div>
    )
}

export default LandingPages