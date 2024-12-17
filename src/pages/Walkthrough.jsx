import React from 'react';
import { animationWalkthrough } from ".."; // Ensure the correct path to the file

const Walkthrough = () => {
  return (
    <div className="lg:my-16 my-8 px-4 sm:px-6 lg:px-24">
      <h2 className="text-3xl text-black underline underline-offset-8 font-bold text-center mb-8">Animation Walk Through</h2>
      
      <div className="flex flex-wrap justify-center items-center gap-8">
        {animationWalkthrough.map((video) => (
          <div key={video.id} className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <iframe
              width="100%"
              height="350px"
              src={`https://www.youtube.com/embed/${video.videoId}`}
              title={video.name}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
            <p className="text-xl bg-black text-white p-4 font-semibold text-center w-full mt-4">{video.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Walkthrough;
