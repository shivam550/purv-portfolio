import React from 'react'
import { Link } from 'react-router-dom'



const Projects = () => {


  return (

    <>
      <div className='container  flex justify-center lg:flex-row flex-col w-full items-center grid-col-1'>
        <div className='bg-gray-700 h-[10rem] w-[12rem] flex flex-col rounded-md justify-center items-center  space-y-2 overflow-hidden shadow-xl max-w-sm text-center m-6 '>
          <p className='text-white text-xl '>Graphics</p>

          <Link to='/graphics' className="cursor-pointer transition-all 
            bg-gray-700 text-white px-6 py-2 rounded-lg
            border-green-400
            border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
            active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-green-300 shadow-green-300 active:shadow-none">
            Explore
          </Link>
        </div>
        <div className='bg-gray-700 h-[10rem] w-[12rem] flex flex-col rounded-md justify-center items-center  space-y-2 overflow-hidden shadow-xl max-w-sm text-center m-6 '>
          <p className='text-white text-xl '>Games</p>

          <Link to='/graphics' className="cursor-pointer transition-all 
            bg-gray-700 text-white px-6 py-2 rounded-lg
            border-green-400
            border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
            active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-green-300 shadow-green-300 active:shadow-none">
            Explore
          </Link>
        </div>

        <div className='bg-gray-700 h-[10rem] w-[12rem] flex flex-col rounded-md justify-center items-center  space-y-2 overflow-hidden shadow-xl max-w-sm text-center m-6 '>
          <p className='text-white text-xl '>Render</p>

          <Link to='/render' className="cursor-pointer transition-all 
            bg-gray-700 text-white px-6 py-2 rounded-lg
            border-green-400
            border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
            active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-green-300 shadow-green-300 active:shadow-none">
            Explore
          </Link>
        </div>

        <div className='bg-gray-700 h-[10rem] w-[12rem] flex flex-col rounded-md justify-center items-center  space-y-2 overflow-hidden shadow-xl max-w-sm text-center m-6 '>
          <p className='text-white text-xl '>Interative art</p>

          <Link to='/graphics' className="cursor-pointer transition-all 
            bg-gray-700 text-white px-6 py-2 rounded-lg
            border-green-400
            border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
            active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-green-300 shadow-green-300 active:shadow-none">
            Explore
          </Link>
        </div>
       
        <div className='bg-gray-700 h-[10rem] w-[12rem] flex flex-col rounded-md justify-center items-center  space-y-2 overflow-hidden shadow-xl max-w-sm text-center m-6 '>
          <p className='text-white text-xl '>Animation</p>

          <Link to='/animation' className="cursor-pointer transition-all 
            bg-gray-700 text-white px-6 py-2 rounded-lg
            border-green-400
            border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
            active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-green-300 shadow-green-300 active:shadow-none">
            Explore
          </Link>
        </div>
        
        

      </div>
    </>
  )
}

export default Projects