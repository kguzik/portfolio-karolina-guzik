import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import NextTopLoader from 'nextjs-toploader';
import { AOSInit } from '@/components/Aos';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
    title: 'Karolina Guzik - Frontend Developer',
    description:
        "I'm a detail-oriented Frontend Developer, experienced with various technologies including WordPress, PHP, JavaScript, React.js, and Next.js, focusing on creating responsive, high performance websites.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className={`bg-grey-100 ${poppins.className}`}>
                <AOSInit />
                <NextTopLoader color='#5700FF' showSpinner={false} />
                {children}
            </body>
        </html>
    );
}
