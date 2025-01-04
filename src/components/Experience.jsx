import React from 'react'
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";


const Experience = () => {
  const timelineData = [
    {
      title: "Graphic Designer at Altois - Mumbai",
      date: "August 2024 - present",
      description: "Manage and execute social media strategies for clients, including static, motion, and 3D content, to boost brand visibility and engagement.",
      icon: "🎨",
    },
    {
      title: "Designer at Realatte - Mumbai",
      date: "March 2024 - August 2024",
      description: "Handle all social media work and marketing strategies for static, motion, and 3D.",
      icon: "🖥️",
    },
    {
      title: "3D Graphic Designer at Accenture Mumbai",
      date: "June 2023 - Jan 2024",
      description: "Developed high-quality design concepts and visuals. Provided design services by making 3D packshots and model renders for P&G stores across Asia, Europe, and North America.",
      icon: "📐",
    },
    {
      title: "3D Designer (Intern) at desigM - Mumbai",
      date: "June 2022 - Aug 2022",
      description: "Assisted head designer in Interior Design projects, creating mood boards, checking products, and delivering 3D models and renders for furniture and site layouts.",
      icon: "🏗️",
    },
    {
      title: "Graphic Designer at Lilys - Jaipur",
      date: "April 2019 - May 2021",
      description: "Worked on visual identity and branding, print design, and digital design, with a focus on illustration.",
      icon: "🎨",
    },
  ];
  



  return (
    <div className="py-12 bg-[#000000e6]">
      <h2 className="text-3xl text-white underline underline-offset-8 font-bold text-center mb-8">Journey So Far</h2>
      <VerticalTimeline>
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <VerticalTimelineElement
              className="m-3 vertical-timeline-element--work"
              date={<p className='font-bold text-xl sm:text-white text-black'>{item.date}</p>}
              icon={<div className="text-xl flex justify-center items-center mt-2 mb-4 lg:my-4">{item.icon}</div>}
              position={index % 2 === 0 ? "left" : "right"}
              contentStyle={{ background: "#e3fcec", color: "#313131" }}
              contentArrowStyle={{ borderRight: "7px solid #e3fcec" }}
            >
              <div className='m-3'>
              <h3 className="vertical-timeline-element-title text-emerald-600">
                {item.title}
              </h3>
              <p>{item.description}</p>
              </div>
            </VerticalTimelineElement>
          </motion.div>
        ))}
      </VerticalTimeline>
    </div>

  )
}

export default Experience