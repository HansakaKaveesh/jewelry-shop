// components/ParallaxSection.tsx
import React from 'react';

const ParallaxSection = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `url('/bg3.jpg')`, // Replace with a jewelry-related image in your /public folder
        }}
      />
      <div className="relative z-10 flex items-center justify-center h-full bg-black/50 ">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-wide">
            Discover Timeless Elegance
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200">
            Fine Jewelry Crafted with Passion and Precision
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParallaxSection;
