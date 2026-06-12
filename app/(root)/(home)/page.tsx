import Hero from '@/components/blocks/Hero';
import Skills from '@/components/blocks/Skills';
import { portfolios, description, skills } from '@/constants';
import PortfolioSlider from '@/components/blocks/PortfolioSlider';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Karolina Guzik - Frontend Developer',
  description: description,
};

const page = () => {
  return (
    <>
      <Hero
        title={"I'm Karolina Guzik"}
        preheading={'Hello there'}
        imagePosition={'right'}
        content={description}
      />
      <Skills data={skills} />
      <PortfolioSlider data={portfolios} title={'Projects'} />
    </>
  );
};

export default page;
