import { FC } from 'react';
import Link from 'next/link';

type GradientLinkProps = {
    link: string;
    text: string;
};

const GradientLink: FC<GradientLinkProps> = ({ link, text }) => {
    return (
        <Link href={link}>
            <p className='gradient-text text-xl font-medium'>{text}</p>
        </Link>
    );
};

export default GradientLink;
