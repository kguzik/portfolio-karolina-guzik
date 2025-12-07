import Hero from '@/components/blocks/Hero';
import Skills from '@/components/blocks/Skills';
import { portfolios, skills } from '@/constants';
import PortfolioSlider from '@/components/blocks/PortfolioSlider';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Karolina Guzik - Frontend Developer',
  description:
    "I'm a detail-oriented Frontend Developer, experienced with various technologies including React.js, Next.js, Svelte, JavaScript, TypeScript and PHP, focusing on creating responsive, high performance websites.",
};

const page = () => {
  return (
    <>
      <Hero
        title={"I'm Karolina Guzik"}
        preheading={'Hello there'}
        imagePosition={'right'}
        content={
          "I'm a detail-oriented Frontend Developer, experienced with various technologies including React.js, Next.js, Svelte, JavaScript, TypeScript and PHP, focusing on creating responsive, high performance websites."
        }
      />
      <Skills data={skills} />
      <PortfolioSlider data={portfolios} title={'Projects'} />
    </>
  );
};

export default page;
