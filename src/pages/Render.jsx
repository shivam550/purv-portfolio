import React from 'react'
import { renderThumbnils } from '../index'
import { Link } from 'react-router-dom';



const Render = () => {

  return (
    <>
     <div className='lg:my-16 my-8  '>
      <h2 className="text-3xl text-black underline underline-offset-8 font-bold text-center mb-8">Renders</h2>
       <div className='grid lg:grid-cols-3 grid-cols-1 items-center overflow-hidden'>
        {
            renderThumbnils.map((thumbnil)=>(
                <div key={thumbnil.id} className='m-4' >
                  <Link to={`/render/${thumbnil.category}`}>
                  <img src={thumbnil.src} alt={thumbnil.name} className=' object-cover cursor-pointer w-auto h-full ' />
                    <div className='w-full h-12 text-center bg-black cursor-pointer'><p className='text-white text-md py-2 '>{thumbnil.name}</p></div>
                  </Link>
                   
                 </div>
            ))
        }
       </div>
     </div>
    </>
  )
}

export default Render