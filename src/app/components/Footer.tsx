import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[var(--color-brand-dark)] text-white">
            <div className="container mx-auto px-6 py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-white">Plumbros Lofts</h3>
                        <p className="text-gray-400">
                            Your trusted partner for bespoke loft conversions and high-quality house extensions in the London area.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-gray-400 hover:text-[var(--color-brand-primary)] transition-colors duration-200">Home</Link></li>
                            <li><Link href="/house-extension" className="text-gray-400 hover:text-[var(--color-brand-primary)] transition-colors duration-200">House Extension</Link></li>
                            <li><Link href="/loft-conversion" className="text-gray-400 hover:text-[var(--color-brand-primary)] transition-colors duration-200">Loft Conversion</Link></li>
                            <li><Link href="/portfolio" className="text-gray-400 hover:text-[var(--color-brand-primary)] transition-colors duration-200">Portfolio</Link></li>
                            <li><Link href="/blog" className="text-gray-400 hover:text-[var(--color-brand-primary)] transition-colors duration-200">Blog</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-[var(--color-brand-primary)] transition-colors duration-200">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>London, UK</li>
                            <li>Phone: (123) 456-7890</li>
                            <li>Email: info@plumbroslofts.co.uk</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 text-center pt-6">
                    <p className="text-gray-500">&copy; {new Date().getFullYear()} Plumbros Lofts. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}