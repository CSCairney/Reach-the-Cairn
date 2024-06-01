/* eslint-disable @next/next/no-img-element */
import React from 'react';

export interface HeroProps {
  title: string;
  description: string;
  image: string;
}

const Hero: React.FC<HeroProps> = ({ title, description, image }) => {
  return (
    <div className="flex flex-col-reverse items-center p-4 bg-gray-100 lg:flex-row lg:p-8">
      <div className="flex-1 text-center lg:pr-8 lg:text-left">
        <h1 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">{title}</h1>
        <p className="mb-6 text-lg sm:text-xl md:text-2xl lg:text-3xl">{description}</p>
        <button className="px-4 py-2 text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-600">
          Learn More
        </button>
      </div>
      <div className="flex-1 mb-6 lg:mb-0">
        <img src={image} alt="Hero" className="w-full h-auto rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default Hero;
