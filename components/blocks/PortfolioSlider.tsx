'use client';

import { FC, useEffect, useRef, useState } from 'react';
import PortfolioCard from '../molecules/PortfolioCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import { useWindowSize } from '@/hooks/useWindowSize';
import SectionHeading from '../atoms/SectionHeading';
import Container from '../atoms/Container';
import { PortfolioItem } from '@/types/types';
import Button from '../atoms/Button';

type PortfolioSliderProps = {
    data: PortfolioItem[];
    title?: string;
};

const PortfolioSlider: FC<PortfolioSliderProps> = ({ data, title }) => {
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
                    title='My Works'
                    subtitle="Here's what some of my recent development projects look like."
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
                <div className={styles.sliderWrapper}>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={slidesPerView}
                        loop={true}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                    >
                        {data.slice(0, 4).map((portfolio, index) => (
                            <SwiperSlide key={index}>
                                <PortfolioCard
                                    portfolio={portfolio}
                                    index={index}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className={styles.buttonWrapper} data-aos='fade-up'>
                    <Button text={'View all projects'} url={'/portfolio'} />
                </div>
            </Container>
        </section>
    );
};

const styles = {
    above: 'pb-3 border-b border-grey-200 flex justify-between items-center',
    aboveText: 'text-grey-600 text-sm font-medium',
    sliderWrapper: 'pt-8',
    sliderButtonsWrapper: 'flex gap-2',
    sliderButton:
        'bg-violet-dark border border-violet-dark p-1 rounded-[10px] text-white hover:bg-violet transition-colors',
    buttonWrapper: 'flex justify-center mt-10 lg:mt-20',
};

export default PortfolioSlider;
