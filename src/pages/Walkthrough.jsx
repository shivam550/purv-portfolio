import React from 'react';
import { animationWalkthrough } from ".."; // Ensure the correct path to the file

const Walkthrough = () => {
    return (


        <div className='lg:my-16 my-8'>
       <h2 className="text-3xl text-black underline underline-offset-8 font-bold text-center mb-8">Animation Walk Through</h2>
       <div className='flex flex-wrap justify-center items-center my-16'>
            {animationWalkthrough.map((video) => (
                <div key={video.id} className="m-8">
                   
                    <iframe
                        width="650"
                        height="500"
                        src={`https://www.youtube.com/embed/${video.videoId}`}
                        title={video.name}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                     <p className="text-xl h-18 bg-black text-white p-4 font-semibold text-center">{video.name}</p>
                </div>
            ))}
        </div>
        </div>
        
    );
}

export default Walkthrough;
