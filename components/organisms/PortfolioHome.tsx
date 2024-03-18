import Container from '../atoms/Container';
import SectionHeading from '../atoms/SectionHeading';
import PortfolioCard from '@/components/atoms/PortfolioCard';
import Button from '@/components/atoms/Button';
import { FC } from 'react';
import { PortfolioItem } from '@/types/types';

type PortfolioHomeProps = {
    data: PortfolioItem[];
};

const PortfolioHome: FC<PortfolioHomeProps> = ({ data }) => {
    if (!data?.length) {
        return null;
    }

    return (
        <section className='section-spacing'>
            <Container>
                <SectionHeading
                    title='My Works'
                    subtitle="Here's what some of my recent development projects look like."
                />
                <div className={styles.portfolioWrapper}>
                    {data.slice(0, 2).map((portfolio, index) => (
                        <PortfolioCard
                            key={index}
                            portfolio={portfolio}
                            index={index}
                        />
                    ))}
                </div>

                <div className='flex justify-center mt-[40px]'>
                    <Button text={'View all projects'} url={'/portfolio'} />
                </div>
            </Container>
        </section>
    );
};

const styles = {
    portfolioWrapper:
        'grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-[24px]',
};

export default PortfolioHome;
