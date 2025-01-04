import React from 'react'
import { Link } from 'react-router-dom'



const Projects = () => {


  return (

    <>
     <div className='flex justify-center items-center text-center mb-8'>
        <h2 className='text-4xl text-emerald-400 font-semibold underline underline-offset-8'>Projects</h2>
      </div>
      <div className='container  flex justify-center lg:flex-row flex-col w-full items-center grid-col-1'>
        <div className='bg-[#000000e6] h-[18rem] w-[30rem] flex flex-col rounded-md justify-center items-center  space-y-2 overflow-hidden shadow-xl max-w-sm text-center m-6 hover:border-solid hover:border-2 hover:border-emerald-400 '>
          <p className='text-emerald-400 text-xl mt-4'>Graphics</p>

          <Link to='/graphics' className="cursor-pointer transition-all 
            bg-[#000000e6] text-emerald-400 px-6 py-2 rounded-lg
            border-green-400
            border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
            active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-green-300 shadow-green-300 active:shadow-none">
            Explore
          </Link>
        </div>
        <div className='bg-[#000000e6] h-[18rem] w-[30rem] flex flex-col rounded-md justify-center items-center  space-y-2 overflow-hidden shadow-xl max-w-sm text-center m-6 hover:border-solid hover:border-2 hover:border-emerald-400 '>
          <p className='text-emerald-400 text-xl mt-4'>Games</p>

          <Link to='/games' className="cursor-pointer transition-all 
            bg-[#000000e6] text-emerald-400 px-6 py-2 rounded-lg
            border-green-400
            border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
            active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-green-300 shadow-green-300 active:shadow-none">
            Explore
          </Link>
        </div>

        <div className='bg-[#000000e6] h-[18rem] w-[30rem] flex flex-col rounded-md justify-center items-center  space-y-2 overflow-hidden shadow-xl max-w-sm text-center m-6 hover:border-solid hover:border-2 hover:border-emerald-400 '>
          <p className='text-emerald-400 text-xl mt-4'>Render</p>

          <Link to='/render' className="cursor-pointer transition-all 
            bg-[#000000e6] text-emerald-400 px-6 py-2 rounded-lg
            border-green-400
            border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
            active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-green-300 shadow-green-300 active:shadow-none">
            Explore
          </Link>
        </div>
        <div className='bg-[#000000e6] h-[18rem] w-[30rem] flex flex-col rounded-md justify-center items-center  space-y-2 overflow-hidden shadow-xl max-w-sm text-center m-6 hover:border-solid hover:border-2 hover:border-emerald-400 '>
          <p className='text-emerald-400 text-xl mt-4'>Animation</p>

          <Link to='/animation' className="cursor-pointer transition-all 
            bg-[#000000e6] text-emerald-400 px-6 py-2 rounded-lg
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