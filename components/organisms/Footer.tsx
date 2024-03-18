import { contactDetails, navLinks, socialLinks } from '@/constants';
import GradientLink from '../atoms/GradientLink';
import Container from '../atoms/Container';
import NavLink from '../atoms/NavLink';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.footerWrapper}>
                    <GradientLink text={'Karolina Guzik'} link={'/'} />
                    {navLinks && (
                        <nav>
                            <ul className={styles.navList}>
                                {navLinks.map((link, index) => (
                                    <li key={index}>
                                        <NavLink
                                            href={link.url}
                                            label={link.label}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    )}
                    {socialLinks && (
                        <div className={styles.socials}>
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    target='_blank'
                                    rel='nofollow'
                                    className={styles.social}
                                >
                                    <link.icon
                                        strokeWidth={0}
                                        fill='currentColor'
                                    />
                                </a>
                            ))}
                        </div>
                    )}
                </div>
                {contactDetails && (
                    <div className={styles.contact}>
                        {contactDetails.map((detail, index) => (
                            <div
                                key={index}
                                className='flex gap-3 items-center'
                            >
                                <detail.icon
                                    size={20}
                                    className='text-violet'
                                />
                                <p>{detail.text}</p>
                            </div>
                        ))}
                    </div>
                )}
                <p className={styles.copyright}>
                    Copyright © {new Date().getFullYear()} Karolina Guzik All
                    rights reserved.
                </p>
            </Container>
        </footer>
    );
};

const styles = {
    footer: 'py-[40px] border-t border-grey-200',
    footerWrapper:
        'flex items-center justify-between gap-[20px] flex-wrap max-md:flex-col',
    socials: 'flex gap-[12px]',
    social: 'w-[40px] h-[40px] bg-violet text-white flex items-center justify-center transition-colors rounded hover:bg-violet-dark',
    navList: 'flex items-center gap-[32px]',
    contact:
        'mt-[48px] mx-auto flex gap-[10px] flex-col md:flex-row md:mt-[32px] items-center text-grey-600 w-max',
    copyright: 'mt-[32px] text-grey-600 text-center text-sm',
};

export default Footer;
