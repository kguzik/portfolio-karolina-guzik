import { navLinks } from '@/constants';
import MobileMenu from './MobileMenu';
import NavLink from '../atoms/NavLink';
import Container from '../atoms/Container';
import GradientLink from '../atoms/GradientLink';

const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.wrapper}>
                    <GradientLink text={'Karolina Guzik'} link={'/'} />
                    <nav className={styles.nav}>
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
                    <MobileMenu />
                </div>
            </Container>
        </header>
    );
};

const styles = {
    header: 'border-b border-grey-200',
    wrapper: 'flex items-center justify-between h-20',
    nav: 'flex max-md:hidden',
    navList: 'flex items-center gap-8',
};

export default Header;
