import PortfolioSection from '@/components/organisms/PortfolioSection';
import { portfolios } from '@/constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Karolina Guzik - My Portfolio',
};

const page = () => {
    return <PortfolioSection data={portfolios} title={'Projetcs'} />;
};

export default page;
