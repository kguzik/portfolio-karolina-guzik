'use client';

import { FC } from 'react';
import SectionHeading from '../atoms/SectionHeading';
import Container from '../atoms/Container';
import { TimelineItem } from '@/types/types';

type TimelineProps = {
    data: TimelineItem[];
};

const Timeline: FC<TimelineProps> = ({ data }) => {
    if (!data?.length) {
        return null;
    }

    return (
        <section className='section-spacing'>
            <Container>
                <SectionHeading title='Work Experience' />
                <div className={styles.timelineWrapper}>
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className={styles.timelineItem}
                            data-aos='fade-up'
                            data-aos-delay={index * 100}
                        >
                            <div className={styles.dotWrapper}>
                                <span className={styles.dot}></span>
                            </div>
                            <div className={styles.info}>
                                <div className={styles.infoWrapper}>
                                    <h6 className={styles.title}>
                                        {item.title}
                                    </h6>
                                    <p className={styles.duration}>
                                        {item.duration}
                                    </p>
                                </div>
                                <p className={styles.company}>{item.company}</p>
                                {item.description && (
                                    <ul className={styles.description}>
                                        {item.description.map(
                                            (detail, index) => (
                                                <li
                                                    className={
                                                        styles.descriptionItem
                                                    }
                                                    key={index}
                                                >
                                                    {detail}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

const styles = {
    timelineWrapper:
        'space-y-[72px] lg:space-y-[88px] relative before:absolute before:inset-0 before:ml-[20px] before:-translate-x-px lg:before:mx-auto lg:before:translate-x-0 before:h-full before:w-0.5 before:bg-violet before:bg-opacity-30',
    timelineItem:
        'relative flex items-center justify-between lg:justify-normal lg:odd:flex-row-reverse group',
    dotWrapper:
        'flex items-center justify-center w-[40px] h-[40px] rounded-full bg-violet-light lg:left-[calc(50%-20px)] lg:absolute',
    dot: 'w-[12px] h-[12px] bg-violet-dark rounded-full',
    info: 'w-[calc(100%-56px)] sm:w-[calc(100%-72px)] lg:w-[calc(50%-64px)]',
    infoWrapper:
        'flex items-center justify-between gap-[8px] max-sm:flex-wrap max-sm:flex-col max-sm:items-start',
    title: 'font-semibold',
    duration: 'font-medium text-violet',
    company:
        'mt-[8px] mb-[16px] lg:mt-[12px] px-[16px] py-[8px] bg-violet-light inline-block text-violet rounded',
    description: 'list-disc ml-[16px]',
    descriptionItem: 'marker:text-violet-dark',
};

export default Timeline;
