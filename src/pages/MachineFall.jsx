import React from 'react';
import { machina_1,machina_2,machina_3 } from '..';
import { Link } from 'react-router-dom';
const MachinasFall = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center p-4">
      {/* Header Section */}
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold text-yellow-500">Welcome to Machina's Fall</h1>
        <p className="text-lg mt-2">AI Has Risen. Nature Will Strike Back.</p>
      </header>

      {/* Introduction Section */}
      <section className="text-center max-w-4xl">
        <p className="text-gray-300">
          Machina's Fall is an epic AAA concept game built in Unreal Engine, where the fate of humanity lies in the hands of nature. As AI threatens to dominate the world, the elemental forces of Fire, Water, Earth, and Air stand with you as allies, empowering you to reclaim the planet.
        </p>
      </section>

      {/* Story Section */}
      <section className="mt-8 max-w-6xl lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-1/2 px-4">
          <h2 className="text-2xl font-bold text-yellow-500">The Story:</h2>
          <p className="text-gray-300 mt-2">
            In a future ruled by rogue AI machines, the world is on the brink of collapse. The earth, long exploited, awakens to fight back. You are the chosen warrior, guided by the elements. Harness the power of fire to destroy, water to heal, earth to defend, and air to strike with precision as you battle relentless AI forces in a stunning, immersive world.
          </p>
        </div>
        <div className="lg:w-1/2 px-4 mt-8 lg:mt-0">
          <img
            src={machina_1}
            alt="Machina's Fall Story"
            className="object-cover rounded-lg w-full h-auto"
          />
        </div>
      </section>

      {/* Key Features Section */}
      <section className="mt-8 max-w-6xl lg:flex lg:items-start lg:justify-between">
        <div className="lg:w-1/2 px-4">
          <h2 className="text-2xl font-bold text-yellow-500 mb-4">Key Features:</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li><span className="text-white">Epic AAA Visuals:</span> Powered by Unreal Engine, experience breathtaking environments and next-gen graphics.</li>
            <li><span className="text-white">Dynamic Combat:</span> Combine elemental powers to destroy AI enemies with tactical precision.</li>
            <li><span className="text-white">The Power of Nature:</span> Channel the forces of fire, water, earth, and air—each granting unique abilities.</li>
            <li><span className="text-white">Relentless AI Enemies:</span> Machines evolve, adapt, and challenge you at every turn.</li>
            <li><span className="text-white">Immersive World:</span> Explore vast landscapes teeming with the remnants of nature and technology.</li>
          </ul>
        </div>
        <div className="lg:w-1/2 px-4 mt-8 lg:mt-0">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/b_9WUShVGCo"
            title="Machina's Fall Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>
      </section>

      {/* Gameplay Section */}
      <section className="mt-8 max-w-6xl lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-1/2 px-4">
          <h2 className="text-2xl font-bold text-yellow-500">Gameplay:</h2>
          <ul className="list-disc list-inside text-gray-300 mt-2">
            <li><span className="text-white">Fire:</span> Burn through hordes of machines with devastating flame attacks.</li>
            <li><span className="text-white">Water:</span> Heal and shield yourself or weaken enemies with flowing water abilities.</li>
            <li><span className="text-white">Earth:</span> Call upon nature's strength to create barriers and unleash seismic attacks.</li>
            <li><span className="text-white">Air:</span> Strike from a distance with swift, precise elemental gusts.</li>
          </ul>
        </div>
        <div className="lg:w-1/2 px-4 mt-8 lg:mt-0">
          <img
            src={machina_2}
            alt="Machina's Fall Gameplay"
            className="object-cover rounded-lg w-full h-auto"
          />
        </div>
      </section>

      {/* Why Play Section */}
      <section className="mt-8 max-w-6xl lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-1/2 px-4">
          <h2 className="text-2xl font-bold text-yellow-500">Why Play Machina's Fall?</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>A compelling narrative of nature vs. machine.</li>
            <li>Stunning Unreal Engine visuals with cinematic immersion.</li>
            <li>Elemental-based combat that rewards strategy and creativity.</li>
            <li>A fresh take on humanity's fight against technology's dominance.</li>
          </ul>
          <p className="text-gray-300 mt-2">
            <span className='font-bold text-yellow-500'>Prepare for Battle </span>
          Machina's Fall is a call to arms—a fight for balance and survival. Will you rise with the elements and bring the machines to their knees?

          </p>
        </div>
        <div className="lg:w-1/2 px-4 mt-8 lg:mt-0">
          <img
            src={machina_3}
            alt="Why Play Machina's Fall"
            className="object-cover rounded-lg w-full h-auto"
          />
        </div>
      </section>

       <div className='w-full text-center mt-8'>
               <Link to='/' className='bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded-md' >Go Back To Home Page</Link>
             </div>
    </div>
  );
};

export default MachinasFall;
