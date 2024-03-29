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
                                    aria-label={`${link.label} link`}
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
                                {detail.type === 'phone' ? (
                                    <a
                                        href={`tel:${detail.text}`}
                                        className={styles.detailLink}
                                    >
                                        {detail.text}
                                    </a>
                                ) : detail.type === 'email' ? (
                                    <a
                                        href={`mailto:${detail.text}`}
                                        className={styles.detailLink}
                                    >
                                        {detail.text}
                                    </a>
                                ) : (
                                    <p>{detail.text}</p>
                                )}
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
    footer: 'py-10 border-t border-grey-200',
    footerWrapper:
        'flex items-center justify-between gap-5 flex-wrap max-md:flex-col',
    socials: 'flex gap-3',
    social: 'w-10 h-10 bg-violet text-white flex items-center justify-center transition-colors rounded hover:bg-violet-dark',
    navList: 'flex items-center gap-8',
    contact:
        'mt-12 mx-auto flex gap-3 flex-col md:flex-row md:mt-8 items-center text-grey-600 w-max',
    copyright: 'mt-8 text-grey-600 text-center text-sm',
    detailLink: 'hover:text-violet transition-colors',
};

export default Footer;
