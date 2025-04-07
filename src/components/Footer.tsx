import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full py-4 mt-10 border-t text-center text-sm text-gray-500 ">
            <div className="footer">
                <h3>Wladi Moser</h3>
                <div className="links">
                    <Link className="me-2" href="/impressum">Impressum</Link>
                    <Link href="/datenschutz">Datenschutz</Link>
                </div>
            </div>
            <div className="copyright">
                <p className="mt-4">© {new Date().getFullYear()} Wladi Moser – Freelance Web Developer</p>
            </div>
        </footer>
    );
}