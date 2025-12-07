import Hero from '@/components/blocks/Hero';
import { Metadata } from 'next';
import Timeline from '@/components/blocks/Timeline';
import { timeline } from '@/constants';

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
          'I have around 6 years of experience in IT and have participated in the creation of dozens of websites. Check out my work experience below!'
        }
      />
      <Timeline data={timeline} />
    </>
  );
};

export default page;
