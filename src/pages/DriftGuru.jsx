import React from 'react';
import { drift_1, drift_2 } from '..';
import { Link } from 'react-router-dom';
const DriftGuru = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center p-4">
      {/* Header Section */}
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold text-yellow-500">Welcome to Drift Guru</h1>
        <p className="text-lg mt-2">Master the Art of Precision Drifting!</p>
      </header>

      {/* Introduction Section */}
      <section className="text-center max-w-4xl">
        <p className="text-gray-300">
          Drift Guru puts you in the driver’s seat of a thrilling 3D car game where speed, skill, and style are everything. Test your reflexes, perfect your drifts, and dominate challenging tracks with smooth, fast-paced gameplay!
        </p>
      </section>

      {/* Key Features Section */}
      <section className="mt-8 max-w-6xl lg:flex lg:items-start lg:justify-between">
        <div className="lg:w-1/2 px-4">
          <h2 className="text-2xl font-bold text-yellow-500 mb-4">Key Features:</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li><span className="text-white">Stunning 3D Graphics:</span> Immerse yourself in detailed environments and realistic car visuals.</li>
            <li><span className="text-white">Precision Drifting Mechanics:</span> Feel the rush as you slide through corners with skillful control.</li>
            <li><span className="text-white">Challenging Tracks:</span> Navigate sharp turns, avoid obstacles, and push your drifting to the limit.</li>
            <li><span className="text-white">Endless Replayability:</span> Beat your best time and prove you’re the ultimate Drift Guru!</li>
          </ul>
        </div>
        <div className="lg:w-1/2 px-4 mt-8 lg:mt-0">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/gNy5IDIcqqU"
            title="Drift Guru"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="mt-8 max-w-6xl lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-1/2 px-4">
          <h2 className="text-2xl font-bold text-yellow-500">The Challenge:</h2>
          <p className="text-gray-300 mt-2">
            Your goal is to drift like a pro—maintain control, nail those corners, and race against the clock. The better your drifts, the higher your score. Can you claim the title of the Drift Guru?
          </p>
          <h2 className="text-2xl font-bold text-yellow-500 mb-4 mt-4">Why Play Drift Guru?</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>A perfect mix of racing and drifting excitement.</li>
            <li>Smooth, intuitive controls for a seamless experience.</li>
            <li>Designed for car enthusiasts and gamers of all skill levels.</li>
          </ul>
        </div>
        <div className="lg:w-1/2 px-4 mt-8 lg:mt-0">
          <img
            src={drift_1}
            alt="Drift Challenge"
            className="object-cover rounded-lg w-full h-auto"
          />
        </div>
      </section>

      {/* How to Play Section */}
      <section className="mt-8 max-w-6xl lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-1/2 px-4">
          <h2 className="text-2xl font-bold text-yellow-500">How to Play:</h2>
          <ol className="list-decimal list-inside text-gray-300 mt-2">
            <li>Use arrow keys to steer your car.</li>
            <li>Drift through turns and avoid crashes.</li>
            <li>Rack up points and show off your skills!</li>
          </ol>
          <p className="text-gray-300 mt-2">
            Prepare to burn rubber, drift with precision, and prove your mastery. The road is yours in Drift Guru!
          </p>
          <p className="text-gray-300 mt-2">
          <span className='font-bold text-yellow-500'>Start Drifting Now </span>
           Prepare to burn rubber, drift with precision, and prove your mastery. The road is yours in Drift Guru!
        </p>
        </div>
        <div className="lg:w-1/2 px-4 mt-8 lg:mt-0">
          <img
            src={drift_2}
            alt="Drift Tips"
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

export default DriftGuru;
