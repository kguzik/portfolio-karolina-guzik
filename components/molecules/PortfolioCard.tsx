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
            <h4 className='mb-5'>{portfolio.title}</h4>
            <div className={styles.imageWrapper}>
                <Image
                    src={portfolio.image}
                    alt={portfolio.title}
                    fill
                    className='object-cover'
                />
            </div>
            <div className={styles.buttonWrapper}>
                <Button text={'Live'} url={portfolio.link} target={'_blank'} />
                {portfolio.githubLink && (
                    <Button
                        text={'GitHub'}
                        url={portfolio.githubLink}
                        target={'_blank'}
                    />
                )}
            </div>
        </div>
    );
};

const styles = {
    card: 'bg-white p-[24px] lg:p-[48px] rounded-lg',
    imageWrapper:
        'relative w-full h-[320px] rounded-lg overflow-hidden mb-[16px] lg:mb-[24px]',
    buttonWrapper: 'flex flex-wrap gap-[16px]',
};

export default PortfolioCard;
