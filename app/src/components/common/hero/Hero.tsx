/* eslint-disable @next/next/no-img-element */
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

export interface HeroProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const Hero: React.FC<HeroProps> = ({ title, description, imageSrc, imageAlt }) => {
  return (
    <div className={clsx("relative flex items-center justify-center w-screen h-screen bg-gray-100", styles.container)}>
      <img
        src={imageSrc}
        alt={imageAlt}
        className={clsx("absolute inset-0 object-cover w-full h-full -z-10", styles.image)}
      />
      <div className={clsx("relative z-10 p-4 text-center text-white bg-black bg-opacity-50 rounded-lg lg:p-8", styles.text)}>
        <h1 className={clsx("mb-4 text-2xl font-bold xsm:text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl")}>
          {title}
        </h1>
        <p className={clsx("mb-6 text-base xsm:text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl")}>
          {description}
        </p>
        <button className={clsx("px-4 py-2 transition duration-300 bg-blue-500 rounded hover:bg-blue-600")}>
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Hero;
