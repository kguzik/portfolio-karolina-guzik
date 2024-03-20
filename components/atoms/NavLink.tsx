'use client';

import Link from 'next/link';
import { FC } from 'react';
import { usePathname } from 'next/navigation';

type NavLinkProps = {
    href: string;
    label: string;
    className?: string;
};

const NavLink: FC<NavLinkProps> = ({ href, label, className }) => {
    const pathname = usePathname();
    return (
        <Link
            href={href}
            className={`py-3 text-gray-700 hover:text-violet transition-colors relative block after:block after:absolute after:left-0 after:h-0.5 after:bg-violet after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right after:hover:origin-left ${className}
            ${
                pathname === href
                    ? 'after:scale-x-100 after:origin-left'
                    : 'after:scale-x-0 after:origin-right'
            }
          `}
        >
            {label}
        </Link>
    );
};

export default NavLink;
