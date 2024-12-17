import React from 'react'
import { allgames } from '..'
import { Link } from 'react-router-dom'

const Games = () => {
  return (
    <div className="lg:my-16 my-8">
      <h2 className="text-3xl text-black underline underline-offset-8 font-bold text-center mb-12"> All Games</h2>
      
      <div className="overflow-hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:px-24 px-6 py-16">
        {
            allgames.map((games) => (
                <div key={games.id} className="group relative rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-2xl hover:scale-105">
                    <img src={games.src} alt={games.name} className="w-full h-60 object-cover rounded-t-lg transition-all group-hover:opacity-80" />
                    <div className="p-6 bg-white rounded-b-lg">
                        <p className="text-lg font-semibold text-gray-900">{games.name}</p>
                        <Link to={games.path} className="mt-3 text-yellow-500 font-medium hover:text-yellow-400 transition-colors">Details</Link>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Games
