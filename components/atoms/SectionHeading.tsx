import { FC } from 'react';

type SectionHeadingProps = {
    title: string;
    subtitle?: string;
};

const SectionHeading: FC<SectionHeadingProps> = ({ title, subtitle }) => {
    return (
        <div className={styles.wrapper}>
            <h2 data-aos='fade-up' data-aos-delay='100'>
                {title}
            </h2>
            {subtitle && (
                <p
                    className={styles.subtitle}
                    data-aos='fade-up'
                    data-aos-delay='200'
                >
                    {subtitle}
                </p>
            )}
        </div>
    );
};

const styles = {
    wrapper: 'max-w-xl mx-auto mb-12 text-center lg:mb-20',
    subtitle: 'mt-6 text-grey-600',
};

export default SectionHeading;
