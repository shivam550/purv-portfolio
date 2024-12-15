import React from 'react';
import { allImages } from '../index'; // Assuming allImages is imported from somewhere
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { motion } from 'framer-motion';

const Graphics = () => {
  return (
    <>
     <div className='lg:my-16 my-8' >
      <h2 className="text-3xl text-black underline underline-offset-8 font-bold text-center mb-8">Graphics</h2>
         
     <div className='overflow-hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:px-24 py-20'>
      {allImages.map((image) => (
        <motion.div
          key={image.id}  // Ensure that each image has a unique 'id'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='shadow-lg'
        >
          <LazyLoadImage
            src={image.src}  // Ensure each image object has a 'src' property
            alt={image.name}  // Ensure each image object has a 'name' property
            className='rounded-xl object-cover cursor-pointer w-auto h-full transform hover:scale-105 transition-transform duration-300'
          />
        </motion.div>
      ))}
    </div>
     </div>
    </>
  );
};

export default Graphics;
