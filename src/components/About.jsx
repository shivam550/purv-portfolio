import React from 'react'
import photo from "../assets/WebHome16.jpg"
import { motion } from "framer-motion"


const About = () => {
  return (
    <div className="container py-16">
      <div className='flex justify-center items-center text-center'>
        <h2 className='text-4xl text-emerald-400 font-semibold underline underline-offset-8'>About Me</h2>
      </div>
      <div className='flex justify-center items-center flex-col lg:flex-row px-0 sm:px-32'>
        <motion.div 
        className='lg:w-1/2 p-4'
        initial={{opacity:0,y:50}}
        animate={{opacity:1,y:0}}
        transition={{duration:0.8,delay:0.2}}
        >
          <div className='text-center'>
            <p className='font-secondaryFont text-md text-[#313131] leading-relaxed  text-justify px-4 sm:px-8'> Hi, I'm Purv Prabhakar, <span className='font-bold underline decoration-wavy'>a passionate 3D and graphics designer with 2 years of experience</span> dedicated to crafting immersive and impactful visuals. I thrive on blending technical expertise with a keen eye for detail to deliver designs that are not just visually stunning but also purposeful. My goal is to bring ideas to life, creating engaging experiences that resonate with users and elevate projects to their full potential.</p>
              <br />
             <p className='font-secondaryFont text-md text-[#313131] leading-relaxed  text-justify px-4 sm:px-8'> I enjoy collaborating with teams and continuously learning to refine my craft, with a strong focus on game design. For me, design isn’t just about making things look good—it’s about telling stories, evoking emotions, and creating meaningful connections through visuals. I am excited to push boundaries and grow as a game designer, shaping worlds that players will love and remember.</p>
          </div>
         

        </motion.div>
        <motion.div
         className='lg:w-1/2 p-4 text-center mx-auto flex justify-center items-center'
         initial={{opacity:0,x:50}}
         animate={{opacity:1,x:0}}
         transition={{duration:0.8,delay:0.4}}
         >
          <img src={photo} alt='about_img' width={320} className='' />
        </motion.div>
      </div>
    </div>
  )
}

export default About