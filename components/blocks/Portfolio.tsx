import Container from '../atoms/Container';
import SectionHeading from '../atoms/SectionHeading';
import PortfolioCard from '@/components/molecules/PortfolioCard';
import { FC } from 'react';
import { PortfolioItem } from '@/types/types';

type PortfolioProps = {
    data: PortfolioItem[];
};

const Portfolio: FC<PortfolioProps> = ({ data }) => {
    if (!data?.length) {
        return null;
    }

    return (
        <section className='section-spacing'>
            <Container>
                <SectionHeading
                    title='Portfolio'
                    subtitle='Check out some of my projects!'
                />
                <div className={styles.portfolioWrapper}>
                    {data.map((portfolio, index) => (
                        <PortfolioCard
                            key={index}
                            portfolio={portfolio}
                            index={index}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
};

const styles = {
    portfolioWrapper:
        'grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-[24px]',
};

export default Portfolio;
