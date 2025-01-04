import React from 'react'
import { allgames } from '..'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";

const Games = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2, // Delays each child animation
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Variants for each card
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
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
        All Games
      </motion.h2>


      <motion.div
  className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12 lg:px-24 px-6"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  {/* Left: YouTube Video */}
  <div className="flex justify-center">
    <iframe
      width="100%"
      height="300"
      src="https://www.youtube.com/embed/L-2dZ-sHCvo?si=3QJXKXoLwwR7a2Sq"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="rounded-lg shadow-lg max-w-xl"
    ></iframe>
  </div>

  {/* Right: Content */}
  <div className="text-white">
    <h3 className="text-2xl font-bold mb-4 text-yellow-500">About the Video</h3>
    <p className="mb-4 leading-relaxed">
      This video is a compilation of all the games featured in our collection. 
      Watch it to get an exciting glimpse into the variety of games we offer. 
      From action-packed adventures to thrilling strategy games, there's something for everyone!
    </p>
    <p>
      Explore our full collection below and find your next favorite game. Each title is crafted to deliver a unique and immersive gaming experience.
    </p>
  </div>
</motion.div>





      <motion.div
        className="overflow-hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:px-24 px-6 py-16"
        variants={containerVariants}
      >
        {allgames.map((games) => (
          <motion.div
            key={games.id}
            className="group relative rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-2xl hover:scale-105"
            variants={cardVariants}
          >
            <Link
              to={games.path}
              className="block w-full h-full"
            >
              <img
                src={games.src}
                alt={games.name}
                className="w-full h-60 object-cover rounded-t-lg transition-all group-hover:opacity-80"
              />
              <div className="p-6 bg-black rounded-b-lg">
                <p className="text-lg font-semibold text-yellow-500">{games.name} →</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Games;
