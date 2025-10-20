import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai'; // Import the close icon

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/house-extension", label: "House Extension" },
        { href: "/loft-conversion", label: "Loft Conversion" },
        { href: "/refurbishment", label: "Refurbishment" },
        { href: "/portfolio", label: "Portfolio" },
        { href: "/blog", label: "Blog" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <div 
            className={`fixed inset-0 z-50 transition-opacity duration-300 ease-in-out ${
                isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
        >
            <div 
                className="absolute inset-0 bg-black bg-opacity-60"
                onClick={onClose}
            ></div>
            <div 
                className={`absolute top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-xl transition-transform duration-300 ease-in-out ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="p-6 flex flex-col h-full">
                {/* --- NEW HEADER SECTION WITH CLOSE BUTTON --- */}
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-xl font-bold font-[var(--font-montserrat)] text-[var(--color-brand-dark)]">Menu</h2>
                        <button 
                            onClick={onClose} 
                            className="text-[var(--color-brand-dark)] hover:text-[var(--color-brand-primary)] transition-colors duration-200"
                            aria-label="Close menu"
                        >
                            <AiOutlineClose size={30} />
                        </button>
                    </div>
                
                    <nav className="flex-grow">
                        <ul className="space-y-4">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link 
                                        href={link.href}
                                        onClick={onClose}
                                        className="block py-2 text-lg font-semibold text-[var(--color-brand-dark)] hover:text-[var(--color-brand-primary)] transition-colors duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="mt-8 pt-6 border-t border-gray-200">
                        <div className="flex items-center justify-center space-x-6">
                            <a href="#" aria-label="Facebook" className="text-[var(--color-brand-dark)] hover:text-[var(--color-brand-primary)] transition-colors duration-200"><FaFacebookF size={32} /></a>
                            <a href="#" aria-label="Instagram" className="text-[var(--color-brand-dark)] hover:text-[var(--color-brand-primary)] transition-colors duration-200"><FaInstagram size={32} /></a>
                            <a href="#" aria-label="TikTok" className="text-[var(--color-brand-dark)] hover:text-[var(--color-brand-primary)] transition-colors duration-200"><FaTiktok size={32} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}