import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="w-full p-4 bg-white shadow-sm sticky top-0 z-50">
            <nav className="max-w-5xl mx-auto flex justify-between items-center">
                <Link href="/" className="text-lg font-semibold">
                    <Image
                        src="/images/portfolio_logo.png"
                        alt="Logo"
                        width={50}
                        height={50}
                    />
                </Link>
                <ul className="flex gap-6 text-sm text-gray-700">
                    <li><Link href="/about">Über mich</Link></li>
                    <li><Link href="/projects">Projekte</Link></li>
                    <li><Link href="/contact">Kontakt</Link></li>
                </ul>
            </nav>
        </header>
    );
}