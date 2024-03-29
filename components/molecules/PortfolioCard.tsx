'use client';

import Image from 'next/image';
import { FC } from 'react';
import Button from '../atoms/Button';
import { PortfolioItem } from '@/types/types';

type PortfolioCardProps = {
    portfolio: PortfolioItem;
    index: number;
};

const PortfolioCard: FC<PortfolioCardProps> = ({ portfolio, index }) => {
    return (
        <div
            className={styles.card}
            data-aos='fade-up'
            data-aos-delay={index * 100}
        >
            <h3 className={styles.cardTitle}>{portfolio.title}</h3>
            {portfolio.description && (
                <p
                    className={styles.description}
                    dangerouslySetInnerHTML={{ __html: portfolio.description }}
                ></p>
            )}
            <div className={styles.wrapper}>
                <div className={styles.imageWrapper}>
                    <Image
                        src={portfolio.image}
                        alt={portfolio.title}
                        fill
                        className='object-cover'
                    />
                </div>
                <div className={styles.buttonWrapper}>
                    <Button
                        text={'Live'}
                        url={portfolio.link}
                        target={'_blank'}
                    />
                    {portfolio.githubLink && (
                        <Button
                            text={'GitHub'}
                            url={portfolio.githubLink}
                            target={'_blank'}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

const styles = {
    card: 'bg-white p-6 lg:p-12 rounded-lg flex flex-col h-full',
    cardTitle: 'mb-5 text-2xl font-medium',
    description:
        'mb-6 [&>a]:text-violet [&>a]:transition-opacity hover:[&>a]:opacity-80',
    wrapper: 'mt-auto',
    imageWrapper:
        'relative w-full h-[320px] rounded-lg overflow-hidden mb-4 lg:mb-6',
    buttonWrapper: 'flex flex-wrap gap-4',
};

export default PortfolioCard;
