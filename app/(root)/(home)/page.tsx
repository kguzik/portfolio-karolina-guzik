import Hero from '@/components/organisms/Hero';
import Skills from '@/components/organisms/Skills';
import PortfolioHome from '@/components/organisms/PortfolioHome';
import { portfolios, skills } from '@/constants';

const page = () => {
    return (
        <>
            <Hero
                title={"I'm Karolina Guzik"}
                preheading={'Hello there'}
                imagePosition={'right'}
                content={
                    "I'm a detail-oriented Frontend Developer, experienced with various technologies including WordPress, PHP, JavaScript, React.js, and Next.js, focusing on creating responsive, high performance websites."
                }
            />
            <Skills data={skills} />
            <PortfolioHome data={portfolios} />
        </>
    );
};

export default page;
