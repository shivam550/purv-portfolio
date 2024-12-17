import React from 'react';
import { Link } from 'react-router-dom';

const SafetyGame = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center p-4">
            {/* Header Section */}
            <header className="text-center my-8">
                <h1 className="text-4xl font-bold text-yellow-500">Welcome to Safety</h1>
                <p className="text-lg mt-2">Dodge. Survive. Score Big.</p>
            </header>

            {/* Introduction Section */}
            <section className="text-center max-w-4xl">
                <p className="text-gray-300">
                    Experience the adrenaline rush of Safety, a thrilling endless arcade-style game where you ride a powerful injection and face off against an onslaught of viruses. Your mission? Dodge the viruses, survive as long as you can, and achieve the highest score possible!
                </p>
            </section>

            {/* Key Features Section */}
            <section className="mt-8 max-w-6xl lg:flex lg:items-start lg:justify-between">
                <div className="lg:w-1/2 px-4">
                    <h2 className="text-2xl font-bold text-yellow-500 mb-4">Key Features:</h2>
                    <ul className="list-disc list-inside text-gray-300">
                        <li><span className="text-white">Never-Ending Gameplay:</span> The challenge intensifies as you progress—how long can you last?</li>
                        <li><span className="text-white">Intuitive Controls:</span> Easy to learn, but demands lightning-fast reflexes to master.</li>
                        <li><span className="text-white">Addictive Fun:</span> A perfect mix of action and strategy to keep you coming back for more.</li>
                        <li><span className="text-white">Global Leaderboard:</span> Compete with players around the world for the top score.</li>
                    </ul>
                </div>
                <div className="lg:w-1/2 px-4 mt-8 lg:mt-0">
                    <iframe
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/FvVYOdIc0Zc"
                        title="Safety Gameplay Trailer"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-lg"
                    ></iframe>
                </div>
            </section>

            {/* Challenge Section */}
            <section className="mt-8 max-w-6xl text-center">
                <h2 className="text-2xl font-bold text-yellow-500">The Challenge:</h2>
                <p className="text-gray-300 mt-2 mb-5">
                    The viruses are relentless, and your survival depends on your ability to dodge, swerve, and stay in the game. The longer you last, the faster the viruses move. Can you keep up?
                </p>

                <a href="https://purv-prabhakar.itch.io/be-safe" target='__blank'>
                    <button class="relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-[16px] bg-gradient-to-t from-yellow-500 to-yellow-400 active:scale-95">
                        <span class="w-full h-full flex items-center gap-2 px-8 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-[14px] bg-gradient-to-t from-yellow-400 to-yellow-300">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                <path d="M8 13V9m-2 2h4m5-2v.001M18 12v.001m4-.334v5.243a3.09 3.09 0 0 1-5.854 1.382L16 18a3.618 3.618 0 0 0-3.236-2h-1.528c-1.37 0-2.623.774-3.236 2l-.146.292A3.09 3.09 0 0 1 2 16.91v-5.243A6.667 6.667 0 0 1 8.667 5h6.666A6.667 6.667 0 0 1 22 11.667Z"></path>
                            </svg>
                            Play Game
                        </span>
                    </button>
                </a>


            </section>



            {/* Why Play Section */}
            <section className="mt-8 max-w-6xl lg:flex lg:items-center lg:justify-between">
                <div className="lg:w-1/2 px-4">
                    <h2 className="text-2xl font-bold text-yellow-500">Why Play "Safety"?</h2>
                    <ul className="list-disc list-inside text-gray-300">
                        <li>A fun and engaging way to test your reflexes.</li>
                        <li>Suitable for quick gaming breaks or endless sessions.</li>
                        <li>A game that anyone can play, but only the best can master it.</li>
                    </ul>

                </div>
                <div className="lg:w-1/2 px-4">
                    <h2 className="text-2xl font-bold text-yellow-500">How to Play:</h2>
                    <ul className="list-disc list-inside text-gray-300 mt-2">
                        <li>Use arrow keys to navigate the injection.</li>
                        <li>Avoid colliding with viruses.</li>
                        <li>Score points by surviving for as long as you can!</li>
                    </ul>
                </div>
            </section>

            <div className='w-full text-center mt-8'>
                <Link to='/' className='bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded-md' >Go Back To Home Page</Link>
            </div>


        </div>
    );
};

export default SafetyGame;
