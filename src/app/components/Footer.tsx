import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto px-6 py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Plumbros Lofts</h3>
                        <p className="text-gray-400">
                        Your trusted partner for bespoke loft conversions and high-quality house extensions in the London area.
                        </p>
                    </div>

                    {/* Links Section */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                        <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
                        <li><Link href="/house-extension" className="text-gray-400 hover:text-white">House Extension</Link></li>
                        <li><Link href="/loft-conversion" className="text-gray-400 hover:text-white">Loft Conversion</Link></li>
                        <li><Link href="/portfolio" className="text-gray-400 hover:text-white">Portfolio</Link></li>
                        <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
                        <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
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