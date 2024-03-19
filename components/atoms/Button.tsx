import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FC } from 'react';

type ButtonProps = {
    text: string;
    url: string;
    target?: string;
};

const Button: FC<ButtonProps> = ({ text, url, target = '_self' }) => {
    return (
        <Link href={url} className={styles.button} target={target}>
            {text} <ArrowRight size={18} className={styles.arrow} />
        </Link>
    );
};

const styles = {
    button: 'bg-violet inline-flex items-center justify-center gap-2 rounded-[26px] px-[24px] py-[12px] text-white transition-colors group hover:bg-violet-dark',
    arrow: 'transition-transform transform group-hover:translate-x-0.5',
};
export default Button;
