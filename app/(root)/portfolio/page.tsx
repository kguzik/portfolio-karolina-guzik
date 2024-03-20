import Portfolio from '@/components/blocks/Portfolio';
import { portfolios } from '@/constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Karolina Guzik - My Portfolio',
};

const page = () => {
    return <Portfolio data={portfolios} />;
};

export default page;
