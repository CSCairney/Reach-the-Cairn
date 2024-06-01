import Hero from '@/components/common/hero/Hero';

export const Header = () => {
  return (
    <Hero
      title='REACH THE CAIRN'
      description='Explore the unknown with our latest collection of art pieces.'
      imageSrc={'/assets/home/header-image.jpg'}
      imageAlt={'Home header image'}
    />
  );
};
