import Hero from '@/components/common/hero/Hero';

export const Header = () => {
  return (
    <Hero
      title='Reach the Cairn'
      description='This is the landing page of reach the cairn'
      imageSrc={'/assets/home/header-image.jpg'}
      imageAlt={'Home header image'}
    />
  );
};
