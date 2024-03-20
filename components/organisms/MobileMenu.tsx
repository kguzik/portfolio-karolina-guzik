'use client';

import { navLinks } from '@/constants';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import NavLink from '../atoms/NavLink';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Container from '../atoms/Container';
import GradientLink from '../atoms/GradientLink';

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (isOpen) {
            document.body.style.overflow = 'auto';
        } else {
            document.body.style.overflow = 'hidden';
        }
    };

    useEffect(() => {
        setIsOpen(false);
        document.body.style.overflow = 'auto';
    }, [pathname]);

    return (
        <div className='md:hidden'>
            <button className={styles.mobileButton} onClick={toggleMenu}>
                <Image
                    src={'/icons/hamburger.svg'}
                    alt={'icon'}
                    width={25}
                    height={25}
                />
            </button>
            <div
                className={`w-full h-full flex flex-col bg-grey-100 fixed top-0
      left-0 z-50 transition-all duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
            >
                <div className={styles.menuTop}>
                    <Container>
                        <div className={styles.menuWrapper}>
                            <GradientLink text={'Karolina Guzik'} link={'/'} />
                            <button
                                className={styles.mobileButton}
                                onClick={toggleMenu}
                            >
                                <X size={25} />
                            </button>
                        </div>
                    </Container>
                </div>
                {isOpen && (
                    <nav className={styles.nav}>
                        <ul className={styles.navList}>
                            {navLinks.map((link, index) => (
                                <li
                                    key={index}
                                    data-aos='fade-up'
                                    data-aos-delay={index * 100}
                                >
                                    <NavLink
                                        href={link.url}
                                        label={link.label}
                                        className='text-3xl'
                                    />
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}
            </div>
        </div>
    );
};

const styles = {
    menuTop: 'border-b border-grey-200 w-full',
    menuWrapper: 'flex items-center justify-between h-20',
    mobileButton: 'hover:text-violet transition-colors',
    nav: 'flex flex-col items-center justify-center gap-10 flex-1',
    navList: 'flex flex-col items-center gap-5',
};

export default MobileMenu;
