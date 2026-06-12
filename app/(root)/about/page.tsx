import Hero from '@/components/blocks/Hero';
import { Metadata } from 'next';
import Timeline from '@/components/blocks/Timeline';
import Certificates from '@/components/blocks/Certificates';
import { timeline, certificates } from '@/constants';

export const metadata: Metadata = {
  title: 'Karolina Guzik - About Me',
  description:
    'Learn more about my journey as a frontend developer, my skills, and my experiences.',
};

const page = () => {
  return (
    <>
      <Hero
        title={"I'm Karolina Guzik"}
        preheading={'Frontend Developer'}
        imagePosition={'left'}
        content={
          "I'm an experienced Frontend Developer - from WordPress and PHP-based sites to modern React and TypeScript applications. I've worked on complex web applications, headless e-commerce storefronts, and a large-scale migration project. Check out my work experience below!"
        }
      />
      <Timeline data={timeline} />
      <Certificates data={certificates} />
    </>
  );
};

export default page;
