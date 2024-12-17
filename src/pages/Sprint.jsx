import React from 'react';
import { sprint_1,sprint_2,sprint_3 } from '..';
import { Link } from 'react-router-dom';

const SprintGame = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center p-4">
      {/* Header Section */}
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold text-yellow-500">Welcome to Sprint</h1>
        <p className="text-lg mt-2">Run, Jump, and Survive!</p>
      </header>

      {/* Introduction Section */}
      <section className="text-center max-w-4xl">
        <p className="text-gray-300">
          Inspired by the iconic offline dinosaur game, Sprint brings you endless, minimalist fun with a modern twist. Navigate the obstacles, time your jumps perfectly, and see how far you can go!
        </p>
      </section>

      {/* Story Section */}
      <section className="mt-8 max-w-6xl lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-1/2 px-4">
          <h2 className="text-2xl font-bold text-yellow-500">The Story:</h2>
          <p className="text-gray-300 mt-2">
            In a fast-paced world where you must sprint to survive, obstacles arise at every turn. Your goal? Keep running, avoid obstacles, and push your limits to achieve the highest score. But beware! The pace picks up the longer you run. Will you make it or stumble?
          </p>
        </div>
        <div className="lg:w-1/2 px-4 mt-8 lg:mt-0">
          <img
            src={sprint_1}
            alt="Sprint Game Story"
            className="object-cover rounded-lg w-full h-auto"
          />
        </div>
      </section>

      {/* Key Features Section */}
      <section className="mt-8 max-w-6xl lg:flex lg:items-start lg:justify-between">
        <div className="lg:w-1/2 px-4">
          <h2 className="text-2xl font-bold text-yellow-500 mb-4">Key Features:</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li><span className="text-white">Endless Running Fun:</span> The game keeps going as long as you can survive.</li>
            <li><span className="text-white">Simple Yet Addictive:</span> Minimalist design with smooth gameplay.</li>
            <li><span className="text-white">Challenge Your Reflexes:</span> Obstacles appear faster the longer you sprint.</li>
            <li><span className="text-white">Scoreboard Bragging Rights:</span> Compete with yourself and friends for the highest score.</li>
          </ul>
        </div>
        <div className="lg:w-1/2 px-4 mt-8 lg:mt-0">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/e3PNQ70isgA"
            title="Sprint Gameplay Trailer"
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
            <li><span className="text-white">Run:</span> Keep moving forward to avoid obstacles and keep your momentum.</li>
            <li><span className="text-white">Jump:</span> Press the spacebar to leap over obstacles and avoid being hit.</li>
            <li><span className="text-white">Score:</span> The longer you run, the higher your score will be. Try to beat your best score!</li>
          </ul>
        </div>
        <div className="lg:w-1/2 px-4 mt-8 lg:mt-0">
          <img
            src={sprint_2}
            alt="Sprint Gameplay"
            className="object-cover rounded-lg w-full h-auto"
          />
        </div>
      </section>

      {/* Why Play Section */}
      <section className="mt-8 max-w-6xl lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-1/2 px-4">
          <h2 className="text-2xl font-bold text-yellow-500">Why Play Sprint?</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Quick and engaging gameplay for all ages.</li>
            <li>Perfect for casual gamers and quick breaks.</li>
            <li>A nostalgic yet fresh take on a timeless classic.</li>
          </ul>
          <p className="text-gray-300 mt-2">
            <span className="font-bold text-yellow-500">Get Ready to Sprint!</span> Jump into the action and see how far you can go. The longer you last, the harder it gets. Are you up for the challenge?
          </p>
        </div>
        <div className="lg:w-1/2 px-4 mt-8 lg:mt-0">
          <img
            src={sprint_3}
            alt="Why Play Sprint"
            className="object-cover rounded-lg w-full h-auto"
          />
        </div>
      </section>

      <div className="w-full text-center mt-8">
        <Link to="/" className="bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded-md">
          Go Back To Home Page
        </Link>
      </div>
    </div>
  );
};

export default SprintGame;
