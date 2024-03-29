import { FC } from 'react';
import Container from '../atoms/Container';
import SectionHeading from '../atoms/SectionHeading';
import Button from '../atoms/Button';

type SkillsProps = {
    data: string[];
};

const Skills: FC<SkillsProps> = ({ data }) => {
    if (!data?.length) {
        return null;
    }

    return (
        <section className='section-spacing'>
            <Container>
                <SectionHeading
                    title='My Skills'
                    subtitle='As a Frontend Developer, I possess a very particular set of skills to bring web design to life.'
                />

                <div className={styles.skills}>
                    {data.map((skill, index) => (
                        <p
                            key={index}
                            className={styles.skill}
                            data-aos='fade-up'
                            data-aos-delay={index * 50}
                        >
                            {skill}
                        </p>
                    ))}
                </div>
                <div className={styles.buttonWrapper} data-aos='fade-up'>
                    <Button text={'About me'} url={'/about'} />
                </div>
            </Container>
        </section>
    );
};

const styles = {
    skills: 'flex justify-center items-align gap-5 flex-wrap lg:max-w-[85%] lg:mx-auto',
    skill: 'px-4 py-2 bg-violet-light text-violet rounded',
    buttonWrapper: 'flex justify-center mt-10 lg:mt-20',
};

export default Skills;
