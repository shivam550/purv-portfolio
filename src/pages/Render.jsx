import React from 'react';
import { renderThumbnils } from '../index';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Render = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2, 
        duration: 0.5,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <>
      <motion.div
        className="lg:py-16 py-8 bg-gray-900"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2
          className="text-3xl text-yellow-500 underline underline-offset-8 font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Renders
        </motion.h2>

        <motion.div
          className="grid lg:grid-cols-3 grid-cols-1 gap-8 lg:px-24 px-6 py-16"
          variants={containerVariants}
        >
          {renderThumbnils.map((thumbnil) => (
            <motion.div
              key={thumbnil.id}
              className="relative group rounded-lg overflow-hidden shadow-lg bg-gray-800 transition-all hover:scale-105 hover:shadow-2xl"
              variants={cardVariants}
            >
              <Link to={`/render/${thumbnil.category}`} className="block">
                <motion.img
                  src={thumbnil.src}
                  alt={thumbnil.name}
                  className="w-full h-64 object-cover transition-all group-hover:opacity-90"
                  loading="lazy"
                />
              </Link>
              <div className="p-4">
                <p className="text-sm text-gray-300 leading-relaxed mb-2">
                  {thumbnil.description}
                </p>
                <p className="text-yellow-500 text-md font-bold text-center uppercase">
                  {thumbnil.name}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Render;
