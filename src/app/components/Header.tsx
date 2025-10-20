import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div>
                    <Link href="/" className="text-2xl font-bold text-gray-800">
                        Plumbros Lofts
                    </Link>
                </div>
                <div className="hidden md:flex space-x-6">
                    <Link href="/" className="text-gray-600 hover:text-blue-500">Home</Link>
                    <Link href="/house-extension" className="text-gray-600 hover:text-blue-500">House Extension</Link>
                    <Link href="/loft-conversion" className="text-gray-600 hover:text-blue-500">Loft Conversion</Link>
                    <Link href="/portfolio" className="text-gray-600 hover:text-blue-500">Portfolio</Link>
                    <Link href="/blog" className="text-gray-600 hover:text-blue-500">Blog</Link>
                    <Link href="/contact" className="text-gray-600 hover:text-blue-500">Contact</Link>
                </div>
                {/* A placeholder for the mobile menu icon that we will implement later */}
                <div className="md:hidden">
                    <button className="text-gray-800 focus:outline-none">
                        {/* SVG Icon for the menu will go here */}
                        <p className="text-sm font-semibold">MENU</p>
                    </button>
                </div>
            </nav>
        </header>
    );
}