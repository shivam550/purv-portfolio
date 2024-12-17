import React from 'react'
import { renderThumbnils } from '../index'
import { Link } from 'react-router-dom';

const Render = () => {

  return (
    <>
      <div className="lg:my-16 my-8">
        <h2 className="text-3xl text-black underline underline-offset-8 font-bold text-center mb-12">Renders</h2>
        
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 lg:px-24 px-6 py-16">
          {
            renderThumbnils.map((thumbnil) => (
              <div key={thumbnil.id} className="relative group rounded-lg overflow-hidden shadow-lg transition-all hover:scale-105 hover:shadow-2xl">
                
                <Link to={`/render/${thumbnil.category}`} className="block">
                  <img 
                    src={thumbnil.src} 
                    alt={thumbnil.name} 
                    className="w-full h-64 object-cover transition-all group-hover:opacity-80"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-center p-4">
                    <p className="text-white text-md font-semibold">{thumbnil.name}</p>
                  </div>
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
