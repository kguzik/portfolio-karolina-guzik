import { FC } from 'react';
import Link from 'next/link';

type GradientLinkProps = {
    link: string;
    text: string;
};

const GradientLink: FC<GradientLinkProps> = ({ link, text }) => {
    return (
        <Link href={link}>
            <h5 className='gradient-text'>{text}</h5>
        </Link>
    );
};

export default GradientLink;
