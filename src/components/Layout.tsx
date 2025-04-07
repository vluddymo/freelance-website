import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 w-full p-4">
                {children}
            </main>
            <Footer />
        </>
    );
}