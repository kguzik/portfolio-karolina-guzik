import Image from 'next/image';
import Button from '../atoms/Button';
import Container from '../atoms/Container';
import { FC } from 'react';

type HeroProps = {
    imagePosition: 'left' | 'right';
    preheading?: string;
    title?: string;
    content?: string;
};

const Hero: FC<HeroProps> = ({ imagePosition, preheading, title, content }) => {
    if (!preheading && !title && !content) {
        return null;
    }

    const gridLayoutClass =
        imagePosition === 'right'
            ? 'lg:grid-cols-[1fr_420px]'
            : 'lg:grid-cols-[420px_1fr]';
    const imageClass = imagePosition === 'right' ? 'order-2' : 'lg:order-1';
    const contentClass =
        imagePosition === 'right'
            ? 'order-1 md:text-left md:items-start'
            : 'lg:order-2 md:text-right md:items-end';

    return (
        <section className='section-spacing'>
            <Container>
                <div
                    className={`grid lg:gap-x-[15%] gap-y-8 ${gridLayoutClass} items-center`}
                >
                    <div className={`${styles.contentWrapper} ${contentClass}`}>
                        {preheading && (
                            <p
                                className={styles.preheading}
                                data-aos='fade-down'
                            >
                                {preheading}
                            </p>
                        )}
                        {title && (
                            <h1
                                className={styles.title}
                                data-aos='fade-down'
                                data-aos-delay='100'
                            >
                                {title}
                            </h1>
                        )}
                        {content && (
                            <p
                                className={styles.content}
                                data-aos='fade-down'
                                data-aos-delay='200'
                            >
                                {content}
                            </p>
                        )}
                        <div
                            className={styles.buttonWrapper}
                            data-aos='fade-right'
                            data-aos-delay='300'
                        >
                            <Button
                                text={'View portfolio'}
                                url={'/portfolio'}
                            />
                        </div>
                        <div className={styles.textBox} data-aos='fade-up'>
                            <h3>
                                5
                                <span className={styles.textBoxCharacter}>
                                    +
                                </span>
                            </h3>
                            <p>Years of Experience</p>
                        </div>
                    </div>
                    <div
                        className={`${imageClass} relative mx-auto w-[280px] max-w-[90%] lg:w-[400px] after:content-[''] after:absolute after:bg-hero after:bg-no-repeat after:bg-contain after:max-w-[100%] after:w-[400px] after:h-[400px] after:top-3 after:left-[50%] after:z-[-1] lg:after:left-10 lg:after:transform-none after:-translate-x-1/2`}
                    >
                        <Image
                            src={'/images/karolinaguzik.jpg'}
                            width={300}
                            height={400}
                            alt='hero image'
                            className={styles.image}
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};

const styles = {
    wrapper: 'grid gap-13 lg:grid-cols-[1fr_420px] items-center',
    container: 'container mx-auto px-6',
    contentWrapper: 'text-center max-sm:overflow-hidden',
    textBox: 'py-4 px-7 rounded-lg bg-white inline-flex flex-col gap-2',
    textBoxCharacter: 'text-violet',
    preheading:
        'mb-5 px-4 py-2 bg-violet-light inline-block text-violet rounded',
    title: 'mb-6',
    content: 'mb-8',
    buttonWrapper: 'mb-8',
    image: 'mask object-top object-cover h-auto max-w-full w-[260px] h-[260px] lg:w-[400px] lg:h-[400px] max-lg:max-h-[280px] relative z-1',
};

export default Hero;
