import React from 'react';
import { Link } from 'react-router-dom';
import { flip_1, flip_2, flip_3 } from '..';

const FlipCoin = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center p-4">
            {/* Header Section */}
            <header className="text-center my-8">
                <h1 className="text-4xl font-bold text-yellow-500">Welcome to Flip Coin</h1>
                <p className="text-lg mt-2">Flip, Dodge, and Score Big!</p>
            </header>

            {/* Introduction Section */}
            <section className="text-center max-w-4xl">
                <p className="text-gray-300 pb-6">
                    Flip Coin is a fun and arcade game inspired by the classic gameplay of Flip Birds. Navigate a coin through obstacles, test reflexes, and aim for the highest score!
                </p>
                <a href="https://purv-prabhakar.itch.io/flap-coin" target='__blank'>
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

            {/* Game Features Section */}
            <section className="mt-8 max-w-6xl lg:flex lg:items-start lg:justify-between">
                <div className="lg:w-1/2 px-4">
                    <h2 className="text-2xl font-bold text-yellow-500 mb-4">Game Features:</h2>
                    <ul className="list-disc list-inside text-gray-300">
                        <li><span className="text-white">Simple Yet Challenging Gameplay:</span> Tap to keep the coin afloat and dodge the pipes.</li>
                        <li><span className="text-white">Endless Fun:</span> The challenge never stops—how far can you go?</li>
                        <li><span className="text-white">Retro-Inspired Design:</span> Nostalgic visuals with pixel art charm.</li>
                        <li><span className="text-white">High Score Challenge:</span> Compete with yourself or friends for the top score.</li>
                    </ul>
                </div>
                <div className="lg:w-1/2 px-4 mt-8 lg:mt-0">
                    <iframe
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/NwPMGpjcSFY"
                        title="Flip Coin Gameplay Trailer"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-lg"
                    ></iframe>
                </div>
            </section>

            {/* How to Play Section */}
            <section className="mt-8 max-w-6xl lg:flex lg:items-center lg:justify-between">
                <div className="lg:w-1/2 px-4">
                    <h2 className="text-2xl font-bold text-yellow-500">How to Play:</h2>
                    <ul className="list-disc list-inside text-gray-300 mt-2">
                        <li>Tap to make the coin flip upwards.</li>
                        <li>Time your taps carefully to avoid hitting obstacles.</li>
                        <li>Keep flipping, dodge the pipes, and rack up points!</li>
                    </ul>
                </div>
                <div className="lg:w-1/2 px-4">
                    <img src={flip_2} alt='flipcoin' className='object-cover rounded-lg w-full h-auto' />
                </div>
            </section>

            {/* Why Play Section */}
            <section className="mt-8 max-w-6xl lg:flex lg:items-center lg:justify-between">
                <div className="lg:w-1/2 px-4">
                    <h2 className="text-2xl font-bold text-yellow-500">Why Play Flip Coin?</h2>
                    <ul className="list-disc list-inside text-gray-300">
                        <li>It's a perfect game for quick, casual fun.</li>
                        <li>Simple controls that anyone can pick up and play.</li>
                        <li>Addictive gameplay that keeps you coming back for more.</li>
                    </ul>
                </div>
                <div className="lg:w-1/2 px-4">
                    <img src={flip_3} alt='flipcoin' className='object-cover rounded-lg w-full h-auto' />
                </div>
            </section>

            <div className='w-full text-center mt-8'>
                <Link to='/' className='bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded-md'>Go Back To Home Page</Link>
            </div>
        </div>
    );
};

export default FlipCoin;
