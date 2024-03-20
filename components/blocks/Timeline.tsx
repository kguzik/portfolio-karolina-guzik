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
        'space-y-20 lg:space-y-22 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px lg:before:mx-auto lg:before:translate-x-0 before:h-full before:w-0.5 before:bg-violet before:bg-opacity-30',
    timelineItem:
        'relative flex items-center justify-between lg:justify-normal lg:odd:flex-row-reverse group',
    dotWrapper:
        'flex items-center justify-center w-10 h-10 rounded-full bg-violet-light lg:left-[calc(50%-20px)] lg:absolute',
    dot: 'w-3 h-3 bg-violet-dark rounded-full',
    info: 'w-[calc(100%-56px)] sm:w-[calc(100%-72px)] lg:w-[calc(50%-64px)]',
    infoWrapper:
        'flex items-center justify-between gap-2 max-sm:flex-wrap max-sm:flex-col max-sm:items-start',
    title: 'font-semibold',
    duration: 'font-medium text-violet',
    company:
        'mt-2 mb-4 lg:mt-3 px-4 py-2 bg-violet-light inline-block text-violet rounded',
    description: 'list-disc ml-4',
    descriptionItem: 'marker:text-violet-dark',
};

export default Timeline;
