import React, { useState } from 'react'
import { allImages } from '../index'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { motion } from 'framer-motion'

const Projects = () => {
  const [clickbtn , setClickBtn] = useState('')

  
  const handleClick = (buttonName) =>{
  setClickBtn(buttonName)

  }
  console.log(clickbtn);

  return ( 
    <>
      <div className='min-h-screen w-full text-center bg-black'>
        <div className='flex justify-center items-center gap-6 pt-8'>
          <button className='px-8 py-3 bg-white text-black' onClick={()=>{handleClick('graphics')}} >Graphics</button>
          <button className='px-8 py-3 bg-white text-black' onClick={()=>{handleClick('games')}} >Games</button>

        </div>
        <div className='overflow-hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:px-24 py-20'>
          {

            allImages
            .filter((f)=>f.category.toLowerCase().includes(clickbtn))
            .map((images) => (

              <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
               className='shadow-lg' key={images.id}>
                <LazyLoadImage
                  src={images.src}
                  alt={images.name}
                  className=' rounded-xl lg:object-cover object-contain cursor-pointer w-auto h-80  transform hover:scale-105 transition-transform duration-300'
                />



              </motion.div>

            ))

          }
        </div>
      </div>
    </>
  )
}

export default Projects