"use client";

import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import MobileMenu from './MobileMenu';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    useEffect(() => {
        if (isMenuOpen) { document.body.style.overflow = 'hidden'; } 
        else { document.body.style.overflow = 'unset'; }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMenuOpen]);

    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY < lastScrollY || currentScrollY < 10) { setIsVisible(true); } 
            else { setIsVisible(false); }
            setLastScrollY(currentScrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <>
            <header 
                // --- Z-INDEX CHANGED HERE (z-50 to z-40) ---
                className={`bg-white shadow-md sticky top-0 z-40 transition-transform duration-300 ease-in-out ${
                    isVisible ? 'translate-y-0' : '-translate-y-full'
                }`}
            >
                <nav className="container mx-auto max-w-7xl px-4 py-2 flex justify-between items-center">
                    
                    {/* --- BREAKPOINT UPDATED HERE (md: to lg:) --- */}
                    <div className="hidden lg:flex items-center justify-start flex-1">
                        <Link href="/house-extension" className="uppercase whitespace-nowrap font-[var(--font-montserrat)] text-[var(--color-brand-dark)] hover:text-[var(--color-brand-primary)] font-semibold transition-colors duration-200 px-4 py-2">House Extension</Link>
                        <Link href="/loft-conversion" className="uppercase whitespace-nowrap font-[var(--font-montserrat)] text-[var(--color-brand-dark)] hover:text-[var(--color-brand-primary)] font-semibold transition-colors duration-200 px-4 py-2">Loft Conversion</Link>
                        <Link href="/refurbishment" className="uppercase whitespace-nowrap font-[var(--font-montserrat)] text-[var(--color-brand-dark)] hover:text-[var(--color-brand-primary)] font-semibold transition-colors duration-200 px-4 py-2">Refurbishment</Link>
                    </div>
                    
                    <div className="w-full lg:w-auto flex justify-center">
                        <Link href="/"><Image src="/logo.png" alt="Plumbros Lofts Logo" width={200} height={50} priority /></Link>
                    </div>
                    
                    {/* --- BREAKPOINT UPDATED HERE (md: to lg:) --- */}
                    <div className="hidden lg:flex items-center justify-end flex-1">
                        <Link href="/" className="uppercase whitespace-nowrap font-[var(--font-montserrat)] text-[var(--color-brand-dark)] hover:text-[var(--color-brand-primary)] font-semibold transition-colors duration-200 px-4 py-2">Home</Link>
                        <Link href="/portfolio" className="uppercase whitespace-nowrap font-[var(--font-montserrat)] text-[var(--color-brand-dark)] hover:text-[var(--color-brand-primary)] font-semibold transition-colors duration-200 px-4 py-2">Portfolio</Link>
                        <Link href="/blog" className="uppercase whitespace-nowrap font-[var(--font-montserrat)] text-[var(--color-brand-dark)] hover:text-[var(--color-brand-primary)] font-semibold transition-colors duration-200 px-4 py-2">Blog</Link>
                        <Link href="/contact" className="uppercase whitespace-nowrap font-[var(--font-montserrat)] text-[var(--color-brand-dark)] hover:text-[var(--color-brand-primary)] font-semibold transition-colors duration-200 px-4 py-2">Contact</Link>
                        <div className="flex items-center space-x-5 pl-5 border-l border-gray-200">
                            <a href="https://www.facebook.com/plum.kastrati/?locale=ms_MY" aria-label="Facebook" className="text-[var(--color-brand-dark)] hover:text-[var(--color-brand-primary)] transition-colors duration-200" target="_blank"><FaFacebookF size={28} /></a>
                            <a href="https://www.instagram.com/plumbroslofts/" aria-label="Instagram" className="text-[var(--color-brand-dark)] hover:text-[var(--color-brand-primary)] transition-colors duration-200" target="_blank"><FaInstagram size={28} /></a>
                            <a href="https://www.tiktok.com/@plum.bros.lofts" aria-label="TikTok" className="text-[var(--color-brand-dark)] hover:text-[var(--color-brand-primary)] transition-colors duration-200" target="_blank"><FaTiktok size={28} /></a>
                        </div>
                    </div>

                    {/* --- BREAKPOINT UPDATED HERE (md: to lg:) --- */}
                    <div className="lg:hidden">
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)} 
                            className="text-[var(--color-brand-dark)] focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                        </button>
                    </div>
                </nav>
            </header>
            
            <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    );
}