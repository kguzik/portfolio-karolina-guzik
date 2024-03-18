'use client';

import { FC, useEffect, useRef, useState } from 'react';
import PortfolioCard from '../atoms/PortfolioCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import { useWindowSize } from '@/hooks/useWindowSize';
import SectionHeading from '../atoms/SectionHeading';
import Container from '../atoms/Container';
import { PortfolioItem } from '@/types/types';

type PortfolioSectionProps = {
    data: PortfolioItem[];
    title?: string;
};

const PortfolioSection: FC<PortfolioSectionProps> = ({ data, title }) => {
    const swiperRef = useRef<SwiperType>();
    const [slidesPerView, setSlidesPerView] = useState(3);
    const { width } = useWindowSize();

    useEffect(() => {
        if (width < 1024) {
            setSlidesPerView(1);
        } else {
            setSlidesPerView(2);
        }
    }, [width]);

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
                <div className={styles.above} data-aos='fade-down'>
                    <p className={styles.aboveText}>{title}</p>
                    <div className={styles.sliderButtonsWrapper}>
                        <button
                            className={styles.sliderButton}
                            onClick={() => swiperRef.current?.slidePrev()}
                        >
                            <ChevronLeft />
                        </button>
                        <button
                            className={styles.sliderButton}
                            onClick={() => swiperRef.current?.slideNext()}
                        >
                            <ChevronRight />
                        </button>
                    </div>
                </div>

                <div className='pt-[32px]'>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={slidesPerView}
                        loop={true}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                    >
                        {data.map((portfolio, index) => (
                            <SwiperSlide key={index}>
                                <PortfolioCard
                                    portfolio={portfolio}
                                    index={index}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </Container>
        </section>
    );
};

const styles = {
    above: 'pb-[12px] border-b border-grey-200 flex justify-between items-center',
    aboveText: 'text-grey-600 text-sm font-medium',
    sliderButtonsWrapper: 'flex gap-[8px]',
    sliderButton:
        'bg-violet-dark border border-violet-dark p-[4px] rounded-[10px] text-white hover:bg-violet transition-colors',
};

export default PortfolioSection;