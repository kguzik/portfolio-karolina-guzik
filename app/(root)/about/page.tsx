import Hero from '@/components/organisms/Hero';
import { Metadata } from 'next';
import Timeline from '@/components/organisms/Timeline';
import { timeline } from '@/constants';

export const metadata: Metadata = {
    title: 'Karolina Guzik - About Me',
};

const page = () => {
    return (
        <>
            <Hero
                title={"I'm Karolina Guzik"}
                preheading={'Frontend Developer'}
                imagePosition={'left'}
                content={
                    'I have around 5 years of experience in IT and have participated in the creation of dozens of websites. Check out my work experience below!'
                }
            />
            <Timeline data={timeline} />
        </>
    );
};

export default page;
