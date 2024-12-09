import React from 'react'
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";


const Experience = () => {
  const timelineData = [
    {
      title: "Junior Designer",
      date: "2019",
      description: "Started my career, mastering foundational tools and techniques.",
      icon: "🎨",
    },
    {
      title: "Award Winner",
      date: "2020",
      description: "Received my first major award for outstanding graphic design.",
      icon: "🏆",
    },
    {
      title: "3D Specialist",
      date: "2022",
      description: "Specialized in 3D design, creating immersive visuals for games.",
      icon: "📐",
    },
    {
      title: "Senior Designer",
      date: "2023",
      description: "Promoted to senior role, leading creative teams and mentoring.",
      icon: "🌟",
    },
  ];



  return (
    <div className="py-12 bg-black">
      <h2 className="text-3xl font-bold text-center mb-8">My Journey</h2>
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
              date={<p className='text-white font-bold text-xl'>{item.date}</p>}
              icon={<div className="text-xl flex justify-center items-center my-4">{item.icon}</div>}
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