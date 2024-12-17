import React from 'react';

import { neon_1, neon_2 ,neon_3 } from '..';
import { Link } from 'react-router-dom';


const NeonHunter = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center p-4">
      {/* Header Section */}
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold text-yellow-500">Welcome to Neon Hunter</h1>
        <p className="text-lg mt-2">Hunt. Survive. Conquer the Neon Night.</p>
      </header>

      {/* Introduction Section */}
      <section className="text-center max-w-4xl">
        <p className="text-gray-300">
          Enter the electrifying world of Neon Hunter, a futuristic First-Person Shooter (FPS) where you battle swarms of menacing bats in a neon-drenched dystopian universe. Your reflexes, precision, and courage will determine how long you survive against the darkness.
        </p>
      </section>

      {/* Key Features Section */}
      <section className="mt-8 max-w-6xl lg:flex lg:items-start lg:justify-between">
        <div className="lg:w-1/2 px-4">
          <h2 className="text-2xl font-bold text-yellow-500 mb-4">Key Features:</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li><span className="text-white">Stunning Unreal Engine 5 Visuals:</span> Immerse yourself in vibrant neon-lit environments with hyper-realistic graphics.</li>
            <li><span className="text-white">Relentless Enemies:</span> Swarms of hostile bats attack from all directions—are your reflexes fast enough?</li>
            <li><span className="text-white">Adrenaline-Fueled Combat:</span> Smooth first-person controls and satisfying shooting mechanics for intense action.</li>
            <li><span className="text-white">Dynamic Difficulty:</span> The longer you survive, the faster and smarter the bats become.</li>
          </ul>
        </div>
        <div className="lg:w-1/2 px-4 mt-8 lg:mt-0">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/vfZI5L40nQM"
            title="Neon Hunter Gameplay"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>
      </section>

      {/* Story Section */}
      <section className="mt-8 max-w-6xl lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-1/2 px-4">
          <h2 className="text-2xl font-bold text-yellow-500">The Story:</h2>
          <p className="text-gray-300 mt-2">
            In a world shrouded in neon and shadow, bats have evolved into lethal hunters, threatening humanity's last refuge. As the Neon Hunter, you are humanity’s final hope. Armed with advanced weaponry, you must fight off waves of bats, eliminate the threat, and survive the neon night.
          </p>
        </div>
        <div className="lg:w-1/2 px-4 mt-8 lg:mt-0">
          <img
            src={neon_1}
            alt="Neon Hunter Story"
            className="object-cover rounded-lg w-full h-auto"
          />
        </div>
      </section>

      {/* Why Play Section */}
      <section className="mt-8 max-w-6xl lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-1/2 px-4">
          <h2 className="text-2xl font-bold text-yellow-500">Why Play Neon Hunter?</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Intense, Fast-Paced Gameplay: A true test of your aim, reflexes, and survival instincts.</li>
            <li>Immersive Audio-Visual Experience: Unreal Engine 5 delivers breathtaking visuals and atmospheric sound design.</li>
            <li>Endless Challenge: Face increasingly difficult waves of enemies in a fight for survival.</li>
            <li>Satisfying Combat Mechanics: Enjoy smooth shooting and precision controls as you take down hordes of bats.</li>
          </ul>
        </div>
        <div className="lg:w-1/2 px-4 mt-8 lg:mt-0">
          <img
            src={neon_2}
            alt="Why Play Neon Hunter"
            className="object-cover rounded-lg w-full h-auto"
          />
        </div>
      </section>

      {/* How to Play Section */}
      <section className="mt-8 max-w-6xl lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-1/2 px-4">
          <h2 className="text-2xl font-bold text-yellow-500">How to Play:</h2>
          <ol className="list-decimal list-inside text-gray-300 mt-2">
            <li>Use WASD to move and the mouse to aim/shoot.</li>
            <li>Press Space to jump and navigate the neon world.</li>
            <li>Hunt bats, shoot with precision, and dodge their attacks.</li>
            <li>Survive waves of increasingly aggressive bats to rack up your score.</li>
          </ol>
          <p className="text-gray-300 mt-2">
            <span className='font-bold text-yellow-500'>Start the Hunt </span>
            Are you ready to face the darkness, fight the swarms, and become the ultimate Neon Hunter? Step into the neon battlefield—humanity is counting on you.

          </p>
        </div>
        <div className="lg:w-1/2 px-4 mt-8 lg:mt-0">
          <img
            src={neon_3}
            alt="How to Play Neon Hunter"
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

export default NeonHunter;
