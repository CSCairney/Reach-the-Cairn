/* eslint-disable @next/next/no-img-element */
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import { Button } from '../button/Button';
import Link from 'next/link';

export interface HeroProps {
  title?: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
  link?: string;
}

const Hero: React.FC<HeroProps> = ({ title, description, imageSrc, imageAlt, link }) => {
  return (
    <div className={clsx("relative flex items-center justify-center w-screen h-screen bg-gray-100", styles.container)}>
      <img
        src={imageSrc}
        alt={imageAlt}
        className={clsx("absolute inset-0 object-cover w-full h-full -z-10", styles.image)}
      />
      <div className={clsx("relative z-10 p-4 text-center text-white bg-black bg-opacity-50 rounded-lg lg:p-8", styles.text)}>
        {title && <h1 className={clsx("mb-4 text-2xl font-bold xsm:text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl")}>
          {title}
        </h1>}
        {description && <p className={clsx("mb-6 text-base xsm:text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl")}>
          {description}
        </p>}
        {link && <Button variant="secondary" size="lg">
          <Link href="/art">Checkout some new art</Link>
        </Button>}
      </div>
    </div>
  );
};

export default Hero;
