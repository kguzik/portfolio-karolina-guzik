import Footer from '@/components/organisms/Footer';
import Header from '@/components/organisms/Header';

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            <main className='min-h-screen'>{children}</main>
            <Footer />
        </>
    );
};

export default layout;
